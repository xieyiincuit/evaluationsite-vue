<template>
  <el-tabs tab-position="left">
    <el-tab-pane label="个人信息">
      <el-form :model="userForm" ref="userForm" :rules="userRules" label-width="150px" class="userForm">
        <el-form-item>
          <el-upload class="avatar-uploader" action="http://localhost:20000/v1/u/avatar/oss" :show-file-list="false" :on-success="handleAvatarSuccess"
                     :before-upload="beforeAvatarUpload" :on-error="handleAvatarFail">
            <img :src="'http://localhost:9000/' +userForm.avatar " class="avatar" />
            <div class="rounded-2 color-fg-default px-2 py-1 left-0 bottom-0 ml-2 mb-2">
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"
                   class="octicon octicon-pencil">
                <path fill-rule="evenodd"
                      d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z">
                </path>
              </svg>
              点击上传
            </div>
          </el-upload>
        </el-form-item>
        <el-row>
          <el-form-item label="姓名：" prop="nickName">
            <el-col :span="13">
              <el-input v-model="userForm.nickName" maxlength="30" />
            </el-col>
            <el-col :span="2">
            </el-col>
            <el-col :span="9">
              <el-button type="success" plain @click="checkNickName" v-if="checkChangeName">看看被别人抢了没</el-button>
            </el-col>
          </el-form-item>
        </el-row>
        <el-form-item label="个人简介：" prop="introduction">
          <el-input v-model="userForm.introduction" type="textarea" maxlength="50" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="输入一段话来介绍你自己" />
        </el-form-item>
        <el-form-item label="出生日期：">
          <el-date-picker v-model="userForm.birthDate" type="date" placeholder="选择一个日期" />
        </el-form-item>
        <el-form-item label="性别：">
          <el-radio-group v-model="userForm.sex">
            <el-radio :label="0">女</el-radio>
            <el-radio :label="1">男</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('userForm')">保存</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="重设密码">
      <el-form :model="resetForm" label-width="150px" class="userForm" ref="resetForm" :rules="resetRules">
        <el-form-item>
        </el-form-item>
        <el-row>
          <el-form-item label="旧密码：" prop="pass">
            <el-input maxlength="30" type="password" autocomplete="off" v-model="resetForm.pass" />
          </el-form-item>
        </el-row>
        <el-row class="mt-5">
          <el-form-item label="新密码：" prop="checkPass" autocomplete="off">
            <el-input maxlength="30" type="password" autocomplete="off" v-model="resetForm.checkPass" />
          </el-form-item>
        </el-row>
        <el-form-item class="mt-3">
          <el-button type="primary" @click="submitForm('resetForm')">重设</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import userAuth from 'src/auth/userauth'

export default {
  mixins: [userAuth],
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.resetForm.checkPass !== '') {
          this.$refs.resetForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.resetForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      resetForm: {
        pass: '',
        checkPass: ''
      },
      resetRules: {
        pass: [
          { validator: validatePass, trigger: 'blur' },
          {
            pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,30}$/, //正则校验不用字符串
            message: '密码长度为8-30字符, 其中至少包含1个字母, 1个数字和1个特殊字符(@$!%*#?&)',
            trigger: 'blur'
          }
        ],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }]
      },
      userForm: {
        nickName: '',
        //后端注册时会设置默认头像地址
        //在上传图片时便更改用户头像引用，不需要将此属性列入表单提交s
        avatar: '',
        introduction: '',
        sex: 0,
        birthDate: ''
      },
      //是否已经检查过昵称
      hascheckName: false,
      userRules: {
        nickName: [
          {
            required: true,
            validator: (rule, value, callback) => {
              const reg = /^[a-zA-Z_\u4e00-\u9fa5]+$/
              if (value == '') {
                callback(new Error('请填写昵称'))
              } else if (!reg.test(value)) {
                callback(new Error('只允许填写汉字、字母、下划线'))
              } else {
                callback()
              }
            },
            trigger: 'change'
          },
          { min: 1, max: 30, message: '昵称字数在1-30之间', trigger: 'blur' }
        ],
        description: [{ max: 50, message: '自我描述字数小于50', trigger: 'blur' }]
      }
    }
  },
  computed: {
    checkChangeName() {
      const oldName = window.localStorage.getItem('USER_NICKNAME')
      return oldName != this.userForm.nickName
    }
  },
  methods: {
    beforeAvatarUpload(file) {
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
    handleAvatarSuccess(res, file) {
      this.userForm.avatar = res
    },
    handleAvatarFail(err) {
      this.$message.error('系统错误，上传文件失败')
    },
    checkNickName() {
      this.$http.get('v1/u/name/check', { nickName: this.userForm.nickName }, (res) => {
        if (res === true) {
          //该昵称通过检查 可用使用
          this.hascheckName = true
          this.$message.success('能用能用，快快快，时间不等人，别被人抢了去。^ ^')
        } else {
          this.$message.error('遗憾退场，它已经是别人的了，咱再想一个吧。^ ^')
        }
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (formName === 'userForm') {
            //判断姓名被修改
            if (this.checkChangeName) {
              //姓名为通过检查
              if (!this.hascheckName) {
                this.$message.error('你偷偷的改了你的名字，先检查一下，让咱看看有没有被人抢了去吧。')
                return false
              }
            }
            //构造对象 提交表单
            var updateDto = {
              nickName: this.userForm.nickName,
              sex: this.userForm.sex,
              introduction: this.userForm.introduction,
              birthDate: this.userForm.birthDate
            }
            console.log('userUpdateDto: ', updateDto)
            this.$http.put(
              'v1/u/info',
              updateDto,
              (res) => {
                this.$message.success('用户信息更新成功')
                this.getUserInfo()
              },
              (err) => {
                this.$message.error('用户信息更新失败')
                console.log(err)
              }
            )
          } else {
            //重设密码
            console.log(formName)
            var passwordDto = {
              password: this.resetForm.pass,
              confirmPassword: this.resetForm.checkPass
            }
            this.$http.put(
              'v1/u/password',
              passwordDto,
              async (res) => {
                this.$message.success('用户密码改变，请重新登录')
                await this.logout()
              },
              (err) => {
                this.$message.error(err)
              }
            )
          }
        } else {
          this.$message.error('表单校验失败了，来看看是咋回事儿！！')
          return false
        }
      })
    },
    getUserInfo() {
      this.$http.get('v1/u/info', null, (user) => {
        console.log(user)
        this.userForm.nickName = user.nickName
        this.userForm.avatar = user.avatar
        this.userForm.introduction = user.introduction
        this.userForm.sex = user.sex
        this.userForm.birthDate = user.birthDate
      })
    }
  },
  mounted() {
    this.getUserInfo()
  }
}
</script>

<style scoped>
.userForm {
  max-width: 800px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}
.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.avatar {
  width: 200px;
  height: 200px;
  display: block;
  border-radius: 50%;
}
</style>