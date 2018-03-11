function getReport() {
    location.href = 'index.html#report';
    console.log('działa!');
}

function save() {
    var amount = document.getElementById('amount').value;
    alert(amount + " PLN");
    document.getElementById('amount').value = '';
}

function showInfo() {
    alert("Informacje o aplikacji!");
}

function quitApp() {
    navigator.app.exitApp();
}