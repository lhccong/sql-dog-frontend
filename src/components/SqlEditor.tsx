// import React, {useRef, useEffect, useState, useCallback} from "react";
// import MonacoEditor from "react-monaco-editor";
// import {Button, Space, message} from "antd";
// import {format} from "sql-formatter";
// import {initDB, runSQL} from "../core/sqlExecutor";
// // import {QueryExecResult} from "sql.js";
//
// const SqlEditor = ({level, editorStyle, resultStatus, onSubmit}) => {
//   const editorRef = useRef(null);
//   const [db, setDb] = useState(null);
//
//   useEffect(() => {
//     // 初始化 DB
//     const initDatabase = async () => {
//       const database = await initDB(level.initSQL);
//       setDb(database);
//       doSubmit();
//     };
//     initDatabase();
//   }, [level]);
//
//   useEffect(() => {
//     // 初始化默认 SQL
//     if (editorRef.current) {
//       editorRef.current.editor.setValue("-- 请在此处输入 SQL\n" + level.defaultSQL);
//     }
//   }, [level]);
//
//   const doFormat = useCallback(() => {
//     if (!editorRef.current) {
//       return;
//     }
//     const inputStr = editorRef.current.editor.getValue();
//     const resultStr = format(inputStr, {language: "sqlite"});
//     editorRef.current.editor.setValue(resultStr);
//   }, []);
//
//   const doReset = useCallback(() => {
//     if (editorRef.current) {
//       editorRef.current.editor.setValue(level.defaultSQL);
//       doSubmit();
//     }
//   }, [level]);
//
//   const doSubmit = useCallback(() => {
//     if (!editorRef.current) {
//       return;
//     }
//     const inputStr = editorRef.current.editor.getValue();
//     try {
//       const result = runSQL(db, inputStr);
//       const answerResult = runSQL(db, level.answer);
//       onSubmit?.(inputStr, result, answerResult);
//     } catch (error) {
//       message.error("语句错误，" + error.message);
//       onSubmit?.(inputStr, [], [], error.message);
//     }
//   }, [db, level, onSubmit]);
//
//   return (
//     <div id="sqlEditor">
//       <div style={editorStyle}>
//         <MonacoEditor
//           ref={editorRef}
//           width="100%"
//           height="500"
//           language="sql"
//           theme="vs-dark"
//           options={{
//             formatOnPaste: true,
//             automaticLayout: true,
//             fontSize: 16,
//             minimap: {
//               enabled: false,
//             },
//           }}
//         />
//       </div>
//       <Space size={16} style={{marginTop: 16}}>
//         <Button type="primary" style={{width: 180}} onClick={doSubmit}>
//           运行
//         </Button>
//         <Button onClick={doFormat}>格式化</Button>
//         <Button onClick={doReset}>重置</Button>
//       </Space>
//     </div>
//   );
// };
