function _(){
    return function jscompare(a, b){
        return JSON.stringify(a) === JSON.stringify(b);
    };
}