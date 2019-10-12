<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">饿了么外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on:loginWay}" @click="loginWay=true">短信登录</a>
          <a href="javascript:;" :class="{on:!loginWay}" @click="loginWay=false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form @submit.prevent="login" autocomplete="off" method="POST">
          <div :class="{on:loginWay}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="user.username" />
              <button disabled="disabled" class="get_verification">获取验证码</button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="user.captcha_code" />
            </section>
            <section class="login_hint">
              温馨提示：未注册饿了么外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on:!loginWay}">
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="user.username" />
              </section>
              <section class="login_verification">
                <input type="password" maxlength="8" placeholder="密码" v-model="user.password" />
                <div class="switch_button off">
                  <div class="switch_circle"></div>
                  <span class="switch_text">...</span>
                </div>
              </section>
              <section class="login_message">
                <input type="password" maxlength="11" placeholder="验证码" v-model="user.captcha_code" />
                <img class="get_verification" :src="captcha" alt="captcha" @click="handleCode" />
              </section>
            </section>
          </div>
          <button class="login_submit" @click="go">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
    <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip" />
  </section>
</template>

<script>
import AlertTip from "../../components/AlertTip/AlertTip.vue";
export default {
  data() {
    return {
      loginWay: true, //true短信登录，false密码登录
      user: {
        username: "",
        password: "",
        captcha_code: ""
      },
      captcha: "", //图形验证码
      alertText: "",
      alertShow: false //是否显示警示框
    };
  },
  created() {
    this.createCode();
  },
  methods: {
    go() {
      this.$axios.post("v2/login", this.user).then(res => {
        // console.log(res.data);
        if (
          this.user.username &&
          this.user.password &&
          this.user.captcha_code
        ) {
          this.$store.dispatch("setUserAsync", this.user);
          this.$router.push("/Profile");
        } else if (this.user.username && this.user.captcha_code) {
          this.$router.push("/Profile");
        }
      });
    },
    createCode() {
      this.$axios.post("/v1/captchas").then(res => {
        // console.log(res);
        this.captcha = res.data.code;
      });
    },
    handleCode() {
      this.createCode();
    },
    showAlert(alertText) {
      this.alertShow = true;
      this.alertText = alertText;
    },
    closeTip() {
      this.alertShow = false;
      this.alertText = "";
    },
    login() {
      if (this.loginWay) {
        // 短信登录;
        // console.log("短信");
        if (!this.user.username) {
          this.showAlert("手机号必须指定");
        } else if (!this.user.captcha_code) {
          this.showAlert("验证码必须指定");
        }
      } else {
        // 密码登录;
        if (!this.user.username) {
          this.showAlert("用户名必须指定");
        } else if (!this.user.password) {
          this.showAlert("密码必须指定");
        } else if (!this.user.captcha_code) {
          this.showAlert("验证码必须指定");
        }
      }
    }
  },
  components: {
    AlertTip
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.loginContainer {
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: hidden;
}
.loginInner {
  padding-top: 60px;
  width: 80%;
  margin: 0 auto;
}
.login_header .login_logo {
  font-size: 40px;
  font-weight: bold;
  color: #3190e8;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 20px;
}
.login_header .login_header_title {
  padding-top: 40px;
  text-align: center;
  display: flex;
  justify-content: space-around;
}
.login_header > a {
  color: #333;
  font-size: 14px;
  padding-bottom: 4px;
}
.login_header .on {
  color: #3190e8;
  font-weight: 700;
  border-bottom: 2px solid #02a774;
  padding: 5px 10px;
}
.pwdon {
  padding: 5px 10px;
}
.login_content div {
  display: none;
}
.login_content .on {
  display: block;
}
.login_content input {
  width: 100%;
  height: 100%;
  padding-left: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: 0;
  font: 400 14px Arial;
}
.login_content > form > div:focus {
  border: 1px solid #02a774;
}
.login_message {
  position: relative;
  margin-top: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}
.get_verification {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  border: 0;
  color: #ccc;
  font-size: 14px;
  background: transparent;
}
.login_verification {
  position: relative;
  margin-top: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}
.switch_button {
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: background-color 0.3s, border-color 0.3s;
  padding: 0 6px;
  width: 30px;
  height: 16px;
  line-height: 16px;
  color: #fff;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}
.switch_button .off {
  background: #fff;
}
.switch_button .switch_text {
  float: right;
  color: #ddd;
}
.switch_button .on {
  background: #02a774;
}
.switch_button > .switch_circle {
  /* //transform translateX(27px) */
  position: absolute;
  top: -1px;
  left: -1px;
  width: 16px;
  height: 16px;
  border: 1px solid #ddd;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}
.login_hint {
  margin-top: 12px;
  color: #999;
  font-size: 14px;
  line-height: 20px;
}
.login_hint > a {
  color: #02a774;
}
.login_submit {
  display: block;
  width: 100%;
  height: 42px;
  margin-top: 30px;
  border-radius: 4px;
  background: #3190e8;
  color: #fff;
  text-align: center;
  font-size: 16px;
  line-height: 42px;
  border: 0;
}
.about_us {
  display: block;
  font-size: 12px;
  margin-top: 20px;
  text-align: center;
  color: #999;
}
.go_back {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 30px;
  height: 30px;
}
.go_back > .iconfont {
  font-size: 20px;
  color: #999;
}
</style>