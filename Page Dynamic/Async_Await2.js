console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {

const promiseWifeBringTicks = new Promise((resolve,reject) => {
    setTimeout(() => reject('ticket'),3000);
});
/* const getPopcorn = new Promise((resolve,reject) => resolve(`popcorn`));

const getCandy = new Promise((resolve,reject) => resolve(`candy`));

const getCoke = new Promise((resolve,reject) => resolve(`coke`)); */
try {
    ticket = await promiseWifeBringTicks;
} catch (e) {
    ticket = 'sad face';
}

// let [popcorn,candy,coke] = await Promise.all([getPopcorn,getCandy,getCoke])

// console.log(`${popcorn}, ${candy},${coke}`)
return ticket;
}
preMovie().then((m)=> console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');
