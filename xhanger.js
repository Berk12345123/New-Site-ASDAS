function notifH(mesaj) { toastr.error(mesaj); }
function notifS(mesaj) { toastr.success(mesaj); }
function notifI(mesaj) { toastr.info(mesaj); }


var ajis = 0;
function eval_ajax(data) { if (ajis == 0) { ajis = 1; $.ajax({ url: "../../ajax.php", async: true, data: data, type: 'POST', success: function(result){ ajis = 0; eval(result); } }); } else { notifH('Devam eden bir iÅŸlem bulunmaktadÄ±r. LÃ¼fen devam eden iÅŸlemin bitmesini bekleyiniz.'); } }
function html_ajax(data) { if (ajis == 0) { ajis = 1; $.ajax({ url: "../../ajax.php", async: true, data: data, type: 'POST', success: function(result){ ajis = 0; $('#ajax_return').html(result); } }); } else { notifH('Devam eden bir iÅŸlem bulunmaktadÄ±r. LÃ¼fen devam eden iÅŸlemin bitmesini bekleyiniz.'); } }


function giris_yap() {
    var data = {
        islem: 'giris',
        login: $('#giris_user_login').val(),
        password: $('#giris_user_pass').val()
    }
    eval_ajax(data);
}

function kayit_ol() {
    var data = {
        islem: 'kayit',
        email: $('#kayit_user_login').val(),
        login: $('#kayit_user_loginuser').val(),
        password: $('#kayit_user_pass').val(),
        password2: $('#kayit_user_passc').val()
    }
    eval_ajax(data);
}