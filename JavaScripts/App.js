function showForm(formId) {
    var forms = document.getElementsByClassName('form-container');
    for (var i = 0; i < forms.length; i++) {
        forms[i].style.display = 'none';
    }
    document.getElementById(formId).style.display = 'block';
}
function login() {
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;

    var user = {
        email: email,
        password: password
    };

    fetch('http://localhost:8080/api/usuario/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error: ' + response.statusText);
        }
    }).then(data => {
        console.log('Inició sesión con éxito: ', data);
    }).catch(error => {
        console.error('Hubo un problema con la solicitud de inicio de sesión:', error);
    });
}

function register() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var user = {
        username: username,
        email: email,
        password: password
    };

    fetch('http://localhost:8080/api/usuario/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error: ' + response.statusText);
        }
    }).then(data => {
        console.log('Usuario registrado con éxito, ID: ', data);
    }).catch(error => {
        console.error('Hubo un problema con la solicitud de registro:', error);
    });
}

function evaluate() {
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var grasaCorporal = document.getElementById('grasaCorporal').value;
    var masaMuscular = document.getElementById('masaMuscular').value;

    var evaluacion = {
        peso: peso,
        altura: altura,
        grasaCorporal: grasaCorporal,
        masaMuscular: masaMuscular
    };

    fetch('http://localhost:8080/api/evaluacion/save', {  // Asegúrate de que este es el correcto endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(evaluacion)
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error: ' + response.statusText);
        }
    }).then(data => {
        console.log('Evaluación registrada con éxito, ID: ', data);
    }).catch(error => {
        console.error('Hubo un problema con la solicitud de evaluación:', error);
    });
}

