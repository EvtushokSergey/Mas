const productsArray = [
    {   name: "turnip",
        qty: 2,
        isChose: false,
        price: 112,
        sum: 36 
    },
    {   name: "pear",
        qty: 2,
        isChose: true,
        price: 30,
        sum: 40 
    },
    {   name: "orange",
        qty: 2,
        isChose: false,
        price: 60,
        sum: 10 
    },
    {   name: "bread",
        qty: 2,
        isChose: true,
        price: 60,
        sum: 60 
    },
    {   name: "season",
        qty: 2,
        isChose: false,
        price: 45,
        sum: 35 
    },
    {   name: "poppy",
        qty: 2,
        isChose: true,
        price: 11,
        sum: 22 
    },
  ];

  function printProduct()
  { let sortedProd = productsArray.sort(function (a, b) {
        if (a.isChose == false) 
            return -1;
        else 
            return 1;
     });

     console.log(sortedProd);
  };

  printProduct();

  function buyProduct(name)
  { let productToBuy = productsArray.find((item)=>item.name === name);
    if (productToBuy != null)
        productToBuy.isChose = true;
  }

  buyProduct("turnip");  
  printProduct();

  function listToBuy()
  { let productToBuy = productsArray.filter((item)=>item.isChose === false);
    console.log(productToBuy);
  }

  listToBuy();