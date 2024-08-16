// import {
//   deleteFieldInfo,
//   generateCreateFieldSql,
// } from '@/services/fieldInfoService';
import {useModel} from '@umijs/max';
import {
  Badge,
  Button,
  Descriptions,
  Divider,
  List,
  message,
  Popconfirm,
  Space,
  Typography,
} from 'antd';
import {PaginationConfig} from 'antd/es/pagination';
import copy from 'copy-to-clipboard';
import React, {useEffect, useState} from 'react';
import './index.less';
import ReportModal from "@/components/ReportModal/ReportModal";
import {deleteFieldInfo, generateCreateSqlByField} from "@/services/backend/fieldInfoController";

interface Props {
  pagination: PaginationConfig;
  loading?: boolean;
  showTag?: boolean;
  dataList: FieldInfoType.FieldInfo[];
  onImport?: (values: FieldInfoType.FieldInfo) => void;
}

/**
 * 表信息列表
 *
 * @constructor
 * @author https://github.com/lhccong
 */
const FieldInfoList: React.FC<Props> = (props) => {
  const {dataList, pagination, loading, showTag = true, onImport} = props;
  const [list, setList] = useState(dataList);

  const [reportModalVisible, setReportModalVisible] = useState(false);
  const [reportedId, setReportedId] = useState(0);

  const {initialState} = useModel('@@initialState');
  const loginUser = initialState?.currentUser;

  // 监听 props.dataList 变化，并更新 list 状态
  useEffect(() => {
    setList(dataList);
  }, [dataList]);
  /**
   * 删除节点
   * @param id
   */
  const doDelete = async (id: number) => {
    const hide = message.loading('正在删除');
    if (!id) return true;
    try {
      await deleteFieldInfo({
        id,
      }).then(res => {
        if (res.code === 0) {
          setList(list.filter(item => item.id !== id));
          message.success('操作成功');
        }
      });

    } catch (e: any) {
      message.error('操作失败，' + e.message);
    } finally {
      hide();
    }
  };

  return (
    <div className="field-info-list">
      <List<FieldInfoType.FieldInfo>
        itemLayout="vertical"
        size="large"
        loading={loading}
        pagination={pagination}
        dataSource={list}
        renderItem={(item, index) => {
          const content: Field = JSON.parse(item.content);
          return (
            <List.Item
              key={index}
              extra={
                onImport && (
                  <Button
                    onClick={() => {
                      if (onImport) {
                        onImport(item);
                      }
                    }}
                  >
                    导入
                  </Button>
                )
              }
            >
              <Badge.Ribbon text={item.userId == 1 ? "官方" : item.reviewStatus === 1 ? "公开" : ""}
                            color={item.userId == 1 ? "gold" : item.reviewStatus === 1 ? "green" : ""}>
                <Descriptions
                  column={3}
                >
                  <Descriptions.Item label="字段名">
                    {content.fieldName}
                  </Descriptions.Item>
                  <Descriptions.Item label="类型">
                    {content.fieldType ?? '无'}
                  </Descriptions.Item>
                  <Descriptions.Item label="注释">
                    {content.comment ?? '无'}
                  </Descriptions.Item>
                  <Descriptions.Item label="默认值">
                    {content.defaultValue ?? '无'}
                  </Descriptions.Item>
                  <Descriptions.Item label="自增">
                    {content.autoIncrement ? '是' : '否'}
                  </Descriptions.Item>
                  <Descriptions.Item label="主键">
                    {content.primaryKey ? '是' : '否'}
                  </Descriptions.Item>
                  <Descriptions.Item label="非空">
                    {content.notNull ? '是' : '否'}
                  </Descriptions.Item>
                  <Descriptions.Item label="onUpdate">
                    {content.onUpdate ?? '无'}
                  </Descriptions.Item>
                </Descriptions>
              </Badge.Ribbon>
              <Space
                split={<Divider type="vertical"/>}
                style={{fontSize: 14}}
              >
                <Typography.Text type="secondary">
                  {item.createTime.toString().split('T')[0]}
                </Typography.Text>
                <Button
                  type="text"
                  onClick={() => {
                    generateCreateSqlByField({id: item.id})
                      .then((res) => {
                        copy(res.data as any);
                        message.success('复制创建字段 SQL 成功');
                      })
                      .catch((e: { message: string; }) => {
                        message.error('复制失败，' + e.message);
                      });
                  }}
                >
                  复制语句
                </Button>
                <Button
                  type="text"
                  onClick={() => {
                    setReportedId(item.id);
                    setReportModalVisible(true);
                  }}
                >
                  举报
                </Button>
                {loginUser && loginUser.id === item.userId && (
                  <Popconfirm
                    title="你确定要删除么？"
                    onConfirm={() => {
                      doDelete(item.id);
                    }}
                  >
                    <Button type="text" danger>
                      删除
                    </Button>
                  </Popconfirm>
                )}
              </Space>
            </List.Item>
          );
        }}
      />
      <ReportModal
        visible={reportModalVisible}
        reportedId={reportedId}
        onClose={() => {
          setReportModalVisible(false);
        }}
      />
    </div>
  );
};

export default FieldInfoList;
