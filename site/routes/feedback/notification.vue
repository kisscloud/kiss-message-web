<script>
export default {
  name: 'NotificationView',
  data() {
    return {
      type: 'success',
      title: 'Operation Feedback',
      content:
        'You have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist.',
      closeable: true,
      duration: 5000
    };
  },
  methods: {
    add() {
      this.$notify({
        type: this.type,
        title: this.title,
        content: this.content,
        closeable: this.closeable,
        duration: this.duration
      });
    }
  }
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Notify">
      <c-row gutter="20">
        <c-col md="12">
          <c-form-field title="Type">
            <c-form-select
              v-model="type"
              :options="[
                {value: 'success', label: 'success'},
                {value: 'info', label: 'info'},
                {value: 'danger', label: 'danger'},
              ]"
            ></c-form-select>
          </c-form-field>
          <c-form-field label="Title">
            <c-form-input v-model="title"></c-form-input>
          </c-form-field>
          <c-form-field label="Content">
            <c-form-textarea v-model="content"></c-form-textarea>
          </c-form-field>
          <c-form-field label="Duration">
            <c-form-input type="number" v-model="duration"></c-form-input>
          </c-form-field>
          <c-form-field>
            <c-form-checkbox v-model="closeable" label="Closeable"></c-form-checkbox>
          </c-form-field>
          <c-button type="primary" @click="add" smart>Try It</c-button>
        </c-col>
        <c-col md="12">
          <p>Dynamicly display a notification message globally.</p>
          <% markdown %>
          ```html
          <script>
            export default {
              methods: {
                add () {
                  this.$notify({
                    type: 'success',
                    title: 'Notification',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, placeat!',
                    closeable: true,
                    duration: 5000
                  })
                }
              }
            }
          </script>
          ```
          <% endmarkdown %>
        </c-col>
      </c-row>
    </c-panel>

    <c-panel title="API">
      <table class="table table--bordered table--stress">
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
            <th>title</th>
            <td>the title of notification</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <th>content</th>
            <td>the content message of notification</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <th>type</th>
            <td>icon type of notification, can be set to <code>success</code>, <code>danger</code>, <code>info</code></td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <th>closeable</th>
            <td>whether to show close button</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <th>duration</th>
            <td>time duration before auto dismiss in millisecond</td>
            <td>Number</td>
            <td>1000</td>
          </tr>
        </tbody>
      </table>
    </c-panel>

  </c-main>
</template>
