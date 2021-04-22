const MyPromise={}
MyPromise.all=function(promises){
    return new Promise((resolve,reject)=>{
        const result=[];
        for(let i=0,len=promises.length;i<len;i++){
            promises[i].then(value=>{
                result[i]=value;
                if(i==len-1){
                    resolve(result)
                }
            }).catch((error)=>{
                reject(error)
            })
        }
    })
}

MyPromise.all([Promise.resolve(1),Promise.reject(2)]).then(res=>{
    console.log(res)
})