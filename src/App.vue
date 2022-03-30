<template>
	<div id="app">
		<GetList />
		<div>
			<span>추가 정보를 등록해주시면 최적의 공간을 찾아서 연락드릴게요!</span>
			<button @click="awesome = !awesome">클릭</button>
		</div>
		<div v-if="awesome">
			<Place />
			<Slider />
			<br />
			<h3>이름(선택)</h3>
			<input type="text" placeholder="정규직" />
			<h3>휴대폰번호 (선택)</h3>
			<input
				type="text"
				v-model="contact"
				@keyup="getPhoneMask(contact)"
				placeholder="010-1234-5678"
				maxlength="13"
			/>
			<h3>이메일(선택)</h3>
			<input type="text" placeholder="sarava@gmail.com" />
			<h3>개인 정보 수집 및 이용 동의 (선택)</h3>
			<input
				disabled
				type="text"
				value="① 수집 및 이용목적 : 지역 수요 분석, 추가 설문
② 수집정보 : 이름(성함), 휴대폰번호, 이메일
③ 보유기간 : 제공동의일로부터 1년
귀하께서는 개인정보 수집 및 이용에 대해 거부할 권리가 있습니다"
			/>
			<br />
			<input type="checkbox" />
			<span
				>(선택) 개인정보 수집 및 이용에 동의합니다. (동의한 경우에만 개인 정보가
				수집됩니다.)</span
			>
		</div>
	</div>
</template>

<script>
import GetList from './components/GetList.vue';
import Slider from './components/Slider.vue';
import Place from './components/Place.vue';

export default {
	name: 'App',
	data() {
		return {
			awesome: true,
			contact: null,
		};
	},

	methods: {
		getPhoneMask(val) {
			let res = this.getMask(val);
			this.contact = res;
			//서버 전송 값에는 '-' 를 제외하고 숫자만 저장
			this.model.contact = this.contact.replace(/[^0-9]/g, '');
		},

		getMask(phoneNumber) {
			if (!phoneNumber) return phoneNumber;
			phoneNumber = phoneNumber.replace(/[^0-9]/g, '');

			let res = '';
			if (phoneNumber.length < 3) {
				res = phoneNumber;
			} else {
				if (phoneNumber.substr(0, 2) == '02') {
					if (phoneNumber.length <= 5) {
						//02-123-5678
						res = phoneNumber.substr(0, 2) + '-' + phoneNumber.substr(2, 3);
					} else if (phoneNumber.length > 5 && phoneNumber.length <= 9) {
						//02-123-5678
						res =
							phoneNumber.substr(0, 2) +
							'-' +
							phoneNumber.substr(2, 3) +
							'-' +
							phoneNumber.substr(5);
					} else if (phoneNumber.length > 9) {
						//02-1234-5678
						res =
							phoneNumber.substr(0, 2) +
							'-' +
							phoneNumber.substr(2, 4) +
							'-' +
							phoneNumber.substr(6);
					}
				} else {
					if (phoneNumber.length < 8) {
						res = phoneNumber;
					} else if (phoneNumber.length == 8) {
						res = phoneNumber.substr(0, 4) + '-' + phoneNumber.substr(4);
					} else if (phoneNumber.length == 9) {
						res =
							phoneNumber.substr(0, 3) +
							'-' +
							phoneNumber.substr(3, 3) +
							'-' +
							phoneNumber.substr(6);
					} else if (phoneNumber.length == 10) {
						res =
							phoneNumber.substr(0, 3) +
							'-' +
							phoneNumber.substr(3, 3) +
							'-' +
							phoneNumber.substr(6);
					} else if (phoneNumber.length > 10) {
						//010-1234-5678
						res =
							phoneNumber.substr(0, 3) +
							'-' +
							phoneNumber.substr(3, 4) +
							'-' +
							phoneNumber.substr(7);
					}
				}
			}

			return res;
		},
	},

	components: {
		GetList,
		Slider,
		Place,
	},
	created() {
		console.log('hi');
	},
};
</script>
