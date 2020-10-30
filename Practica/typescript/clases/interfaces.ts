(()=>{
    
    interface xmen{
        nombre: string;
        edad: number;
        poder?: string;
    }
    const enviarMision = ( xmen: {nombre : string}) =>{

        console.log(`Enviando a ${xmen.nombre} a la mision`);
        
    }
    const regresarAlCuartel = ( xmen: {nombre : string}) =>{

        console.log(`Enviando a ${xmen.nombre} a la mision`);
        
    }

    const wolve: xmen = {
        nombre: 'logan',
        edad: 50
    }

    enviarMision(wolve);
})();