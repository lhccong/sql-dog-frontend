import {useModel} from '@@/exports';
import {Drawer, message} from 'antd';
import React from 'react';
import FieldInfoCard from "@/components/FieldInfoCard/FieldInfoCard";
import {listMyFieldInfoVoByPage} from "@/services/backend/fieldInfoController";

interface Props {
  onImport?: (values: FieldInfoType.FieldInfo) => void;
  visible: boolean;
  onClose: () => void;
}

/**
 * 导入字段抽屉
 *
 * @constructor
 * @author https://github.com/lhccong
 */
const ImportFieldDrawer: React.FC<Props> = (props) => {
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
      searchParams: FieldInfoType.FieldInfoQueryRequest,
      setDataList: (dataList: FieldInfoType.FieldInfo[]) => void,
      setTotal: (total: number) => void,
    ) => {
      listMyFieldInfoVoByPage(searchParams)
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
      title="导入字段"
      contentWrapperStyle={{width: '60%', minWidth: 320}}
      open={visible}
      onClose={onClose}
    >
      <FieldInfoCard onLoad={loadMyData} onImport={onImport}/>
    </Drawer>
  );
};

export default ImportFieldDrawer;
