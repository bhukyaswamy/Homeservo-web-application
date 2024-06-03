// customer_uploadwork js code
let btn = document.getElementById("btn")
console.log(btn);


btn.addEventListener("click" , (e) => {
    e.preventDefault()
    let span = document.getElementsByTagName("span")
    console.log(span);
   let work = document.getElementById("workType").value
   console.log(work);
  
   let door = document.getElementById("door-no").value
   console.log(door);
   let street = document.getElementById("street").value
   console.log(street);
   let land = document.getElementById("land-mark").value
   console.log(land);
   let district = document.getElementById("district").value
   console.log(district);
   let state = document.getElementById("state").value
   console.log(state);
   let pin = document.getElementById("pin-code").value
   console.log(pin);
   
   if(work === "")
   {
      span[1].style.display = "block"

   }
   else if(door === ""){
      span[3].style.display = "block"
   }else if(street === ""){
    span[5].style.display = "block"
   }else if(land === ""){
    span[7].style.display = "block"
   }else if(district === ""){
    span[9].style.display = "block"
   }else if(state === ""){
    span[11].style.display = "block"
   }else if(pin === ""){
    span[13].style.display = "block"
   }
   else{
      uploadWork();
   }
  
   
   
})


let uploadWork= async() =>{

 let work = document.getElementById("workType").value
let door = document.getElementById("door-no").value
let street = document.getElementById("street").value
let land = document.getElementById("land-mark").value
let district = document.getElementById("district").value
let state = document.getElementById("state").value
let pin = document.getElementById("pin-code").value

var customerId = localStorage.getItem('customerId');
const worksave = {
    "workType":work,
    'address' : {
      'dno' : door,
      'street' : street,
      'district' :district,
      'landmark' : land,
      'state' : state,
      'pincode' : pin
    }
}

try{
   let response= await fetch(`http://localhost:8080/work?cus_id=${customerId}`, 
   {
      method: "POST",
      headers: {
         "Accept": "application/json",
         "Content-Type": "application/json"
      },
      body: JSON.stringify(worksave)
   })
   if(response.ok){
   console.log(response);
   window.alert("work successfully uploaded!");
   window.close();
   }
}
catch(error){
    window.alert("error check the proper url and customer id ", error);
  } 
}