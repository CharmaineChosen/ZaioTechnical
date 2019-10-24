function fibonacci(){
    let j = 0, k = 1;
    let fibos = [j, k];
    let temp;

    for (let i = 3; i <= 100; i++){
        temp = j + k;
        fibos.push(temp);
        j = k;
        k = temp;
    }
    
    console.log(fibos)
}

fibonacci();