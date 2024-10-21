export const run = input => {
    let res = 0;
    input.forEach(elem => {
        let match = map.find(x => x.o === elem[0] && x.m === elem[1]);
        res += match.bs + match.ws;
    })
    return res;
}

const map = [
    //Loose
    {o: "A", m: "X", bs: 3, ws: 0}, //S
    {o: "B", m: "X", bs: 1, ws: 0}, //R
    {o: "C", m: "X", bs: 2, ws: 0}, //P
    //Draw
    {o: "A", m: "Y", bs: 1, ws: 3}, //R
    {o: "B", m: "Y", bs: 2, ws: 3}, //P
    {o: "C", m: "Y", bs: 3, ws: 3}, //S
    //Win
    {o: "A", m: "Z", bs: 2, ws: 6}, //P
    {o: "B", m: "Z", bs: 3, ws: 6}, //S
    {o: "C", m: "Z", bs: 1, ws: 6}, //R
]