<script>
export default {
  name: 'NavbarView'
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Navbar">
      <p>Structure:</p>
      <ul>
        <li>
          <code>.navbar</code>
          <ul>
            <li>
              <code>.navbar__start</code>, <code>.navbar__end</code>
              <ul>
                <li>
                  <code>.navbar__item</code>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <nav class="navbar u-mb-15">
        <div class="navbar__start">
          <a class="navbar__item">Home</a>
          <a class="navbar__item">Work</a>
          <a class="navbar__item">Shop</a>
          <a class="navbar__item">Blog</a>
          <a class="navbar__item">Contact</a>
        </div>
        <div class="navbar__end">
          <div class="navbar__item">
            <div class="account">
              <div class="account__content u-text-right">
                <div class="account__title">Louis Liu</div>
                <small class="account__meta">Administrator</small>
              </div>
              <div class="account__after">
                <img :src="'static/images/avatar.jpg'" class="avatar avatar--sm" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <% markdown %>
      ```html
      <nav class="navbar">
        <div class="navbar__start">
          <a class="navbar__item">Home</a>
          <a class="navbar__item">Work</a>
          <a class="navbar__item">Shop</a>
          <a class="navbar__item">Blog</a>
          <a class="navbar__item">Contact</a>
        </div>
        <div class="navbar__end">
          <div class="navbar__item">
            ...
          </div>
        </div>
      </nav>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-panel title="Dark">
      <p>By adding <code>.navbar--dark</code> modifier class to create dark navbar.</p>
      <nav class="navbar navbar--dark u-bg-grey-darkest u-mb-15">
        <div class="navbar__start">
          <a class="navbar__item">Home</a>
          <a class="navbar__item">Work</a>
          <a class="navbar__item">Shop</a>
          <a class="navbar__item">Blog</a>
          <a class="navbar__item">Contact</a>
        </div>
        <div class="navbar__end">
          <div class="navbar__item u-hidden-down@md">
            <c-form-input icon-end="icon-search" placeholder="Search..." flat></c-form-input>
          </div>
          <a role="button" class="navbar__item">
            <i class="icon-bell2"></i>
          </a>
          <a role="button" class="navbar__item">
            <i class="icon-envelop3"></i>
          </a>
          <a role="button" class="navbar__item">
            <div class="account">
              <div class="account__media">
                <img :src="'static/images/avatar.jpg'" class="avatar avatar--sm" />
              </div>
            </div>
          </a>
        </div>
      </nav>

      <% markdown %>
      ```html
      <nav class="navbar navbar--dark u-bg-grey-darkest">
        <div class="navbar__start">
          <a class="navbar__item">Home</a>
          <a class="navbar__item">Work</a>
          <a class="navbar__item">Shop</a>
          <a class="navbar__item">Blog</a>
          <a class="navbar__item">Contact</a>
        </div>
        <div class="navbar__end">
          <div class="navbar__item">
            ...
          </div>
        </div>
      </nav>
      ```
      <% endmarkdown %>

      <p>By adding <code>.navbar--light</code> modifier class to create light navbar.</p>
      <nav class="navbar navbar--light u-bg-primary u-mb-15">
        <div class="navbar__start">
          <a class="navbar__item">Home</a>
          <a class="navbar__item">Work</a>
          <a class="navbar__item">Shop</a>
          <a class="navbar__item">Blog</a>
          <a class="navbar__item">Contact</a>
        </div>
        <div class="navbar__end">
          <div class="navbar__item u-hidden-down@md">
            <c-form-input icon-end="icon-search" placeholder="Search..." flat></c-form-input>
          </div>
          <a role="button" class="navbar__item">
            <i class="icon-bell2"></i>
          </a>
          <a role="button" class="navbar__item">
            <i class="icon-envelop3"></i>
          </a>
          <a role="button" class="navbar__item">
            <div class="account">
              <div class="account__media">
                <img :src="'static/images/avatar.jpg'" class="avatar avatar--sm" />
              </div>
            </div>
          </a>
        </div>
      </nav>

      <% markdown %>
      ```html
      <nav class="navbar navbar--light u-bg-primary">
        <div class="navbar__start">
          <a class="navbar__item">Home</a>
          <a class="navbar__item">Work</a>
          <a class="navbar__item">Shop</a>
          <a class="navbar__item">Blog</a>
          <a class="navbar__item">Contact</a>
        </div>
        <div class="navbar__end">
          <div class="navbar__item">
            ...
          </div>
        </div>
      </nav>
      ```
      <% endmarkdown %>
    </c-panel>
  </c-main>
</template>
