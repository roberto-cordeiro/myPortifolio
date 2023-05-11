// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-bar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });
    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight)
}

    // Invite Form to my email //
    function submitForm() {
        // Gets the values ​​of form fields
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var number = document.getElementById("number").value;
        var emailSub = document.getElementById("emailSub").value;
        var message = document.getElementById("message").value;
    
        // Creates a link to send the email with the form values
        var link = "mailto:robertohuttener@gmail.com"
                 + "?subject=" + encodeURIComponent( emailSub )
                 + "&body=" + encodeURIComponent(message + "\n\nDe: " + name + " <" + email + ">" + number);

        // Message to alert the user to finish his email send
        window.alert("Thank you for your message, now, go to your Email-app to finish. ")

        // Opens the link in a new browser window
        window.location.href = link;

        //Resetting the fields
        document.getElementById("name").value = '';
        document.getElementById("email").value = '';
        document.getElementById("number").value = '';
        document.getElementById("emailSub").value = '';
        document.getElementById("message").value = '';

        // Prevents the form from being submitted via the default submission method
        event.preventDefault();
    }