import React, {useEffect, useRef} from 'react';
import * as monaco from "monaco-editor";

interface SqlEditorProps {
  code?: string;
  language?: string;
}


export const CodeEditor: React.FC<SqlEditorProps> = ({code, language}) => {
  const editorRef = useRef(null);
  // @ts-ignore
  useEffect(() => {
    // @ts-ignore
    editorRef.current = monaco.editor.create(editorRef.current, {
      width: "600",
      automaticLayout: true,
      theme: "vs-dark",
      value: code,
      readOnly: true, // 设置为只读
      language: language
    });

  }, []);


  return (
    <div style={{display: 'grid', gridTemplateRows: '1fr auto', gap: '20px', justifyItems: 'center'}}>
      <div style={{height: 400, maxHeight: 400, width: '100%', maxWidth: 800, backgroundColor: '#f0f0f0'}}
           ref={editorRef}/>
    </div>

  );
};
