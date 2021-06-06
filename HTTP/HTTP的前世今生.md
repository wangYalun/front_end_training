HTTP(Hypertext Transfer protocol) 翻译成中文就是超文本传输协议，是互联网上一个重要的协议
1991 年 发布了 0.9 版本
1996 年 发布了 1.0 版本
1997 年 发布了 1.1 版本，也是到今天为止传输最广泛的版本
2015 年 发布了 2.0 版本，极大的优化了 HTTP/1.1 的性能和安全性
2018 年 发布了 3.0 版本，继续优化 HTTP/2，激进地使用 UDP 取代了 TCP 协议

#### HTTP 0.9/1.0

0.9 和 1.0 两个版本，就是最传统的 request-response 模式，HTTP0.9 的协议简单到极致，请求时，不支持请求头，只支持 get 方法，没了。
HTTP1.0 扩展了 0.9 的版本，主要增加了几个变化

- 在请求头中加入了 HTTP 版本号
- HTTP 开始有了 header
- 增加了 HTTP Status Code 标识的状态码
- Content-type 可以传输其他的文件

HTTP1.0 有一个很大的性能问题，那就是每次请求一个资源都需要重新建立 TCP 链接，而且是串行请求

#### HTTP/1.1

HTTP1.1 主要解决了 HTTP1.0 的性能问题，以及增了一些新的东西

- 可以设置 keepalive 让 HTTP 重用 TCP 链接，这就是 HTTP 长链接，请求响应式的 HTTP 持久链接
- 支持 pipeline 网络传输，只要第一个请求发出去了，不用等它回来，就可以发送第二个请求出去了，可以减少整体的响应时间
- 支持 Chunked Response，也就是说，在 Response 的时候，不必说明 Content-Length，客户端就不能断开连接，直到收到服务器的 EOF 标识。这种技术又叫 服务端 PUSH 模型
- 增加了 Cache Control 机制
- 协议头增加了 Language, Encoding, Type 等 header 字段
- 增加 HOST
- 加了 OPTIONS 请求
  在 HTTP/1.1 下，HTTP 已经支持了四种网络协议
- 传统的短链接
- 可重用 TCP 的长链接模型
- 服务端 PUSH 模型
- WebSocket 模型

#### HTTP/2

与 HTTP1.1 主要的不同

- HTTP/2 是一个二进制协议，增加传输数据的效率
- HTTP/2 是可以在一个 TCP 链接中并发请求多个 HTTP 请求，移除了 HTTP/1.1 中的串行请求。
- HTTP/2 会压缩头，如果你同时发出多个请求，他们的头是一样的或是相似的，那么，协议会帮你消除重复的部分。这就是所谓的 HPACK 算法（参看 RFC 7541 附录 A）
- HTTP/2 允许服务端在客户端放 cache，又叫服务端 push，也就是说，你没有请求的东西，我服务端可以先送给你放在你的本地缓存中。比如，你请求 X，我服务端知道 X 依赖于 Y，虽然你没有的请求 Y，但我把把 Y 跟着 X 的请求一起返回客户端。

#### HTTP/3

QUIC- Quick UDP Internet Connections
