export const parse = (input) => {
    const data = []
    input.forEach(element => {
        const line = [];
        element = element.split("");

        element.forEach(val => {
            line.push({val, visited: 0})
        })
        data.push(line)
    });
    return data;
}