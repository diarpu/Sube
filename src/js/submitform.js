import { Report } from 'notiflix/build/notiflix-report-aio.js';

Report.init({
    fontFamily:"Quicksand",
    useGoogleFont:true,
    titleFontSize: "18px",
    messageFontSize: "16px",
    buttonFontSize: "14px",
    backgroundColor:"#f3f3f3",
    backOverlayColor: "rgba(40, 189, 20, 0.1)",
    rtl: false,
    
    success: {
        svgColor:"var(--color-success)",
        titleColor: "var(--color-success)",
        messageColor: "var(--font-color)",
        buttonBackground: "var(--color-success)",
        buttonColor: "var(--color-white)",
    }, 
});

$(function () {


    // Get the form.

    var form = $('#form-contact');



    // Get the messages div.

    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.

    $(form).submit(function (e) {

        // Stop the browser from submitting the form.

        e.preventDefault();

        // Serialize the form data.

        var formData = $(form).serialize();

        document.querySelector("#submit span").innerHTML = "Enviando...";
        document.querySelector("#submit").style.pointerEvents = "none";
        // document.querySelector("#submit span").toggleAttribute('disabled', true);

        // Submit the form using AJAX.
        $.ajax({

                type: 'POST',

                url: $(form).attr('action'),

                data: formData

            })

            .done(function (response) {

                // Make sure that the formMessages div has the 'success' class.

                $(formMessages).removeClass('error');

                $(formMessages).addClass('success');

                document.getElementById("form-messages").style.display = "block";

                // Set the message text.

                $(formMessages).text(response);

                // Clear the form.

                $('#name').val('');

                $('#email').val('');

                $('#phone').val('');

                document.getElementById("check-term").checked = false;

                Report.success(
                    '¡BIENVENIDO!',
                    '"Ya has sido registrado, pronto nos comunicaremos contigo." <br><br> - SUBE',
                    'Cerrar'
                );

                document.querySelector("#submit span").innerHTML = "Quiero mi Web";
                document.querySelector("#submit").style.pointerEvents = "all";
                // setTimeout( function() {document.querySelector("#submit span").toggleAttribute('disabled', false);}, 4100 );

                // setTimeout( function() {document.getElementById("form-messages").style.display = "none" ;}, 4000 );

                setTimeout( function() {window.location.href = 'https://www.paypal.com/invoice/p/#KPLHQESH6FVDSC7Z';}, 4200 );

            })

            .fail(function (data) {

                // Make sure that the formMessages div has the 'error' class.

                $(formMessages).removeClass('success');

                $(formMessages).addClass('error');

                // Set the message text.

                if (data.responseText !== '') {

                    $(formMessages).text(data.responseText);

                } else {

                    $(formMessages).text('No se obtiene ningún dato');

                    document.getElementById("submit").toggleAttribute('disabled', false);

                    document.getElementById("submit").innerHTML = "Quiero mi Web";

                }

            });

    });



});