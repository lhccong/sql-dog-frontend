declare namespace API {
  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseListUrlTagCategoryVo_ = {
    code?: number;
    data?: UrlTagCategoryVo[];
    message?: string;
  };

  type BaseResponseLoginUserVO_ = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type BaseResponseLong_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponsePageUrlRelate_ = {
    code?: number;
    data?: PageUrlRelate_;
    message?: string;
  };

  type BaseResponsePageUrlRelateVo_ = {
    code?: number;
    data?: PageUrlRelateVo_;
    message?: string;
  };

  type BaseResponsePageUser_ = {
    code?: number;
    data?: PageUser_;
    message?: string;
  };

  type BaseResponsePageUserVO_ = {
    code?: number;
    data?: PageUserVO_;
    message?: string;
  };

  type BaseResponseString_ = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponseTokenLoginUserVo_ = {
    code?: number;
    data?: TokenLoginUserVo;
    message?: string;
  };

  type BaseResponseUrlRelate_ = {
    code?: number;
    data?: UrlRelate;
    message?: string;
  };

  type BaseResponseUrlRelateVo_ = {
    code?: number;
    data?: UrlRelateVo;
    message?: string;
  };

  type BaseResponseUrlTagVo_ = {
    code?: number;
    data?: UrlTagVo;
    message?: string;
  };

  type BaseResponseUser_ = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserVO_ = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type checkUsingGETParams = {
    /** echostr */
    echostr?: string;
    /** nonce */
    nonce?: string;
    /** signature */
    signature?: string;
    /** timestamp */
    timestamp?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type getUrlRelateVoByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUrlRelateVoByShortLinkUsingGETParams = {
    /** shortLink */
    shortLink?: string;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserVoByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type LoginUserVO = {
    createTime?: string;
    id?: number;
    updateTime?: string;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type ModelAndView = {
    empty?: boolean;
    model?: Record<string, any>;
    modelMap?: Record<string, any>;
    reference?: boolean;
    status?:
      | 'CONTINUE'
      | 'SWITCHING_PROTOCOLS'
      | 'PROCESSING'
      | 'CHECKPOINT'
      | 'OK'
      | 'CREATED'
      | 'ACCEPTED'
      | 'NON_AUTHORITATIVE_INFORMATION'
      | 'NO_CONTENT'
      | 'RESET_CONTENT'
      | 'PARTIAL_CONTENT'
      | 'MULTI_STATUS'
      | 'ALREADY_REPORTED'
      | 'IM_USED'
      | 'MULTIPLE_CHOICES'
      | 'MOVED_PERMANENTLY'
      | 'FOUND'
      | 'MOVED_TEMPORARILY'
      | 'SEE_OTHER'
      | 'NOT_MODIFIED'
      | 'USE_PROXY'
      | 'TEMPORARY_REDIRECT'
      | 'PERMANENT_REDIRECT'
      | 'BAD_REQUEST'
      | 'UNAUTHORIZED'
      | 'PAYMENT_REQUIRED'
      | 'FORBIDDEN'
      | 'NOT_FOUND'
      | 'METHOD_NOT_ALLOWED'
      | 'NOT_ACCEPTABLE'
      | 'PROXY_AUTHENTICATION_REQUIRED'
      | 'REQUEST_TIMEOUT'
      | 'CONFLICT'
      | 'GONE'
      | 'LENGTH_REQUIRED'
      | 'PRECONDITION_FAILED'
      | 'PAYLOAD_TOO_LARGE'
      | 'REQUEST_ENTITY_TOO_LARGE'
      | 'URI_TOO_LONG'
      | 'REQUEST_URI_TOO_LONG'
      | 'UNSUPPORTED_MEDIA_TYPE'
      | 'REQUESTED_RANGE_NOT_SATISFIABLE'
      | 'EXPECTATION_FAILED'
      | 'I_AM_A_TEAPOT'
      | 'INSUFFICIENT_SPACE_ON_RESOURCE'
      | 'METHOD_FAILURE'
      | 'DESTINATION_LOCKED'
      | 'UNPROCESSABLE_ENTITY'
      | 'LOCKED'
      | 'FAILED_DEPENDENCY'
      | 'TOO_EARLY'
      | 'UPGRADE_REQUIRED'
      | 'PRECONDITION_REQUIRED'
      | 'TOO_MANY_REQUESTS'
      | 'REQUEST_HEADER_FIELDS_TOO_LARGE'
      | 'UNAVAILABLE_FOR_LEGAL_REASONS'
      | 'INTERNAL_SERVER_ERROR'
      | 'NOT_IMPLEMENTED'
      | 'BAD_GATEWAY'
      | 'SERVICE_UNAVAILABLE'
      | 'GATEWAY_TIMEOUT'
      | 'HTTP_VERSION_NOT_SUPPORTED'
      | 'VARIANT_ALSO_NEGOTIATES'
      | 'INSUFFICIENT_STORAGE'
      | 'LOOP_DETECTED'
      | 'BANDWIDTH_LIMIT_EXCEEDED'
      | 'NOT_EXTENDED'
      | 'NETWORK_AUTHENTICATION_REQUIRED';
    view?: View;
    viewName?: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageUrlRelate_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UrlRelate[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUrlRelateVo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UrlRelateVo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUser_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: User[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type redirectToLongLinkUsingGETParams = {
    /** shortLink */
    shortLink: string;
  };

  type SaTokenInfo = {
    isLogin?: boolean;
    loginDevice?: string;
    loginId?: Record<string, any>;
    loginType?: string;
    sessionTimeout?: number;
    tag?: string;
    tokenActiveTimeout?: number;
    tokenName?: string;
    tokenSessionTimeout?: number;
    tokenTimeout?: number;
    tokenValue?: string;
  };

  type TokenLoginUserVo = {
    createTime?: string;
    id?: number;
    saTokenInfo?: SaTokenInfo;
    updateTime?: string;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type uploadFileUsingPOSTParams = {
    biz?: string;
  };

  type UrlRelate = {
    allowNum?: number;
    createTime?: string;
    expireTime?: string;
    id?: number;
    ipNums?: number;
    isDelete?: number;
    longUrl?: string;
    password?: string;
    privateTarget?: number;
    sortUrl?: string;
    status?: number;
    tags?: string;
    title?: string;
    updateTime?: string;
    urlImg?: string;
    userId?: number;
    userNums?: number;
    visits?: number;
  };

  type UrlRelateAddRequest = {
    allowNum?: number;
    expireTime?: string;
    longUrl?: string;
    password?: string;
    privateTarget?: number;
    tags?: string;
    title?: string;
    urlImg?: string;
  };

  type UrlRelateQueryRequest = {
    current?: number;
    id?: number;
    longUrl?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    title?: string;
    userId?: number;
  };

  type UrlRelateUpdateRequest = {
    allowNum?: number;
    expireTime?: string;
    id?: number;
    longUrl?: string;
    password?: string;
    privateTarget?: number;
    status?: number;
    tags?: string;
    title?: string;
    urlImg?: string;
  };

  type UrlRelateVo = {
    allowNum?: number;
    expireTime?: string;
    id?: number;
    ipNums?: number;
    longUrl?: string;
    privateTarget?: number;
    sortUrl?: string;
    status?: number;
    tags?: UrlTagVo[];
    title?: string;
    urlImg?: string;
    userNums?: number;
    visits?: number;
  };

  type UrlTagAddRequest = {
    name?: string;
    parentId?: number;
  };

  type UrlTagCategoryVo = {
    id?: number;
    name?: string;
    tags?: UrlTagVo[];
  };

  type UrlTagVo = {
    color?: string;
    id?: number;
    name?: string;
    parentId?: number;
  };

  type User = {
    createTime?: string;
    id?: number;
    isDelete?: number;
    mpOpenId?: string;
    unionId?: string;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserAddRequest = {
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };

  type userLoginByWxOpenUsingGETParams = {
    /** code */
    code: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    current?: number;
    id?: number;
    mpOpenId?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    unionId?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserRegisterRequest = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
    captchaVerification?: string;
  };

  type UserUpdateMyRequest = {
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
  };

  type UserUpdateRequest = {
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserVO = {
    createTime?: string;
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type View = {
    contentType?: string;
  };
}
