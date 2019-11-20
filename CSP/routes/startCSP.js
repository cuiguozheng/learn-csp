const router = require('koa-router')();
const cspConfig = require('../public/javascripts/csp-config');

router.prefix('/startCSP');

router.get('/', async function(ctx, next) {
	await ctx.render('startCSP/index', {
		title: '启动CSP'
	});
});

router.get('/csp', async function(ctx, next) {
	ctx.set('Content-Security-Policy', "default-src 'self'");
	await ctx.render('startCSP/csp', {
		title: '只用Content-Security-Policy！'
	});
});

router.get('/report', async function(ctx, next) {
	ctx.set(
		'Content-Security-Policy-Report-Only',
		"default-src 'self'; report-uri /CSP/my_csp_report"
	);
	await ctx.render('startCSP/cspReport', {
		title: '只用Content-Security-Policy-Report-Only！'
	});
});

router.get('/meta', async function(ctx, next) {
	await ctx.render('startCSP/meta', {
		title: '只用meta！'
	});
});

router.get('/both', async function(ctx, next) {
	ctx.set(
		'Content-Security-Policy',
		"script-src 'self'; style-src c.58cdn.com.cn; img-src 'self'"
	);
	ctx.set(
		'Content-Security-Policy-Report-Only',
		"script-src j1.58cdn.com.cn; style-src 'self'; report-uri /CSP/my_csp_report"
	);
	await ctx.render('startCSP/both', {
		title: '都使用！'
	});
});

module.exports = router;
