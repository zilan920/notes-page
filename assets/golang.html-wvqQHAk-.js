const e=JSON.parse('{"key":"v-e75e2b0e","path":"/%E6%8A%80%E6%9C%AF/golang.html","title":"go语言学习","lang":"zh-CN","frontmatter":{"article":true,"title":"go语言学习","icon":"read","description":"go 数据结构 切片和数组 slice 的底层是数组，是对数组的封装，可以用于描述数组的一个片段，两者都可以用于描述。 数组是定长的，而切片则可以动态的扩容。 在存储上，数组是一片连续的内存，而 slice 实质上是一个结构体。他的结构如下： // runtime/slice.go type slice struct { \\tarray unsafe.Pointer // 元素指针 \\tlen int // 长度 \\tcap int // 容量 }","head":[["meta",{"property":"og:url","content":"https://notes-page-mu.vercel.app/%E6%8A%80%E6%9C%AF/golang.html"}],["meta",{"property":"og:site_name","content":"我的笔记"}],["meta",{"property":"og:title","content":"go语言学习"}],["meta",{"property":"og:description","content":"go 数据结构 切片和数组 slice 的底层是数组，是对数组的封装，可以用于描述数组的一个片段，两者都可以用于描述。 数组是定长的，而切片则可以动态的扩容。 在存储上，数组是一片连续的内存，而 slice 实质上是一个结构体。他的结构如下： // runtime/slice.go type slice struct { \\tarray unsafe.Pointer // 元素指针 \\tlen int // 长度 \\tcap int // 容量 }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-10T15:11:26.000Z"}],["meta",{"property":"article:author","content":"zihan"}],["meta",{"property":"article:modified_time","content":"2024-06-10T15:11:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"go语言学习\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-10T15:11:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zihan\\",\\"url\\":\\"https://github.com/zilan920/notes\\"}]}"]]},"headers":[{"level":2,"title":"go 数据结构","slug":"go-数据结构","link":"#go-数据结构","children":[]},{"level":2,"title":"接口 Interface","slug":"接口-interface","link":"#接口-interface","children":[]},{"level":2,"title":"Channel","slug":"channel","link":"#channel","children":[]},{"level":2,"title":"go 标准库","slug":"go-标准库","link":"#go-标准库","children":[]},{"level":2,"title":"调度器","slug":"调度器","link":"#调度器","children":[]},{"level":2,"title":"GC","slug":"gc","link":"#gc","children":[]},{"level":2,"title":"编译与运行","slug":"编译与运行","link":"#编译与运行","children":[{"level":3,"title":"阅读","slug":"阅读","link":"#阅读","children":[]},{"level":3,"title":"其他","slug":"其他","link":"#其他","children":[]}]}],"git":{"createdTime":1718032286000,"updatedTime":1718032286000,"contributors":[{"name":"zilan920","email":"zilan920@126.com","commits":1}]},"readingTime":{"minutes":9.94,"words":2982},"filePathRelative":"技术/golang.md","localizedDate":"2024年6月10日","excerpt":"<h2> go 数据结构</h2>\\n<h4> 切片和数组</h4>\\n<p>slice 的底层是数组，是对数组的封装，可以用于描述数组的一个片段，两者都可以用于描述。<br>\\n数组是定长的，而切片则可以动态的扩容。<br>\\n在存储上，数组是一片连续的内存，而 slice 实质上是一个结构体。他的结构如下：</p>\\n<div class=\\"language-golang line-numbers-mode\\" data-ext=\\"golang\\"><pre class=\\"language-golang\\"><code>// runtime/slice.go\\ntype slice struct {\\n\\tarray unsafe.Pointer // 元素指针\\n\\tlen   int // 长度\\n\\tcap   int // 容量\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};