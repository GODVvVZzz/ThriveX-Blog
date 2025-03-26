import useConfigStore from './modules/config'

/**
 * index.ts  # 统一出口
 * 优势：实现关注点分离，不同业务模块的状态相互隔离
   ​扩展性：新增用户模块只需创建 modules/user.ts

   Header组件进行了数据写入local storage
 */
export { useConfigStore }