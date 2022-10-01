fetch('https://bootcamp-rent-car.herokuapp.com/admin/car')
    .then((data)=>{
        // console.log(data);
        return data.json();
        }).then((completedata)=>{
            // console.log(completedata[4].name);
            let data1 ="";
            completedata.map((values)=>{
                data1= `<div class="card">
                <h3>${values.name}</h3>
                <img src=${values.image} alt="img">
                <p class="catagory">${values.category}</p>
                <p class="price">${values.price}</p>
                </div>`;
            });
            document.getElementById("wrapper").innerHTML= data1;


        }).catch((err)=>{
            console.log(err);
        });