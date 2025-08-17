import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { UserOutlined, ShoppingCartOutlined, NotificationOutlined, DollarOutlined } from "@ant-design/icons";
import { Layout, Breadcrumb, Menu, Checkbox, Radio, Slider, Col, Row, Flex, Button, Space, Card, Divider } from "antd";

import { GrClearOption } from "react-icons/gr";
import Stockviewport from "./Stockviewport";
import FormMultiCheckBox from "../components/Form4AntDesign/FormMultiCheckBox";
import FormRadioGroup from "../components/Form4AntDesign/FormRadioGroup";

const CATEGORY_OPTIONS = [
  { label: "All", value: "All" },
  { label: "Shoes", value: "Shose" },
  { label: "Clothing", value: "Apparel" },
  { label: "Accessories", value: "Accessories" }
];
const GENDER_OPTIONS = [
  { label: "Male", value: "Men" },
  { label: "Female", value: "Women" },
  { label: "Kids", value: "Kids" }
];
const Contentpage = () => {
  const methods = useForm({
    defaultValues: {
      gender: [],
      category: "All",
      priceRange: [20, 50]
    }
  });
  const { setValue, reset } = methods;
  const watchedValues = methods.watch();
  // handle for sort values
  const handlePriceChange = (values) => {
    setValue("priceRange", values);
  };
  const handleClearAll = () => {
    reset();
  };
  return (
    <FormProvider {...methods}>
      <div className=" w-14/15 mx-auto">
        <Row gutter={[24, 24]} className="rounded-lg shadow-lg shadow-cyan-100/50 hover:shadow-xl transition-shadow">
          {/* Sidebar */}
          <Col
            xs={0}
            sm={0}
            md={6}
            style={{
              background: "var(--secondary-color)",
              borderRadius: "1rem 0 0 1rem",
              padding: "1.2rem",
              position: "sticky", // or "fixed"
              top: 0,
              height: "85vh",
              overflowY: "auto",
              zIndex: 10
            }}
          >
            <Space
              direction="vertical"
              block="true"
              size="small"
              style={{
                background: "transparent",
                border: "none",
                marginTop: "12px"
              }}
            >
              <div className="flex flex-col ">
                <div className="text-lg font-semibold mb-2">
                  <span className="flex items-center gap-2">
                    <UserOutlined />
                    Gender
                  </span>
                </div>
                <FormMultiCheckBox
                  name="gender"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "80px",
                    padding: "0.5rem 0.5rem 0.5rem 0.5rem",
                    gap: "0.5rem"
                  }}
                  options={GENDER_OPTIONS}
                />
              </div>
              <Divider style={{ margin: "1rem 0" }} />
              <div className="flex flex-col">
                <div className="flex text-lg font-semibold mb-2 gap-2">
                  {" "}
                  <ShoppingCartOutlined />
                  Category
                </div>
                <FormRadioGroup
                  name="category"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "80px",
                    padding: "0.5rem 0.5rem 0.5rem 0.5rem",
                    gap: "0.5rem"
                  }}
                  options={CATEGORY_OPTIONS}
                />
              </div>
            </Space>
            <Divider style={{ margin: "1rem 0" }} />
            <div className="flex flex-col mt-5 w-full">
              <div className="flex justify-between text-lg font-semibold mb-2 gap-2">
                <span className="flex items-center gap-2">
                  <DollarOutlined />
                  Price
                </span>
                <div className=" text-gray-500">
                  ${watchedValues.priceRange[0]} - ${watchedValues.priceRange[1]}
                </div>
              </div>
              <div className="flex flex-col ">
                <Slider
                  range
                  min={1}
                  max={100}
                  defaultValue={[20, 50]}
                  // ohmygoz react-hook-form here!
                  value={watchedValues.priceRange}
                  onChange={handlePriceChange}
                  tooltip={{
                    formatter: (value) => `$${value}`,
                    placement: "bottom"
                  }}
                  marks={{
                    1: { label: "$1", style: { fontSize: "10px" } },
                    20: { label: "$20", style: { fontSize: "10px" } },
                    50: { label: "$50", style: { fontSize: "10px" } },
                    100: { label: "$100", style: { fontSize: "10px" } }
                  }}
                  className="w-full"
                />
              </div>
            </div>

            <div className="flex justify-between items-center text-xs text-gray-600 mb-2">
              <span>Price Range</span>
              <span>$100 - Upper+</span>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "1rem",
                left: "1rem",
                right: "1rem"
              }}
            >
              <Button className="w-full" onClick={handleClearAll}>
                Clear All <GrClearOption className="inline-block ml-1" />
              </Button>
            </div>
          </Col>

          {/* Content Area */}
          <Col
            xs={24}
            sm={24}
            md={18}
            lg={18}
            style={{
              background: "var(--background-color)",
              borderRadius: "0 1rem 1rem 0",
              padding: "24px",
              minHeight: "75vh",
              border: "1px solid var(--tertiary-color)"
            }}
          >
            <Stockviewport filterProps={watchedValues} />
          </Col>
        </Row>
      </div>
    </FormProvider>
  );
};

export default Contentpage;
