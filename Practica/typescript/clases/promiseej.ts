(()=>{
    const sumar = (a:number, b: number):number => a + b;

    const nombre = ():string =>'Hola';
    
    const obtenerSalario =():Promise<string> =>{

        return new Promise((resolve,reject)=>{
        resolve('hola');
        });
    } 

    obtenerSalario().then(a => console.log(a.toUpperCase));
    )
})();