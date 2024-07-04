(()=>{
    const menorDiez = (num:number):(never | number)=>{
        if(num < 10){
            throw new Error('el número es menor de 10')
        }

        else return num;
    }

    menorDiez(8);
    console.log("este mensaje solo se lee, si no hay errores");
})()