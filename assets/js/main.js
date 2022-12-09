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