import {Card, Col, Empty, Row} from 'antd';
import 'monaco-editor/min/vs/editor/editor.main.css';
import React, {useEffect, useState} from "react";
import {SqlEditor} from "@/components/SqlEditor/SqlEditor";
import {QueryExecResult} from "sql.js";
import {SqlResultCard} from "@/components/SqlResult/SqlResult";


const Square: React.FC = () => {
  const [initSQL, setInitSQL] = useState('');
  const [loading, setLoading] = useState(true);
  const [sqlExecResult, setSqlExecResult] = useState<number>(1);
  useEffect(() => {

    fetch('/initSQL.txt')
      .then(response => response.text())
      .then(data => {
        console.log("初始化SQL为", data);
        setInitSQL(data)
        setLoading(false); // 数据加载完成，更新加载状态
      })
      .catch(error => console.error('SQL 初始化失败:', error));
  }, []);
  const [result, setResult] = useState<QueryExecResult[]>(
    [{
      columns: ['a', 'b'],
      values: [
        [0, 'hello'],
        [1, 'world'],
      ],
    }]
  )
  const [execPlanResult, setExecPlanResult] = useState<QueryExecResult[]>(
    [{
      columns: ['a', 'b'],
      values: [
        [0, 'hello'],
        [1, 'world'],
      ],
    }]
  )
  const handleResult = (sql: string, result: QueryExecResult[], answerResult: QueryExecResult[], execPlanResult: QueryExecResult[], errorMsg: string | undefined) => {
    console.log("获取到执行结果啦:", result);
    if (errorMsg === "") {
      setSqlExecResult(1);
    } else {
      setSqlExecResult(0);
    }
    setResult(result);
    setExecPlanResult(execPlanResult);
  };
  const [layout, setLayout] = useState('half');

  // 当数据仍在加载时显示加载指示器
  if (loading) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={"加载中啦，别催！！"}/>;
  }
  return (
    <>
      <Row gutter={[12, 12]}>
        <Col xs={24}
             xl={layout === 'half' ? 12 : 24}
             order={layout === 'output' ? 2 : 1}>
          <Card>
            <SqlEditor onSubmit={handleResult} initSql={initSQL} sql={"select * from student"} resultStatus={0}
                       level={null as any}/>
          </Card>
        </Col>
        <Col xs={24}
             xl={layout === 'half' ? 12 : 24}
             order={layout === 'output' ? 1 : 2}>
          <Card>
            <SqlResultCard result={result}
                           answerResult={result}
                           execPlanResult={execPlanResult}
                           resultStatus={sqlExecResult}/>
          </Card>
        </Col>
      </Row>
    </>
  )
    ;

};
export default Square;

