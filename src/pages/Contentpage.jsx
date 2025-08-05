import React from "react";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons";
import { Layout, Breadcrumb, Menu, Checkbox, Radio, Slider, Col, Row, Flex, Button } from "antd";
import { GrClearOption } from "react-icons/gr";
import Stockviewport from "./Stockviewport";
const Contentpage = () => {
  const siderItems = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "Gender",
      children: [
        {
          key: "10",
          label: <Checkbox>Male</Checkbox>
        },
        {
          key: "20",
          label: <Checkbox>Female</Checkbox>
        },
        {
          key: "30",
          label: <Checkbox>Other</Checkbox>
        }
      ]
    },
    {
      key: "2",
      icon: <LaptopOutlined />,
      label: "Categories",
      children: [
        {
          key: "11",
          label: <Radio>Web Development</Radio>
        },
        {
          key: "12",
          label: <Radio>Mobile Apps</Radio>
        },
        {
          key: "13",
          label: <Radio>Desktop Software</Radio>
        }
      ]
    },
    {
      key: "3",
      icon: <NotificationOutlined />,
      label: "Prices",
      children: [
        {
          key: "31",
          label: (
            <div className="flex flex-col min-h-[80px] py-3 px-2 space-y-2">
              <div className="flex justify-between items-center text-xs text-gray-600">
                <span>Price Range</span>
                <span>$200 - $500</span>
              </div>
              <div className="w-full">
                <Slider
                  range
                  min={1}
                  max={800}
                  defaultValue={[200, 500]}
                  tooltip={{
                    formatter: (value) => `$${value}`,
                    placement: "bottom"
                  }}
                  marks={{
                    1: { label: "$1", style: { fontSize: "10px" } },
                    200: { label: "$200", style: { fontSize: "10px" } },
                    500: { label: "$500", style: { fontSize: "10px" } },
                    800: { label: "$800", style: { fontSize: "10px" } }
                  }}
                  className="w-full pt-2"
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>$1</span>
                <span>$800</span>
              </div>
            </div>
          )
        }
      ]
    }
  ];
  return (
    <div className="w-14/15 mx-auto px-4">
      <Row gutter={[24, 24]} className="rounded-lg shadow-lg shadow-cyan-100/50 hover:shadow-xl transition-shadow">
        {/* Sidebar */}
        <Col
          xs={0}
          sm={0}
          md={6}
          lg={5}
          xl={4}
          style={{
            background: "var(--secondary-color)",
            borderRadius: "1rem 0 0 1rem",
            padding: "1rem",
            position: "relative"
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["1", "2", "3"]}
            items={siderItems}
            style={{
              background: "transparent",
              border: "none"
            }}
          />
          <div className="flex justify-between items-center text-xs text-gray-600 mb-2">
            <span>Price Range</span>
            <span>$800 - Upper+</span>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "1rem",
              left: "1rem",
              right: "1rem"
            }}
          >
            <Button className="w-full">
              Clear All <GrClearOption className="inline-block ml-1" />
            </Button>
          </div>
        </Col>

        {/* Content Area */}
        <Col
          xs={24}
          sm={24}
          md={18}
          lg={24}
          xl={20}
          style={{
            background: "var(--background-color)",
            borderRadius: "0 1rem 1rem 0",
            padding: "24px",
            minHeight: "75vh",
            border: "1px solid var(--tertiary-color)"
          }}
        >
          {/* Check if Contentpage exists */}
          <Stockviewport />
        </Col>
      </Row>
    </div>
  );
};

export default Contentpage;
