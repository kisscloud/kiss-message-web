<script>
export default {
  name: 'DividerView'
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Divider">
      <c-row gutter="20">
        <c-col md="8" lg="6" xl="4">
          <c-divider class="u-mb-60">Description Text</c-divider>
          <c-divider placement="start" class="u-mb-60">Description Text</c-divider>
          <c-divider placement="end" class="u-mb-60">Description Text</c-divider>
          <c-divider vertical>Description Text</c-divider>
        </c-col>
        <c-col>
          <% markdown %>
          ```html
          // set placement prop as 'start', 'end' or leave it blank.
          <c-divider>Description Text</c-divider>
          <c-divider placement="start">Description Text</c-divider>
          <c-divider placement="end">Description Text</c-divider>

          // By adding 'vertical' prop to create vertical layout divider
          <c-divider vertical>Description Text</c-divider>
          ```
          <% endmarkdown %>
        </c-col>
      </c-row>
    </c-panel>
  </c-main>
</template>
