import {Button, Card, Col, Collapse, CollapseProps, Empty, Image, Row} from 'antd';
import 'monaco-editor/min/vs/editor/editor.main.css';
import React, {useEffect, useState} from "react";
import {SqlEditor} from "@/components/SqlEditor/SqlEditor";
import {QueryExecResult} from "sql.js";
import {MdViewer} from "@/components/MdViewer/MdViewer";
import {SqlResultCard} from "@/components/SqlResult/SqlResult";
import {CodeEditor} from "@/components/CodeEditor/CodeEditor";


const LevelsPage: React.FC = () => {

  const onChange = (key: string | string[]) => {
    console.log(key);
  };


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
      children: <p>2</p>,
    },
    {
      key: '3',
      label: '查看建表语句',
      children: <CodeEditor key={"createTableEditor"} language={"sql"} code={"-- `student`\n" +
        "create table if not exists `student`\n" +
        "(\n" +
        "    `id`       integer          not null primary key AUTOINCREMENT,\n" +
        "    `name`     varchar(256)     not null,\n" +
        "    `age`      int              null,\n" +
        "    `class_id`    bigint           not null,\n" +
        "    `score`    double default 0 null,\n" +
        "    `exam_num` int    default 0 null\n" +
        ");\n" +
        "\n" +
        "insert into `student` (`name`, `age`, `class_id`, `score`, `exam_num`)\n" +
        "values ('鸡哥', 25, 1, 2.5, 1);\n" +
        "insert into `student` (`name`, `age`, `class_id`, `score`, `exam_num`)\n" +
        "values ('聪', 18, 1, 400, 4);\n" +
        "insert into `student` (`name`, `age`, `class_id`, `score`, `exam_num`)\n" +
        "values ('热dog', 40, 2, 600, 4);\n" +
        "insert into `student` (`name`, `age`, `class_id`, `score`, `exam_num`)\n" +
        "values ('摸FISH', null, 2, 360, 4);\n" +
        "insert into `student` (`name`, `age`, `class_id`, `score`, `exam_num`)\n" +
        "values ('李阿巴', 19, 3, 120, 2);\n" +
        "insert into `student` (`name`, `age`, `class_id`, `score`, `exam_num`)\n" +
        "values ('老李', 56, 3, 500, 4);\n" +
        "insert into `student` (`name`, `age`, `class_id`, `score`, `exam_num`)\n" +
        "values ('李变量', 24, 4, 390, 3);\n" +
        "insert into `student` (`name`, `age`, `class_id`, `score`, `exam_num`)\n" +
        "values ('王加瓦', 23, 4, 0, 4);\n" +
        "insert into `student` (`name`, `age`, `class_id`, `score`, `exam_num`)\n" +
        "values ('赵派森', 80, 4, 600, 4);\n" +
        "insert into `student` (`name`, `age`, `class_id`, `score`, `exam_num`)\n" +
        "values ('孙加加', 60, 5, 100.5, 1);\n"}/>,
    },
    {
      key: '4',
      label: '查看答案',
      children: <p>3</p>,
    },
  ];


  // 当数据仍在加载时显示加载指示器
  if (loading) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={"加载中啦，别催！！"}/>;
  }

  return (
    <>
      <Row>
        <Col span={11}>
          <MdViewer content={initMd}/>
          <div style={{display: "flex", float: "right", paddingTop: 40}}>
            <Button style={{width: 100}}>上一题</Button>
            <Button type={"primary"} style={{width: 100, marginLeft: 40}}>下一题</Button>
          </div>

        </Col>
        <Col span={12} style={{marginLeft: 10}}>

          <Card title={"Tip：在输入框中执行📑"} extra={<Image style={{width: 40}}
                                                            src={"https://5b0988e595225.cdn.sohucs.com/images/20190421/8c4ca8cbc42b46c6ae43a12b55065e8a.gif.gif"}/>}>
            <SqlEditor onSubmit={handleResult} initSql={initSQL} sql={"select * from student"} resultStatus={0}
                       level={null}/>
          </Card>
          <Collapse style={{marginTop: 30}} items={items} defaultActiveKey={['1']} onChange={onChange}/>
        </Col>
      </Row>
    </>
  );

};
export default LevelsPage;

