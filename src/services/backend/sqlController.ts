// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /sql/download/data/excel */
export async function downloadDataExcel(body: API.GenerateVO, options?: { [key: string]: any }) {
  return request<any>('/sql/download/data/excel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

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

/** 此处后端没有提供注释 POST /sql/get/schema/auto */
export async function getSchemaByAuto(
  body: API.GenerateByAutoRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseTableSchema>('/sql/get/schema/auto', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /sql/get/schema/sql */
export async function getSchemaBySql(
  body: API.GenerateBySqlRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseTableSchema>('/sql/get/schema/sql', {
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
  return request<API.BaseResponseSqlAnalysisVO>('/sql/score', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
