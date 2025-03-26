"use client"

import { useEffect, useRef } from 'react';
import { useConfigStore } from '@/stores'
import Typed from 'typed.js';

export default ({ className }: { className?: string }) => {
    const { theme } = useConfigStore()

    const el = useRef(null);

    // 组件显示时，刷新设置下面的span 通过el.current ref={el} 进行关联
    useEffect(() => {
        if (theme.swiper_text) {
            const strings = JSON.parse(theme.swiper_text || '{}')

            const typed = new Typed(el.current, {
                strings,
                typeSpeed: 100,
                backSpeed: 30,
                loop: true
            });

            return () => typed.destroy();
        }
    }, [theme]);

    // 在 React 中，ref 是一个特殊的属性，用于直接访问 DOM 元素或 React 组件实例。
    // 它的核心作用是：​在 React 的声明式编程中，提供一种命令式操作元素的方式。
    return <span ref={el} className={className} />
}