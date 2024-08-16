import {useModel} from '@umijs/max';
import {
  Button,
  Descriptions,
  Divider,
  List,
  message,
  Popconfirm,
  Space,
  Tag,
} from 'antd';
import {PaginationConfig} from 'antd/es/pagination';
import copy from 'copy-to-clipboard';
import React, {useEffect, useState} from 'react';
import './index.less';
import ReportModal from "@/components/ReportModal/ReportModal";
import {deleteTableInfo, generateCreateSql} from "@/services/backend/tableInfoController";

interface Props {
  pagination: PaginationConfig;
  loading?: boolean;
  dataList: API.TableInfoVo[];
  showTag?: boolean;
  onImport?: (values: API.TableInfoVo) => void;
}

/**
 * 表信息列表
 *
 * @constructor
 * @author https://github.com/lhccong
 */
const TableInfoList: React.FC<Props> = (props) => {
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
   *  删除节点
   * @param id
   */
  const doDelete = async (id: number) => {
    const hide = message.loading('正在删除');
    if (!id) return true;
    try {
      await deleteTableInfo({
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
    <div className="table-info-list">
      <List<API.TableInfoVo>
        itemLayout="vertical"
        size="large"
        loading={loading}
        pagination={pagination}
        dataSource={list}
        renderItem={(item, index) => {
          // @ts-ignore
          const content: TableSchema = JSON.parse(item.content);
          return (
            <List.Item
              key={index}
              extra={
                onImport && (
                  <Button
                    onClick={() => {
                      onImport(item);
                    }}
                  >
                    导入
                  </Button>
                )
              }
            >
              <Descriptions
                title={
                  <Space align="center">
                    <div>{item.name}</div>
                    <div>
                      {item.reviewStatus === 1 && item.userId != 1 && (
                        <Tag color="success">公开</Tag>
                      )}
                      {item.userId == 1 && <Tag color="gold">官方</Tag>}
                    </div>
                  </Space>
                }
                column={2}
              >
                <Descriptions.Item label="表名">
                  {content.tableName}
                </Descriptions.Item>
                <Descriptions.Item label="表注释">
                  {content.tableComment ?? '无'}
                </Descriptions.Item>
                <Descriptions.Item label="字段列表">
                  {content.fieldList.map((field) => field.fieldName).join(', ')}
                </Descriptions.Item>
              </Descriptions>
              <Space
                split={<Divider type="vertical"/>}
                style={{fontSize: 14}}
              >
                <Button
                  type="text"
                  onClick={() => {
                    generateCreateSql({id: item.id})
                      .then((res) => {
                        copy(res.data as string);
                        message.success('复制建表 SQL 成功');
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
                    setReportedId(item.id as any);
                    setReportModalVisible(true);
                  }}
                >
                  举报
                </Button>
                {loginUser && loginUser.id === item.userId && (
                  <Popconfirm
                    title="你确定要删除么？"
                    onConfirm={() => {
                      doDelete(item.id as any);
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

export default TableInfoList;
