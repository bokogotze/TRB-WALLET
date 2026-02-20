document.addEventListener('DOMContentLoaded', function() {
    
    // Elements
    const splash = document.getElementById('splash');
    const login = document.getElementById('login');
    const wallet = document.getElementById('wallet');
    const loginBtn = document.getElementById('loginBtn');
    
    // Modals
    const profileModal = document.getElementById('profileModal');
    const historyModal = document.getElementById('historyModal');
    const investModal = document.getElementById('investModal');
    const withdrawModal = document.getElementById('withdrawModal');
    
    // Buttons
    const profileTrigger = document.getElementById('profileTrigger');
    const profileNavBtn = document.getElementById('profileNavBtn');
    const historyBtn = document.getElementById('historyBtn');
    const investBtn = document.getElementById('investBtn');
    const withdrawBtn = document.getElementById('withdrawBtn');
    const sendBtn = document.getElementById('sendBtn');
    const receiveBtn = document.getElementById('receiveBtn');
    
    // Close buttons
    const closeButtons = document.querySelectorAll('.close');
    
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
    
    // Profile modal
    profileTrigger.addEventListener('click', () => profileModal.style.display = 'flex');
    profileNavBtn.addEventListener('click', () => profileModal.style.display = 'flex');
    
    // History modal
    historyBtn.addEventListener('click', () => historyModal.style.display = 'flex');
    
    // Invest modal
    investBtn.addEventListener('click', () => investModal.style.display = 'flex');
    
    // Withdraw modal
    withdrawBtn.addEventListener('click', () => withdrawModal.style.display = 'flex');
    
    // Send button
    sendBtn.addEventListener('click', () => {
        alert('Contact agent to send: @trb_agent');
    });
    
    // Receive button
    receiveBtn.addEventListener('click', () => {
        alert('TRB Wallet: bc1qtrb...patriot');
    });
    
    // Close modals
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            profileModal.style.display = 'none';
            historyModal.style.display = 'none';
            investModal.style.display = 'none';
            withdrawModal.style.display = 'none';
        });
    });
    
    // Click outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            profileModal.style.display = 'none';
            historyModal.style.display = 'none';
            investModal.style.display = 'none';
            withdrawModal.style.display = 'none';
        }
    });
    
    // Navigation active state
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
