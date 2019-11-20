exports.ContentSecurityPolicy =
	"default-src 'self'; script-src c.58cdn.com.cn; report-uri /CSP/my_csp_report;";

exports.ContentSecurityPolicyReportOnly =
	'script-src c.58cdn.com.cn; report-uri /CSP/my_csp_report;';
