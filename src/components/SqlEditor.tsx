import React, {useEffect, useRef, useState} from 'react';
import {Button} from 'antd';
import * as monaco from "monaco-editor";
import {format} from "sql-formatter";

export const SqlEditor = ({sql = 'select * from student'}) => {
  const [querySQL, setQuerySQL] = useState(sql);
  const editorRef = useRef(null);
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
