<template>
	<section class="real-app">
		<input 
		type="text"
		class="add-input"
		autofocus="autofocus" 
		placeholder="接下去要做什么" 
		@keyup="addtodo"
		>
		<Item :todo="todo"></Item>
	</section>
</template>
<script>
	import Item from './item.vue'
	export default{
		data:function(){
			return{
				todo:{
					id:0,
					content:'this is a todo',
					completed:false
				}
			}
		},
		components:{
			Item
		},
		methods:{
			addtodo(){
				console.log(8888995577)
			}
		}

	}
</script>
