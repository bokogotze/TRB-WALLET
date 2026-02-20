document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const splash = document.getElementById('splash');
    const login = document.getElementById('login');
    const dashboard = document.getElementById('dashboard');
    const loginBtn = document.getElementById('loginBtn');
    
    // Modals
    const profileModal = document.getElementById('profileModal');
    const withdrawModal = document.getElementById('withdrawModal');
    const investModal = document.getElementById('investModal');
    
    // Buttons
    const profileBtn = document.getElementById('profileBtn');
    const miningBtn = document.getElementById('miningBtn');
    const walletBtn = document.getElementById('walletBtn');
    const teamBtn = document.getElementById('teamBtn');
    const acceleratorBtn = document.getElementById('acceleratorBtn');
    
    // Close buttons
    const closeBtns = document.querySelectorAll('.close-modal');
    
    // Splash to login
    setTimeout(() => {
        splash.style.opacity = '0';
        setTimeout(() => {
            splash.style.display = 'none';
            login.style.display = 'block';
        }, 500);
    }, 2000);
    
    // Login to dashboard
    loginBtn.addEventListener('click', () => {
        login.style.display = 'none';
        dashboard.style.display = 'block';
        startTimer();
    });
    
    // Profile
    profileBtn.addEventListener('click', () => profileModal.style.display = 'flex');
    
    // Bottom nav - open withdraw/invest modals
    miningBtn.addEventListener('click', () => investModal.style.display = 'flex');
    walletBtn.addEventListener('click', () => withdrawModal.style.display = 'flex');
    teamBtn.addEventListener('click', () => alert('Referral team: 12 active miners'));
    
    // Accelerator button
    acceleratorBtn.addEventListener('click', function() {
        alert('⚡ Accelerator activated! Mining speed boosted for 24h');
        // Reset timer
        startTimer();
    });
    
    // Close modals
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            profileModal.style.display = 'none';
            withdrawModal.style.display = 'none';
            investModal.style.display = 'none';
        });
    });
    
    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            profileModal.style.display = 'none';
            withdrawModal.style.display = 'none';
            investModal.style.display = 'none';
        }
    });
    
    // Navigation active
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Balance update simulation
    let balance = 12847.32;
    setInterval(() => {
        balance += 0.01;
        document.getElementById('mainBalance').textContent = '$' + balance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }, 3000);
});

// Timer function
function startTimer() {
    let hours = 23;
    let minutes = 59;
    let seconds = 59;
    
    const timerDisplay = document.getElementById('countdown');
    const progressFill = document.getElementById('miningProgress');
    const progressPercent = document.getElementById('progressPercent');
    
    setInterval(() => {
        if (seconds > 0) {
            seconds--;
        } else {
            if (minutes > 0) {
                minutes--;
                seconds = 59;
            } else {
                if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                }
            }
        }
        
        // Update timer
        timerDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        // Update progress (inverse of timer)
        const totalSeconds = 24 * 60 * 60;
        const currentSeconds = (hours * 3600) + (minutes * 60) + seconds;
        const progress = ((totalSeconds - currentSeconds) / totalSeconds) * 100;
        
        progressFill.style.width = progress + '%';
        progressPercent.textContent = Math.round(progress) + '%';
        
    }, 1000);
}

// Copy referral link
function copyRefLink() {
    navigator.clipboard.writeText('https://trb-mining.com/ref2242');
    alert('Referral link copied!');
}
