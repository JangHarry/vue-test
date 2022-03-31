<template>
	<div class="" id="app">
		<GetList @setList="setList" />
		<div class="explain_const">
			<div class="left">
				<h3>추가 정보 선택</h3>
				<br />
				<p>
					추가 정보를 등록해주시면<br />
					최적의 공간을 찾아서 연락드릴게요! &#x1F609;
				</p>
			</div>
			<button :class="{ active: isActive }" @click="activate()"></button>
		</div>
		<div class="form_const" v-if="awesome">
			<Place />
			<Slider />
			<br />
			<h3>이름 <span>(선택)</span></h3>
			<input
				v-model="userName"
				class="module_input_w"
				type="text"
				placeholder="정규직"
			/>
			<h3>휴대폰번호 <span>(선택)</span></h3>
			<input
				v-model="userPhone"
				class="module_input_w"
				type="text"
				@keyup="getPhoneMask(userPhone)"
				placeholder="010-1234-5678"
				maxlength="13"
			/>
			<h3>이메일 <span>(선택)</span></h3>
			<input
				v-model="userEmail"
				class="module_input_w"
				type="text"
				placeholder="sarava@gmail.com"
			/>
			<h3>개인 정보 수집 및 이용 동의 <span>(선택)</span></h3>
			<textarea
				class="module_input_w"
				readonly
				style="resize: none; overflow: hidden"
				placeholder="① 수집 및 이용목적 : 지역 수요 분석, 추가 설문 
② 수집정보 : 이름(성함), 휴대폰번호, 이메일
③ 보유기간 : 제공동의일로부터 1년
귀하께서는 개인정보 수집 및 이용에 대해 거부할 권리가 있습니다"
			/>
			<br />
			<input v-model="ckBox" type="checkbox" />
			<span
				>(선택) 개인정보 수집 및 이용에 동의합니다.<br />
				(동의한 경우에만 개인 정보가 수집됩니다.)</span
			>
		</div>
		<div
			@click="saveData()"
			:class="[formActvie ? 'form-button active' : 'form-button']"
		>
			<h3>완료</h3>
		</div>
	</div>
</template>

<script>
// import { postList } from '@/api/index';
import GetList from './components/GetList.vue';
import Slider from './components/Slider.vue';
import Place from './components/Place.vue';

export default {
	name: 'App',
	data() {
		return {
			ckBox: '',
			awesome: false,
			isActive: false,
			formActvie: false,
			addressId: 0,
			amountFrom: 0,
			amountTo: 0,
			areaFrom: 0,
			areaTo: 0,
			houseStructures: '',
			userEmail: '',
			userName: '',
			userPhone: '',
		};
	},

	methods: {
		setList(value) {
			if (value.length == 0) {
				this.formActvie = false;
			} else {
				this.addressId = value[2];
				this.formActvie = true;
			}
		},
		getPhoneMask(val) {
			let res = this.getMask(val);
			this.userPhone = res;
			//서버 전송 값에는 '-' 를 제외하고 숫자만 저장
			this.model.userPhone = this.userPhone.replace(/[^0-9]/g, '');
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

		saveData() {
			if (this.formActvie) {
				this.setFormData(this.ckBox);
			}
		},

		setFormData(val) {
			let params = [];
			if (val == '') {
				console.log('개인정보 없음');
				params = {
					addressId: this.addressId,
					agreePersonalInfo: false,
					amountFrom: this.amountFrom,
					amountTo: this.amountTo,
					areaFrom: this.areaFrom,
					areaTo: this.areaTo,
					houseStructures: [4001, 4002],
					userEmail: '',
					userName: '',
					userPhone: '',
				};
			} else {
				console.log('개인정보 있음 ');
				params = {
					addressId: this.addressId,
					agreePersonalInfo: true,
					amountFrom: this.amountFrom,
					amountTo: this.amountTo,
					areaFrom: this.areaFrom,
					areaTo: this.areaTo,
					houseStructures: [4001, 4002],
					userEmail: this.userEmail,
					userName: this.userName,
					userPhone: this.userPhone,
				};
			}
			this.postList(params);
		},

		async postList(params) {
			console.log(params);
			//const response = await postList(params);
			//console.log(response);
		},

		activate() {
			this.isActive = !this.isActive;
			this.awesome = !this.awesome;
		},
	},

	components: {
		GetList,
		Slider,
		Place,
	},
};
</script>
