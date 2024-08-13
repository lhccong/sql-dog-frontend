import {Badge, Button, Card, Col, Collapse, CollapseProps, Empty, Image, Row, Tooltip} from 'antd';
import 'monaco-editor/min/vs/editor/editor.main.css';
import React, {useEffect, useState} from "react";
import {SqlEditor} from "@/components/SqlEditor/SqlEditor";
import {QueryExecResult} from "sql.js";
import {MdViewer} from "@/components/MdViewer/MdViewer";
import {SqlResultCard} from "@/components/SqlResult/SqlResult";
import {CodeEditor} from "@/components/CodeEditor/CodeEditor";
import {getTopicLevelVoById} from "@/services/backend/topicLevelController";

interface LevelsPageProps {
  id: number;
}

const LevelDetailCard: React.FC<LevelsPageProps> = ({id}) => {
  const [topicId, setTopicId] = useState(id); // 用于存储当前题目

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const [topicData, setTopicData] = useState<API.TopicLevelVo>();
  const [initSQL, setInitSQL] = useState('');
  const [initMd, setInitMd] = useState('');
  const [loading, setLoading] = useState(true);
  const [sqlExecResult, setSqlExecResult] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      await getTopicLevelVoById({id: topicId}).then(res => {
        setTopicData(res.data);
        setInitSQL(res.data?.initSQL as string);
        setInitMd(res.data?.mdContent as string);
        setLoading(false);
      });
    };
    fetchData();
  }, [topicId]);

  const [result, setResult] = useState<QueryExecResult[]>(
    [{
      columns: ['a', 'b'],
      values: [
        [0, 'hello'],
        [1, 'world'],
      ],
    }]
  );

  const [execPlanResult, setExecPlanResult] = useState<QueryExecResult[]>(
    [{
      columns: ['a', 'b'],
      values: [
        [0, 'hello'],
        [1, 'world'],
      ],
    }]
  );

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

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: '查看执行结果',
      children: <SqlResultCard result={result}
                               answerResult={result}
                               execPlanResult={execPlanResult}
                               resultStatus={sqlExecResult}/>,
    },
    {
      key: '2',
      label: '查看提示',
      children: <p>{topicData?.hint}</p>,
    },
    {
      key: '3',
      label: '查看建表语句',
      children: <CodeEditor key={"createTableEditor"} language={"sql"} code={topicData?.initSQL}/>,
    },
    {
      key: '4',
      label: '查看答案',
      children: <p>{topicData?.answer}</p>,
    },
  ];

  if (loading) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={"加载中啦，别催！！"}/>;
  }

  return (
    <>
      <Row>
        <Col span={11}>
          <Badge.Ribbon text={topicData?.user?.userRole === "admin" ? "官方精选⭐" : "用户：" + topicData?.user?.userName}
                        color={topicData?.user?.userRole === "admin" ? "green" : "bule"}>
            <MdViewer content={initMd}/>
          </Badge.Ribbon>
          <div style={{display: "flex", float: "right", paddingTop: 40}}>
            {topicData?.preLevelId as any > 0 && (
              <Button style={{width: 100}} onClick={() => setTopicId(topicData?.preLevelId as any)}>上一题</Button>)}
            {topicData?.nextLevelId as any > 0 && (
              <Tooltip placement="topLeft" title={"回答正确✅才可以进行下一关喔"} >
                <Button type={"primary"} disabled={sqlExecResult !== 1} style={{width: 100, marginLeft: 40}}
                        onClick={() => setTopicId(topicData?.nextLevelId as any)}>下一题</Button></Tooltip>)
            }
          </div>
        </Col>
        <Col span={12} style={{marginLeft: 10}}>
          <Card title={"Tip：在输入框中执行📑"} extra={<Image style={{width: 40}}
                                                            src={"https://5b0988e595225.cdn.sohucs.com/images/20190421/8c4ca8cbc42b46c6ae43a12b55065e8a.gif.gif"}/>}>
            <SqlEditor onSubmit={handleResult} initSql={initSQL} sql={topicData?.defaultSQL}
                       resultStatus={sqlExecResult}
                       level={topicData as any}/>
          </Card>
          <Collapse style={{marginTop: 30}} items={items} defaultActiveKey={['1']} onChange={onChange}/>
        </Col>
      </Row>
    </>
  );
};

export default LevelDetailCard;
