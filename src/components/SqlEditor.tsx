import React, {useEffect, useRef, useState} from 'react';
import {Button} from 'antd';
import * as monaco from "monaco-editor";
import {format} from "sql-formatter";
import {initDB, runSQL} from "@/core/sqlExecutor";
import {Database} from "sql.js";

export const SqlEditor = ({sql = 'select * from student'}) => {
  const [querySQL, setQuerySQL] = useState(sql);
  const editorRef = useRef(null);
  const db = useRef<Database>();
  // @ts-ignore
  useEffect(async () => {
    // @ts-ignore
    editorRef.current = monaco.editor.create(document.getElementById('container'), {
      width: "600",
      height: "600",
      theme: "vs-dark",
      value: "-- 请在此处输入 SQL\n" + querySQL,
      language: 'sql'
    });
    // 初始化 / 更新 DB
    // @ts-ignore
    console.log("开始初始化数据库");
    db.current = await initDB("CREATE TABLE if not exists rewards (\n" +
      "    adventurer_id INT,\n" +
      "    adventurer_name VARCHAR(50),\n" +
      "    task_id INT,\n" +
      "    task_name VARCHAR(100),\n" +
      "    reward_coins INT\n" +
      ");");
    console.log("开始执行sql")
    const result = runSQL(db.current, "select * from rewards");
    console.log("执行结果" + result);
  }, []);
  const run = () => {
    // @ts-ignore
    console.log('运行', editorRef.current.getValue());

    // 在这里可以使用 query 进行进一步处理
  };

  const formatSQL = () => {
    const resultStr = format(querySQL, {language: "sqlite"});
    // @ts-ignore
    editorRef.current.setValue(resultStr);
    console.log('格式化' + resultStr);
  };

  const reset = () => {
    setQuerySQL('');
    // @ts-ignore
    editorRef.current.setValue('');
    console.log('重置');
  };

  return (
    <div>
      <div style={{height: 400, width: 600}} id={"container"}/>
      <div style={{marginTop: 20}}>
        <Button type={"primary"} style={{width: 100}} onClick={run}>运行</Button>
        <Button style={{marginLeft: 20}} onClick={formatSQL}>格式化</Button>
        <Button style={{marginLeft: 20}} onClick={reset}>重置</Button>
      </div>
    </div>
  );
};
