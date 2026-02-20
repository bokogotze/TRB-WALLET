document.addEventListener('DOMContentLoaded', function() {
    // Splash
    const splash = document.getElementById('splash');
    const login = document.getElementById('login');
    const wallet = document.getElementById('wallet');
    
    // Modals
    const profileModal = document.getElementById('profileModal');
    const historyModal = document.getElementById('historyModal');
    const investModal = document.getElementById('investModal');
    const withdrawModal = document.getElementById('withdrawModal');
    
    // Buttons
    const loginBtn = document.getElementById('loginBtn');
    const profileBtn = document.getElementById('profileBtn');
    const profileNavBtn = document.getElementById('profileNavBtn');
    const historyBtn = document.getElementById('historyBtn');
    const investBtn = document.getElementById('investBtn');
    const withdrawBtn = document.getElementById('withdrawBtn');
    const sendBtn = document.getElementById('sendBtn');
    const receiveBtn = document.getElementById('receiveBtn');
    
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
    historyBtn.addEventListener('click', () => historyModal.style.display = 'flex');
    investBtn.addEventListener('click', () => investModal.style.display = 'flex');
    withdrawBtn.addEventListener('click', () => withdrawModal.style.display = 'flex');
    
    // Send/Receive
    sendBtn.addEventListener('click', () => alert('📤 Contact @trb_agent to send'));
    receiveBtn.addEventListener('click', () => alert('📥 TRB Wallet: bc1qtrb...patriot'));
    
    // Close modals
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            profileModal.style.display = 'none';
            historyModal.style.display = 'none';
            investModal.style.display = 'none';
            withdrawModal.style.display = 'none';
        });
    });
    
    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            profileModal.style.display = 'none';
            historyModal.style.display = 'none';
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
