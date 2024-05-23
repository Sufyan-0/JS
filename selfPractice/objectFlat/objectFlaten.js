const test = {
    a: "jack",
    b: {
      c: "sparrow",
      d: {
        e: "hahaha",
        f: 56,
        g: {
          h: "shehzad",
        },
      },
    },
    y: { aa: 876543 },
    z: 55,
  };
  
  const flatObj = (obj, result = {}) => {
    for (const t in obj) {
      const value = obj[t];
      if (typeof value === "object") {
        const TTTT = flatObj(value, result);
        if (!TTTT) result[t] = TTTT;
      } else {
        result[t] = value;
      }
    }
  
    return result;
  };
  
  console.log(flatObj(test));
  