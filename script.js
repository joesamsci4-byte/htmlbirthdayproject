const countdownScreen = document.getElementById("countdownScreen");
const welcomeScreen = document.getElementById("welcomeScreen");
const mainContent = document.getElementById("mainContent");

/*
SET THE BIRTHDAY DATE HERE
Format: Year, Month-1, Day, Hour, Minute, Second
*/
const birthday = new Date(2026, 4, 8, 0, 0, 0);

function updateCountdown() {
    const now = new Date();
    const diff = birthday - now;

    if (diff <= 0) {
        countdownScreen.style.display = "none";
        welcomeScreen.style.display = "flex";

        setTimeout(() => {

            welcomeScreen.style.opacity = "0";

            setTimeout(() => {

                welcomeScreen.style.display = "none";
                mainContent.style.display = "block";

            }, 800);

        }, 2500);

        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);

updateCountdown();



document.addEventListener('DOMContentLoaded', function() {            
    // Tab switching
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetTab) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Expandable love letter
    const loveLetter = document.getElementById('loveLetter');
    loveLetter.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });
    
});


function playSong(id) {
    const songs = document.querySelectorAll("audio");
    songs.forEach(song => {
        if (song.id !== id) {
            song.pause();
            song.currentTime = 0;
        }
    });

    const selectedSong = document.getElementById(id);
    selectedSong.play();
}

function pauseSong(id) {
    const selectedSong = document.getElementById(id);
    selectedSong.pause();
}