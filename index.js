const stringArrayNames = [
  "Chandler",
  "Ross",
  "Joey",
  "Monica",
  "Rachel",
  "Phoebe",
];
console.table(stringArrayNames);
const eventName = "birthday";

function writeCards(stringArrayNames, eventName) {
  const newArrayOfNames = [];
  for (let a = 0; a < stringArrayNames.length; a++) {
    let b =
      `Thank you, ${stringArrayNames[a]}, for the wonderful ${eventName} gift!`;
    newArrayOfNames.push(b);
  };
  console.table(newArrayOfNames);
  console.log(newArrayOfNames);
  return newArrayOfNames;
}
writeCards(stringArrayNames, eventName);


function countDown(number){
  for(let q=number; q>=0; q--){
    console.log(q);
  }
}
countDown(number);