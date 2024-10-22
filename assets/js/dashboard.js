// Heart Fill Javascript ======================================================

document.querySelectorAll('.favorite-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const icon = button.querySelector('i');
        icon.classList.toggle('bi-heart');
        icon.classList.toggle('bi-heart-fill');
        icon.classList.toggle('favorite');
    });
});


// Star Rating JQuery ========================================================
$(document).ready(function() {
    $('.org_rating').each(function() {
        var $starRating = $(this);

        $starRating.children('i').on('click', function() {
            var rating = $(this).data('rating');
            $starRating.attr('data-rating', rating);
            updateStars($starRating, rating);
        });

        $starRating.children('i').on('mouseover', function() {
            var rating = $(this).data('rating');
            updateStars($starRating, rating);
        });

        $starRating.on('mouseleave', function() {
            var rating = $starRating.attr('data-rating');
            updateStars($starRating, rating);
        });

        function updateStars($starRating, rating) {
            $starRating.children('i').each(function() {
                if ($(this).data('rating') <= rating) {
                    $(this).removeClass('bi-star').addClass('bi-star-fill');
                } else {
                    $(this).removeClass('bi-star-fill').addClass('bi-star');
                }
            });
        }
    });
});

function incrementValue() {
    const input = document.getElementById('number');
    const currentValue = parseInt(input.value, 10);

    input.value = currentValue + 1;
    document.querySelector('.decrement').disabled = false; // Enable the decrement button
}

function decrementValue() {
    const input = document.getElementById('number');
    const currentValue = parseInt(input.value, 10);

    if (currentValue > 1) {
        input.value = currentValue - 1;
        if (currentValue - 1 === 1) {
            document.querySelector('.decrement').disabled = true; // Disable the decrement button if value becomes 1
        }
    }
}

function validateValue(input) {
    const currentValue = parseInt(input.value, 10);

    if (currentValue <= 1 || isNaN(currentValue)) {
        input.value = 1;
        document.querySelector('.decrement').disabled = true; // Disable the decrement button if value is 1 or less
    } else {
        document.querySelector('.decrement').disabled = false; // Enable the decrement button if value is more than 1
    }
}



document.querySelectorAll('.create_event_modal_check_btns_inner input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        // Toggle background on the parent label
        if (checkbox.checked) {
            checkbox.parentElement.style.backgroundColor = '#7B00D9'; // Example background color
            checkbox.parentElement.style.border = '1px solid #7B00D9'; // Example background color
        } else {
            checkbox.parentElement.style.backgroundColor = ''; // Reset background color
            checkbox.parentElement.style.border = '1px solid #93989A'; // Example background color
        }
    });
});


// Get all the audience cards
const audienceCards = document.querySelectorAll('.choose_audience_card input[type="radio"]');

// Add a 'change' event listener to each radio button
audienceCards.forEach(radio => {
    radio.addEventListener('change', function() {
        // Remove the 'selected' class from all labels
        document.querySelectorAll('.choose_audience_card').forEach(card => {
            card.classList.remove('selected');
        });
        // Add the 'selected' class to the parent label of the checked radio button
        this.closest('.choose_audience_card').classList.add('selected');
    });
});
