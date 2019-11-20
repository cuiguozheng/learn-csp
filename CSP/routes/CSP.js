const router = require('koa-router')();
const cspConfig = require('../public/javascripts/csp-config');

router.prefix('/CSP');

router.get('/', async function(ctx, next) {
	// ctx.set(
	// 	'Report-To',
	// 	JSON.stringify({
	// 		group: 'endpoint',
	// 		max_age: 0,
	// 		endpoints: [
	// 			{
	// 				url: '/CSP/my_csp_reportTo'
	// 			}
	// 		]
	// 	})
	// );
	ctx.set('Content-Security-Policy', cspConfig.ContentSecurityPolicy);
	// ctx.set(
	// 	'Content-Security-Policy-Report-Only',
	// 	cspConfig.ContentSecurityPolicyReportOnly
	// );
	await ctx.render('index', {
		title: '包含在Response Headers 中的CSP!'
	});
});

router.get('/bar', function(ctx, next) {
	ctx.body = 'this is a CSP/bar response';
});

router.post('/my_csp_report', async (ctx, next) => {
	console.log(ctx.request.body);
	ctx.body = 'this is my_csp_report';
});


module.exports = router;
