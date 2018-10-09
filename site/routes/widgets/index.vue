<template>
  <c-main>
    <c-note type="warning" class="u-mb-15">
      All widgets are built with UI Blocks and Utility classes, without any redundant css code.
    </c-note>

    <c-panel title="Statistic Widgets" type="ghost">
      <statistic-widgets />
    </c-panel>

    <c-panel title="Info Widgets" type="ghost">
      <info-widgets />
    </c-panel>

    <c-panel title="Data Widgets" type="ghost">
      <data-widgets />
    </c-panel>

    <c-panel title="Popup Widgets" type="ghost">
      <popup-widgets />
    </c-panel>

  </c-main>
</template>

<script>
import StatisticWidgets from './statistic.vue';
import InfoWidgets from './info.vue';
import DataWidgets from './data.vue';
import PopupWidgets from './popup.vue';

export default {
  name: 'WidgetsView',
  components: {
    StatisticWidgets,
    InfoWidgets,
    DataWidgets,
    PopupWidgets
  }
};
</script>
