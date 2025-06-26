  console.log("Hello World!");
            let a=10;
            let b=20;
            let sum= a+b;
            console.log("Sum:"+ sum);
            //create a new elemnt and save in variable called newHeading
            let newHeading = document.createElement("h1");
            //add some cntent to newly created heading
            newHeading.textContent = "Basic of JavaScript";
            //add a color for the heading
            newHeading.style.color= "Red"
            //find the dive where you wnat to add heading and save it in a variable
            let messageArea= document.getElementById("message-area");
            let element= document.querySelector(".color");
            //append heading as child of the div
            messageArea.appendChild(newHeading);
            function validate(){
                    let nameinput= document.getElementById("name-input");
                    if(nameinput.value.trim() == ""){
                        let message= document.getElementById("errors");
                        message.textContent="Please enter your name";
                        
                    }
                    else{
                        let message= document.getElementById("errors");
                        message.textContent="";
                    }
                    
            }
            