import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as p,c,a as n,b as a,d as r,f as i,e as s}from"./app-t8hEWciX.js";const l={},d=n("h1",{id:"_10-2-矩形覆盖",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_10-2-矩形覆盖","aria-hidden":"true"},"#"),a(" 10.2 矩形覆盖")],-1),u=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),a(" 题目链接")],-1),k={href:"https://www.nowcoder.com/practice/72a5a919508a4251859fb2cfb987a0e6?tpId=13&tqId=11163&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking&from=cyc_github",target:"_blank",rel:"noopener noreferrer"},h=s('<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>我们可以用 2*1 的小矩形横着或者竖着去覆盖更大的矩形。请问用 n 个 2*1 的小矩形无重叠地覆盖一个 2*n 的大矩形，总共有多少种方法？</p><div align="center"><img src="https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/b903fda8-07d0-46a7-91a7-e803892895cf.gif" width="100px"></div><br><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>当 n 为 1 时，只有一种覆盖方法：</p><div align="center"><img src="https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/f6e146f1-57ad-411b-beb3-770a142164ef.png" width="100px"></div><br><p>当 n 为 2 时，有两种覆盖方法：</p><div align="center"><img src="https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/fb3b8f7a-4293-4a38-aae1-62284db979a3.png" width="200px"></div><br><p>要覆盖 2*n 的大矩形，可以先覆盖 2*1 的矩形，再覆盖 2*(n-1) 的矩形；或者先覆盖 2*2 的矩形，再覆盖 2*(n-2) 的矩形。而覆盖 2*(n-1) 和 2*(n-2) 的矩形可以看成子问题。该问题的递推公式如下：</p>',12),m=s(`<div align="center"><img src="https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/508c6e52-9f93-44ed-b6b9-e69050e14807.jpg" width="370px"></div><br><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">rectCover</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> n<span class="token punctuation">;</span>
    <span class="token keyword">int</span> pre2 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> pre1 <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">=</span> pre2 <span class="token operator">+</span> pre1<span class="token punctuation">;</span>
        pre2 <span class="token operator">=</span> pre1<span class="token punctuation">;</span>
        pre1 <span class="token operator">=</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function v(b,g){const e=o("ExternalLinkIcon");return p(),c("div",null,[d,u,n("p",null,[n("a",k,[a("牛客网"),r(e)])]),h,i(' <div align="center"><img src="https://latex.codecogs.com/gif.latex?f(n)=\\left\\{\\begin{array}{rcl}1&&{n=1}\\\\2&&{n=2}\\\\f(n-1)+f(n-2)&&{n>1}\\end{array}\\right." class="mathjax-pic"/></div> <br> '),m])}const w=t(l,[["render",v],["__file","10.2 矩形覆盖.html.vue"]]);export{w as default};
