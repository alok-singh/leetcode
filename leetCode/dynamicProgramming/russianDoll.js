/**
 * @param {number[][]} envelopes
 * @return {number}
 */
const maxEnvelopes = envelopes => {
  if(envelopes.length === 0) {
    return 0;
  }
  if(envelopes.length === 1) {
    return 1;
  }
  const hashMap = envelopes.reduce((acc, item) => {
    acc[`${item[0]}-${item[1]}`] = envelopes.filter(innerItem => innerItem[0] < item[0] && innerItem[1] < item[1]);
    return acc;
  }, {});

};