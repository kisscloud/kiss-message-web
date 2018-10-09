<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

export default {
  name: 'FormValidationView',
  methods: {
    validateBeforeSubmit(scope) {
      this.$validator.validateAll(scope).then(result => {
        if (result) {
          this.$toast.succeed('Form Submitted!');
          return;
        }

        this.$toast.failed('Correct errors!');
      });
    }
  }
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Introduction">

      <p>This is just a demonstrate of how you can integrate third-party validation plugin into your project. <strong>Cover</strong> does not include any validation plugins, you need to install whatever vue validation plugin you like manually.</p>

      <p>Demos below show how you can use <a href="https://github.com/baianat/vee-validate" target="_blank">vee-validate</a> with <strong>Cover</strong>.</p>

      </c-panel>

      <c-panel title="Validation Styles">

      <c-row gutter="20">
        <c-col md="8">
          <c-form-field label="Field with valid">
            <c-form-input status="success"></c-form-input>
            <span class="form-help u-color-success">Success!</span>
          </c-form-field>

          <hr />

          <% markdown %>
          ```html
          <c-form-field label="Field with valid">
            <c-form-input status="success"></c-form-input>
            <span class="form-help u-color-success">Success!</span>
          </c-form-field>
          ```
          <% endmarkdown %>
        </c-col>

        <c-col md="8">
          <c-form-field label="Field with invalid">
            <c-form-input type="email" value="admin@" status="danger"></c-form-input>
            <span class="form-help u-color-danger">Wrong email address...</span>
          </c-form-field>

          <hr />

          <% markdown %>
          ```html
          <c-form-field label="Field with invalid">
            <c-form-input type="email" value="admin@" status="danger"></c-form-input>
            <span class="form-help u-color-danger">Wrong email address...</span>
          </c-form-field>
          ```
          <% endmarkdown %>
        </c-col>

        <c-col md="8">
          <c-form-field label="Field with warning">
            <c-form-input type="password" value="123456" status="warning"></c-form-input>
            <span class="form-help u-color-warning">Your password is not strong enough.</span>
          </c-form-field>

          <hr />

          <% markdown %>
          ```html
          <c-form-field label="Field with warning">
            <c-form-input type="password" value="123456" status="warning"></c-form-input>
            <span class="form-help u-color-warning">Your password is not strong enough.</span>
          </c-form-field>
          ```
          <% endmarkdown %>
        </c-col>
      </c-row>
    </c-panel>

    <c-panel title="vee-validate">
      <c-row gutter="20">
        <c-col md="8">
          <c-form @submit.prevent="validateBeforeSubmit('form-1')" data-vv-scope="form-1">
            <c-form-field label="Full Name">
              <c-form-input name="name" v-validate="'required'"></c-form-input>
              <span class="form-help u-color-danger" v-show="errors.has('form-1.name')">{{errors.first('form-1.name')}}</span>
            </c-form-field>
            <c-form-field label="Email">
              <c-form-input name="email" v-validate="'required|email'"></c-form-input>
              <span class="form-help u-color-danger" v-show="errors.has('form-1.email')">{{errors.first('form-1.email')}}</span>
            </c-form-field>
            <c-form-field label="Message">
              <c-form-textarea name="message" v-validate="'min:15|required'"></c-form-textarea>
              <span class="form-help u-color-danger" v-show="errors.has('form-1.message')">{{errors.first('form-1.message')}}</span>
            </c-form-field>
            <c-form-field>
              <c-button type="primary" submit smart>Submit</c-button>
            </c-form-field>
          </c-form>
        </c-col>
        <c-col md="16">
          <% markdown %>
          ```html
          <template>
            <c-form @submit.prevent="validateBeforeSubmit('form-1')" data-vv-scope="form-1">
              <c-form-field label="Full Name">
                <c-form-input name="name" v-validate="'required'"></c-form-input>
                <span class="form-help u-color-danger" v-show="errors.has('form-1.name')">{{errors.first('form-1.name')}}</span>
              </c-form-field>
              <c-form-field label="Email">
                <c-form-input name="email" v-validate="'required|email'"></c-form-input>
                <span class="form-help u-color-danger" v-show="errors.has('form-1.email')">{{errors.first('form-1.email')}}</span>
              </c-form-field>
              <c-form-field label="Message">
                <c-form-textarea name="message" v-validate="'min:15|required'"></c-form-textarea>
                <span class="form-help u-color-danger" v-show="errors.has('form-1.message')">{{errors.first('form-1.message')}}</span>
              </c-form-field>
              <c-form-field>
                <c-button type="primary" submit smart>Submit</c-button>
              </c-form-field>
            </c-form>
          </template>

          <script>
            import Vue from 'vue'
            import VeeValidate from 'vee-validate'
            Vue.use(VeeValidate)

            export default {
              methods: {
                validateBeforeSubmit(scope) {
                  this.$validator.validateAll(scope).then(result => {
                    if (result) {
                      this.$toast.succeed('Form Submitted!')
                      return
                    }

                    this.$toast.failed('Correct errors!')
                  })
                }
              }
            }
          </script>
          ```
          <% endmarkdown %>
        </c-col>
      </c-row>
    </c-panel>
  </c-main>
</template>
