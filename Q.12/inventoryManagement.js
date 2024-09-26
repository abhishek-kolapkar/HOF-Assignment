const products = [
  {
    name: "Laptop",
    category: "Electronics",
    price: 1200,
    quantity: 10,
    available: true,
  },
  {
    name: "Chair",
    category: "Furniture",
    price: 100,
    quantity: 20,
    available: true,
  },
  {
    name: "Shirt",
    category: "Clothing",
    price: 30,
    quantity: 50,
    available: false,
  },
  {
    name: "Book",
    category: "Books",
    price: 20,
    quantity: 100,
    available: true,
  },
];


// filter products by name
function filteredProducts(data, productNames) {
  // Write code here
  if (productNames.length > 0) {
    const result = [];
    data.filter(({ name }, i) => {
      productNames.map((ele) => {
        if (name === ele) result.push(data[i]);
      });
    });

    console.log(`Filtered Products:`);
    return result;
  } else {
    return "parameter can't be empty";
  }
}

const filteredProduct = filteredProducts(products, ["Laptop", "Chair"]);
console.log(filteredProduct);


// sort products by price
function sortedByPrice(data) {
  // Write code here
  function priceSort(a, b) {
    return a.price - b.price;
  }

  let result = data.sort(priceSort);

  console.log(`Sorted Products by Price:`);
  return result;
}

const sortedProducts = sortedByPrice(products);
console.log(sortedProducts);


// total product value
function totalProductValue(data) {
  // Write code here
  data.reduce((acc, { price, quantity }, i) => {
    data[i].totalValue = Math.round(price * quantity);
  }, 0);

  console.log(`Products with Total Value:`);
  return data;
}

const totalValue = totalProductValue(products);
console.log(totalValue);


// inventory report
function inventoryReport(data) {
  let inventory = {
    totalProducts: 0,
    totalValue: 0,
    avgPrice: 0,
    categoryDistribution: {},
  };

  data.map(({ category, price, quantity }, i) => {
    inventory.totalProducts += 1;
    inventory.totalValue += price * quantity;
    inventory.avgPrice += price;

    inventory.categoryDistribution[category]
      ? inventory.categoryDistribution[category]++
      : (inventory.categoryDistribution[category] = 1);
  });

  inventory.avgPrice = inventory.avgPrice / inventory.totalProducts;

  console.log(`Inventory Report:`);
  return inventory;
}

const inventoryReportDetails = inventoryReport(products);
console.log(inventoryReportDetails);
