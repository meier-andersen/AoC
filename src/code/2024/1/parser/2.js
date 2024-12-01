export const parse = (input) => {
    const data = {
        l1: [],
        l2: []
    }
    input.forEach(element => {
        let nums = element.split("   ");
        const n1 = parseInt(nums[0]);
        const n2 = parseInt(nums[1]);

        data.l1.push(n1)

        const match2 = data.l2.find(x => x.id === n2)
        if(match2) {
            match2.num++;
        }
        else {
            data.l2.push({id: n2, num: 1})
        }
    })
    return data;
}