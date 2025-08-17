import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Typography,
  Card,
  Button,
  Rate,
  Divider,
  Tabs,
  Image,
  Tag,
  Descriptions,
  InputNumber,
  Breadcrumb,
  Skeleton,
  Space,
  message,
  Badge,
  Carousel
} from "antd";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  HeartFilled,
  CheckCircleOutlined,
  StarOutlined,
  ShareAltOutlined,
  RightOutlined,
  HomeOutlined,
  LeftOutlined,
  PlusOutlined,
  MinusOutlined
} from "@ant-design/icons";
import ApiService from "../../ApiService";
import numeral from "numeral";

const { Title, Text, Paragraph } = Typography;

const Detailpage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  // Fetch product details
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        // get product match param ids
        const response = await ApiService.get(`/products/${id}`);
        const foundProduct = response.data || response;

        if (foundProduct) {
          setProduct(foundProduct);

          if (foundProduct.sizes && foundProduct.sizes.length > 0) {
            setSelectedSize(foundProduct.sizes[0]);
          }
          if (foundProduct.colors && foundProduct.colors.length > 0) {
            setSelectedColor(foundProduct.colors[0]);
          }
        } else {
          setError("Product not found");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError(error.message || "Failed to load product");
        setLoading(false);
        message.error("Failed to load product details");
      }
    };

    fetchProductDetails();
    window.scrollTo(0, 0);
  }, [id]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    message.success(isFavorite ? "Removed from favorites" : "Added to favorites");
  };

  // Loading state
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton active paragraph={{ rows: 10 }} />
      </div>
    );
  }

  // Product images for carousel
  const productImages = product.images || [product.cover];

  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <Row gutter={[32, 32]}>
          {/* product images */}
          <Col xs={24} md={12}>
            <Card>
              <Carousel dots={false} arrows afterChange={(current) => setSelectedImage(current)}>
                {/* product cover images */}
                <Image
                  src={product.cover}
                  alt={`${product.name} - Cover`}
                  style={{
                    width: "100%",
                    height: "500px",
                    objectFit: "cover",
                    borderRadius: "8px"
                  }}
                  preview={{
                    mask: <div>Click to preview</div>
                  }}
                />
              </Carousel>

              {/* Thumbnail images */}
              {productImages.length > 1 && (
                <div style={{ marginTop: "16px", display: "flex", gap: "8px", overflowX: "auto" }}>
                  {productImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        borderRadius: "4px",
                        cursor: "pointer",
                        border: selectedImage === index ? "2px solid #1890ff" : "2px solid transparent"
                      }}
                      onClick={() => setSelectedImage(index)}
                    />
                  ))}
                </div>
              )}
            </Card>
          </Col>

          {/* product details */}
          <Col xs={24} md={12}>
            <div>
              {/* Product Title and Rating */}
              <Title level={2} style={{ marginBottom: "8px" }}>
                {product.name}
              </Title>

              <Space style={{ marginBottom: "16px" }}>
                <Rate disabled defaultValue={product.totalRating || 4.5} />
                <Text type="secondary">({product.totalReview || 0} reviews)</Text>
                <Text type="secondary">|</Text>
                <Text type="secondary">{product.sold || 0} sold</Text>
              </Space>

              {/* Price */}
              <div style={{ marginBottom: "24px" }}>
                <Space align="baseline">
                  <Title level={3} style={{ color: "#1890ff", margin: 0 }}>
                    {numeral(product.price).format("$0,0.00")}
                  </Title>
                  {product.priceSale && (
                    <Text delete type="secondary" style={{ fontSize: "18px" }}>
                      {numeral(product.priceSale).format("$0,0.00")}
                    </Text>
                  )}
                  {product.priceSale && (
                    <Tag color="red">
                      {Math.round(((product.priceSale - product.price) / product.priceSale) * 100)}% OFF
                    </Tag>
                  )}
                </Space>
              </div>

              {/* product Tags */}
              <div style={{ marginBottom: "24px" }}>
                <Space wrap>
                  <Tag color="blue">{product.category}</Tag>
                  <Tag color="green">{product.gender}</Tag>
                  {product.featured && <Tag color="gold">Featured</Tag>}
                  {product.newArrival && <Tag color="orange">New Arrival</Tag>}
                </Space>
              </div>
              {/* size picker */}
              {product.sizes && product.sizes.length > 0 && (
                <div style={{ marginBottom: "24px" }}>
                  <Text strong style={{ display: "block", marginBottom: "8px" }}>
                    Size:
                  </Text>
                  <Space wrap>
                    {product.sizes.map((size) => (
                      <Button
                        key={size}
                        type={selectedSize === size ? "primary" : "default"}
                        onClick={() => setSelectedSize(size)}
                        style={{ minWidth: "50px" }}
                      >
                        {size}
                      </Button>
                    ))}
                  </Space>
                </div>
              )}
              {/* color picker */}
              {product.colors && product.colors.length > 0 && (
                <div style={{ marginBottom: "24px" }}>
                  <Text strong style={{ display: "block", marginBottom: "8px" }}>
                    Color:
                  </Text>
                  <Space wrap>
                    {product.colors.map((color) => (
                      <Button
                        key={color}
                        type={selectedColor === color ? "primary" : "default"}
                        onClick={() => setSelectedColor(color)}
                      >
                        {color}
                      </Button>
                    ))}
                  </Space>
                </div>
              )}

              {/* Quantity Selection */}
              <div style={{ marginBottom: "24px" }}>
                <Text strong style={{ display: "block", marginBottom: "8px" }}>
                  Quantity:
                </Text>
                <InputNumber min={1} max={99} value={quantity} style={{ width: "120px" }} />
              </div>
              {/* buttons group */}
              <Space direction="vertical" style={{ width: "100%" }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <Button type="primary" size="large" icon={<ShoppingCartOutlined />} block>
                      Add to Cart
                    </Button>
                  </Col>
                  <Col span={12}>
                    <Button
                      type="primary"
                      size="large"
                      block
                      style={{ backgroundColor: "#52c41a", borderColor: "#52c41a" }}
                    >
                      Buy Now
                    </Button>
                  </Col>
                </Row>

                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <Button
                      size="large"
                      icon={isFavorite ? <HeartFilled /> : <HeartOutlined />}
                      onClick={toggleFavorite}
                      block
                      type={isFavorite ? "primary" : "default"}
                      danger={isFavorite}
                    >
                      {isFavorite ? "Favorited" : "Add to Favorites"}
                    </Button>
                  </Col>
                  <Col span={12}>
                    <Button
                      size="large"
                      icon={<ShareAltOutlined />}
                      block
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        message.success("Product link copied to clipboard!");
                      }}
                    >
                      Share
                    </Button>
                  </Col>
                </Row>
              </Space>

              {/* Stock Status */}
              <div style={{ marginTop: "24px", padding: "16px", backgroundColor: "#f6ffed", borderRadius: "6px" }}>
                <Space>
                  <CheckCircleOutlined style={{ color: "#52c41a" }} />
                  <Text strong style={{ color: "#52c41a" }}>
                    In Stock
                  </Text>
                  <Text type="secondary">- Ready to ship</Text>
                </Space>
              </div>
            </div>
          </Col>
        </Row>

        {/* Product Tabs - Description, Specifications, Reviews */}
        <div className="mt-8"></div>

        {/* Related Products Section */}
        <div className="mt-8">
          <Title level={4} className="mb-4">
            You might also like
          </Title>
          <Card>
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <Text type="secondary">Related products will be displayed here</Text>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Detailpage;
