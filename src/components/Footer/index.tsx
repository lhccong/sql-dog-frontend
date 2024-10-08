import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';

const Footer: React.FC = () => {
  const defaultMessage = '聪ζ';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'white',
        paddingTop: 30
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'github',
          title: '聪ζ',
          href: 'https://github.com/lhccon',
          blankTarget: true,
        },
        {
          key: 'shortDog',
          title: (
            <>
              <GithubOutlined/> wanwu产物-SQL Dog源码
            </>
          ),
          href: 'https://github.com/lhccong/sql-dog-backend',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
