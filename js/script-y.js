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
});