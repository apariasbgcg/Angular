"use strict";
(() => {
    // class Avenger {
    //     nombre:string;
    //     equipo: string;
    //     nombreReal: string;
    //     puedePelear: boolean;
    //     peleasGanadas: number;
    //     constructor( nombre: string, equipo: string){
    //         this.nombre = nombre;
    //         this.equipo = equipo;
    //     }
    // }
    class Avenger {
        constructor(nombre, equipo, nombreReal, puedePelear, peleasGanadas) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    let antman = new Avenger('antman', 'capi');
    console.log(antman);
})();
