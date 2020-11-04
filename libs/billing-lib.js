export function calculateCost(storage) {
    let rate;
    if(storage > 100) rate = 1;
    else if(storage > 10) rate = 2;
    else rate = 4;

    return rate * storage * 100;
  }