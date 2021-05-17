class Car {
  constructor(speed = 0, isOn = false, price, maxSpeed, distance = 0) {
    this._speed = speed;
    this._price = price;
    this._maxSpeed = maxSpeed;
    this._isOn = isOn;
    this._distance = distance;
  }

  static getSpecs(car) {
    return `${car._maxSpeed}, ${car._speed}, ${car._isOn}`;
  }

  get price() {
    return this.price;
  }

  set price(value) {
    this._price = value;
  }

  turnOn() {
    return (this._isOn = true);
  }

  turnOff() {
    if (this._isOn) {
      this._isOn = false;
      this._speed = 0;
    }
  }

  accelerate(value) {
    const result = this._speed + value;
    if (result < this._maxSpeed && this._isOn) {
      this._speed = result;
    }
  }

  decelerate(value) {
    let result = this._speed - value;
    if (result > 0) {
      this._speed -= value;
    }
  }

  drive(hours) {
    if (this._isOn) {
      this._distance = hours * this.speed;
    }
  }
}

const mustang = new Car(120, undefined, 1200, 250, undefined);
mustang.turnOn();
// mustang.turnOff();

let car = Car.getSpecs(mustang);
console.log(car);

mustang.accelerate(120);
mustang.decelerate(80);

console.log(Car.getSpecs(mustang));
console.log(mustang);
