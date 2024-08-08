import React, {useRef, useState} from "react";
import {BackTop, Button, Card, Col, message, Radio, RadioChangeEvent, Row, Select, Space, Upload} from "antd";
import {PageContainer} from "@ant-design/pro-components";
import './index.less';
import {useSearchParams} from "@@/exports";
import GenerateResultCard from "@/components/GenerateResultCard/GenerateResultCard";

const CodeGenerate: React.FC = () => {
  const [result, setResult] = useState<any>();
  const [autoInputModalVisible, setAutoInputModalVisible] = useState(false);
  const [jsonInputModalVisible, setJsonInputModalVisible] = useState(false);
  const [sqlInputModalVisible, setSqlInputModalVisible] = useState(false);
  const [importTableDrawerVisible, setImportTableDrawerVisible] =
    useState(false);
  const [genLoading, setGenLoading] = useState(false);
  const formInputRef: any = useRef();
  const [layout, setLayout] = useState('half');

  const [searchParams] = useSearchParams();

  /**
   * 更改布局
   * @param e
   */
  const onLayoutChange = (e: RadioChangeEvent) => {
    setLayout(e.target.value);
  };
  /**
   * 输入配置视图
   */
  const inputConfigView = (
    <Card
      title="输入配置"
      extra={
        <Select defaultValue="MySQL" style={{width: 120}} disabled>
          <Select.Option value="MySQL">MySQL</Select.Option>
        </Select>
      }
    >
      <Space size="large" wrap>
        <Button
          type="primary"
          ghost
          onClick={() => setAutoInputModalVisible(true)}
        >
          智能导入
        </Button>
        <Button onClick={() => setImportTableDrawerVisible(true)}>
          导入表
        </Button>
        <Button onClick={() => setJsonInputModalVisible(true)}>导入配置</Button>
        <Button onClick={() => setSqlInputModalVisible(true)}>
          导入建表 SQL
        </Button>
        {/*<Upload {...uploadProps}>*/}
        <Upload>
          <Button>导入 Excel</Button>
        </Upload>
      </Space>
      <div style={{marginTop: 16}}/>
      {/*<FormInput ref={formInputRef} onSubmit={doGenerateBySchema}/>*/}
    </Card>
  );

  return (
    <div id="indexPage">
      <PageContainer
        title={
          <>
            快来生成属于你的代码吧🥳～
          </>
        }
        extra={
          <div style={{marginLeft: 0}}>
            切换布局：
            <Radio.Group onChange={onLayoutChange} value={layout}>
              <Radio.Button value="input">配置</Radio.Button>
              <Radio.Button value="half">同屏</Radio.Button>
              <Radio.Button value="output">结果</Radio.Button>
            </Radio.Group>
          </div>
        }
      >
        <Row gutter={[12, 12]}>
          <Col
            xs={24}
            xl={layout === 'half' ? 12 : 24}
            order={layout === 'output' ? 2 : 1}
          >
            {inputConfigView}
          </Col>
          <Col
            xs={24}
            xl={layout === 'half' ? 12 : 24}
            order={layout === 'output' ? 1 : 2}
          >
            <GenerateResultCard result={result} loading={genLoading}/>
          </Col>
        </Row>
        <BackTop/>
      </PageContainer>
      {/*<AutoInputModal*/}
      {/*  onSubmit={importTableSchema}*/}
      {/*  visible={autoInputModalVisible}*/}
      {/*  onClose={() => setAutoInputModalVisible(false)}*/}
      {/*/>*/}
      {/*<JsonInputModal*/}
      {/*  onSubmit={importTableSchema}*/}
      {/*  visible={jsonInputModalVisible}*/}
      {/*  onClose={() => setJsonInputModalVisible(false)}*/}
      {/*/>*/}
      {/*<SqlInputModal*/}
      {/*  onSubmit={importTableSchema}*/}
      {/*  visible={sqlInputModalVisible}*/}
      {/*  onClose={() => setSqlInputModalVisible(false)}*/}
      {/*/>*/}
      {/*<ImportTableDrawer*/}
      {/*  onImport={(tableInfo) => {*/}
      {/*    formInputRef.current.setFormValues(JSON.parse(tableInfo.content));*/}
      {/*    setImportTableDrawerVisible(false);*/}
      {/*    message.success('导入成功');*/}
      {/*  }}*/}
      {/*  visible={importTableDrawerVisible}*/}
      {/*  onClose={() => setImportTableDrawerVisible(false)}*/}
      {/*/>*/}
    </div>)
}

export default CodeGenerate;
