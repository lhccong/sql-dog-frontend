import {Card, Col, Row} from 'antd';
import 'monaco-editor/min/vs/editor/editor.main.css';
import React, {useState} from "react";
import {SqlEditor} from "@/components/SqlEditor";
import {QueryExecResult} from "sql.js";
import {SqlResultCard} from "@/components/SqlResult";


const Welcome: React.FC = () => {
  const [result, setResult] = useState<QueryExecResult[]>(
    [{
      columns: ['a', 'b'],
      values: [
        [0, 'hello'],
        [1, 'world'],
      ],
    }]
  )
  const handleResult = (result: any) => {
    console.log("获取到执行结果啦", result);
    setResult(result)
  };
  return (
    <>
      <Row>
        <Col span={11}>
          <Card>
            <SqlEditor onSubmit={handleResult}/>
          </Card>
        </Col>
        <Col span={12} style={{marginLeft: 10}}><SqlResultCard result={result}
                                                               answerResult={result}
                                                               resultStatus={1}/></Col>
      </Row>
    </>
  );

};
export default Welcome;

