const _private = new WeakMap(); //objeto Weakmap encpsula propiedades (private)

class Book
{
    constructor(title, author, price)
    {
        const properties = 
        {
            _title : title,
            _author : author,
            _price : price,
        }
        _private.set(this, {properties}); //setteadas propiedades como privadas
        _private.get();
    } 
    
    get title()
    {
        return _private.get(this).properties['_title'];
    }

    set title(newTitle)
    {
        return _private.get(this).properties['_title'] = newTitle;
    }

    get author()
    {
        return _private.get(this).properties['_author'];
    }

    set author(newAuthor)
    {
        return _private.get(this).properties['_author'] = newAuthor;
    }

    get price()
    {
        return _private.get(this).properties['_price'];
    }

    set price(newPrice)
    {
        return _private.get(this).properties['_price'] = newPrice;
    }

    getAllData()
    {
        console.log(`Titulo: ${ this.title }, Autor: ${ this.author }, Precio: ${ this.price },`)
    }
}


class Comic extends Book 
{
    constructor(name, author, price, ilustrators)
    {
        super(name, author, price); //accedo a la clase padre, a su constructor
        this.ilustrators = ilustrators;
    }

    addIlustrator(newIlustrator = [])
    {
        this.ilustrators.push(newIlustrator)
    }

    getAllData()
    {
        super.getAllData();
        console.log(`Ilustrador: ${ this.ilustrators }`);
    }
}


class ShoppingCart
{
    constructor()
    {
        this.products = [];
    }

    addProduct(amount, price)
    {
        this.products.push( ...Array(amount).fill(price) ); //... genera una copia del arreglo anterior, y concatenamos el resto
        // this.products.push( Array(amount).fill(price) );
    }

    showProducts()
    {
        console.log(this.products);
    }


    calcTotal()
    {
        return this.products
            .map(price => price)
            .reduce( (ac, price) => ac + price, 0);  
    }

    printTicket()
    {
        console.log(`Total a pagar ${ this.calcTotal() }`);
    }
}



const book1 = new Book('1984', 'Jorge O.', 580);
const comic1 = new Comic('The killing joke', 'A.M.', 150, ['B.B']);

// book1.title = 'mil novecientos ochenta y cuatro';

// console.log(book1.title); 
// console.log(comic1);
// console.log(comic1.ilustrators);

// comic1.addIlustrator('Jhon Higgins');
// console.log(comic1.ilustrators); 

const cart = new ShoppingCart();
cart.addProduct(2, comic1.price);
cart.addProduct(3, book1.price);
cart.showProducts();
cart.printTicket();

book1.getAllData();
comic1.getAllData();