(()=>{
    const fullName = (firstName:string, lastName?:string):string =>{
        return `${firstName} ${lastName || 'Doe'}`;
    }

    const name = fullName('Tony');
    console.log('name:', name);
})()