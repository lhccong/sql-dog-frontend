// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 创建表信息 POST /tableInfo/add */
export async function addTableInfo(
  body: API.TableInfoAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong>('/tableInfo/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除表信息 POST /tableInfo/delete */
export async function deleteTableInfo(body: API.DeleteRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/tableInfo/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑表信息（给用户使用） POST /tableInfo/edit */
export async function editTableInfo(
  body: API.TableInfoEditRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean>('/tableInfo/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /tableInfo/generate/sql */
export async function generateCreateSql(body: number, options?: { [key: string]: any }) {
  return request<API.BaseResponseString>('/tableInfo/generate/sql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据 id 获取表信息（封装类） GET /tableInfo/get/vo */
export async function getTableInfoVoById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTableInfoVoByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseTableInfoVo>('/tableInfo/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页获取表信息列表（仅管理员可用） POST /tableInfo/list/page */
export async function listTableInfoByPage(
  body: API.TableInfoQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageTableInfo>('/tableInfo/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页获取表信息列表（封装类） POST /tableInfo/list/page/vo */
export async function listTableInfoVoByPage(
  body: API.TableInfoQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageTableInfoVo>('/tableInfo/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页获取当前登录用户创建的表信息列表 POST /tableInfo/my/list/page/vo */
export async function listMyTableInfoVoByPage(
  body: API.TableInfoQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageTableInfoVo>('/tableInfo/my/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 表信息状态审核（仅管理员可用） POST /tableInfo/review */
export async function doTableInfoReview(body: API.ReviewRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/tableInfo/review', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新表信息（仅管理员可用） POST /tableInfo/update */
export async function updateTableInfo(
  body: API.TableInfoUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean>('/tableInfo/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
