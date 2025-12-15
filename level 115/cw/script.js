fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        const product = data[0]; 


        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-price').textContent = ფასი: ${product.price} ₾;
      })
