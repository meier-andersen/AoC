export const parse = (input) => {
    const data = []
    input.forEach(element => {
        const elves = element.split(",");
        const e1 = elves[0].split("-");
        const e2 = elves[1].split("-");
        const obj = {
            e1S: parseInt(e1[0]),
            e1E: parseInt(e1[1]),
            e2S: parseInt(e2[0]),
            e2E: parseInt(e2[1]),
        }
        data.push(obj);
    });
    return data;
}