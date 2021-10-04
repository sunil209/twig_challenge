function chunkArray(myArray, chunk_size){
    var results = [];
    
    while (myArray.length) {

        console.log(myArray.splice(0, chunk_size));
        console.log(myArray);
        
        results.push(myArray.splice(0, chunk_size));
    }
    
    return results;
}

// Split in group of 3 items
var result = chunkArray([1,2,3,4,5,6,7,8], 2);
// Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]
console.log(result);