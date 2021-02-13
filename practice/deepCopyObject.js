// const deepCopyPureObject = (object, retObject) => {
//   return Object.keys(object).reduce((acc, key) => {
//     const value = object[key];
//     if(Array.isArray(value)) {
//       acc[key] = value.map(item => {
//         return deepCopyPureObject(item, {});
//       });
//     }
//     else if(typeof value === 'object') {
//       acc[key] = deepCopyPureObject(value, {});
//     }
//     else {
//       acc[key] = value;
//     }

//     return acc;
//   }, retObject);
// }

const deepCopy = (value, retObject = {}) => {
  if (Array.isArray(value)) {
    retObject = value.map(item => {
      return deepCopy(item, {});
    });
  } else if (typeof value === "object") {
    Object.keys(value).forEach(key => {
      retObject[key] = deepCopy(value[key] ? value[key] : {}, {});
    });
  } else {
    return value;
  }
  return retObject;
};

const test = {
  a: {
    a: {
      b: {
        c: {
          d: 12
        }
      }
    },
    b: {
      c: [
        {
          a: 123
        },
        {
          a: 123
        },
        {
          a: 123
        }
      ]
    }
  },
  c: 1
}

// console.time('test');
// for(let i = 0; i < 1000000; i++) {
//   const result = deepCopyPureObject(test, {});
// }
// console.timeEnd('test');

// const result = JSON.parse(JSON.stringify(test));

const result = deepCopy(test, {});
console.log(JSON.stringify(result, null, "    "));