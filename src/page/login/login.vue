<template>
  <div class="login">
    <mu-form :model="info" label-position="left" label-width="50" class="login-form">
      <mu-form-item prop="username" label="名字">
        <mu-text-field v-model="info.username"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="password" label="密码">
        <mu-text-field v-model="info.password"></mu-text-field>
      </mu-form-item>

      <div class="submit">
        <mu-button color="primary" full-width @click="submit">登录</mu-button>
        <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2873230890&site=qq&menu=yes">
          <img border="0" src="http://wpa.qq.com/pa?p=2:123456789:52" alt="点击这里给我发消息" title="点击这里给我发消息"/>
        </a>
      </div>
    </mu-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: {
        username: null,
        password: null
      }
    }
  },
  methods: {
    submit () {
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  // background-color: rgb(85, 128, 136);
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form {
    width: 400px;
    height: 400px;
    padding: 10px;
    padding-top: 50px;
    // background-color: transparent;
    // background-image: linear-gradient(to top right, rgba(0,0,0,0), rgba(0,0,0,1));
    // background-image: linear-gradient(to top right, red,orange,yellow,green,blue,indigo,violet);
    background-image: linear-gradient(to top right, rgba(53, 57, 74, 0) 0%, rgba(0,0,0,1) 100%);
    // background-image: repeating-linear-gradient(to top right, white 10%, black 20%);
    box-sizing: border-box;
    .submit {
      margin-top: 50px;
      text-align: center;
    }
  }
}
</style>
