import Vue from 'vue'
import App from './app.vue'
import './less/main.less'
const root=document.getElementById('root')
new Vue({
	render:(h)=>h(App)
}).$mount(root)

