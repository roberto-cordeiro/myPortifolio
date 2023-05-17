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

function toggleList(){
    let list = document.querySelector('#list-languages')
        if (list.style.display === 'none') {
            list.style.display = 'block'
        }else if(list.style.display === 'block') {
            list.style.display = 'none'
        }    
}
function closeList() {
    let list = document.querySelector('#list-languages') 
    if (list.style.display === 'block'){
        list.style.display = 'none'
    }
}

function translatePt() {
    /* Home section */

    /* Change links to Portuguese */
    let linkHome = document.getElementById('link-home')
    let newLinkHome = 'Inicio'
    linkHome.innerHTML = newLinkHome

    let linkAbout = document.getElementById('link-about')
    let newLinkAbout = 'Sobre'
    linkAbout.innerHTML = newLinkAbout

    let linkEducation = document.getElementById('link-education')
    let newLinkEducation = 'Educação & Projetos'
    linkEducation.innerHTML = newLinkEducation

    let linkSkills = document.getElementById('link-skills')
    let newLinkSkills = 'Habilidades'
    linkSkills.innerHTML = newLinkSkills

    let linkContact = document.getElementById('link-contact')
    let newLinkContact = 'Contato'
    linkContact.innerHTML = newLinkContact

    /* Change flag to Brazil */
    let flag = document.getElementById('img-flag')
    let newFlag = './assets/bra.png'
    flag.src = newFlag

    /* Change h1 to Portuguese */
    let titleHi = document.getElementById('title-name')
    let propHi = 'Olá, eu sou Roberto Cordeiro '
    titleHi.innerHTML = propHi

    /* Change name buttons */
    let buttoHire = document.getElementById('btn-hire')
    let newHire = 'Contratar'
    buttoHire.innerHTML = newHire

    let buttonTalk = document.getElementById('btn-talk')
    let newTalk = 'Conversar'
    buttonTalk.innerHTML = newTalk

    /* Change text home to Portuguese */
    let subTxt = document.getElementById('myIntro')
    let propTxt = 'Bem-vindo ao meu portfólio, fique à vontade para ver meus projetos, habilidades e outras informações sobre mim. Se desejar, terei o maior prazer em te atender, é só entrar em contato!'
    subTxt.innerHTML = propTxt

    /* Change check USA box to none */
    let checkUsa = document.getElementById('check-usa')
    checkUsa.style.display = 'none'

    /* Change check BRA box to none */
    let checkBra = document.getElementById('check-bra')
    checkBra.style.display = 'inline'

    /* About section */

    /* Change title about to portuguese */
    let titleAbout = document.getElementById('title-about')
    let newTitleAbout = 'Sobre mim'
    titleAbout.innerHTML = newTitleAbout

    /* Change about me text */
    let aboutMe = document.getElementById('about-me')
    let newABoutMe = 'Olá, meu nome é Roberto Cordeiro e sou Desenvolvedor Full Stack web/mobile. Sou comprometido com a qualidade dos projetos que realizo e sempre dou o meu melhor em tudo que faço.'
    aboutMe.innerHTML = newABoutMe

    /* Change button about me */
    let buttonAbout = document.getElementById('button-about')
    let newButtonAbout = 'Contactar'
    buttonAbout.innerHTML = newButtonAbout

    /* Education section */

    /* Change title education */
    let titleEducation = document.getElementById('title-education')
    let newTitleEducation = 'Trajetória'
    titleEducation.innerHTML = newTitleEducation

    /* Change subtitle education */
    let subtitleEducation = document.getElementById('subtitle-education')
    let newSubTitleEducation = 'Educação'
    subtitleEducation.innerHTML = newSubTitleEducation

    /* Change first course */
    let firstCourseEducation = document.getElementById('info-first-course')
    let newFirstCourseEducation = 'Tecnologias: Javascript, Nodejs, React & React Native, HTML & CSS, Mongodb e Postgresql.'
    firstCourseEducation.innerHTML = newFirstCourseEducation
    
    /* Change second course */
    let secondCourseEducation = document.getElementById('info-second-course')
    let newSecondCourseEducation = 'Tecnologias: HTML & CSS, SASS, Bootstrap, JS, PHP7, MySQL, JQuery, MVC, APIs e IONIC.'
    secondCourseEducation.innerHTML = newSecondCourseEducation

    /* Change third course */
    let thirdCourseEducation = document.getElementById('info-third-course')
    let newThirdCourseEducation = 'Tecnologias: JS e TS, React, Node, Express, noSQL, hooks, Redux, NextJs.'
    thirdCourseEducation.innerHTML = newThirdCourseEducation

    /* Change subtitle projects */
    let titleProjects = document.getElementById('title-projects')
    let newTitleProjects = 'Projetos'
    titleProjects.innerHTML = newTitleProjects

    /* Change first project */
    let firstProject = document.getElementById('first-project')
    let newFirstProject = 'Conversor de moeda online através da recuperação de uma API, converte os seguintes valores de BRL REAL: dólar, euro e bitcoin.'
    firstProject.innerHTML = newFirstProject

    /* Change second project */
    let secondProject = document.getElementById('second-project')
    let newSecondProject = 'Site do Spotify, totalmente responsivo usando Bootstrap.'
    secondProject.innerHTML = newSecondProject

    /* Change third project */
    let thirdProject = document.getElementById('third-project')
    let newThirdProject = 'Site profissional focado na área bancária, responsivo para desktop e mobile.'
    thirdProject.innerHTML = newThirdProject

    /* Skills section */

    /* Change Skills Title */
    let firstskillsTitle = document.getElementById('skills-title')
    let newFirstSkillsTitle = 'Minhas Habilidades'
    firstskillsTitle.innerHTML = newFirstSkillsTitle

    /* Change First Sub Skills Title */
    let firstSubkillsTitle = document.getElementById('skills-firstsub')
    let newFirstSubSkillsTitle = 'Habilidades de codificação'
    firstSubkillsTitle.innerHTML = newFirstSubSkillsTitle

     /* Change Second Sub Skills Title */
     let secondSubkillsTitle = document.getElementById('skills-secondsub')
     let newSecondSubSkillsTitle = 'Habilidades Profissionais'
     secondSubkillsTitle.innerHTML = newSecondSubSkillsTitle

    /* Contact section */

    /* Change Contact Title */
    let contactTitle = document.getElementById('contact-title')
    let newContactTitle = 'Contactar-me'
    contactTitle.innerHTML = newContactTitle

    /* Change Button Name */
    let buttonName = document.getElementById('submit-button')
    let newButtonName = 'Enviar'
    buttonName.innerHTML = newButtonName

    /* Fotter section */

    /* Change Footer info */
    let footerInfo = document.getElementById('footer-info')
    let newFooterInfo = 'Copyright © 2023 por Roberto Cordeiro | Todos os direitos reservados.'
    footerInfo.innerHTML = newFooterInfo

    

    
    

}
function translateUs() {
    /* Change flag to USA */
    let flag = document.getElementById('img-flag')
    let newFlag = './assets/usa.png'
    flag.src = newFlag
    /* Reload page */
    location.reload()
}



    

    