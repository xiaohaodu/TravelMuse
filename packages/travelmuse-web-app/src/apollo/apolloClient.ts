import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// GraphQL 服务器的 URL
const uri = "http://localhost:4000/graphql";

// 创建一个 HTTP 链接
const httpLink = createHttpLink({ uri });

// 添加请求前的 auth header
const authLink = setContext((_, { headers }) => {
  // 获取存储在本地的 token
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// 使用 authLink 和 httpLink 构建链接
const link = authLink.concat(httpLink);

// 初始化 Apollo 客户端
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
