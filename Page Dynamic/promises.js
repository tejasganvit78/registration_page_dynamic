function buycar(cb){
    setTimeout(()=>{
        console.log('buy car')
        cb();
    },1000)
}
function plantrip(cb){
    setTimeout(() =>{
        console.log('lets go manali')
        cb()
    },2000)
}

function reachmanali(cb){
    setTimeout(()=>{
        console.log('reached manali')
        cb()
    },1000)
}
function gotodaman(){
    setTimeout(()=>{
        console.log('go to daman')
     
    },1000)
}
buycar(()=>{
    plantrip(()=>{
        reachmanali(()=>{
            gotodaman();
        });
    });
});