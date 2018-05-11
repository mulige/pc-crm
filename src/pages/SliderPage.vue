<template>
	<div>
		<el-row style="overflow: hidden;" id="scroll">
			<el-col :span="6">
				<slide-bar class="slide" :sliderArr="arr" :idList="idList"></slide-bar>
			</el-col>
			<el-col :span="18" class="content" id="content">
				<div id="first"></div>
				<div id="seconed"></div>
				<div id="third"></div>
				<div id="forth"></div>
				<div id="fifth"></div>
			</el-col>

		</el-row>
		<router-view></router-view>
	</div>

</template>

<script>
import SlideBar from '@/components/SlideBar'
export default {
  name: 'a',
  data () {
    return {
      arr: [{
        name: '导航一',

        child: [{
          name: '分组一',
          id: 'first'
        },
        {
          name: '分组二',
          id: 'seconed'
        },
        {
          name: '分组三',
          id: 'third'
        },
        {
          name: '分组四',
          id: 'forth'
        }
        ]

      },
      {
        name: '导航三',
        id: 'fifth'
      }

      ],
      idList: ['first', 'seconed', 'third', 'forth']
    }
  },
  components: {
    SlideBar
  },
  created () {
  }

}
</script>

<style lang="scss" scoped>
	.content {
		height: 520px;
		overflow: auto;
	}

	#first {
		background: aqua;
		height: 500px;
	}

	#seconed {
		background: saddlebrown;
		height: 500px;
	}

	#third {
		background: salmon;
		height: 200px;
	}

	#forth {
		background: darkslateblue;
		height: 400px;
	}

	.slide {
		/*position: fixed;
		left: 0;
		top:0;
		width:200px;*/
	}
</style>
