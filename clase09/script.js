const viewCartBtn=  document.getElementById("view-cart-btn");
const productListDiv = document.getElementById("product-list");
const cartCountSpan = document.getElementById("cart-count");

//let cart = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* if(JSON.parse(localStorage.getItem("cart")){
    cart = JSON.parse(localStorage.getItem("cart"));
}else {
    cart = []
} */


async function fecthProducts() {
    try {
        const respuesta = await fetch('products.json');
        console.log(respuesta);
        if (!respuesta.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await respuesta.json();
        console.log(data);
        displayProducts(data);
    }catch(error){
        Swal.fire({
          icon: "info",
          title: "Error al obtener productos",
          text: `${err}`,
        });
    }
}

function displayProducts(products){
    productListDiv.innerHTML = ""; // Limpiar la lista de productos
    products.forEach((product)=>{
        const productCard = document.createElement('div');
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}"/>
            <h3>${product.name}</h3>
            <p>$ ${product.price}</p>
            <button data-id="${product.id}" > Agregar al carrito</button>
        `;
        productListDiv.appendChild(productCard)
    })

    document.querySelectorAll(".product-card button").forEach((button)=>{
        button.addEventListener("click",(evt)=>{
            const productId = parseInt(evt.target.dataset.id)
            const productToAdd = products.find((item)=> item.id = productId)
            if(productId){
                addToCart(productToAdd);
            }
        })
    })
}

function updateCartCount() {
    cartCountSpan.textContent = cart.reduce(
        (acc, item)=> acc + item.quantity, 0)
}

function addToCart(product) {
    const existingProduct = cart.find((item)=> item.id === product.id)

    if(existingProduct){
        existingProduct.quantity += 1;
    }else {
        cart.push({...product, quantity: 1})
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    //actualizar cantidad carrito
    updateCartCount()
    Toastify({
      text: `${product.name} agregado al carrito`,
      duration: 3000,
      gravity: "bottom",
      position: "right",
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      stopFocus: true,
    }).showToast();
}

function showCart() {
    if(cart.length === 0){
        Swal.fire({
            icon: 'info',
            title: 'Carrito vacío',
            text: 'No hay productos en el carrito',
        })
        return;
    }

    let cartContent = '<ul style="list-style: none; padding: 0;">';
    let total = 0;

    cart.forEach((item)=> {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        cartContent += `
        <li style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; border-bottom: 1px dotted #ccc; padding-bottom: 5px;">
                    <span>${item.name} x ${item.quantity}</span>
                    <span>$${itemTotal.toFixed(2)} 
                        <button class="remove-from-cart-btn" data-id="${
                          item.id
                        }" style="background-color: #dc3545; color: white; border: none; border-radius: 3px; padding: 3px 8px; cursor: pointer; margin-left: 10px;">X</button>
                    </span>
                </li>
            `;
    });
    cartContent += `</ul>`;
        cartContent += `<p style="font-weight: bold; font-size: 1.2rem; text-align: right; margin-top: 20px;">Total: $${total.toFixed(
          2
        )}</p>`;

    const now = luxon.DateTime.local()
                    .setLocale('es')
                    .toLocaleString(luxon.DateTime.DATETIME_MED);
    cartContent += `<p style="font-style: italic", font-size: 0.9rem; text-align: right; color: #666>Fecha actual: ${now}</p>`

    Swal.fire({
        title: 'Carrito de Compras',
        html: cartContent,
        width: 600,
        showCancelButton: true,
        confirmButtonText: 'Finalizar Compra',
        cancelButtonText: 'Seguir Comprando',
        didOpen: () => {
            document.querySelectorAll(".remove-from-cart-btn").forEach((button)=>{
                button.addEventListener("click", (evt)=>{
                    // elimiar producto del carrito
                    const productoToRemove = parseInt(evt.target.dataset.id)
                    removeFromCart(productoToRemove)
                    // vuelve a abrir el carrito
                    showCart()
                })
            })
        }
    }).then((result)=> {
        if(result.isConfirmed){
            Swal.fire({
                icon: "success",
                title: 'Compra Exitosa',
                text: `Gracias por su compra!`
            })
            // limpiar el carrito
            cart = [];
            localStorage.removeItem("cart");
            updateCartCount();
        }
    })
}

function removeFromCart(productId){
    cart = cart.filter((item)=> item.id !== productId)
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}


viewCartBtn.addEventListener('click', showCart)

fecthProducts();
updateCartCount() 
