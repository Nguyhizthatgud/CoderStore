import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { Button, Result, Typography, Space, Row, Col } from "antd";
import {
  HomeOutlined,
  ReloadOutlined,
  ArrowLeftOutlined,
  QuestionCircleOutlined,
  WarningOutlined,
  FrownOutlined
} from "@ant-design/icons";
import Mainlayout from "./Mainlayout";

const { Title, Text, Paragraph } = Typography;

const Errorpage = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  // Determine error type and message
  const errorStatus = error?.status || 500;
  const errorMessage = error?.message || "An unexpected error has occurred";

  // Configure error UI based on status code
  const errorConfig = {
    404: {
      status: "404",
      title: "Page Not Found",
      subTitle: "Sorry, the page you visited does not exist.",
      icon: <QuestionCircleOutlined style={{ fontSize: 64 }} />,
      description:
        "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
    },
    403: {
      status: "403",
      title: "Access Denied",
      subTitle: "Sorry, you don't have access to this page.",
      icon: <WarningOutlined style={{ fontSize: 64 }} />,
      description:
        "You don't have permission to access this resource. Please contact an administrator if you believe this is an error."
    },
    500: {
      status: "500",
      title: "Server Error",
      subTitle: "Sorry, something went wrong on our end.",
      icon: <FrownOutlined style={{ fontSize: 64 }} />,
      description:
        "We're experiencing some issues with our servers. Please try again later or contact support if the problem persists."
    },
    default: {
      status: "Error",
      title: "Something Went Wrong",
      subTitle: errorMessage,
      icon: <WarningOutlined style={{ fontSize: 64 }} />,
      description: "An unexpected error occurred. Please try again or contact support if the problem persists."
    }
  };

  // Get the appropriate error configuration or use default
  const currentError = errorConfig[errorStatus] || errorConfig.default;

  // Navigation handlers
  const goHome = () => navigate("/");
  const goBack = () => navigate(-1);
  const refresh = () => window.location.reload();
  const contactSupport = () => navigate("/contact");

  return (
    <Mainlayout>
      <Row justify="center" align="middle" style={{ minHeight: "70vh" }}>
        <Col xs={22} sm={20} md={18} lg={16} xl={14}>
          <Result
            status={currentError.status}
            title={
              <Title level={2} style={{ margin: 0 }}>
                {currentError.title}
              </Title>
            }
            subTitle={
              <Text type="secondary" style={{ fontSize: 18 }}>
                {currentError.subTitle}
              </Text>
            }
            icon={currentError.icon}
            extra={
              <div className="error-actions">
                <Paragraph style={{ marginBottom: 24 }}>{currentError.description}</Paragraph>

                {/* Technical details (only for non-404 errors) */}
                {errorStatus !== 404 && error?.stack && (
                  <details className="error-details mb-6">
                    <summary>
                      <Text type="secondary">Technical Details</Text>
                    </summary>
                    <div
                      className="p-4 mt-2 bg-gray-50 rounded border border-gray-200 overflow-auto"
                      style={{ maxHeight: "200px" }}
                    >
                      <pre style={{ whiteSpace: "pre-wrap" }}>
                        <code>{error.stack}</code>
                      </pre>
                    </div>
                  </details>
                )}

                <Space size="middle" wrap>
                  <Button type="primary" icon={<HomeOutlined />} onClick={goHome}>
                    Back to Home
                  </Button>

                  <Button icon={<ArrowLeftOutlined />} onClick={goBack}>
                    Go Back
                  </Button>

                  <Button icon={<ReloadOutlined />} onClick={refresh}>
                    Try Again
                  </Button>

                  <Button onClick={contactSupport}>Contact Support</Button>
                </Space>
              </div>
            }
          />
        </Col>
      </Row>
    </Mainlayout>
  );
};

export default Errorpage;
