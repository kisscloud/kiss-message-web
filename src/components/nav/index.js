import { mergeData } from '../../utils/helpers';

export const NavItem = {
  name: 'c-nav-item',
  functional: true,
  props: {
    title: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  render(h, { props, data, children }) {
    const itemCls = ['nav__item'];
    const linkCls = ['nav__link'];
    const { staticClass, class: wrapperCls, ...rest } = data;

    if (staticClass) {
      itemCls.push(staticClass);
    }

    if (props.active) {
      linkCls.push('is-active');
    }

    return h(
      'li',
      {
        staticClass: itemCls,
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
          [props.title]
        ),
        children
      ]
    );
  }
};

export const Nav = {
  name: 'c-nav',
  functional: true,
  props: {
    type: {
      type: String
    },
    line: {
      type: String
    },
    size: {
      type: String
    }
  },
  render(h, { props, data, children }) {
    const cls = ['nav'];

    // type modifier
    if (props.type) {
      cls.push(`nav--${props.type}`);
    }

    // line modifier
    if (props.line) {
      cls.push(`nav--line-${props.line}`);
    }

    // size modifier
    if (props.size) {
      cls.push(`nav--${props.size}`);
    }

    return h(
      'ul',
      mergeData(
        {
          staticClass: cls.join(' ')
        },
        data
      ),
      children
    );
  }
};
