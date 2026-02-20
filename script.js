document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const splash = document.getElementById('splash');
    const login = document.getElementById('login');
    const wallet = document.getElementById('wallet');
    const loginBtn = document.getElementById('loginBtn');
    
    // Modals
    const profileModal = document.getElementById('profileModal');
    const investModal = document.getElementById('investModal');
    const withdrawModal = document.getElementById('withdrawModal');
    
    // Buttons
    const profileBtn = document.getElementById('profileBtn');
    const profileNavBtn = document.getElementById('profileNavBtn');
    const investBtn = document.getElementById('investBtn');
    const withdrawBtn = document.getElementById('withdrawBtn');
    
    // Close buttons
    const closeBtns = document.querySelectorAll('.close-modal');
    
    // Splash to login
    setTimeout(() => {
        splash.style.opacity = '0';
        setTimeout(() => {
            splash.style.display = 'none';
            login.style.display = 'flex';
        }, 500);
    }, 2000);
    
    // Login to wallet
    loginBtn.addEventListener('click', () => {
        login.style.display = 'none';
        wallet.style.display = 'block';
    });
    
    // Open modals
    profileBtn.addEventListener('click', () => profileModal.style.display = 'flex');
    profileNavBtn.addEventListener('click', () => profileModal.style.display = 'flex');
    investBtn.addEventListener('click', () => investModal.style.display = 'flex');
    withdrawBtn.addEventListener('click', () => withdrawModal.style.display = 'flex');
    
    // Close modals
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            profileModal.style.display = 'none';
            investModal.style.display = 'none';
            withdrawModal.style.display = 'none';
        });
    });
    
    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            profileModal.style.display = 'none';
            investModal.style.display = 'none';
            withdrawModal.style.display = 'none';
        }
    });
    
    // Navigation active
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
