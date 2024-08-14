import {useModel} from '@@/exports';
import {Drawer, message} from 'antd';
import React from 'react';
import TableInfoCard from "@/components/TableInfoCard/TableInfoCard";
import {listMyTableInfoVoByPage} from "@/services/backend/tableInfoController";

interface Props {
  onImport: (values: API.TableInfoVo) => void;
  visible: boolean;
  onClose: () => void;
}

/**
 * 导入表抽屉
 *
 * @constructor
 * @author https://github.com/lhccong
 */
const ImportTableDrawer: React.FC<Props> = (props) => {
  const {visible, onImport, onClose} = props;
  const {initialState} = useModel('@@initialState');
  const loginUser = initialState?.currentUser;

  /**
   * 加载我的数据
   * @param searchParams
   * @param setDataList
   * @param setTotal
   */
  const loadMyData = loginUser
    ? (
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
    }
    : undefined;

  return (
    <Drawer
      title="导入表"
      contentWrapperStyle={{width: '60%', minWidth: 320}}
      open={visible}
      onClose={onClose}
    >
      <TableInfoCard onLoad={loadMyData} onImport={onImport}/>
    </Drawer>
  );
};

export default ImportTableDrawer;
