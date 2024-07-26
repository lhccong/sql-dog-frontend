// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取GitHub授权地址重定向 GET /oauth/render */
export async function renderAuth(options?: { [key: string]: any }) {
  return request<any>('/oauth/render', {
    method: 'GET',
    ...(options || {}),
  });
}
