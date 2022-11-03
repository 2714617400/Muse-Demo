<template>
  <div class="login" id="login">
    <mu-form
      :model="info"
      label-position="left"
      label-width="0"
      :class="{ 'login-form': true, check: info.username && info.password }"
    >
      <p class="web_site">{{ WEB_SITE_NAME }}</p>
      <mu-form-item prop="userName">
        <mu-text-field
          v-model="info.userName"
          placeholder="邮箱"
        ></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="password">
        <mu-text-field
          v-model="info.password"
          type="password"
          placeholder="密码"
        ></mu-text-field>
      </mu-form-item>

      <div class="submit" v-if="info.userName && info.password">
        <mu-button color="primary" full-width @click="submit">登录</mu-button>
        <!-- <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2873230890&site=qq&menu=yes">
          <img border="0" src="http://wpa.qq.com/pa?p=2:123456789:52" alt="点击这里给我发消息" title="点击这里给我发消息"/>
        </a> -->
      </div>
      <div class="submit">
        <mu-button color="primary" @click="register">注册</mu-button>
      </div>
    </mu-form>

    <div class="right_pic"></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import init from "@/components/dynamic_bg.js";
export default {
  data() {
    return {
      info: {
        userName: null,
        password: null,
      },
    };
  },
  computed: {
    ...mapState(["WEB_SITE_NAME", "interval_id"]),
  },
  mounted() {
    if (!!this.interval_id) {
      clearInterval(this.interval_id);
      this.set_interval_id(null);
    }
    // init('#login'); // 加载动态背景
  },
  methods: {
    ...mapMutations(["set_interval_id"]),
    submit() {
      this.$api.post("api/login", this.info).then((res) => {
        if (res.code == 0) {
          this.$toast.message(res.msg);
          this.$router.push({name: 'home'});
        } else {
          this.$toast.error(res.msg);
        }
      });
    },

    register() {
      this.$router.push({name: 'register'})
    }
  },
};
</script>

<style scoped lang="less">
.login {
  width: 100%;
  height: 100vh;
  background-image: url("../../assets/a4.png");
  // background: repeating-conic-gradient(#fff, #000, #fff 0.1deg); // 魔法
  background-repeat: no-repeat;
  background-position: center;
  background-color: hsla(54, 42%, 50%, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    font-family: "shaonv";
  }
  .right_pic {
    width: 400px;
    height: 400px;
    position: absolute;
    margin-left: 700px;
    margin-bottom: 100px;
    background-image: url("../../assets/gezi_sq.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 400px;
  }
  .login-form {
    width: 400px;
    height: 200px;
    padding: 50px 10px;
    border-radius: 4px;
    background-color: rgba(200, 200, 200, 0.7);
    // background-image: linear-gradient(to top right, rgba(0,0,0,0), rgba(0,0,0,1));
    // background-image: linear-gradient(to top right, red,orange,yellow,green,blue,indigo,violet);
    // background-image: linear-gradient(to top right, rgba(53, 57, 74, 0) 0%, rgba(0,0,0,1) 100%);
    // background-image: repeating-linear-gradient(to top right, white 10%, black 20%);
    box-sizing: border-box;
    position: relative;
    transition: height 1s;
    -webkit-transition: height 0.7s; /* Safari */
    .web_site {
      width: 100%;
      position: absolute;
      top: 0;
      margin: 0;
      text-align: center;
      font-size: 2em;
      font-weight: 600;
      font-family: "Serif";
      font-style: italic;
    }
    .submit {
      margin-top: 30px;
      text-align: center;
    }
  }
  .check {
    height: 300px;
  }
  /deep/.mu-form-item-label,
  .mu-form-item__label-left {
    padding-right: 0 !important;
  }
}
.dialog-map {
  max-width: 800px;
  height: 500px;
}
</style>
