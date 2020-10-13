class Observer {
    notify(data) {
        console.log('Im notified with data => ', data)
    }
}

class Subject {
    observers = [];

    subscribe(observer) {
        if (!observer) {
            console.error('Observer object is invalid')
            return;
        }
        this.observers.push(observer);
    }

    unsubsribe(observer) {
        if (!observer) {
            console.error('Observer object is invalid');
            return;
        }
        let index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        } else {
            console.error('Observer is not subscribed');
        }
    }

    notify(observer, data) {
        if (!observer) {
            console.error('Observer object is invalid');
        }
        let index = this.observers.indexOf(observer);
        if (index > 1) {
            this.observers[index].notify(data);
        } else {
            console.error('Observer is not subscribed to notify');
        }
    }

    notifyAll(data) {
        if (!this.observers || this.observers.length === 0) {
            console.error('There are no observers subscribed to notifyAll');
        }
        for (const observer of this.observers) {
            observer.notify(data);
        }
    }
}

module.exports = {
    Observer,
    Subject
}