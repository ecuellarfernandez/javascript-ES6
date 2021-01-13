// Exercici 5
// Reemplaça en el següent bloc de codi la promesa per aync/await:

// function b() {
// }

// function a() {
//    b()
//    .then(()=> doMoreWork());
// }


const b = ()=>{
   // 
}

async function a(){
   try{
      let bPromise = await b();
      console.log(bPromise);
   }
   catch(error){
      console.log(error);
   }
}

a();
