export const parse = (input) => {
  const data = [];
  let obj1 = {};
  let obj2 = {};
  let obj3 = {};
  input.forEach((element) => {
    const first = parseInt(element.substring(0, 5));
    const second = parseInt(element.substring(6, 10));
    const third = parseInt(element.substring(10))
    if(!obj1.x) {
      obj1.x = first;
      obj2.x = second;
      obj3.x = third;
    }
    else if(!obj1.y) {
      obj1.y = first;
      obj2.y = second;
      obj3.y = third;
    }
    else {
      obj1.z = first;
      obj2.z = second;
      obj3.z = third;

      data.push(obj1);
      data.push(obj2);
      data.push(obj3);
      obj1 = {};
      obj2 = {};
      obj3 = {};
    }
  });
  return data;
};
