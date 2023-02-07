class User {
#nom;
#prenom;
#email;
#photo;
#present;
#element;
  
    constructor(nom, prenom, email, photo, present) {
        this.nom = nom; 
        this.prenom = prenom;
        this.email = email;
        this.photo = photo;
        this.present = false;
        this.element = this.generateUserElement();
      }
     
    generateUserElement() {
        const userElement = document.createElement("div");
        userElement.classList.add("user");
        userElement.dataset.present = this.user;
        
        const userInfo = document.createElement("div");
        userInfo.classList.add("user--info");
        userInfo.insertAdjacentHTML("afterbegin", this.userInfo);
        userElement.appendChild(userInfo);
        return userElement;
    }
    
    display(parentElement) {
        parentElement.appendChild(this.#element);
      }
    }

		

