<template>
  <div class="hello">
    <!-- <mu-appbar style="width: 100%;" title="Title" color="primary" z-depth="2">
      <mu-avatar slot="right">
        <img src="../assets/logo.png" />
      </mu-avatar>
    </mu-appbar> -->
    <mu-paper class="demo-paper" :z-depth="1">
      <h1>{{ tit }}</h1>
      <mu-container class="button-wrapper">
        <mu-tooltip content="submit!">
          <mu-button color="primary" @click="test">submit</mu-button>
        </mu-tooltip>
        <mu-tooltip content="主要按钮哦~">
          <mu-button color="primary" @click="demo">Primary</mu-button>
        </mu-tooltip>
        <mu-button id="create-post" color="secondary" @click="anna">Secondary</mu-button>
        <mu-button color="success" @click="$toast.message('Hello World')"
          >Success</mu-button
        >
        <mu-button id="create-post-two" color="warning" @click="fullscreen">Warning</mu-button>
        <mu-button color="info" @click="setText">Info</mu-button>
        <mu-button id="create-post-three" color="error">Error</mu-button>
        <mu-button disabled>disabled</mu-button>
        <mu-button @click="show = !show">上传头像</mu-button>
        <mu-button disabled>{{ num }}</mu-button>
        <mu-button @click="$router.push('login')">登录</mu-button>
        <mu-button disabled v-loading="status">{{ getStatus | str }}</mu-button>
        <label v-for="(key, value) in obj" :key="key">{{
          `${key}:${value}`
        }}</label>
      </mu-container>
      <img :src="imgDataUrl" />
      <!-- <div id="create-post" @click="anna">abababa</div> -->
    </mu-paper>

    <hl-button />

    <mu-paper class="demo-paper" :z-depth="1">
      <mu-data-table :columns="columns" :data="list" border>
        <template slot-scope="scope">
          <td>{{ scope.row.userName }}</td>
          <td>{{ scope.row.password }}</td>
          <td>{{ scope.row.created_date | format }}</td>
          <td>
            <mu-button color="error" @click="delUser(scope.row)"
              >删除</mu-button
            >
          </td>
        </template>
      </mu-data-table>
    </mu-paper>

    <router-link to="/">go to draggableDemo</router-link>

    <form action="/api/file_upload" method="post" enctype="multipart/form-data">
      <input type="file" name="image" size="50" />
      <br />
      <input type="submit" value="上传文件" />
    </form>

    <mu-paper class="demo-paper" :z-depth="1">
      <span class="tit"
        >一缕青丝为君剪 一缕青丝缠绕君 望君不负我倾心 如若辜负 万劫不复</span
      >
      <span class="mdi mdi-name"></span>
      <div class="image-container" id="cobo">
        <img id="img1" src="../assets/i am sam.jpg" />
      </div>
      <p>
        一缕青丝一缕魂，一缕悲切一缕尘，一缕青丝为君剪，一缕青丝缠君魂，一缕青丝
        一缕魂 红锦系命送爱人。
      </p>
      <h-button demo="kkk" color="error" />
    </mu-paper>

    <mu-paper class="demo-paper panel" :z-depth="1">
      <mu-container>
        <mu-expansion-panel>
          <div slot="header">Panel 1</div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
          <mu-button slot="action" flat>Cancel</mu-button>
          <mu-button slot="action" flat color="primary">Save</mu-button>
        </mu-expansion-panel>
        <mu-expansion-panel>
          <div slot="header">Panel 2</div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </mu-expansion-panel>
        <mu-expansion-panel>
          <div slot="header">Panel 3</div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </mu-expansion-panel>
      </mu-container>
    </mu-paper>

    <!-- <mu-paper class="demo-paper panel" :z-depth="1">
      <aplayer autoplay :music="myMusic"></aplayer>
    </mu-paper> -->
    <my-upload
      :width="300"
      :height="300"
      url="/api/uploads/upload_avatar"
      :params="params"
      :headers="headers"
      v-model="show"
      img-format="png"
      @crop-upload-success="cropUploadSuccess"
    >
    </my-upload>
    <img :src="imgDataUrl" />
  </div>
</template>

<script>
import Aplayer from "vue-aplayer";
import analyze from "rgbaster";
import moment from "moment";
import myUpload from "vue-image-crop-upload/upload-2.vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import HButton from "@/components/BasicMuseUi/Button";
import HlButton from "@/components/HButton";
import {duplicateRemoval} from '@/utils/index.js';
export default {
  components: {
    Aplayer,
    myUpload,
    HButton,
    'hl-button': HlButton
  },
  data() {
    return {
      tit: "ffforg.com",
      // tit: "好久不见，MASTER",
      msg: "Welcome to Your Vue.js App",
      myMusic: {
        title: "secret base~君がくれたもの~",
        artist: "Silent Siren",
        src: "https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.mp3",
        // src: require('../assets/01.mp3'),
        pic: "https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg",
        // pic: require('../assets/logo.png'),
        theme: "pic",
      },

      columns: [
        {
          title: "账号",
          name: "userName",
          align: "center",
          cellAlign: "center",
        },
        {
          title: "密码",
          name: "password",
          align: "center",
          cellAlign: "center",
        },
        {
          title: "创建日期",
          name: "created_date",
          align: "center",
          cellAlign: "center",
        },
        { title: "操作", name: "action", align: "center", cellAlign: "center" },
      ],
      list: [],

      show: false,
      params: {
        token: "123456798",
        name: "avatar",
      },
      headers: {
        smail: "*_~",
      },
      imgDataUrl: "", // the datebase64 url of created image
    };
  },
  filters: {
    format(val) {
      let day = moment(val, "x");
      return day.format("YYYY-MM-DD");
    },
  },
  created() {
    // const img = resolve(process.cwd(), 'i am sam.jpg')
    // console.log('当前目录', process.cwd(), img)
    // Vibrant.from('https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg').getPalette().then((palette) => console.log(palette, 'sam'))
    let arr = [
      {id: 0, name: '路飞'},
      {id: 1, name: '娜美'},
      {id: 2, name: '索隆'},
      {id: 0, name: '路飞'}
    ]
    console.log(typeof [])
    console.log(duplicateRemoval(arr, 'id'), '去重')
  },
  mounted() {
    console.log(this.$api, "api");
    let demo = "123a";
    console.log(demo | this.str);
    this.getList();
    // this.$api.post('/api', {name: 'heli', age: 23}).then(res => {
    //   console.log(res, '返回值')
    //   this.tit = res;
    // });
    // console.log('getters', this.filterList, typeof this.filterList, this.filterMaxValueForList(4))
  },
  computed: {
    // ...mapState({ // 使用对象形式可以给getters属性重新命名
    //   name: 'text'
    // }),
    ...mapState(["text", "num", "obj", "status"]),
    ...mapGetters([
      "filterList",
      "addItem",
      "filterMaxValueForList",
      "getStatus",
    ]),
  },
  methods: {
    ...mapMutations(["SET_TEXT", "SET_NUM", "setObj"]),
    ...mapActions(["increment", "pay", "payA"]),
    async demo() {
      // this.$toast.message('hello world')
      var img = document.getElementById("img1");
      var cobo = document.getElementById("cobo");

      var canvas = document.createElement("canvas"); //创建canvas DOM元素，并设置其宽高和图片一样
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, img.width, img.height); //使用画布画图
      var dataURL = canvas.toDataURL("image/" + ctx); //返回的是一串Base64编码的URL并指定格式
      canvas = null; //释放
      const result = await analyze(dataURL, {
        ignore: ["rgb(255,255,255)", "rgb(0,0,0)"],
      }); // also supports base64 encoded image strings
      console.log(result, "rgb");
      cobo.style.backgroundColor = result[0].color;
    },

    setText() {
      // this.set_text(1)
      // this.$store.commit({
      //   type: 'SET_TEXT',
      //   text: 'hello'
      // })

      this.SET_NUM(1);

      this.setObj({ b: "b" });

      this.increment({ text: "yaho~" });

      this.pay();

      // this.payA();
    },

    anna() {
      console.log('666666666666666')
      this.$driver.defineSteps([
        {
          element: "#create-post",
          popover: {
            title: "Title on Popover",
            description: "Body of the popover",
            position: "top",
          },
        },
        {
          element: "#create-post-two",
          popover: {
            title: "Title on Popover",
            description: "Body of the popover",
            position: "top",
          },
        },
        {
          element: "#create-post-three",
          popover: {
            title: "Title on Popover",
            description: "Body of the popover",
            position: "top",
          },
        },
      ]);
      this.$driver.start();
    },

    fullscreen() {
      const loading = this.$loading();
      setTimeout(() => {
        loading.close();
      }, 2000);
    },

    getList() {
      this.$api.get("api/users").then((res) => {
        if (res.code == 0) {
          this.list = res.data;
        } else {
          this.list = [];
        }
        console.log(this.list, "list", res);
      });
    },

    delUser(row) {
      this.$api.delete(`api/users/${row._id}`, { id: row._id }).then((res) => {
        if (res.code == 0) {
          this.$toast.message(res.msg);
          this.getList();
        }
      });
    },

    cropUploadSuccess(res, fieId) {
      console.log(res, fieId);
      this.imgDataUrl = res.data.url;
    },

    test() {
      this.$bus.$emit('submit', Math.random())
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  overflow: hidden; // 解决子元素的margin-top重合问题，表现为顶开父元素与父元素相邻元素的间距
}
h1 {
  font-size: 96px;
  font-weight: 300;
  padding-left: 30px;
  color: #9d0a0f;
  font-family: "FreebooterScript", "shaonv";
}
.button-wrapper {
  text-align: center;
  .mu-button {
    margin: 8px;
  }
}
.demo-paper {
  max-width: 1200px;
  margin: 3% auto;
  box-sizing: border-box;
  overflow: hidden;
  .tit {
    font-size: 2rem;
  }
  img {
    width: 70%;
  }
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.panel {
  padding: 50px 0;
}
</style>
