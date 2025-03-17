# 使用轻量级 Node.js 20 Alpine 作为基础镜像
FROM node:20-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json（如果有），利用 Docker 缓存加速构建
COPY package.json package-lock.json ./

# 安装依赖（使用 --frozen-lockfile 确保依赖版本一致）
RUN npm install --frozen-lockfile

# 复制项目代码
COPY . .

# 构建 Next.js 项目
RUN npm run build

# 暴露 3000 端口
EXPOSE 3000

# 运行 Next.js 服务器
CMD ["npm", "start"]
