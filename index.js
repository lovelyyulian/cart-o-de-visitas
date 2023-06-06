function language() {
    if (document.getElementById('languageSettings').style.display === 'block') {
        DisplayNone();
    } else {
        DisplayBlock();
    }
} 

function DisplayBlock() {
    document.getElementById("languageSettings").style.display="block";
}
function DisplayNone() {
    document.getElementById("languageSettings").style.display="none";
}

if (select.value === 'portuguese') {
    document.h2 = 'Idioma';
}