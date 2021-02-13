const request = require('request');

const flattenObject = (value, retObject, keyInitials) => {
  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      flattenObject(
        item,
        retObject,
        keyInitials ? `${keyInitials}.${index}` : `${index}`
      );
    });
  } else if (typeof value === "object") {
    Object.keys(value).forEach(key => {
      flattenObject(
        value[key] ? value[key] : {}, // handle typeof null === object
        retObject,
        keyInitials ? `${keyInitials}.${key}` : key
      );
    });
  } else {
    retObject[keyInitials] = value;
  }
  return retObject;
};

const makeRequest = (options) => {
  return new Promise((resolve, reject) => {
    request(options, (error, response) => {
      if (error) {
        console.log('fail');
        console.log(options);
        resolve('');
      } else {
        console.log('success');
        resolve(response);  
      }
    });
  });
};

const main = async () => {
  
  let count = 0;
  
  const urlStaging = 'https://digital-fortress-dev.eco.astro.com.my/dev/config/lE2v10BxYn/config.json';
  const urlProduction = 'https://digital-fortress-assets.eco.astro.com.my/prod/config/rdWvEMv3G1/config.json';
  
  const optionsStaging = { method: "GET", url: urlStaging };
  const optionsProduction = { method: "GET", url: urlProduction };
  const [staging, production] = await Promise.all([makeRequest(optionsStaging), makeRequest(optionsProduction)]);
  
  const flatStaging = flattenObject(JSON.parse(staging.body), {}, "");
  const flatProduction = flattenObject(JSON.parse(production.body), {}, "");
  
  Object.keys(flatProduction).forEach(key => {
    if(!flatStaging[key] 
      // && key.indexOf('railWidgets') === -1
      // && key.indexOf('advertisement') === -1
      // && key.indexOf('pageBreakers') === -1
    ) {
      count++;
      console.log(key, flatProduction[key], flatStaging[key]);
    }
  });
  
  console.log(count);
};

main();
