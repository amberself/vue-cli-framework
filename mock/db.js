//json-server 模拟后端数据请求
let imock_user = require('./router/imock_user')();
let imock_order = require('./router/imock_order')();

module.exports = function() {
	let data = {
		imock_user,
		imock_order
	};
	return data;
};