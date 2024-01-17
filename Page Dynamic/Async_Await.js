console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringTicks = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000)
});

const getPopcorn = promiseWifeBringTicks.then((t) =>{
    console.log('wife: i have the ticks');
    console.log('husband: we shold go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve,reject) => resolve(`${t} popcorn`))
});

const getButter = getPopcorn.then((t) =>{
    console.log('husband: i got some popcorn');
    console.log('husband: we shold go in');
    console.log('wife: i need butter on my popcorn');
    return new Promise((resolve,reject) => resolve(`${t} butter`))
});


getButter.then((t) => console.log(t));

console.log('person4: shows ticket');
console.log('person5: shows ticket');
