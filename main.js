var names = ["Charlie", "Max", "Buddy", "Milo", "Archie", "Ollie", "Oscar", "Teddy", "Leo"]
var ages = [9, 7, 2, 8, 3, 1, 1, 1, 2]
var descriptions = ["Animal", "Animal","Animal","Animal","Animal","Animal","Animal","Animal","Animal"]
var images = ["1.jpg", "2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"]
var animals = []
var cart = []
var displayHtml = ""
for (let index = 0; index < names.length; index++) {
    const name = names[index];
    const age = ages[index];
    const description = descriptions[index]
    const image = images[index]
    var animal = {
        id: index,
        name,
        description,
        ages,
        image,
        quantity: 1
    }
    animals.push(animal);
    displayHtml += `
                <div class="col-4">
                        <div class="card mb-4 box-shadow">
                        <img src="images/${image}" class="card-img-top mt-2" alt="..." width="100%"
                        height="160px">
                            <div class="card-body">
                                <h4 class="card-title">${name}</h4>
                                <p class="card-text">${description}</p>
                                    <button onclick="addToCart(${index})" style="width:160px" type="button" id="add">+ J'adopt</button>
                                    <p class="font-weight-bold">${age} Months old</p>
                                </div>
                            </div>
                        </div>
                </div>`
}
document.getElementById("animals").innerHTML = displayHtml;





const form = document.getElementById('form-group');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('nameInput').value
    const Adresse = document.getElementById('Adresse').value
    const description = document.getElementById('description').value
    var newAnimal = {
        id: animals.length,
        name,
        description,
        quantity: 1
    }
    if (name == "" || description == "" || Adresse == "") {
        alert('add content!');
    }
    animals.push(newAnimal)
    console.log(animals)
    displayHtml += `
    <div class="col-4">
            <div class="card mb-4 box-shadow">
            
                <div class="card-body">
                    <h4 class="card-title">${name}</h4>
                    <p class="card-text">${description}</p>
                        <button  style="width:160px" type="button" id="add">+ J'adopt</button>
                        <p class="font-weight-bold">${Adresse} Months old</p>
                    </div>
                </div>
            </div>
    </div>`
    document.getElementById("add").innerHTML = displayHtml;
})