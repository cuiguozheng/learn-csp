const router = require('koa-router')();
const cspConfig = require('../public/javascripts/csp-config');

router.prefix('/cspKeyword');

router.get('/self', async function(ctx, next) {
	ctx.set('Content-Security-Policy', "script-src 'self'");
	await ctx.render('cspKeyword/self', {
		title: 'self：指提供受保护文档的来源，仅包括相同的URL方案和端口号'
	});
});

router.get('/unsafeEval', async function(ctx, next) {
	ctx.set(
		'Content-Security-Policy',
		"script-src 'unsafe-eval' 'unsafe-inline'"
	);
	await ctx.render('cspKeyword/unsafeEval', {
		title: '允许使用eval()'
	});
});

router.get('/unsafeHashes', async function(ctx, next) {
	ctx.set(
		'Content-Security-Policy',
		"script-src 'sha256-gAxsES+Arx9AWDa7g44V6AjEfsAUbdbWMw9QCS5khDg='; sandbox allow-scripts"
	);
	await ctx.render('cspKeyword/unsafeHashes', {
		title:
			'MDN上说：只允许内联事件处理程序，而不允许内联<script>元素或javascript:URL'
	});
});

router.get('/unsafeInline', async function(ctx, next) {
	ctx.set('Content-Security-Policy', "script-src 'unsafe-inline'");
	await ctx.render('cspKeyword/unsafeInline', {
		title:
			'允许使用内联资源，例如内联<script>元素，javascript:URL，内联事件处理程序和内联<style>元素'
	});
});

router.get('/none', async function(ctx, next) {
	ctx.set('Content-Security-Policy', "script-src 'none'");
	await ctx.render('cspKeyword/unsafeInline', {
		title: '指空集；也就是说，没有URL匹配'
	});
});

router.get('/nonceBase64', async function (ctx, next) {
	ctx.set(
		'Content-Security-Policy',
		"script-src 'nonce-2726c7f26c' j1.58cdn.com.cn"
	);
	await ctx.render('cspKeyword/nonceBase64', {
		title: '使用加密随机数（使用一次的数字）的特定内联脚本的白名单'
	});
});

router.get('/strictDynamic', async function(ctx, next) {
	ctx.set(
		'Content-Security-Policy',
		"script-src 'strict-dynamic' 'nonce-cui' j1.58cdn.com.cn"
	);
	await ctx.render('cspKeyword/strictDynamic', {
		title: '强制执行hash或nonce配置'
	});
});

module.exports = router;
