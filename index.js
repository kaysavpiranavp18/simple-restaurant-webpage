function scrolltoabout(){
    const target = document.getElementsByClassName('about')[0];
    target.scrollIntoView({behavior : 'smooth'});
}
function openmenu(category) {

    const allMenus = document.querySelectorAll('.menu-items');
    
    allMenus.forEach(menu => {
        if (menu.id !== category) {
            menu.style.display = 'none';
        }
    });

    const menuItems = document.getElementById(category);
    if (menuItems.style.display === "block") {
        menuItems.style.display = "none"; 
    } else {
        menuItems.style.display = "block";  
    }
}
function scrolltomenu(){
    const target = document.getElementsByClassName('menu')[0];
    target.scrollIntoView({behavior : 'smooth'});
}
function scrolltospecials(){
    const target = document.getElementsByClassName('specials')[0];
    target.scrollIntoView({behavior : 'smooth'});
}
function scrolltoreviews(){
    const target = document.getElementsByClassName('reviews')[0];
    target.scrollIntoView({behavior : 'smooth'});
}
function scrolltobooktable(){
    const target = document.getElementsByClassName('book-table')[0];
    target.scrollIntoView({behavior : 'smooth'});
}
function scrolltocontact(){
    const target = document.getElementsByClassName('contact')[0];
    target.scrollIntoView({behavior : 'smooth'});
}
function scrolltohome(){
    const target = document.getElementsByClassName('home')[0];
    target.scrollIntoView({behavior : 'smooth'});
}