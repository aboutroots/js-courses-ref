export default class Likes {
    constructor() {
        this.likes = [];
    }

    addLike(id, title, author, img) {  // that is the data, that we need in order to display Like
        const like = {id, title, author, img };
        this.likes.push(like); // we push like's elements into the array

        // Persist data in localstorage
        this.persistData();

        return like;
    }

    deleteLike(id) {
        const index = this.likes.findIndex(el => el.id === id)
        this.likes.splice(index, 1); // start at position, where the item is located, and then take out one element

        // Persist data in localstorage
        this.persistData();

    }

    isLiked(id) { // this method is to test, if we have a like in array (it is for the functionality of unmarking likes)
        // we need to find the index of the ID, and then see, if it is different to minus one
        // becouse if the index is -1, it means, that it is not there
        return this.likes.findIndex(el => el.id === id) !== -1;
        // SO: if expression "this.likes.findIndex(el => el.id === id)" turns out a number that is not -1, then
        // all this line will be true, and we then return true (becouse the recipe with the ID that we passed id is liked)
    }

    getNumLikes() {
        return this.likes.length;
    }

    persistData() {
        localStorage.setItem('likes', JSON.stringify(this.likes));
    }

    readStorage() {
        const storage = JSON.parse(localStorage.getItem('likes')); 

        // Restoring likes from the localStorage
        if (storage) this.likes = storage;  
    }
}