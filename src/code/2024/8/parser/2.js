export const parse = (input) => {
    const data = []
    input.forEach(element => {
        data.push(element.split("").map(x => ({val: x, anti: 0})));
    });
    return data;
}