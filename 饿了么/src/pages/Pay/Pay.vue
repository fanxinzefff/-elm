<template>
    <div>
        <HeaderTop title="确定下单">
        <span class="header_search" slot="left">
          <i class="iconfont icon-jiantou2" @click="$router.replace('/msite')"></i>
        </span>
        <span class="header_login" slot="right">
          <span class="header_login_text"></span>
        </span>
      </HeaderTop>
      <!-- 收货地址 -->
      <div class="splace">
          <span>请添加一个收获地址</span>
          <span>〉</span>
      </div>

      <!-- 送达时间 -->
      <div class="timer">
          <span class="timer_first">送达时间</span>
          <div class="timer_fast">
              <p>尽快送达 | 预计 06:44</p>
              
              <span>蜂鸟专送</span>
          </div>
      </div>

      <!-- 支付方式与红包 -->
      <div class="pay_redmoney">
          <div class="pay_may">
              <span>支付方式</span>
              <span>在线支付  〉</span>
          </div>
          <div class="pay_red">
              <span>红包</span>
              <span>暂时只能在饿了么APP中支持</span>
          </div>
      </div>

      <!-- 订单 -->
      <div class="pay_show">
          <div class="pay_title">
              <span>北京烤鸭村</span>
          </div>
          <div class="pay_order">
              <ul>
                  <li class="pay_orderli">
                      <span>薯片</span>
                      <span>¥20</span>
                  </li>
                  <li class="pay_orderli">
                      <span>餐盒</span>
                      <span>¥2</span>
                  </li>
                  <li class="pay_orderli">
                      <span>配送费</span>
                      <span>¥5</span>
                  </li>
                  <li class="pay_orderli">
                      <span>订单¥27</span>
                      <span>待支付¥27</span>
                  </li>
              </ul>
          </div>
          <div class="payfooter">
              <div>
                  <span>待支付¥27</span>
              </div>
              <div>
                  <span>确认下单</span>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop";

    export default {
        name:'pay',
        components:{
            HeaderTop
        }
    }
</script>

<style scoped>
li{
    list-style: none;
}
.splace{
    padding:28px 15px;
    font-size: 18px;
    margin-top: 46px;
    background-color: white;
    color: rgb(114, 112, 112);
    border-bottom: 2px dashed red;
}
.splace span:last-child{
    float: right;
}
.timer{
    margin-top: 10px;
    padding: 15px;
    border-left: 5px solid rgb(45, 154, 243);
    background-color: white;

}
.timer div{
    float: right;

}
.timer_fast{
    position: relative;
    top: -10px;
    
}
.timer_fast span{
    background-color: #3190e8;
    color: white;
    padding: 3px 5px;
    position: relative;
    left: 90px;
    font-size: 13px
}
.timer_fast p{
    color: #3190e8;
}
.timer_first{
    color: black;
    font-weight: bold;
    font-size: 24px;
    line-height: 70px;
    position: relative;
}
.pay_redmoney{
    margin-top: 10px;
    padding: 0 15px;
    background-color: white;
    line-height: 45px
}
.pay_may{
    border-bottom: 1px solid rgb(168, 167, 167);
}
.pay_may span:first-child{
    color: #acaeaf;
    font-size: 18px;
}
.pay_may span:last-child{
    color: #d0d1d1;
    font-size: 15px;
    float: right;
}
.pay_red{
    color: #d0d1d1;
    font-size: 15px;
}
.pay_red span:last-child{
    float: right;
}

.pay_show{
    background-color: white;
    margin-top:10px; 
    
}
.pay_title{
    line-height: 50px;
    font-size: 20px;
    color: #636363;
    padding-left: 20px;
    border-bottom: 2px solid rgb(236, 235, 235)
}
.pay_orderli{
    line-height: 30px;
    color: rgb(156, 155, 155);
    padding:5px 15px 15px 0;
}
.pay_orderli span:last-child{
    float: right;
}
.pay_orderli:last-child span:last-child{
    color: #ff6600
}
.payfooter{
    bottom: 0;
    display: flex;
}
.payfooter div:first-child{
    width: 70%;
    background-color: #3c3c3c;
    color: #fff;
    font-size: 18px;
    padding: 15px; 
}
.payfooter div:last-child{
    width: 30%;
    text-align: center;
    background-color: #56d176;
    color: #fff;
    padding: 15px
}
</style>