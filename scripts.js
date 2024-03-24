// adicionar algum script aqui se necessrio para interatividade ou validao de formulrios
// Exemplo de script simples para destacar o campo de formulário com erro de validação
const form = document.querySelector('.login-form');
form.addEventListener('submit', (event) => {
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        
        if (emailInput.value === '' || passwordInput.value === '') {
            event.preventDefault(); // Impedir envio do formulário se campos estiverem vazios
                    emailInput.style.border = '2px solid red';
                    passwordInput.style.border = '2px solid red';
                    alert('Por favor, preencha todos os campos.');
}});