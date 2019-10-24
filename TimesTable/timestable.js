function timesTable(times){
    let multiple;
    let toprint;
    
    for(let i = 1; i <= 10; i++){
        multiple = times * i;
        toprint = `${i} x ${times} = ${multiple}`;
        console.log(toprint);
    }
}

timesTable(6);