export const run = (input) => {
  return findMinQuantum(input);
};

const findMinQuantum = (nums) => {
  const total = nums.reduce((a,b)=>a+b,0);
  const target = total / 4;
  nums.sort((a,b)=>b-a);

  const length = nums.length;
  const pref = new Array(length+1).fill(0);
  for (let i=0;i<length;i++)
    pref[i+1]=pref[i]+nums[i];

  for (let size = 1; size <= length - 3; size++) {
    let bestQuantum = null;

    combSumTargetQuantum(nums, size, target, pref, (pickProduct, pick) => {
      const rest = multisetSubtract(nums, pick);

      if (canPartitionIntoK(rest, 3, target)) {
        if (bestQuantum === null || pickProduct < bestQuantum) {
          bestQuantum = pickProduct;
        }
      }
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
    if (kLeft === 0) { 
      if (sumLeft === 0) 
        onHit(prod, pick.slice());
      return; 
    }
    if (sumLeft < 0) 
      return;

    const end = Math.min(n, start + kLeft);
    const maxPossible = pref[end] - pref[start];
    if (maxPossible < sumLeft) 
      return;

    for (let i = start; i <= n - kLeft; i++) {
      const x = arr[i];
      if (x > sumLeft) 
        continue;
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

function multisetSubtract(arr, subset) {
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

function canPartitionIntoK(nums, k, target) {
  const arr = nums.slice().sort((a,b)=>b-a);
  if (arr[0] > target) 
    return false;
  const sum = arr.reduce((a,b)=>a+b,0);
  if (sum !== k * target) 
    return false;

  const buckets = new Array(k).fill(0);

  function backtrack(i) {
    if (i === arr.length) 
      return true;
    const x = arr[i];

    const used = new Set();
    for (let b = 0; b < k; b++) {
      if (buckets[b] + x > target) 
        continue;
      if (used.has(buckets[b])) 
        continue; 
      used.add(buckets[b]);

      buckets[b] += x;
      if (backtrack(i + 1)) 
        return true;
      buckets[b] -= x;

      if (buckets[b] === 0) 
        break;
    }
    return false;
  }

  return backtrack(0);
}