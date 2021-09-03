new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		warning: true,
		size: true,
		classe3: ''
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'
			}, 3000);
		},
		iniciarProgresso() {

		}
	}
})
