


        console.log("hey bitchez");

   fetch('/item/all', {
       method: 'GET',
       // or 'PUT'
       headers: {
           'Content-Type': 'application/json',
       },
       //body: JSON.stringify(data),
   }).then(response=>response.json()).then(itemsArray=>{
       // console.log('Success:', itemsArray);
       for (let item of itemsArray) {
           console.log(item.price);
           console.log(item.name);
           console.log(item.description);

   addItemCard(item);


       }

   }
   ).catch((error)=>{
       console.error('Error:', error);
   }
   );






   function addItemCard(item) {
     const itemHTML = '<div class="card" style="width: 18rem;">\n' +
     '<img src="' + item.imageUrl + ' " class="card-img-top" alt="...">\n' +
     ' <div class="card-body">\n' +
       ' <h5 class="card-title">\n' + item.name + '</h5>\n' +
       ' <h5 class="card-price">\n' + item.price + '</h5>\n'
      + ' <p class="card-text">\n' + item.description + '</p>\n' +
       ' <a href="#" class="btn btn-primary">Add to cart</a>\n' +
     ' </div>\n' +
     '</div>\n';
     const itemsContainer = document.getElementById("list-items");
     itemsContainer.innerHTML += itemHTML;
   }