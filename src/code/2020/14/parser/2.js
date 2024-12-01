export const parse = (input) => {
    const data = [];
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
            data.push(obj);
        }
        else {
            element = element.replace("mem[", "").split("] = ");
            const loc = parseInt(element[0])
            data.push({
                type: "o",
                loc,
                val: parseInt(element[1])
            });
        }
    });
    return data;
}