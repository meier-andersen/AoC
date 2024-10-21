export const run = input => {
    let array = [];
    for(let i = 0; i < input.length; i++) {
        array.push(input[i]);
        if(i < 4)
            continue;

        array.shift();

        if(areAllUnique(array))
            return i+1;
    }
    return -1;
}

function areAllUnique(chars) {
    return new Set(chars).size === chars.length;
  }