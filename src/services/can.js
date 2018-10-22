exports.install = function (Vue, options) {
  Vue.prototype.can = function (permission) {
    if (permission === "page@dashboard") {
      return true;
    }
    return false;
  };
};
