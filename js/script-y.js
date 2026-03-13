$(document).ready(function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let formSubmitted = false;

    function validateField(field) {
        const $field = $(field);
        const value = $field.val();
        let isValid = true;
        let errorId;

        switch($field.attr('id')) {
            case 'name':
                errorId = '#nameError';
                isValid = value.length > 0;
                break;
            case 'email':
                errorId = '#emailError';
                isValid = emailRegex.test(value);
                break;
            case 'movieTitle':
                errorId = '#movieError';
                isValid = value.length > 0;
                break;
        }

        if (formSubmitted) {
            if (isValid) {
                $field.removeClass('error');
                $(errorId).removeClass('show');
            } else {
                $field.addClass('error');
                $(errorId).addClass('show');
            }
        }

        return isValid;
    }

    $('#name, #email, #movieTitle, #genre').on('input change', function() {
        if (formSubmitted) {
            validateField(this);
        }
    });

    $('#requestForm').on('submit', function(e) {
        e.preventDefault();
        
        formSubmitted = true;
        
        const isNameValid = validateField(document.getElementById('name'));
        const isEmailValid = validateField(document.getElementById('email'));
        const isMovieValid = validateField(document.getElementById('movieTitle'));


        if (isNameValid && isEmailValid && isMovieValid) {
            $('#successMessage').show().addClass('show');
            
            this.reset();
            formSubmitted = false;
            
            $('.error').removeClass('error');
            $('.error-message').removeClass('show');
            
            setTimeout(function() {
                $('#successMessage').hide().removeClass('show');
            }, 5000);
        }
    });

  window.intercomSettings = {
    api_base: "https://api-iam.intercom.io",
    app_id: "jdgbjjvo",
  };

  // We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/jdgbjjvo'
  (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/jdgbjjvo';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
});