import React, {useEffect, useRef, useState} from 'react';
import {Button, message} from 'antd';
import * as monaco from "monaco-editor";
import {format} from "sql-formatter";
import {initDB, runSQL} from "@/core/sqlExecutor";
import {Database} from "sql.js";

interface SqlEditorProps {
  sql?: string;
  initSql?: string;
  onSubmit: (result: any) => void;
}

export const SqlEditor: React.FC<SqlEditorProps> = ({sql, onSubmit, initSql}) => {
  const [querySQL, setQuerySQL] = useState(sql);
  const editorRef = useRef(null);
  const db = useRef<Database>();
  const defaultSQL = sql;
  // @ts-ignore
  useEffect(() => {
    // @ts-ignore
    editorRef.current = monaco.editor.create(document.getElementById('container'), {
      width: "600",
      height: "600",
      theme: "vs-dark",
      value: "-- 请在此处输入 SQL\n" + defaultSQL,
      language: 'sql'
    });
    // 初始化 / 更新 DB
    // @ts-ignore
    console.log("开始初始化数据库,SQL:", initSql);

    async function fetchData() {
      db.current = await initDB(initSql);
      console.log("开始执行sql")
      const result = runSQL(db.current, querySQL === null ? "" : querySQL as string);
      console.log("执行结果", result);
      onSubmit(result);  // 将结果传递给父组件
      return result;
    }

    fetchData().then(r => {
      console.log(r)
    });

  }, []);
  const run = () => {
    try {
      // @ts-ignore
      console.log('运行', editorRef.current.getValue());
      // @ts-ignore
      const currentSQL = editorRef.current.getValue();
      setQuerySQL(currentSQL);
      const result = runSQL(db.current as any, currentSQL);
      console.log("执行结果", result);
      onSubmit(result);  // 将结果传递给父组件
    } catch (error: any) {
      message.error("语句错误，" + error.message).then();
      onSubmit(true);
    }
  };

  const formatSQL = () => {
    const resultStr = format(querySQL === null ? "" : querySQL as string, {language: "sqlite"});
    // @ts-ignore
    editorRef.current.setValue(resultStr);
    console.log('格式化' + resultStr);
  };

  const reset = () => {
    setQuerySQL('');
    // @ts-ignore
    editorRef.current.setValue("-- 请在此处输入 SQL\n" + defaultSQL);
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
