<template>
  <div class="container">
    <el-form label-width="120px" :rules="rules" class="warp" ref="articleFrom" :model="articleFrom">
      <el-form-item label="文章标题：" prop="title">
        <el-input class="w-50" placeholder="请输入你的文章标题" v-model="articleFrom.title" maxlength="50" clearable />
      </el-form-item>
      <el-form-item label="文章描述：" prop="description">
        <el-input class="w-50" placeholder="适当的描述你的内容" v-model="articleFrom.description" maxlength="50" clearable />
      </el-form-item>
      <el-form-item label="测评类别：" prop="categoryId">
        <el-select placeholder="选择内容分类" v-model="articleFrom.categoryId">
          <template v-for="type in typeList" :key="type.categoryId">
            <el-option :label="type.categoryType" :value="type.categoryId" />
          </template>
        </el-select>
      </el-form-item>
      <el-form-item label="游戏：" prop="gameId">
        <el-select placeholder="选择内容对应的游戏" v-model="articleFrom.gameId">
          <template v-for="game in gameList" :key="game.gameId">
            <el-option :label="game.gameName" :value="game.gameId" />
          </template>
        </el-select>
      </el-form-item>
      <el-form-item label="Banner: " prop="banner">

        <el-upload :limit="1" list-type="picture" action="http://localhost:20000/v1/e/pic" :headers="filereqHeader" accept="image/png, image/jpeg"
                   :before-upload="beforeBannderUpload" :on-success="handleSuccess" :on-error="handleFail">
          <el-button type="primary">点击上传</el-button>
          <template #tip>
            <div class="el-upload__tip">
              jpg/png files with a size less than 3M
            </div>
          </template>
        </el-upload>

      </el-form-item>
      <el-form-item label="正文: " prop="content">
        <editor v-model="articleFrom.content" api-key="vm0ifepcg08zhn5qlojmflaiyr8qnee991heboya9vwmlzmj" :init="{
            height: 500,
            width: 1100,
            menubar: true,
            plugins: [
              'advlist autolink lists link image imagetools charmap preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media paste wordcount ',
            ],
            toolbar:
              'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist | removeformat | link image imagetools',
            paste_data_images: true,
          }" />
      </el-form-item>
      <el-form-item label="发布状态: " prop="status">
        <el-radio-group v-model="articleFrom.status">
          <el-radio :label="0">公开</el-radio>
          <el-radio :label="1">草稿</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('articleFrom')">保存</el-button>
        <el-button @click="returnToPage()">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'

export default {
  components: {
    editor: Editor
  },
  data() {
    return {
      typeList: [],
      gameList: [],
      articleFrom: {
        title: '测试标题测试标题测试标题测试标题测试标题',
        description: '测试描述测试描述测试描述测试描述测试描述',
        gameId: '',
        categoryId: '',
        status: 0,
        content: '',
        articleImage: ''
      },
      rules: {
        title: [
          {
            required: true,
            message: '请输入文章标题',
            trigger: 'blur'
          },
          { min: 5, max: 50, message: '标题字数在5-50之间', trigger: 'blur' }
        ],
        description: [{ max: 50, message: '文章描述字数小于50', trigger: 'blur' }],
        gameId: [
          {
            required: true,
            message: '请选择您测评的游戏',
            trigger: 'change'
          }
        ],
        categoryId: [
          {
            required: true,
            message: '请选择测评所属板块',
            trigger: 'change'
          }
        ],
        content: [
          {
            required: true,
            message: '请输入文章正文',
            trigger: 'blur'
          },
          { min: 20, message: '正文内容大于20个字符', trigger: 'blur' }
        ],
        status: [
          {
            required: true,
            message: '选择文章状态',
            trigger: 'change'
          }
        ]
      }
    }
  },
  computed: {
    filereqHeader() {
      var token = this.$store.state.identity.token
      var header = {
        Authorization: 'Bearer ' + token
      }
      return header
    }
  },
  methods: {
    InitSelect() {
      this.$http.get('v1/e/category/list', null, (res) => {
        this.typeList = res
      })
      this.$http.get('v1/g/selectlist', null, (game) => {
        this.gameList = game
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //构建对象 发送请求
          var articleAddDto = {
            title: this.articleFrom.title,
            articleImage: this.articleFrom.articleImage,
            content: this.articleFrom.content,
            description: this.articleFrom.description,
            articleStatus: this.articleFrom.status,
            categoryTypeId: this.articleFrom.categoryId,
            gameId: this.articleFrom.gameId
          }
          this.$http.post('v1/e/article', articleAddDto, (res) => {
            console.log(res)
          })
          console.log('article create submit!')
        } else {
          console.log('article create error submit!!')
          return false
        }
      })
    },
    returnToPage() {
      this.$router.push({ path: '/articles', replace: true })
    },
    beforeBannderUpload(file) {
      const isJPGPNG = file.type === 'image/jpeg' || file.type === 'image/png'
      const isLt3M = file.size / 1024 / 1024 < 3

      if (!isJPGPNG) {
        this.$message.error('上传图片只能是 JPG, PNG 格式!')
      }
      if (!isLt3M) {
        this.$message.error('上传图片大小不能超过 3MB!')
      }
      return isJPGPNG && isLt3M
    },
    handleSuccess(res, file) {
      this.articleFrom.articleImage = res
    },
    handleFail(err) {
      this.$message.error('系统错误，上传文件失败')
    }
  },
  mounted() {
    this.InitSelect()
  }
}
</script>

<style scoped>
.warp {
  padding-top: 20px;
  width: 100%;
  margin: 0 auto;
}
</style>
