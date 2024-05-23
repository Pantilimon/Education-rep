class EventEmitter {
  constructor() {
    this.counter = new Map                                                
  }
  
  subscribe(key, func) {
    if (this.counter[key] == undefined) {
      this.counter.set(key, []);
    }
    this.counter.get(key).push(func)
    return {
      unsubscribe: () => {
        this.counter.get(key).pop()
        return 
      }
    }
  }
  emit(key, argsfunc = []) {
      
  }
}