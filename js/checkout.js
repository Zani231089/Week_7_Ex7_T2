
displayCheck = () => {

    let data = JSON.parse(localStorage.getItem('order'))
    let items = document.getElementById('checkoutOrder');
    let totalArea = document.getElementById('totalOut');

    items.innerHTML = "";

    let checkTotal = 0;

    for(let i = 0; i < data.length; i++){

        let name = data[i].pizzaName;
        let size = data[i].pizzaSize;
        let base = data[i].pizzaBase;
        let toppings = data[i].pizzaToppings;
        let price = data[i].pizzaPrice; 

        checkTotal += price;

        items.innerHTML += `
        <div class="orderLine">
            <p><strong>Pizza </strong>${name}</p>
            <p><strong>Size </strong>${size}</p>
            <p><strong>Base </strong>${base}</p>
            <p><strong>Toppings </strong>${toppings}</p>
            <p><strong>Price </strong>${price}</p>
        </div>`

        totalArea.innerHTML = "R" +checkTotal + "0.00"
    }

}

resetReturn = () => {
    localStorage.removeItem('order')
    window.location.href = '../index.html'
}