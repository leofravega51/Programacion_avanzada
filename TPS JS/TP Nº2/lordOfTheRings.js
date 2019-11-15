//Juego del señor de los anillos

function jugador (nombre){
    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;

    var noSP = `${this.nombre} no tiene suficientes SP, deberas cargarlos!`;

    this.atacar = function(jugador){
        
        if(this.sp > 10){
            jugador.pv -= Math.floor(Math.random() * 21);
            this.sp -= 10;
            return `${jugador.nombre}(pv:${jugador.pv},sp:${jugador.sp})`;
        }else{
            console.log(noSP);
        }
        
        if(jugador.pv <= 0){
            console.log(`${jugador.nombre} ha sido derrotado!`);
        }
    } 

    this.curar = function(jugador){
        
        if(this.sp >= 10){
            jugador.pv+= 15;
            this.sp -= 10;
        }else{
            console.log(noSP);
            
        }

        if(jugador.pv > 100){
            jugador.pv = 100;
        }


        return `${jugador.nombre}(pv:${jugador.pv},sp:${jugador.sp})`;
    }

    this.cargarSP = function(jugador){
        if(this.sp == 100){
            console.log(`Ya tienes la cantidad maxima de sp!`);
        }else{
            this.sp += 20;
            if(this.sp > 100){
                this.sp = 100;
            }
            return `${jugador.nombre}(pv:${jugador.pv},sp:${jugador.sp})`;
        }
    }

}



var orco = new jugador("Orco");
var legolas = new jugador("Legolas");


