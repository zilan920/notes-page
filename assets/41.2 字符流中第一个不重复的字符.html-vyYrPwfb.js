import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as p,c as o,a as n,b as s,d as c,e as u}from"./app-t8hEWciX.js";const i={},l=n("h1",{id:"_41-2-字符流中第一个不重复的字符",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_41-2-字符流中第一个不重复的字符","aria-hidden":"true"},"#"),s(" 41.2 字符流中第一个不重复的字符")],-1),r=n("h2",{id:"题目描述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目描述","aria-hidden":"true"},"#"),s(" 题目描述")],-1),k={href:"https://www.nowcoder.com/practice/00de97733b8e4f97a3fb5c680ee10720?tpId=13&tqId=11207&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking&from=cyc_github",target:"_blank",rel:"noopener noreferrer"},d=u(`<h2 id="题目描述-1" tabindex="-1"><a class="header-anchor" href="#题目描述-1" aria-hidden="true">#</a> 题目描述</h2><p>请实现一个函数用来找出字符流中第一个只出现一次的字符。例如，当从字符流中只读出前两个字符 &quot;go&quot; 时，第一个只出现一次的字符是 &quot;g&quot;。当从该字符流中读出前六个字符“google&quot; 时，第一个只出现一次的字符是 &quot;l&quot;。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>使用统计数组来统计每个字符出现的次数，本题涉及到的字符为都为 ASCII 码，因此使用一个大小为 128 的整型数组就能完成次数统计任务。</p><p>使用队列来存储到达的字符，并在每次有新的字符从字符流到达时移除队列头部那些出现次数不再是一次的元素。因为队列是先进先出顺序，因此队列头部的元素为第一次只出现一次的字符。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cnts <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">128</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Character</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Insert</span><span class="token punctuation">(</span><span class="token keyword">char</span> ch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cnts<span class="token punctuation">[</span>ch<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
    queue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> cnts<span class="token punctuation">[</span>queue<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span>
        queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">char</span> <span class="token class-name">FirstAppearingOnce</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token char">&#39;#&#39;</span> <span class="token operator">:</span> queue<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function _(h,v){const a=e("ExternalLinkIcon");return p(),o("div",null,[l,r,n("p",null,[n("a",k,[s("牛客网"),c(a)])]),d])}const f=t(i,[["render",_],["__file","41.2 字符流中第一个不重复的字符.html.vue"]]);export{f as default};
