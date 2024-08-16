import { ProForm, ProFormText } from '@ant-design/pro-components';
import { message, Modal } from 'antd';
import React from 'react';
import { addFieldInfo } from '@/services/backend/fieldInfoController';

interface Props {
  visible: boolean;
  onSubmit: (values: API.FieldInfoAddRequest) => void;
  onCancel: () => void;
}

/**
 * 添加节点
 * @param fields
 */
const handleAdd = async (fields: API.FieldInfoAddRequest) => {
  const hide = message.loading('正在添加');
  try {
    await addFieldInfo(fields);
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
        <ProForm<API.FieldInfoAddRequest>
            onFinish={async (values) => {
              const success = await handleAdd(values);
              if (success) {
                onSubmit?.(values);
              }
            }}
        >
          <ProFormText
              name="name"
              label="名称"
              placeholder="请输入名称"
          />
          <ProFormText
              name="fieldname"
              label="字段名称"
              placeholder="请输入字段名称"
          />
          <ProFormText
              name="content"
              label="字段信息"
              placeholder="请输入字段信息"
              rules={[{ required: true, message: '字段信息不能为空' }]}
          />
        </ProForm>
      </Modal>
  );
};

export default CreateModal;
