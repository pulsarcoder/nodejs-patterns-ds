const { Observer, Subject } = require("./Observer");
const Singleton = require("./Singleton");

// implementation example of singleton
for (let i = 0; i < 10; i++) {
    let singleton1 = Singleton.getInstance();
    singleton1.print();
}

// implementation example of observer pattern
let observer1 = new Observer();
let observer2 = new Observer();

let subject = new Subject();
subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notifyAll('fd');
subject.unsubsribe(observer2);
subject.notifyAll('sec');
subject.notify(observer2);