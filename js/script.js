const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".navbar");

const toggleNavbar = () => {
    nav_header.classList.toggle("active")
    
};

mobile_nav.addEventListener('click', () => toggleNavbar());

function sendEmail(){
    let name= document.getElementById("clientname").value;
    let email= document.getElementById("clientemail").value;
    let phone= document.getElementById("clientphone").value;
    let details= document.getElementById("details").value;
    let checkbox= document.getElementById("fromlko").value;



    Email.send({
        SecureToken :"deba718d-f6f1-4510-a782-9d99f15b727c",
        From : "singhabhisheklko315@gmail.com",
        To : "singhabhisheklko315@gmail.com",
        Subject : "lucknow foods enquiry",
        Body : "NAME:" + name + "<br> Email: " + email +"__"+"__"+ phone+ "__" + details + "__"+ checkbox
    }).then(
        message => alert("Query Submitted Succesfully")
    );
   
}

