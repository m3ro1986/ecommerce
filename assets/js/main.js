const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10,
      quantitySelected: 0
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 15,
      quantitySelected: 0
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'shirts',
      quantity: 20,
      quantitySelected: 0
    }
  ]

window.addEventListener ( 'scroll', () => { document.querySelector( 'header' ).classList.toggle( 'scroll-bar', window.scrollY > 0 ) })

function changeTheme () {
    document.body.classList.toggle( 'darktheme' );
    const themeBtn = document.getElementById ( 'themeBtn' );

    if ( themeBtn.classList.contains( 'bx-moon' ) ) {
        themeBtn.classList.replace( 'bx-moon', 'bx-sun' )
    }else{
        themeBtn.classList.replace( 'bx-sun', 'bx-moon' )
    }
}



function showBox ( box ) {
    document.getElementById( box ).classList.toggle( 'show' )
}

document.getElementById('hib-1').addEventListener( 'mouseover' , () => {
    document.getElementById('hib-1').classList.replace('hib-1', 'hib-2')
    document.getElementById('hib-2').classList.replace('hib-2', 'hib-1')
})

document.getElementById('hib-1').addEventListener( 'mouseout' , () => {
    document.getElementById('hib-1').classList.replace('hib-2', 'hib-1')
    document.getElementById('hib-2').classList.replace('hib-1', 'hib-2')
})

function sumCart( array ) {
    let sum = array.map( ele => ele.quantitySelected ).reduce((a, b) => a + b)
    let mul = array.map( ele => ele.quantitySelected * ele.price ).reduce((a, b) => a + b)

    return [sum, mul]
}


function addProduct( id ){
    // let item = items.find( ele => { ele.id === id})
    
    if ( items[ id - 1 ].quantitySelected < items[ id - 1 ].quantity) {
        items[ id - 1 ].quantitySelected++
    }else{
        alert("¡No puede agregar mas productos porque ya no hay en stock!")
    }

    document.getElementById( 'counter' ).innerHTML = sumCart( items )[0]

}