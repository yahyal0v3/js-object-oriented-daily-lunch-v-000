let store = {deliveries: []}

let deliveryId = 0
class Delivery {
  constructor(meal, customer) {
    this.id = ++deliveryId
    this.mealId = meal.id
    this.customerId = customer.id

    store.deliveries.push(this)
  }

  meal () {}

  customer() {}
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
