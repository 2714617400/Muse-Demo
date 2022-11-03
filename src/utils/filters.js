/**
 * 全局filters, 定义通用处理函数
 */
export const str = val => {
  return val + parseInt(Date.parse(new Date()) / 1000); //当前时间戳
}