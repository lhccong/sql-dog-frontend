import {Card, Col, Empty, Row} from 'antd';
import 'monaco-editor/min/vs/editor/editor.main.css';
import React, {useEffect, useState} from "react";
import {SqlEditor} from "@/components/SqlEditor";
import {QueryExecResult} from "sql.js";
import {SqlResultCard} from "@/components/SqlResult";


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
  const handleResult = (result: any) => {
    console.log("获取到执行结果啦", result);
    if (result === true) {
      setSqlExecResult(0);
    }else {
      setSqlExecResult(1);
    }
    setResult(result)
  };
  // 当数据仍在加载时显示加载指示器
  if (loading) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={"加载中啦，别催！！"}/>;
  }

  return (
    <>
      <Row>
        <Col span={11}>
          <Card>
            <SqlEditor onSubmit={handleResult} initSql={initSQL} sql={"select * from student"}/>
          </Card>
        </Col>
        <Col span={12} style={{marginLeft: 10}}><SqlResultCard result={result}
                                                               answerResult={result}
                                                               resultStatus={sqlExecResult}/></Col>
      </Row>
    </>
  );

};
export default Square;

