export const add = (num) => {
  const sep = num.split(/[+|\n]/);
  
  const res = sep
    .map((val) => Number(val))
    .reduce((acc, val) => acc+val);

  return res;
}