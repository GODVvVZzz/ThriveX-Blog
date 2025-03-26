import Slide from "@/components/Slide";
import Typed from "@/components/Typed";
import Starry from "@/components/Starry"
import Container from "@/components/Container";
import ArticleLayout from "@/components/ArticleLayout";
import Sidebar from "@/components/Sidebar";

import { getConfigDataAPI } from '@/api/project'
import { Theme } from "@/types/app/project";

/**
 * tsconfig.json中如下配置：
 *     "paths": {
          "@/*": [
            "./src/*"
          ]
        },

   @ 被映射为 src 目录
 */

interface Props {
  // searchParams 是一个 Promise，表示它是一个异步操作，最终会返回一个包含 page 属性的对象。
  searchParams: Promise<{ page: number }>;
};

export default async (props: Props) => {
  const searchParams = await props.searchParams;
  const page = searchParams.page || 1;
  /**
   * <Theme> 是 TypeScript 的泛型语法，表示 getConfigDataAPI 返回的数据类型是 Theme。
   * "layout" 是传递给 getConfigDataAPI 的参数，可能用于指定获取哪种配置数据。
   */
  const { data } = (await getConfigDataAPI<Theme>("layout")) || { data: {} as Theme }

  return (
    <>
      {/* <Lantern data={['新', '春', '快', '乐']} /> */}

{
  /**
 * Slide 自定义组件 用于显示轮播图
   src={data?.swiper_image}：将 data.swiper_image 作为 Slide 组件的 src 属性传递。
   data?.swiper_image 使用了可选链操作符（?.），确保如果 data 为 null 或 undefined，不会报错。
 */
}
      <Slide src={data?.swiper_image}>
        {/* 星空背景组件 */}
        <Starry />
        {/* 打字机组件 */}
        <Typed className="absolute top-[45%] sm:top-[40%] left-[50%] transform -translate-x-1/2 w-[80%] text-center text-white xs:text-xl sm:text-[30px] leading-7 sm:leading-[40px] md:leading-[50px] custom_text_shadow"></Typed>
      </Slide>

      <Container>
        {/* 文章列表 */}
        <ArticleLayout page={page} />
        {/* 侧边栏 */}
        <Sidebar />
      </Container>
    </>
  );
};