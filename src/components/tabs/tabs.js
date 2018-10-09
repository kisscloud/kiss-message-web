export default {
  name: 'c-tabs',

  props: {
    activeName: {
      type: String
    },
    type: {
      type: String,
      default: 'tabs'
    },
    size: {
      type: String
    }
  },

  data() {
    return {
      currentName: '',
      panes: []
    };
  },

  watch: {
    activeName(val) {
      this.currentName = val;
    }
  },

  mounted() {
    this.currentName = this.activeName || this.panes[0].name;
  },

  methods: {
    handleTabClick(pane) {
      if (pane.disabled) return;
      this.currentName = pane.name;
    },
    addPane(pane) {
      this.panes.push(pane);
    }
  },

  render(h) {
    return (
      <div class="tabs">
        <c-nav class="tabs__nav" size={this.size} type={this.type || 'tabs'}>
          {this.panes.map(pane => (
            <c-nav-item
              active={pane.isActive}
              disabled={pane.disabled}
              onClick={e => this.handleTabClick(pane)}
              title={pane.label}
            />
          ))}
        </c-nav>
        <div class="tabs__content">{this.$slots.default}</div>
      </div>
    );
  }
};
