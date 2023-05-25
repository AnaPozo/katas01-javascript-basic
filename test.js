function job(data) {
    return new Promise(function(resolve, reject){
       if (isNaN(data)){
       reject('error');}
       else if (data % 2  !== 0){
        setTimeout(function(){
            resolve('odd')
        },1000)
       }else{
        setTimeout(function(){
        reject ('even')
       },2000)}
 })}
 job(10).then((data) => {
    console.log(data);
    // Expected output: "Success!"
  });