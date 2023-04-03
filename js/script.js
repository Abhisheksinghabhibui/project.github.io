const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".navbar");

const toggleNavbar = () => {
    nav_header.classList.toggle("active")
    
};

mobile_nav.addEventListener('click', () => toggleNavbar());

function sendEmail(){
    console.log("hello");
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "singhabhisheklko315@gmail.com",
        Password : "6F585DC1D24F58FF51A6BC09CE75AA5BDB1E",
        To : "singhabhisheklko315@gmail.com",
        From : "singhabhisheklko315@gmail.com",
        Subject : "lucknow foods enquiry",
        Body : "Name:" + document.getElementById("clientname").value + "<br> Email: " +document.getElementById("clientemail").value + "<br> phone no: " + document.getElementById("clientphone").value + "<br> Messages: " + document.getElementById("details").value + "<br> from lucknow:" + document.getElementById("fromlko").value
    }).then(
        message => alert("Query Submitted Succesfully")
    );
   
};