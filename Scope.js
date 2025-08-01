var x = 10;
{
  let x = 20;
  console.log(x);
}
console.log(x);

function createMultiplier(num) {
  return (num2) => {
    return num * num2;
  };
}
const multiplyBy3 = createMultiplier(5);
console.log(multiplyBy3(4));

let a = 1;
function test() {
  let a = 2;
  console.log(a);
}
test();
