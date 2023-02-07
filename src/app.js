import { users } from "./data";


/*async function getData(){
    try{
        const response = await fetch('https://randomuser.me/api/?results=20')}
    }
    getData();
        */

    users = [];
  
  
    const render = (user) =>{
      this.nom.forEach((n) => {
        this.prenom.forEach((p) => {
          this.users.push(new user(n, p));
        });
      });
      return this; 
    };
