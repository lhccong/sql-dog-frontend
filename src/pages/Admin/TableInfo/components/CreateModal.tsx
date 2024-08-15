import { ProForm, ProFormText } from '@ant-design/pro-components';
import { message, Modal } from 'antd';
import React from 'react';
import { addTableInfo } from '@/services/backend/tableInfoController';

interface Props {
  visible: boolean;
  onSubmit: (values: API.TableInfoAddRequest) => void;
  onCancel: () => void;
}

/**
 * 添加节点
 * @param fields
 */
const handleAdd = async (fields: API.TableInfoAddRequest) => {
  const hide = message.loading('正在添加');
  try {
    await addTableInfo(fields);
    hide();
    message.success('创建成功');
    return true;
  } catch (error: any) {
    hide();
    message.error('创建失败，' + error.message);
    return false;
  }
};

/**
 * 创建弹窗
 * @param props
 * @constructor
 */
const CreateModal: React.FC<Props> = (props) => {
  const { visible, onSubmit, onCancel } = props;

  return (
      <Modal
          destroyOnClose
          title={'创建'}
          open={visible}
          footer={null}
          onCancel={onCancel}
      >
        <ProForm<API.TableInfoAddRequest>
            onFinish={async (values) => {
              const success = await handleAdd(values);
              if (success) {
                onSubmit?.(values);
              }
            }}
        >
          <ProFormText
              name="name"
              label="表格名称"
              placeholder="请输入表格名称"
              rules={[{ required: true, message: '表格名称不能为空' }]}
          />
          <ProFormText
              name="content"
              label="表格信息"
              placeholder="请输入表格信息"
              rules={[{ required: true, message: '表格信息不能为空' }]}
          />
        </ProForm>
      </Modal>
  );
};

export default CreateModal;
