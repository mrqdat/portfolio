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
         document.getElementById('browser-theme-color').content = '#eaeaea';
    }

    if (mode == 'blue') {
        document.getElementById('theme-color').href = 'blue.css';
        document.getElementById('browser-theme-color').content = '#15202b';
    }

    if (mode == 'purple') {
        document.getElementById('theme-color').href = 'purple.css';
        document.getElementById('browser-theme-color').content = '#46344e';
    }

    if (mode == 'green') {
        document.getElementById('theme-color').href = 'green.css';
        document.getElementById('browser-theme-color').content = '#606b56';
    }

    localStorage.setItem('theme', mode);
}