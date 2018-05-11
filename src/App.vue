<template>
	<transition name="router-fade" mode="out-in">
		<div id="app">
			<!--<img src="./assets/logo.png">-->
			<my-header></my-header>
			<section id="main-warpper">
				<router-view/>
			</section>
		</div>
	</transition>
</template>

<script>

import MyHeader from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    MyHeader
  }
}
</script>

<style lang="scss">
	@import './styles/app.scss';

	#app {
		height: 100%;
	}

	.router-fade-enter-active,
	.router-fade-leave-active {
		transition: opacity .6s;
	}

	.router-fade-enter,
	.router-fade-leave-active {
		opacity: 0;
	}
</style>
