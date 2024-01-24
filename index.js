const peeps = ["Josef", "Ian", "Mari"];
const burtday = "birthday";

function writeCards(people, event) {
  const emptyArray = [];
  for (let a = 0; a < people.length; a++) {
    const b = `Thank you, ${people[a]}, for the wonderful ${event} gift!`;
    emptyArray.push(b);
    // debugger;
  }
  console.log(emptyArray);
  return emptyArray;
}
writeCards(peeps, burtday);


function countDown(integer) {
    for (let a = integer; a>=0; a--){
      console.log(a);
    }
    // return(z);
  }
    countDown(integer);
  