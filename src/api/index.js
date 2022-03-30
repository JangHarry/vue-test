import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
});

function getList() {
	//const url = 'https://api-dev.saravayo.com/v1/common/address/city';
	//return axios.get(url);
	return instance.get('address/city');
}

function getList1(cityNo) {
	//const url = 'https://api-dev.saravayo.com/v1/common/address/city';
	//return axios.get(url);

	return instance.get('address/children', {
		params: {
			level: '2',
			pAddressId: cityNo,
		},
	});
}

function getList2(cityNo) {
	//const url = 'https://api-dev.saravayo.com/v1/common/address/city';
	//return axios.get(url);
	return instance.get('address/children', {
		params: {
			level: '3',
			pAddressId: cityNo,
		},
	});
}

export { getList, getList1, getList2 };
