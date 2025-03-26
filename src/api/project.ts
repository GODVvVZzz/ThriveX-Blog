import Request from "@/utils/request";

/**
 * TypeScript 的泛型语法。<T> 表示这个函数可以接受一个类型参数 T，用于指定返回数据的类型。
 * Request<T> 是一个通用的 HTTP 请求函数
 * @param type 
 * @returns 
 */
// 获取项目配置
export const getConfigDataAPI = <T>(type: string) => Request<T>("GET", `/config/list/${type}`)

// 修改项目配置
export const editConfigDataAPI = (type: string, data: object) => Request<{ [string: string]: string }>("PATCH", `/config/${type}`, { data })