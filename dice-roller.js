const rollD6 = function(quanlity) {
  let result = [];
  for (let i = 0; i < quanlity; i++) {
    result.push(Math.floor(Math.random() * 6 + 1));
  }
  return `Rolled ${quanlity} dice: ${result.join(', ')}`;
};

//test
/*
console.log(rollD6(20));
*/