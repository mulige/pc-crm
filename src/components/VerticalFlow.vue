<template>
  <div class="vertical-flow">
       <section class="vertical-flow-item" v-for="(item,index) in list" :key="index">
        <section class="flow-order">
            <span class="order" :class="status==index+1?'order-yellow':(status>index+1?'order-blue':'')">{{index+1}}</span>
            <span class="title" :class="status==index+1?'title-yellow':(status>index+1?'title-blue':'')">{{item.title}}</span>
        </section>
        <ul class="flow-list" :class="status==index+1?'flow-list-yellow':(status>index+1?'flow-list-blue':'')">
            <li class="list-item"  v-for="(child,childIndex) in item.children" :key="childIndex">
                <div class="item-left">
                    <span class="iconfont icon-yan"></span>
                    <span>{{child.title}}</span>
                    <span class="badge">{{child.newBadge}}</span>
                </div>
                <div class="item-right">
                    <span>发起请求</span>
                    <span class="iconfont icon-tubiaozhizuomoban"></span>
                </div>
            </li>
        </ul>
    </section>
  </div>

</template>
<script>
export default {
  name: 'VerticalFlow',
  data () {
    return {
      list: [
        {
          'title': '项目1',
          'children': [{
            'title': '项目流程1',
            'newBadge': 2
          },
          {
            'title': '项目流程2',
            'newBadge': 3
          },
          {
            'title': '项目流程3',
            'newBadge': 3
          }
          ]
        },
        {
          'title': '项目2',
          'children': [{
            'title': '项目流程1',
            'newBadge': 2
          },
          {
            'title': '项目流程2',
            'newBadge': 3
          },
          {
            'title': '项目流程3',
            'newBadge': 3
          }
          ]
        }
      ]
    }
  },
  props: {
    flowList: {
      default: function () {
        return []
      }
    }
  },
  computed: {
    status () {
      return this.list.length
    }
  }

}
</script>

<style   lang="scss" scoped>
    .vertical-flow{
       .flow-order{
           height: 30px;
           display:flex;
           align-items:center;
           .order{
               width: 30px;
               border-radius:50%;
               background:#ccc;
               line-height: 30px;
               text-align: center;
               color: white;
           }
           .order-blue{
               background:blue;
           }
           .order-yellow{
               background:orangered;
           }
           .title{
                margin-left: 2px;
                line-height: 30px;
                font-size: 14px;
                color: #ccc;
           }
           .title-blue{
                color: blue;
           }
           .title-yellow{
               color: orangered;
           }
       }
       .flow-list{
            padding: 0;
            margin: 0;
            margin-left: 14px;
            border-left: 2px solid #ccc;
            font-size: 12px;
            padding-left: 15px;
            width: 200px;
            .list-item{
                height: 16px;
                line-height: 16px;
                padding: 10px 0;
                list-style: none;
                display: flex;
                justify-content: space-between;
                .iconfont{
                        font-size: 12px;
                }
                .item-left{
                    display: flex;
                    align-items: center;
                    span{
                        display: inline-block;
                        height: 16px;
                        line-height: 16px;
                    }
                    .badge{
                        display: inline-block;
                        width: 12px;
                        height: 12px;
                        border-radius: 4px 4px;
                        background: orangered;
                        line-height: 12px;
                        text-align: center;
                        font-size: 12px;
                        color: white;
                    }
                }
                .item-right{
                    background: orangered;
                    line-height: 16px;
                    width: 80px;
                    text-align: center;
                    vertical-align: middle;
                    color: white;

                }
            }
       }
       .flow-list-yellow{
            border-left:2px solid orangered
        }
        .flow-list-blue{
            border-left:2px solid blue
        }
    }
</style>
