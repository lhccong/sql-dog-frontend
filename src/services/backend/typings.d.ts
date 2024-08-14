declare namespace API {
  type AuthCallback = {
    code?: string;
    auth_code?: string;
    state?: string;
    authorization_code?: string;
    oauth_token?: string;
    oauth_verifier?: string;
  };

  type BaseResponseBoolean = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseCaptchaVO = {
    code?: number;
    data?: CaptchaVO;
    message?: string;
  };

  type BaseResponseExecuteInfoVO = {
    code?: number;
    data?: ExecuteInfoVO;
    message?: string;
  };

  type BaseResponseFieldInfoVO = {
    code?: number;
    data?: FieldInfoVO;
    message?: string;
  };

  type BaseResponseGenerateVO = {
    code?: number;
    data?: GenerateVO;
    message?: string;
  };

  type BaseResponseLoginUserVO = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type BaseResponseLong = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponsePageExecuteInfo = {
    code?: number;
    data?: PageExecuteInfo;
    message?: string;
  };

  type BaseResponsePageExecuteInfoVO = {
    code?: number;
    data?: PageExecuteInfoVO;
    message?: string;
  };

  type BaseResponsePageFieldInfo = {
    code?: number;
    data?: PageFieldInfo;
    message?: string;
  };

  type BaseResponsePageFieldInfoVO = {
    code?: number;
    data?: PageFieldInfoVO;
    message?: string;
  };

  type BaseResponsePageTableInfo = {
    code?: number;
    data?: PageTableInfo;
    message?: string;
  };

  type BaseResponsePageTableInfoVo = {
    code?: number;
    data?: PageTableInfoVo;
    message?: string;
  };

  type BaseResponsePageTopicLevel = {
    code?: number;
    data?: PageTopicLevel;
    message?: string;
  };

  type BaseResponsePageTopicLevelVo = {
    code?: number;
    data?: PageTopicLevelVo;
    message?: string;
  };

  type BaseResponsePageTopicVo = {
    code?: number;
    data?: PageTopicVo;
    message?: string;
  };

  type BaseResponsePageUser = {
    code?: number;
    data?: PageUser;
    message?: string;
  };

  type BaseResponsePageUserVO = {
    code?: number;
    data?: PageUserVO;
    message?: string;
  };

  type BaseResponseSqlAnalysisVO = {
    code?: number;
    data?: SqlAnalysisVO;
    message?: string;
  };

  type BaseResponseString = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponseTableInfoVo = {
    code?: number;
    data?: TableInfoVo;
    message?: string;
  };

  type BaseResponseTableSchema = {
    code?: number;
    data?: TableSchema;
    message?: string;
  };

  type BaseResponseTokenLoginUserVo = {
    code?: number;
    data?: TokenLoginUserVo;
    message?: string;
  };

  type BaseResponseTopicLevelVo = {
    code?: number;
    data?: TopicLevelVo;
    message?: string;
  };

  type BaseResponseUser = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserVO = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type CaptchaVO = {
    key?: string;
    code?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type ExecuteInfo = {
    id?: number;
    sqlContent?: string;
    sqlAnalyzeResult?: string;
    reviewStatus?: number;
    reviewMessage?: string;
    userId?: number;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
  };

  type ExecuteInfoAddRequest = {
    sqlContent?: string;
    sqlAnalyzeResult?: string;
    reviewStatus?: number;
    reviewMessage?: string;
  };

  type ExecuteInfoEditRequest = {
    id?: number;
    sqlContent?: string;
    sqlAnalyzeResult?: string;
    reviewStatus?: number;
    reviewMessage?: string;
  };

  type ExecuteInfoQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    id?: number;
    sqlContent?: string;
    sqlAnalyzeResult?: string;
    reviewStatus?: number;
    reviewMessage?: string;
    searchText?: string;
    userId?: number;
  };

  type ExecuteInfoUpdateRequest = {
    id?: number;
    sqlContent?: string;
    sqlAnalyzeResult?: string;
    reviewStatus?: number;
    reviewMessage?: string;
  };

  type ExecuteInfoVO = {
    id?: number;
    sqlContent?: string;
    sqlAnalyzeResult?: string;
    reviewStatus?: number;
    reviewMessage?: string;
    userId?: number;
    user?: UserVO;
  };

  type Field = {
    fieldName?: string;
    fieldType?: string;
    defaultValue?: string;
    notNull?: boolean;
    comment?: string;
    primaryKey?: boolean;
    autoIncrement?: boolean;
    mockType?: string;
    mockParams?: string;
    onUpdate?: string;
  };

  type FieldInfo = {
    id?: number;
    name?: string;
    fieldName?: string;
    content?: string;
    reviewStatus?: number;
    reviewMessage?: string;
    userId?: number;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
  };

  type FieldInfoAddRequest = {
    name?: string;
    fieldName?: string;
    content?: string;
  };

  type FieldInfoEditRequest = {
    id?: number;
    name?: string;
    fieldName?: string;
    content?: string;
  };

  type FieldInfoQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    id?: number;
    name?: string;
    fieldName?: string;
    content?: string;
    reviewStatus?: number;
    userId?: number;
    searchText?: string;
  };

  type FieldInfoUpdateRequest = {
    id?: number;
    name?: string;
    fieldName?: string;
    content?: string;
    reviewStatus?: number;
    reviewMessage?: string;
  };

  type FieldInfoVO = {
    id?: number;
    name?: string;
    fieldName?: string;
    content?: string;
    reviewStatus?: number;
    userId?: number;
    reviewMessage?: string;
    createTime?: string;
    updateTime?: string;
    userVO?: UserVO;
  };

  type GenerateBySqlRequest = {
    sql?: string;
  };

  type GenerateVO = {
    tableSchema?: TableSchema;
    createSql?: string;
    dataList?: Record<string, any>[];
    insertSql?: string;
    dataJson?: string;
    javaEntityCode?: string;
    javaObjectCode?: string;
    typescriptTypeCode?: string;
    plantUmlCode?: string;
  };

  type getExecuteInfoVOByIdParams = {
    id: number;
  };

  type getFieldInfoVoByIdParams = {
    id: number;
  };

  type getTableInfoVoByIdParams = {
    id: number;
  };

  type getTopicLevelVoByIdParams = {
    id: number;
  };

  type getUserByIdParams = {
    id: number;
  };

  type getUserVoByIdParams = {
    id: number;
  };

  type LoginUserVO = {
    id?: number;
    userName?: string;
    userAvatar?: string;
    userProfile?: string;
    userRole?: string;
    createTime?: string;
    updateTime?: string;
  };

  type OrderItem = {
    column?: string;
    asc?: boolean;
  };

  type PageExecuteInfo = {
    records?: ExecuteInfo[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageExecuteInfo;
    searchCount?: PageExecuteInfo;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageExecuteInfoVO = {
    records?: ExecuteInfoVO[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageExecuteInfoVO;
    searchCount?: PageExecuteInfoVO;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageFieldInfo = {
    records?: FieldInfo[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageFieldInfo;
    searchCount?: PageFieldInfo;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageFieldInfoVO = {
    records?: FieldInfoVO[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageFieldInfoVO;
    searchCount?: PageFieldInfoVO;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageTableInfo = {
    records?: TableInfo[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageTableInfo;
    searchCount?: PageTableInfo;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageTableInfoVo = {
    records?: TableInfoVo[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageTableInfoVo;
    searchCount?: PageTableInfoVo;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageTopicLevel = {
    records?: TopicLevel[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageTopicLevel;
    searchCount?: PageTopicLevel;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageTopicLevelVo = {
    records?: TopicLevelVo[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageTopicLevelVo;
    searchCount?: PageTopicLevelVo;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageTopicVo = {
    records?: TopicVo[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageTopicVo;
    searchCount?: PageTopicVo;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageUser = {
    records?: User[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageUser;
    searchCount?: PageUser;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageUserVO = {
    records?: UserVO[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageUserVO;
    searchCount?: PageUserVO;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type ReviewRequest = {
    id?: number;
    reviewStatus?: number;
    reviewMessage?: string;
  };

  type SaTokenInfo = {
    tokenName?: string;
    tokenValue?: string;
    isLogin?: boolean;
    loginId?: Record<string, any>;
    loginType?: string;
    tokenTimeout?: number;
    sessionTimeout?: number;
    tokenSessionTimeout?: number;
    tokenActiveTimeout?: number;
    loginDevice?: string;
    tag?: string;
  };

  type SqlAnalysisRequest = {
    sql?: string;
    detail?: string;
  };

  type SqlAnalysisVO = {
    sqlAnalysisBySlowMirror?: string;
    sqlAnalysisByAIGC?: string;
  };

  type TableInfo = {
    id?: number;
    name?: string;
    content?: string;
    reviewStatus?: number;
    reviewMessage?: string;
    userId?: number;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
  };

  type TableInfoAddRequest = {
    name?: string;
    content?: string;
    reviewStatus?: number;
    reviewMessage?: string;
  };

  type TableInfoEditRequest = {
    id?: number;
    name?: string;
    content?: string;
  };

  type TableInfoQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    id?: number;
    name?: string;
    content?: string;
    reviewStatus?: number;
    reviewMessage?: string;
    userId?: number;
    searchText?: string;
  };

  type TableInfoUpdateRequest = {
    id?: number;
    name?: string;
    content?: string;
    reviewStatus?: number;
    reviewMessage?: string;
  };

  type TableInfoVo = {
    id?: number;
    name?: string;
    content?: string;
    reviewStatus?: number;
    reviewMessage?: string;
    userId?: number;
    user?: UserVO;
  };

  type TableSchema = {
    dbName?: string;
    tableName?: string;
    tableComment?: string;
    mockNum?: number;
    fieldList?: Field[];
  };

  type TokenLoginUserVo = {
    id?: number;
    userName?: string;
    userAvatar?: string;
    userProfile?: string;
    userRole?: string;
    createTime?: string;
    updateTime?: string;
    saTokenInfo?: SaTokenInfo;
  };

  type TopicLevel = {
    id?: number;
    title?: string;
    initSQL?: string;
    mdContent?: string;
    defaultSQL?: string;
    answer?: string;
    hint?: string;
    type?: string;
    userId?: number;
    createTime?: string;
    preLevelId?: number;
    nextLevelId?: number;
    updateTime?: string;
    isDelete?: number;
  };

  type TopicLevelAddRequest = {
    title?: string;
    initSQL?: string;
    mdContent?: string;
    defaultSQL?: string;
    answer?: string;
    hint?: string;
    type?: string;
  };

  type TopicLevelEditRequest = {
    id?: number;
    title?: string;
    initSQL?: string;
    mdContent?: string;
    defaultSQL?: string;
    answer?: string;
    hint?: string;
    type?: string;
  };

  type TopicLevelQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    id?: number;
    title?: string;
    initSQL?: string;
    mdContent?: string;
    defaultSQL?: string;
    answer?: string;
    hint?: string;
    type?: string;
    searchText?: string;
    userId?: number;
  };

  type TopicLevelUpdateRequest = {
    id?: number;
    title?: string;
    initSQL?: string;
    mdContent?: string;
    defaultSQL?: string;
    answer?: string;
    hint?: string;
    type?: string;
  };

  type TopicLevelVo = {
    id?: number;
    title?: string;
    initSQL?: string;
    mdContent?: string;
    defaultSQL?: string;
    answer?: string;
    hint?: string;
    type?: string;
    preLevelId?: number;
    nextLevelId?: number;
    createTime?: string;
    updateTime?: string;
    userId?: number;
    user?: UserVO;
  };

  type TopicQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    id?: number;
    title?: string;
    type?: string;
    searchText?: string;
  };

  type TopicVo = {
    id?: number;
    title?: string;
    type?: string;
  };

  type uploadFileParams = {
    uploadFileRequest: UploadFileRequest;
  };

  type UploadFileRequest = {
    biz?: string;
  };

  type User = {
    id?: number;
    userAccount?: string;
    userPassword?: string;
    unionId?: string;
    mpOpenId?: string;
    userName?: string;
    userAvatar?: string;
    userProfile?: string;
    userRole?: string;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
  };

  type UserAddRequest = {
    userName?: string;
    userAccount?: string;
    userAvatar?: string;
    userRole?: string;
  };

  type userLoginByGithubParams = {
    callback: AuthCallback;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    id?: number;
    unionId?: string;
    mpOpenId?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserRegisterRequest = {
    userAccount?: string;
    userPassword?: string;
    checkPassword?: string;
    verKey?: string;
    verCode?: string;
  };

  type UserUpdateMyRequest = {
    userName?: string;
    userAvatar?: string;
    userProfile?: string;
  };

  type UserUpdateRequest = {
    id?: number;
    userName?: string;
    userAvatar?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserVO = {
    id?: number;
    userName?: string;
    userAvatar?: string;
    userProfile?: string;
    userRole?: string;
    createTime?: string;
  };
}
