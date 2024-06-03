let deleteid=document.getElementById('deleteButton')
console.log(deleteid);

let customerId=window.localStorage.getItem("customerId")
console.log(id);

deleteid.addEventListener("click" , async(e)=>{

    e.preventDefault();

    try {
        const response = await fetch(`http://localhost:8080/customer?cus_id=${customerId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify(customer),
        });
    
        console.log(response.status);
      
      if(response.status === 302){
        window.localStorage.clear();
        window.localStorage.removeItem('customerId')
        window.alert("Customer deleted successfully...! ");
        console.log("successfully deleted");
        function o() {
          window.open("http://127.0.0.1:5501/customer/customerlogin.html")
       }
       setTimeout(() => {
          o();
       }, 2000)
      }
      if(response.status === 404){
        window.alert("error in deleting the customer please try again later ....!");
        console.log("not deleted");
      }
     }

      catch(error){
        window.alert('Error Occured In Deletion Of Customer');
     }
  })
    
    // try{
    // fetch(`http://localhost:8080/customer?cus_id=${id}`)
    // .then(Response =>Response.json())
    // .then(data =>{
    //     if(data.status===302){
           
    //           alert("custoomer data deleted  successfully")
 
    //          function o() {
    //           window.open("http://127.0.0.1:5501/index.html")
    //          }
    //          o(); 
    //     }
    //     if(response.status === 404){
    //         window.alert("Sorry For your Inconvenience There was an error in deleting the customer please try again later ....!");
    //         console.log("not deleted");
    //       }
        
    //     else{
    //        window.alert("please check customer id details")
    //     }
    // })

    // .catch(error =>{
    //     window.alert("error during login")
    //     console.log("error during login");
    // })
    // try {
    //     const response = await fetch(`http://localhost:8080/customer?id=${id}`,
    //     {
    //       method: "DELETE",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(customer),
    //     });
    //     console.log(response.status)
    // }
    // catch{

    // }
    
// })