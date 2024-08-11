// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 创建关卡题目 POST /topicLevel/add */
export async function addTopicLevel(
  body: API.TopicLevelAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong>('/topicLevel/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除关卡题目 POST /topicLevel/delete */
export async function deleteTopicLevel(body: API.DeleteRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/topicLevel/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑关卡题目（给用户使用） POST /topicLevel/edit */
export async function editTopicLevel(
  body: API.TopicLevelEditRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean>('/topicLevel/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据 id 获取关卡题目列表（封装类） GET /topicLevel/get/vo */
export async function getTopicLevelVoById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTopicLevelVoByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseTopicLevelVo>('/topicLevel/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页获取关卡题目列表（仅管理员可用） POST /topicLevel/list/page */
export async function listTopicLevelByPage(
  body: API.TopicLevelQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageTopicLevel>('/topicLevel/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页获取关卡题目（封装类） POST /topicLevel/list/page/topic */
export async function listTopicVoByPage(
  body: API.TopicQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageTopicVo>('/topicLevel/list/page/topic', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页获取关卡题目列表（封装类） POST /topicLevel/list/page/vo */
export async function listTopicLevelVoByPage(
  body: API.TopicLevelQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageTopicLevelVo>('/topicLevel/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页获取当前登录用户创建的关卡题目列表 POST /topicLevel/my/list/page/vo */
export async function listMyTopicLevelVoByPage(
  body: API.TopicLevelQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageTopicLevelVo>('/topicLevel/my/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新关卡题目（仅管理员可用） POST /topicLevel/update */
export async function updateTopicLevel(
  body: API.TopicLevelUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean>('/topicLevel/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
