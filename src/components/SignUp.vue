<template>
  <div class="container">
    <div>
      <div>
        <label for="email">email</label>
        <input type="text" id="email" v-model="email" />
      </div>
      <div>
        <label for="password">비밀번호</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div>
        <label for="passwordConfirm">비밀번호 확인</label>
        <input type="password" id="passwordConfirm" v-model="passwordConfirm" />
      </div>
      <button @click="submitForm()">회원 가입</button>
    </div>
  </div>
</template>

<script setup>
import {registerUser} from '../main'

export default {
  name: 'SignUpForm',
  data () {
    return {
      message: '회원 가입에 성공하셨습니다.'
    }
  },
  methods: {
    submitForm () {
      const userData = {
        email: this.email,
        password: this.password
      }
      const response = registerUser(userData)
      if (response.status === 200) {
        alert('회원가입에 성공했습니다.')
        this.$router.push('/login')
      } else {
        alert(response.data)
      }
    }
  }
}
</script>

<style scoped>

</style>
