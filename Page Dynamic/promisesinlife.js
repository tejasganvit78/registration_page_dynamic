function createPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error){
                resolve();
            }else{
                reject('Error: Sometjing went wrong');
            }
        },2000);
    });
}

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve,reject) =>setTimeout(resolve,2000,'Goodbye'));
Promise.all([promise1,promise2,promise3]).then(((values) => console.log(values)));