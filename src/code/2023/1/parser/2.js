export const parse = (input) => {
    const data = []
    input.forEach(element => {
        data.push(element.split(""));
    });
    return data;
}