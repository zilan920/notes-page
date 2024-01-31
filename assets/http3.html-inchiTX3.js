const e=JSON.parse('{"key":"v-1b419d8a","path":"/contents/http3.html","title":"HTTP3 and RTT","lang":"zh-CN","frontmatter":{"article":true,"title":"HTTP3 and RTT","icon":"read","description":"几年前做了关于HTTP3的分享，为了避免遗忘，将内容整理出来并完善 什么是RTT RTT是Round Trip Time的缩写，通俗地说，就是通信一来一回的时间。 一次HTTP循环的时间 那么一次TCP建立连接时的握手，一共需要 1.5RTT 而对于一个HTTP请求&amp;响应，加上HTTP Request&amp;Response，算作一个1RTT。 那么基于TCP的的HTTP的消耗时间总和，就是 1.5RTT + 1RTT = 2.5RTT 关于TLS下的RTT影响","head":[["meta",{"property":"og:url","content":"https://notes-page-mu.vercel.app/contents/http3.html"}],["meta",{"property":"og:site_name","content":"我的笔记"}],["meta",{"property":"og:title","content":"HTTP3 and RTT"}],["meta",{"property":"og:description","content":"几年前做了关于HTTP3的分享，为了避免遗忘，将内容整理出来并完善 什么是RTT RTT是Round Trip Time的缩写，通俗地说，就是通信一来一回的时间。 一次HTTP循环的时间 那么一次TCP建立连接时的握手，一共需要 1.5RTT 而对于一个HTTP请求&amp;响应，加上HTTP Request&amp;Response，算作一个1RTT。 那么基于TCP的的HTTP的消耗时间总和，就是 1.5RTT + 1RTT = 2.5RTT 关于TLS下的RTT影响"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://notes-page-mu.vercel.app/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-31T08:25:24.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"HTTP3 and RTT"}],["meta",{"property":"article:author","content":"zihan"}],["meta",{"property":"article:modified_time","content":"2024-01-31T08:25:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTTP3 and RTT\\",\\"image\\":[\\"https://notes-page-mu.vercel.app/\\"],\\"dateModified\\":\\"2024-01-31T08:25:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zihan\\",\\"url\\":\\"https://github.com/zilan920/notes\\"}]}"]]},"headers":[],"git":{"createdTime":1706687966000,"updatedTime":1706689524000,"contributors":[{"name":"zihan.fang","email":"zihan.fang@bitdeer.com","commits":2}]},"readingTime":{"minutes":3.03,"words":909},"filePathRelative":"contents/http3.md","localizedDate":"2024年1月31日","excerpt":"<p><code>几年前做了关于HTTP3的分享，为了避免遗忘，将内容整理出来并完善</code></p>\\n<h5> 什么是RTT</h5>\\n<p>RTT是Round Trip Time的缩写，通俗地说，就是通信一来一回的时间。</p>\\n<h5> 一次HTTP循环的时间</h5>\\n<p>那么一次TCP建立连接时的握手，一共需要 1.5RTT<br>\\n</p>\\n<p>而对于一个HTTP请求&amp;响应，加上HTTP Request&amp;Response，算作一个1RTT。</p>\\n<p>那么基于TCP的的HTTP的消耗时间总和，就是 1.5RTT + 1RTT = 2.5RTT</p>\\n<h5> 关于TLS下的RTT影响</h5>","autoDesc":true}');export{e as data};
