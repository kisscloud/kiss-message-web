<script>
export default {
  name: 'CardView'
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-row gutter="20">
      <c-col md="10" lg="8" xl="6">
        <article class="card">
          <header class="card__header">
            <div class="card__leading">
              <h4 class="card__title">Google I/O 2017</h4>
              <span class="u-text-muted">Software and hardware</span>
            </div>
            <div class="card__control">
              <time class="u-text-muted">May 17-19, 2017</time>
            </div>
          </header>
          <figure class="card__media">
            <img src="//c1.staticflickr.com/6/5596/14709465907_33b8612bef_b.jpg" alt="" />
          </figure>
          <div class="card__content">
            I/O Extended events bring local developer communities together to experience the I/O keynote and sessions with one another in real-time, around the globe. They may also offer unique activities such as hackathons, codelabs, and demos.
          </div>
          <footer class="card__footer u-text-right">
            <c-button type="info" smart>LEARN MORE</c-button>
          </footer>
        </article>
      </c-col>

      <c-col md="14" lg="16" xl="18">
        <c-panel title="Card">
          <p>By adding <code>.card--ghost</code> modifier class to create transparent card.</p>
          <p>Basic structure:</p>
          <% markdown %>
          ```html
          <article class="card {{modifier}}">
            <header class="card__header">
              <div class="card__leading">
                <h4 class="card__title">...</h4>
              </div>
              <div class="card__control">
                <time class="u-text-muted">...</time>
              </div>
            </header>
            <figure class="card__media">
              ...
            </figure>
            <div class="card__content">
              ...
            </div>
            <footer class="card__footer">
              ...
            </footer>
          </article>
          ```
          <% endmarkdown %>
        </c-panel>
      </c-col>
    </c-row>
  </c-main>
</template>
