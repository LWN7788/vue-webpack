<template>
	<section class="real-app">
		<input 
		type="text"
		class="add-input"
		autofocus="autofocus" 
		placeholder="接下去要做什么" 
		@keyup.enter="addtodo"
		>
		<Item 
			v-for="todo in todos"
			:todo="todo"
			:key="todo.id"
			@del="deleteTodo"
		/>
		<tabs></tabs>
	</section>
</template>
<script>
	import Item from './item.vue'
	import tabs from './tabs.vue'
	let id=0;
	export default{
		data:function(){
			return{
				todos:[],
				filter:'all'
			}
		},
		components:{
			Item,tabs
		},
		methods:{
			addtodo(e){
				this.todos.unshift({
					id:id++,
					content:e.target.value.trim(),
					completed:false
				})
				e.target.value='';
			},
			deleteTodo(id){
				var index='';
				this.todos.forEach(function(index,item){
					if(item.id==id){
						index=index;
					}
				})
				this.todos.splice(index,1)
			}
		}

	}
</script>
