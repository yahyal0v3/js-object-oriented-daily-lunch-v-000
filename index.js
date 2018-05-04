let store = {deliveries: [], meals: [], employers: [], customers: []}

let deliveryId = 0
class Delivery {
  constructor(meal, customer) {
    this.id = ++deliveryId
    if (meal) {this.mealId = meal.id}
    if (customer) {this.customerId = customer.id}
    store.deliveries.push(this)
  }

  meal () { return store.meals.find(meal => meal.id === this.mealId) }
  customer() { return store.customers.find(customer => customer.id === this.customerId) }
}

let mealId = 0
class Meal {
  constructor(title, price) {
    this.id = ++mealId
    this.title = title
    this.price = price
    store.meals.push(this)
  }

  static byPrice(){
    return store.meals.sort(function(a, b) {
      return b.price - a.price
    })
  }
}

let employerId = 0
class Employer {
  constructor(name) {
    this.id = ++employerId
    this.name = name
    store.employers.push(this)
  }
}

let customerId = 0
class Customer {
  constructor(name, employerId) {
    this.id = ++customerId
    this.name = name
    this.employerId = employerId
    store.customers.push(this)
  }

  meals() { return store.meals.filter(meal => meal.customerId === this.id }
  deliveries() { return store.deliveries.filter(delivery => delivery.customerId === this.id) }
  totalSpent() {

  }
}
