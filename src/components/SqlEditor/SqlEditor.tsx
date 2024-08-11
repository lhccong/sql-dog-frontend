import React, {useEffect, useRef, useState} from 'react';
import {Button, message} from 'antd';
import * as monaco from "monaco-editor";
import {format} from "sql-formatter";
import {initDB, runSQL} from "@/core/sqlExecutor";
import {Database, QueryExecResult} from "sql.js";

interface SqlEditorProps {
  level: API.TopicLevelVo;
  sql?: string;
  initSql?: string;
  onSubmit: (sql: string,
             result: QueryExecResult[],
             answerResult: QueryExecResult[],
             execPlanResult: QueryExecResult[],
             errorMsg?: string) => void;
  resultStatus: number;
}


export const SqlEditor: React.FC<SqlEditorProps> = ({sql, onSubmit, initSql, level}) => {
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
      let answerResult = null as unknown as QueryExecResult[];
      const result = runSQL(db.current, querySQL === null ? "" : querySQL as string);
      const execPlanResult = runSQL(db.current, querySQL === null ? "" : "EXPLAIN QUERY PLAN " + querySQL as string);
      if (level !== null) {
        answerResult = runSQL(db.current, querySQL === null ? "" : level.answer as string);
      }
      onSubmit("", result, answerResult, execPlanResult, "");  // 将结果传递给父组件
      // 将结果传递给父组件
      return result;
    }

    fetchData().then(r => {
      console.log("初始化数据库完成,结果:", r);
    });

  }, []);
  const run = () => {
    try {
      // @ts-ignore
      const currentSQL = editorRef.current.getValue();
      setQuerySQL(currentSQL);
      const result = runSQL(db.current as any, currentSQL);
      const answerResult = runSQL(db.current as any, level.answer as string);
      const execPlanResult = runSQL(db.current as any, "EXPLAIN QUERY PLAN " + currentSQL);
      console.log("执行结果：", result);
      onSubmit("", result, answerResult, execPlanResult, ""); // 将结果传递给父组件
      // 将结果传递给父组件
    } catch (error: any) {
      message.error("语句错误，" + error.message).then();
      onSubmit("", null as any, null as any, error.message);
    }
  };

  const formatSQL = () => {
    const resultStr = format(querySQL === null ? "" : querySQL as string, {language: "sqlite"});
    // @ts-ignore
    editorRef.current.setValue(resultStr);
    console.log('格式化' + resultStr);
  };

  const reset = () => {
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
