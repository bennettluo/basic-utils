class Emitter {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, func) {
    if (typeof func != 'function') {
      throw new Error('Type of func is not a function.');
    }

    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(func);

    return {
      release: () => {
        let eventFuncs = this.events[eventName];
        eventFuncs = eventFuncs.filter(fn => func !== fn);
        this.events[eventName] = eventFuncs;
        console.log('The release function has been called.');
      }
    };
  }

  emit(eventName, ...args) {
    const eventFuncs = this.events[eventName];

    if (eventFuncs) {
      eventFuncs.forEach(fn => fn.call(null, args));
    }
  }
}

const emitter = new Emitter();

const callbackFn = data => console.log(data);

const subscriber = emitter.subscribe('click', callbackFn);
const subscriberCopy = emitter.subscribe('click', callbackFn);

const subscriberA = emitter.subscribe('click', data => console.log(data));
const subscriberB = emitter.subscribe('click', data =>
  console.log([...data, data.toString()])
);

emitter.emit('click', 1, 2, 'a');

subscriberCopy.release();

emitter.emit('click', 1, 2, 'a');

subscriberA.release();

emitter.emit('click', 1, 2);
