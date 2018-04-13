'use strict'

var pro_name = process.env.PRO_NAME ? process.env.PRO_NAME : 'client';
var host = process.env.HOST ? process.env.HOST : 'localhost';
var port = process.env.PORT ? process.env.PORT : '8080';
var cdn = process.env.CDN ? process.env.CDN : '/';

module.exports = {
	NODE_ENV: '"production"',
	PRO_NAME: `${pro_name}`,
	HOST: `"${host}"`,
	PORT: `"${port}"`,
	CDN: `${cdn}`
}