import 'monaco-editor/min/vs/editor/editor.main.css';
import React from "react";
import LevelDetailCard from "@/components/LevelDetailCard/LevelDetailCard";
import {useParams} from "@@/exports";


const LevelsPage: React.FC = () => {
// 获取 URL 参数中的 id
  const {id} = useParams<{ id?: string }>();

  // 如果没有传递 id，则默认设置为 1
  const levelId = id ? parseInt(id) : 1;
  return (
    <>
      <LevelDetailCard id={levelId}/>
    </>
  );

};
export default LevelsPage;

