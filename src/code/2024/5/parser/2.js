export const parse = (input) => {
    const data = {
        rules: [],
        pages: []
    }
    input.forEach(element => {
        if(!element)
            return;
        if(element.includes("|")){
            element = element.split("|");
            const pair = { num: parseInt(element[0]), before: (parseInt(element[1]))}
            data.rules.push(pair);
        }
        else {
            data.pages.push(element.split(",").map(x => parseInt(x)))
        }
    });
    return data;
}