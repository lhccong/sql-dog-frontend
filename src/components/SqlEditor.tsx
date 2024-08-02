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
  useEffect(() => {
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

    async function fetchData() {
      db.current = await initDB("CREATE TABLE if not exists rewards (\n" +
        "    adventurer_id INT,\n" +
        "    adventurer_name VARCHAR(50),\n" +
        "    task_id INT,\n" +
        "    task_name VARCHAR(100),\n" +
        "    reward_coins INT\n" +
        ");" +
        "INSERT INTO rewards (adventurer_id, adventurer_name, task_id, task_name, reward_coins)\n" +
        "VALUES\n" +
        "    (1, 'Alice', 101, 'Dragon Slaying', 500),\n" +
        "    (1, 'Alice', 102, 'Treasure Hunt', 300),\n" +
        "    (1, 'Alice', 103, 'Rescue Mission', 200),\n" +
        "    (2, 'Bob', 101, 'Dragon Slaying', 600),\n" +
        "    (2, 'Bob', 102, 'Treasure Hunt', 400),\n" +
        "    (3, 'Charlie', 103, 'Rescue Mission', 250),\n" +
        "    (4, 'David', 101, 'Dragon Slaying', 450),\n" +
        "    (4, 'David', 102, 'Treasure Hunt', 350),\n" +
        "    (4, 'David', 103, 'Rescue Mission', 150),\n" +
        "    (5, 'Eve', 101, 'Dragon Slaying', 700),\n" +
        "    (5, 'Eve', 102, 'Treasure Hunt', 250);");
      console.log("开始执行sql")
      const result = runSQL(db.current, "select * from rewards");
      console.log("执行结果", result);
      return result;
    }

    fetchData().then(r => {
      console.log(r)
    });

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
    <div style={{display: 'grid', gridTemplateRows: '1fr auto', gap: '20px', justifyItems: 'center'}}>
      <div style={{height: 400, width: '100%', maxWidth: 800, backgroundColor: '#f0f0f0'}} id="container"/>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', width: '100%', maxWidth: 800}}>
        <Button type="primary" onClick={run}>运行</Button>
        <Button onClick={formatSQL}>格式化</Button>
        <Button onClick={reset}>重置</Button>
      </div>
    </div>

  );
};
