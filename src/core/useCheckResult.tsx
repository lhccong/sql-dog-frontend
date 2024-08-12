import {useState, useEffect} from "react";
import {QueryExecResult} from "sql.js";

/**
 * 结果状态枚举
 */
export const RESULT_STATUS_ENUM = {
  DEFAULT: -1,
  ERROR: 0,
  SUCCEED: 1,
};

/**
 * 结果状态信息映射
 */
export const RESULT_STATUS_INFO_MAP = {
  "-1": "未执行",
  0: "❌ 错误",
  1: "✅ 正确",
};



