//模拟跨域请求数据
let Mock = require('mockjs');
let Random = Mock.Random;

let content = function() {
	let data = [];
	let length = 10;

	for(let i = 0; i < length; i++) {
		let item = new Object();
		item.id = Random.word(32);
		item.date = Random.date();
		item.name = Random.cword(2, 4);
		item.desc = "跨域数据";
		data.push(item);
	}

	return data;
}

module.exports = content;