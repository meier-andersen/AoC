export const parse = (input) => {
    const data = {
        operations: [],
        memory: []
    };
    input.forEach(element => {
        if(element.includes("mask")) {
            element = element.replace("mask = ", "").split("")
            const obj = {
                type: "m",
                mask: []
            }
            element.forEach(e => {
                if(e === "X") 
                    obj.mask.push(null);
                else 
                    obj.mask.push(parseInt(e));
            });
            data.operations.push(obj);
        }
        else {
            element = element.replace("mem[", "").split("] = ");
            const loc = parseInt(element[0])
            data.operations.push({
                type: "o",
                loc,
                val: parseInt(element[1])
            });

            const index = data.memory.findIndex(x => x.loc === loc);
            if(index === -1) {
                const binary = [];
                for(let i = 0; i < 36; i++) 
                    binary.push(0);
                data.memory.push({
                    loc,
                    val: binary
                })
            }
        }
    });
    return data;
}