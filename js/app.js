document.addEventListener("DOMContentLoaded", () => {
    //Build profile class/object
    //Picture, name, age, city, followers, likes, photos

    class Profile {
        constructor(city) {
            this.picture,
            this.first_name = "Victor",
            this.last_name = "Crest",
            this.age = 26,
            this.city = "London",
            this.followers = 80000,
            this.likes = 803000,
            this.photos = 1400
        };
    }

    const p1 = new Profile;
    console.log(p1);
})