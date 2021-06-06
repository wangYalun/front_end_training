/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {

//     const maxSubStr=new Set();
//     let rk=-1,ans=0,n=s.length;
//     for(let i =0;i<n;i++){
//         if(i!=0){
//             maxSubStr.delete(s[i-1])
//         }
//         while(rk+1<n&&!maxSubStr.has(s[rk+1])){
//             maxSubStr.add(s[rk+1]);
//             rk++;
//         }
//         ans=Math.max(ans,rk-i+1);
//     }
//     return ans;
// };



//line=readline()
//print(line)
console.log('Hello World!');

function fn(arr){
    arr.sort((a,b)=>a-b);
    
    const n=arr.length;
    let pre=null;
    let curr=null;
    let maxLen=1;
    // let maxArr=[];
    let res=0;
    for(let i=0;i<n;i++){
        curr=arr[i];
        if(pre!=null&&(pre+1==curr||pre==curr)){
            if(pre+1==curr) {maxLen++;}
        }else{
            // maxArr.push(maxLen);
            res=Math.max(res,maxLen);
            maxLen=1;
        }
        pre=curr;
    }
    res=Math.max(res,maxLen);
    return res;
    // return Math.max(...maxArr);
}
const res=fn([200,201,202,100,4,200,1,3,2,204,203])
console.log(res)
