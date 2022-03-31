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
			<select class="module_select_w" id="three" v-model="three">
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
	methods: {
		onChange(event) {
			const cityNo = event.target.value;
			const selectId = event.target.id;

			if (selectId == 'first') {
				this.getList1(cityNo);
				this.second = '';
				this.three = '';
			} else {
				this.getList2(cityNo);
				this.three = '';
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
	},
	created() {
		this.getList();
	},
};
</script>
