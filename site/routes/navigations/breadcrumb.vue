<script>
export default {
  name: 'BreadcrumbView'
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Breadcrumb">
      <div class="u-mb-15">
        <ol class="breadcrumb">
          <li class="breadcrumb__item">
            <a href="#" class="breadcrumb__link">Home</a>
          </li>
          <li class="breadcrumb__item">
            <a href="#" class="breadcrumb__link">Library</a>
          </li>
          <li class="breadcrumb__item">Data</li>
        </ol>
      </div>
      <% markdown %>
      ```html
      <ol class="breadcrumb">
        <li class="breadcrumb__item">
          <a href="#" class="breadcrumb__link">Home</a>
        </li>
        <li class="breadcrumb__item">
          <a href="#" class="breadcrumb__link">Library</a>
        </li>
        <li class="breadcrumb__item">Data</li>
      </ol>
      ```
      <% endmarkdown %>
    </c-panel>
  </c-main>
</template>
