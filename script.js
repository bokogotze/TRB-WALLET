// Wait for everything to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Elements
    const splash = document.getElementById('splash');
    const login = document.getElementById('login');
    const wallet = document.getElementById('wallet');
    const loginBtn = document.getElementById('loginBtn');
    
    // Modals
    const investModal = document.getElementById('investModal');
    const withdrawModal = document.getElementById('withdrawModal');
    const linkModal = document.getElementById('linkModal');
    const investBtn = document.getElementById('investBtn');
    const withdrawBtn = document.getElementById('withdrawBtn');
    const closeButtons = document.querySelectorAll('.close-modal');
    
    // Show splash for 2 seconds then show login
    setTimeout(() => {
        splash.style.opacity = '0';
        setTimeout(() => {
            splash.style.display = 'none';
            login.style.display = 'flex';
        }, 500);
    }, 2000);
    
    // Login button click
    loginBtn.addEventListener('click', function() {
        // Auto-success - no validation needed since fields are prefilled
        login.style.display = 'none';
        wallet.style.display = 'block';
        
        // Add animation
        wallet.style.animation = 'fadeInScale 0.5s ease';
    });
    
    // Invest button
    investBtn.addEventListener('click', function() {
        investModal.style.display = 'flex';
    });
    
    // Withdraw button
    withdrawBtn.addEventListener('click', function() {
        withdrawModal.style.display = 'flex';
    });
    
    // Close modals
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            investModal.style.display = 'none';
            withdrawModal.style.display = 'none';
            linkModal.style.display = 'none';
        });
    });
    
    // Click outside modal to close
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            investModal.style.display = 'none';
            withdrawModal.style.display = 'none';
            linkModal.style.display = 'none';
        }
    });
    
    // Send button (just for show)
    document.getElementById('sendBtn').addEventListener('click', function() {
        alert('🦅 SEND • Contact agent to enable transfers');
    });
    
    // Receive button
    document.getElementById('receiveBtn').addEventListener('click', function() {
        alert('📍 YOUR WALLET • bc1qtrb...goldeagle');
    });
    
    // Hover effects on assets
    document.querySelectorAll('.asset-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Balance ticker effect (fake updates)
    let balance = 173420694.20;
    setInterval(() => {
        const change = (Math.random() * 10000) - 5000;
        balance += change;
        document.querySelector('.main-balance').textContent = '$' + balance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }, 5000);
});

// Copy to clipboard function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('✅ Copied! Share with agent');
    });
}

// Open verification link
function openVerificationLink() {
    document.getElementById('withdrawModal').style.display = 'none';
    document.getElementById('linkModal').style.display = 'flex';
}

// Add cool parallax effect
window.addEventListener('scroll', () => {
    const balanceCard = document.querySelector('.balance-card');
    if (balanceCard) {
        const scrolled = window.pageYOffset;
        balanceCard.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Prevent zoom on double tap (makes it feel more app-like)
document.addEventListener('touchmove', function(e) {
    if (e.scale !== 1) { e.preventDefault(); }
}, { passive: false });

// Add loading effect to buttons
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (!this.classList.contains('copy-btn') && !this.classList.contains('close-modal')) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        }
    });
});