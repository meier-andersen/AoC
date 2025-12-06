export const parse = (input) => {
  const data = [];
  input.forEach((element) => {
    const line = [];
    element = element.split(" ");
    element.forEach((part) => {
      if (!part) return;

      if (parseInt(part)) line.push(parseInt(part));
      else line.push(part);
    });

    data.push(line);
  });
  return data;
};
