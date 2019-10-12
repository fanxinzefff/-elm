<template>
    <div>
        <HeaderTop :title="name">
        <span class="header_search" slot="left">
          <i class="iconfont icon-jiantou2" @click="$router.replace('/msite')"></i>
        </span>
        <span class="header_login" slot="right">
          <span class="header_login_text"></span>
        </span>
      </HeaderTop>>
        <div class="food_dontainer">

            <div class="sort_item">
                <span @click="classification = !classification, sort=false, screen=false">{{name}}▲</span>
                <ul v-show="classification" class="classifi">
                    <li>
                      <span>异国料理</span>
                      <span class="classsbb">2272</span>
                    </li>
                    <li @click="midnightSnack" :class="classColor">
                      <span>快餐便当</span>
                      <span class="classsbb">1792</span>
                    </li>
                    <li @click="nightSnack">
                      <span>小吃夜宵</span>
                      <span class="classsbb">151</span>
                    </li>
                    <li @click="fruits">
                      <span>果蔬生鲜</span>
                      <span class="classsbb">70</span>
                    </li>
                    <li @click="styleFood">
                      <span>特色菜系</span>
                      <span class="classsbb">58       ></span>
                    </li>
                    <li @click="supermaket">
                      <span>商店超市</span>
                      <span class="classsbb">29       ></span>
                    </li>
                    <li @click="flower">
                      <span>鲜花蛋糕</span>
                      <span class="classsbb">23       ></span>
                    </li>
                    <li @click="allShop">
                      <span>全部商家</span>
                      <span class="classsbb">0        ></span>
                    </li>
                    <li @click="drink">
                      <span>甜品饮品</span>
                      <span class="classsbb">27       ></span>
                    </li>
                </ul>
                
                <div v-show="classification">
                  <ul v-show="classification1" class="classifi2">
                    <li @click="confusion">
                      <span>简餐</span>
                      <span>1642</span>
                    </li>
                    <li @click="confusion">
                      <span>盖浇饭</span>
                      <span>58</span>
                    </li>
                    <li @click="confusion">
                      <span>米粉面馆</span>
                      <span>46</span>
                    </li>
                    <li @click="confusion">
                      <span>包子粥店</span>
                      <span>16</span>
                    </li>
                    <li @click="confusion">
                      <span>香锅砂锅</span>
                      <span>5</span>
                    </li>
                    <li @click="confusion">
                      <span>麻辣烫</span>
                      <span>2</span>
                    </li>
                    <li @click="confusion">
                      <span>饺子混沌</span>
                      <span>0</span>
                    </li>
                    <li @click="confusion">
                      <span>汉堡</span>
                      <span>3</span>
                    </li>
                    <li @click="confusion">
                      <span>生煎锅贴</span>
                      <span>0</span>
                    </li>
                  </ul>
                  <ul v-show="classification2" class="classifi2">
                    <li @click="confusion">
                      <span>小龙虾</span>
                      <span>23</span>
                    </li>
                    <li @click="confusion">
                      <span>地方小吃</span>
                      <span>48</span>
                    </li>
                    <li @click="confusion">
                      <span>烧烤</span>
                      <span>61</span>
                    </li>
                    <li @click="confusion">
                      <span>炸鸡炸串</span>
                      <span>11</span>
                    </li>
                    <li @click="confusion">
                      <span>鸭脖卤味</span>
                      <span>2</span>
                    </li>
                    <li @click="confusion">
                      <span>零食</span>
                      <span>1</span>
                    </li>
                  </ul>
                  <ul v-show="classification3" class="classifi2">
                    <li @click="confusion">
                      <span>水果</span>
                      <span>21</span>
                    </li>
                    <li @click="confusion">
                      <span>生鲜</span>
                      <span>11</span>
                    </li>
                    <li @click="confusion">
                      <span>蔬菜</span>
                      <span>16</span>
                    </li>
                    <li @click="confusion">
                      <span>海鲜水产</span>
                      <span>17</span>
                    </li>
                  </ul>
                  <ul v-show="classification4" class="classifi2">
                    <li @click="confusion">
                      <span>川湘菜</span>
                      <span>3</span>
                    </li>
                    <li @click="confusion">
                      <span>其他菜系</span>
                      <span>13</span>
                    </li>
                    <li @click="confusion">
                      <span>江浙菜</span>
                      <span>9</span>
                    </li>
                    <li @click="confusion">
                      <span>粤菜</span>
                      <span>13</span>
                    </li>
                    <li @click="confusion">
                      <span>海鲜</span>
                      <span>9</span>
                    </li>
                    <li @click="confusion">
                      <span>火锅烤鱼</span>
                      <span>2</span>
                    </li>
                    <li @click="confusion">
                      <span>东北菜</span>
                      <span>0</span>
                    </li>
                    <li @click="confusion">
                      <span>西北菜</span>
                      <span>2</span>
                    </li>
                    <li @click="confusion">
                      <span>云南菜</span>
                      <span>1</span>
                    </li>
                  </ul>
                  <ul v-show="classification5" class="classifi2">
                    <li @click="confusion">
                      <span>超市</span>
                      <span>16</span>
                    </li>
                    <li @click="confusion">
                      <span>便利店</span>
                      <span>7</span>
                    </li>
                    <li @click="confusion">
                      <span>名酒坊</span>
                      <span>1</span>
                    </li>
                    <li @click="confusion">
                      <span>零食饮料</span>
                      <span>1</span>
                    </li>
                    <li @click="confusion">
                      <span>水站</span>
                      <span>1</span>
                    </li>
                    <li @click="confusion">
                      <span>茶</span>
                      <span>0</span>
                    </li>
                    <li @click="confusion">
                      <span>奶站</span>
                      <span>0</span>
                    </li>
                    <li @click="confusion">
                      <span>粮油</span>
                      <span>0</span>
                    </li>
                    <li @click="confusion">
                      <span>美妆母婴</span>
                      <span>2</span>
                    </li>
                  </ul>
                  <ul v-show="classification6" class="classifi2">
                    <li @click="confusion">
                      <span>鲜花</span>
                      <span>10</span>
                    </li>
                    <li @click="confusion">
                      <span>蛋糕</span>
                      <span>7</span>
                    </li>
                    <li @click="confusion">
                      <span>面包</span>
                      <span>4</span>
                    </li>
                    
                  </ul>
                  <ul v-show="classification7" class="classifi2">
                  </ul>
                  <ul v-show="classification8" class="classifi2">
                    <li @click="confusion">
                      <span>奶茶果汁</span>
                      <span>14</span>
                    </li>
                    <li @click="confusion">
                      <span>甜品</span>
                      <span>11</span>
                    </li>
                    <li @click="confusion">
                      <span>咖啡</span>
                      <span>2</span>
                    </li>
                  </ul>
                </div>
              
            </div>
            <div class="sort_item">
                <span @click="sort = !sort,classification=false, screen=false">排序▲</span>
                <ul v-show="sort" class="sort_six">
                  <li @click="aiii">智能排序</li>
                  <li @click="near">距离最近</li>
                  <li @click="salesvolume">销量最高</li>
                  <li @click="deliveryprice">起送价最低</li>
                  <li @click="deliveryspeed">配送速度最快</li>
                  <li @click="score">评分最高</li>
                </ul>
            </div>
            <div class="sort_item">
                <span @click="screen = !screen, classification=false, sort=false">筛选▲</span>
                <div class="sort_screen" v-show="screen">
                  <div class="screen_header">
                    <p>配送方式</p>
                    <span class="screen_seven">蜂鸟专送</span>
                  </div>
                  <div class="screen_body">
                    <p>商家属性 (可以多选)</p>
                    <li class="screen_seven">品牌商家</li>
                    <li class="screen_seven">外卖保</li>
                    <li class="screen_seven">准时达</li>
                    <li class="screen_seven">新店</li>
                    <li class="screen_seven">在线支付</li>
                    <li class="screen_seven">开发票</li>
                  </div>
                  <div class="screen_footer clearfix">
                    <button>清空</button>
                    <button @click="confusionSure">确定</button>
                  </div>
                </div>
            </div>
        </div>
    <hr>


       <div class="shop_container">
        <ul class="clearfix">
          <li v-for="(shop,index) in shops" :key="index" class="clearfix">
            <img :src="'//elm.cangdu.org/img/' + shop.image_path" alt />
            <div class="one">
              <p>
                <span class="brand">品牌</span>
                <span class="shopname">{{shop.name}}</span>
              </p>
              <p>
                <span class="three">保 准 票</span>
              </p>
            </div>

            <div class="two">
              <p>
                <img src="./images/stars/star.png" class="star" />
                <img src="./images/stars/star.png" class="star" />
                <img src="./images/stars/star.png" class="star" />
                <img src="./images/stars/star.png" class="star" />
                <img src="./images/stars/star.png" class="star" />
                &nbsp;
                <span>{{shop.rating}}</span>
                <span>月售 {{shop.recent_order_num}}单</span>
              </p>
              <p>
                <span>蜂鸟专送</span>
                <span>准时达</span>
              </p>
            </div>

            <div class="threeDiv">
              <p>
                ￥{{shop.float_minimum_order_amount}}起送 /
                配送费约￥{{shop.float_delivery_fee}}
              </p>
              <p>
                {{shop.distance}} /
                <span>{{shop.order_lead_time}}</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import HeaderTop from "../../components/HeaderTop/HeaderTop";
    export default {
        name:"snack",
        components:{
            HeaderTop
        },
        computed:mapGetters(["title"]),
        data(){
            return{
                name:"",
                shops:[],
                classification:false,
                classification1:true,
                classification2:false,
                classification3:false,
                classification4:false,
                classification5:false,
                classification6:false,
                classification7:false,
                classification8:false,
                classColor:true,
                sort:false,
                screen:false
            }
        },
        mounted(){
            this.name=this.title.msg;
            console.log(this.title);
            this.getShopInformation();
        },
        methods:{
            getShopInformation(){
                this.$axios.get(`shopping/restaurants?latitude=38.01135&longitude=112.44299&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=${this.title.num}&restaurant_category_ids[]=&order_by=&delivery_mode[]=`).then(res =>{
                    //console.log(res.data);
                    this.shops = res.data;
                })
            },
            midnightSnack(){
                this.classification1 = true,
                this.classification2 = false,
                this.classification3 = false,
                this.classification4 = false,
                this.classification5 = false,
                this.classification6 = false,
                this.classification7 = false,
                this.classification8 = false
            },
            nightSnack(){
                this.classification1 = false,
                this.classification2 = true,
                this.classification3 = false,
                this.classification4 = false,
                this.classification5 = false,
                this.classification6 = false,
                this.classification7 = false,
                this.classification8 = false
            },
            fruits(){
                this.classification1 = false,
                this.classification2 = false,
                this.classification3 = true,
                this.classification4 = false,
                this.classification5 = false,
                this.classification6 = false,
                this.classification7 = false,
                this.classification8 = false
            },
            styleFood(){
                this.classification1 = false,
                this.classification2 = false,
                this.classification3 = false,
                this.classification4 = true,
                this.classification5 = false,
                this.classification6 = false,
                this.classification7 = false,
                this.classification8 = false
            },
            supermaket(){
                this.classification1 = false,
                this.classification2 = false,
                this.classification3 = false,
                this.classification4 = false,
                this.classification5 = true,
                this.classification6 = false,
                this.classification7 = false,
                this.classification8 = false
            },
            flower(){
                this.classification1 = false,
                this.classification2 = false,
                this.classification3 = false,
                this.classification4 = false,
                this.classification5 = false,
                this.classification6 = true,
                this.classification7 = false,
                this.classification8 = false
            },
            allShop(){
                this.classification1 = false,
                this.classification2 = false,
                this.classification3 = false,
                this.classification4 = false,
                this.classification5 = false,
                this.classification6 = false,
                this.classification7 = true,
                this.classification8 = false
            },
            drink(){
                this.classification1 = false,
                this.classification2 = false,
                this.classification3 = false,
                this.classification4 = false,
                this.classification5 = false,
                this.classification6 = false,
                this.classification7 = false,
                this.classification8 = true
            },



            confusion(shops){
              this.classification=false
              this.shops = this.shops.slice();
              this.shops.sort(function () {
              return 0.5 - Math.random();
              })
                console.log(shops);

            },
            confusionSure(shops){
              this.screen=false
              this.shops = this.shops.slice();
              this.shops.sort(function () {
              return 0.5 - Math.random();
              })
                console.log(shops);

            },




            near(){
              this.sort = false
                this.$axios.get(`shopping/restaurants?latitude=31.22967&longitude=121.4762&order_by=5`).then(res =>{
                this.shops = res.data;
                })
            },
            salesvolume(){
              this.sort = false
              this.$axios.get(`shopping/restaurants?latitude=31.22967&longitude=121.4762&order_by=6`).then(res =>{  
              this.shops = res.data;
                })
              
            },
            deliveryprice(){
              this.sort = false
              this.$axios.get(`shopping/restaurants?latitude=31.22967&longitude=121.4762&order_by=1`).then(res =>{  
              this.shops = res.data;
                })
              
            },
            deliveryspeed(){
              this.sort = false
              this.$axios.get(`shopping/restaurants?latitude=31.22967&longitude=121.4762&order_by=2`).then(res =>{  
              this.shops = res.data;
                })
              
            },
            score(){
              this.sort = false
              this.$axios.get(`shopping/restaurants?latitude=31.22967&longitude=121.4762&order_by=3`).then(res =>{  
              this.shops = res.data;
                })
              
            },
            aiii(){
              this.sort = false
              this.$axios.get(`shopping/restaurants?latitude=31.22967&longitude=121.4762&order_by=4`).then(res =>{  
              this.shops = res.data;
                })
              
            },
            
        }
        


    }
</script>

<style scoped>
.clearfix::before,
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
ul,
li {
  padding: 0;
  margin: 0;
}
li {
  padding: 12px 9px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
li > img {
  height: 63px;
  width: 63px;
  float: left;
  margin-right: 10px;
}
p {
  margin: 0;
  padding: 0;
}
.one,
.two,
.threeDiv {
  float: right;
  width: 79%;
}
.one p:first-child {
  float: left;
  width: 60%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.one p:last-child {
  float: right;
  width: 40%;
}
.brand {
  font-size: 10px;
  line-height: 12px;
  color: #333;
  background-color: #ffd930;
  padding: 2px 2px;
  border-radius: 2px;
  margin-right: 4px;
}
.shopname {
  font-size: 15px;
  font-weight: bold;
}
.three {
  font-size: 11px;
  color: #999;
  padding: 1px;
  line-height: 22px;
  float: right;
}
.two,
.threeDiv {
  display: flex;
  justify-content: space-between;
}
.two .star {
  width: 10px;
  height: 10px;
}
.two p:first-child span {
  font-size: 9px;
  color: #666;
  line-height: 24px;
}
.two p:last-child span:first-child {
  font-size: 8px;
  background: #3190e8;
  padding: 0px 2px 0;
  color: white;
  border: 1px solid #3190e8;
  border-radius: 1px 1px;
  margin-right: 2px;
}
.two p:last-child span:last-child {
  font-size: 8px;
  color: #3190e8;
  padding: 0px 2px 0;
  border: 1px solid #3190e8;
  border-radius: 1px 1px;
}
.threeDiv p {
  font-size: 12px;
  color: #666;
}
.threeDiv p:last-child {
  color: #999;
}
.threeDiv p:last-child span {
  color: #3190e8;
}

.food_dontainer{
    display: flex;
    height: 38.8px;
    margin-top: 20px;
    text-align: center;
    font-size:13px;
}
.sort_item{
    width: 33.33%;
    padding-top: 13px;
    position: relative;
}
.sort_item span:first-child:hover{
  color: rgb(49, 144, 232)
}
.classifi{
    width: 183.64px;
    background-color: rgb(240, 238, 238);
    font-size: 12px;
    float: left;
    position: relative;
}
.classifi li:hover{
  background-color: white;
}
.classifi li span:first-child{
  color: rgb(151, 150, 150)
}
.classifi2{
    width: 190.64px;
    height: 378px;
    background-color: white;
    font-size: 12px;
    float: left;
    position: absolute;
    top: 34px;
    left: 184px;
    color: rgb(146, 146, 146)
}
.classifi2 li{
    padding: 12px 9px;
    list-style: none;
    height: 17px;
}
.classColor{
  background-color: white;
}
.classsbb{
  float: right;
  background-color: rgb(189, 187, 187);
  border-radius: 7px;
  color: white;

}
.classifi2 li span:first-child{
  float: left;
}
.classifi2 li span:last-child{
  float: right;
}
.sort_six{
  width: 375px;
  background-color: white;
  float: left;
  position: absolute;
  left: -125px;
  top: 45px;
}
.sort_six li{
  list-style: none;
  text-align: left;
  padding: 18px 0 18px 50px;
  font-size: 13px;
  color: rgb(136, 136, 136)
}
.sort_six li:hover{
  color: rgb(49, 144, 232)
}

.sort_screen{
  width: 300%;
  height: 250px;
  background-color: white;
  position: absolute;
  left: -250px;
  top: 40px;
  color: rgb(114, 111, 111);
  text-align: left;
}
.screen_header{
  padding: 8px 0 8px 10px;
  
}
.screen_seven{
  border:1px solid rgb(230, 228, 228);
  display: inline-block;
  margin-top: 10px;
  padding: 5px 25px;
  
}
.screen_body{
  padding-left: 10px;
}
.screen_body li{
  list-style: none;
  float: left;
  width: 27%;
  border: 1px solid rgb(230, 228, 228);
  padding: 5px 0px;
  text-align: center;
  margin-right: 15px;
}
.screen_footer{
  padding-left: 10px; 
  position: absolute;
  top: 190px;
}
.screen_footer button{
  padding: 8px 65px;
  font-size: 18px;
  border: 1px solid rgba(192, 190, 190, 0.2);
  border-radius: 10px;

}
.screen_footer button:last-child{
  margin-left: 10px;
  background-color: rgb(86, 209, 118);
  color: white;
}
.screen_body li:hover{
  color: rgb(49, 144, 232);
  border: 1px solid rgb(49, 144, 232);
}
</style>