if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

var itemName
var qq
var pp



function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }



    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    var qps = document.getElementsByClassName('qtyplus')
    var qms = document.getElementsByClassName('qtyminus')
    for (var i = 0; i < qps.length; i++) {
        var input = qps[i]
        input.addEventListener('click', quantityChangedPlus)
    }
    for (var i = 0; i < qms.length; i++) {
        var input = qms[i]
        input.addEventListener('click', quantityChangedMinus)
    }
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }


    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }


    var tabs = document.getElementsByClassName("tab");
      document.getElementById("food").style.display = "block";
      document.getElementById("cereals").style.display = "none";
      document.getElementById("desserts").style.display = "none";
/*      document.getElementById("edu1").style.display = "none";
      document.getElementById("confirmPosition").style.display = "none";
      document.getElementById("edu").style.display = "block";
      document.getElementById("but").style.display = "block";*/
    console.log(tabs)
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active")
      var currentid = current[0].firstElementChild.className
      current[0].className = current[0].className.replace(" active", "")
      this.className += " active"
      var nextid = this.firstElementChild.className
      document.getElementById(currentid).style.display = "none";
      document.getElementById(nextid).style.display = "block";

      })
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    console.log(buttonClicked)
    var shopItem = buttonClicked.parentElement.parentElement
    console.log(shopItem)
    var name = shopItem.getElementsByClassName('cart-item-title1')[0].innerText
    console.log("Below should be removed and above was event")
    console.log(name)
    buttonClicked.parentElement.parentElement.remove()
    
   
    var carts = document.getElementsByClassName('cart-items')
    console.log(" All carts corpus and carts.length")
    console.log(carts)
    console.log(carts.length)
//    console.log(cartRows)
    for (var j = 0; j < carts.length; j++) {
        var cartItemContainer = document.getElementsByClassName('cart-items')[j]
        console.log("for Loop operation : cart container identified")
        console.log(cartItemContainer)
        var cartItemNames = cartItemContainer.getElementsByClassName('cart-item-title')
        var cartRows = cartItemContainer.getElementsByClassName('cart-row')
        for (var i = 0; i < cartRows.length; i++) {
            console.log("below both should be equal")
            //console.log(cartRows[i].getElementsByClassName('cart-item-title')[0].innerText)
            name = name.trim()
            console.log(name)
            var name1 = cartRows[i].getElementsByClassName('cart-item-title')[0].innerText
            name1 = name1.trim()
            console.log(name1)
            console.log(name1==name)
            if (name1==name) {
                console.log("got the below to be zero")
                console.log(cartItemNames[i].innerText)
                console.log("below cart row selected")
                console.log(cartRows[i])

                cartRows[i].getElementsByClassName('cart-quantity-input')[0].value = 0
            }
        }
    }
    updateCartTotal()

}

function quantityChanged(event) {
    console.log("quantityChanged and event.target")
    var input = event.target
    console.log(input)

    var shopItem = input.parentElement.parentElement.parentElement
    console.log("shop item")
    console.log(shopItem)
    itemName = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    pp = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    qq = shopItem.getElementsByClassName('cart-quantity-input')[0].value
    imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    console.log(pp)
    console.log(qq)
    console.log(itemName)

    if (isNaN(input.value) || input.value <= 0) {
        input.value = 0
    }
   // console.log("quantityChanged")
    addItemToCart(itemName, pp, imageSrc)
    updateCartTotal()
}

function quantityChangedPlus(event) {
    console.log("quantityChanged PLUS and event.target")
    var input = event.target
    console.log(input)

    var shopItem = input.parentElement.parentElement.parentElement
    console.log("shop item")
    console.log(shopItem)
    itemName = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    pp = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    qq = shopItem.getElementsByClassName('cart-quantity-input')[0].value
    qq =  parseInt(qq)+1
   
    if (isNaN(qq) || qq <= 0) {
        qq = 0
    }
   
    shopItem.getElementsByClassName('cart-quantity-input')[0].value = qq
    imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    console.log(pp)
    console.log(qq)
    console.log(itemName)


   // console.log("quantityChanged")
    addItemToCart(itemName, pp, imageSrc)
    updateCartTotal()
}


function quantityChangedMinus(event) {
    console.log("quantityChanged PLUS and event.target")
    var input = event.target
    console.log(input)

    var shopItem = input.parentElement.parentElement.parentElement
    console.log("shop item")
    console.log(shopItem)
    itemName = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    pp = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    qq = shopItem.getElementsByClassName('cart-quantity-input')[0].value
    qq =  parseInt(qq)-1

    if (isNaN(qq) || qq <= 0) {
        qq = 0
    }

    shopItem.getElementsByClassName('cart-quantity-input')[0].value = qq
    imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    console.log(pp)
    console.log(qq)
    console.log(itemName)
   // console.log("quantityChanged")
    addItemToCart(itemName, pp, imageSrc)
    updateCartTotal()
}

function addToCartClicked(event) {
    console.log("addToCartClicked")
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    console.log(title)
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    console.log("adding to cart...")
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row1')
    var cartItems = document.getElementsByClassName('cart-items1')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title1')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
         /*   alert('This item is already added to the cart')
            return*/
            console.log("already in cart")
            cartItems.getElementsByClassName('cart-row1')[i].getElementsByClassName('cart-quantity-input1')[0].value = qq
            return
        }
    }

    if(qq <= 0){
     return
    }

    var cartRowContents = `
        <div class="cart-item1 cart-column1">
            <img class="cart-item-image1" src="${imageSrc}" width="100" height="100" hidden >
            <span class="cart-item-title1" style="font-size:10px;">${title}</span>
        </div>
            <input class="cart-quantity-input1" type="number" value="1" disabled>
        <div class="cart-quantity1 cart-column1">
             <span class="cart-price1 cart-column1 shop-item-price1" hidden> ${price}</span>
             <span class="cart-price2 cart-column2 "> ${price} </span>
            
              &nbsp; &nbsp; <button class="btn btn-danger btn-sm"  type="button" style="font-size:10px;">REMOVE</button>
        </div> <br>`
    cartRow.innerHTML = cartRowContents 
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input1')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    console.log("updating card total")
    var cartItemContainer = document.getElementsByClassName('cart-items1')[0]
    var cartItemNames = cartItemContainer.getElementsByClassName('cart-item-title1')
    var cartRows = cartItemContainer.getElementsByClassName('cart-row1')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == itemName && qq > 0) {
            cartRows[i].getElementsByClassName('cart-quantity-input1')[0].value = qq
        }
        if (qq <= 0){
              console.log("quantity zero detected")
              console.log(cartRows[i])
              if ( cartRows[i].getElementsByClassName('cart-quantity-input1')[0].value <= 0 ){
                  console.log("removing")
                  console.log(cartRows[i])
                  cartRows[i].remove()
               // updateCartTotal()

              }
             
        }
    }
    console.log(cartRows)
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price1')[0]
        var totalPriceElement = cartRow.getElementsByClassName('cart-price2')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input1')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        console.log((parseFloat(cartRow.getElementsByClassName('cart-quantity-input1')[0].value)*price))
        totalPriceElement.innerText =  Math.round(parseFloat(cartRow.getElementsByClassName('cart-quantity-input1')[0].value)*price*100) / 100
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price1')[0].innerText = '$' + total
}