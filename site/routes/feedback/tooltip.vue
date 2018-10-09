<script>
export default {
  name: 'TooltipView'
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-row>
      <c-col md="12">
        <c-panel title="Basic">
          <div class="u-p-30 u-text-center">
            <c-button type="primary" smart v-tooltip="'Hello, Tooltip'">Hover Me</c-button>
          </div>
          <hr />

          <p>Be careful of the <strong>single quotes</strong> inside the <strong>double quote</strong>, the value of directive is just like other bind props, should be a primitive data type.</p>
          <% markdown %>
          ```html
          <c-button v-tooltip="'Hello, Tooltip!'">Hover Me</c-button>
          ```
          <% endmarkdown %>
        </c-panel>
      </c-col>

      <c-col md="12">
        <c-panel title="Offset">
          <div class="u-p-30 u-text-center">
            <c-button type="primary" smart v-tooltip:32.top="'Far far away...'">Hover Me</c-button>
          </div>
          <hr />

          <p>By adding numeric arg to the directive to change tooltip offset.</p>
          <% markdown %>
          ```html
          <c-button type="primary" smart v-tooltip:32.top="'Far far away...'">Hover Me</c-button>
          ```
          <% endmarkdown %>
        </c-panel>
      </c-col>

      <c-col md="12">
        <c-panel title="Placement">
          <div class="u-p-30 u-text-center">
            <c-level>
              <c-button type="primary" smart v-tooltip.left="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nam.'">Left</c-button>
              <c-button type="primary" smart v-tooltip.right="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nam.'">Right</c-button>
              <c-button type="primary" smart v-tooltip.top-start="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nam.'">Top Start</c-button>
              <c-button type="primary" smart v-tooltip.bottom-end="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nam.'">Bottom End</c-button>
            </c-level>
          </div>
          <hr />

          <p>By adding position modifer to the directive to change tooltip placement. 12 different positions are available: <code>top(-start, -end)</code>, <code>right(-start, -end)</code>, <code>bottom(-start, -end)</code>, <code>left(-start, -end)</code>.</p>
          <% markdown %>
          ```html
          <c-button type="primary" smart v-tooltip.left="'...'">Left</c-button>
          <c-button type="primary" smart v-tooltip.right="'...'">Right</c-button>
          <c-button type="primary" smart v-tooltip.top-start="'...'">Top Start</c-button>
          <c-button type="primary" smart v-tooltip.bottom-end="'...'">Bottom End</c-button>
          ```
          <% endmarkdown %>
        </c-panel>
      </c-col>

      <c-col md="12">
        <c-panel title="Trigger">
          <div class="u-p-30 u-text-center">
            <c-level>
              <c-button type="primary" smart v-tooltip.hover="'Hello, Tooltip!'">Hover Me</c-button>
              <c-button type="primary" smart v-tooltip.click="'Hello, Tooltip!'">Click Me</c-button>
              <c-form-input style="width: 220px;" v-tooltip.focus.top-start="'Hello, Tooltip!'" placeholder="Try focusing on me"></c-form-input>
            </c-level>
          </div>
          <hr />

          <p>By adding trigger modifier to the directive to set how tooltip should show/hide. Available triggers: <code>hover</code>, <code>click</code>, <code>focus</code>.</p>
          <% markdown %>
          ```html
          <c-button type="primary" smart v-tooltip.hover="'Hello, Tooltip!'">Hover Me</c-button>
          <c-button type="primary" smart v-tooltip.click="'Hello, Tooltip!'">Click Me</c-button>
          <c-form-input v-tooltip.focus.top-start="'Hello, Tooltip!'" placeholder="Try focusing on me" />
          ```
          <% endmarkdown %>
        </c-panel>
      </c-col>

    </c-row>
  </c-main>
</template>
