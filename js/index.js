const usuarios= {
                'anatorres@gmail.com':{'nombre':'ana','password':'1111', 'numCta':'335588974'},
                'torresana@gmail.com':{'nombre':'ana torres','password':'2222', 'numCta':'335587459'},
                'lauratorres@gmail.com':{'nombre':'laura','password':'3333', 'numCta':'335583671'}
            };

const loginButton= document.getElementById('login');
loginButton.addEventListener('click', function(e){
    const inputEmail = document.getElementById('inputEmail');
    const email = inputEmail.value;

    if(usuarios[email] !=null){
        const inputPassword = document.getElementById('inputPassword');
        const contrasenia = inputPassword.value;

        if (usuarios[email]['password']== contrasenia){
            window.location.href = '/htmls/cuenta_usuario.html?numCta=' +usuarios[email]['numCta'];
        } else{
            alert('Contraseña incorrecta');
        }
    } else{
        alert('Correo incorrecto');
    }
});