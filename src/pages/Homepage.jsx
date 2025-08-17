/* filepath: c:\Users\tvc45\CoderStore\CoderStore\src\pages\Homepage.jsx */
import React from "react";
import { Layout, Button, Row, Col, Card, Typography, Space, Rate, Badge, Input, Carousel, Image } from "antd";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  SearchOutlined,
  TruckOutlined,
  SafetyOutlined,
  ReloadOutlined
} from "@ant-design/icons";

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;
const { Meta } = Card;

const Homepage = () => {
  // Enhanced shoe data for carousel backgrounds
  const shoes = [
    {
      id: 1,
      name: "Nike Air Max",
      price: 120,
      originalPrice: 150,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920&h=1080&fit=crop",
      rating: 4.5,
      isNew: true,
      description: "Revolutionary cushioning meets iconic style",
      category: "Athletic"
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      price: 180,
      originalPrice: 200,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1920&h=1080&fit=crop",
      rating: 4.8,
      isNew: false,
      description: "Energy return technology for peak performance",
      category: "Running"
    },
    {
      id: 3,
      name: "Converse Classic",
      price: 65,
      originalPrice: 80,
      image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=1920&h=1080&fit=crop",
      rating: 4.3,
      isNew: true,
      description: "Timeless style that never goes out of fashion",
      category: "Casual"
    },
    {
      id: 4,
      name: "Vans Old Skool",
      price: 60,
      originalPrice: 75,
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=1920&h=1080&fit=crop",
      rating: 4.6,
      isNew: false,
      description: "Skate culture meets street style",
      category: "Lifestyle"
    },
    {
      id: 5,
      name: "Puma Suede",
      price: 90,
      originalPrice: 110,
      image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1920&h=1080&fit=crop",
      rating: 4.4,
      isNew: false,
      description: "Classic suede meets modern comfort",
      category: "Retro"
    },
    {
      id: 6,
      name: "New Balance 990",
      price: 175,
      originalPrice: 200,
      image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=1920&h=1080&fit=crop",
      rating: 4.7,
      isNew: true,
      description: "Made in USA premium craftsmanship",
      category: "Premium"
    }
  ];

  return (
    <div style={{ minHeight: "100vh", overflow: "hidden" }}>
      {/* Hero Carousel Section with Shoes Background */}
      <section style={{ position: "relative", height: "80vh", minHeight: "600px", overflow: "hidden" }}>
        <Carousel
          autoplay
          autoplaySpeed={4000}
          effect="fade"
          dots={true}
          dotPosition="bottom"
          style={{ height: "100%" }}
        >
          {shoes.map((shoe) => (
            <div key={shoe.id}>
              <div
                style={{
                  position: "relative",
                  height: "80vh",
                  minHeight: "600px",
                  maxHeight: "800px",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {/* Background Image */}
                <img
                  src={shoe.image}
                  alt={shoe.name}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    zIndex: 1
                  }}
                />

                {/* Dark Overlay for better text readability */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5))",
                    zIndex: 2
                  }}
                />

                {/* Content Overlay */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 3,
                    textAlign: "center",
                    color: "white",
                    maxWidth: "700px",
                    padding: "0 20px"
                  }}
                >
                  {/* Category Badge */}
                  <div style={{ marginBottom: "20px" }}>
                    <Badge
                      count={shoe.category}
                      style={{
                        backgroundColor: "#ff4d4f",
                        fontSize: "14px",

                        borderRadius: "20px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.3)"
                      }}
                    />
                  </div>

                  {/* Shoe Name */}
                  <Title
                    level={1}
                    style={{
                      color: "white",
                      fontSize: "clamp(2.5rem, 6vw, 5rem)",
                      marginBottom: "20px",
                      textShadow: "3px 3px 6px rgba(0,0,0,0.8)",
                      fontWeight: "900",
                      lineHeight: 1.1
                    }}
                  >
                    {shoe.name}
                  </Title>

                  {/* Description */}
                  <Paragraph
                    style={{
                      color: "white",
                      fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
                      marginBottom: "25px",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                      maxWidth: "600px",
                      margin: "0 auto 25px auto"
                    }}
                  >
                    {shoe.description}
                  </Paragraph>

                  {/* Rating */}
                  <div style={{ marginBottom: "25px" }}>
                    <Rate disabled defaultValue={shoe.rating} style={{ color: "#faad14", fontSize: "20px" }} />
                    <Text
                      style={{
                        color: "white",
                        marginLeft: "15px",
                        fontSize: "18px",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.8)"
                      }}
                    >
                      ({shoe.rating}/5)
                    </Text>
                  </div>

                  {/* Price */}
                  <div style={{ marginBottom: "35px" }}>
                    <Space size="large">
                      <Text
                        strong
                        style={{
                          fontSize: "clamp(2rem, 5vw, 3rem)",
                          color: "#52c41a",
                          textShadow: "3px 3px 6px rgba(0,0,0,0.8)"
                        }}
                      >
                        ${shoe.price}
                      </Text>
                      <Text
                        delete
                        style={{
                          fontSize: "clamp(1.2rem, 3vw, 2rem)",
                          color: "rgba(255,255,255,0.8)",
                          textShadow: "2px 2px 4px rgba(0,0,0,0.8)"
                        }}
                      >
                        ${shoe.originalPrice}
                      </Text>
                    </Space>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        {/* Floating Search Bar */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            width: "100%",
            maxWidth: "600px"
          }}
        >
          <Card
            style={{
              borderRadius: "25px",
              backgroundColor: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(10px)",
              border: "none",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
            }}
          >
            <Input.Search
              placeholder="Search shoes by brand, style, or color..."
              enterButton={
                <Button
                  type="primary"
                  icon={<SearchOutlined />}
                  style={{
                    backgroundColor: "#1890ff",
                    borderColor: "#1890ff"
                  }}
                >
                  Search
                </Button>
              }
              size="large"
              style={{ borderRadius: "20px" }}
            />
          </Card>
        </div>
      </section>

      <Content style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Quick Categories */}
        <section style={{ marginBottom: "80px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <Title level={2}>Shop by Category</Title>
          </div>
          <Row gutter={[24, 24]}>
            {["Athletic", "Running", "Casual", "Lifestyle", "Retro", "Premium"].map((category, index) => (
              <Col xs={12} sm={8} md={4} key={category}>
                <Card
                  hoverable
                  style={{
                    textAlign: "center",
                    borderRadius: "15px",
                    transition: "all 0.3s ease"
                  }}
                >
                  <Title level={4} style={{ margin: 0, color: "#1890ff" }}>
                    {category}
                  </Title>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Features Section */}
        <section style={{ marginBottom: "80px" }}>
          <Card style={{ borderRadius: "15px", padding: "20px" }}>
            <Row gutter={[40, 40]} style={{ textAlign: "center" }}>
              <Col xs={24} md={8}>
                <div>
                  <TruckOutlined style={{ fontSize: "48px", color: "#1890ff", marginBottom: "16px" }} />
                  <Title level={4}>Free Shipping</Title>
                  <Text type="secondary">Free delivery on orders over $100</Text>
                </div>
              </Col>
              <Col xs={24} md={8}>
                <div>
                  <ReloadOutlined style={{ fontSize: "48px", color: "#1890ff", marginBottom: "16px" }} />
                  <Title level={4}>Easy Returns</Title>
                  <Text type="secondary">30-day hassle-free returns</Text>
                </div>
              </Col>
              <Col xs={24} md={8}>
                <div>
                  <SafetyOutlined style={{ fontSize: "48px", color: "#1890ff", marginBottom: "16px" }} />
                  <Title level={4}>Secure Payment</Title>
                  <Text type="secondary">100% secure transactions</Text>
                </div>
              </Col>
            </Row>
          </Card>
        </section>
      </Content>
    </div>
  );
};

export default Homepage;
