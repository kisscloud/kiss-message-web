<script>
export default {
  name: 'IncludedView'
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="What's included">
      <% markdown %>
      Once you have download the package you will see the following folder structure.

      ```
      ├── boilerplates/                         boilerplates for Cover
      ├── docs/                                 documentation
      ├── cover/
      │   ├── build/                            webpack build scripts
      │   ├── site/                             documentation site code
      │   ├── lib/                              production files
      │   │   ├── cover.css
      │   │   ├── cover.js
      │   │   └── vendors/                      thrid-part vendor components
      │   │
      │   ├── src/                              source code of cover
      │   │   ├── components/                   all built-in component source code
      │   │   ├── directives/                   all built-in directive source code
      │   │   ├── mixins/                       all built-in mixins source code
      │   │   ├── utils/                        helper functions for dev
      │   │   ├── vendors/                      thrid-part vendor component integration
      │   │   ├── styles/                       global styles
      │   │   │   ├── base/                     reboot
      │   │   │   ├── blocks/                   UI Blocks
      │   │   │   ├── mixins
      │   │   │   ├── point/                    point css framework
      │   │   │   ├── point-extends/
      │   │   │   ├── settings/
      │   │   │   ├── utils/
      │   │   │   ├── _variables.scss           global variable configuration
      │   │   │   └── global.scss               style point
      │   │   │
      │   │   └── index.js                      entry point of cover
      │   │
      │   ├── static/                           static assets like icon fonts, images
      │   ├── .babelrc                          Babel configuration file
      │   ├── .browserslistrc                   supported browers list
      │   ├── .editorconfig                     code editor configuration file
      │   ├── .eslintrc                         Eslint configuration file
      │   ├── changelog.md                      changelogs
      │   ├── package.json                      npm package dependences
      │   ├── postcss.config.js                 postcss configuration file
      │   └── README.md
      ```

      **build**
      This folder includes webpack build scripts, normally you dont need to touch them.

      **site**
      Component documentation and example site source code. if you want to view documentation, go `docs` folder.

      **lib**
      All production files that you will need to copy to your own project.

      **src**
      The source code of _Cover_, you can customize your own version of _Cover_ inside this folder.

      **static**
      All static assets you need to copy into your project static folder and include theme.

      ### Browser Support
      Cover uses [Autoprefixer](https://github.com/postcss/autoprefixer) to make most styles compatible with earlier browsers and [Normalize.css](https://necolas.github.io/normalize.css/) for CSS resets. For best compatibility, these browsers are recommended:
      <ul>
        <li class="u-mb-10">Chrome <sup class="badge badge--primary">35+</sup></li>
        <li class="u-mb-10">Microsoft Edge <sup class="badge badge--primary">12+</sup></li>
        <li class="u-mb-10">Firefox <sup class="badge badge--primary">38+</sup></li>
        <li class="u-mb-10">Safari <sup class="badge badge--primary">9+</sup></li>
        <li class="u-mb-10">Opera <sup class="badge badge--primary">12+</sup></li>
        <li class="u-mb-10">Internet Explorer <sup class="badge badge--primary">11+</sup></li>
      </ul>

      ### Responsive
      Cover includs a powerful mofile-first flexbox grid system for building responsive layouts. Its based on a 24 column layout.

      <img src="../../assets/responsive-devices.png" srcset="../../assets/responsive-devices@2x.png 2x" alt="Responsive Devices" />

      For faster mobile-friendly development, use built-in responsive utility classes for showing and hiding content by device via media query.

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Extra small</th>
            <th>Small</th>
            <th>Medium</th>
            <th>Large</th>
            <th>Extra large</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>.u-hidden</code></td>
            <td class="u-text-muted">Hidden</td>
            <td class="u-text-muted">Hidden</td>
            <td class="u-text-muted">Hidden</td>
            <td class="u-text-muted">Hidden</td>
            <td class="u-text-muted">Hidden</td>
          </tr>
          <tr>
            <td><code>.u-hidden-down</code></td>
            <td><span class="u-text-muted">Hidden</span></td>
            <td><span class="badge badge--primary">Visible</span></td>
            <td><span class="badge badge--primary">Visible</span></td>
            <td><span class="badge badge--primary">Visible</span></td>
            <td><span class="badge badge--primary">Visible</span></td>
          </tr>
          <tr>
            <td><code>.u-hidden-down@sm</code></td>
            <td><span class="u-text-muted">Hidden</span></td>
            <td><span class="u-text-muted">Hidden</span></td>
            <td><span class="badge badge--primary">Visible</span></td>
            <td><span class="badge badge--primary">Visible</span></td>
            <td><span class="badge badge--primary">Visible</span></td>
          </tr>
          <tr>
            <td><code>.u-hidden-down@md</code></td>
            <td><span class="u-text-muted">Hidden</span></td>
            <td><span class="u-text-muted">Hidden</span></td>
            <td><span class="u-text-muted">Hidden</span></td>
            <td><span class="badge badge--primary">Visible</span></td>
            <td><span class="badge badge--primary">Visible</span></td>
          </tr>
          <tr>
            <td><code>.u-hidden-down@lg</code></td>
            <td><span class="u-text-muted">Hidden</span></td>
            <td><span class="u-text-muted">Hidden</span></td>
            <td><span class="u-text-muted">Hidden</span></td>
            <td><span class="u-text-muted">Hidden</span></td>
            <td><span class="badge badge--primary">Visible</span></td>
          </tr>
          <tr>
            <td><code>.u-hidden-down@xl</code></td>
            <td><span class="u-text-muted">Hidden</span></td>
            <td><span class="u-text-muted">Hidden</span></td>
            <td><span class="u-text-muted">Hidden</span></td>
            <td><span class="u-text-muted">Hidden</span></td>
            <td><span class="u-text-muted">Hidden</span></td>
          </tr>
          <tr>
            <td><code>.u-hidden-up</code></td>
            <td class="u-text-muted">Hidden</td>
            <td class="u-text-muted">Hidden</td>
            <td class="u-text-muted">Hidden</td>
            <td class="u-text-muted">Hidden</td>
            <td class="u-text-muted">Hidden</td>
          </tr>
          <tr>
            <td><code>.u-hidden-up@sm</code></td>
            <td><span class="badge badge--primary">Visible</span></td>
            <td class="u-text-muted">Hidden</td>
            <td class="u-text-muted">Hidden</td>
            <td class="u-text-muted">Hidden</td>
            <td class="u-text-muted">Hidden</td>
          </tr>
          <tr>
            <td><code>.u-hidden-up@md</code></td>
            <td><span class="badge badge--primary">Visible</span></td>
            <td><span class="badge badge--primary">Visible</span></td>
            <td class="u-text-muted">Hidden</td>
            <td class="u-text-muted">Hidden</td>
            <td class="u-text-muted">Hidden</td>
          </tr>
          <tr>
            <td><code>.u-hidden-up@lg</code></td>
            <td><span class="badge badge--primary">Visible</span></td>
            <td><span class="badge badge--primary">Visible</span></td>
            <td><span class="badge badge--primary">Visible</span></td>
            <td class="u-text-muted">Hidden</td>
            <td class="u-text-muted">Hidden</td>
          </tr>
          <tr>
            <td><code>.u-hidden-up@xl</code></td>
            <td><span class="badge badge--primary">Visible</span></td>
            <td><span class="badge badge--primary">Visible</span></td>
            <td><span class="badge badge--primary">Visible</span></td>
            <td><span class="badge badge--primary">Visible</span></td>
            <td class="u-text-muted">Hidden</td>
          </tr>
        </tbody>
      </table>

      <div class="note note--info">
        Its recommend to use <code>@md</code> breakpoint as the boundary between mobile(Phone, Tablet) and desktop(Laptop, PC), and many pre-built responsive components(app layout, sidebar etc..) and some resonsive utility classes use this rule by default.
      </div>
      <% endmarkdown %>
    </c-panel>
  </c-main>
</template>
