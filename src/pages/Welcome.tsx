import {Card, Col, Row} from 'antd';
import 'monaco-editor/min/vs/editor/editor.main.css';
import React from "react";
import {SqlEditor} from "@/components/SqlEditor";

const Welcome: React.FC = () => {
  return (
    <>
      <Row>
        <Col span={11}>
          <Card>
            <SqlEditor/>
          </Card>
        </Col>
        <Col span={12} style={{marginLeft: 10}}><Card>1111</Card></Col>
      </Row>
    </>
  );

};
export default Welcome;

