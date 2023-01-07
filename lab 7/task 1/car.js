export class Car{
  constructor(model, year){
    this.model = model;
    this.year = year;
  }
  toString(){
    return `${this.model} ${this.year}`;
  }
}