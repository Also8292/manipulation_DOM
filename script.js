/**
 * couleur initiale
 */
var couleur = 'blue';
var hauteur = 100;
var largeur = 100;



document.querySelector('#rectangle').style.backgroundColor = couleur;
document.querySelector('#rectangle').style.height = hauteur + 'px'; 
document.querySelector('#rectangle').style.width = largeur + 'px'; 

/**
 * fonction redimension
 */
function resize() {
    document.querySelector('#rectangle').style.height = hauteur + 10 + 'px'; 
}


/**
 * fonction couleur de fond vert
 */
function vert() {
    document.querySelector('#rectangle').style.backgroundColor = 'green'; 
}


/**
 * fonction couleur initiale
 */
function initialColor() {
    document.querySelector('#rectangle').style.backgroundColor = couleur; 
}


/**
 * fonction disparaitre
 */
function disparaitre() {
    document.querySelector('#rectangle').style.visibility = "hidden"; 
}


/**
 * fonction aparaitre
 */
function aparaitre() {
    document.querySelector('#rectangle').style.visibility = "visible"; 
}