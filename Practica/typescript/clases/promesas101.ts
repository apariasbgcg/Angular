(()=>{
    
    console.log('Inicio');

    const prom1 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('se terminó el timeout');
        }, 1000);
    });
    
    prom1.then(mensaje => console.log(mensaje));

    console.log('Fin');

})