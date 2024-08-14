// import TableInfoCard from '@/components/TableInfoCard';
// import { listMyAddTableInfoByPage } from '@/services/tableInfoService';
import {PageContainer} from '@ant-design/pro-components';
import {useNavigate} from '@umijs/max';
import {Col, message, Radio, RadioChangeEvent, Row} from 'antd';
import React, {useState} from 'react';
import {listMyTableInfoVoByPage} from "@/services/backend/tableInfoController";
import TableInfoCard from "@/components/TableInfoCard/TableInfoCard";

/**
 * 表信息页
 *
 * @constructor
 * @author https://github.com/liyupi
 */
const TableInfo: React.FC = () => {
  const [layout, setLayout] = useState('half');

  const navigate = useNavigate();

  /**
   * 加载我的数据
   * @param searchParams
   * @param setDataList
   * @param setTotal
   */
  const loadMyData = (
    searchParams: TableInfoType.TableInfoQueryRequest,
    setDataList: (dataList: API.TableInfoVo[]) => void,
    setTotal: (total: number) => void,
  ) => {
    listMyTableInfoVoByPage(searchParams)
      .then((res) => {
        setDataList(res.data?.records as any);
        setTotal(res.data?.total as any);
      })
      .catch((e) => {
        message.error('加载失败，' + e.message);
      });
  };

  // 导入表，跳转到主页
  const doImport = (tableInfo: API.TableInfoVo) => {
    navigate(`/code?table_id=${tableInfo.id}`);
  };

  /**
   * 更改布局
   * @param e
   */
  const onLayoutChange = (e: RadioChangeEvent) => {
    setLayout(e.target.value);
  };

  return (
    <div className="table-info">
      <PageContainer
        title={
          <>
          </>
        }
        extra={
          <div style={{marginLeft: 0}}>
            切换布局：
            <Radio.Group onChange={onLayoutChange} value={layout}>
              <Radio.Button value="input">公开</Radio.Button>
              <Radio.Button value="half">同屏</Radio.Button>
              <Radio.Button value="output">个人</Radio.Button>
            </Radio.Group>
          </div>
        }
      >
        <Row gutter={[12, 12]}>
          <Col
            xs={24}
            xl={layout === 'half' ? 12 : 24}
            order={layout === 'output' ? 2 : 1}
          >
            <TableInfoCard
              title="公开表信息"
              showTag={false}
              onImport={doImport}
            />
          </Col>
          <Col
            xs={24}
            xl={layout === 'half' ? 12 : 24}
            order={layout === 'output' ? 1 : 2}
          >
            <TableInfoCard
              title="个人表"
              onImport={doImport}
              onLoad={loadMyData}
              needLogin
            />
          </Col>
        </Row>
      </PageContainer>
    </div>
  );
};

export default TableInfo;
