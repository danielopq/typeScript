(()=>{
    const fullName = (firstName:string, lastName?:string,upper:boolean=false):string =>{
        if(upper){
            return `${firstName} ${lastName || 'Doe'}`.toUpperCase();
        }
            return `${firstName} ${lastName || 'Doe'}`;
    }

    let name = fullName('Tony');
    console.log('name:', name);
    name = fullName('Tony','Stark',true);
    console.log('name:', name)
})()