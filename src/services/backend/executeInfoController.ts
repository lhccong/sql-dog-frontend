// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 创建SQL执行记录 POST /executeInfo/add */
export async function addExecuteInfo(
  body: API.ExecuteInfoAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong>('/executeInfo/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除SQL执行记录 POST /executeInfo/delete */
export async function deleteExecuteInfo(body: API.DeleteRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/executeInfo/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑SQL执行记录（给用户使用） POST /executeInfo/edit */
export async function editExecuteInfo(
  body: API.ExecuteInfoEditRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean>('/executeInfo/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据 id 获取SQL执行记录（封装类） GET /executeInfo/get/vo */
export async function getExecuteInfoVoById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getExecuteInfoVOByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseExecuteInfoVO>('/executeInfo/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页获取SQL执行记录列表（仅管理员可用） POST /executeInfo/list/page */
export async function listExecuteInfoByPage(
  body: API.ExecuteInfoQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageExecuteInfo>('/executeInfo/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页获取SQL执行记录列表（封装类） POST /executeInfo/list/page/vo */
export async function listExecuteInfoVoByPage(
  body: API.ExecuteInfoQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageExecuteInfoVO>('/executeInfo/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页获取当前登录用户创建的SQL执行记录列表 POST /executeInfo/my/list/page/vo */
export async function listMyExecuteInfoVoByPage(
  body: API.ExecuteInfoQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageExecuteInfoVO>('/executeInfo/my/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** SQL执行记录表审核状态修改(仅管理员可用) POST /executeInfo/review */
export async function doReviewExecuteInfo(
  body: API.ReviewRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean>('/executeInfo/review', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新SQL执行记录（仅管理员可用） POST /executeInfo/update */
export async function updateExecuteInfo(
  body: API.ExecuteInfoUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean>('/executeInfo/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
