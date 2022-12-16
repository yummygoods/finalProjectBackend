
//function to populate html with json of item retrieved from database
function addItemCard(item) {
    const itemHTML =
     '<div class="col-6 ">\n' +
        '<div class="card border-warning mx-2 min-">\n' +

              '<img src="' +  item.imageUrl + ' " class="card-img-top" alt="...">\n' +

             ' <div class="card-body ">\n' +

                  ' <h5 class="card-title">' +  item.name + '</h5>\n' +

                  ' <p class="card-text">' + item.description + '</p>\n' +

                  ' <h5 class="card-price"> $' +  item.price + '</h5>\n' +


                '<button id="button" type="submit" class="btn btn-warning fw-bold form-control w-50 ">need it</button>' +
             ' </div>\n' +
        '</div>\n';


    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}


// call to  get all items, turn them into json, and use that info to populate card html
fetch('/item/all', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },

}).then(response=>response.json()).then(itemsArray=>{

    for (let item of itemsArray) {
        console.log(item.name + item.description + item.price);

        addItemCard(item);
    }
}
).catch((error)=>{
    console.error('Error:', error);
}
);


