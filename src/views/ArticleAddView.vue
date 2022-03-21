<template>
  <div class="container">
    <el-form label-width="120px" :rules="rules" class="warp">
      <el-form-item label="文章标题：" prop="title">
        <el-input class="w-50" placeholder="请输入你的文章标题" clearable />
      </el-form-item>
      <el-form-item label="游戏：" prop="game">
        <el-select placeholder="选择您的内容对应的游戏">
          <el-option label="Apex Legends" value="Apex Legends" />
          <el-option
            label="Counter Strike : Global Offensive"
            value="Counter Strike : Global Offensive"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="测评类别：" prop="category">
        <el-select placeholder="选择您的内容分类">
          <el-option label="Apex Legends" value="Apex Legends" />
          <el-option
            label="Counter Strike : Global Offensive"
            value="Counter Strike : Global Offensive"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="Banner: " prop="banner">
        <el-col :md="3" :sm="4" :lg="2">
          <el-upload>
            <el-button type="primary">点击上传</el-button>
          </el-upload>
        </el-col>
        <el-col class="mb-2" :md="21" :sm="20" :lg="22"
          >文件为 jpg/png 格式, 且文件小于3MB</el-col
        >
      </el-form-item>
      <el-form-item label="正文: ">
        <editor
          api-key="vm0ifepcg08zhn5qlojmflaiyr8qnee991heboya9vwmlzmj"
          :init="{
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
          }"
        />
      </el-form-item>
      <el-form-item label="发布状态: ">
        <el-radio-group>
          <el-radio label="公开" />
          <el-radio label="草稿" />
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存</el-button>
        <el-button>返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";

export default {
  components: {
    editor: Editor,
  },
  data() {
    return {
      content: "<h2>I am Example</h2>",
      rules: {
        title: [
          {
            required: true,
            message: "请输入文章标题",
            trigger: "blur",
          },
          { min: 3, max: 20, message: "标题字数在3-20之间", trigger: "blur" },
        ],
        game: [
          {
            required: true,
            message: "请选择测评游戏",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {},
  computed: {},
  mounted() {},
};
</script>

<style scoped>
.warp {
  padding-top: 20px;
  width: 100%;
  margin: 0 auto;
}
</style>
