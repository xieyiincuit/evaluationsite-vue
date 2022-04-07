<template>
  <div class="container">
    <el-form
      class="warp"
      label-width="200px"
      :rules="rules"
      ref="approveForm"
      :model="approveForm"
    >
      <el-form-item label="申请状态:">
        <el-tag
          class="mx-1"
          type="info"
          effect="dark"
          v-if="applyStatus === 'unapprove' "
        >未申请</el-tag>
        <el-tag
          class="mx-1"
          type="success"
          effect="dark"
          v-else-if="applyStatus === 'approved' "
        >已申请</el-tag>
      </el-form-item>
      <el-form-item
        label="申请内容: "
        prop="content"
      >
        <editor
          v-model="approveForm.content"
          api-key="vm0ifepcg08zhn5qlojmflaiyr8qnee991heboya9vwmlzmj"
          :disabled="approveStatus === 1"
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
      <el-form-item
        label="审批状态:"
        v-if="applyStatus === 'approved'"
      >
        <el-tag
          class="mx-1"
          effect="dark"
          v-if="approveStatus === 0 "
        >审批中</el-tag>
        <el-tag
          class="mx-1"
          effect="dark"
          type="danger"
          v-else-if="approveStatus === -1 "
        >审批拒绝</el-tag>
        <el-tag
          class="mx-1"
          effect="dark"
          type="success"
          v-else-if="approveStatus === 1 "
        >审批通过</el-tag>
      </el-form-item>
      <el-form-item>
        <el-button
          type="success"
          @click="submitForm('approveForm')"
          v-if="approveStatus !== 1 "
        >申请</el-button>
        <el-button
          type="danger"
          @click="deleteApprove"
          v-if="canRedraw"
        >撤销</el-button>
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
      applyStatus: "",
      approveStatus: "",
      approveForm: {
        content: "",
      },
      rules: {
        content: [
          {
            required: true,
            message: "请输入申请内容",
            trigger: "blur",
          },
          {
            min: 20,
            message: "申请内容越详细越好，至少二十个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {
    canRedraw() {
      return (
        this.applyStatus === "approved" &&
        (this.approveStatus === 0 || this.approveStatus === -1)
      );
    },
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //
          if (this.approveStatus === 0 || this.approveStatus === "") {
          }
          var updateDto = {
            body: this.approveForm.content,
          };
          this.$http.put(
            "v1/b/approve",
            updateDto,
            (res) => {
              this.$message.success("申请成功");
              this.getSelfApprove();
            },
            (fail) => {
              this.$message.error("系统错误, 申请失败。");
            }
          );
        } else {
          this.$message.error("表单校验失败了，来看看是咋回事儿！！");
          return false;
        }
      });
    },
    deleteApprove() {
      this.$http.delete(
        "v1/b/approve",
        null,
        (res) => {
          this.approveForm.content = "";
          this.approveStatus = "";
          this.applyStatus = "unapprove";
          this.$message.success("撤销申请成功, 期待你的再次申请 ^ ^");
        },
        (fail) => {
          this.$message.error("系统错误, 撤销申请失败。");
        }
      );
    },
    getSelfApprove() {
      this.$http.get(
        "v1/b/approve",
        null,
        (res) => {
          console.log(res);
          this.approveForm.content = res.body;
          this.approveStatus = res.status;
          this.applyStatus = "approved";
        },
        (fail) => {
          this.applyStatus = "unapprove";
        }
      );
    },
  },
  mounted() {
    this.getSelfApprove();
  },
};
</script>

<style scoped>
.warp {
  padding-top: 20px;
  width: 100%;
  margin: 0 auto;
}
.el-tag {
  font-size: unset;
}
</style>