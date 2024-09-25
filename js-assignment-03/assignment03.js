let products = [
    {
      id: 101,
      title: "Sony LED 40 inch",
      variations: [
        { id: 1, color: "black", price: 50000, quantity: 5 },
        { id: 2, color: "red", price: 52000, quantity: 3 },
        { id: 3, color: "silver", price: 55000, quantity: 8 },
        { id: 4, color: "white", price: 54000, quantity: 4 },
        { id: 5, color: "blue", price: 51000, quantity: 2 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 4.5,
          title: "Very Good Product",
          comments: "Zubair: It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
        {
          id: 3,
          user: "Ali",
          rating: 5.0,
          title: "Excellent Product",
          comments: "Ali: I absolutely love it!",
          date: "04-02-2021",
          status: true,
        },
      ],
    },
    {
      id: 102,
      title: "Mobile",
      variations: [
        { id: 1, color: "black", price: 50000, quantity: 5 },
        { id: 2, color: "orange", price: 48000, quantity: 6 },
        { id: 3, color: "green", price: 55000, quantity: 8 },
        { id: 4, color: "purple", price: 53000, quantity: 3 },
        { id: 5, color: "gold", price: 59000, quantity: 1 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 4.5,
          title: "Very Good Product",
          comments: "Zubair: It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
        {
          id: 3,
          user: "Ali",
          rating: 5.0,
          title: "Best Mobile",
          comments: "Ali: Perfect for my needs!",
          date: "04-02-2021",
          status: true,
        },
      ],
    },
    {
      id: 103,
      title: "Bike",
      variations: [
        { id: 1, color: "black", price: 55000, quantity: 5 },
        { id: 2, color: "red", price: 50000, quantity: 1 },
        { id: 3, color: "blue", price: 58000, quantity: 4 },
        { id: 4, color: "green", price: 57000, quantity: 2 },
        { id: 5, color: "yellow", price: 59000, quantity: 3 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 3.0,
          title: "Decent Product",
          comments: "Zubair: It's okay, but could be better.",
          date: "05-02-2021",
          status: false,
        },
        {
          id: 3,
          user: "Ali",
          rating: 4.5,
          title: "Great Bike",
          comments: "Ali: Fantastic experience riding it!",
          date: "04-02-2021",
          status: true,
        },
      ],
    },
    {
      id: 104,
      title: "Laptop",
      variations: [
        { id: 1, color: "black", price: 70000, quantity: 5 },
        { id: 2, color: "silver", price: 75000, quantity: 2 },
        { id: 3, color: "white", price: 72000, quantity: 3 },
        { id: 4, color: "blue", price: 68000, quantity: 4 },
        { id: 5, color: "red", price: 73000, quantity: 1 },
      ],
      reviews: [
        {
          id: 1,
          user: "Sara",
          rating: 4.5,
          title: "Great Laptop",
          comments: "Sara: Works perfectly for my needs.",
          date: "08-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Owais",
          rating: 4.0,
          title: "Good Performance",
          comments: "Owais: Solid performance and battery life.",
          date: "07-02-2021",
          status: true,
        },
        {
          id: 3,
          user: "Fatima",
          rating: 5.0,
          title: "Best Purchase",
          comments: "Fatima: Highly recommend!",
          date: "06-02-2021",
          status: true,
        },
      ],
    },
    {
      id: 105,
      title: "Smartwatch",
      variations: [
        { id: 1, color: "black", price: 15000, quantity: 10 },
        { id: 2, color: "silver", price: 16000, quantity: 5 },
        { id: 3, color: "gold", price: 18000, quantity: 2 },
        { id: 4, color: "rose", price: 17000, quantity: 3 },
        { id: 5, color: "blue", price: 15500, quantity: 8 },
      ],
      reviews: [
        {
          id: 1,
          user: "Muneeb",
          rating: 4.0,
          title: "Good Smartwatch",
          comments: "Muneeb: Great features for the price.",
          date: "09-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Nadia",
          rating: 4.5,
          title: "Very Useful",
          comments: "Nadia: Love tracking my workouts!",
          date: "08-02-2021",
          status: true,
        },
        {
          id: 3,
          user: "Ali",
          rating: 4.8,
          title: "Awesome",
          comments: "Ali: Best smartwatch I've owned!",
          date: "07-02-2021",
          status: true,
        },
      ],
    },
    {
      id: 106,
      title: "Headphones",
      variations: [
        { id: 1, color: "black", price: 3000, quantity: 15 },
        { id: 2, color: "white", price: 3500, quantity: 10 },
        { id: 3, color: "red", price: 3200, quantity: 5 },
        { id: 4, color: "blue", price: 3400, quantity: 8 },
        { id: 5, color: "green", price: 3100, quantity: 12 },
      ],
      reviews: [
        {
          id: 1,
          user: "Samira",
          rating: 4.2,
          title: "Great Sound",
          comments: "Samira: The sound quality is impressive.",
          date: "10-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Tariq",
          rating: 4.0,
          title: "Good for the Price",
          comments: "Tariq: Comfortable and decent sound.",
          date: "09-02-2021",
          status: true,
        },
        {
          id: 3,
          user: "Zara",
          rating: 4.7,
          title: "Love Them!",
          comments: "Zara: Best headphones for my workouts.",
          date: "08-02-2021",
          status: true,
        },
      ],
    },
  ];
  
  // Exercise 1
  // Get all product titles and display them in array format.
  // Example: ['Sony LED 40 inch', 'Mobile', 'Bike']
  // Try with function or without function
  
  function productsTitles(products) {
    let titles = [];
    for (let i = 0; i < products.length; i++) {
      titles.push(products[i].title);
    }
    return titles;
  }
  
  console.log(productsTitles(products));
  
  // Exercise 2
  // Get all the unique colors from the product variations.
  // Example: ['black', 'red', 'silver']
  // Try with function or without function

  function filterColors(products) {
    let colorsNames = [];
    
    for (let i = 0; i < products.length; i++) {
      for (let j = 0; j < products[i].variations.length; j++) {
        let obtainedColor = products[i].variations[j].color;
        if (!colorsNames.includes(obtainedColor)) {
          colorsNames.push(obtainedColor);
        }
      }
    }
    return colorsNames;
  }
  console.log(filterColors(products));
  



// Exercise 3
// Get the total quantity of all products.
// Example: 23
// Try with function or without function

  function totQuantity(products) {
    let totQuantity = 0;
    for (let i = 0; i < products.length; i++) {
      for (let j = 0; j < products[i].variations.length; j++) {
        totQuantity = totQuantity + products[i].variations[j].quantity;
      }
    }
  
    return totQuantity;
  }
  console.log(totQuantity(products)); 
  

  // Exercise 4
  // Get all product reviews where the status is true.
  // Example: [{ review1 }, { review3 }, ...]
  // Try with function or without function
  
  function approvReviews(products) {
    let appReviews = [];
    for (let i = 0; i < products.length; i++) {
      for (let j = 0; j < products[i].reviews.length; j++) {
        if (products[i].reviews[j].status) {
        appReviews.push(products[i].reviews[j]);
        }
      }
    }
    return appReviews;
  }

  console.log(approvReviews(products));
  
  // Exercise 5
  // Find the most expensive variation across all products.
  // Example: { color: 'silver', price: 55000 }
  // Try with function or without function
  
  function expensiveVariation(products) {
    let expensive = 0; 
    for (let i = 0; i < products.length; i++) {
      let variations = products[i].variations; 
      for (let j = 0; j < variations.length; j++) {
        let currentVariation = variations[j]; 
  
        if (expensive === 0 || currentVariation.price > expensive.price) {
          expensive = currentVariation; 
        }
      }
    }
  
    return expensive; 
  }
  console.log(expensiveVariation(products));
  
  // Exercise 6
  // Get the average rating of all reviews.
  // Example: 4.2

  function avgRating(products) {
    let totreviewCount = 0; 
    let totRating = 0; 
    for (let i = 0; i < products.length; i++) {
      let reviews = products[i].reviews; 
  
    for (let j = 0; j < reviews.length; j++) {
        totRating = totRating + reviews[j].rating; 
        totreviewCount++; 
      }
    }

    let avgRating;
    if (totreviewCount > 0) {
    avgRating = (totRating / totreviewCount); 
    } else {
    avgRating = 0; 
    }
    return avgRating; 
  }
  console.log(avgRating(products)); 
  
  // Exercise 7
  // find a Product by id if not found return empty object
  // Example: {...}
  
  function idProducts(products, id) {
    let foundId = {};

    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            foundId = products[i]; 
            break; 
        }
    }
    return foundId;
}
let idProduct = parseInt(prompt("Enter product ID"));
console.log(idProducts(products, idProduct));

  