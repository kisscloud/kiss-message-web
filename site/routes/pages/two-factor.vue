<template>
  <c-app>
    <c-content>
      <section class="sign u-m-auto">
        <div class="sign__body">
          <h1 class="sign__title u-fs-24">双重验证</h1>
          <br>
          <c-form>
            <c-form-field>
              <c-form-input maxlength="6" icon-start="icon-lock" type="text" placeholder="输入6为谷歌验证码"></c-form-input>
            </c-form-field>
            <c-button type="primary" @click.prevent="reset" block>验证</c-button>
          </c-form>
        </div>
    
      </section>
    </c-content>
  </c-app>
</template>

<script>
export default {
  name: 'ForgotView',
  methods: {
    reset() {
      this.$toast.loading('Wait...', 2000);
      setTimeout(() => {
        this.$router.replace('/login');
      }, 2300);
    }
  }
};
</script>

<style lang="scss" scoped>
.sign {
  bottom: 60px;
}
.sign__body {
  padding: 25px;
  border-radius: 5px;
}
</style>

