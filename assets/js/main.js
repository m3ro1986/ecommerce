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

