import {Button, Card, Col, Row} from 'antd';
import 'monaco-editor/min/vs/editor/editor.main.css';
import * as monaco from 'monaco-editor';
import React, {useEffect} from "react";

const Welcome: React.FC = () => {
  useEffect(() => {
    // @ts-ignore
    monaco.editor.create(document.getElementById('container'), {
      width: "600",
      height: "600",
      theme: "vs-dark",
      value: "-- 请在此处输入 SQL\n" +
        "select * from student",
      language: 'sql'
    });
  }, []);
  return (
    <>
      <Row>
        <Col span={11}><Card>
          <div style={{height: 400, width: 600}} id={"container"}/>
          <div style={{marginTop: 20}}>
            <Button type={"primary"} style={{width: 100}}>运行</Button>
            <Button>格式化</Button>
            <Button>重置</Button>
          </div>

        </Card></Col>
        <Col span={12} style={{marginLeft: 10}}><Card>1111</Card></Col>
      </Row>
    </>
  );

};
export default Welcome;

