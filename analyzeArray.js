function analyzeArray(arr){
    function getAvg(){
        let sum = 0;
        for(let i = 0; i <= arr.length -1; i++){
            sum += arr[i]
        }
        return sum / arr.length;
    }

    function getMin(){
        return Math.min(...arr);
    }

    function getMax(){
        return Math.max(...arr);
    }

    return {
        average: getAvg(),
        min: getMin(),
        max: getMax(),
        length: arr.length
    };
}

//console.log(analyzeArray([1,8,3,4,2,6]))
module.exports = analyzeArray;