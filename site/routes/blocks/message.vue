<script>
export default {
  name: 'MessageView'
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Message">
      <p><strong>Message</strong> UI Block is usually used as feedback of user action.</p>
      <p>Basic structure:</p>
      <% markdown %>
      ```html
      <section class="message">

        <div class="message__media">
          ...
        </div>

        <p class="message__title">...</p>

        <p class="message__content">
          ...
        </p>

      </section>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-panel title="401">
      <section class="message">
        <div class="message__media">
          <h1 class="u-fs-128">401</h1>
        </div>
        <p class="message__title">Catch you!</p>
        <p class="message__content">
          Sorry, you have no permission to do this.
        </p>
        <c-button type="primary" size="lg" smart>Go Back!</c-button>
      </section>
      <hr />
      <% markdown %>
      ```html
      <section class="message">
        <div class="message__media">
          <h1 class="u-fs-128">401</h1>
        </div>
        <p class="message__title">Catch you!</p>
        <p class="message__content">
          Sorry, you have no permission to do this.
        </p>
        <c-button type="primary" size="lg" smart>Go Back!</c-button>
      </section>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-panel title="404">
      <section class="message">
        <div class="message__media">
          <h1 class="u-fs-128">404</h1>
        </div>
        <p class="message__title">OOPS!</p>
        <p class="message__content">
          Sorry! The page you are looking for doesn't exist.
        </p>
        <c-button type="primary" size="lg" smart>Go Back!</c-button>
      </section>
      <hr />
      <% markdown %>
      ```html
      <section class="message">
        <div class="message__media">
          <h1 class="u-fs-128">404</h1>
        </div>
        <p class="message__title">OOPS!</p>
        <p class="message__content">
          Sorry! The page you are looking for doesn't exist.
        </p>
        <c-button type="primary" size="lg" smart>Go Back!</c-button>
      </section>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-panel title="500">
      <section class="message">
        <div class="message__media">
          <h1 class="u-fs-128">500</h1>
        </div>
        <p class="message__title">Seem server quite his job</p>
        <p class="message__content">
          Don't worry, we will fix it soon.
        </p>
        <c-button type="primary" size="lg" smart>GO HOME</c-button>
      </section>
      <hr />
      <% markdown %>
      ```html
      <section class="message">
        <div class="message__media">
          <h1 class="u-fs-128">500</h1>
        </div>
        <p class="message__title">Seem server quite his job</p>
        <p class="message__content">
          Don't worry, we will fix it soon.
        </p>
        <c-button type="primary" size="lg" smart>GO HOME</c-button>
      </section>
      ```
      <% endmarkdown %>
      </c-panel>

    <c-panel title="Maintenance">
      <section class="message">
        <div class="message__media">
          <i class="icon-cog u-text-muted u-fs-128"></i>
        </div>
        <p class="message__title">Under Maintenance</p>
        <p class="message__content">
          Plase give us a moment to sort things out.
        </p>
      </section>
      <hr />
      <% markdown %>
      ```html
      <section class="message">
        <div class="message__media">
          <i class="icon-cog u-text-muted u-fs-128"></i>
        </div>
        <p class="message__title">Under Maintenance</p>
        <p class="message__content">
          Plase give us a moment to sort things out.
        </p>
      </section>
      ```
      <% endmarkdown %>
    </c-panel>
  </c-main>
</template>
