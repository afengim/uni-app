var url = require('url'),
	fs = require('fs'),
	http = require('http'),
	path = require('path');
var portIsOccupied = require('./portIsOccupied');
var Renderer = require('docsify-server-renderer');
/**
 * 渲染器实例
 */
var renderer;
/**
 * 模板文件路径
 */
var TEMPLATE_PATH = path.join(__dirname, '../index.html')

function createRenderer() {
	/**
	 * 渲染配置
	 */
	var config
	var template = fs.readFileSync(TEMPLATE_PATH, 'utf-8')
	// 由于docsify-server-renderer在Windows渲染出错，只在非Windows进行前端渲染
	if (process.platform.indexOf('win') !== 0) {
		template = template.replace(/<div\s+id="app"><\/div>/, '<!--inject-app-->')
	}
	var scripStart = '// docsify config start'
	var scripEnd = '// docsify config end'
	var configText = template.substring(template.indexOf(scripStart) + scripStart.length, template.indexOf(scripEnd))
	// 读取配置项
	eval(configText.replace(/window.\$docsify\s*=/, 'config='))

	renderer = new Renderer({
		template,
		config
	});
}

createRenderer()
fs.watchFile(TEMPLATE_PATH, createRenderer)

function notFond(res) {
	res.writeHead(200, {
		"Content-Type": "text/html"
	});
	renderer.renderToString('/404').then(html => {
		res.end(html);
	}).catch(err => {
		console.log(err);
	});
}
portIsOccupied(3000).then((port)=>{
	http.createServer(function(req, res) {
		var pathname = url.parse(req.url).pathname
		if (pathname === '/package.json') {
			notFond(res);
			return;
		}
		if (!path.extname(pathname).length) {
			res.writeHead(200, {
				"Content-Type": "text/html"
			});
			renderer.renderToString(pathname).then(html => {
				// 更改title
				var titleReg = new RegExp(`<a\\s+href="${pathname}">(.+)</a>`)
				var title = html.match(titleReg)
				if (title && title.length == 2) {
					title = title[1]
					html = html.replace(/(<title>)(.*?)(<\/title>)/, `$1${title} - ${pathname === '/uniCloud/README'?'uniCloud官网':'$2'}$3`)
				}
				
				let description
				let keywords
				if (pathname.startsWith('/uniCloud/')) {
					description = 'uniCloud 是 DCloud 联合阿里云、腾讯云，为开发者提供的基于 serverless 模式和 js 编程的云开发平台'
					keywords = 'uniCloud、云开发、DCloud、serverless、小程序云、uni-app'
				}
				// 更改description
				if (description) {
					html = html.replace(/(<meta name="description" content=").+?(">)/, `$1${description}$2`)
				}
				// 更改keywords
				if (keywords) {
					html = html.replace(/(<meta name="keywords" content=").+?(">)/, `$1${keywords}$2`)
				}
				res.end(html);
			}).catch(err => {
				console.log(err);
			});
			return;
		}
		switch (path.extname(pathname)) {
			case ".html":
				res.writeHead(200, {
					"Content-Type": "text/html"
				});
				break;
			case ".js":
				res.writeHead(200, {
					"Content-Type": "text/javascript"
				});
				break;
			case ".css":
				res.writeHead(200, {
					"Content-Type": "text/css"
				});
				break;
			default:
				res.writeHead(200, {
					"Content-Type": "application/octet-stream"
				});
		}
		fs.readFile(path.join(__dirname, '../', url.parse(req.url).pathname), function(err, data) {
			if (err) {
				console.log(err);
				notFond(res);
			} else {
				res.end(data);
			}
		});
	}).listen(port);
})

