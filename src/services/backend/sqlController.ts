// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 根据表结构生成SQL POST /sql/generate/schema */
export async function generateBySchema(body: API.TableSchema, options?: { [key: string]: any }) {
  return request<API.BaseResponseGenerateVO>('/sql/generate/schema', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** SQL 评分 POST /sql/score */
export async function scoreBySql(body: API.SqlAnalysisRequest, options?: { [key: string]: any }) {
  return request<API.SqlAnalysisVO>('/sql/score', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
