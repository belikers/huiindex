/**
 * 默认配置
 * @author hjh
 */
module.exports = {
  redisConfig: {
    host: "localhost",
    port: "6379",
    password: "123456",
    db: 2,
  },
  // MySQL 配置
  dbConfig: {
    database: "huiindex",
    username: "remohjh",
    password: "hjh123",
    host: "localhost",
    port: 3306,
  },
  // 百度翻译配置，自行申请免费版即可（https://fanyi-api.baidu.com/）
  baiduFanYiConfig: {
    appid: "20221020001403081",
    key: "0fQqCT8nhjvIT6obV2CF",
  },
};
