<script>
export default {
  name: 'AccountView'
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Account">
      <c-row gutter="20">
        <c-col md="8" lg="6" xl="4">
          <article class="account">
            <figure class="account__media">
                <img :src="'static/images/avatar.jpg'" class="avatar avatar--rounded">
            </figure>
            <div class="account__content">John Oldman</div>
          </article>
          <hr />
          <article class="account">
            <figure class="account__media">
                <img :src="'static/images/avatar.jpg'" class="avatar avatar--rounded">
            </figure>
            <div class="account__content">
              <div class="account__title">John Oldman</div>
              <div class="account__meta">Editor</div>
            </div>
            <div class="account__after">
              <i class="i-caret"></i>
            </div>
          </article>
          <hr />
          <article class="account u-text-right">
            <div class="account__content">
              <div class="account__title">John Oldman</div>
              <div class="account__meta">Editor</div>
            </div>
            <figure class="account__after">
                <img :src="'static/images/avatar.jpg'" class="avatar avatar--rounded">
            </figure>
          </article>
          <hr />
          <article class="account">
            <figure class="account__media">
                <img :src="'static/images/avatar.jpg'" class="avatar">
            </figure>
            <div class="account__after">
              <i class="i-caret"></i>
            </div>
          </article>
        </c-col>
        <c-col>
          <% markdown %>
          ```html
          <article class="account">
            <figure class="account__media">
                <img src="..." class="avatar avatar--rounded">
            </figure>
            <div class="account__content">John Oldman</div>
          </article>

          <article class="account">
            <figure class="account__media">
                <img src="..." class="avatar avatar--rounded">
            </figure>
            <div class="account__content">
              <div class="account__title">John Oldman</div>
              <div class="account__meta">Editor</div>
            </div>
            <div class="account__after">
              <i class="i-caret"></i>
            </div>
          </article>

          <article class="account u-text-right">
            <div class="account__content">
              <div class="account__title">John Oldman</div>
              <div class="account__meta">Editor</div>
            </div>
            <figure class="account__after">
                <img src="..." class="avatar avatar--rounded">
            </figure>
          </article>

          <article class="account">
            <figure class="account__media">
                <img src="..." class="avatar">
            </figure>
            <div class="account__after">
              <i class="i-caret"></i>
            </div>
          </article>
          ```
          <% endmarkdown %>
        </c-col>
      </c-row>
    </c-panel>
  </c-main>
</template>
