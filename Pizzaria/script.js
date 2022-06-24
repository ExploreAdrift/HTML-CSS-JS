function pizzaMake(crustType = pan, sauceType = alfredo, cheese = asiago, toppings = chicken){
        var pizza {}
        pizza.crust = pan;
        pizza.sauce = alfredo;
        pizza.cheese = asiago;
        pizza.topping = chicken;
        return pizza;
    }
    console.log(pizzaMake);

    console.log(pizzaOven("deep dish", "traditional",["mozzarella"], ["pepporoni","sausage"]]));

    console.log(pizzaMake("pan", "alfredo", ["mozzarela", "feta"],["mushrooms", "olives", "onions"]);

    console.log(pizzaMake("pan", "marinara", "sausage");
    console.log(pizzaMake("thin", "asiago", "meatballs")
