//模拟随机订单信息
let Mock = require('mockjs');
let Random = Mock.Random;

let content = function() {
	let data = [];
	let length = 10;

	for(let i = 0; i < length; i++) {
		let item = new Object();
		item.id = Random.word(32);
		item.name = Random.cword(2, 4);
		item.date = Random.date();
		item.time = Random.time();
		item.imgurl = Random.image('200x100');
		item.color = Random.color();
		item.price = Random.float(1, 3);
		item.desc = Random.cparagraph(2);
		data.push(item);
	}

	return data;
}

module.exports = content;