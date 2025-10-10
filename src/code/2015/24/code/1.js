export const run = (input) => {
  return findMinQuantum(input);
};

const findMinQuantum = nums => {
  nums.sort((a,b)=>b-a);
  const target = nums.reduce((a,b)=>a+b,0) / 3;


  const n = nums.length;
  const pref = new Array(n+1).fill(0);
  for (let i = 0; i < n; i++) 
    pref[i+1] = pref[i] + nums[i];

  for (let size = 1; size <= n - 2; size++) {
    let bestQuantum = null;

    combSumTargetQuantum(nums, size, target, pref, (pickProduct, pick) => {
      const rest = multisetSubtract(nums, pick);
      if (subsetSumExists(rest, target)) 
        if (bestQuantum === null || pickProduct < bestQuantum) 
          bestQuantum = pickProduct;
    });

    if (bestQuantum !== null) 
      return bestQuantum; 
  }
  return null;
}

const combSumTargetQuantum = (arr, k, target, pref, onHit) => {
  const pick = [];
  let prod = 1;
  const n = arr.length;

  function rec(start, kLeft, sumLeft) {
    if (kLeft === 0) { if (sumLeft === 0) onHit(prod, pick.slice()); return; }
    if (sumLeft < 0) return;

    const end = Math.min(n, start + kLeft);
    const maxPossible = pref[end] - pref[start];
    if (maxPossible < sumLeft) return;

    for (let i = start; i <= n - kLeft; i++) {
      const x = arr[i];
      if (x > sumLeft) continue;

      pick.push(x);
      const oldProd = prod;
      prod = prod * x;

      rec(i + 1, kLeft - 1, sumLeft - x);

      prod = oldProd;
      pick.pop();
    }
  }

  rec(0, k, target);
}

const multisetSubtract = (arr, subset) => {
  const freq = new Map();
  for (const x of subset) freq.set(x, (freq.get(x) || 0) + 1);
  const out = [];
  for (const x of arr) {
    const c = freq.get(x) || 0;
    if (c > 0) freq.set(x, c - 1);
    else out.push(x);
  }
  return out;
}

const subsetSumExists = (arr, target) => {
  let dp = 1n;
  for (const x of arr) {
    if (x > target) continue;
    dp |= (dp << BigInt(x));
    if ((dp >> BigInt(target)) & 1n) return true;
  }
  return false;
}