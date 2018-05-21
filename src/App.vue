<template>

		<div id="app">
			<!--<img src="./assets/logo.png">-->
			<navs></navs>
			<section id="main-warpper">
				<transition name="el-fade-in-linear" mode="out-in">
					<router-view/>
				</transition>
			</section>
		</div>

</template>

<script>

import MyHeaderD from '@/components/Header.vue'
import MyHeader from '@/components/Hea.vue'
import Navs from '@/components/common/Nav.vue'
export default {
  name: 'App',
  components: {
    MyHeader,Navs
  }
}
</script>

<style lang="scss">
	@import './styles/app.scss';

	#app {
		height: 100%;
		display: flex;
		flex-direction: column;

	}
	#main-warpper{
		flex-grow: 1;
		flex-shrink: 1;
		overflow: hidden;
		position: relative;

	}
	.router-fade-enter-active,
	.router-fade-leave-active {
		transition: opacity .3s;
	}

	.router-fade-enter,
	.router-fade-leave-active {
		opacity: 0;
	}
</style>
