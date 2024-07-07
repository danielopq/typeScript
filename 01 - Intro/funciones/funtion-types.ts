(()=>{
    const addNumbers=(a:number,b:number)=> a + b;
    const greet = (name:string)=>`Hola ${name}`;
    const saveTheWorld = ()=>`El mundo está salvado!!!`;



    

    let myFunction; //compatible with any below example
    
    // let myFunction:Function; //not compatible with the first example

    // let myFunction: (y:number,z:number)=>number; //compatible just with the second example
    
    // let myFunction: (name:string)=>string; //compatible just with the third example
    
    // let myFunction: ()=>string; //compatible just with the fourth example



    myFunction = 10;
    console.log('myFunction:', myFunction);

    myFunction = addNumbers;
    console.log('myFunction:', myFunction(1,2));
    
    myFunction = greet;
    console.log('myFunction:', myFunction('Pedro'));
    
    myFunction = saveTheWorld;
    console.log('myFunction:', myFunction());
})()