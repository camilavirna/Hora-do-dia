function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.innerHTML = '<img style="border-radius: 50%" width="250" height="250" src="fotodia.jpg">'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde!
        img.innerHTML = '<img style="border-radius: 50%" width="250" height="250" src="fototarde.jpg">'
        document.body.style.background = '#b5846f'
    } else {
        //Boa Noite!
        img.innerHTML = '<img style="border-radius: 50%" width="250" height="250" src="fotonoite.jpg">'
        document.body.style.background = '#515154'
    }
}

