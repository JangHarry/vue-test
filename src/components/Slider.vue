<template>
	<div class="slider_const">
		평수(선택)
		{{ range1 }}
		<vue-slider
			v-model="value1"
			:marks="marks1"
			:max="40"
			:enable-cross="false"
		></vue-slider>
		<br /><br />
		<br />
		월세 (29박 기준)
		{{ range2 }}
		<vue-slider
			v-model="value2"
			:marks="marks2"
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
			value1: [0, 40],
			value2: [0, 250],
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
			} else {
				return str1 + '평 ~ ' + str2 + '평';
			}
		},
		range2() {
			const str1 = this.value2[0];
			const str2 = this.value2[1];
			if (str1 == str2) {
				return str1 + '만원';
			} else {
				return str1 + '만원 ~ ' + str2 + '만원';
			}
		},
	},
};
</script>

<style></style>
