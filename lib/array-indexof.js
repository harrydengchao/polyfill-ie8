// 解决IE9以下不支持 Array.indexOf
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchvalue) {
    for (var i = 0, len = this.length; i < len; i++) {
      if (this[i] === searchvalue) {
        return i;
      }
    }
    return -1;
  };
};
