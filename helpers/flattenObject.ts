const flattenObj = (object: any) => {
  const result = Object.keys(object).reduce(function (r, k) {
    return r.concat(object[k]);
  }, []);

  console.log(result);
};

export default flattenObj