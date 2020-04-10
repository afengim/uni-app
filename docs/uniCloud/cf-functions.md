
### 简介

云函数是运行在云端的 `JavaScript` 代码，和普通的`Node.js`开发一样，熟悉`Node.js`的开发者可以直接上手。

如下是将传入的两个参数求和并返回客户端的云函数代码示例：

```
'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	return {
    sum:event.a + event.b
  }
}
```

云函数的传入参数有两个，一个是`event`对象，一个是`context`对象。`event`指的是触发云函数的事件，当客户端调用云函数时，`event`就是客户端调用云函数时传入的参数。`context` 对象包含了此处调用的调用信息和运行状态，可以用它来了解服务运行的情况。`uniCloud`会自动将客户端的操作系统（`os`）、运行平台（`platform`）、应用信息（`appid`）等注入`context`中，开发者可通过`context`获取每次调用的上下文，如下是一个示例：

```
'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
  ...
  //context中可获取客户端调用的上下文
  let os = context.OS //客户端操作系统，返回值：android、ios	等
  let platform = context.PLATFORM //运行平台，返回值为 mp-weixin、app-plus等
  let appid = context.APPID // manifest.json中配置的appid
	... //其它业务代码
}
```

云函数中如果要使用其他服务（比如mysql数据库、redis等），可以按照nodejs的写法即可。

### 访问数据库

云函数中支持访问本服务空间下的数据库，调用方式详见[规范](uniCloud/cf-database.md)

### 访问HTTP服务

`uniCloud`提供了`uniCloud.httpclient`供开发者使用。无需额外依赖，就可以请求任何 HTTP 和 HTTPS 协议的 Web 服务。`uniCloud.httpclient`返回的是一个[urllib实例](https://github.com/node-modules/urllib)。

**uniCloud.httpclient.request(URL,requestOptions)**

**requestOptions参数说明**

|参数名							|类型																																																				|是否必填	|默认值	|说明																																																																																			|
|----								|----																																																				|----			|----		|----																																																																																			|
|method							|String																																																			| -				|GET		|HTTP 请求方法, 默认为：GET. 可选值： GET, POST, DELETE, PUT																																																							|
|data								|Object																																																			| -				|-			|发送的数据																																																																																|
|dataAsQueryString	|Boolean																																																		| -				|true		|是否强制转换data为queryString																																																																						|
|content						|String &#124; Buffer																																												| -				|-			|手动设置请求的payload，设置后会忽略data																																																																	|
|stream							|ReadStream																																																	|-				|-			|发送请求正文的可读数据流																																																																									|
|writeStream				|WriteStream																																																|-				|-			|接受响应数据的可写数据流																																																																									|
|consumeWriteStream	|Boolean																																																		|-				|true		|是否等待 writeStream 完全写完才算响应全部接收完毕																																																												|
|files							|Array&lt;ReadStream&#124;Buffer&#124;String&gt; &#124; Object &#124; ReadStream &#124; Buffer &#124; String| -				|-			|上传的文件，设置后将会使用 multipart/form-data 格式。如果未设置method，将会自动将method设置为POST																																				|
|contentType				|String																																																			| -				|-			|上传数据的格式，设为`json`会自动在`header`内设置`Content-Type: application/json`																																													|
|nestedQuerystring	|Boolean																																																		| -				|-			|转换data为queryString时默认不支持嵌套Object，此选项设置为true则支持转换嵌套Object																																												|
|dataType						|String																																																			| -				|-			|返回的数据格式，可选值为 'json'（返回数据转为JSON），'text'（返回数据转为字符串）， ''（返回数据不做处理，默认值）																												|
|fixJSONCtlChars		|Boolean																																																		|-				|false	|在JSON.parse之前处理响应结果中的控制字符（Control Character）																																																						|
|headers						|Object																																																			| -				|-			|请求头																																																																																		|
|timeout						|Number &#124; Array																																												| -				|-			|超时时间设置。设置为数组时第一项为请求超时，第二项为返回超时。设置为数字时相当于同时设置请求超时和返回超时，即`timeout:3000`效果等于`timeouut:[3000,3000]`								|
|auth								|String																																																			|-				|-			|简单登录授权（Basic Authentication）参数，必须按照 `user:password` 格式设置																																															|
|digestAuth					|String																																																			|-				|-			|摘要登录授权（Digest Authentication）参数，必须按照 `user:password` 格式设置																																															|
|agent							|[http.Agent](https://nodejs.org/api/http.html#http_class_http_agent)																				|-				|-			|http代理，如不使用可设为false																																																																						|
|httpsAgent					|[https.Agent](https://nodejs.org/api/https.html#https_class_https_agent)																		|-				|-			|https代理，如不使用可设为false																																																																						|
|ca									|String&#124;Buffer&#124;Array																																							|-				|-			|证书内容																																																																																	|
|rejectUnauthorized	|Boolean																																																		|-				|true		|是否在证书不受信任时返回错误																																																																							|
|pfx								|String&#124;Buffer																																													|-				|-			|包含了私钥, 证书和CA certs, 一般是 PFX 或者 PKCS12 格式																																																									|
|key								|String&#124;Buffer																																													|-				|-			|PEF格式的服务器的私钥																																																																										|
|cert								|String&#124;Buffer																																													|-				|-			|PEM格式的服务器证书密钥																																																																									|
|passphrase					|String																																																			|-				|-			|私钥或pfx密码的字符串																																																																										|
|ciphers						|String																																																			|-				|-			|使用或排除的cipher																																																																												|
|secureProtocol			|String																																																			|-				|-			|SSL 使用的方法，例如，`SSLv3_method` 强制 SSL 版本为3。																																																									|
|followRedirect			|Boolean																																																		|-				|false	|收到3xx响应时是否自动重定向																																																																							|
|maxRedirects				|Number																																																			|-				|10			|最高重定向次数																																																																														|
|formatRedirectUrl	|Function																																																		|-				|-			|手动格式化url																																																																														|
|beforeRequest			|Function																																																		|-				|-			|请求发送前的钩子																																																																													|
|streaming					|Boolean																																																		|-				|false	|是否直接返回响应流，开启 streaming 之后，HttpClient 会在拿到响应对象 res 之后马上返回， 此时 result.headers 和 result.status 已经可以读取到，只是没有读取 data 数据而已。|
|gzip								|Boolean																																																		|-				|false	|是否支持 gzip 响应格式。开启 gzip 之后，HttpClient 将自动设置 Accept-Encoding: gzip 请求头， 并且会自动解压带 Content-Encoding: gzip 响应头的数据。											|
|timing							|Boolean																																																		|-				|false	|是否开启请求各阶段的时间测量																																																																							|
|enableProxy				|Boolean																																																		|-				|false	|是否启用代理																																																																															|
|proxy							|String																																																			|-				|null		| 代理地址																																																																																|
|lookup							|Function																																																		|-				|-			|自定义DNS查询函数																																																																												|
|checkAddress				|Function																																																		|-				|-			|校验请求地址																																																																															|
|trace							|Boolean																																																		|-				|false	|是否启用捕获堆栈																																																																													|


**示例代码**

```
const res = await uniCloud.httpclient.request(apiUrl, {
    method: 'POST',
    data: {
      test: 'testValue'
    },
    dataType: 'json'
  })
console.log(res)
```

<!-- ### 参数校验

开发者可以使用`uniCloud.validate`对参数进行校验，`uniCloud.validata`用法等同于[jsonschema的validate方法](https://github.com/tdegrunt/jsonschema)

**uniCloud.validate(instance,schema)**

|参数			|说明						|
|----			|----						|
|instance	|需要检验的参数	|
|schema		|校验规则，[详见](https://github.com/tdegrunt/jsonschema)				|

**返回值**

|字段			|说明											|
|----			|----											|
|instance	|需要校验的参数						|
|schema		|校验规则									|
|errors		|校验返回的错误组成的数组，Array<error>	|
|valid		|校验是否通过							|

**error字段说明**

|字段			|说明							|
|----			|----							|
|property	|校验未通过的字段	|
|message	|错误信息					|
|name			|规则名称					|
|stack		|完整错误描述			|


**使用示例**

```
exports.main = async function(event) {
  let validateResult = uniCloud.validate(event, {
    type: 'object',
    properties: {
      a: {
        type: 'number',
        required: true
      }
    }
  })
  console.log(validateResult)
}

//能通过校验参数
{
  a: 1
}

//不能通过校验的参数
{
  a: '1'
}

{
  b: 1
}

```
 -->
### 使用npm

在云函数中我们可以引入第三方依赖来帮助我们更快的开发。云函数的运行环境是 `Node.js`，因此我们可以使用 `npm` 安装第三方依赖。

注意：鉴于阿里云的限制，目前仅支持全量上传云函数（整个 node_modules文件夹全部上传），因此提醒大家，精简依赖，否则可能会每次上传时间很慢，影响开发体验。

Tips:
- 目前每个云函数上传包大小限制为10M。

### 客户端调用云函数

前端代码（H5前端、App、小程序），不再执行uni.request联网，而是通过`uniCloud.callFunction`调用云函数，`callFunction`定义如下：

#### 请求参数

|字段	|类型	|必填	|说明		|
|:-:	|:-:	|:-:	|:-:		|
|name	|String	|是		|云函数名称|
|data	|Object	|否		|客户端需要传递的参数|

#### 响应参数

|字段		|类型	|说明						|
|:-:		|:-:	|:-:						|
|result		|Object	|云函数执行结果				|
|requestId	|String	|请求序列号，用于错误排查	|

#### 示例代码

```javascript
// promise方式
uniCloud.callFunction({
    name: 'test',
    data: { a: 1 }
  })
  .then(res => {});

// callback方式
uniCloud.callFunction({
	name: 'test',
	data: { a: 1 },
	success(){},
	fail(){},
	complete(){}
});
```

目前仅支持客户端调用云函数，即将支持云函数调用云函数。

### 注意事项

云函数是运行在云端的代码，运行环境由云服务器弹性调配，这是和传统`Node.js`应用很大的区别。

换言之，云函数每次执行的宿主环境（可简单理解为虚拟机或服务器硬件）可能相同，也可能不同，因此传统`Node.js`开发中将部分信息存储本地硬盘或内存的方案就不再适合，建议通过云数据库或云存储的方案替代。

另一方面，鉴于云函数的弹性调配机制，为提高运行性能，部分云厂商在一定时间周期内会复用相同的云函数实例，此时为避免数据污染，建议使用无状态的风格编写函数代码。

以如下代码为例，`count`作为全局变量，当多次调用该云函数时，可能会出现变量累加的情况（实例未复用时，每次返回0，若实例被复用，则可能返回1、2、3等各种意外情况）


```javascript
let count = 0;
module.exports = async (event) => {
  return count++
  //此示例为错误示例
  //云函数实例未复用时，每次返回0
  //若实例被复用，则可能返回1、2、3等各种意外情况
}
```

**Tips**

- 云函数中使用的时区是 `UTC+0`，而不是 `UTC+8`，在云函数中使用时间时需特别注意。
- 使用阿里云作为服务商时，暂时无法使用相对路径读取文件，如：`fs.readFileSync('./info')`，可以替换为`fs.readFileSync(path.resolve(__dirname,'./info'))`


<span id="callbyfunction"></span>
## 云函数中调用云函数

用法同客户端调用云函数，不支持callback形式

#### 请求参数

|字段			|类型			|必填	|说明					|
|---			|---			|---	|---					|
|name			|String		|是		|云函数名称。	|
|data			|Object		|否		|云函数参数。	|

#### 响应参数

|字段			|类型		|必备	|说明												|
|---			|---		|---	|---												|
|errCode	|String	|否		|状态码，操作成功则不返回。	|
|errMsg		|String	|否		|错误描述。									|
|result		|Object	|否		|云函数执行结果。						|
|requestId|String	|否		|请求序列号，用于错误排查。	|

**示例代码**

```javascript
let callFunctionResult = await uniCloud.callFunction({
    name: "test",
    data: { a: 1 }
})
```


