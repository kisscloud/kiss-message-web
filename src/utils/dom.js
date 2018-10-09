// get all siblings of an element
export function siblings(el, cb) {
  const siblings = [];
  let _el = el.parentNode.firstChild;
  do {
    if (_el.nodeType === 1 && _el !== el) {
      siblings.push(_el);
      cb(_el);
    }
  } while ((_el = _el.nextSibling));
  return siblings;
}
