export const parse = (input) => {
    const data = {
        piles: [],
        instructions: []
    };

    let instructionTime = false;
    input.forEach(element => {
        if(!element) {
            instructionTime = true;
        }
        else if(instructionTime) {
            element = element.replace("move ", "")
                .replace("from ", "")
                .replace("to ", "")
                .split(" ");
            data.instructions.push({
                amount: parseInt(element[0]),
                from: parseInt(element[1]),
                to: parseInt(element[2])
            });
        }
        else {
            const chars = element.split("");
            let pile = 0;
            for(let i = 1; i < chars.length; i+=4) {
                if(data.piles[pile] === undefined) 
                    data.piles.push([]);
                if(/[a-zA-Z]/.test(chars[i]))
                    data.piles[pile].unshift(chars[i]);
                pile++;
            }
        }
    });
    return data;
}