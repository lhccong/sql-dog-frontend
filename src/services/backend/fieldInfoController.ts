// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 创建字段信息 POST /fieldInfo/add */
export async function addFieldInfo(
  body: API.FieldInfoAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong>('/fieldInfo/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除字段信息 POST /fieldInfo/delete */
export async function deleteFieldInfo(body: API.DeleteRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/fieldInfo/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑字段信息（给用户使用） POST /fieldInfo/edit */
export async function editFieldInfo(
  body: API.FieldInfoEditRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean>('/fieldInfo/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据 id 获取字段信息（封装类） GET /fieldInfo/get/vo */
export async function getFieldInfoVoById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getFieldInfoVoByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseFieldInfoVO>('/fieldInfo/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页获取字段信息列字段（仅管理员可用） POST /fieldInfo/list/page */
export async function listFieldInfoByPage(
  body: API.FieldInfoQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageFieldInfo>('/fieldInfo/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页获取字段信息列字段（封装类） POST /fieldInfo/list/page/vo */
export async function listFieldInfoVoByPage(
  body: API.FieldInfoQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageFieldInfoVO>('/fieldInfo/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页获取当前登录用户创建的字段信息列字段 POST /fieldInfo/my/list/page/vo */
export async function listMyFieldInfoVoByPage(
  body: API.FieldInfoQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageFieldInfoVO>('/fieldInfo/my/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑字段信息（给管理员使用） POST /fieldInfo/update */
export async function updateFieldInfo(
  body: API.FieldInfoUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean>('/fieldInfo/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
