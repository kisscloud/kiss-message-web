<script>
export default {
  name: 'IconsView'
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Built-in icons">
      <p>Icon set made with pure css code, no dependencies.</p>
      <strong>Default:</strong>
      <div class="u-mb-15">
        <div class="i-wrapper">
          <i class="i-sort"></i>
        </div>
        <div class="i-wrapper">
          <i class="i-sort is-up"></i>
        </div>
        <div class="i-wrapper">
          <i class="i-sort is-down"></i>
        </div>
        <div class="i-wrapper">
          <i class="i-arrow-up"></i>
        </div>
        <div class="i-wrapper">
          <i class="i-arrow-right"></i>
        </div>
        <div class="i-wrapper">
          <i class="i-caret"></i>
        </div>
        <div class="i-wrapper">
          <i class="i-arrow-left"></i>
        </div>
        <div class="i-wrapper">
          <i class="i-remove"></i>
        </div>
        <div class="i-wrapper">
          <i class="i-spinner"></i>
        </div>
        <div class="i-wrapper">
          <i class="i-menu"></i>
        </div>
        <div class="i-wrapper">
          <i class="i-plus"></i>
        </div>
      </div>
      <strong>Light:</strong>
      <div class="u-mb-15">
        <div class="i-wrapper u-bg-primary">
          <i class="i-sort i-sort--light"></i>
        </div>
        <div class="i-wrapper u-bg-primary">
          <i class="i-sort i-sort--light is-up"></i>
        </div>
        <div class="i-wrapper u-bg-primary">
          <i class="i-sort i-sort--light is-down"></i>
        </div>
        <div class="i-wrapper u-bg-primary">
          <i class="i-arrow-up i-arrow-up--light"></i>
        </div>
        <div class="i-wrapper u-bg-primary">
          <i class="i-arrow-right i-arrow-right--light"></i>
        </div>
        <div class="i-wrapper u-bg-primary">
          <i class="i-caret i-caret--light"></i>
        </div>
        <div class="i-wrapper u-bg-primary">
          <i class="i-arrow-left i-arrow-left--light"></i>
        </div>
        <div class="i-wrapper u-bg-primary">
          <i class="i-remove i-remove--light"></i>
        </div>
        <div class="i-wrapper u-bg-primary">
          <i class="i-spinner i-spinner--light"></i>
        </div>
        <div class="i-wrapper u-bg-primary">
          <i class="i-menu i-menu--light"></i>
        </div>
        <div class="i-wrapper u-bg-primary">
          <i class="i-plus i-plus--light"></i>
        </div>
      </div>
      <% markdown %>
      ```html
      <!-- BEGIN DARK ICONS -->
      <i class="i-sort"></i>
      <i class="i-sort is-up"></i>
      <i class="i-sort is-down"></i>
      <i class="i-arrow-up"></i>
      <i class="i-arrow-right"></i>
      <i class="i-arrow-down"></i>
      <i class="i-caret"></i>
      <i class="i-arrow-left"></i>
      <i class="i-remove"></i>
      <i class="i-spinner"></i>
      <i class="i-menu"></i>
      <i class="i-plus"></i>
      <!-- END DARK ICONS -->

      <!-- BEGIN LIGHT ICONS -->
      <i class="i-sort i-sort--light"></i>
      <i class="i-sort i-sort--light is-up"></i>
      <i class="i-sort i-sort--light is-down"></i>
      <i class="i-arrow-up i-arrow-up--light"></i>
      <i class="i-arrow-right i-arrow-right--light"></i>
      <i class="i-caret i-caret--light"></i>
      <i class="i-arrow-left i-arrow-left--light"></i>
      <i class="i-remove i-remove--light"></i>
      <i class="i-spinner i-spinner--light"></i>
      <i class="i-menu i-menu--light"></i>
      <i class="i-plus i-plus--light"></i>
      <!-- END LIGHT ICONS -->
      ```
      <% endmarkdown %>
      <p>use <code>.i-text</code> to create true vertical align icon with text. The icon child must use <code>&lt;i&gt;</code> tag or <code>&lt;svg&gt;</code>.</p>
      <div class="u-mb-15">
        <span class="i-text">
          <i class="i-plus"></i>
          <span>New project</span>
        </span>
      </div>
      <% markdown %>
      ```html
      <span class="i-text">
        <i class="i-plus"></i>
        <span>New project</span>
      </span>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-panel title="SVG Icon">
      <div class="u-mb-15">
        <c-svgicon name="alert" />
        <c-svgicon name="check" />
        <c-svgicon name="cross" />
        <c-svgicon name="minus" />
      </div>
      <% markdown %>
      ```html
      <c-svgicon size="md" name="alert" />
      <c-svgicon size="md" name="check" />
      <c-svgicon size="md" name="cross" />
      <c-svgicon size="md" name="minus" />
      ```
      <% endmarkdown %>
      <hr />
      <h3><code class="u-fs-18">c-svgicon</code></h3>
      <table class="table table--bordered table--stress">
        <caption>Props</caption>
        <thead>
          <tr>
            <th>Property</th>
            <th>Description</th>
            <th>Type</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>name</th>
            <td>svg icon name, can be set to <code>alert</code>, <code>check</code>, <code>cross</code>, <code>minus</code></td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <th>size</th>
            <td>can be set to <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code> or number</td>
            <td>String | Number</td>
            <td>md</td>
          </tr>
        </tbody>
      </table>
    </c-panel>

    <c-panel title="IcoMoon Essential">
      <c-row class="icons-container" gutter="20">
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-home"></i>
          <span>icon-home</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-home2"></i>
          <span>icon-home2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-home3"></i>
          <span>icon-home3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-home4"></i>
          <span>icon-home4</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-office"></i>
          <span>icon-office</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-city"></i>
          <span>icon-city</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-newspaper"></i>
          <span>icon-newspaper</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-magazine"></i>
          <span>icon-magazine</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-design"></i>
          <span>icon-design</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-pencil"></i>
          <span>icon-pencil</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-pencil2"></i>
          <span>icon-pencil2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-pencil3"></i>
          <span>icon-pencil3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-eraser"></i>
          <span>icon-eraser</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-eraser2"></i>
          <span>icon-eraser2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-quill"></i>
          <span>icon-quill</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-quill2"></i>
          <span>icon-quill2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-quill3"></i>
          <span>icon-quill3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-quill4"></i>
          <span>icon-quill4</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-pen"></i>
          <span>icon-pen</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-pen2"></i>
          <span>icon-pen2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-pen3"></i>
          <span>icon-pen3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-pen4"></i>
          <span>icon-pen4</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-marker"></i>
          <span>icon-marker</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-blog"></i>
          <span>icon-blog</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-blog2"></i>
          <span>icon-blog2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-pen5"></i>
          <span>icon-pen5</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-brush"></i>
          <span>icon-brush</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-spray"></i>
          <span>icon-spray</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-palette"></i>
          <span>icon-palette</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-palette2"></i>
          <span>icon-palette2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-color-sampler"></i>
          <span>icon-color-sampler</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bucket"></i>
          <span>icon-bucket</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bucket2"></i>
          <span>icon-bucket2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-eyedropper"></i>
          <span>icon-eyedropper</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-eyedropper2"></i>
          <span>icon-eyedropper2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-eyedropper3"></i>
          <span>icon-eyedropper3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-droplet"></i>
          <span>icon-droplet</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-droplet2"></i>
          <span>icon-droplet2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-droplet-contrast"></i>
          <span>icon-droplet-contrast</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-color-clear"></i>
          <span>icon-color-clear</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-paint-format"></i>
          <span>icon-paint-format</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-stamp"></i>
          <span>icon-stamp</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-images"></i>
          <span>icon-images</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-image"></i>
          <span>icon-image</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-image2"></i>
          <span>icon-image2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-image-compare"></i>
          <span>icon-image-compare</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-images2"></i>
          <span>icon-images2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-image3"></i>
          <span>icon-image3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-images3"></i>
          <span>icon-images3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-image4"></i>
          <span>icon-image4</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-image5"></i>
          <span>icon-image5</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-camera"></i>
          <span>icon-camera</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-camera2"></i>
          <span>icon-camera2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-camera3"></i>
          <span>icon-camera3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-shutter"></i>
          <span>icon-shutter</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-headphones"></i>
          <span>icon-headphones</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-headset"></i>
          <span>icon-headset</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-music"></i>
          <span>icon-music</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-music2"></i>
          <span>icon-music2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-music3"></i>
          <span>icon-music3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-music4"></i>
          <span>icon-music4</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-music5"></i>
          <span>icon-music5</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-music6"></i>
          <span>icon-music6</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-album"></i>
          <span>icon-album</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-cassette"></i>
          <span>icon-cassette</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-tape"></i>
          <span>icon-tape</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-piano"></i>
          <span>icon-piano</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-guitar"></i>
          <span>icon-guitar</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-trumpet"></i>
          <span>icon-trumpet</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-speakers"></i>
          <span>icon-speakers</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-play"></i>
          <span>icon-play</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-clapboard-play"></i>
          <span>icon-clapboard-play</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-clapboard"></i>
          <span>icon-clapboard</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-media"></i>
          <span>icon-media</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-movie"></i>
          <span>icon-movie</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-film"></i>
          <span>icon-film</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-film2"></i>
          <span>icon-film2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-film3"></i>
          <span>icon-film3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-film4"></i>
          <span>icon-film4</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-video-camera"></i>
          <span>icon-video-camera</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-video-camera2"></i>
          <span>icon-video-camera2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-video-camera-slash"></i>
          <span>icon-video-camera-slash</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-video-camera3"></i>
          <span>icon-video-camera3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-video-camera4"></i>
          <span>icon-video-camera4</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-video-camera-slash2"></i>
          <span>icon-video-camera-slash2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-video-camera5"></i>
          <span>icon-video-camera5</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-recording"></i>
          <span>icon-recording</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-dice"></i>
          <span>icon-dice</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-gamepad"></i>
          <span>icon-gamepad</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-gamepad2"></i>
          <span>icon-gamepad2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-gamepad3"></i>
          <span>icon-gamepad3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-pacman"></i>
          <span>icon-pacman</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-spades"></i>
          <span>icon-spades</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-clubs"></i>
          <span>icon-clubs</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-diamonds"></i>
          <span>icon-diamonds</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-chess-king"></i>
          <span>icon-chess-king</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-chess-queen"></i>
          <span>icon-chess-queen</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-chess-rook"></i>
          <span>icon-chess-rook</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-chess-bishop"></i>
          <span>icon-chess-bishop</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-chess-knight"></i>
          <span>icon-chess-knight</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-chess-pawn"></i>
          <span>icon-chess-pawn</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-chess"></i>
          <span>icon-chess</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bullhorn"></i>
          <span>icon-bullhorn</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-megaphone"></i>
          <span>icon-megaphone</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-new"></i>
          <span>icon-new</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-connection"></i>
          <span>icon-connection</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-podcast"></i>
          <span>icon-podcast</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-station"></i>
          <span>icon-station</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-station2"></i>
          <span>icon-station2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-antenna"></i>
          <span>icon-antenna</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-satellite-dish"></i>
          <span>icon-satellite-dish</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-satellite-dish2"></i>
          <span>icon-satellite-dish2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-feed"></i>
          <span>icon-feed</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-mic"></i>
          <span>icon-mic</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-mic-off"></i>
          <span>icon-mic-off</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-mic2"></i>
          <span>icon-mic2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-mic-off2"></i>
          <span>icon-mic-off2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-mic3"></i>
          <span>icon-mic3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-book"></i>
          <span>icon-book</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-book2"></i>
          <span>icon-book2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-books"></i>
          <span>icon-books</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-library"></i>
          <span>icon-library</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-text"></i>
          <span>icon-file-text</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-profile"></i>
          <span>icon-profile</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-empty"></i>
          <span>icon-file-empty</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-empty2"></i>
          <span>icon-file-empty2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-files-empty"></i>
          <span>icon-files-empty</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-files-empty2"></i>
          <span>icon-files-empty2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-plus"></i>
          <span>icon-file-plus</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-plus2"></i>
          <span>icon-file-plus2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-minus"></i>
          <span>icon-file-minus</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-minus2"></i>
          <span>icon-file-minus2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-download"></i>
          <span>icon-file-download</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-download2"></i>
          <span>icon-file-download2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-upload"></i>
          <span>icon-file-upload</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-upload2"></i>
          <span>icon-file-upload2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-check"></i>
          <span>icon-file-check</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-check2"></i>
          <span>icon-file-check2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-eye"></i>
          <span>icon-file-eye</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-eye2"></i>
          <span>icon-file-eye2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-text2"></i>
          <span>icon-file-text2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-text3"></i>
          <span>icon-file-text3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-picture"></i>
          <span>icon-file-picture</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-picture2"></i>
          <span>icon-file-picture2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-music"></i>
          <span>icon-file-music</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-music2"></i>
          <span>icon-file-music2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-play"></i>
          <span>icon-file-play</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-play2"></i>
          <span>icon-file-play2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-video"></i>
          <span>icon-file-video</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-video2"></i>
          <span>icon-file-video2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-copy"></i>
          <span>icon-copy</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-zip"></i>
          <span>icon-file-zip</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-zip2"></i>
          <span>icon-file-zip2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-xml"></i>
          <span>icon-file-xml</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-xml2"></i>
          <span>icon-file-xml2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-css"></i>
          <span>icon-file-css</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-css2"></i>
          <span>icon-file-css2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-presentation"></i>
          <span>icon-file-presentation</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-presentation2"></i>
          <span>icon-file-presentation2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-stats"></i>
          <span>icon-file-stats</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-stats2"></i>
          <span>icon-file-stats2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-locked"></i>
          <span>icon-file-locked</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-locked2"></i>
          <span>icon-file-locked2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-spreadsheet"></i>
          <span>icon-file-spreadsheet</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-spreadsheet2"></i>
          <span>icon-file-spreadsheet2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-copy2"></i>
          <span>icon-copy2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-paste"></i>
          <span>icon-paste</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-paste2"></i>
          <span>icon-paste2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-paste3"></i>
          <span>icon-paste3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-stack"></i>
          <span>icon-stack</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-stack2"></i>
          <span>icon-stack2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-stack3"></i>
          <span>icon-stack3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-folder"></i>
          <span>icon-folder</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-folder-search"></i>
          <span>icon-folder-search</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-folder-download"></i>
          <span>icon-folder-download</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-folder-upload"></i>
          <span>icon-folder-upload</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-folder-plus"></i>
          <span>icon-folder-plus</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-folder-plus2"></i>
          <span>icon-folder-plus2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-folder-minus"></i>
          <span>icon-folder-minus</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-folder-minus2"></i>
          <span>icon-folder-minus2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-folder-check"></i>
          <span>icon-folder-check</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-folder-heart"></i>
          <span>icon-folder-heart</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-folder-remove"></i>
          <span>icon-folder-remove</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-folder2"></i>
          <span>icon-folder2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-folder-open"></i>
          <span>icon-folder-open</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-folder-plus3"></i>
          <span>icon-folder-plus3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-folder-minus3"></i>
          <span>icon-folder-minus3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-folder-download2"></i>
          <span>icon-folder-download2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-folder-upload2"></i>
          <span>icon-folder-upload2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-certificate"></i>
          <span>icon-certificate</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-cc"></i>
          <span>icon-cc</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-price-tag"></i>
          <span>icon-price-tag</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-price-tag2"></i>
          <span>icon-price-tag2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-price-tags"></i>
          <span>icon-price-tags</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-price-tag3"></i>
          <span>icon-price-tag3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-price-tags2"></i>
          <span>icon-price-tags2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-price-tag4"></i>
          <span>icon-price-tag4</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-price-tags3"></i>
          <span>icon-price-tags3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-price-tag5"></i>
          <span>icon-price-tag5</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-price-tags4"></i>
          <span>icon-price-tags4</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-barcode"></i>
          <span>icon-barcode</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-qrcode"></i>
          <span>icon-qrcode</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-ticket"></i>
          <span>icon-ticket</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-ticket2"></i>
          <span>icon-ticket2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-theater"></i>
          <span>icon-theater</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-store"></i>
          <span>icon-store</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-cart"></i>
          <span>icon-cart</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-cart2"></i>
          <span>icon-cart2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-cart-add"></i>
          <span>icon-cart-add</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-cart-add2"></i>
          <span>icon-cart-add2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-cart-remove"></i>
          <span>icon-cart-remove</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bag"></i>
          <span>icon-bag</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-percent"></i>
          <span>icon-percent</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-coins"></i>
          <span>icon-coins</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-coin-dollar"></i>
          <span>icon-coin-dollar</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-coin-euro"></i>
          <span>icon-coin-euro</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-coin-pound"></i>
          <span>icon-coin-pound</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-coin-yen"></i>
          <span>icon-coin-yen</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-piggy-bank"></i>
          <span>icon-piggy-bank</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-wallet"></i>
          <span>icon-wallet</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-cash"></i>
          <span>icon-cash</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-cash2"></i>
          <span>icon-cash2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-credit-card"></i>
          <span>icon-credit-card</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-calculator"></i>
          <span>icon-calculator</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-calculator2"></i>
          <span>icon-calculator2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-chip"></i>
          <span>icon-chip</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-lifebuoy"></i>
          <span>icon-lifebuoy</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-phone"></i>
          <span>icon-phone</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-phone-slash"></i>
          <span>icon-phone-slash</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-phone-wave"></i>
          <span>icon-phone-wave</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-phone-plus"></i>
          <span>icon-phone-plus</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-phone-minus"></i>
          <span>icon-phone-minus</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-phone-plus2"></i>
          <span>icon-phone-plus2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-phone-minus2"></i>
          <span>icon-phone-minus2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-phone-incoming"></i>
          <span>icon-phone-incoming</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-phone-outgoing"></i>
          <span>icon-phone-outgoing</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-phone-hang-up"></i>
          <span>icon-phone-hang-up</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-address-book"></i>
          <span>icon-address-book</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-address-book2"></i>
          <span>icon-address-book2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-notebook"></i>
          <span>icon-notebook</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-envelop"></i>
          <span>icon-envelop</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-envelop2"></i>
          <span>icon-envelop2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-envelop3"></i>
          <span>icon-envelop3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-pushpin"></i>
          <span>icon-pushpin</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-location"></i>
          <span>icon-location</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-location2"></i>
          <span>icon-location2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-location3"></i>
          <span>icon-location3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-location4"></i>
          <span>icon-location4</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-compass"></i>
          <span>icon-compass</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-compass2"></i>
          <span>icon-compass2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-map"></i>
          <span>icon-map</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-map2"></i>
          <span>icon-map2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-map3"></i>
          <span>icon-map3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-direction"></i>
          <span>icon-direction</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-reset"></i>
          <span>icon-reset</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-history"></i>
          <span>icon-history</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-clock"></i>
          <span>icon-clock</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-clock2"></i>
          <span>icon-clock2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-watch"></i>
          <span>icon-watch</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-watch2"></i>
          <span>icon-watch2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-alarm"></i>
          <span>icon-alarm</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-alarm-add"></i>
          <span>icon-alarm-add</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-alarm-check"></i>
          <span>icon-alarm-check</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-alarm-cancel"></i>
          <span>icon-alarm-cancel</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bell"></i>
          <span>icon-bell</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bell2"></i>
          <span>icon-bell2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bell-plus"></i>
          <span>icon-bell-plus</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bell-minus"></i>
          <span>icon-bell-minus</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bell-check"></i>
          <span>icon-bell-check</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bell-cross"></i>
          <span>icon-bell-cross</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-stopwatch"></i>
          <span>icon-stopwatch</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-calendar"></i>
          <span>icon-calendar</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-calendar2"></i>
          <span>icon-calendar2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-printer"></i>
          <span>icon-printer</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-printer2"></i>
          <span>icon-printer2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-printer3"></i>
          <span>icon-printer3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-shredder"></i>
          <span>icon-shredder</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-mouse"></i>
          <span>icon-mouse</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-keyboard"></i>
          <span>icon-keyboard</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-display"></i>
          <span>icon-display</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-laptop"></i>
          <span>icon-laptop</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-mobile"></i>
          <span>icon-mobile</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-mobile2"></i>
          <span>icon-mobile2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-tablet"></i>
          <span>icon-tablet</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-tv"></i>
          <span>icon-tv</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-radio"></i>
          <span>icon-radio</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-drawer"></i>
          <span>icon-drawer</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-drawer2"></i>
          <span>icon-drawer2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-drawer-out"></i>
          <span>icon-drawer-out</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-drawer-in"></i>
          <span>icon-drawer-in</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-drawer3"></i>
          <span>icon-drawer3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-box-add"></i>
          <span>icon-box-add</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-box-remove"></i>
          <span>icon-box-remove</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-download"></i>
          <span>icon-download</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-upload"></i>
          <span>icon-upload</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-floppy-disk"></i>
          <span>icon-floppy-disk</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-disk"></i>
          <span>icon-disk</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-drive"></i>
          <span>icon-drive</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-database"></i>
          <span>icon-database</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-undo"></i>
          <span>icon-undo</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-redo"></i>
          <span>icon-redo</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-rotate-ccw"></i>
          <span>icon-rotate-ccw</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-rotate-cw"></i>
          <span>icon-rotate-cw</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-flip-vertical"></i>
          <span>icon-flip-vertical</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-flip-horizontal"></i>
          <span>icon-flip-horizontal</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-angle"></i>
          <span>icon-angle</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-shear"></i>
          <span>icon-shear</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-align-left"></i>
          <span>icon-align-left</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-align-center-horizontal"></i>
          <span>icon-align-center-horizontal</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-align-right"></i>
          <span>icon-align-right</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-align-top"></i>
          <span>icon-align-top</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-align-center-vertical"></i>
          <span>icon-align-center-vertical</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-align-bottom"></i>
          <span>icon-align-bottom</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-undo2"></i>
          <span>icon-undo2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-redo2"></i>
          <span>icon-redo2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-forward"></i>
          <span>icon-forward</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-reply"></i>
          <span>icon-reply</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bubble"></i>
          <span>icon-bubble</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bubbles"></i>
          <span>icon-bubbles</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bubbles2"></i>
          <span>icon-bubbles2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bubble2"></i>
          <span>icon-bubble2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bubbles3"></i>
          <span>icon-bubbles3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bubbles4"></i>
          <span>icon-bubbles4</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-user"></i>
          <span>icon-user</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-users"></i>
          <span>icon-users</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-user-plus"></i>
          <span>icon-user-plus</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-user-minus"></i>
          <span>icon-user-minus</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-user-check"></i>
          <span>icon-user-check</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-user-tie"></i>
          <span>icon-user-tie</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-hat"></i>
          <span>icon-hat</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bowtie"></i>
          <span>icon-bowtie</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-quotes-left"></i>
          <span>icon-quotes-left</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-quotes-right"></i>
          <span>icon-quotes-right</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-hour-glass"></i>
          <span>icon-hour-glass</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-spinner"></i>
          <span>icon-spinner</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-spinner2"></i>
          <span>icon-spinner2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-spinner3"></i>
          <span>icon-spinner3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-spinner4"></i>
          <span>icon-spinner4</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-spinner5"></i>
          <span>icon-spinner5</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-spinner6"></i>
          <span>icon-spinner6</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-spinner7"></i>
          <span>icon-spinner7</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-spinner8"></i>
          <span>icon-spinner8</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-spinner9"></i>
          <span>icon-spinner9</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-spinner10"></i>
          <span>icon-spinner10</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-spinner11"></i>
          <span>icon-spinner11</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-binoculars"></i>
          <span>icon-binoculars</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-search"></i>
          <span>icon-search</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-zoom-in"></i>
          <span>icon-zoom-in</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-zoom-out"></i>
          <span>icon-zoom-out</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-enlarge"></i>
          <span>icon-enlarge</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-shrink"></i>
          <span>icon-shrink</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-enlarge2"></i>
          <span>icon-enlarge2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-shrink2"></i>
          <span>icon-shrink2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-key"></i>
          <span>icon-key</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-key2"></i>
          <span>icon-key2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-lock"></i>
          <span>icon-lock</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-unlocked"></i>
          <span>icon-unlocked</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-wrench"></i>
          <span>icon-wrench</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-equalizer"></i>
          <span>icon-equalizer</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-equalizer2"></i>
          <span>icon-equalizer2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-cog"></i>
          <span>icon-cog</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-cogs"></i>
          <span>icon-cogs</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-cog2"></i>
          <span>icon-cog2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-cog3"></i>
          <span>icon-cog3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-hammer"></i>
          <span>icon-hammer</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-magic-wand"></i>
          <span>icon-magic-wand</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-aid-kit"></i>
          <span>icon-aid-kit</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-aid-kit2"></i>
          <span>icon-aid-kit2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-stethoscope"></i>
          <span>icon-stethoscope</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-ambulance"></i>
          <span>icon-ambulance</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-pandage"></i>
          <span>icon-pandage</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bug"></i>
          <span>icon-bug</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-syringe"></i>
          <span>icon-syringe</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-pill"></i>
          <span>icon-pill</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-traffic-lights"></i>
          <span>icon-traffic-lights</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-pie-chart"></i>
          <span>icon-pie-chart</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-pie-chart2"></i>
          <span>icon-pie-chart2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-stats-dots"></i>
          <span>icon-stats-dots</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-stats-bars"></i>
          <span>icon-stats-bars</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-stats-bars2"></i>
          <span>icon-stats-bars2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-stats-growth"></i>
          <span>icon-stats-growth</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-stats-decline"></i>
          <span>icon-stats-decline</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-stats-growth2"></i>
          <span>icon-stats-growth2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-stats-decline2"></i>
          <span>icon-stats-decline2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-stairs-up"></i>
          <span>icon-stairs-up</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-stairs-down"></i>
          <span>icon-stairs-down</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-ladder"></i>
          <span>icon-ladder</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-rating"></i>
          <span>icon-rating</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-rating2"></i>
          <span>icon-rating2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-rating3"></i>
          <span>icon-rating3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-medal"></i>
          <span>icon-medal</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-medal-first"></i>
          <span>icon-medal-first</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-medal-second"></i>
          <span>icon-medal-second</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-medal-third"></i>
          <span>icon-medal-third</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-trophy"></i>
          <span>icon-trophy</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-trophy2"></i>
          <span>icon-trophy2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-gift"></i>
          <span>icon-gift</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-gift2"></i>
          <span>icon-gift2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-glass"></i>
          <span>icon-glass</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-glass2"></i>
          <span>icon-glass2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-glass3"></i>
          <span>icon-glass3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bottle"></i>
          <span>icon-bottle</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bottle2"></i>
          <span>icon-bottle2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bottle3"></i>
          <span>icon-bottle3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-mug"></i>
          <span>icon-mug</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-spoon-knife"></i>
          <span>icon-spoon-knife</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-plate"></i>
          <span>icon-plate</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-steak"></i>
          <span>icon-steak</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-fish"></i>
          <span>icon-fish</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-chicken"></i>
          <span>icon-chicken</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-hamburger"></i>
          <span>icon-hamburger</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-pizza"></i>
          <span>icon-pizza</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-cheese"></i>
          <span>icon-cheese</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bread"></i>
          <span>icon-bread</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-icecream"></i>
          <span>icon-icecream</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-milk"></i>
          <span>icon-milk</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-cup"></i>
          <span>icon-cup</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-coffee-bean"></i>
          <span>icon-coffee-bean</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-coffee"></i>
          <span>icon-coffee</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-leaf"></i>
          <span>icon-leaf</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-apple"></i>
          <span>icon-apple</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-grapes"></i>
          <span>icon-grapes</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-tree"></i>
          <span>icon-tree</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-tree2"></i>
          <span>icon-tree2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-cactus"></i>
          <span>icon-cactus</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-mountains"></i>
          <span>icon-mountains</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-paw"></i>
          <span>icon-paw</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-footprint"></i>
          <span>icon-footprint</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-tent"></i>
          <span>icon-tent</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-rocket"></i>
          <span>icon-rocket</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-meter"></i>
          <span>icon-meter</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-meter2"></i>
          <span>icon-meter2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-meter-slow"></i>
          <span>icon-meter-slow</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-meter-medium"></i>
          <span>icon-meter-medium</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-meter-fast"></i>
          <span>icon-meter-fast</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-hammer2"></i>
          <span>icon-hammer2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bomb"></i>
          <span>icon-bomb</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-fire"></i>
          <span>icon-fire</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-lab"></i>
          <span>icon-lab</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-magnet"></i>
          <span>icon-magnet</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-skull"></i>
          <span>icon-skull</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-lamp"></i>
          <span>icon-lamp</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-spotlight"></i>
          <span>icon-spotlight</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-lamp2"></i>
          <span>icon-lamp2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-lamp3"></i>
          <span>icon-lamp3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bin"></i>
          <span>icon-bin</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bin2"></i>
          <span>icon-bin2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-briefcase"></i>
          <span>icon-briefcase</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-airplane"></i>
          <span>icon-airplane</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-paperplane"></i>
          <span>icon-paperplane</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-car"></i>
          <span>icon-car</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-gas"></i>
          <span>icon-gas</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bus"></i>
          <span>icon-bus</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-truck"></i>
          <span>icon-truck</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bike"></i>
          <span>icon-bike</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-road"></i>
          <span>icon-road</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-train"></i>
          <span>icon-train</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-train2"></i>
          <span>icon-train2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-ship"></i>
          <span>icon-ship</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-boat"></i>
          <span>icon-boat</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-chopper"></i>
          <span>icon-chopper</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-cube"></i>
          <span>icon-cube</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-puzzle"></i>
          <span>icon-puzzle</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-accessibility"></i>
          <span>icon-accessibility</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-accessibility2"></i>
          <span>icon-accessibility2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-target"></i>
          <span>icon-target</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-target2"></i>
          <span>icon-target2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-ammo"></i>
          <span>icon-ammo</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-gun"></i>
          <span>icon-gun</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-gun-forbidden"></i>
          <span>icon-gun-forbidden</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-shield"></i>
          <span>icon-shield</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-shield-check"></i>
          <span>icon-shield-check</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-shield-notice"></i>
          <span>icon-shield-notice</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-shield2"></i>
          <span>icon-shield2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-shield3"></i>
          <span>icon-shield3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-soccer"></i>
          <span>icon-soccer</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-football"></i>
          <span>icon-football</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-archery"></i>
          <span>icon-archery</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bow"></i>
          <span>icon-bow</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-sword"></i>
          <span>icon-sword</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-tennis"></i>
          <span>icon-tennis</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-pingpong"></i>
          <span>icon-pingpong</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-baseball"></i>
          <span>icon-baseball</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-basketball"></i>
          <span>icon-basketball</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-golf"></i>
          <span>icon-golf</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-golf2"></i>
          <span>icon-golf2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-hockey"></i>
          <span>icon-hockey</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-racing"></i>
          <span>icon-racing</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-finish"></i>
          <span>icon-finish</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-eight-ball"></i>
          <span>icon-eight-ball</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bowling"></i>
          <span>icon-bowling</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bowling2"></i>
          <span>icon-bowling2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-power"></i>
          <span>icon-power</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-switch"></i>
          <span>icon-switch</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-power-cord"></i>
          <span>icon-power-cord</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-clipboard"></i>
          <span>icon-clipboard</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-clipboard2"></i>
          <span>icon-clipboard2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-clipboard3"></i>
          <span>icon-clipboard3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-clipboard4"></i>
          <span>icon-clipboard4</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-clipboard5"></i>
          <span>icon-clipboard5</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-clipboard6"></i>
          <span>icon-clipboard6</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-playlist"></i>
          <span>icon-playlist</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-playlist-add"></i>
          <span>icon-playlist-add</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-list-numbered"></i>
          <span>icon-list-numbered</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-list"></i>
          <span>icon-list</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-list2"></i>
          <span>icon-list2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-more"></i>
          <span>icon-more</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-grid"></i>
          <span>icon-grid</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-grid2"></i>
          <span>icon-grid2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-tree3"></i>
          <span>icon-tree3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-menu"></i>
          <span>icon-menu</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-menu2"></i>
          <span>icon-menu2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-menu3"></i>
          <span>icon-menu3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-menu4"></i>
          <span>icon-menu4</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-cloud"></i>
          <span>icon-cloud</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-cloud-download"></i>
          <span>icon-cloud-download</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-cloud-upload"></i>
          <span>icon-cloud-upload</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-cloud-check"></i>
          <span>icon-cloud-check</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-download2"></i>
          <span>icon-download2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-upload2"></i>
          <span>icon-upload2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-download3"></i>
          <span>icon-download3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-upload3"></i>
          <span>icon-upload3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-download4"></i>
          <span>icon-download4</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-upload4"></i>
          <span>icon-upload4</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-sphere"></i>
          <span>icon-sphere</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-sphere2"></i>
          <span>icon-sphere2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-sphere3"></i>
          <span>icon-sphere3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-planet"></i>
          <span>icon-planet</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-earth"></i>
          <span>icon-earth</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-earth2"></i>
          <span>icon-earth2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-link"></i>
          <span>icon-link</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-unlink"></i>
          <span>icon-unlink</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-link2"></i>
          <span>icon-link2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-unlink2"></i>
          <span>icon-unlink2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-flag"></i>
          <span>icon-flag</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-flag2"></i>
          <span>icon-flag2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-flag3"></i>
          <span>icon-flag3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-flag4"></i>
          <span>icon-flag4</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-flag5"></i>
          <span>icon-flag5</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-flag6"></i>
          <span>icon-flag6</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-attachment"></i>
          <span>icon-attachment</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-eye"></i>
          <span>icon-eye</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-eye-plus"></i>
          <span>icon-eye-plus</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-eye-minus"></i>
          <span>icon-eye-minus</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-eye-blocked"></i>
          <span>icon-eye-blocked</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bookmark"></i>
          <span>icon-bookmark</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bookmarks"></i>
          <span>icon-bookmarks</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-snowflake"></i>
          <span>icon-snowflake</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-temperature"></i>
          <span>icon-temperature</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-temperature2"></i>
          <span>icon-temperature2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-weather-lightning"></i>
          <span>icon-weather-lightning</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-weather-lightning2"></i>
          <span>icon-weather-lightning2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-weather-rain"></i>
          <span>icon-weather-rain</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-weather-rain2"></i>
          <span>icon-weather-rain2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-weather-snow"></i>
          <span>icon-weather-snow</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-weather-snow2"></i>
          <span>icon-weather-snow2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-weather-cloud-wind"></i>
          <span>icon-weather-cloud-wind</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-weather-cloud-wind2"></i>
          <span>icon-weather-cloud-wind2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-weather-cloud-sun"></i>
          <span>icon-weather-cloud-sun</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-weather-cloud-sun2"></i>
          <span>icon-weather-cloud-sun2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-weather-cloudy"></i>
          <span>icon-weather-cloudy</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-weather-cloudy2"></i>
          <span>icon-weather-cloudy2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-weather-sun-wind"></i>
          <span>icon-weather-sun-wind</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-weather-sun-wind2"></i>
          <span>icon-weather-sun-wind2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-sun"></i>
          <span>icon-sun</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-day-night"></i>
          <span>icon-day-night</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-weather-windy"></i>
          <span>icon-weather-windy</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-fan"></i>
          <span>icon-fan</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-contrast"></i>
          <span>icon-contrast</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-brightness-contrast"></i>
          <span>icon-brightness-contrast</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bed"></i>
          <span>icon-bed</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-furniture"></i>
          <span>icon-furniture</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-star-empty"></i>
          <span>icon-star-empty</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-star-half"></i>
          <span>icon-star-half</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-star-full"></i>
          <span>icon-star-full</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-heart"></i>
          <span>icon-heart</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-heart-broken"></i>
          <span>icon-heart-broken</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-thumbs-up"></i>
          <span>icon-thumbs-up</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-thumbs-up2"></i>
          <span>icon-thumbs-up2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-thumbs-down"></i>
          <span>icon-thumbs-down</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-thumbs-down2"></i>
          <span>icon-thumbs-down2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-thumbs-up3"></i>
          <span>icon-thumbs-up3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-thumbs-down3"></i>
          <span>icon-thumbs-down3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-man"></i>
          <span>icon-man</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-woman"></i>
          <span>icon-woman</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-man-woman"></i>
          <span>icon-man-woman</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-male"></i>
          <span>icon-male</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-female"></i>
          <span>icon-female</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-peace"></i>
          <span>icon-peace</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-yin-yang"></i>
          <span>icon-yin-yang</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-happy"></i>
          <span>icon-happy</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-happy2"></i>
          <span>icon-happy2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-smile"></i>
          <span>icon-smile</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-smile2"></i>
          <span>icon-smile2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-tongue"></i>
          <span>icon-tongue</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-tongue2"></i>
          <span>icon-tongue2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-sad"></i>
          <span>icon-sad</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-sad2"></i>
          <span>icon-sad2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-wink"></i>
          <span>icon-wink</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-wink2"></i>
          <span>icon-wink2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-grin"></i>
          <span>icon-grin</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-grin2"></i>
          <span>icon-grin2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-cool"></i>
          <span>icon-cool</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-cool2"></i>
          <span>icon-cool2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-angry"></i>
          <span>icon-angry</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-angry2"></i>
          <span>icon-angry2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-evil"></i>
          <span>icon-evil</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-evil2"></i>
          <span>icon-evil2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-shocked"></i>
          <span>icon-shocked</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-shocked2"></i>
          <span>icon-shocked2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-baffled"></i>
          <span>icon-baffled</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-baffled2"></i>
          <span>icon-baffled2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-confused"></i>
          <span>icon-confused</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-confused2"></i>
          <span>icon-confused2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-neutral"></i>
          <span>icon-neutral</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-neutral2"></i>
          <span>icon-neutral2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-hipster"></i>
          <span>icon-hipster</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-hipster2"></i>
          <span>icon-hipster2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-wondering"></i>
          <span>icon-wondering</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-wondering2"></i>
          <span>icon-wondering2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-sleepy"></i>
          <span>icon-sleepy</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-sleepy2"></i>
          <span>icon-sleepy2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-frustrated"></i>
          <span>icon-frustrated</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-frustrated2"></i>
          <span>icon-frustrated2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-crying"></i>
          <span>icon-crying</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-crying2"></i>
          <span>icon-crying2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-select"></i>
          <span>icon-select</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-point-up"></i>
          <span>icon-point-up</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-point-right"></i>
          <span>icon-point-right</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-point-down"></i>
          <span>icon-point-down</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-point-left"></i>
          <span>icon-point-left</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-pointer"></i>
          <span>icon-pointer</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-reminder"></i>
          <span>icon-reminder</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-drag-left-right"></i>
          <span>icon-drag-left-right</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-drag-left"></i>
          <span>icon-drag-left</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-drag-right"></i>
          <span>icon-drag-right</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-touch"></i>
          <span>icon-touch</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-multitouch"></i>
          <span>icon-multitouch</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-touch-zoom"></i>
          <span>icon-touch-zoom</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-touch-pinch"></i>
          <span>icon-touch-pinch</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-hand"></i>
          <span>icon-hand</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-grab"></i>
          <span>icon-grab</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-warning"></i>
          <span>icon-warning</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-warning2"></i>
          <span>icon-warning2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-notification"></i>
          <span>icon-notification</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-notification2"></i>
          <span>icon-notification2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-question"></i>
          <span>icon-question</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-question2"></i>
          <span>icon-question2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-question3"></i>
          <span>icon-question3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-question4"></i>
          <span>icon-question4</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-plus"></i>
          <span>icon-plus</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-minus"></i>
          <span>icon-minus</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-plus-circle"></i>
          <span>icon-plus-circle</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-minus-circle"></i>
          <span>icon-minus-circle</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-info"></i>
          <span>icon-info</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-info2"></i>
          <span>icon-info2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-cancel-circle"></i>
          <span>icon-cancel-circle</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-cancel-circle2"></i>
          <span>icon-cancel-circle2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-blocked"></i>
          <span>icon-blocked</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-cross"></i>
          <span>icon-cross</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-checkmark"></i>
          <span>icon-checkmark</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-checkmark2"></i>
          <span>icon-checkmark2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-spell-check"></i>
          <span>icon-spell-check</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-enter"></i>
          <span>icon-enter</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-exit"></i>
          <span>icon-exit</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-enter2"></i>
          <span>icon-enter2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-exit2"></i>
          <span>icon-exit2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-play2"></i>
          <span>icon-play2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-pause"></i>
          <span>icon-pause</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-stop"></i>
          <span>icon-stop</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-previous"></i>
          <span>icon-previous</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-next"></i>
          <span>icon-next</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-backward"></i>
          <span>icon-backward</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-forward2"></i>
          <span>icon-forward2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-play3"></i>
          <span>icon-play3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-pause2"></i>
          <span>icon-pause2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-stop2"></i>
          <span>icon-stop2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-backward2"></i>
          <span>icon-backward2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-forward3"></i>
          <span>icon-forward3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-first"></i>
          <span>icon-first</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-last"></i>
          <span>icon-last</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-previous2"></i>
          <span>icon-previous2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-next2"></i>
          <span>icon-next2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-eject"></i>
          <span>icon-eject</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-volume-high"></i>
          <span>icon-volume-high</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-volume-medium"></i>
          <span>icon-volume-medium</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-volume-low"></i>
          <span>icon-volume-low</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-volume-mute"></i>
          <span>icon-volume-mute</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-volume-mute2"></i>
          <span>icon-volume-mute2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-volume-increase"></i>
          <span>icon-volume-increase</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-volume-decrease"></i>
          <span>icon-volume-decrease</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-loop"></i>
          <span>icon-loop</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-loop2"></i>
          <span>icon-loop2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-infinite"></i>
          <span>icon-infinite</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-shuffle"></i>
          <span>icon-shuffle</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-wave"></i>
          <span>icon-wave</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-wave2"></i>
          <span>icon-wave2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-arrow-up"></i>
          <span>icon-arrow-up</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-arrow-right"></i>
          <span>icon-arrow-right</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-arrow-down"></i>
          <span>icon-arrow-down</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-arrow-left"></i>
          <span>icon-arrow-left</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-arrow-up-left"></i>
          <span>icon-arrow-up-left</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-arrow-up2"></i>
          <span>icon-arrow-up2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-arrow-up-right"></i>
          <span>icon-arrow-up-right</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-arrow-right2"></i>
          <span>icon-arrow-right2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-arrow-down-right"></i>
          <span>icon-arrow-down-right</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-arrow-down2"></i>
          <span>icon-arrow-down2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-arrow-down-left"></i>
          <span>icon-arrow-down-left</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-arrow-left2"></i>
          <span>icon-arrow-left2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-arrow-up-left2"></i>
          <span>icon-arrow-up-left2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-arrow-up3"></i>
          <span>icon-arrow-up3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-arrow-up-right2"></i>
          <span>icon-arrow-up-right2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-arrow-right3"></i>
          <span>icon-arrow-right3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-arrow-down-right2"></i>
          <span>icon-arrow-down-right2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-arrow-down3"></i>
          <span>icon-arrow-down3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-arrow-down-left2"></i>
          <span>icon-arrow-down-left2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-arrow-left3"></i>
          <span>icon-arrow-left3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-circle-up"></i>
          <span>icon-circle-up</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-circle-right"></i>
          <span>icon-circle-right</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-circle-down"></i>
          <span>icon-circle-down</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-circle-left"></i>
          <span>icon-circle-left</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-square-up-left"></i>
          <span>icon-square-up-left</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-square-up"></i>
          <span>icon-square-up</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-square-up-right"></i>
          <span>icon-square-up-right</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-square-right"></i>
          <span>icon-square-right</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-square-down-right"></i>
          <span>icon-square-down-right</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-square-down"></i>
          <span>icon-square-down</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-square-down-left"></i>
          <span>icon-square-down-left</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-square-left"></i>
          <span>icon-square-left</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-arrow-up-left3"></i>
          <span>icon-arrow-up-left3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-arrow-up4"></i>
          <span>icon-arrow-up4</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-arrow-up-right3"></i>
          <span>icon-arrow-up-right3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-arrow-right4"></i>
          <span>icon-arrow-right4</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-arrow-down-right3"></i>
          <span>icon-arrow-down-right3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-arrow-down4"></i>
          <span>icon-arrow-down4</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-arrow-down-left3"></i>
          <span>icon-arrow-down-left3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-arrow-left4"></i>
          <span>icon-arrow-left4</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-circle-up2"></i>
          <span>icon-circle-up2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-circle-right2"></i>
          <span>icon-circle-right2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-circle-down2"></i>
          <span>icon-circle-down2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-circle-left2"></i>
          <span>icon-circle-left2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-circle-up3"></i>
          <span>icon-circle-up3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-circle-right3"></i>
          <span>icon-circle-right3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-circle-down3"></i>
          <span>icon-circle-down3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-circle-left3"></i>
          <span>icon-circle-left3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-enter3"></i>
          <span>icon-enter3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-esc"></i>
          <span>icon-esc</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-backspace"></i>
          <span>icon-backspace</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-backspace2"></i>
          <span>icon-backspace2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-tab"></i>
          <span>icon-tab</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-move-up"></i>
          <span>icon-move-up</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-move-down"></i>
          <span>icon-move-down</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-sort-alpha-asc"></i>
          <span>icon-sort-alpha-asc</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-sort-alpha-desc"></i>
          <span>icon-sort-alpha-desc</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-sort-numeric-asc"></i>
          <span>icon-sort-numeric-asc</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-sort-numberic-desc"></i>
          <span>icon-sort-numberic-desc</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-sort-amount-asc"></i>
          <span>icon-sort-amount-asc</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-sort-amount-desc"></i>
          <span>icon-sort-amount-desc</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-sort-time-asc"></i>
          <span>icon-sort-time-asc</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-sort-time-desc"></i>
          <span>icon-sort-time-desc</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-battery-6"></i>
          <span>icon-battery-6</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-battery-5"></i>
          <span>icon-battery-5</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-battery-4"></i>
          <span>icon-battery-4</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-battery-3"></i>
          <span>icon-battery-3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-battery-2"></i>
          <span>icon-battery-2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-battery-1"></i>
          <span>icon-battery-1</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-battery-0"></i>
          <span>icon-battery-0</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-battery-charging"></i>
          <span>icon-battery-charging</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-command"></i>
          <span>icon-command</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-shift"></i>
          <span>icon-shift</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-ctrl"></i>
          <span>icon-ctrl</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-opt"></i>
          <span>icon-opt</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-checkbox-checked"></i>
          <span>icon-checkbox-checked</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-checkbox-unchecked"></i>
          <span>icon-checkbox-unchecked</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-radio-checked"></i>
          <span>icon-radio-checked</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-radio-checked2"></i>
          <span>icon-radio-checked2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-radio-unchecked"></i>
          <span>icon-radio-unchecked</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-toggle-on"></i>
          <span>icon-toggle-on</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-toggle-off"></i>
          <span>icon-toggle-off</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-crop"></i>
          <span>icon-crop</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-make-group"></i>
          <span>icon-make-group</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-ungroup"></i>
          <span>icon-ungroup</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-vector"></i>
          <span>icon-vector</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-vector2"></i>
          <span>icon-vector2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-rulers"></i>
          <span>icon-rulers</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-scissors"></i>
          <span>icon-scissors</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-filter"></i>
          <span>icon-filter</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-filter2"></i>
          <span>icon-filter2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-filter3"></i>
          <span>icon-filter3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-filter4"></i>
          <span>icon-filter4</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-font"></i>
          <span>icon-font</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-ampersand"></i>
          <span>icon-ampersand</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-ligature"></i>
          <span>icon-ligature</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-ligature2"></i>
          <span>icon-ligature2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-text-height"></i>
          <span>icon-text-height</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-text-width"></i>
          <span>icon-text-width</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-font-size"></i>
          <span>icon-font-size</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-bold"></i>
          <span>icon-bold</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-underline"></i>
          <span>icon-underline</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-italic"></i>
          <span>icon-italic</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-strikethrough"></i>
          <span>icon-strikethrough</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-omega"></i>
          <span>icon-omega</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-sigma"></i>
          <span>icon-sigma</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-page-break"></i>
          <span>icon-page-break</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-superscript"></i>
          <span>icon-superscript</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-subscript"></i>
          <span>icon-subscript</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-superscript2"></i>
          <span>icon-superscript2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-subscript2"></i>
          <span>icon-subscript2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-text-color"></i>
          <span>icon-text-color</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-pagebreak"></i>
          <span>icon-pagebreak</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-clear-formatting"></i>
          <span>icon-clear-formatting</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-table"></i>
          <span>icon-table</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-table2"></i>
          <span>icon-table2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-insert-template"></i>
          <span>icon-insert-template</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-pilcrow"></i>
          <span>icon-pilcrow</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-ltr"></i>
          <span>icon-ltr</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-rtl"></i>
          <span>icon-rtl</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-ltr2"></i>
          <span>icon-ltr2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-rtl2"></i>
          <span>icon-rtl2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-section"></i>
          <span>icon-section</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-paragraph-left"></i>
          <span>icon-paragraph-left</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-paragraph-center"></i>
          <span>icon-paragraph-center</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-paragraph-right"></i>
          <span>icon-paragraph-right</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-paragraph-justify"></i>
          <span>icon-paragraph-justify</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-indent-increase"></i>
          <span>icon-indent-increase</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-indent-decrease"></i>
          <span>icon-indent-decrease</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-share"></i>
          <span>icon-share</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-share2"></i>
          <span>icon-share2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-new-tab"></i>
          <span>icon-new-tab</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-new-tab2"></i>
          <span>icon-new-tab2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-popout"></i>
          <span>icon-popout</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-embed"></i>
          <span>icon-embed</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-embed2"></i>
          <span>icon-embed2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-terminal"></i>
          <span>icon-terminal</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-unicode"></i>
          <span>icon-unicode</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-seven-segment-0"></i>
          <span>icon-seven-segment-0</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-seven-segment-1"></i>
          <span>icon-seven-segment-1</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-seven-segment-2"></i>
          <span>icon-seven-segment-2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-seven-segment-3"></i>
          <span>icon-seven-segment-3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-seven-segment-4"></i>
          <span>icon-seven-segment-4</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-seven-segment-5"></i>
          <span>icon-seven-segment-5</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-seven-segment-6"></i>
          <span>icon-seven-segment-6</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-seven-segment-7"></i>
          <span>icon-seven-segment-7</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-seven-segment-8"></i>
          <span>icon-seven-segment-8</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-seven-segment-9"></i>
          <span>icon-seven-segment-9</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-share3"></i>
          <span>icon-share3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-share4"></i>
          <span>icon-share4</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-mail"></i>
          <span>icon-mail</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-mail2"></i>
          <span>icon-mail2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-mail3"></i>
          <span>icon-mail3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-mail4"></i>
          <span>icon-mail4</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-amazon"></i>
          <span>icon-amazon</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-google"></i>
          <span>icon-google</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-google2"></i>
          <span>icon-google2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-google3"></i>
          <span>icon-google3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-google-plus"></i>
          <span>icon-google-plus</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-google-plus2"></i>
          <span>icon-google-plus2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-google-plus3"></i>
          <span>icon-google-plus3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-hangouts"></i>
          <span>icon-hangouts</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-google-drive"></i>
          <span>icon-google-drive</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-facebook"></i>
          <span>icon-facebook</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-facebook2"></i>
          <span>icon-facebook2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-instagram"></i>
          <span>icon-instagram</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-whatsapp"></i>
          <span>icon-whatsapp</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-spotify"></i>
          <span>icon-spotify</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-telegram"></i>
          <span>icon-telegram</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-twitter"></i>
          <span>icon-twitter</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-vine"></i>
          <span>icon-vine</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-vk"></i>
          <span>icon-vk</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-renren"></i>
          <span>icon-renren</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-sina-weibo"></i>
          <span>icon-sina-weibo</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-rss"></i>
          <span>icon-rss</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-rss2"></i>
          <span>icon-rss2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-youtube"></i>
          <span>icon-youtube</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-youtube2"></i>
          <span>icon-youtube2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-twitch"></i>
          <span>icon-twitch</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-vimeo"></i>
          <span>icon-vimeo</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-vimeo2"></i>
          <span>icon-vimeo2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-lanyrd"></i>
          <span>icon-lanyrd</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-flickr"></i>
          <span>icon-flickr</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-flickr2"></i>
          <span>icon-flickr2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-flickr3"></i>
          <span>icon-flickr3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-flickr4"></i>
          <span>icon-flickr4</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-dribbble"></i>
          <span>icon-dribbble</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-behance"></i>
          <span>icon-behance</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-behance2"></i>
          <span>icon-behance2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-deviantart"></i>
          <span>icon-deviantart</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-500px"></i>
          <span>icon-500px</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-steam"></i>
          <span>icon-steam</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-steam2"></i>
          <span>icon-steam2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-dropbox"></i>
          <span>icon-dropbox</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-onedrive"></i>
          <span>icon-onedrive</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-github"></i>
          <span>icon-github</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-npm"></i>
          <span>icon-npm</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-basecamp"></i>
          <span>icon-basecamp</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-trello"></i>
          <span>icon-trello</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-wordpress"></i>
          <span>icon-wordpress</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-joomla"></i>
          <span>icon-joomla</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-ello"></i>
          <span>icon-ello</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-blogger"></i>
          <span>icon-blogger</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-blogger2"></i>
          <span>icon-blogger2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-tumblr"></i>
          <span>icon-tumblr</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-tumblr2"></i>
          <span>icon-tumblr2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-yahoo"></i>
          <span>icon-yahoo</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-yahoo2"></i>
          <span>icon-yahoo2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-tux"></i>
          <span>icon-tux</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-appleinc"></i>
          <span>icon-appleinc</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-finder"></i>
          <span>icon-finder</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-android"></i>
          <span>icon-android</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-windows"></i>
          <span>icon-windows</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-windows8"></i>
          <span>icon-windows8</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-soundcloud"></i>
          <span>icon-soundcloud</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-soundcloud2"></i>
          <span>icon-soundcloud2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-skype"></i>
          <span>icon-skype</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-reddit"></i>
          <span>icon-reddit</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-hackernews"></i>
          <span>icon-hackernews</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-wikipedia"></i>
          <span>icon-wikipedia</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-linkedin"></i>
          <span>icon-linkedin</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-linkedin2"></i>
          <span>icon-linkedin2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-lastfm"></i>
          <span>icon-lastfm</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-lastfm2"></i>
          <span>icon-lastfm2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-delicious"></i>
          <span>icon-delicious</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-stumbleupon"></i>
          <span>icon-stumbleupon</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-stumbleupon2"></i>
          <span>icon-stumbleupon2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-stackoverflow"></i>
          <span>icon-stackoverflow</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-pinterest"></i>
          <span>icon-pinterest</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-pinterest2"></i>
          <span>icon-pinterest2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-xing"></i>
          <span>icon-xing</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-xing2"></i>
          <span>icon-xing2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-flattr"></i>
          <span>icon-flattr</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-foursquare"></i>
          <span>icon-foursquare</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-yelp"></i>
          <span>icon-yelp</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-paypal"></i>
          <span>icon-paypal</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-chrome"></i>
          <span>icon-chrome</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-firefox"></i>
          <span>icon-firefox</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-IE"></i>
          <span>icon-IE</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-edge"></i>
          <span>icon-edge</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-safari"></i>
          <span>icon-safari</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-opera"></i>
          <span>icon-opera</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-pdf"></i>
          <span>icon-file-pdf</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-openoffice"></i>
          <span>icon-file-openoffice</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-word"></i>
          <span>icon-file-word</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-file-excel"></i>
          <span>icon-file-excel</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-libreoffice"></i>
          <span>icon-libreoffice</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-html-five"></i>
          <span>icon-html-five</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-html-five2"></i>
          <span>icon-html-five2</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-css3"></i>
          <span>icon-css3</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-git"></i>
          <span>icon-git</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-codepen"></i>
          <span>icon-codepen</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-svg"></i>
          <span>icon-svg</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-IcoMoon"></i>
          <span>icon-IcoMoon</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni21"></i>
          <span>icon-uni21</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni22"></i>
          <span>icon-uni22</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni23"></i>
          <span>icon-uni23</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni24"></i>
          <span>icon-uni24</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni25"></i>
          <span>icon-uni25</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni26"></i>
          <span>icon-uni26</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni27"></i>
          <span>icon-uni27</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni28"></i>
          <span>icon-uni28</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni29"></i>
          <span>icon-uni29</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni2A"></i>
          <span>icon-uni2A</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni2B"></i>
          <span>icon-uni2B</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni2C"></i>
          <span>icon-uni2C</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni2D"></i>
          <span>icon-uni2D</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni2E"></i>
          <span>icon-uni2E</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni2F"></i>
          <span>icon-uni2F</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni30"></i>
          <span>icon-uni30</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni31"></i>
          <span>icon-uni31</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni32"></i>
          <span>icon-uni32</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni33"></i>
          <span>icon-uni33</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni34"></i>
          <span>icon-uni34</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni35"></i>
          <span>icon-uni35</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni36"></i>
          <span>icon-uni36</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni37"></i>
          <span>icon-uni37</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni38"></i>
          <span>icon-uni38</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni39"></i>
          <span>icon-uni39</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni3A"></i>
          <span>icon-uni3A</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni3B"></i>
          <span>icon-uni3B</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni3C"></i>
          <span>icon-uni3C</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni3D"></i>
          <span>icon-uni3D</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni3E"></i>
          <span>icon-uni3E</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni3F"></i>
          <span>icon-uni3F</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni40"></i>
          <span>icon-uni40</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni41"></i>
          <span>icon-uni41</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni42"></i>
          <span>icon-uni42</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni43"></i>
          <span>icon-uni43</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni44"></i>
          <span>icon-uni44</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni45"></i>
          <span>icon-uni45</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni46"></i>
          <span>icon-uni46</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni47"></i>
          <span>icon-uni47</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni48"></i>
          <span>icon-uni48</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni49"></i>
          <span>icon-uni49</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni4A"></i>
          <span>icon-uni4A</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni4B"></i>
          <span>icon-uni4B</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni4C"></i>
          <span>icon-uni4C</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni4D"></i>
          <span>icon-uni4D</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni4E"></i>
          <span>icon-uni4E</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni4F"></i>
          <span>icon-uni4F</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni50"></i>
          <span>icon-uni50</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni51"></i>
          <span>icon-uni51</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni52"></i>
          <span>icon-uni52</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni53"></i>
          <span>icon-uni53</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni54"></i>
          <span>icon-uni54</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni55"></i>
          <span>icon-uni55</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni56"></i>
          <span>icon-uni56</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni57"></i>
          <span>icon-uni57</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni58"></i>
          <span>icon-uni58</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni59"></i>
          <span>icon-uni59</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni5A"></i>
          <span>icon-uni5A</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni5B"></i>
          <span>icon-uni5B</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni5C"></i>
          <span>icon-uni5C</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni5D"></i>
          <span>icon-uni5D</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni5E"></i>
          <span>icon-uni5E</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni5F"></i>
          <span>icon-uni5F</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni60"></i>
          <span>icon-uni60</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni61"></i>
          <span>icon-uni61</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni62"></i>
          <span>icon-uni62</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni63"></i>
          <span>icon-uni63</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni64"></i>
          <span>icon-uni64</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni65"></i>
          <span>icon-uni65</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni66"></i>
          <span>icon-uni66</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni67"></i>
          <span>icon-uni67</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni68"></i>
          <span>icon-uni68</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni69"></i>
          <span>icon-uni69</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni6A"></i>
          <span>icon-uni6A</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni6B"></i>
          <span>icon-uni6B</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni6C"></i>
          <span>icon-uni6C</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni6D"></i>
          <span>icon-uni6D</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni6E"></i>
          <span>icon-uni6E</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni6F"></i>
          <span>icon-uni6F</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni70"></i>
          <span>icon-uni70</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni71"></i>
          <span>icon-uni71</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni72"></i>
          <span>icon-uni72</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni73"></i>
          <span>icon-uni73</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni74"></i>
          <span>icon-uni74</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni75"></i>
          <span>icon-uni75</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni76"></i>
          <span>icon-uni76</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni77"></i>
          <span>icon-uni77</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni78"></i>
          <span>icon-uni78</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni79"></i>
          <span>icon-uni79</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni7A"></i>
          <span>icon-uni7A</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni7B"></i>
          <span>icon-uni7B</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni7C"></i>
          <span>icon-uni7C</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni7D"></i>
          <span>icon-uni7D</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uni7E"></i>
          <span>icon-uni7E</span>
        </c-col>
        <c-col sm="12" md="8" lg="6" xl="4">
          <i class="icon-uniA9"></i>
          <span>icon-uniA9</span>
        </c-col>
      </c-row>
    </c-panel>
  </c-main>
</template>

<style lang="scss">
.i-wrapper {
  position: relative;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  width: 40px;
  height: 40px;
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
}
.icons-container {
  > [class*='l-col'] {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    i {
      margin-right: 8px;
    }
  }
}
</style>
