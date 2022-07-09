//// to finde the largest number on arr 
// var arr = [1, 2, 3, 4];

// var largest = arr.reduce(function(x,y) {
//     return (x > y) ? x : y;
// });

// console.log(largest);
///// to finde the loweste number 
var arr = [5,1,9,5,7];
var smallest = arr[0];

for(var i=1; i<arr.length; i++){
    if(arr[i] < smallest){
        smallest = arr[i];   
    }
}


//////receive each element of array then multiply it times two 

console.log(smallest);

const array = [1, 2, 3, 4];

// receive each element of array then multiply it times two
// map returns a new array
const map = array.map(x => x * 2);

console.log(map);


///////////////////
const N = parseInt(readline());
const M = parseInt(readline());
 let nbYes = 0;
 let nbNo  = 0;
 const votantOk = [];
 const votantTotal=[];
 const votes=[];

 const count = (element , arr) =>{
  return arr.filter(el => el.voterName === element).length

}

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const personName = inputs[0];
    const nbVote = parseInt(inputs[1]);
    votantTotal.push({personName,nbVote});

} 
for (let i = 0; i < M; i++) {
    var inputs = readline().split(' ');
    const voterName = inputs[0];
    const voteValue = inputs[1];
    votantOk.push({voterName,voteValue})
     
}

for (let i = 0 ; i < votantOk.length; i++ ){
  const voterName = votantOk[i].voterName;
  let nbVote = votantTotal.filter(ele => ele.personName === voterName)[0].nbVote;
  if (count(voterName, votantOk) <= nbVote){

    votes.push(votantOk[i].voteValue)
   
  } 

}

votes.forEach(vote => {
  if (vote === "Yes"){
    nbYes +=1
  } 
  if (vote==="No"){
    nbNo+=1
  }
})
console.log(nbYes,nbNo)



// Write an answer using console.log()
// To debug: console.error('Debug messages...');

//console.log( N, M);
 