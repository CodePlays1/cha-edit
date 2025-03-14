//Header fixed


window.onscroll = function () {
  const docScrollTop = document.documentElement.scrollTop;

  if (window.innerWidth > 991) {
    if (docScrollTop > 100) {
      document.querySelector("header").classList.add("fixed");
    } else {
      document.querySelector("header").classList.remove("fixed");
    }
  }
}

//navbar links

const navbar = document.querySelector(".navbar");
a = navbar.querySelectorAll("a")

a.forEach(function (element) {
  element.addEventListener("click", function () {
    for (let i = 0; i < a.length; i++) {
      a[i].classList.remove("active")
    }
    this.classList.add("active");
    document.querySelector(".navbar").classList.toggle("show");
  })
})




//Footer Year 
var year = document.getElementById("year");
year.textContent = new Date().getFullYear();


// DOM Elements
const sendButton = document.getElementById("send");
const popup = document.getElementById('popup');
const popupMessage = document.querySelector(".popup-content p");

// Function to send email using EmailJS
function SendMail() {
    // Get form values
    const params = {
        from_name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        message: document.getElementById("text").value.trim(),
    };

    // Validate form fields
    if (!params.from_name || !params.email || !params.message) {
        alert("Please fill out all fields before sending.");
        return; // Stop execution if validation fails
    }


    // Send email using EmailJS
    emailjs.send("service_jhtml96", "template_3vo0dza", params)
        .then(function (res) {
            // On success
            popup.style.display = 'flex';
            popupMessage.textContent = "Your email has been received. Thank you!";
            setInterval(() => {
              window.location.reload(true);
          }, 3000); // Refreshes the page every 5 seconds (5000ms)
          

        })
        .catch(function (error) {
            // On error
            popup.style.display = 'flex';
          popupMessage.textContent = "Something went wrong. Please try later.";
          setInterval(() => {
            window.location.reload(true);
        }, 3000); // Refreshes the page every 5 seconds (5000ms)
        


        });
}

// Event listener for the send button
sendButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    SendMail(); // Call the SendMail function
});

// Close the popup when the close button is clicked
document.querySelector(".close").addEventListener("click", function () {
    popup.style.display = 'none';
});

// Close the popup if clicked outside
window.addEventListener("click", function (event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});