let store = {deliveries: [], meals: []}

let deliveryId = 0
class Delivery {
  constructor(meal, customer) {
    this.id = ++deliveryId
    if (meal) {this.mealId = meal.id}
    if (customer) {this.customerId = customer.id}

    store.deliveries.push(this)
  }

  meal () {}

  customer() {}
}

let mealId = 0
class Meal {
  constructor(name, price) {
    this.id = ++mealId
    this.name = name
    this.price = price

    store.meals.push(this)
  }
}

let customerId = 0
class Customer {
  constructor(name, employerId) {
    this.id = ++customerId
    this.name = name
    this.employerId = employerId
  }

  meals() {}

  deliveries() {}

  totalSpent() {}
}
