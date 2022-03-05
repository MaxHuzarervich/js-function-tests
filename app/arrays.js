exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum: function (arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove: function (arr, item) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++){
      if (arr[i] !== item){
        newArray.push(arr[i]);
      }
    }
    return newArray;
  },

  removeWithoutCopy: function (arr, item) {
    for (var i = 0; i < arr.length; i++){
      if (arr[i] === item){
        arr.splice(i, 1);
        i--;
        arr.length--;
      }
    }
    return arr;
  },

  append: function (arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function (arr) {
    arr.pop();
    return arr;
  },

  prepend: function (arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function (arr) {
    arr.shift();
    return arr;
  },

  concat: function (arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function (arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function (arr, item) {
    var arrayItem = [];
    for (var i = 0; i < arr.length; i++){
      if (arr[i] === item){
        arrayItem.push(arr[i]);
      }
    }
    return arrayItem.length;
  },

  duplicates: function (arr) {
    var newObj = {};
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
      newObj[arr[i]] = newObj[arr[i]] ? newObj[arr[i]] + 1 : 1;
    }

    for (var item in newObj) {
      if (newObj.hasOwnProperty(item) && newObj[item] > 1) {
        newArr.push(Number(item));
      }
    }

    return newArr;
  },

  square: function (arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
      newArr.push(arr[i] * arr[i]);
    }
    return newArr;
  },

  findAllOccurrences: function (arr, target) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
      if (arr[i] === target){
        newArr.push(i);
      }
    }
    return newArr;
  }
};
