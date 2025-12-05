var input = document.querySelector('#date')
var btn = document.querySelector(".btn")
var result = document.querySelector(".result")
btn.addEventListener('click',function(){
     var a = input.value
    if(a==""){
      alert("Enter your date of birth ")
    }
    else{
        console.log("input", input.value);
        const dob = new Date(input.value);
        console.log("DOB",dob);
        const dob_year = dob.getFullYear();
        console.log("dob year",dob_year);


        //current
        const now = new Date();
        console.log(  "current date", now)
        const now_year = now.getFullYear();
        console.log("current year",now_year);
        const age = now_year - dob_year;
        console.log("Age",age);



        result.innerHTML = `Your Age is ${age}`+" Year";
    }  
})
