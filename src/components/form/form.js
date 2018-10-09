import { mergeData } from '../../utils/helpers';

export default {
  name: 'c-form',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'form'
    },
    layout: {
      type: String
    },
    span: {
      type: [String, Number],
      default: 220
    }
  },
  render(h, { props, data, slots }) {
    const wrapperClass = {
      'form-inline': props.layout === 'inline',
      'form-horizontal': props.layout === 'horizontal'
    };

    let children = [];

    // horizontal layout
    if (props.layout === 'horizontal') {
      const labelWidth = parseFloat(props.span);
      children = slots().default.reduce((fieldset, field) => {
        if (field.fnOptions && field.fnOptions.name === 'c-form-field') {
          let labelChild;
          let contentChildren = field.children.reduce((a, b) => {
            if (b.data && b.data['class'] === 'form-label') {
              labelChild = b;
            } else {
              a.push(b);
            }
            return a;
          }, []);

          fieldset.push(
            <div class="form-field" {...field.data}>
              <div class="l-row">
                <div class="form-field__start" style={{ width: labelWidth + 'px' }}>
                  {labelChild}
                </div>
                <div class="l-col@md">{contentChildren}</div>
              </div>
            </div>
          );
        } else {
          fieldset.push(field);
        }
        return fieldset;
      }, []);
    } else {
      children = slots().default;
    }

    return h(
      props.tag,
      mergeData(
        {
          class: wrapperClass
        },
        data
      ),
      children
    );
  }
};
