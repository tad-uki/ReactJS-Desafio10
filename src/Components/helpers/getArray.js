export default function getArray(array){
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res(array)
        }, 2000)
    })
}