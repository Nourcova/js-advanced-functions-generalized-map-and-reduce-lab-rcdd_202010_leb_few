// Add your functions here
// function map(src, cb) {
//   let r = []

//   for (let i = 0; i < src.length; i++) {
//     let theElement = src[i]
//     r.push(cb(theElement))
//   }

//   return r;
// }

// function reduce(src,cb){
  
// }
let a=[1,2,3,4]
function mapToNegativize(arr){
const mapped = arr.map(elem =>elem*-1);
  return mapped;
}

function mapToNoChange(arr){
  const mapped=arr.map(elem=>{
    return elem});
  return mapped;
}

map(mapToNegativize,mapToNoChange,a)

function map(en,es,arr){
  en(arr)
  es(arr)
}