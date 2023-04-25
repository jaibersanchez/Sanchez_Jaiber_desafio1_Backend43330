class ProductManager {
    constructor(products) {
      this.products = [];
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      const product = {
        id: this.products.length + 1,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
  
      if (title == undefined || description == undefined || price == undefined || thumbnail == undefined || code == undefined || stock == undefined) {
        console.log('Completar todos los campos');
      } else {
        const productFound = this.products.some((item) => item.code == code);
        if (productFound) {
          console.log('El producto ya existe');
        } else {
          this.products.push(product);
        }
      }
    }
  
    getProducts() {
      console.log(this.products);
    }
  
    getProductById(id) {
      const productFound = this.products.find((item) => item.id == id);
      if (productFound) {
        console.log('El producto es ', productFound);
      } else {
        console.log('No se encuentra');
      }
    }
  }
  
  const product1 = new ProductManager();
  /* product1.getProducts(); */
  
  product1.addProduct('producto prueba 1', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);
  product1.addProduct('producto prueba 2', 'Este es un producto prueba', 400, 'Sin imagen', 'abc124', 44);
  product1.addProduct('producto prueba 3', 'Este es un producto prueba', 500, 'Sin imagen', 'abc125', 10);
  product1.getProducts();
  product1.getProductById(1);