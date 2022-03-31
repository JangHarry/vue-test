<template>
	<div id="place">
		<h3>공간 구조 <span>(선택)</span></h3>
		<ul class="module_tab_list">
			<li
				v-for="place in places"
				:class="{ active: place.isActive }"
				:key="place.id"
				@click="activate(place)"
			>
				{{ place.name }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			places: [
				{ name: '원룸', isActive: true },
				{ name: '1.5룸', isActive: false },
				{ name: '투룸', isActive: false },
				{ name: '쓰리룸이상', isActive: false },
			],
		};
	},
	methods: {
		activate(item) {
			item.isActive = !item.isActive;
		},
	},
};
</script>
