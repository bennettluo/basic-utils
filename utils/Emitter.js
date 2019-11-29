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
        console.log('The release function has been called.');

        let eventFuncs = this.events[eventName];
        eventFuncs = eventFuncs.filter(fn => func !== fn);

        if (eventFuncs.length) {
          this.events[eventName] = eventFuncs;
        } else {
          delete this.events[eventName];
        }
      }
    };
  }

  emit(eventName, ...args) {
    console.log(`Emitting ${eventName}`);
    const eventFuncs = this.events[eventName];

    if (eventFuncs) {
      eventFuncs.forEach(fn => fn.call(null, args));
    } else {
      console.log('No related event callback found.');
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

const subscribeC = emitter.subscribe('drag', data =>
  console.log(JSON.stringify(data))
);

emitter.emit('click', 1, 2, 'a');

subscriberCopy.release();

emitter.emit('click', 1, 2, 'a');

subscriberA.release();

emitter.emit('click', 1, 2);

subscriberB.release();

emitter.emit('click', 1);

emitter.emit('drag', { x: 100, y: 200 });
