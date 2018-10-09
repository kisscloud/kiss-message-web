<script>
export default {
  name: 'StreamView'
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Stream">
      <c-row gutter="20">
        <c-col md="12" lg="8" xl="6">
          <ul class="stream">
            <li class="stream__item">
              <c-badge type="info" class="stream__badge"></c-badge>
              <article class="cell cell--start">
                <figure class="cell__media">
                  <img :src="'static/images/avatar-f-1.jpg'" class="avatar">
                </figure>
                <div class="cell__content">
                  <header class="cell__header">
                    <div class="cell__leading">
                      <span class="cell__title">Taylor Swift</span>
                    </div>
                    <div class="cell__after">17:14</div>
                  </header>
                  <div class="cell__body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptatum doloriusto voluptate, error incidunt.
                  </div>
                </div>
              </article>
            </li>
            <li class="stream__item">
              <c-badge class="stream__badge"></c-badge>
              <article class="cell cell--start">
                <figure class="cell__media">
                  <img :src="'static/images/avatar-f-2.jpg'" class="avatar">
                </figure>
                <div class="cell__content">
                  <header class="cell__header">
                    <div class="cell__leading">
                      <span class="cell__title">John Doe</span>
                    </div>
                    <div class="cell__after">16:30</div>
                  </header>
                  <div class="cell__body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptatum doloriusto voluptate, error incidunt.
                  </div>
                </div>
              </article>
            </li>
            <li class="stream__item">
              <c-badge type="danger" class="stream__badge"></c-badge>
              <article class="cell cell--start">
                <figure class="cell__media">
                  <img :src="'static/images/avatar.jpg'" class="avatar">
                </figure>
                <div class="cell__content">
                  <header class="cell__header">
                    <div class="cell__leading">
                      <span class="cell__title">Lewis Liu</span>
                    </div>
                    <div class="cell__after">16:30</div>
                  </header>
                  <div class="cell__body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptatum doloriusto voluptate, error incidunt.
                  </div>
                </div>
              </article>
            </li>
          </ul>
        </c-col>
        <c-col>
          <p>Use <strong>Stream</strong> UI Block to create information list.</p>
          <p>Available modifier classes: <code>.stream--sm</code>, <code>.stream--lg</code></p>
          <p>Basic structure:</p>
          <% markdown %>
          ```html
          <ul class="stream {{modifier}}">
            <li class="stream__item">
              <c-badge class="stream__badge"></c-badge>
              // combine with other ui block, like cell.
              ...
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
