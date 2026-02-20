document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const splash = document.getElementById('splash');
    const login = document.getElementById('login');
    const dashboard = document.getElementById('dashboard');
    const loginBtn = document.getElementById('loginBtn');
    
    // Modals
    const profileModal = document.getElementById('profileModal');
    const agentModal = document.getElementById('agentModal');
    const withdrawModal = document.getElementById('withdrawModal');
    
    // Buttons
    const profileBtn = document.getElementById('profileBtn');
    const agentBtn = document.getElementById('agentBtn');
    const depositBtn = document.getElementById('depositBtn');
    const withdrawBtn = document.getElementById('withdrawBtn');
    const statementBtn = document.getElementById('statementBtn');
    const supportBtn = document.getElementById('supportBtn');
    
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
    
    // Login to dashboard
    loginBtn.addEventListener('click', () => {
        login.style.display = 'none';
        dashboard.style.display = 'block';
    });
    
    // Profile
    profileBtn.addEventListener('click', () => profileModal.style.display = 'flex');
    
    // Agent contact
    agentBtn.addEventListener('click', () => agentModal.style.display = 'flex');
    
    // Deposit
    depositBtn.addEventListener('click', () => {
        alert('Please contact your agent Sarah Johnson at 1-800-555-0123 to add funds');
    });
    
    // Withdraw
    withdrawBtn.addEventListener('click', () => withdrawModal.style.display = 'flex');
    
    // Statement
    statementBtn.addEventListener('click', () => {
        alert('Your statements are being prepared. Agent will contact you shortly.');
    });
    
    // Support
    supportBtn.addEventListener('click', () => agentModal.style.display = 'flex');
    
    // Close modals
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            profileModal.style.display = 'none';
            agentModal.style.display = 'none';
            withdrawModal.style.display = 'none';
        });
    });
    
    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            profileModal.style.display = 'none';
            agentModal.style.display = 'none';
            withdrawModal.style.display = 'none';
        }
    });
    
    // Navigation
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Handle navigation
            const text = this.querySelector('span').textContent;
            if (text === 'Support') agentModal.style.display = 'flex';
            if (text === 'Portfolio') alert('Portfolio summary: $247,389.42 total');
            if (text === 'Documents') alert('Documents available in secure portal');
        });
    });
});
    navigator.clipboard.writeText('https://trb-mining.com/ref2242');
    alert('Referral link copied!');
}

