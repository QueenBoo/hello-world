const hamburgerIcon = document.querySelector('.menu');

// 2. ID the action to be completed when event happens
    // write the event handler to show or hide the menu

const toggleMenu = function() {
    const navBar = document.querySelector('.navbar');
    navBar.classList.toggle('open');
}

// 3. bind/attach the target element from step 1 to the event and the event handler function in step 2, through an event listener.
    // use addeventlistener to attach hamburger to event handler     

    hamburgerIcon.addEventListener('click', toggleMenu);