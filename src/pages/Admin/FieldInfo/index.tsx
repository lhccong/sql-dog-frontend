import CreateModal from '@/pages/Admin/FieldInfo/components/CreateModal';
import UpdateModal from '@/pages/Admin/FieldInfo/components/UpdateModal';
import {deleteFieldInfo, listFieldInfoByPage, editReviewStatus} from '@/services/backend/fieldInfoController';
import {PlusOutlined} from '@ant-design/icons';
import type {ActionType, ProColumns} from '@ant-design/pro-components';
import {ProTable} from '@ant-design/pro-components';
import '@umijs/max';
import {Button, message, Space, Typography} from 'antd';
import React, {useRef, useState} from 'react';
import {REVIEW_STATUS_ENUM} from "@/constants";

/**
 * 字段管理页面
 *
 * @constructor
 */
const FieldInfoAdminPage: React.FC = () => {
  // 是否显示新建窗口
  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);
  // 是否显示更新窗口
  const [updateModalVisible, setUpdateModalVisible] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  // 当前用户点击的数据
  const [currentRow, setCurrentRow] = useState<API.FieldInfo>();

  /**
   * 删除节点
   *
   * @param row
   */
  const handleDelete = async (row: API.FieldInfo) => {
    const hide = message.loading('正在删除');
    if (!row) return true;
    try {
      await deleteFieldInfo({
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
   */
  const handleReview = async (row: API.ReviewRequest, status: number, reviewMessage?: string) => {
    const hide = message.loading('正在审核');
    if (!row) return true;

    try {
      // 调用接口更新审核状态
      await  editReviewStatus({
        id: row.id as any,
        reviewStatus: status,  // 传递枚举值的键，如 1（通过）或 2（拒绝）
        reviewMessage,         // 传递审核信息
      });

      hide();
      message.success('审核成功');
      actionRef?.current?.reload();  // 重新加载数据
      return true;
    } catch (error: any) {
      hide();
      message.error('审核失败，' + error.message);
      return false;
    }
  };

  /**
   * 表格列配置
   */
  const columns: ProColumns<API.FieldInfo>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      valueType: 'text',
      hideInForm: true,
      width: 150,
      order: 3,
    },
    {
      title: '名称',
      dataIndex: 'name',
      valueType: 'text',
      order: 2,
      width: 150,
    },
    {
      title: '字段名称',
      dataIndex: 'fieldName',
      valueType: 'text',
      order: 2,
      width: 150,
    },
    {
      title: '字段信息',
      dataIndex: 'content',
      valueType: 'text',
      ellipsis: true,
      width: 300,
    },

    {
      title: "审核状态",
      dataIndex: "reviewStatus",
      valueEnum: REVIEW_STATUS_ENUM,
      order: 1,
      width: 100,
    },
    {
      title: '审核信息',
      dataIndex: 'reviewMessage',
      valueType: 'text',
      ellipsis: true,
      width: 200,
    },

    {
      title: '创建时间',
      sorter: true,
      dataIndex: 'createTime',
      valueType: 'dateTime',
      hideInSearch: true,
      hideInForm: true,
      width: 150,
    },
    {
      title: '更新时间',
      sorter: true,
      dataIndex: 'updateTime',
      valueType: 'dateTime',
      hideInSearch: true,
      hideInForm: true,
      width: 200,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      width: 200,
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
          <Typography.Link type="danger" onClick={() => handleDelete(record)}>
            删除
          </Typography.Link>
          <Typography.Link>
            {/* 审核操作 */}
            {record.reviewStatus !== 1 && (
              <Button
                type="primary"
                onClick={() => handleReview(record, 1,"符合上架要求")} // 审核通过
              >
                {REVIEW_STATUS_ENUM[1].text}
              </Button>
            )}
            {record.reviewStatus !== 2 && (
              <Button
                type="dashed" danger
                onClick={() =>
                  handleReview(record, 2, '不符合上架要求') // 审核拒绝
                }
              >
                {REVIEW_STATUS_ENUM[2].text}
              </Button>
            )}
          </Typography.Link>
        </Space>
      ),
    },
  ];

  return (
    <>
      <ProTable<API.FieldInfo>
        headerTitle={'查询表格'}
        actionRef={actionRef}
        pagination={{
          defaultPageSize: 5, // 设置默认的每页显示条数
          showSizeChanger: true, // 显示每页条数切换器
          pageSizeOptions: ['5', '10', '20', '50'], // 自定义每页显示条数选项
        }}
        params={{pageSize: 5}}
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
            <PlusOutlined/> 新建
          </Button>,
        ]}
        request={async (params, sort, filter) => {
          const sortField = Object.keys(sort)?.[0];
          const sortOrder = sort?.[sortField] ?? undefined;

          const {data, code} = await listFieldInfoByPage({
            ...params,
            sortField,
            sortOrder,
            ...filter,
          } as API.FieldInfoQueryRequest);

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

export default FieldInfoAdminPage;
