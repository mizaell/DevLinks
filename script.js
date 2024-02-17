function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  // if (html.classList.contains("light")) {
  //   //img.setAttribute("src", "./assets/avatar-light.png")
  //   img.setAttribute("alt",
  //       "Foto de Mayk Brito sorrindo, usando uma jaqueta óculos escuros e camisa preta, sem barba e fundo colorido")    
  // } else {
  //  // img.setAttribute("src", "./assets/mizael.jpg")
  //    img.setAttribute("alt",
  //      "Foto de Mizael, usando óculos e camisa vermelha")  
  // }

}