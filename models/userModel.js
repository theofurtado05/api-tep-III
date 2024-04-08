class User{
    constructor(id, name, email, password, currentPlan = 0){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.currentPlan = currentPlan;
    }
}