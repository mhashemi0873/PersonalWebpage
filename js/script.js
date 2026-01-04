// Make sure these names match the 'onclick' in your HTML
function openSlider(id) {
    var modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Stop background scroll
    }
}

function closeSlider(id) {
    var modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable background scroll
    }
}

function shiftSlide(id, index) {
    var modal = document.getElementById(id);
    var wrapper = modal.querySelector('.custom-slider-wrapper');
    if (wrapper) {
        wrapper.style.transform = 'translateX(-' + (index * 50) + '%)';
    }
}