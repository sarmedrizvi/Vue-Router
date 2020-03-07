import User from './components/user/user.vue';
import Home from './components/Home.vue'
import UserEdit from './components/user/UserEdit.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserStart from './components/user/UserStart.vue'
export const routes = [
	{
		name: 'home',
		path: '/',
		component: Home
	},
	{
		path: '/user',
		component: User,
		children: [{
			path: '',
			component: UserStart
		},
		{
			path: ':id',
			component: UserDetail
		},
		{
			path: ':id/edit',
			component: UserEdit,
			name: 'userEdit'
		}]
	},

]