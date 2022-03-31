<template>
	<div class="list_const">
		<div>
			<select
				class="module_select_w"
				id="first"
				v-model="first"
				@change="onChange($event)"
			>
				<option disabled value="">시/도</option>
				<option
					v-for="(item, index) in list"
					:value="item.addressId"
					:key="index"
				>
					{{ item.addressName }}
				</option>
			</select>
			<div class="select__arrow" />
		</div>
		<div>
			<select
				class="module_select_w"
				id="second"
				:disabled="list1.length == 0"
				v-model="second"
				@change="onChange($event)"
			>
				<option disabled value="">시/군/구</option>
				<option
					v-for="(item, index) in list1"
					:value="item.addressId"
					:key="index"
				>
					{{ item.addressName }}
				</option>
			</select>
			<div class="select__arrow" />
		</div>
		<div>
			<select
				class="module_select_w"
				id="three"
				@change="onChange($event)"
				v-model="three"
			>
				<option disabled value="">읍/면/동</option>
				<option
					v-for="(item, index) in list2"
					:value="item.addressId"
					:key="index"
				>
					{{ item.addressName }}
				</option>
			</select>
			<div class="select__arrow" />
		</div>
	</div>
</template>

<script>
import { getList, getList1, getList2 } from '@/api/index';
export default {
	data() {
		return {
			list: [],
			list1: [],
			list2: [],
			first: '',
			second: '',
			three: '',
		};
	},
	watch: {
		three: function (val) {
			if (val == '') {
				this.onEmit(false);
			}
		},
	},
	methods: {
		onChange(event) {
			const cityNo = event.target.value;
			const selectId = event.target.id;

			if (selectId == 'first') {
				this.getList1(cityNo);
				this.second = '';
				this.three = '';
			} else if (selectId == 'second') {
				this.getList2(cityNo);
				this.three = '';
			} else {
				this.onEmit(true);
			}
		},

		async getList() {
			const response = await getList();
			this.list = response.data.content;
		},

		async getList1(cityNo) {
			const response = await getList1(cityNo);
			this.list1 = response.data.content;
		},

		async getList2(cityNo) {
			const response = await getList2(cityNo);
			this.list2 = response.data.content;
		},

		onEmit(val) {
			if (val) {
				this.$emit('setList', [this.first, this.second, this.three]);
			} else {
				this.$emit('setList', []);
			}
		},
	},
	created() {
		this.getList();
	},
};
</script>
