<script>
export default {
  name: 'ListView'
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-row>
      <c-col md="12">
        <c-panel title="Basic">
          <p>
            List component provide basic styled list, but it also can be extended to display complex content.
          </p>
          <ul class="list u-mb-15">
            <li class="list__item">1.Active</li>
            <li class="list__item">2. Dapibus ac facilisis in</li>
            <li class="list__item">3. Morbi leo risus</li>
            <li class="list__item is-disabled">4. Disabled</li>
            <li class="list__item">5. Vestibulum at eros</li>
          </ul>
          <% markdown %>
          ```html
          <ul class="list">
            <li class="list__item">1.Active</li>
            <li class="list__item">2. Dapibus ac facilisis in</li>
            <li class="list__item">3. Morbi leo risus</li>
            <li class="list__item is-disabled">4. Disabled</li>
            <li class="list__item">5. Vestibulum at eros</li>
          </ul>
          ```
          <% endmarkdown %>
      </c-panel>
      </c-col>
      <c-col md="12">
        <c-panel title="Inset">
          <p>
            By adding the <code>.list--inset</code> modifier class on <code>.list</code> container to create a inset list, so you can use it as inner content of other components.
          </p>
          <ul class="list list--inset u-mb-15">
            <li class="list__item">1.Active</li>
            <li class="list__item">2. Dapibus ac facilisis in</li>
            <li class="list__item">3. Morbi leo risus</li>
            <li class="list__item is-disabled">4. Disabled</li>
            <li class="list__item">5. Vestibulum at eros</li>
          </ul>
          <% markdown %>
          ```html
          <ul class="list list--inset">
            <li class="list__item">1.Active</li>
            <li class="list__item">2. Dapibus ac facilisis in</li>
            <li class="list__item">3. Morbi leo risus</li>
            <li class="list__item is-disabled">4. Disabled</li>
            <li class="list__item">5. Vestibulum at eros</li>
          </ul>
          ```
          <% endmarkdown %>
      </c-panel>
      </c-col>
      <c-col md="12">
        <c-panel title="Bordered">
          <p>
            By adding the <code>.list--bordered</code> modifier class on <code>.list</code> container, you can easily create a borderd list style.
          </p>
          <ul class="list list--bordered u-mb-15">
            <li class="list__item">1.Active</li>
            <li class="list__item">2. Dapibus ac facilisis in</li>
            <li class="list__item">3. Morbi leo risus</li>
            <li class="list__item is-disabled">4. Disabled</li>
            <li class="list__item">5. Vestibulum at eros</li>
          </ul>
          <% markdown %>
          ```html
          <ul class="list list--bordered">
            <li class="list__item">1.Active</li>
            <li class="list__item">2. Dapibus ac facilisis in</li>
            <li class="list__item">3. Morbi leo risus</li>
            <li class="list__item is-disabled">4. Disabled</li>
            <li class="list__item">5. Vestibulum at eros</li>
          </ul>
          ```
          <% endmarkdown %>
      </c-panel>
      </c-col>
      <c-col md="12">
        <c-panel title="Linked">
          <p>
            To quick create linkify list by using <code>a.list__link</code> as children.
          </p>
          <div class="list list--bordered list--lg u-mb-15">
            <a class="list__link">1. Dapibus ac facilisis in</a>
            <a class="list__link is-active">2. Active</a>
            <a class="list__link">3. Morbi leo risus</a>
            <a class="list__link is-disabled">4. Disabled</a>
            <a class="list__link">5. Vestibulum at eros</a>
          </div>
          <% markdown %>
          ```html
          <div class="list list--bordered list--lg">
            <a class="list__link">1. Dapibus ac facilisis in</a>
            <a class="list__link is-active">2. Active</a>
            <a class="list__link">3. Morbi leo risus</a>
            <a class="list__link is-disabled">4. Disabled</a>
            <a class="list__link">5. Vestibulum at eros</a>
          </div>
          ```
          <% endmarkdown %>
      </c-panel>
      </c-col>
    </c-row>
    <c-panel title="Sizes">
      <p>
        By adding <code>.list--sm</code> or <code>.list--lg</code> modifier class on <code>.list</code> container to quickly create different sizes of list.
      </p>
      <c-row>
        <c-col md="8">
          <ul class="list list--bordered list--sm u-mb-15">
            <li class="list__item">1.Active</li>
            <li class="list__item">2. Dapibus ac facilisis in</li>
            <li class="list__item">3. Morbi leo risus</li>
            <li class="list__item is-disabled">4. Disabled</li>
            <li class="list__item">5. Vestibulum at eros</li>
          </ul>
        </c-col>
        <c-col md="8">
          <ul class="list list--bordered u-mb-15">
            <li class="list__item">1.Active</li>
            <li class="list__item">2. Dapibus ac facilisis in</li>
            <li class="list__item">3. Morbi leo risus</li>
            <li class="list__item is-disabled">4. Disabled</li>
            <li class="list__item">5. Vestibulum at eros</li>
          </ul>
        </c-col>
        <c-col md="8">
          <ul class="list list--bordered list--lg u-mb-15">
            <li class="list__item">1.Active</li>
            <li class="list__item">2. Dapibus ac facilisis in</li>
            <li class="list__item">3. Morbi leo risus</li>
            <li class="list__item is-disabled">4. Disabled</li>
            <li class="list__item">5. Vestibulum at eros</li>
          </ul>
        </c-col>
      </c-row>
      <% markdown %>
      ```html
      <ul class="list list--bordered list--sm">
        ...
      </ul>

      <ul class="list list--bordered">
        ...
      </ul>

      <ul class="list list--bordered list--lg">
        ...
      </ul>
      ```
      <% endmarkdown %>
    </c-panel>
  </c-main>
</template>
