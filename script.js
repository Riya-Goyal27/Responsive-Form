
function func(n1, n2, op){
    if(op=='+')
    return n1+n2;
    else if(op=='-')
    return n1-n2;
    else if(op=='*')
    return n1*n2;
    else
    return n1%n2;
}

console.log(func(1, 2, '+'))
