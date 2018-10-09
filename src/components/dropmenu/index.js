import { mergeData } from '../../utils/helpers';

export const Dropmenu = {
  name: 'c-dropmenu',
  functional: true,
  render(h, { props, data, children }) {
    return h(
      'ul',
      mergeData(
        {
          staticClass: 'dropmenu'
        },
        data
      ),
      children
    );
  }
};

export const DropmenuDivider = {
  name: 'c-dropmenu-divider',
  functional: true,
  render(h, { props, data }) {
    return h(
      'li',
      mergeData(
        {
          staticClass: 'dropmenu__divider'
        },
        data
      ),
      []
    );
  }
};

export const DropmenuItem = {
  name: 'c-dropmenu-item',
  functional: true,
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String
    },
    after: {
      type: String
    },
    active: {
      type: Boolean,
      default: false
    },
    hasChildren: {
      type: Boolean,
      default: false
    }
  },
  render(h, { props, data, slots }) {
    const itemCls = ['dropmenu__item'];
    const linkCls = ['dropmenu__link'];
    const children = [];
    const iconChild = slots().icon;
    const afterChild = slots().after;

    const { staticClass, class: wrapperCls, ...rest } = data;
    if (staticClass) {
      itemCls.push(staticClass);
    }

    if (props.hasChildren) {
      itemCls.push('has-children');
    }

    if (props.active) {
      linkCls.push('is-active');
    }

    if (props.icon) {
      children.push(
        <span class="dropmenu__icon">
          <i class={props.icon} />
        </span>
      );
    } else if (iconChild) {
      children.push(<span class="dropmenu__icon">{iconChild}</span>);
    }

    if (props.title) {
      children.push(<div class="dropmenu__text">{props.title}</div>);
    }

    if (props.after) {
      children.push(<span class="dropmenu__after">{props.after}</span>);
    } else if (afterChild) {
      children.push(<span class="dropmenu__after">{afterChild}</span>);
    }

    return h(
      'li',
      {
        staticClass: itemCls.join(' '),
        class: wrapperCls
      },
      [
        h(
          'a',
          mergeData(
            {
              staticClass: linkCls.join(' ')
            },
            rest
          ),
          children
        )
      ]
    );
  }
};
