const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers () {
    return this.appetizers;
  },
  set appetizers(appetizerIn) {
    this.appetizers = appetizerIn;
  },
  get mains () {
    return this.mains;
  },
  set mains(mainIn) {
    this.mains = mainIn;
  },
  get desserts () {
    return this.desserts;
  },
  set desserts(dessertIn) {
    this.desserts = dessertIn;
  },
  get courses () {
    return {
      appetizers: this.appetizers,
      mains: this.main,
      desserts: this.desserts
    }
  },
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal () {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + desserts.price;
    
    return `Your meal is ${appetizer.name}, ${main.name}, ${desserts.name} The price is \$${totalPrice}.`;
  }
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('mains', 'hamburguer', 7.25);
menu.addDishToCourse('desserts', 'cake', 2.25);

let meal = menu.generateRandomMeal();
console.log(meal);