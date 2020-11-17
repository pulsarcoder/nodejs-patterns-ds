let Singleton = (() => {
    // static instance variable
    let instance = null;

    class SingletonClass {
        constructor() {
            this.random = Math.floor(Math.random(10) * 10);
        }

        print() {
            console.log('Random no is ', this.random);
        }
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = new SingletonClass();
            }
            return instance;
        }
    }
})();

module.exports = Singleton;
