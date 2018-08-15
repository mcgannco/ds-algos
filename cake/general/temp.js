class TempTracker {
  constructor() {
    this.temps = [];
    this.max = null;
    this.min = null;
    this.tempSum = null;
    this.seenTemps = {};
  }

  insert(temp) {
    this.temps.push(temp);
    if(!this.max) {
      this.max = temp;
    } else if (temp > this.max) {
      this.max = temp;
    }

    if(!this.min) {
      this.min = temp;
    } else if(temp < this.min) {
      this.min = temp;
    }

    if(!this.tempSum) {
      this.tempSum = temp;
    } else {
      this.tempSum += temp;
    }

    if(this.seenTemps[temp]) {
      this.seenTemps[temp] += 1
    } else {
      this.seenTemps[temp] = 1
    }
  }

  getMax() {
    return this.max;
  }

  getMin() {
    return this.min;
  }

  getMean() {
    if(this.temps.length) {
      return (this.tempSum / this.temps.length)
    } else {
      return "no temps, please insert"
    }
  }

  getMode() {
    let temps = Object.keys(this.seenTemps);
    let mode = null;
    for (let i = 0; i < temps.length; i++) {
      if(this.seenTemps[temps[i]] > 1) {
        if(!mode) {
          mode = [[parseInt(temps[i]), this.seenTemps[temps[i]]]]
        } else if (this.seenTemps[temps[i]] === mode[0][1]) {
          mode.push([parseInt(temps[i]), this.seenTemps[temps[i]]])
        } else if (this.seenTemps[temps[i]] > mode[0][1]) {
          mode = [[parseInt(temps[i]), this.seenTemps[temps[i]]]]
        }
      }
    }

    if(!mode) {
      return "no mode";
    }

    let modeOutPut = [];
    for (let i = 0; i < mode.length; i++) {
      modeOutPut.push(mode[i][0])
    }
    if(modeOutPut.length === 1) {
      return modeOutPut[0]
    } else {
      return modeOutPut;
    }
  }
}

let tracker = new TempTracker();
tracker.insert(20)
tracker.insert(20)
tracker.insert(90)
tracker.insert(-40)
tracker.insert(10)
tracker.insert(10)
