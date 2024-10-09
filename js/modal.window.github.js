document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('myGitHubModal');
    const btn = document.getElementById("githubModal");
    const span = document.getElementsByClassName("close1")[0];

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
