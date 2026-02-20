document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const splash = document.getElementById('splash');
    const login = document.getElementById('login');
    const wallet = document.getElementById('wallet');
    const loginBtn = document.getElementById('loginBtn');
    
    // Modals
    const modals = {
        profile: document.getElementById('profileModal'),
        history: document.getElementById('historyModal'),
        invest: document.getElementById('investModal'),
        withdraw: document.getElementById('withdrawModal')
    };
    
    // Buttons
    const profileTrigger = document.getElementById('profileTrigger');
    const profileNavBtn = document.getElementById('profileNavBtn');
    const historyBtn = document.getElementById('historyBtn');
    const investBtn = document.getElementById('investBtn');
    const withdrawBtn = document.getElementById('withdrawBtn');
    const sendBtn = document.getElementById('sendBtn');
    const receiveBtn = document.getElementById('receiveBtn');
    
    // Close buttons
    const closeButtons = document.querySelectorAll('.modal-close');
    
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
    profileTrigger.addEventListener('click', () => modals.profile.style.display = 'flex');
    profileNavBtn.addEventListener('click', () => modals.profile.style.display = 'flex');
    historyBtn.addEventListener('click', () => modals.history.style.display = 'flex');
    investBtn.addEventListener('click', () => modals.invest.style.display = 'flex');
    withdrawBtn.addEventListener('click', () => modals.withdraw.style.display = 'flex');
    
    // Send/Receive alerts
    sendBtn.addEventListener('click', () => alert('Contact @trb_agent to send'));
    receiveBtn.addEventListener('click', () => alert('TRB Wallet: bc1qtrb..'));
    
    // Close modals
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            Object.values(modals).forEach(modal => {
                modal.style.display = 'none';
            });
        });
    });
    
    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            Object.values(modals).forEach(modal => {
                modal.style.display = 'none';
            });
        }
    });
    
    // Nav active state
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
