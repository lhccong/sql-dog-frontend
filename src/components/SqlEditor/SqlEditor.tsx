import React, {useEffect, useRef, useState} from 'react';
import {Button, Col, message, Row} from 'antd';
import * as monaco from "monaco-editor";
import {format} from "sql-formatter";
import {initDB, runSQL} from "@/core/sqlExecutor";
import {Database, QueryExecResult} from "sql.js";
import {RESULT_STATUS_ENUM} from "@/core/useCheckResult";
import "./index.less"

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
  const [layout, setLayout] = useState('half');
  const defaultSQL = sql;
  // @ts-ignore
  useEffect(() => {
    if (editorRef.current) {
      // @ts-ignore
      editorRef.current.dispose(); // 如果已经有编辑器实例，先销毁
    }
    // @ts-ignore
    editorRef.current = monaco.editor.create(document.getElementById('container'), {
      width: "600",
      height: "600",
      theme: "vs-dark",
      fontSize: 16,
      value: "-- 请在此处输入 SQL\n" + defaultSQL,
      language: 'sql'
    });
    // 初始化 / 更新 DB
    // @ts-ignore
    console.log("开始初始化数据库,SQL:", initSql);

    async function fetchData() {
      db.current = await initDB(initSql);
      let answerResult = null as unknown as QueryExecResult[];
      const result = runSQL(db.current, sql === null ? "" : sql as string);
      const execPlanResult = runSQL(db.current, sql === null ? "" : "EXPLAIN QUERY PLAN " + sql as string);
      let errorMsg = ""
      if (level !== null) {
        answerResult = runSQL(db.current, level === null ? "" : level.answer as string);
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        const compareResult = checkResult(result, answerResult);
        if (compareResult !== 1) {
          errorMsg = "与正确答案不符喔";
        }
      }
      onSubmit(sql as any, result, answerResult, execPlanResult, errorMsg);  // 将结果传递给父组件
      // 将结果传递给父组件
      return result;
    }

    fetchData().then(r => {
      console.log("初始化数据库完成,结果:", r);
    });

  }, [level ? level.title : null]);


  const run = () => {
    try {
      // @ts-ignore
      const currentSQL = editorRef.current.getValue();
      setQuerySQL(currentSQL);
      const result = runSQL(db.current as any, currentSQL);
      let answerResult = null as unknown as QueryExecResult[];
      let errorMsg = "";
      if (level !== null) {
        answerResult = runSQL(db.current as any, level.answer as string);
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        const compareResult = checkResult(result, answerResult);
        if (compareResult !== 1) {
          errorMsg = "与正确答案不符喔";
        }
      }
      const execPlanResult = runSQL(db.current as any, "EXPLAIN QUERY PLAN " + currentSQL);
      console.log("执行结果：", result);
      onSubmit(currentSQL, result, answerResult, execPlanResult, errorMsg); // 将结果传递给父组件
      // 将结果传递给父组件
    } catch (error: any) {
      message.error("语句错误，" + error.message).then();
      onSubmit("", null as any, null as any, error.message);
    }
  };

  const formatSQL = () => {
    // @ts-ignore
    const resultStr = format(editorRef.current.getValue() === null ? "" : editorRef.current.getValue() as string, {language: "sqlite"});
    // @ts-ignore
    editorRef.current.setValue(resultStr);

    console.log('格式化' + resultStr);
  };

  const reset = () => {
    // @ts-ignore
    editorRef.current.setValue("-- 请在此处输入 SQL\n" + defaultSQL);
    console.log('重置');
  };

  /**
   * 判断结果是否正确的 Hook
   * @param result 用户结果
   * @param answerResult 答案结果
   */

  const checkResult = (result: QueryExecResult[], answerResult: QueryExecResult[]) => {
    if (!result?.[0] || !answerResult?.[0]) {
      return RESULT_STATUS_ENUM.ERROR;
    }
    // 列名需要一致
    const resultColumns = result[0].columns;
    const answerResultColumns = answerResult[0].columns;
    if (JSON.stringify(resultColumns) !== JSON.stringify(answerResultColumns)) {
      return RESULT_STATUS_ENUM.ERROR;
    }
    // 数据需要一致
    const resultValues = result[0].values;
    const answerResultValues = answerResult[0].values;
    if (JSON.stringify(resultValues) === JSON.stringify(answerResultValues)) {
      return RESULT_STATUS_ENUM.SUCCEED;
    }
    return RESULT_STATUS_ENUM.ERROR;
  };
  return (
    <Row gutter={[12, 12]}>
      <Col
        xs={24}
        xl={layout === 'half' ? 24 : 24}
        order={layout === 'output' ? 2 : 2}
      >
        <div style={{display: 'grid', gridTemplateRows: '1fr auto', gap: '20px', justifyItems: 'center'}}>
          <div className="code-container">
            <div className="code-header">
              <div className="circle red"></div>
              <div className="circle yellow"></div>
              <div className="circle green"></div>
            </div>
            <div
              style={{height: "50vh", width: '100%', maxWidth: 800, borderRadius: "10px", backgroundColor: '#1E1E1E'}}
              id={'container'}/>
          </div>

          <div
            style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', width: '100%', maxWidth: 800}}>
            <Button type="primary" onClick={run}>运行</Button>
            <Button onClick={formatSQL}>格式化</Button>
            <Button onClick={reset}>重置</Button>
          </div>
        </div>
      </Col></Row>

  );
};
