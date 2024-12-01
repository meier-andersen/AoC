export const run = input => {
    const memory = input.memory;
    let currMask = null;

    input.operations.forEach(opr => {
        if(opr.type === "m") {
            currMask = opr.mask;
            return;
        }
        let valAsBinary = dec2bin(opr.val);
        for(let i = 0; i < valAsBinary.length; i++) {
            let maskVal = currMask[i];
            if(maskVal !== null) 
                valAsBinary[i] = maskVal;
        }
        let currMemory = memory.find(x => x.loc === opr.loc);

        currMemory.val = valAsBinary;
        
    });

    let res = 0;
    memory.forEach(mem => {
        res += parseInt(mem.val.join(''), 2);
    });
    
    return res;
}

function dec2bin(dec) {
    let res = (dec >>> 0).toString(2).split("").map(Number);
    while(res.length < 36)
        res.unshift(0);

    return res;
  }