import React from 'react';
import {Card, Tabs} from 'antd';
import {SqlResultTable} from './SqlResultTable';
import {AlignLeftOutlined, AreaChartOutlined, SunOutlined} from "@ant-design/icons";

interface QueryExecResult {
  columns: string[];
  values: any[][];
}

interface Props {
  result: QueryExecResult[];
  answerResult: QueryExecResult[];
  resultStatus: number;
  errorMsg?: string;
  // level?: LevelType;
}

const RESULT_STATUS_INFO_MAP: Record<number, string> = {
  // 映射状态码到描述信息
  0: '失败❌',
  1: '通过✅',
  // 添加其他状态映射
};

export const SqlResultCard: React.FC<Props> = ({
                                                 result = [],
                                                 // answerResult = [],
                                                 resultStatus,
                                                 errorMsg = '',
                                                 // level,
                                               }) => {
  return (
    <>
      <Tabs>
        <Tabs.TabPane tab="执行结果" key="1" icon={<AlignLeftOutlined/>}>
          <Card
            id="sqlResult"
            title="Result"
            extra={RESULT_STATUS_INFO_MAP[resultStatus]}
            bordered={false}
            style={{maxHeight: '420px', overflowY: 'auto'}}
          >
            {!errorMsg ? (
              <SqlResultTable result={result}/>
            ) : (
              <div>❌ 语句错误：{errorMsg}</div>
            )}
          </Card>
        </Tabs.TabPane>
        <Tabs.TabPane tab="执行计划" key="2" icon={<AreaChartOutlined/>}>
          Content of Tab Pane 2
        </Tabs.TabPane>
        <Tabs.TabPane tab="优化建议" key="3" icon={<SunOutlined/>}>
          Content of Tab Pane 3
        </Tabs.TabPane>
      </Tabs>
    </>

  );
};
