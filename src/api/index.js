import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
});

function getList() {
	return instance.get('address/city');
}

function getList1(cityNo) {
	return instance.get('address/children', {
		params: {
			level: '2',
			pAddressId: cityNo,
		},
	});
}

function getList2(cityNo) {
	return instance.get('address/children', {
		params: {
			level: '3',
			pAddressId: cityNo,
		},
	});
}

function postList(params) {
	return instance.post('location/request', params);
}

export { getList, getList1, getList2, postList };
