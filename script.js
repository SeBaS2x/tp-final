// video - historia 
const playV=()=>{
    let video = document.getElementById("videoHistoria");
    video.play()
    document.querySelector("#showTime").textContent=`00: ${video.duration}`
    console.log(video.duration.toFixed(0))
    }


const pauseV =()=>{
    let video = document.getElementById("videoHistoria")
    video.pause();
}

//jugo, drop


let img1= document.querySelector("#imagen1");
let img2= document.querySelector("#imagen2");
let img3= document.querySelector("#imagen3");
let caja1 =document.querySelector("#cajasoltar")
let caja2 =document.querySelector("#cajasoltar2")
let caja3 =document.querySelector("#cajasoltar3")
const onarrastre=(evento)=>{
    console.log("inicio");
    let infoImg=evento.target.src; //donde esta la imagen
    evento.dataTransfer.setData("Text",infoImg);  //guardando dato en dataTranfer
    evento.dataTransfer.setData("Text/plain",infoImg);
    evento.dataTransfer.setData("text/html",infoImg); 
}

img1.addEventListener('dragend',()=>{
    console.log("fin");
})



// no pude lograr que las imagenes tambien se pongan en los demas contenedors. no se que mas hacer.... y no tengo mucho mas tiempo.


caja1.addEventListener('dragover',(event)=>{
    console.log("salio de la zona");
    event.preventDefault()
})
caja1.addEventListener('drop',(event)=>{
    console.log("drop")
    let infoObtenida =event.dataTransfer.getData("Text");
    console.log(infoObtenida)

    caja1.innerHTML= `
        <img src=${infoObtenida} alt="imagenrompe" height="400px" width"275px"/>
        `
    img1.style.display="none"
    })



caja2.addEventListener('dragover',(event)=>{
    console.log("salio de la zona");
    event.preventDefault()
})
caja2.addEventListener('drop',(event)=>{
    console.log("drop")
    let infoObtenida =event.dataTransfer.getData("Text/plain");
    console.log(infoObtenida)

    caja1.innerHTML= `
        <img src=${infoObtenida} alt="imagenrompe" height="400px" width"275px"/>
        `
        img2.style.display="none"
})
caja3.addEventListener('dragover',(event)=>{
    console.log("salio de la zona");
    event.preventDefault()
})
caja3.addEventListener('drop',(event)=>{
    console.log("drop")
    let infoObtenida =event.dataTransfer.getData("Text");
    console.log(infoObtenida)

    caja1.innerHTML= `
        <img src=${infoObtenida} alt="imagenrompe" height="400px" width"275px"/>
     `
     img3.style.display="none"
})
// no continue con el boton, porque no pude realizar que las imagenes se pongan en las demas cajas 
const reinicio=()=>{
    let boton=document.querySelector(".botonesVideo reinicio")
}


