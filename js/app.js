document.addEventListener("DOMContentLoaded", () => {
    //Build profile class/object
    //Picture, name, age, city, followers, likes, photos

    class Profile {
        constructor() {
            this.picture = "",
            this.first_name = "",
            this.last_name = "",
            this.age = 0,
            this.city,
            this.followers = 0,
            this.likes = 0,
            this.photo = 0
        };
    }

    let p1 = new Profile();
    console.log(p1);
})