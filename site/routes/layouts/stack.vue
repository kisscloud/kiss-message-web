<script>
export default {
  name: 'StackView'
};
</script>

<style lang="scss" scoped>
.stack-demo-1 {
  height: 400px;
  .brick {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: lighten(#7872ff, 10%);
    &.x0 {
      height: 100%;
      background-color: lighten(#7872ff, 5%);
    }
  }
}
.stack-demo-2 {
  width: 100%;
  height: 180px;
  .brick {
    width: 80px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: lighten(#7872ff, 10%);
    &.x0 {
      width: auto;
      background-color: lighten(#7872ff, 5%);
    }
  }
}
</style>
<template lang="nunjucks">
  <c-main>
    <c-panel title="Stack">
      <c-row gutter="20">
        <c-col sm="4" md="6">
          <c-stack class="stack-demo-1">
            <template slot="start">
              <div class="brick">Start</div>
            </template>
            <div class="brick x0">Content</div>
            <template slot="end">
              <div class="brick">End</div>
            </template>
          </c-stack>
        </c-col>
        <c-col>
          <p>
            <strong>Stack layout</strong> let you create auto layout that can dynamically adapt to the container size.
          </p>
          <p>
            Both <strong>start</strong> and <strong>end</strong> slot area has fixed width/height, and default <strong>content</strong> area would dynamically adapt to the available space.
          </p>
          <% markdown %>
          ```html
          <c-stack>
            <template slot="start">
              // place your fixed start content here
            </template>
            // place your flexible main content here
            <template slot="end">
              // place your fixed end content here
            </template>
          </c-stack>
          ```
          <% endmarkdown %>
        </c-col>
      </c-row>
    </c-panel>

    <c-panel title="Horizontal Stack">
      <p>
        By adding <code>row</code> prop to change its direction.
      </p>
      <c-row gutter="20">
        <c-col sm="12">
          <c-stack class="stack-demo-2" row>
            <template slot="start">
              <div class="brick">Start</div>
            </template>
            <div class="brick x0">Content</div>
            <template slot="end">
              <div class="brick">End</div>
            </template>
          </c-stack>
        </c-col>
        <c-col>
          <% markdown %>
          ```html
          <c-stack row>
            <template slot="start">
              // place your fixed start content here
            </template>
            // place your flexible main content here
            <template slot="end">
              // place your fixed end content here
            </template>
          </c-stack>
          ```
          <% endmarkdown %>
        </c-col>
      </c-row>
    </c-panel>
  </c-main>
</template>
