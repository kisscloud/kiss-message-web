<script>
export default {
  name: 'CustomizationView'
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Build System">
      <% markdown %>
      _Cover_ uses [npm](https://npmjs.org) as package manager, [Webpack](https://webpack.js.org) as bundler. It supports serveral common tasks:

      - Compile SASS to CSS and autoprefix
      - Copy static assets
      - Local dev-server
      - Bundle production files

      ### Setup
      To use local development environment, you must have Node.js installed (it include npm). To get started follow instruction below:

      - Navigate to the root directory of Cover
      - Run `npm install`,  NPM will install all dev dependencies as listed in package.json
      - When completed, run `npm start` to start local dev-server
      - Run `npm build` to build production files. Once finished, you can find production files in `/lib` firectory, copy them to your project
      <% endmarkdown %>
    </c-panel>
    <c-panel title="Customization">
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
    </c-panel>
  </c-main>
</template>
