export const run = input => {
    const memory = new Map();
    let currMask = null;

    input.forEach(opr => {
        if(opr.type === "m") {
            currMask = opr.mask;
            return;
        }
        let valAsBinary = dec2bin(opr.loc);
        console.log("-----------------");
        console.log(opr);
        console.log(currMask);
        console.log(valAsBinary);
        const Unfinished = [];
        const finished = [];
        for(let i = 0; i < valAsBinary.length; i++) {
            let maskVal = currMask[i];
            if(maskVal === 0) 
                valAsBinary[i] = maskVal;
            if(maskVal === 1)
                valAsBinary[i] = 1;

        }
        
        
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