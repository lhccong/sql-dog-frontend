import CreateModal from '@/pages/Admin/TopicLevel/components/CreateModal';
import UpdateModal from '@/pages/Admin/TopicLevel/components/UpdateModal';
import {deleteTopicLevel, listTopicLevelByPage} from '@/services/backend/topicLevelController';
import {PlusOutlined} from '@ant-design/icons';
import type {ActionType, ProColumns} from '@ant-design/pro-components';
import {ProTable} from '@ant-design/pro-components';
import '@umijs/max';
import {Button, message, Space, Typography} from 'antd';
import React, {useRef, useState} from 'react';
import {REVIEW_STATUS_ENUM} from "@/constants";

/**
 * 关卡题目管理页面
 *
 * @constructor
 */
const TopicLevelAdminPage: React.FC = () => {
  // 是否显示新建窗口
  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);
  // 是否显示更新窗口
  const [updateModalVisible, setUpdateModalVisible] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  // 当前用户点击的数据
  const [currentRow, setCurrentRow] = useState<API.TopicLevel>();

  /**
   * 删除节点
   *
   * @param row
   */
  const handleDelete = async (row: API.TopicLevel) => {
    const hide = message.loading('正在删除');
    if (!row) return true;
    try {
      await deleteTopicLevel({
        id: row.id as any,
      });
      hide();
      message.success('删除成功');
      actionRef?.current?.reload();
      return true;
    } catch (error: any) {
      hide();
      message.error('删除失败，' + error.message);
      return false;
    }
  };

  /**
   * 审核节点
   *
   * @param row
   */
  const handleReview = async (row: API.TopicLevel) => {
   // todo 审核功能待实现
  };


  /**
   * 表格列配置
   */
  const columns: ProColumns<API.TopicLevel>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      valueType: 'text',
      hideInForm: true,
      width: 80,
      order: 3,
    },
    {
      title: '关卡名称',
      dataIndex: 'title',
      valueType: 'text',
      order: 2,
    },
    {
      title: '初始化 SQL',
      dataIndex: 'initSQL',
      valueType: 'text',
      ellipsis: true,
    },
    {
      title: 'Markdown 内容',
      dataIndex: 'mdContent',
      valueType: 'text',
      ellipsis: true,
    },
    {
      title: '标准答案',
      dataIndex: 'answer',
      valueType: 'text',
    },
    {
      title: '提示',
      dataIndex: 'hint',
      valueType: 'text',
    },
    {
      title: '类别',
      dataIndex: 'type',
      valueEnum: {
        custom: {
          text: '自定义',
        },
        system: {
          text: '系统',
        },
      },
      order: 1,
    },
    {
      title: "审核状态",
      dataIndex: "reviewStatus",
      valueEnum: REVIEW_STATUS_ENUM,
      order: 1,
    },

    {
      title: '创建用户 ID',
      dataIndex: 'userId',
      valueType: 'text',
    },
    {
      title:"上一题 ID",
      dataIndex: 'preLevelId',
      valueType: 'text',
    },
    {
      title:"下一题 ID",
      dataIndex: 'nextLevelId',
      valueType: 'text',
    },
    {
      title: '创建时间',
      sorter: true,
      dataIndex: 'createTime',
      valueType: 'dateTime',
      hideInSearch: true,
      hideInForm: true,
    },
    {
      title: '更新时间',
      sorter: true,
      dataIndex: 'updateTime',
      valueType: 'dateTime',
      hideInSearch: true,
      hideInForm: true,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
          <Space size="middle">
            <Typography.Link
                onClick={() => {
                  setCurrentRow(record);
                  setUpdateModalVisible(true);
                }}
            >
              修改
            </Typography.Link>
            <Typography.Link type="warning" onClick={() => handleDelete(record)}>
              // todo 审核功能待实现
              审核
            </Typography.Link>
            <Typography.Link type="danger" onClick={() => handleReview(record)}>
              删除
            </Typography.Link>
          </Space>
      ),
    },
  ];

  return (
      <>
        <ProTable<API.TopicLevel>
            headerTitle={'查询表格'}
            actionRef={actionRef}
            rowKey="id"
            search={{
              labelWidth: 120,
            }}
            toolBarRender={() => [
              <Button
                  type="primary"
                  key="primary"
                  onClick={() => {
                    setCreateModalVisible(true);
                  }}
              >
                <PlusOutlined /> 新建
              </Button>,
            ]}
            request={async (params, sort, filter) => {
              const sortField = Object.keys(sort)?.[0];
              const sortOrder = sort?.[sortField] ?? undefined;

              const { data, code } = await listTopicLevelByPage({
                ...params,
                sortField,
                sortOrder,
                ...filter,
              } as API.TopicLevelQueryRequest);

              return {
                success: code === 0,
                data: data?.records || [],
                total: Number(data?.total) || 0,
              };
            }}
            columns={columns}
        />
        <CreateModal
            visible={createModalVisible}
            columns={columns}
            onSubmit={() => {
              setCreateModalVisible(false);
              actionRef.current?.reload();
            }}
            onCancel={() => {
              setCreateModalVisible(false);
            }}
        />
        <UpdateModal
            visible={updateModalVisible}
            columns={columns}
            oldData={currentRow}
            onSubmit={() => {
              setUpdateModalVisible(false);
              setCurrentRow(undefined);
              actionRef.current?.reload();
            }}
            onCancel={() => {
              setUpdateModalVisible(false);
            }}
        />
      </>
  );
};

export default TopicLevelAdminPage;
