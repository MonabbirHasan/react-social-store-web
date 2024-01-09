export const formatNumber = (num) => {
    const absNum = Math.abs(num);
    const abbrev = {
      T: 1000000000000,
      B: 1000000000,
      M: 1000000,
      K: 1000,
    };

    for (const key in abbrev) {
      if (absNum >= abbrev[key]) {
        const roundedNum = num / abbrev[key];
        if (roundedNum % 1 === 0) {
          return roundedNum.toFixed(0) + key;
        } else {
          return roundedNum.toFixed(1) + key;
        }
      }
    }
    return num.toString();
  };