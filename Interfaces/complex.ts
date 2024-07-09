(()=>{


    interface Client{
        name:string;
        age?: number;
        address:Address;
        getFullAddress(id:string):string;
    }

    interface Address{
        id:number;
        zip:string;
        city:string;
    }

    const client:Client = {
        name: 'Manuel',
        age:25,
        address:{
            id: 125,
            zip: 'KY SUD12',
            city: 'Ottawa',
        },
        getFullAddress(id:string){
            return this.address.city;
        }
    }

    const client2: Client = {
        name: 'Melissa',
        age: 30,
        address:{
            id: 56,
            zip: 'N20-1000',
            city: 'Toronto'
        },
        getFullAddress(id:string){
            return this.address.city;
        }
    }
})()