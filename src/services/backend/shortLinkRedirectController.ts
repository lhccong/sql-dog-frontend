// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 重定向到长链接 GET /api/link_dog/${param0} */
export async function redirectToLongLinkUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.redirectToLongLinkUsingGETParams,
  options?: { [key: string]: any },
) {
  const { shortLink: param0, ...queryParams } = params;
  return request<API.ModelAndView>(`/api/link_dog/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
