import initSqlJs, {Database, SqlJsStatic} from "sql.js";

/**
 * SQL 执行器
 *
 */
let SQL: SqlJsStatic;

// 可以直接远程加载 db 文件
// const buf = await fetch("/sql1.db").then((res) => res.arrayBuffer());
// const db = new SQL.Database(new Uint8Array(buf));

/**
 * 获取初始化 DB
 * @param initSql
 */
export const initDB = async (initSql?: string) => {
  if (!SQL) {
    console.log("开始加载 wasm")
    SQL = await initSqlJs({
      // Required to load the wasm binary asynchronously
      locateFile: () => "./sql-wasm.wasm",
    });
  }
  console.log("完成加载", SQL)
  console.log("初始化数据库的sql:", initSql);
  // Create a database
  const db = new SQL.Database();
  if (initSql) {
    // Execute a single SQL string that contains multiple statements
    db.run(initSql); // Run the query without returning anything
  }
  return db;
};

/**
 * 执行 SQL
 * @param db
 * @param sql
 */
export const runSQL = (db: Database, sql: string) => {
  console.log("当前执行的SQL是：", sql)
  return db.exec(sql);
};
