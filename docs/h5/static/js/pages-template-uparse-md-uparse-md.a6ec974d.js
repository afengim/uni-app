(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-uparse-md-uparse-md"],{"018e":function(e,t,r){"use strict";r.r(t);var n=r("ab17"),s=r("4028");for(var i in s)"default"!==i&&function(e){r.d(t,e,function(){return s[e]})}(i);r("1526");var a=r("2877"),l=Object(a["a"])(s["default"],n["a"],n["b"],!1,null,"526802f5",null);t["default"]=l.exports},1526:function(e,t,r){"use strict";var n=r("f8bf"),s=r.n(n);s.a},4028:function(e,t,r){"use strict";r.r(t);var n=r("e1b8"),s=r.n(n);for(var i in n)"default"!==i&&function(e){r.d(t,e,function(){return n[e]})}(i);t["default"]=s.a},ab17:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"uni-padding-wrap"},[r("uParse",{attrs:{content:e.article},on:{preview:function(t){t=e.$handleEvent(t),e.preview(t)},navigate:function(t){t=e.$handleEvent(t),e.navigate(t)}}})],1)},s=[];r.d(t,"a",function(){return n}),r.d(t,"b",function(){return s})},b54a:function(e,t,r){"use strict";r("386b")("link",function(e){return function(t){return e(this,"a","href",t)}})},c9b3:function(e,t,r){"use strict";(function(t){var n=r("288e"),s=n(r("e814"));r("6b54"),r("87b3"),r("b54a"),r("3b2b"),r("4917"),r("28a5");var i=n(r("4aa6"));r("a481"),function(t){var r={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:b,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,nptable:b,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:b,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,text:/^[^\n]+/};function n(e){this.tokens=[],this.tokens.links=(0,i.default)(null),this.options=e||v.defaults,this.rules=r.normal,this.options.pedantic?this.rules=r.pedantic:this.options.gfm&&(this.options.tables?this.rules=r.tables:this.rules=r.gfm)}r._label=/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,r._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,r.def=d(r.def).replace("label",r._label).replace("title",r._title).getRegex(),r.bullet=/(?:[*+-]|\d+\.)/,r.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,r.item=d(r.item,"gm").replace(/bull/g,r.bullet).getRegex(),r.list=d(r.list).replace(/bull/g,r.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+r.def.source+")").getRegex(),r._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",r._comment=/<!--(?!-?>)[\s\S]*?-->/,r.html=d(r.html,"i").replace("comment",r._comment).replace("tag",r._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),r.paragraph=d(r.paragraph).replace("hr",r.hr).replace("heading",r.heading).replace("lheading",r.lheading).replace("tag",r._tag).getRegex(),r.blockquote=d(r.blockquote).replace("paragraph",r.paragraph).getRegex(),r.normal=m({},r),r.gfm=m({},r.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),r.gfm.paragraph=d(r.paragraph).replace("(?!","(?!"+r.gfm.fences.source.replace("\\1","\\2")+"|"+r.list.source.replace("\\1","\\3")+"|").getRegex(),r.tables=m({},r.gfm,{nptable:/^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,table:/^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/}),r.pedantic=m({},r.normal,{html:d("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",r._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/}),n.rules=r,n.lex=function(e,t){var r=new n(t);return r.lex(e)},n.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},n.prototype.token=function(e,t){var n,s,i,a,l,o,h,p,u,c,d,f,g,x,b,m;e=e.replace(/^ +$/gm,"");while(e)if((i=this.rules.newline.exec(e))&&(e=e.substring(i[0].length),i[0].length>1&&this.tokens.push({type:"space"})),i=this.rules.code.exec(e))e=e.substring(i[0].length),i=i[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?i:k(i,"\n")});else if(i=this.rules.fences.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"code",lang:i[2],text:i[3]||""});else if(i=this.rules.heading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:i[1].length,text:i[2]});else if(t&&(i=this.rules.nptable.exec(e))&&(o={type:"table",header:w(i[1].replace(/^ *| *\| *$/g,"")),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3]?i[3].replace(/\n$/,"").split("\n"):[]},o.header.length===o.align.length)){for(e=e.substring(i[0].length),d=0;d<o.align.length;d++)/^ *-+: *$/.test(o.align[d])?o.align[d]="right":/^ *:-+: *$/.test(o.align[d])?o.align[d]="center":/^ *:-+ *$/.test(o.align[d])?o.align[d]="left":o.align[d]=null;for(d=0;d<o.cells.length;d++)o.cells[d]=w(o.cells[d],o.header.length);this.tokens.push(o)}else if(i=this.rules.hr.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"hr"});else if(i=this.rules.blockquote.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"blockquote_start"}),i=i[0].replace(/^ *> ?/gm,""),this.token(i,t),this.tokens.push({type:"blockquote_end"});else if(i=this.rules.list.exec(e)){for(e=e.substring(i[0].length),a=i[2],x=a.length>1,h={type:"list_start",ordered:x,start:x?+a:"",loose:!1},this.tokens.push(h),i=i[0].match(this.rules.item),p=[],n=!1,g=i.length,d=0;d<g;d++)o=i[d],c=o.length,o=o.replace(/^ *([*+-]|\d+\.) +/,""),~o.indexOf("\n ")&&(c-=o.length,o=this.options.pedantic?o.replace(/^ {1,4}/gm,""):o.replace(new RegExp("^ {1,"+c+"}","gm"),"")),this.options.smartLists&&d!==g-1&&(l=r.bullet.exec(i[d+1])[0],a===l||a.length>1&&l.length>1||(e=i.slice(d+1).join("\n")+e,d=g-1)),s=n||/\n\n(?!\s*$)/.test(o),d!==g-1&&(n="\n"===o.charAt(o.length-1),s||(s=n)),s&&(h.loose=!0),b=/^\[[ xX]\] /.test(o),m=void 0,b&&(m=" "!==o[1],o=o.replace(/^\[[ xX]\] +/,"")),u={type:"list_item_start",task:b,checked:m,loose:s},p.push(u),this.tokens.push(u),this.token(o,!1),this.tokens.push({type:"list_item_end"});if(h.loose)for(g=p.length,d=0;d<g;d++)p[d].loose=!0;this.tokens.push({type:"list_end"})}else if(i=this.rules.html.exec(e))e=e.substring(i[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===i[1]||"script"===i[1]||"style"===i[1]),text:i[0]});else if(t&&(i=this.rules.def.exec(e)))e=e.substring(i[0].length),i[3]&&(i[3]=i[3].substring(1,i[3].length-1)),f=i[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[f]||(this.tokens.links[f]={href:i[2],title:i[3]});else if(t&&(i=this.rules.table.exec(e))&&(o={type:"table",header:w(i[1].replace(/^ *| *\| *$/g,"")),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3]?i[3].replace(/(?: *\| *)?\n$/,"").split("\n"):[]},o.header.length===o.align.length)){for(e=e.substring(i[0].length),d=0;d<o.align.length;d++)/^ *-+: *$/.test(o.align[d])?o.align[d]="right":/^ *:-+: *$/.test(o.align[d])?o.align[d]="center":/^ *:-+ *$/.test(o.align[d])?o.align[d]="left":o.align[d]=null;for(d=0;d<o.cells.length;d++)o.cells[d]=w(o.cells[d].replace(/^ *\| *| *\| *$/g,""),o.header.length);this.tokens.push(o)}else if(i=this.rules.lheading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:"="===i[2]?1:2,text:i[1]});else if(t&&(i=this.rules.paragraph.exec(e)))e=e.substring(i[0].length),this.tokens.push({type:"paragraph",text:"\n"===i[1].charAt(i[1].length-1)?i[1].slice(0,-1):i[1]});else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"text",text:i[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var a={escape:/^\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:b,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s])__(?!_)|^\*\*([^\s])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*"<\[])\*(?!\*)|^_([^\s][\s\S]*?[^\s_])_(?!_)|^_([^\s_][\s\S]*?[^\s])_(?!_)|^\*([^\s"<\[][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:b,text:/^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/};function l(e,t){if(this.options=t||v.defaults,this.links=e,this.rules=a.normal,this.renderer=this.options.renderer||new o,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=a.pedantic:this.options.gfm&&(this.options.breaks?this.rules=a.breaks:this.rules=a.gfm)}function o(e){this.options=e||v.defaults}function h(){}function p(e){this.tokens=[],this.token=null,this.options=e||v.defaults,this.options.renderer=this.options.renderer||new o,this.renderer=this.options.renderer,this.renderer.options=this.options}function u(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function c(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode((0,s.default)(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function d(e,t){return e=e.source||e,t=t||"",{replace:function(t,r){return r=r.source||r,r=r.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(t,r),this},getRegex:function(){return new RegExp(e,t)}}}function f(e,t){return g[" "+e]||(/^[^:]+:\/*[^\/]*$/.test(e)?g[" "+e]=e+"/":g[" "+e]=k(e,"/",!0)),e=g[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^\/]*)[\s\S]*/,"$1")+t:e+t}a._escapes=/\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/g,a._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,a._email=/[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,a.autolink=d(a.autolink).replace("scheme",a._scheme).replace("email",a._email).getRegex(),a._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,a.tag=d(a.tag).replace("comment",r._comment).replace("attribute",a._attribute).getRegex(),a._label=/(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/,a._href=/\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f\\]*\)|[^\s\x00-\x1f()\\])*?)/,a._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,a.link=d(a.link).replace("label",a._label).replace("href",a._href).replace("title",a._title).getRegex(),a.reflink=d(a.reflink).replace("label",a._label).getRegex(),a.normal=m({},a),a.pedantic=m({},a.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:d(/^!?\[(label)\]\((.*?)\)/).replace("label",a._label).getRegex(),reflink:d(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",a._label).getRegex()}),a.gfm=m({},a.normal,{escape:d(a.escape).replace("])","~|])").getRegex(),url:d(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("email",a._email).getRegex(),_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:d(a.text).replace("]|","~]|").replace("|","|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|").getRegex()}),a.breaks=m({},a.gfm,{br:d(a.br).replace("{2,}","*").getRegex(),text:d(a.gfm.text).replace("{2,}","*").getRegex()}),l.rules=a,l.output=function(e,t,r){var n=new l(t,r);return n.output(e)},l.prototype.output=function(e){var t,r,n,s,i,a,o="";while(e)if(i=this.rules.escape.exec(e))e=e.substring(i[0].length),o+=i[1];else if(i=this.rules.autolink.exec(e))e=e.substring(i[0].length),"@"===i[2]?(r=u(this.mangle(i[1])),n="mailto:"+r):(r=u(i[1]),n=r),o+=this.renderer.link(n,null,r);else if(this.inLink||!(i=this.rules.url.exec(e))){if(i=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(i[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(i[0])&&(this.inLink=!1),e=e.substring(i[0].length),o+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):u(i[0]):i[0];else if(i=this.rules.link.exec(e))e=e.substring(i[0].length),this.inLink=!0,n=i[2],this.options.pedantic?(t=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n),t?(n=t[1],s=t[3]):s=""):s=i[3]?i[3].slice(1,-1):"",n=n.trim().replace(/^<([\s\S]*)>$/,"$1"),o+=this.outputLink(i,{href:l.escapes(n),title:l.escapes(s)}),this.inLink=!1;else if((i=this.rules.reflink.exec(e))||(i=this.rules.nolink.exec(e))){if(e=e.substring(i[0].length),t=(i[2]||i[1]).replace(/\s+/g," "),t=this.links[t.toLowerCase()],!t||!t.href){o+=i[0].charAt(0),e=i[0].substring(1)+e;continue}this.inLink=!0,o+=this.outputLink(i,t),this.inLink=!1}else if(i=this.rules.strong.exec(e))e=e.substring(i[0].length),o+=this.renderer.strong(this.output(i[4]||i[3]||i[2]||i[1]));else if(i=this.rules.em.exec(e))e=e.substring(i[0].length),o+=this.renderer.em(this.output(i[6]||i[5]||i[4]||i[3]||i[2]||i[1]));else if(i=this.rules.code.exec(e))e=e.substring(i[0].length),o+=this.renderer.codespan(u(i[2].trim(),!0));else if(i=this.rules.br.exec(e))e=e.substring(i[0].length),o+=this.renderer.br();else if(i=this.rules.del.exec(e))e=e.substring(i[0].length),o+=this.renderer.del(this.output(i[1]));else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),o+=this.renderer.text(u(this.smartypants(i[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else{do{a=i[0],i[0]=this.rules._backpedal.exec(i[0])[0]}while(a!==i[0]);e=e.substring(i[0].length),"@"===i[2]?(r=u(i[0]),n="mailto:"+r):(r=u(i[0]),n="www."===i[1]?"http://"+r:r),o+=this.renderer.link(n,null,r)}return o},l.escapes=function(e){return e?e.replace(l.rules._escapes,"$1"):e},l.prototype.outputLink=function(e,t){var r=t.href,n=t.title?u(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(r,n,this.output(e[1])):this.renderer.image(r,n,u(e[1]))},l.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},l.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,r="",n=e.length,s=0;s<n;s++)t=e.charCodeAt(s),Math.random()>.5&&(t="x"+t.toString(16)),r+="&#"+t+";";return r},o.prototype.code=function(e,t,r){if(this.options.highlight){var n=this.options.highlight(e,t);null!=n&&n!==e&&(r=!0,e=n)}return t?'<pre><code class="'+this.options.langPrefix+u(t,!0)+'">'+(r?e:u(e,!0))+"</code></pre>\n":"<pre><code>"+(r?e:u(e,!0))+"</code></pre>"},o.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},o.prototype.html=function(e){return e},o.prototype.heading=function(e,t,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},o.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},o.prototype.list=function(e,t,r){var n=t?"ol":"ul",s=t&&1!==r?' start="'+r+'"':"";return"<"+n+s+">\n"+e+"</"+n+">\n"},o.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},o.prototype.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},o.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},o.prototype.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},o.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},o.prototype.tablecell=function(e,t){var r=t.header?"th":"td",n=t.align?"<"+r+' align="'+t.align+'">':"<"+r+">";return n+e+"</"+r+">\n"},o.prototype.strong=function(e){return"<strong>"+e+"</strong>"},o.prototype.em=function(e){return"<em>"+e+"</em>"},o.prototype.codespan=function(e){return"<code>"+e+"</code>"},o.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},o.prototype.del=function(e){return"<del>"+e+"</del>"},o.prototype.link=function(e,t,r){if(this.options.sanitize){try{var n=decodeURIComponent(c(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(i){return r}if(0===n.indexOf("javascript:")||0===n.indexOf("vbscript:")||0===n.indexOf("data:"))return r}this.options.baseUrl&&!x.test(e)&&(e=f(this.options.baseUrl,e));try{e=encodeURI(e).replace(/%25/g,"%")}catch(i){return r}var s='<a href="'+u(e)+'"';return t&&(s+=' title="'+t+'"'),s+=">"+r+"</a>",s},o.prototype.image=function(e,t,r){this.options.baseUrl&&!x.test(e)&&(e=f(this.options.baseUrl,e));var n='<img src="'+e+'" alt="'+r+'"';return t&&(n+=' title="'+t+'"'),n+=this.options.xhtml?"/>":">",n},o.prototype.text=function(e){return e},h.prototype.strong=h.prototype.em=h.prototype.codespan=h.prototype.del=h.prototype.text=function(e){return e},h.prototype.link=h.prototype.image=function(e,t,r){return""+r},h.prototype.br=function(){return""},p.parse=function(e,t){var r=new p(t);return r.parse(e)},p.prototype.parse=function(e){this.inline=new l(e.links,this.options),this.inlineText=new l(e.links,m({},this.options,{renderer:new h})),this.tokens=e.reverse();var t="";while(this.next())t+=this.tok();return t},p.prototype.next=function(){return this.token=this.tokens.pop()},p.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},p.prototype.parseText=function(){var e=this.token.text;while("text"===this.peek().type)e+="\n"+this.next().text;return this.inline.output(e)},p.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,c(this.inlineText.output(this.token.text)));case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,r,n,s="",i="";for(r="",e=0;e<this.token.header.length;e++)r+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(s+=this.renderer.tablerow(r),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],r="",n=0;n<t.length;n++)r+=this.renderer.tablecell(this.inline.output(t[n]),{header:!1,align:this.token.align[n]});i+=this.renderer.tablerow(r)}return this.renderer.table(s,i);case"blockquote_start":i="";while("blockquote_end"!==this.next().type)i+=this.tok();return this.renderer.blockquote(i);case"list_start":i="";var a=this.token.ordered,l=this.token.start;while("list_end"!==this.next().type)i+=this.tok();return this.renderer.list(i,a,l);case"list_item_start":i="";var o=this.token.loose;this.token.task&&(i+=this.renderer.checkbox(this.token.checked));while("list_item_end"!==this.next().type)i+=o||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(i);case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}};var g={},x=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function b(){}function m(e){for(var t,r,n=1;n<arguments.length;n++)for(r in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}function w(e,t){var r=e.replace(/\|/g,function(e,t,r){var n=!1,s=t;while(--s>=0&&"\\"===r[s])n=!n;return n?"|":" |"}),n=r.split(/ \|/),s=0;if(n.length>t)n.splice(t);else while(n.length<t)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(/\\\|/g,"|");return n}function k(e,t,r){if(0===e.length)return"";var n=0;while(n<e.length){var s=e.charAt(e.length-n-1);if(s!==t||r){if(s===t||!r)break;n++}else n++}return e.substr(0,e.length-n)}function v(e,t,r){if("undefined"===typeof e||null===e)throw new Error("marked(): input parameter is undefined or null");if("string"!==typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(r||"function"===typeof t){r||(r=t,t=null),t=m({},v.defaults,t||{});var s,i,a=t.highlight,l=0;try{s=n.lex(e,t)}catch(h){return r(h)}i=s.length;var o=function(e){if(e)return t.highlight=a,r(e);var n;try{n=p.parse(s,t)}catch(h){e=h}return t.highlight=a,e?r(e):r(null,n)};if(!a||a.length<3)return o();if(delete t.highlight,!i)return o();for(;l<s.length;l++)(function(e){"code"!==e.type?--i||o():a(e.text,e.lang,function(t,r){return t?o(t):null==r||r===e.text?--i||o():(e.text=r,e.escaped=!0,void(--i||o()))})})(s[l])}else try{return t&&(t=m({},v.defaults,t)),p.parse(n.lex(e,t),t)}catch(h){if(h.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||v.defaults).silent)return"<p>An error occurred:</p><pre>"+u(h.message+"",!0)+"</pre>";throw h}}b.exec=b,v.options=v.setOptions=function(e){return m(v.defaults,e),v},v.getDefaults=function(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:new o,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tables:!0,xhtml:!1}},v.defaults=v.getDefaults(),v.Parser=p,v.parser=p.parse,v.Renderer=o,v.TextRenderer=h,v.Lexer=n,v.lexer=n.lex,v.InlineLexer=l,v.inlineLexer=l.output,v.parse=v,e.exports=v}("undefined"!==typeof window&&window)}).call(this,r("c8ba"))},e1b8:function(e,t,r){"use strict";var n=r("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(r("f959")),i=n(r("1c7b")),a="很多资讯页面，服务端返回的数据都是 markdown 字符串或 html 字符串，使用本模板可直接解析 markdown 为符合 uni-app 规范的富文本界面。下文为示例：\r\n\r\nHBuilderX堪称markdown书写编辑的最佳工具，本文简单介绍HBuilderX里markdown的使用技巧。更多详情请在HBuilderX里点菜单帮助-markdown语法帮助。\r\n\r\nmarkdown的标题是行首以#号开头，空格分割的，不同级别的标题，在HX里着色也不同。如下：\r\n# 标题1\r\n## 标题2\r\n### 标题3\r\n#### 标题4\r\n##### 标题5\r\n\r\nHBuilderX标题编辑技巧：\r\n1. Emmet快速输入：敲h2+Tab即可生成二级标题【同HTML里的emmet写法，不止标题，HX里所有可对应tag的markdown语法均支持emmet写法】。仅行首生效\r\n2. 智能双击：双击#号可选中整个标题段落\r\n3. 智能回车：行尾回车或行中Ctrl+Enter强制换行后会自动在下一行补#\r\n4. 回车后再次按Tab可递进一层标题，再按Tab切换列表符\r\n5. 在# 后回车，可上插一个空标题行【同word】，任意位置按Ctrl+Shift+Enter也可以\r\n\r\n\r\n- 折叠：点标题前的-号可折叠该标题段落，快捷键是Alt+-（展开折叠是Alt+=）\r\n- 折叠：多层折叠时折叠或展开子节点，快捷键是Alt+Shift+-或=\r\n\r\n\r\n**加粗** 【快捷键：Ctrl+B，支持多光标；Emmet：b后敲Tab】\r\n\r\n_倾斜_【Emmet：i后敲Tab；前后包围：选中文字按Ctrl+\\是在选区两侧添加光标，可以继续输入_】\r\n\r\n~~删除线~~【前后包围：选中文字按Ctrl+\\是在选区两侧添加光标，可以继续输入~~，会在2侧同时输入】\r\n\r\n> 引用\r\n\r\n\r\n[超链接](https://dcloud.io)\r\n\r\n![logo](https://img-cdn-qiniu.dcloud.net.cn/newpage/images/logo4.png)\r\n\r\n\r\n=======================\r\n\r\n\r\n``` javascript\r\n\tvar a = document; //代码\r\n```\r\n",l={components:{uParse:i.default},data:function(){return{article:(0,s.default)(a)}},methods:{preview:function(e,t){console.log("src: "+e)},navigate:function(e,t){console.log("href: "+e),uni.showModal({content:"点击链接为："+e,showCancel:!1})}}};t.default=l},e8a0:function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,"/**\r\n * author: Di (微信小程序开发工程师)\r\n * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)\r\n *         垂直微信小程序开发交流社区\r\n *\r\n * github地址: https://github.com/icindy/wxParse\r\n *\r\n * for: 微信小程序富文本解析\r\n * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184\r\n */.wxParse[data-v-526802f5]{width:100%;font-family:Helvetica,sans-serif;font-size:%?30?%;color:#666;line-height:1.8}.wxParse uni-view[data-v-526802f5]{word-break:hyphenate}.wxParse .inline[data-v-526802f5]{display:inline;margin:0;padding:0}.wxParse .div[data-v-526802f5]{margin:0;padding:0}.wxParse .h1 .text[data-v-526802f5]{font-size:2em;margin:.67em 0}.wxParse .h2 .text[data-v-526802f5]{font-size:1.5em;margin:.83em 0}.wxParse .h3 .text[data-v-526802f5]{font-size:1.17em;margin:1em 0}.wxParse .h4 .text[data-v-526802f5]{margin:1.33em 0}.wxParse .h5 .text[data-v-526802f5]{font-size:.83em;margin:1.67em 0}.wxParse .h6 .text[data-v-526802f5]{font-size:.67em;margin:2.33em 0}.wxParse .b[data-v-526802f5],.wxParse .h1 .text[data-v-526802f5],.wxParse .h2 .text[data-v-526802f5],.wxParse .h3 .text[data-v-526802f5],.wxParse .h4 .text[data-v-526802f5],.wxParse .h5 .text[data-v-526802f5],.wxParse .h6 .text[data-v-526802f5],.wxParse .strong[data-v-526802f5]{font-weight:bolder}.wxParse .p[data-v-526802f5]{margin:1em 0}.wxParse .address[data-v-526802f5],.wxParse .cite[data-v-526802f5],.wxParse .em[data-v-526802f5],.wxParse .i[data-v-526802f5],.wxParse .var[data-v-526802f5]{font-style:italic}.wxParse .code[data-v-526802f5],.wxParse .kbd[data-v-526802f5],.wxParse .pre[data-v-526802f5],.wxParse .samp[data-v-526802f5],.wxParse .tt[data-v-526802f5]{font-family:monospace}.wxParse .pre[data-v-526802f5]{overflow:auto;background:#f5f5f5;padding:%?16?%;white-space:pre;margin:1em %?0?%}.wxParse .code[data-v-526802f5]{display:inline;background:#f5f5f5}.wxParse .big[data-v-526802f5]{font-size:1.17em}.wxParse .small[data-v-526802f5],.wxParse .sub[data-v-526802f5],.wxParse .sup[data-v-526802f5]{font-size:.83em}.wxParse .sub[data-v-526802f5]{vertical-align:sub}.wxParse .sup[data-v-526802f5]{vertical-align:super}.wxParse .del[data-v-526802f5],.wxParse .s[data-v-526802f5],.wxParse .strike[data-v-526802f5]{text-decoration:line-through}.wxParse .s[data-v-526802f5],.wxParse .strong[data-v-526802f5]{display:inline}.wxParse .a[data-v-526802f5]{color:#00bfff}.wxParse .video[data-v-526802f5]{text-align:center;margin:%?22?% 0}.wxParse .video-video[data-v-526802f5]{width:100%}.wxParse .img[data-v-526802f5]{display:inline-block;width:0;height:0;max-width:100%;overflow:hidden}.wxParse .blockquote[data-v-526802f5]{margin:%?10?% 0;padding:%?22?% 0 %?22?% %?22?%;font-family:Courier,Calibri,宋体;background:#f5f5f5;border-left:%?6?% solid #dbdbdb}.wxParse .blockquote .p[data-v-526802f5]{margin:0}.wxParse .ol[data-v-526802f5],.wxParse .ul[data-v-526802f5]{display:block;margin:1em 0;padding-left:%?33?%}.wxParse .ol[data-v-526802f5]{list-style-type:disc}.wxParse .ol[data-v-526802f5]{list-style-type:decimal}.wxParse .ol>weixin-parse-template[data-v-526802f5],.wxParse .ul>weixin-parse-template[data-v-526802f5]{display:list-item;-webkit-box-align:baseline;-webkit-align-items:baseline;-ms-flex-align:baseline;align-items:baseline;text-align:match-parent}.wxParse .ol>.li[data-v-526802f5],.wxParse .ul>.li[data-v-526802f5]{display:list-item;-webkit-box-align:baseline;-webkit-align-items:baseline;-ms-flex-align:baseline;align-items:baseline;text-align:match-parent}.wxParse .ol .ul[data-v-526802f5],.wxParse .ul .ul[data-v-526802f5]{list-style-type:circle}.wxParse .ol .ol .ul[data-v-526802f5],.wxParse .ol .ul .ul[data-v-526802f5],.wxParse .ul .ol .ul[data-v-526802f5],.wxParse .ul .ul .ul[data-v-526802f5]{list-style-type:square}.wxParse .u[data-v-526802f5]{text-decoration:underline}.wxParse .hide[data-v-526802f5]{display:none}.wxParse .del[data-v-526802f5]{display:inline}.wxParse .figure[data-v-526802f5]{overflow:hidden}.wxParse .table[data-v-526802f5]{width:100%}.wxParse .tfoot[data-v-526802f5],.wxParse .thead[data-v-526802f5],.wxParse .tr[data-v-526802f5]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.wxParse .tr[data-v-526802f5]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-right:%?2?% solid #e0e0e0;border-bottom:%?2?% solid #e0e0e0}.wxParse .td[data-v-526802f5],.wxParse .th[data-v-526802f5]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:%?1276?%;overflow:auto;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;padding:%?11?%;border-left:%?2?% solid #e0e0e0}.wxParse .td[data-v-526802f5]:last{border-top:%?2?% solid #e0e0e0}.wxParse .th[data-v-526802f5]{background:#f0f0f0;border-top:%?2?% solid #e0e0e0}",""])},f8bf:function(e,t,r){var n=r("e8a0");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=r("4f06").default;s("6abaa762",n,!0,{sourceMap:!1,shadowMode:!1})},f959:function(e,t,r){"use strict";e.exports=r("c9b3")}}]);