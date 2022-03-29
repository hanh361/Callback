const myPromise = new Promise((resolve, reject) =>{
    let  a = 1;
    let b = 2;
    if( a == b){
        resolve('resolve');
    }else{
        reject(err);
    }    
})
myPromise
.then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log('err');
})