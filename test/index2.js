const EventBus = {
  eventList: {},
  on(eventName, fn) {
    if (this.eventList[eventName]) {
      this.eventList[eventName].push(fn);
    } else {
      this.eventList[eventName] = [fn];
    }
  },
  emit(eventName, ...payload) {
    const fnList = this.eventList[eventName] || [];
    fnList.forEach((fn) => {
      fn.apply(this, payload);
    });
  },
  off(eventName, fn) {
    if (eventName == null) {
      this.eventList = {};
    }
    if (fn == null) {
      this.eventList[eventName] = [];
    }
    if (eventName && fn) {
      this.eventList[eventName] = this.eventList[eventName].filter(
        (itemFn) => itemFn != fn
      );
    }
  },
};
const fn3=()=>{
    console.log("fn3")
}
EventBus.on("allen",fn3);
EventBus.on("allen", function (a,b) {
  console.log(a);
});
EventBus.on("allen", function (a,b) {
    console.log(b);
  });

  
  EventBus.emit("allen", "allen","allen2");
  EventBus.off("allen",fn3)
  EventBus.emit("allen", "allen","allen2");
