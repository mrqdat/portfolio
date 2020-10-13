let themeDots = document.getElementsByClassName("theme-dot");

let theme = localStorage.getItem('theme');

if(theme == null){
    setTheme('light');
}
else{
    setTheme(theme);
}

for(var i = 0; themeDots.length > i; i++ ){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log(mode);
        setTheme(mode);
    })
}

function setTheme(mode){
    if(mode == 'light'){
         document.getElementById('theme-color').href = 'main.css';
         document.querySelector("meta[name=theme-color]").setAttribute('content','#eaeaea');
    }

    if (mode == 'blue') {
        document.getElementById('theme-color').href = 'blue.css';
        document.querySelector("meta[name=theme-color]").setAttribute('content','#15202b');
    }

    if (mode == 'purple') {
        document.getElementById('theme-color').href = 'purple.css';
        document.querySelector("meta[name=theme-color]").setAttribute('content','#46344e');
    }

    if (mode == 'green') {
        document.getElementById('theme-color').href = 'green.css';
        document.querySelector("meta[name=theme-color]").setAttribute('content','#606b56');
    }

    localStorage.setItem('theme', mode);
}


// function sendEmail(){
//     var subject = $('#subject').val();
//     var email = $('#email').val();
//     var mess = $('#message').val();
//     var newmess = mess.replace(/\s/g,"%20");
//     Email.send({
//         SercurityToken: "ad6a197a-2f80-4d84-99af-bcf5179009cf",
//         To : 'Q.Dat@outlook.com',
//         From : email,
//         Subject : subject,
//         Body : mess
//         }).then(
//             alert('Mail sent successfully')
//             );
// }

