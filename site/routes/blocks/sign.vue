<script>
export default {
  name: 'SignView'
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Sign">
      <p><strong>Sign</strong> UI Block is usually used in user sign pages.</p>
      <p>Basic structure:</p>
      <% markdown %>
      ```html
      <section class="sign">

        <header class="sign__header">
          <h1 class="sign__title">...</h1>
          <p class="sign__text">...</p>
        </header>

        <div class="sign__body">
          ...
        </div>

        <footer class="sign__body">
          ...
        </footer>

      </section>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-row gutter="20">
      <c-col md="8">
        <section class="sign">
          <div class="sign__body">
            <h1 class="sign__title">Cover</h1>
            <p class="sign__text">Login In with your administrator account</p>
            <c-form>
              <c-form-field label="Email">
                <c-form-input type="email"></c-form-input>
              </c-form-field>
              <c-form-field label="Password">
                <c-form-input type="password"></c-form-input>
              </c-form-field>
              <c-form-field>
                <c-level>
                  <c-form-checkbox label="Remember me" slot="left"></c-form-checkbox>
                  <a slot="right">Forgot Password?</a>
                </c-level>
              </c-form-field>
              <c-button type="primary" block>Login In</c-button>
            </c-form>
            <c-divider>OR</c-divider>
            <div class="u-text-center">
              <a href="#" class="u-color-muted u-ml-10 u-mr-10"><i class="icon-facebook2"></i></a>
              <a href="#" class="u-color-muted u-ml-10 u-mr-10"><i class="icon-twitter"></i></a>
              <a href="#" class="u-color-muted u-ml-10 u-mr-10"><i class="icon-github"></i></a>
            </div>
          </div>
        </section>
      </c-col>
      <c-col md="16">
        <c-panel title="Login In">
          <% markdown %>
          ```html
          <section class="sign">
            <div class="sign__body">
              <h1 class="sign__title">Cover</h1>
              <p class="sign__text">Sign in with your administrator account</p>
              <c-form>
                <c-form-field label="Email">
                  <c-form-input type="email"></c-form-input>
                </c-form-field>
                <c-form-field label="Password">
                  <c-form-input type="password"></c-form-input>
                </c-form-field>
                <c-form-field>
                  <c-level>
                    <c-form-checkbox label="Remember me" slot="left"></c-form-checkbox>
                    <a slot="right">Forgot Password?</a>
                  </c-level>
                </c-form-field>
                <c-button type="primary" block>Login In</c-button>
              </c-form>
              <c-divider>OR</c-divider>
              <div class="u-text-center">
                <a href="#" class="u-color-muted u-ml-10 u-mr-10"><i class="icon-facebook2"></i></a>
                <a href="#" class="u-color-muted u-ml-10 u-mr-10"><i class="icon-twitter"></i></a>
                <a href="#" class="u-color-muted u-ml-10 u-mr-10"><i class="icon-github"></i></a>
              </div>
            </div>
          </section>
          ```
          <% endmarkdown %>
        </c-panel>
      </c-col>
    </c-row>

    <c-row gutter="20">
      <c-col md="8">
        <section class="sign">
          <header class="sign__header">
            <h1 class="sign__title">Cover</h1>
            <p class="sign__text">Register to your app account</p>
          </header>
          <div class="sign__body">
            <c-form>
              <c-form-field label="Name">
                <c-form-input type="text"></c-form-input>
              </c-form-field>
              <c-form-field label="Email">
                <c-form-input type="email"></c-form-input>
              </c-form-field>
              <c-form-field label="Password">
                <c-form-input type="password"></c-form-input>
              </c-form-field>
              <c-form-field label="Repeat Password">
                <c-form-input type="password"></c-form-input>
              </c-form-field>
              <c-button type="primary" block>Register</c-button>
            </c-form>
            <c-divider>OR</c-divider>
            <div class="u-text-center">
              <a href="#" class="u-color-muted u-ml-10 u-mr-10"><i class="icon-facebook2"></i></a>
              <a href="#" class="u-color-muted u-ml-10 u-mr-10"><i class="icon-twitter"></i></a>
              <a href="#" class="u-color-muted u-ml-10 u-mr-10"><i class="icon-github"></i></a>
            </div>
          </div>
          <footer class="sign__footer u-text-center">
            <p>Already have an account? <a>Sign in</a></p>
            <p class="u-text-muted u-fs-12">Dashboard UI kit by 20Theme<br>© 2017-2018. All RIGHT RESERVED.</p>
          </footer>
        </section>
      </c-col>
      <c-col md="16">
        <c-panel title="Register">
          <% markdown %>
          ```html
          <section class="sign">
            <header class="sign__header">
              <h1 class="sign__title">Cover</h1>
              <p class="sign__text">Register to your app account</p>
            </header>
            <div class="sign__body">
              <c-form>
                <c-form-field label="Name">
                  <c-form-input type="text"></c-form-input>
                </c-form-field>
                <c-form-field label="Email">
                  <c-form-input type="email"></c-form-input>
                </c-form-field>
                <c-form-field label="Password">
                  <c-form-input type="password"></c-form-input>
                </c-form-field>
                <c-form-field label="Repeat Password">
                  <c-form-input type="password"></c-form-input>
                </c-form-field>
                <c-button type="primary" block>Register</c-button>
              </c-form>
              <c-divider>OR</c-divider>
              <div class="u-text-center">
                <a href="#" class="u-color-muted u-ml-10 u-mr-10"><i class="icon-facebook2"></i></a>
                <a href="#" class="u-color-muted u-ml-10 u-mr-10"><i class="icon-twitter"></i></a>
                <a href="#" class="u-color-muted u-ml-10 u-mr-10"><i class="icon-github"></i></a>
              </div>
            </div>
            <footer class="sign__footer u-text-center">
              <p>Already have an account? <a>Sign in</a></p>
              <p class="u-text-muted u-fs-12">Dashboard UI kit by 20Theme<br>© 2017-2018. All RIGHT RESERVED.</p>
            </footer>
          </section>
          ```
          <% endmarkdown %>
        </c-panel>
      </c-col>
    </c-row>

    <c-row gutter="20">
      <c-col md="8">
        <section class="sign">
          <div class="sign__body">
            <h1 class="sign__title u-fs-24">Forgot Your Password?</h1>
            <p class="sign__text">Input your registered email to reset your password</p>
            <c-form>
              <c-form-field label="Email">
                <c-form-input icon-start="icon-envelop3" type="email"></c-form-input>
              </c-form-field>
              <c-button type="danger" block>Send Reset Link</c-button>
            </c-form>
          </div>
          <footer class="sign__footer u-text-center">
            <p class="u-text-muted u-fs-12">Dashboard UI kit by 20Theme<br>© 2017-2018. All RIGHT RESERVED.</p>
          </footer>
        </section>
      </c-col>
      <c-col md="16">
        <c-panel title="Forgot">
          <% markdown %>
          ```html
          <section class="sign">
            <div class="sign__body">
              <h1 class="sign__title u-fs-24">Forgot Your Password?</h1>
              <p class="sign__text">Input your registered email to reset your password</p>
              <c-form>
                <c-form-field label="Email">
                  <c-form-input icon-start="icon-envelop3" type="email"></c-form-input>
                </c-form-field>
                <c-button type="danger" block>Send Reset Link</c-button>
              </c-form>
            </div>
            <footer class="sign__footer u-text-center">
              <p class="u-text-muted u-fs-12">Dashboard UI kit by 20Theme<br>© 2017-2018. All RIGHT RESERVED.</p>
            </footer>
          </section>
          ```
          <% endmarkdown %>
        </c-panel>
      </c-col>
    </c-row>

    <c-row gutter="20">
      <c-col md="8">
        <section class="sign">
          <div class="sign__body">
            <h1 class="sign__title u-fs-24">Reset Password</h1>
            <c-form>
              <c-form-field>
                <c-form-input icon-start="icon-lock" type="password" placeholder="New Password"></c-form-input>
              </c-form-field>
              <c-button type="danger" block>Reset Password</c-button>
            </c-form>
          </div>
          <footer class="sign__footer u-text-center">
            <p class="u-text-muted u-fs-12">Dashboard UI kit by 20Theme<br>© 2017-2018. All RIGHT RESERVED.</p>
          </footer>
        </section>
      </c-col>
      <c-col md="16">
        <c-panel title="Reset">
          <% markdown %>
          ```html
          <section class="sign">
            <div class="sign__body">
              <h1 class="sign__title u-fs-24">Reset Password</h1>
              <c-form>
                <c-form-field>
                  <c-form-input icon-start="icon-lock" type="password" placeholder="New Password"></c-form-input>
                </c-form-field>
                <c-button type="danger" block>Reset Password</c-button>
              </c-form>
            </div>
            <footer class="sign__footer u-text-center">
              <p class="u-text-muted u-fs-12">Dashboard UI kit by 20Theme<br>© 2017-2018. All RIGHT RESERVED.</p>
            </footer>
          </section>
          ```
          <% endmarkdown %>
        </c-panel>
      </c-col>
    </c-row>
  </c-main>
</template>
