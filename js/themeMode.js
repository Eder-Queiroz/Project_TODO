const html = document.querySelector('html');
const checkbox = document.querySelector('input[name=theme]');

// pegar estilos do css
const getStyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style);

const initialColors = {
    // pegar direto do html a propriedade exata que eu quero
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    color: getStyle(html, "--color"),
    hoverColor: getStyle(html, "--hover-color"),
    image: getStyle(html, "--image"),
    iconImage: getStyle(html, "--icon-image")
}

const lightMode = {
    // colocando os estilos que eu quero para o lightMode
    bg: "#f9f9f9",
    bgPanel: "#ffffff",
    color: "#000000",
    hoverColor: "#333333",
    image: "url('../images/bg-desktop-light.jpg')",
    iconImage: "url('../images/icon-moon.svg')"
}
// ####

//transformando os nomes dos meus objetos em nomes de variaveis css
const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()
// ####

const changeColors = (colors) => {

    // pegando as chaves dos objetos e mapeando
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
    )

}

checkbox.addEventListener('change', ({target}) => {

    // Condição. Se ele tiver checked ativa o lightMode se não ativa o initialColors
    target.checked ? changeColors(lightMode) : changeColors(initialColors)

})