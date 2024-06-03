let btn=document.getElementById('btn')
console.log(btn)

let vname=document.getElementById('vname')
let email=document.getElementById('email')
let phone=document.getElementById('phone')
let password=document.getElementById('password')
let role=document.getElementById('role')
let costperday=document.getElementById('costperday')
let doornumber=document.getElementById('doornumber')
let street=document.getElementById('street')
let landmark=document.getElementById('landmark')
let state=document.getElementById('state')
let district=document.getElementById('district')
let pincode=document.getElementById('pincode')

   //REGULAR FUNCTIONS FOR PASSWORD TESTING

   function passwordval(){
    const password1=document.getElementById('password')
    const passwordval=document.getElementById('password').value
    let passwordreg=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,12}$/    
    if(passwordreg.test(passwordval)){
        return true;
    }
    else{
        return false;
    }
    }

     //REGULAR FUNCTIONS FOR EMAIL TESTING
     function emailValidate(){
        const email = document.getElementById("email")
        const emailVal = document.getElementById("email").value
        let emailReg = /^[a-zA-z0-9.`~!#$%^&*'+/-?_={|}]+@[a-zA-Z0-9-]+.+(?:\.[a-zA-Z0-9-]+)*$/;
        if((emailReg.test(emailVal))){
            return true;
        }
        else{
            return false;
        }   
    }

     //REGULAR FUNCTIONS FOR PHONE 
     function phoneValidate(){
        var phone = document.getElementById("phone");
        var phoneVal = document.getElementById("phone").value;
        let phoneReg = /^\d{10}$/;
        if((phoneReg.test(phoneVal))){
            return true
        }
        else{
            return false;
        }
    }

btn.addEventListener("click",async (e)=>{
    let field=document.getElementsByClassName("field")
    console.log(field);

    let inputcolor=document.getElementsByClassName('inputcolor');
    console.log(inputcolor);

    e.preventDefault()           // preventDefault() The page reload will be stopped
    if(vname.value===''){
        field[0].style.display="block";
    }
    else{
        field[0].style.display="none";
    }
     if(email.value===''){
        field[1].style.display="block";     
    }
    else{
        if(emailValidate()===false){
            let email=document.getElementById('emailval')   
            email.style.display="block"
            // field[1].style.border="3px solid red"
        }
        else{
        field[1].style.display="none"; 
        let email=document.getElementById('emailval')   
        email.style.display="none"
        }
    }
    
     if(phone.value===''){
        field[2].style.display="block";       
    }
    else{
        if(phoneValidate()===false){
            let phone=document.getElementById('phoneval')
            phone.style.display="block"
        }
        else{
            let phone=document.getElementById('phoneval')
            phone.style.display="none"
            field[2].style.display="none";   
            
        }   
    }
    
     if(password.value===''){
        field[3].style.display="block"; 
    }
    else{
        if(passwordval()===false){
        let val=document.getElementById('passwordval')
        val.style.display="block";
        // field[3].style.border="3px solid red"
        } 
        else{
            let val=document.getElementById('passwordval')
            val.style.display="none";
            field[3].style.display="none";
        }
    }
    if(role.value===''){
        field[4].style.display="block";
    }
    else{
        field[4].style.display="none";
    }
     
     if(costperday.value===''){
        field[5].style.display="block";
    }
    else{
        field[5].style.display="none";
    }
     if(doornumber.value===''){
        field[6].style.display="block";
    }
    else{
        field[6].style.display="none";
    }
     if(street.value===''){
        field[7].style.display="block";
    }
    else{
        field[7].style.display="none";
    }
     if(landmark.value===''){
        field[8].style.display="block";
    }
    else{
        field[8].style.display="none";
    }
     if(state.value===''){
        field[9].style.display="block";
    }
    else{
        field[9].style.display="none";
    }
     if(district.value===''){
        field[10].style.display="block";
    }
    else{
        field[10].style.display="none";
    }
     if(pincode.value===''){
        field[11].style.display="block";
    }
    else{
        field[11].style.display="none";
    }

    // cheking the backend table if the data is already present in the backend table
    // for integration to the backend database  for REGISTARTION
    if(vname.value != '' && email.value != '' &&  password.value != '' &&  phone.value != '' && costperday.value != '' && doornumber.value != '' && street.value != '' && landmark.value != '' && district.value != '' && state.value != '' && pincode.value != '') {

        const vendor={
            'name' : vname.value,
            'email' : email.value,
            'phone' : phone.value,
            'password' : password.value,
            'role':role.value,
            'costPerDay' : costperday.value,
            'address' : {
              'dno' : doornumber.value,
              'street' : street.value,
              'district' :district.value,
              'landmark' : landmark.value,
              'state' : state.value,
              'pincode' : pincode.value
            }
        }

     try{
    const response=await fetch ("http://localhost:8080/vendor",
    {
        method:"POST",
        headers :{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(vendor)
    });

    if(response.ok){
        const data = await response.json();
        console.log(data);
       window.alert("vendor login successfully")
       window.open("http://127.0.0.1:5501/vendor/vendorlogin.html")
        console.log("hii");
      
    }
    else if(response.status>=400){
        window.alert("You have Already Registered. Please Try To Login ");
        function o() {
            window.open("http://127.0.0.1:5501/vendor/vendorregister.html")
           }
        setTimeout(() => {
               o();
        }, 400);
            
    }
    else{
        window.alert("Failed to save account");
      }
    }
    catch(error){
        window.alert("error check the proper url ", error);

    }
 }

    else{
        window.alert("Please enter valid details");
    }
   },false);




