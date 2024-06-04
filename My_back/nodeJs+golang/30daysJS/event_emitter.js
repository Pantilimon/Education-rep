class EventEmitter {
  constructor() {
    this.counter = new Map                                                
  }
  
  subscribe(key, func) {
    this.key = key
    if ( (!(this.counter.has(this.key))) ) {
        this.counter.set(this.key, []);
    }
    this.counter.get(this.key).push(func)
    return {
      unsubscribe: () => {
        let index = this.counter.get(this.key).indexOf(func)
        this.counter.get(this.key).splice(index, 1)
      }
    }
  }
  emit(k, argsfunc = []) {
    if (this.counter.has(k)) {
      let res = []
      for (let j of this.counter.get(k)) {
          res.push(j.apply(null, argsfunc))
      }
      return res
    } else {return []}
  }
}


