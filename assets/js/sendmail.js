
 
 // EmailJS Initialization



 (function(){
    emailjs.init("_cIYmprZz-sz7gIos");
    })();


(function ($) {
    // Start of use strict
    'use strict';

    /* Contact Form Submission */
    $(document).on('click', '.mailsendbtn .btn', function () {
        var frm = $(this).parents('form');

        //Template options
        var templateOptions = {
            name: $('input[name="name"]').val(),
            notes: 'Richiesta Preventivo',
            from_name: $('input[name="name"]').val(),
            from_mail: $('input[name="email"]').val(),
            user_email: $('input[name="email"]').val(),
            user_tel: $('input[name="phone"]').val(),
            user_brand: $('input[name="brand_model"]').val(),
            user_shift: $('input[name="shift"]').val(),
            user_targa: $('input[name="targa"]').val(),
            message: $('textarea[name="message"]').val()
        };

        var emailreg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

        var valid = true;

        if (templateOptions.name.trim() == "") {
            $('#name_error').html("Immettere un nome.");
            valid = false;
        } else {
            $('#name_error').html("");
        }

        if (templateOptions.from_mail.trim() == "") {
            $('#email_error').html("Immettere una mail.");
            valid = false;
        } else if (!emailreg.test(templateOptions.from_mail)) {
            $('#email_error').html("Immettere una mail valida.");
            valid = false;
        } else {
            $('#email_error').html("");
        }

        if (templateOptions.user_tel.trim() == "") {
            $('#tel_error').html("Immettere un numero di telefono.");
            valid = false;
        } else {
            $('#tel_error').html("");
        }


        if (templateOptions.user_brand.trim() == "") {
            $('#brand_error').html("Immettere una Marca ed un Modello.");
            valid = false;
        } else {
            $('#brand_error').html("");
        }


        if (templateOptions.user_shift.trim() == "") {
            $('#shift_error').html("Immettere il tipo di cambio.");
            valid = false;
        } else {
            $('#shift_error').html("");
        }


        if (templateOptions.user_targa.trim() == "") {
            $('#targa_error').html("Immettere un numero di telaio o targa.");
            valid = false;
        } else {
            $('#targa_error').html("");
        }

        if (templateOptions.message.trim() == "") {
            $('#message_error').html("Immettere richiesta.");
            valid = false;
        } else {
            $('#message_error').html("");
        }

        if (valid) {
            $(".loading").show();

            emailjs.send('service_wd8bsif', 'template_rmuf9tv', templateOptions)
            .then(function(response) {
                $(".loading").hide();

                $('.response-msg').html("Richiesta di preventivo inviata con successo, ti abbiamo inviato una mail con i dettagli della tua richiesta!");
                $('#contact-form')[0].reset();

            }, function(error) {
                $('.response-msg').html("Si è verificato un problema inaspettato, riprovi più");
            });

        }
        return false;
    });

})(jQuery);

