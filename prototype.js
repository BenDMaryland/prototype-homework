
 const arr = [1, 2, 3,2];

Array.prototype.MyReduce = function (callbackFn, initialValue=0) {
    console.log("my reduce")
    let result = initialValue
    for (let i = 0; i < this.length; i++) {
        result = callbackFn(result,this[i], i, this)
console.log("results",result)


    }
    return result
}

let myReduceRes = arr.MyReduce((currentItem, previtem, index, array) => {
 //   console.log('currentItem', currentItem, "currentItem", previtem, "idex:", index, "array:", array)
    return currentItem + previtem;
},2)
console.log(myReduceRes);



Array.prototype.MyFilter = function (callbackFn) {
    console.log("my filter")
    let result = []
    for (let i = 0; i < this.length; i++) {
        if (callbackFn(this[i])){
        result.push(this[i])
        }
    }
    return result
}

let myFilterRes = arr.MyFilter((item, index, array) => {
 console.log(item)
  return  item==2
})

console.log(myFilterRes)



Array.prototype.MySome = function (callbackFn) {
    console.log("my filter")
    let result = false
    for (let i = 0; i < this.length; i++) {
        if (callbackFn(this[i])){
        result = true
        }
    }
    return result
}

let mySomeRes = arr.MySome((item, index, array) => {
 console.log(item)
  return  item==31
})

console.log(mySomeRes)


