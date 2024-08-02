import React from 'react';
import {Card} from 'antd';
import {SqlResultTable} from './SqlResultTable';

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
  0: '状态0',
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
    <Card
      id="sqlResult"
      title="执行结果"
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
  );
};
