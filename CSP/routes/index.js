const router = require('koa-router')();

router.get('/', async (ctx, next) => {
	await ctx.render('index', {
		title: '内容安全策略CSP（Content Security Policy）'
	});
});

router.get('/result', async (ctx, next) => {
	ctx.set(
		'Content-Security-Policy',
		// "require-sri-for script"
		"require-sri-for script; child-src pos.baidu.com statictrack.58.com jumpluna.58.com; sandbox allow-scripts; frame-ancestors 'none';"
	);
	await ctx.render('result', {
		title: '防止站内恶意代码攻击配置'
	});
});

// router.get('/startCSP', async (ctx, next) => {
// 	ctx.set('Content-Security-Policy', "default-src 'self';");
// 	await ctx.render('startCSP', {
// 		title: '启动CSP'
// 	});
// });

router.get('/json', async (ctx, next) => {
	ctx.body = {
		title: 'koa2 json'
	};
});

module.exports = router;
