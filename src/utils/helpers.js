const nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/;

export const mergeData = (...sources) => {
  return sources.reduce((a, b) => {
    let aa, bb, key, nestedKey, temp;
    for (key in b) {
      aa = a[key];
      bb = b[key];
      if (aa && nestRE.test(key)) {
        // normalize class
        if (key === 'class') {
          if (typeof aa === 'string') {
            temp = aa;
            a[key] = aa = {};
            aa[temp] = true;
          }
          if (typeof bb === 'string') {
            temp = bb;
            b[key] = bb = {};
            bb[temp] = true;
          }
        }
        if (key === 'on' || key === 'nativeOn' || key === 'hook') {
          // merge functions
          for (nestedKey in bb) {
            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey]);
          }
        } else if (Array.isArray(aa)) {
          a[key] = aa.concat(bb);
        } else if (Array.isArray(bb)) {
          a[key] = [aa].concat(bb);
        } else {
          for (nestedKey in bb) {
            aa[nestedKey] = bb[nestedKey];
          }
        }
      } else if (key === 'staticClass') {
        a[key] = a[key] ? `${a[key]} ${b[key]}` : b[key];
      } else {
        a[key] = b[key];
      }
    }
    return a;
  }, {});
};

const mergeFn = (a, b) => {
  return function() {
    a && a.apply(this, arguments);
    b && b.apply(this, arguments);
  };
};

export const filterColor = color => {
  switch (color) {
    case 'primary':
      return '#7872ff';
    case 'info':
      return '#2196f3';
    case 'success':
      return '#4caf50';
    case 'danger':
      return '#f44336';
    case 'warning':
      return '#ff9800';
    default:
      return color;
  }
};

export const range = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};
