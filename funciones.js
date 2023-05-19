let contactosArr = [];

function contacto(){ 

    let newCont = { "nombre": document.getElementById("nom").value,
                    "apellidos": document.getElementById("ape").value,
                    "origen": document.getElementById("ori").value,
                    "destino": document.getElementById("des").value,
                    "pasajeros": document.getElementById("pax").value,
                    "fecha": document.getElementById("fec").value
    };    

    contactosArr.push(newCont);  
 
    console.log(contactosArr);

};


function filter(){
    
    let destinoFil = [];

    for ( let i = 0 ; i < contactosArr.length ; i++ ){
        let paxDes = "";

        if(contactosArr[i].destino.toLowerCase() == "canarias" || contactosArr[i].destino.toLowerCase() == "mallorca" || contactosArr[i].destino.toLowerCase() == "galicia" ){
            paxDes = contactosArr[i] 
            destinoFil.push(paxDes);   
        };      
    };                                           
    console.log( destinoFil );  

    let contactoFilter = "";
    
        for ( let i = 0 ; i < destinoFil.length ; i++ ){ 
            contactoFilter += ` <ul>
                                <li>Nombre: ${destinoFil[i].nombre} </li>
                                <li>Apellidos: ${destinoFil[i].apellidos} </li>
                                <li>Destino: ${destinoFil[i].destino}</li>
                                </ul> `  
            document.getElementById("destinosFiltrados").innerHTML = contactoFilter;
        };       
};