$('#submit').click(function (event) {
    var name = $('#ad').val();
    var surname = $('#soyad').val();
    var telephone = $('#tel').val();
    var email = $('#email').val();
    var projects = $('#proje').val();
    var message = $('#mesaj').val();
    var nameReg = /^[A-Za-z]+$/;
    var numberReg = /^[0-9]+$/;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var kabul = $('#ke');
    var kdegil = $('#kt');

    if (name == "") {
        swal({
            title: 'Uyarı!',
            text: 'Lütfen adınızı giriniz',
            type: 'warning',
            confirmButtonText: 'OK'
        });
        event.preventDefault();
    
    } else if (!nameReg.test(name)) {
        swal({
            title: 'Uyarı!',
            text: 'Lütfen geçerli bir ad giriniz',
            type: 'warning',
            confirmButtonText: 'OK'
        });
        event.preventDefault();
    
    } else if (surname == "") {
        swal({
            title: 'Uyarı!',
            text: 'Lütfen soyadınızı giriniz',
            type: 'warning',
            confirmButtonText: 'OK'
        });
        event.preventDefault();
    
    } else if (!nameReg.test(surname)) {
        swal({
            title: 'Uyarı!',
            text: 'Lütfen geçerli bir ad giriniz',
            type: 'warning',
            confirmButtonText: 'OK'
        });
        event.preventDefault();
    
    } else if (telephone == "") {
        swal({
            title: 'Uyarı!',
            text: 'Lütfen telefon numaranızı giriniz',
            type: 'warning',
            confirmButtonText: 'OK'
        });
        event.preventDefault();
    
    } else if (!numberReg.test(telephone)) {
        swal({
            title: 'Uyarı!',
            text: 'Lütfen geçerli bir telefon numarası giriniz',
            type: 'warning',
            confirmButtonText: 'OK'
        });
        event.preventDefault();
    } else {
        $('#submit').click(function () {
            return true;
        });
    }
});




