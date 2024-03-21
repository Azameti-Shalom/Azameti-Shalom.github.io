let hamburger = document.getElementById("hamburgerMenu");

let sideBar = document.getElementById("sideBar");

let close = document.getElementById("close");

hamburger.addEventListener("click", () => {
  sideBar.classList.remove("sideBarClose");
  sideBar.classList.add("sideBarOpen");
});

close.addEventListener("click", () => {
  sideBar.classList.remove("sideBarOpen");
  sideBar.classList.add("sideBarClose");
});

const emailjsParams = {
  serviceID: "service_jtkrwmm",
  templateID: "template_57wlf2j",
  userID: "e0P-lgtgFQ0hmsn33sLtpM",
};

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("Name").value;
  const email = document.getElementById("Email").value;
  const message = document.querySelector("textarea").value;

  emailjs.send(emailjsParams.serviceID, emailjsParams.templateID, {
      from_name: name,
      reply_to: email,
      message_html: message,
    })
    .then(
      function (response) {
        console.log("Email sent successfully:", response);
        alert("Email sent succesfully");
      },
      function (error) {
        console.error("Error sending email:", error);
        alert("Error Sending Email");
      }
    );
});
