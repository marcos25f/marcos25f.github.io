import qrcode

imagem = qrcode.make("https://marcos25f.github.io")
imagem.save("primeiro-qrcode.jpg")