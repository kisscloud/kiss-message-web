<script>
export default {
  name: 'TabsView',
  data() {
    return {
      type: '',
      size: '',
      types: [
        { value: '', label: 'Default' },
        { value: 'pills', label: 'Pills' },
        { value: 'dot', label: 'Dot' },
        { value: 'gap', label: 'Gap' },
        { value: 'underline', label: 'Underline' }
      ],
      sizes: [{ value: '', label: 'Default' }, { value: 'sm', label: 'Small' }, { value: 'lg', label: 'Large' }]
    };
  }
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Basic">
      <c-row gutter="20">
        <c-col md="16">
          <c-tabs :type="type" :size="size">
            <c-tabs-pane label="First" name="first">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia est recusandae unde distinctio tenetur accusantium hic dolores debitis? Exercitationem vero delectus mollitia atque quam nisi, officia recusandae magni iste labore est, repudiandae iusto corrupti laudantium, minima facilis. Et autem, vel odit, ex aliquid facere, repellat sint sapiente dolores odio est debitis eos perferendis aliquam nisi animi tenetur. Odio labore repellat dolorem facere dolorum, adipisci perspiciatis iste, ab ipsum a neque veritatis voluptatibus enim rem corporis, qui delectus placeat facilis dolores pariatur incidunt sed. Omnis dolorem aspernatur odit velit eaque eos, quisquam non animi doloremque iusto. Nisi nobis totam tempora voluptate iusto, vel sit delectus maiores esse qui nesciunt at magnam voluptatem et quidem accusantium ducimus, quam molestiae asperiores nam veniam. Rerum optio esse, error tempore nulla sunt numquam saepe minima dolorem vitae aperiam alias consequatur! Temporibus ut, ad totam doloremque iusto magnam voluptates reprehenderit veritatis hic sapiente quasi natus aspernatur ullam laudantium libero vitae rem error magni fuga sequi repellendus nobis fugit aliquam. Natus, corporis et enim necessitatibus aut dolor saepe minus, perferendis delectus expedita magnam optio sequi aliquid, ipsam dolorem sunt exercitationem laboriosam deleniti laudantium cum vero modi nulla? Consectetur voluptates ullam eligendi ipsam corporis, illo dignissimos reprehenderit vel.
            </c-tabs-pane>
            <c-tabs-pane label="Second" name="second">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, rem ut! Eveniet rerum eius illo sed unde corporis asperiores assumenda excepturi voluptatibus autem, aliquid commodi accusantium voluptas est error consequatur doloremque porro vel. Facilis esse molestiae qui nulla quia ab. Cumque nesciunt non excepturi qui, nemo eius voluptatibus accusantium, ratione, quo sit in reprehenderit sapiente quam! Doloremque doloribus, exercitationem commodi animi beatae asperiores iste. Aliquid nihil delectus eligendi ipsam consequatur ab vel. Quaerat laudantium eaque tenetur laborum. Doloribus ut quam quia velit, sequi autem harum a sed doloremque cupiditate possimus est, quas praesentium maiores sunt? Corporis cum unde dolorem iure!
            </c-tabs-pane>
            <c-tabs-pane label="Disabled" disabled name="third">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, necessitatibus harum sapiente quo voluptate nobis odio debitis, consequatur ipsum perferendis rem a sint dicta itaque. Et deserunt veritatis quod. Ratione veritatis consectetur iusto hic ullam. Harum quia omnis qui laborum dolores aliquam quo blanditiis ea expedita dolore esse voluptatum laboriosam iure, beatae maxime eos suscipit. Maxime saepe animi, aperiam quasi at iure aut quo sequi, laudantium corporis nulla, nihil sunt et quae recusandae corrupti ex? Quaerat eius, nihil earum corporis dicta facere, nobis sit obcaecati nulla rerum eos nemo molestias sapiente animi velit numquam? Iste dicta aspernatur esse laudantium dignissimos?
            </c-tabs-pane>
          </c-tabs>
        </c-col>
        <c-col>
          <p>
            <strong>Tabs</strong> provide an easy way to switch between different views.
          </p>
          <c-form-field label="Type">
            <c-form-select
              v-model="type"
              :options="types"
            ></c-form-select>
          </c-form-field>
          <c-form-field label="Size">
            <c-form-select
              v-model="size"
              :options="sizes"
            ></c-form-select>
          </c-form-field>
        </c-col>
      </c-row>

      <hr />

      <% markdown %>
      ```html
      <c-tabs type="underline" size="lg">
        <c-tabs-pane label="First" name="first">
          ...
        </c-tabs-pane>
        <c-tabs-pane label="Second" name="second">
          ...
        </c-tabs-pane>
        <c-tabs-pane label="Disabled" disabled name="third">
          ...
        </c-tabs-pane>
      </c-tabs>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-panel title="API">
      <h3><code class="u-fs-18">c-tabs</code></h3>
      <table class="table table--bordered table--stress">
        <caption>Attributes</caption>
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
            <th>active-name</th>
            <td>the name of current active tab</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <th>type</th>
            <td>can be set to <code>pills</code>, <code>dot</code>, <code>gap</code>, <code>underline</code></td>
            <td>String</td>
            <td>tabs</td>
          </tr>
          <tr>
            <th>size</th>
            <td>control the size of navigation, can be set to <code>sm</code> or <code>lg</code></td>
            <td>String</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <table class="table table--bordered table--stress">
        <caption>Events</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Arguments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>change</th>
            <td>When user click tabs nav item which result in pane switch.</td>
            <td>
              <ul class="u-mb-0">
                <li>
                  <code>name</code> - actived tabpane name
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <hr>
      <h3><code class="u-fs-18">c-tabs-pane</code></h3>
      <table class="table table--bordered table--stress">
        <caption>Attributes</caption>
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
            <td>unique name for tabpane</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <th>label</th>
            <td>used as tab navigation item text.</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <th>disabled</th>
            <td>whether disable current tabpane.</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
    </c-panel>
  </c-main>
</template>
