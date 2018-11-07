// 解决IE9以下不支持 Array.isArray
if (!Array.prototype.isArray) {
  Array.prototype.isArray = function (arr) {
    return (Object.prototype.toString.call(arr) === '[object Array]');
  };
};
