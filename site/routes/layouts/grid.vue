<script>
export default {
  name: 'GridView'
};
</script>

<style lang="scss" scoped>
.brick {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: 34px;
  background-color: lighten(#7872ff, 15%);
  margin-bottom: 16px;
  &.x0 {
    height: auto;
  }
  &.x2 {
    height: 68px;
  }
  &.x3 {
    height: 102px;
  }
  &.x10 {
    height: 340px;
  }
}
</style>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Responsive">
      <c-row>
        <c-col xs="24" sm="6" md="4" lg="3" xl="2"><div class="brick"></div></c-col>
        <c-col xs="24" sm="12" md="16" lg="18" xl="20"><div class="brick"></div></c-col>
        <c-col xs="24" sm="6" md="4" lg="3" xl="2"><div class="brick"></div></c-col>
      </c-row>
      <c-row>
        <c-col xs="24" sm="6" md="4" lg="3" xl="2"><div class="brick"></div></c-col>
        <c-col xs="24" sm="18" md="20" lg="21" xl="22"><div class="brick"></div></c-col>
      </c-row>
      <c-row>
        <c-col xs="24" sm="12" md="16" lg="18" xl="20"><div class="brick"></div></c-col>
        <c-col xs="24" sm="12" md="8" lg="6" xl="4"><div class="brick"></div></c-col>
      </c-row>

      <p><strong>24-Grid</strong> layout component is based on flexbox. Try Using <code>span</code>, <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code> attributes to specify different column sizes in different vieport widths.</p>
      <% markdown %>
      ```html
      <c-row>
        <c-col xs="24" sm="6" md="4" lg="3" xl="2"></c-col>
        <c-col xs="24" sm="12" md="16" lg="18" xl="20"></c-col>
        <c-col xs="24" sm="6" md="4" lg="3" xl="2"></c-col>
      </c-row>
      <c-row>
        <c-col xs="24" sm="6" md="4" lg="3" xl="2"></c-col>
        <c-col xs="24" sm="18" md="20" lg="21" xl="22"></c-col>
      </c-row>
      <c-row>
        <c-col xs="24" sm="12" md="16" lg="18" xl="20"></c-col>
        <c-col xs="24" sm="12" md="8" lg="6" xl="4"></c-col>
      </c-row>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-panel title="Column Offset">
      <c-row>
        <c-col span="2" offset="22"><div class="brick"></div></c-col>
        <c-col xs="4" xs-offset="20"><div class="brick"></div></c-col>
        <c-col span="6" xs-offset="18"><div class="brick"></div></c-col>
        <c-col span="8" xs-offset="16"><div class="brick"></div></c-col>
        <c-col span="10" xs-offset="14"><div class="brick"></div></c-col>
        <c-col span="12" xs-offset="12"><div class="brick"></div></c-col>
        <c-col span="14" xs-offset="10"><div class="brick"></div></c-col>
        <c-col span="16" xs-offset="8"><div class="brick"></div></c-col>
        <c-col span="18" xs-offset="6"><div class="brick"></div></c-col>
        <c-col span="20" xs-offset="4"><div class="brick"></div></c-col>
        <c-col span="22" xs-offset="2"><div class="brick"></div></c-col>
      </c-row>

      <p>Create offset column by using <code>offset</code>, <code>xs-offset</code>, <code>sm-offset</code>, <code>md-offset</code>, <code>lg-offset</code>, <code>xl-offset</code> attrubutes.</p>
      <% markdown %>
      ```html
      <c-row>
        <c-col span="2" offset="22"></c-col>
        <c-col xs="4" xs-offset="20"></c-col>
        <c-col span="6" xs-offset="18"></c-col>
        <c-col span="8" xs-offset="16"></c-col>
        <c-col span="10" xs-offset="14"></c-col>
        <c-col span="12" xs-offset="12"></c-col>
        <c-col span="14" xs-offset="10"></c-col>
        <c-col span="16" xs-offset="8"></c-col>
        <c-col span="18" xs-offset="6"></c-col>
        <c-col span="20" xs-offset="4"></c-col>
        <c-col span="22" xs-offset="2"></c-col>
      </c-row>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-panel title="Auto Width">
      <c-row>
        <c-col span="24" md><div class="brick"></div></c-col>
        <c-col span="24" md><div class="brick"></div></c-col>
      </c-row>
      <c-row>
        <c-col lg="6" xl><div class="brick"></div></c-col>
        <c-col lg="12" xl><div class="brick"></div></c-col>
        <c-col lg="6" xl><div class="brick"></div></c-col>
      </c-row>
      <c-row>
        <c-col md="2"><div class="brick"></div></c-col>
        <c-col md="4"><div class="brick"></div></c-col>
        <c-col md><div class="brick"></div></c-col>
      </c-row>

      <p>If you add any size attribute without value, then at that specify viewport width, the column will equally fill space left.</p>
      <% markdown %>
      ```html
      <c-row>
        <c-col span="24" md></c-col>
        <c-col span="24" md></c-col>
      </c-row>
      <c-row>
        <c-col lg="6" xl></c-col>
        <c-col lg="12" xl></c-col>
        <c-col lg="6" xl></c-col>
      </c-row>
      <c-row>
        <c-col md="2"></c-col>
        <c-col md="4"></c-col>
        <c-col md></c-col>
      </c-row>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-panel title="Alignment">
      <c-row align="top">
        <c-col><div class="brick"></div></c-col>
        <c-col><div class="brick x3"></div></c-col>
        <c-col><div class="brick x2"></div></c-col>
      </c-row>
      <c-row align="middle">
        <c-col><div class="brick"></div></c-col>
        <c-col><div class="brick x3"></div></c-col>
        <c-col><div class="brick x2"></div></c-col>
      </c-row>
      <c-row align="bottom">
        <c-col><div class="brick"></div></c-col>
        <c-col><div class="brick x3"></div></c-col>
        <c-col><div class="brick x2"></div></c-col>
      </c-row>

      <p>Set columns vertical align with <code>align</code> attribute on <strong>Row</strong> component.</p>
      <% markdown %>
      ```html
      <c-row align="top">
        <c-col></c-col>
        <c-col></c-col>
        <c-col></c-col>
      </c-row>
      <c-row align="middle">
        <c-col></c-col>
        <c-col></c-col>
        <c-col></c-col>
      </c-row>
      <c-row align="bottom">
        <c-col></c-col>
        <c-col></c-col>
        <c-col></c-col>
      </c-row>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-panel title="Justify">
      <c-row justify="start">
        <c-col md="3"><div class="brick"></div></c-col>
        <c-col md="3"><div class="brick"></div></c-col>
        <c-col md="3"><div class="brick"></div></c-col>
      </c-row>
      <c-row justify="center">
        <c-col md="3"><div class="brick"></div></c-col>
        <c-col md="3"><div class="brick"></div></c-col>
        <c-col md="3"><div class="brick"></div></c-col>
      </c-row>
      <c-row justify="end">
        <c-col md="3"><div class="brick"></div></c-col>
        <c-col md="3"><div class="brick"></div></c-col>
        <c-col md="3"><div class="brick"></div></c-col>
      </c-row>
      <c-row justify="between">
        <c-col md="3"><div class="brick"></div></c-col>
        <c-col md="3"><div class="brick"></div></c-col>
        <c-col md="3"><div class="brick"></div></c-col>
      </c-row>
      <c-row justify="around">
        <c-col md="3"><div class="brick"></div></c-col>
        <c-col md="3"><div class="brick"></div></c-col>
        <c-col md="3"><div class="brick"></div></c-col>
      </c-row>

      <p>Horizontal arrangement of <strong>Grid</strong> component by using <code>justify</code> attribute.</p>
      <% markdown %>
      ```html
      <c-row justify="start">
        <c-col md="3"></c-col>
        <c-col md="3"></c-col>
        <c-col md="3"></c-col>
      </c-row>
      <c-row justify="center">
        <c-col md="3"></c-col>
        <c-col md="3"></c-col>
        <c-col md="3"></c-col>
      </c-row>
      <c-row justify="end">
        <c-col md="3"></c-col>
        <c-col md="3"></c-col>
        <c-col md="3"></c-col>
      </c-row>
      <c-row justify="between">
        <c-col md="3"></c-col>
        <c-col md="3"></c-col>
        <c-col md="3"></c-col>
      </c-row>
      <c-row justify="around">
        <c-col md="3"></c-col>
        <c-col md="3"></c-col>
        <c-col md="3"></c-col>
      </c-row>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-panel title="Sort Order">
      <c-row>
        <c-col order="3"><div class="brick">1</div></c-col>
        <c-col order="4"><div class="brick">2</div></c-col>
        <c-col order="2"><div class="brick">3</div></c-col>
        <c-col order="1"><div class="brick">4</div></c-col>
      </c-row>

      <p>Sort columns by using <code>order</code> attribute.</p>
      <% markdown %>
      ```html
      <c-row>
        <c-col order="3"></c-col>
        <c-col order="4"></c-col>
        <c-col order="2"></c-col>
        <c-col order="1"></c-col>
      </c-row>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-panel title="Card Layout">
      <c-row card>
        <c-col md="4">
          <div class="brick u-flex-0">fixed height x1</div>
          <div class="brick x2 u-flex-0">fixed height x2</div>
          <div class="brick x0">auto height</div>
        </c-col>
        <c-col md="4">
          <div class="brick x0">auto height</div>
        </c-col>
        <c-col md="6">
          <div class="brick x0">auto height</div>
          <div class="brick x0">auto height</div>
        </c-col>
        <c-col md="10"><div class="brick x10">fixed height x10</div></c-col>
      </c-row>

      <p>Card-Grid layout is awesome, you can archive this by adding <code>card</code> attribute
      on <strong>Row</strong> component, then all column's children will stretch its height to match
      its parent. If you want to prevent some children from stretching, you can add <code>.u-flex-0</code>
      class on it to set its <code>flex</code> property.</p>
      <% markdown %>
      ```html
      <c-row card>
        <c-col md="4">
          <div class="brick u-flex-0">fixed height x1</div>
          <div class="brick x2 u-flex-0">fixed height x2</div>
          <div class="brick x0">auto height</div>
        </c-col>
        <c-col md="4">
          <div class="brick x0">auto height</div>
        </c-col>
        <c-col md="6">
          <div class="brick x0">auto height</div>
          <div class="brick x0">auto height</div>
        </c-col>
        <c-col md="10"><div class="brick x10">fixed height x10</div></c-col>
      </c-row>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-panel title="Gutter Size">
      <c-row gutter="100">
        <c-col><div class="brick"></div></c-col>
        <c-col><div class="brick"></div></c-col>
        <c-col><div class="brick"></div></c-col>
      </c-row>

      <p>The default gutter of column is <code>16px</code>, you can chang it by setting
      the value of <code>gutter</code> attribute on <strong>Row</strong> component.</p>
      <% markdown %>
      ```html
      <c-row gutter="100">
        <c-col><div class="brick"></div></c-col>
        <c-col><div class="brick"></div></c-col>
        <c-col><div class="brick"></div></c-col>
      </c-row>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-panel title="API">
      <table class="table table--bordered table--stress">
        <caption>Row</caption>
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
            <th>align</th>
            <td>the vertical alignment of the flex layout: <code>top</code>, <code>middle</code>, <code>bottom</code></td>
            <td>string</td>
            <td><code>top</code></td>
          </tr>
          <tr>
            <th>justify</th>
            <td>the horizontal alignment of the flex layout: <code>start</code>, <code>center</code>, <code>end</code>, <code>around</code>, <code>between</code></td>
            <td>string</td>
            <td><code>start</code></td>
          </tr>
          <tr>
            <th>gutter</th>
            <td>space between columns</td>
            <td>string|number</td>
            <td>16</td>
          </tr>
          <tr>
            <th>card</th>
            <td>whether create card-grid layout.</td>
            <td>boolean</td>
            <td>true</td>
          </tr>
        </tbody>
      </table>

      <table class="table table--bordered table--stress">
        <caption>Col</caption>
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
            <th>order</th>
            <td>raster order, used in flex layout mode</td>
            <td>string|number</td>
            <td>-</td>
          </tr>
          <tr>
            <th>span</th>
            <td>raster number of cells to occupy, range from <code>1</code> to <code>24</code></td>
            <td>string|number</td>
            <td>-</td>
          </tr>
          <tr>
            <th>xs</th>
            <td><code>&gt;0</code> alias of <code>span</code> prop, could be a <code>span</code> value</td>
            <td>string|number</td>
            <td>-</td>
          </tr>
          <tr>
            <th>sm</th>
            <td><code>&ge;600</code> could be a <code>span</code> value</td>
            <td>string|number</td>
            <td>-</td>
          </tr>
          <tr>
            <th>md</th>
            <td><code>&ge;900</code> could be a <code>span</code> value</td>
            <td>string|number</td>
            <td>-</td>
          </tr>
          <tr>
            <th>lg</th>
            <td><code>&ge;1200</code> could be a <code>span</code> value</td>
            <td>string|number</td>
            <td>-</td>
          </tr>
          <tr>
            <th>xl</th>
            <td><code>&ge;1600</code> could be a <code>span</code> value</td>
            <td>string|number</td>
            <td>-</td>
          </tr>
          <tr>
            <th>offset</th>
            <td>the number of cells to offset Col from the left, could be a <code>span</code> value</td>
            <td>string|number</td>
            <td>0</td>
          </tr>
          <tr>
            <th>offset-xs</th>
            <td><code>&ge;0</code> alias of <code>offset</code>, the number of cells to offset Col from the left, could be a <code>span</code> value</td>
            <td>string|number</td>
            <td>0</td>
          </tr>
          <tr>
            <th>offset-sm</th>
            <td><code>&ge;600</code> the number of cells to offset Col from the left, could be a <code>span</code> value</td>
            <td>string|number</td>
            <td>0</td>
          </tr>
          <tr>
            <th>offset-md</th>
            <td><code>&ge;900</code> the number of cells to offset Col from the left, could be a <code>span</code> value</td>
            <td>string|number</td>
            <td>0</td>
          </tr>
          <tr>
            <th>offset-lg</th>
            <td><code>&ge;1200</code> the number of cells to offset Col from the left, could be a <code>span</code> value</td>
            <td>string|number</td>
            <td>0</td>
          </tr>
          <tr>
            <th>offset-xl</th>
            <td><code>&ge;1600</code> the number of cells to offset Col from the left, could be a <code>span</code> value</td>
            <td>string|number</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </c-panel>
  </c-main>
</template>
