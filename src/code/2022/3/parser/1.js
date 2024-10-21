
export const parse = (input) => {
    const data = []
    input.forEach(element => {
        const middle = Math.floor(element.length / 2);

        const p1 = element.substring(0, middle);
        const p2 = element.substring(middle);

        data.push([p1, p2]);
    });
    return data;
}