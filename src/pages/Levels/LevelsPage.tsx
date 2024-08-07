import {Card, Col, Empty, Image, Row} from 'antd';
import 'monaco-editor/min/vs/editor/editor.main.css';
import React, {useEffect, useState} from "react";
import {SqlEditor} from "@/components/SqlEditor/SqlEditor";
import {QueryExecResult} from "sql.js";
import {MdViewer} from "@/components/MdViewer/MdViewer";


const Square: React.FC = () => {
  const markdownContent = `#大浪淘鸡在神秘的海岛上，有一只传说中的大浪淘鸡，它身躯高大威武，羽毛闪烁着神秘的光芒。岛上的居民都传说大浪淘鸡是海洋之神的化身，它能够操纵海浪，带来平静或狂暴的海洋。为了验证这个传说是否属实，岛上的居民决定对大浪淘鸡进行观测和记录。有一张\`chicken_observation\`的表格，用于记录居民观测大浪淘鸡的信息。表格字段如下：-\`observation_id\`：观测记录ID，唯一标识每条观测记录-\`observer_name\`：观测者姓名-\`observation_date\`：观测日期-\`observation_location\`：观测地点-\`wave_intensity\`：观测到的海浪强度，用整数表示，数值越大，海浪越狂暴请你编写一条SQL查询语句，找出观测地点包含"大浪淘鸡"且海浪强度超过5的观测记录，并依次输出每位观测者的姓名（\`observer_name\`）、观测日期（\`observation_date\`）以及观测到的海浪强度（\`wave_intensity\`）。`
  const [initSQL, setInitSQL] = useState('');
  const [initMd, setInitMd] = useState('');
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

    fetch('/demo.md')
      .then(response => response.text())
      .then(data => {
        setInitMd(data)
        setLoading(false); // 数据加载完成，更新加载状态
      })
      .catch(error => console.error('Md 初始化失败:', error));
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
  // 当数据仍在加载时显示加载指示器
  if (loading) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={"加载中啦，别催！！"}/>;
  }

  return (
    <>
      <Row>
        <Col span={11}>
          <MdViewer content={initMd}/>

        </Col>
        <Col span={12} style={{marginLeft: 10}}>
          {/*<SqlResultCard result={result}*/}
          {/*               answerResult={result}*/}
          {/*               execPlanResult={execPlanResult}*/}
          {/*               resultStatus={sqlExecResult}/>*/}
          <Card extra={<Image style={{width:40}} src={"https://5b0988e595225.cdn.sohucs.com/images/20190421/8c4ca8cbc42b46c6ae43a12b55065e8a.gif.gif"}/> }>
            <SqlEditor onSubmit={handleResult} initSql={initSQL} sql={"select * from student"} resultStatus={0}
                       level={null}/>
          </Card>
        </Col>
      </Row>
    </>
  );

};
export default Square;

