/* filepath: c:\Users\tvc45\CoderStore\CoderStore\src\pages\Stockviewport.jsx */
import React from "react";
import { Layout, Breadcrumb, Menu, Checkbox, Radio, Slider, Col, Row, Input, Space, Button } from "antd";

const Stockviewport = () => {
  return (
    <div className="mx-auto px-4">
      <Row gutter={[16, 16]}>
        {/* Search Section - 8 spans */}
        <Col span={8} className="flex justify-between items-center py-6">
          <div className="w-full space-y-2">
            <Input.Search placeholder="Search products..." enterButton />
            <Input.Search placeholder="Search categories..." enterButton />
          </div>
        </Col>

        {/* Actions Section - 16 spans */}
        <Col span={16} className="flex justify-end items-center py-6">
          <Space>
            <Button type="default">Wishlist</Button>
            <Button type="primary">Add to Cart</Button>
          </Space>
        </Col>
      </Row>

      {/* Additional content row */}
      <Row gutter={[16, 16]}>
        <Col span={24}>{/* Your product grid or content here */}</Col>
      </Row>
    </div>
  );
};

export default Stockviewport;
