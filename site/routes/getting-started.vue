<script>
export default {
  name: 'GettingStartedView'
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="What is Cover?">
      <div class="c-content">
      <% markdown %>
      From ancient development time with jQuery to modren development with React/Vue, Dashboard management system is always focusing on data manipulation. Traditional back-end developers like use jQuery and template languages to create project. But with project complexity grow, It gets harder and harder to maintain page asset dependences and the codebase is not scaleable and I have to manually load bunch of scripts in every page, what a nightmare!

      Now, it's golen age of front-end development. There has so many awesome frameworks(Vue.js/React/Angular) and tools(Webpack/Parcel) to help developers build complex project with maintainable and scaleable codebase. So I create **Cover** - a component library based on [Vue.js](https://vuejs.org/).

      It’s simple, minimal core with carefully thought UI that can handle apps of any scale.

      This documentation will walk through all the basic knowledge you needed to create your next web application.
      <% endmarkdown %>
      </div>
    </c-panel>

    <c-panel title="Quick start">
      <div class="c-content">
      <% markdown %>
      There are three ways to use _Cover_:

      - Direct `script` include
      - Install it as an npm module locally
      - Boilerplates

      ## 1.Direct `script` include

      1. Copy the `cover` folder into your project.
      2. Edit your template file.
      ```html
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My App</title>
        <link rel="stylesheet" href="cover/assets/css/icomoon.css" />
        <link rel="stylesheet" href="cover/lib/cover.css" />
      </head>
      <body>
        <div id="app">
          <!-- your app template -->
        </div>
        <script src="https://cdn.jsdelivr.net/npm/vue"></script>
        <!-- cover.js must included after vue.js  -->
        <script src="cover/lib/cover.js"></script>
        <!-- If you want use use included vendor  -->
        <!-- <link rel="stylesheet" href="cover/vendors/flatpickr/style.css" />  -->
        <!-- <script src="cover/vendors/flatpickr/index.js"></script>  -->
        <!-- Finally, include your own app script  -->
        <script src="app.js"></script>
      </body>
      </html>
      ```

      _Cover_ will auto install it with _Vue.js_,  no extra code needed.

      ## 2.Install it as an npm module
      1.Copy `cover` folder into your project root.

      2.Run the shell command below to install it:
      ```
      npm install --save ./cover
      ```

      3.Then you can use it as a normal npm module
      ```js
      import Vue from 'vue'
      import cover from 'cover'
      import 'cover/lib/cover.css'
      Vue.use(cover)
      ```

      4.Now you can use all components provided by _Cover_.

      ## 3.Boilerplates
      Your can kick start your project by using included boilerplates under `boilerplates/` folder.

      - Laravel 5 boilerplate
      - Nuxt boilerplate
      - Vue CLI 3 boilerplate
      <% endmarkdown %>

      </div>
    </c-panel>

    <c-panel title="What's included">
      <div class="c-content">
      <% markdown %>
      Once you have download the package you will see the following folder structure.

      ```
      ├── boilerplates/                         boilerplates for Cover
      ├── docs/                                 documentation
      ├── cover/
      │   ├── build/                            webpack build scripts
      │   ├── site/                             documentation site source code
      │   ├── lib/                              production files
      │   │   ├── cover.css
      │   │   └── cover.js
      |   |
      |   ├── vendors/                          thrid-part vendor components
      |   ├── assets/                           static assets like icon fonts, images
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
      │   ├── .babelrc                          Babel configuration file
      │   ├── .browserslistrc                   supported browers list
      │   ├── .editorconfig                     code editor configuration file
      │   ├── .eslintrc                         Eslint configuration file
      │   ├── changelog.md                      changelogs
      │   ├── package.json                      npm package dependences
      │   ├── postcss.config.js                 postcss configuration file
      │   └── README.md
      ```

      ## Browser Support
      Cover uses [Autoprefixer](https://github.com/postcss/autoprefixer) to make most styles compatible with earlier browsers and [Normalize.css](https://necolas.github.io/normalize.css/) for CSS resets. For best compatibility, these browsers are recommended:
      <ul>
        <li class="u-mb-10">Chrome <sup class="badge badge--primary">35+</sup></li>
        <li class="u-mb-10">Microsoft Edge <sup class="badge badge--primary">12+</sup></li>
        <li class="u-mb-10">Firefox <sup class="badge badge--primary">38+</sup></li>
        <li class="u-mb-10">Safari <sup class="badge badge--primary">9+</sup></li>
        <li class="u-mb-10">Opera <sup class="badge badge--primary">12+</sup></li>
        <li class="u-mb-10">Internet Explorer <sup class="badge badge--primary">11+</sup></li>
      </ul>

      ## Responsive
      Cover includs a powerful mofile-first flexbox grid system for building responsive layouts. Its based on a 24 column layout.

      <img src="../assets/responsive-devices.png" srcset="../assets/responsive-devices@2x.png 2x" alt="Responsive Devices" />

      For faster mobile-friendly development, use built-in responsive utility classes for showing and hiding content by device via media query.

      <table class="table table--bordered u-mb-15">
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
      </div>
      <div class="note note--info">
        Its recommend to use <code>@md</code> breakpoint as the boundary between mobile(Phone, Tablet) and desktop(Laptop, PC), and many pre-built responsive components(app layout, sidebar etc..) and some resonsive utility classes use this rule by default.
      </div>
      <% endmarkdown %>
    </c-panel>

    <c-panel title="Build System">
      <div class="c-content">
      <% markdown %>
      _Cover_ uses [npm](https://npmjs.org) as package manager, [Webpack](https://webpack.js.org) as bundler. It supports serveral common tasks:

      - Compile SASS to CSS and autoprefix
      - Copy static assets
      - Local dev-server
      - Bundle production files

      ## Setup
      To use local development environment, you must have Node.js installed (it include npm). To get started follow instruction below:

      - Navigate to the root directory of Cover
      - Run `npm install`,  NPM will install all dev dependencies as listed in package.json
      - When completed, run `npm start` to start local dev-server
      - Run `npm build` to build production files. Once finished, you can find production files in `/lib` firectory, copy them to your project
      <% endmarkdown %>
      </div>
    </c-panel>

    <c-panel title="Customization">
      <div class="c-content">
      <% markdown %>
      You can customize your own version of _Cover_ by editing files in `src` directory or removing unneeded components.

      <div class="note note--info">
      It's only recommend to customize sass variables in `src/styles/_variables.scss`. If you edit too much code, it may break your next upgrade lead to harder migration.
      </div>

      - Follow Step Up instruction to get local dev environment
      - Edit files in `src/` folder
      - Run `npm run build` to build freash new version of _Cover_
      - Copy production files in `lib/` to your project
      <% endmarkdown %>
      </div>
    </c-panel>

    <c-panel title="Sources and Credits">
      <div class="c-content">
      <% markdown %>
      We've used the following plugins as listed.

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Version</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Point</td>
            <td>^1.4.0</td>
            <td><a href="https://github.com/moyus/point">https://github.com/moyus/point</a></td>
          </tr>
          <tr>
            <td>IcoMoon</td>
            <td>^1.1.0</td>
            <td><a href="https://icomoon.io/">https://icomoon.io/</a></td>
          </tr>
          <tr>
            <td>Chart.js</td>
            <td>^2.7.2</td>
            <td><a href="http://www.chartjs.org/">http://www.chartjs.org/</a></td>
          </tr>
          <tr>
            <td>Flatpickr</td>
            <td>^4.5.0</td>
            <td><a href="https://github.com/chmln/flatpickr">https://github.com/chmln/flatpickr</a></td>
          </tr>
          <tr>
            <td>Vue</td>
            <td>^2.5.13</td>
            <td><a href="http://vuejs.org/">http://vuejs.org/</a></td>
          </tr>
          <tr>
            <td>vue-multiselect</td>
            <td>^2.0.8</td>
            <td><a href="https://github.com/monterail/vue-multiselect">https://github.com/monterail/vue-multiselect</a></td>
          </tr>
          <tr>
            <td>vee-validate</td>
            <td>^2.1.0</td>
            <td><a href="https://github.com/baianat/vee-validate">https://github.com/baianat/vee-validate</a></td>
          </tr>
          <tr>
            <td>Quill</td>
            <td>^1.3.5</td>
            <td><a href="https://popper.js.org/">https://quilljs.com/</a></td>
          </tr>
          <tr>
            <td>Popper.js</td>
            <td>^1.13.0</td>
            <td><a href="https://popper.js.org/">https://popper.js.org/</a></td>
          </tr>
        </tbody>
      </table>
      <% endmarkdown %>
      </div>
    </c-panel>

    <c-panel title="Support">
      <p>If you need any support of using Cover, you can send a email to <a href="mailto:moyuboy@gmail.com">moyuboy@gmail.com</a>. Thank you for purchasing Cover template and helping us making your template better!</p>
    </c-panel>
  </c-main>
</template>
