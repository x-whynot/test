document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('contactModal');
    const btn = document.getElementById("ctnModal");
    const span = document.getElementsByClassName("close2")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

