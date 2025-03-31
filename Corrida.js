class Obj{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }

    des_img(){
        let img = new Image()
        img.src = this.a
        des.drawImage(img, this.x, this.y, this.w, this.h)
    }

    colid(objeto) {
        if((this.x < objeto.x + objeto.w)&&
            (this.x + this.w > objeto.x)&&
            (this.y < objeto.y + objeto.h)&&
            (this.y + this.h > objeto.y)){
            return true       
        }else{
            return false
        }
    }
}

class Jogador extends Obj{

    frame = 1
    tempo = 0
    dir = 0

    mov(){
        this.x += this.dir
        if(this.x <=2){
            this.x = 2
        }else if(this.x >= 746){
            this.x = 746
        }
    }
}

class Fundo extends Obj{
    mov(){
        this.y += 5
        if(this.y >= 600){
            this.y = -1200
        }
    }
}

class NaveInimigo extends Obj{
    velocidadeNave = 3
    mov(){
        this.y += this.velocidadeNave
        if(this.y >= 660){
            this.y = -100
            pontos += 1
            console.log(pontos)
            this.recomeca()
        }
    }
    
    recomeca(){
        this.y = -100
        this.x = Math.floor(Math.random() * ((736 - 2 + 1) + 2)) 
    }
}

class Text{
    des_text(text,x,y,cor,font){
        des.fillStyle = cor
        des.lineWidth = '5'
        des.font = font
        des.fillText(text,x,y)
    }
}


