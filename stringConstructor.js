module.exports = (string) => {
    if(string.length===0){
        return 0;
    }

    if(string.length===1){
        return +string;
    }

    return string
            .split(',')
            .map(str=>+str)
            .reduce((acc,curr)=>{
                return acc+curr;
            });
}
