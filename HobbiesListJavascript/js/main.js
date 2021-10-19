const root=document.getElementById("root");
const ol=document.createElement("ul");
const errorMsg = document.getElementById("error-msg");

 
function AddHobby(){
    var hobby=document.getElementById("hobby").value;
    document.getElementById("error-msg").innerHTML='';
    if(hobby ==""){
        const span = document.createElement("span");
            span.innerHTML = "Please Add your Hobby";
            errorMsg.appendChild(span);
            return false;
    }  
    const li=document.createElement("li");
    li.innerHTML=hobby;
    ol.appendChild(li);
    root.appendChild(ol);
    root.style.display='';
    document.getElementById("hobby").value="";    
    
}

function displayList(){
    var rootElement = document.getElementById("root");
    rootElement.style.display ='none';
}
