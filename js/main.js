window.addEventListener('load', () => {

    // event.preventDefault();

    
   console.log('Funcionando');

    // Menu Fixed
        // When the user scrolls the page, execute myFunction
        window.onscroll = function() {myFunction()};

        // Get the header
        var header = document.getElementById("header-menu");

        // Get the offset position of the navbar
        var sticky = header.offsetTop;

        // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
        function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("menu-fixed");
        } else {
            header.classList.remove("menu-fixed");
        }
    } 

    // Menu desplegable
    let toggleMenu = document.querySelector('#btn-menu');
    let menu = document.querySelector('#menu-responsive');

    toggleMenu.addEventListener('click', (e)=> {

        e.preventDefault();
        if(menu.className === "menu"){
            menu.className += " responsive";
        }else {
            menu.className = "menu";
        }
    });

});