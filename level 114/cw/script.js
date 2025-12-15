
fetch('https://fakestoreapi.com/products/1')
  .then(response => response.json()) 
  .then(giorgi => {
    console.log("მთლიანი JSON ობიექტი:", data);

    console.log("ID:", giorgi.id);
    console.log("სათაური (title):", giorgi.title);
    console.log("ფასი (price):", giorgi.price);
    console.log("აღწერა (description):", giorgi.description);
    console.log("კატეგორია (category):", giorgi.category);
  })
  .catch(error => {
    console.error("შეცდომა:", error);
  });