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
  constructor(title, price) {
    this.id = ++mealId
    this.title = title
    this.price = price
    store.meals.push(this)
  }
 
 static byPrice(){
   return store.meals.sort(function (meal1, meal2) {
     return meal2.price - meal1.price
   })
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
