import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Theme, Web } from '@/types/app/project';

// 使用 ​Zustand 库（现代 React 状态管理工具）实现的 ​前端配置管理模块

interface ConfigState {
  // 是否暗黑模式
  isDark: boolean;
  setIsDark: (status: boolean) => void;  // TypeScript：() => void → 函数不返回任何值

  // 网站配置
  web: Web;
  setWeb: (data: Web) => void;

  // 主题配置
  theme: Theme;
  setTheme: (data: Theme) => void;
}

// Zustand create 创建一个全局可访问的状态存储
export default create(

  // 持久化中间件（persist）
  persist<ConfigState>(
    (set) => ({
      // 初始状态
      isDark: false,
      web: {} as Web,
      theme: {} as Theme,

      // 更新方法
      setIsDark: (status) => set({ isDark: status }),
      setWeb: (data) => set({ web: data }),
      setTheme: (data) => set({ theme: data })
    }),
    {
      name: 'config_storage', // 本地存储的key
      storage: createJSONStorage(() => localStorage) // 使用 localStorage
    }
  )
)