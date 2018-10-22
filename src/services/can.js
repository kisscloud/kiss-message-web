exports.install = function (Vue, options) {
  Vue.prototype.can = function (permission) {
    if (permission === "pages@roles") {
      return true;
    }
    return false;
  };
};
