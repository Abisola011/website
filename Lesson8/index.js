// Challenge 2:
// Replace the arguments below according to your preference.
 
// space, scary, military, romantic, cowboy, fantasy, superhero
favouriteMovieGenre("romantic")
 
// watermelon, tomato, banana, orange, avocado, blueberry
favouriteFruit("banana")
 
// light, dark
favouriteMode("dark")
 
// sharp, soft, round
favouriteEdgeStyle("round")
 
 
 
////////////////////////////////////
// IGONE THE CODE BELOW THIS LINE //
////////////////////////////////////
 
function setProp(prop, value) {
    document.documentElement.style.setProperty(prop, value)
}
 
function favouriteEdgeStyle(style) {
    setProp("--image", "var(--" + style + ")");
}
 
function favouriteMovieGenre(font) {
    if (font) {
        setProp("--font", "var(--" + font + ")");    
    }
}
 