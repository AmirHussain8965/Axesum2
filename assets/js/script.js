// On Scroll navbar BG-Color Change Javascript ==============================
window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Text Circle anmation on hero Section ======================================

const text = document.querySelector(".text");
text.innerHTML = text.innerText
    .split("")
    .map(
        (char, i) => `<span style="transform:rotate(${i * 11}deg)">${char}</span>`
    )
    .join("");


document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.pop_cat_buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active_btn'));
            button.classList.add('active_btn');
        });
    });
});


// Star Rating JQuery ========================================================
$(document).ready(function() {
    $('.star-rating').each(function() {
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


// SIDEBAR ======================================================

$("#btn_toggle").click(function () {
    $(".dashboard_sidebar_main_div").toggle("")
});
$("#btn_toggle_mobile").click(function () {
    $(".dashboard_sidebar_main_div").toggle("")
});