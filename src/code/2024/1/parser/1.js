export const parse = (input) => {
    const data = {
        l1: [],
        l2: []
    }
    input.forEach(element => {
        let nums = element.split("   ");

        data.l1.push(parseInt(nums[0]));
        data.l2.push(parseInt(nums[1]));
    })
    return data;
}