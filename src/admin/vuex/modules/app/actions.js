import { _get, _post, _delete, _put } from "@/lib/js/http";

let _prefix = ``; // 请求前缀

//通过vuex请求后端模拟的IMockOrder接口数据 ， 参数是(content, value)，即上下文和值对象
export const getIMockOrder = ({
	commit
}, query) => {
	const url = `${_prefix}/imock_order`;
	return _get({
			url,
			query
		}, commit)
		.then(json => {
			return Promise.resolve(json);
		})
		.catch(error => {
			return Promise.reject(error);
		});
};