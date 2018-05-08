<template>
	<div class="app">
		<Header></Header>
		<Footer></Footer>
		<Todo></Todo>
	</div>
</template>
<script>
	import Header from './todo/header.vue';
	import Footer from './todo/footer.vue';
	import Todo from './todo/todo.vue';
	export default{
		components:{
			Header,Footer,Todo,
		},
		data:function(){
			return{text:'88888'}
		}
	}

</script>
<style lang="less" scoped>
	.app{
		text-align:center;
	}
</style>
