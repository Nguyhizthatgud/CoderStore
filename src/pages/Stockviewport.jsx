import React, { useEffect, useState, useMemo } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Navigate, Link, useNavigate } from "react-router-dom";

import {
  Layout,
  Breadcrumb,
  Menu,
  Checkbox,
  Radio,
  Slider,
  Col,
  Row,
  Input,
  Space,
  Button,
  Cascader,
  Card,
  Typography,
  Badge,
  Rate,
  Spin,
  Skeleton,
  Select,
  notification,
  Empty
} from "antd";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  EyeOutlined,
  TruckOutlined,
  SafetyOutlined,
  ReloadOutlined,
  PhoneOutlined
} from "@ant-design/icons";
import ApiService from "../../ApiService";

import FormTextField from "../components/Form4AntDesign/FormTextField";
import FormSelect from "../components/Form4AntDesign/FormSelect";
import { orderBy } from "lodash";
const { Title, Text, Paragraph } = Typography;
const { Meta } = Card;
import { LuScanSearch } from "react-icons/lu";
const Stockviewport = ({ filterProps }) => {
  const [products, setProducts] = useState([]);
  const [spinning, setSpinning] = useState(false);
  const [percent, setPercent] = useState(0);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };
  const SELECT_OPTIONS = [
    {
      value: "Features",
      label: "Features"
    },
    {
      value: "Established",
      label: "Newly Established"
    },
    {
      value: "Price1",
      label: "Price: High to Low"
    },
    {
      value: "Price2",
      label: "Price: Low to High"
    }
  ];
  const defaultValues = useMemo(
    () => ({
      search: (filterProps && filterProps.search) ?? "",
      type: (filterProps && filterProps.type) ?? "Features",
      ...filterProps
    }),
    [filterProps]
  );
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Toang rồi Đại Vương ơi!",
      description: "Server em run ở Port 8000."
    });
  };
  const methods = useForm({ defaultValues });
  const { watch, reset } = methods;
  const filters = watch();
  const allFilters = useMemo(
    () => ({
      ...filters,
      ...filterProps
    }),
    [filters, filterProps]
  );
  const applyFilter = (products, allFilters) => {
    const sortBy = allFilters?.type || allFilters?.sortBy;
    const gender = allFilters?.gender || [];
    const category = allFilters?.category;
    const priceRange = allFilters?.priceRange;
    const search = allFilters?.search || "";
    let filteredProducts = [...products];
    if (sortBy === "Features") {
      filteredProducts = orderBy(filteredProducts, ["sold"], ["desc"]);
    } else if (sortBy === "Established") {
      filteredProducts = orderBy(filteredProducts, ["createdAt"], ["desc"]);
    } else if (sortBy === "Price1") {
      filteredProducts = orderBy(filteredProducts, ["price"], ["desc"]);
    } else if (sortBy === "Price2") {
      filteredProducts = orderBy(filteredProducts, ["price"], ["asc"]);
    }

    //sort by search
    if (search) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    //sort by priceRange
    if (Array.isArray(priceRange) && priceRange.length === 2) {
      filteredProducts = filteredProducts.filter(
        (product) => Number(product.price) >= priceRange[0] && Number(product.price) <= priceRange[1]
      );
    }
    //sort by gender
    if (gender.length > 0) {
      filteredProducts = filteredProducts.filter((product) => gender.includes(product.gender));
    }
    //sort by Category
    if (category && category !== "All") {
      filteredProducts = filteredProducts.filter((product) => product.category === category);
    }
    return filteredProducts;
  };
  const filterProducts = useMemo(() => applyFilter(products, allFilters), [products, allFilters]);

  useEffect(() => {
    reset(defaultValues);
  }, [reset, defaultValues]);
  useEffect(() => {
    const getData = async () => {
      setSpinning(true);
      try {
        const response = await ApiService.get("/products");
        setProducts(response.data);
      } catch (error) {
        setPercent(100);
        setError(error.message);
        openNotificationWithIcon("error");
      } finally {
        setSpinning(false);
      }
    };
    getData();
  }, []);

  return (
    <FormProvider {...methods}>
      {contextHolder}
      <div className="w-full mx-auto">
        <Spin spinning={spinning} percent={percent} fullscreen />
        <Row gutter={[16, 16]}>
          {/* Search Section - 8 spans */}
          <Col span={8} className="flex justify-between items-center py-6">
            <div className="w-full space-y-2">
              <FormTextField name="search" placeholder="Search products..." />
            </div>
          </Col>

          <Col span={16} className="flex items-center py-6">
            <Space className="w-full justify-end">
              <FormSelect
                name="type"
                style={{
                  width: "230px"
                }}
                options={SELECT_OPTIONS}
                placeholder="Select type"
                prefix={<LuScanSearch />}
              />
            </Space>
          </Col>
        </Row>

        <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
          <Col span={24} className="bg-white rounded-lg shadow-md" style={{ padding: "1rem" }}>
            <div className="">
              <div className="">
                <section style={{ marginBottom: "64px" }}>
                  <Row gutter={[16, 16]}>
                    {filterProducts.length > 0 ? (
                      filterProducts.map((shoe, idx) => (
                        <Col xs={24} sm={12} md={8} lg={6} key={idx}>
                          <Card
                            onClick={() => handleClick(shoe.id)}
                            hoverable
                            cover={
                              <div>
                                <img
                                  alt={shoe.name}
                                  src={shoe.cover}
                                  style={{ height: "250px", objectFit: "cover", width: "100%" }}
                                />
                                <Link to={`/product/${shoe.id}`}>
                                  <div
                                    style={{
                                      position: "absolute",
                                      top: "8px",
                                      right: "8px",
                                      display: "flex",
                                      flexDirection: "column",
                                      gap: "8px"
                                    }}
                                  >
                                    <Button
                                      shape="circle"
                                      icon={<HeartOutlined />}
                                      style={{ backgroundColor: "white" }}
                                    />
                                    <Button
                                      shape="circle"
                                      icon={<EyeOutlined />}
                                      style={{ backgroundColor: "white" }}
                                    />
                                  </div>
                                </Link>
                              </div>
                            }
                            actions={[
                              <Button style={{ type: "primary", border: "none" }} icon={<ShoppingCartOutlined />} block>
                                Add to Cart
                              </Button>
                            ]}
                          >
                            <Meta
                              title={
                                <div>
                                  <Title level={5} style={{ margin: 0 }}>
                                    {shoe.name}
                                  </Title>
                                  <div style={{ marginTop: "8px" }}>
                                    <Rate disabled defaultValue={shoe.totalRating} style={{ fontSize: "14px" }} />
                                    <Text type="secondary" style={{ marginLeft: "8px" }}>
                                      ({shoe.totalReview})
                                    </Text>
                                  </div>
                                </div>
                              }
                              description={
                                <div>
                                  <Space>
                                    <Text strong style={{ fontSize: "18px", color: "#1890ff" }}>
                                      ${shoe.price}
                                    </Text>
                                    <Text delete type="secondary">
                                      {shoe.priceSale ? <span>${shoe.priceSale}</span> : null}
                                    </Text>
                                  </Space>
                                </div>
                              }
                            />
                          </Card>
                        </Col>
                      ))
                    ) : error ? (
                      <Col span={24}>
                        <Empty description={error} />
                      </Col>
                    ) : (
                      <Col span={24}>
                        <Skeleton active paragraph={{ rows: 18 }} />
                      </Col>
                    )}
                  </Row>
                </section>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </FormProvider>
  );
};

export default Stockviewport;
