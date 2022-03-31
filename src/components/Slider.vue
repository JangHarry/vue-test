<template>
	<div class="slider_const">
		<h3>평수<span>(선택)</span></h3>
		<div class="range-font">{{ range1 }}</div>
		<vue-slider
			v-model="value1"
			:marks="marks1"
			:min="1"
			:max="40"
			:enable-cross="false"
		></vue-slider>
		<h3>월세 <span>(29박 기준)</span></h3>
		<div class="range-font">{{ range2 }}</div>
		<vue-slider
			v-model="value2"
			:marks="marks2"
			:min="1"
			:max="250"
			:enable-cross="false"
		></vue-slider>
	</div>
</template>

<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';
export default {
	data() {
		return {
			value1: [1, 40],
			value2: [1, 250],
			marks1: {
				1: '1평',
				10: '10평',
				20: '20평',
				30: '30평',
				40: '40평~',
			},
			marks2: {
				1: '1만',
				50: '50만',
				100: '100만',
				150: '150만',
				250: '250만~',
			},
		};
	},
	components: {
		VueSlider,
	},
	computed: {
		range1() {
			const str1 = this.value1[0];
			const str2 = this.value1[1];
			if (str1 == str2) {
				return str1 + '평';
			} else if (str1 > 1 && str2 == 40) {
				return str1 + '평 이상';
			} else if (str1 == 1 && str2 == 40) {
				return '전체';
			} else {
				return str1 + '평 ~ ' + str2 + '평';
			}
		},
		range2() {
			const str1 = this.value2[0];
			const str2 = this.value2[1];
			if (str1 == str2) {
				return str1 + '만원';
			} else if (str1 > 1 && str2 == 250) {
				return str1 + '만 이상';
			} else if (str1 == 1 && str2 == 250) {
				return '전체';
			} else {
				return str1 + '만원 ~ ' + str2 + '만원';
			}
		},
	},
};
</script>
