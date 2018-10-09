<script>
export default {
  name: 'CellView'
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Basic">
      <c-row gutter="20">
        <c-col md="12" lg="8" xl="6">
          <article class="cell">
            <figure class="cell__media">
              <img :src="'static/images/avatar-m-3.jpg'" class="avatar u-rounded">
            </figure>
            <div class="cell__content">Boyle Monroe</div>
            <div class="cell__after">QUANTALIA</div>
          </article>
        </c-col>
        <c-col>
          <p>Cell component usually used as an information unit.</p>
          <% markdown %>
          ```html
          <article class="cell">
            <figure class="cell__media">
              <img src="..." class="avatar u-rounded">
            </figure>
            <div class="cell__content">Boyle Monroe</div>
            <div class="cell__after">QUANTALIA</div>
          </article>
          ```
          <% endmarkdown %>
        </c-col>
      </c-row>
    </c-panel>

    <c-panel title="Message">
      <c-row gutter="20">
        <c-col md="12" lg="8" xl="6">
          <article class="cell cell--start">
            <figure class="cell__media">
              <img :src="'static/images/avatar-f-1.jpg'" class="avatar u-rounded">
            </figure>
            <div class="cell__content">
              <header class="cell__header">
                <div class="cell__leading">
                  <h4 class="cell__title">Taylor Swift</h4>
                </div>
                <div class="cell__after">17:14</div>
              </header>
              <div class="cell__body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptatum dolor iusto voluptate, error incidunt.
              </div>
            </div>
          </article>
        </c-col>
        <c-col>
          <% markdown %>
          ```html
          <article class="cell cell--start">
            <figure class="cell__media">
              <img src="..." class="avatar u-rounded">
            </figure>
            <div class="cell__content">
              <header class="cell__header">
                <div class="cell__leading">
                  <h4 class="cell__title">Taylor Swift</h4>
                </div>
                <div class="cell__after">17:14</div>
              </header>
              <div class="cell__body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptatum dolor iusto voluptate, error incidunt.
              </div>
            </div>
          </article>
          ```
          <% endmarkdown %>
      </c-col>
      </c-row>
    </c-panel>

    <c-panel title="Tweet">
      <c-row gutter="20">
        <c-col md="12" lg="8" xl="6">
          <article class="cell">
            <div class="cell__content">
              <header class="cell__header u-mb-15">
                <div class="cell__leading">
                  <div class="account">
                    <figure class="account__media">
                      <img :src="'static/images/avatar.jpg'" class="avatar u-rounded">
                    </figure>
                    <div class="account__content">
                      <h4 class="account__title">Lewis Liu</h4>
                      <div class="account__meta">@moyu</div>
                    </div>
                  </div>
                </div>
                <div class="cell__after">
                  <c-button type="info" size="sm" outline smart>Follow</c-button>
                </div>
              </header>
              <div class="cell__body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptatum dolor iusto voluptate, error incidunt.
              </div>
            </div>
          </article>
        </c-col>
        <c-col>
          <p>Compose with <strong>Account</strong> UI-block.</p>
          <% markdown %>
          ```html
          <article class="cell">
            <div class="cell__content">
              <header class="cell__header u-mb-15">
                <div class="cell__leading">
                  <div class="account">
                    <figure class="account__media">
                      <img src="..." class="avatar u-rounded">
                    </figure>
                    <div class="account__content">
                      <h4 class="account__title">Lewis Liu</h4>
                      <div class="account__meta">@moyu</div>
                    </div>
                  </div>
                </div>
                <div class="cell__after">
                  <c-button type="info" size="sm" outline smart>Follow</c-button>
                </div>
              </header>
              <div class="cell__body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptatum dolor iusto voluptate, error incidunt.
              </div>
            </div>
          </article>
          ```
          <% endmarkdown %>
      </c-col>
      </c-row>
    </c-panel>

    <c-panel title="List">
      <c-row gutter="20">
        <c-col md="12" lg="8" xl="6">
          <ul class="list">
            <li class="list__item">
              <article class="cell cell--start">
                <div class="cell__media">
                  <c-badge />
                </div>
                <div class="cell__content">
                  <header class="cell__header">
                    <div class="cell__leading">
                      <h4 class="cell__title">Facebook</h4>
                    </div>
                    <div class="cell__after">17:22</div>
                  </header>
                  <div class="cell__body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptatum dolor iusto voluptate, error incidunt.
                  </div>
                </div>
              </article>
            </li>
            <li class="list__item">
              <article class="cell cell--start">
                <div class="cell__media">
                  <c-badge type="info" />
                </div>
                <div class="cell__content">
                  <header class="cell__header">
                    <div class="cell__leading">
                      <h4 class="cell__title">John Doe</h4>
                    </div>
                    <div class="cell__after">14:31</div>
                  </header>
                  <div class="cell__body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptatum dolor iusto voluptate, error incidunt.
                  </div>
                </div>
              </article>
            </li>
          </ul>
        </c-col>
        <c-col>
          <p>Compose with <strong>List</strong> UI-block.</p>
          <% markdown %>
          ```html
          <ul class="list">
            <li class="list__item">
              <article class="cell cell--start">
                <div class="cell__media">
                  <c-badge />
                </div>
                <div class="cell__content">
                  <header class="cell__header">
                    <div class="cell__leading">
                      <h4 class="cell__title">Facebook</h4>
                    </div>
                    <div class="cell__after">17:22</div>
                  </header>
                  <div class="cell__body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptatum dolor iusto voluptate, error incidunt.
                  </div>
                </div>
              </article>
            </li>
            ...
          </ul>
          ```
          <% endmarkdown %>
        </c-col>
      </c-row>
    </c-panel>
  </c-main>
</template>
