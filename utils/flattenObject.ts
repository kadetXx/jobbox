const flattenObj = (object: any) => {
  const result = Object.keys(object).reduce(function (array, current) {
    const isObj =
      typeof object[current] === "object" && object[current] !== null;

    if (isObj) {
      const values = flattenObj(object[current]);
      return array.concat(values);
    } else {
      return array.concat(object[current]);
    }
  }, []);

  return result;
};

export default flattenObj;
