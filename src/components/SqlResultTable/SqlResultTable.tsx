import React, {useMemo} from 'react';
import {Table} from 'antd';
import {QueryExecResult} from "sql.js";

interface SqlResultTableProps {
  result: QueryExecResult[];
}

export const SqlResultTable: React.FC<SqlResultTableProps> = ({result}) => {
  // 结果表格列头
  const columns = useMemo(() => {
    if (result?.[0]?.columns) {
      return result[0].columns.map((column) => ({
        title: column,
        dataIndex: column,
      }));
    }
    return [];
  }, [result]);

  // 结果表格数据
  const resultData = useMemo(() => {
    if (!result?.[0]?.values) {
      return [];
    }
    const tempColumns = result[0].columns;
    return result[0].values.map((originRow) => {
      const rowData = {};
      originRow.forEach((col, index) => {
        // @ts-ignore
        rowData[tempColumns[index]] = col;
      });
      return rowData;
    });
  }, [result]);

  return (
    <Table
      className="sql-result-table"
      columns={columns}
      dataSource={resultData}
      size="middle"
      pagination={{hideOnSinglePage: true, pageSize: 20}}
    />
  );
};
