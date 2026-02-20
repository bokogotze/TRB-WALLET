// Wait for everything to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Elements
    const splash = document.getElementById('splash');
    const login = document.getElementById('login');
    const wallet = document.getElementById('wallet');
    const loginBtn = document.getElementById('loginBtn');
    const profileTrigger = document.getElementById('profileTrigger');
    const profileNavBtn = document.getElementById('profileNavBtn');
    
    // Modals
    const investModal = document.getElementById('investModal');
    const withdrawModal = document.getElementById('withdrawModal');
    const profileModal = document.getElementById('profileModal');
    const linkModal = document.getElementById('linkModal');
    const investBtn = document.getElementById('investBtn');
    const withdrawBtn = document.getElementById('withdrawBtn');
    const closeButtons = document.querySelectorAll('.modal-close');
    
    // Show splash for 2.5 seconds then show login
    setTimeout(() => {
        splash.style.opacity = '0';
        setTimeout(() => {
            splash.style.display = 'none';
            login.style.display = 'flex';
        }, 800);
    }, 2500);
    
    // Login button click
    loginBtn.addEventListener('click', function() {
        login.style.display = 'none';
        wallet.style.display = 'block';
        
        // Add entrance animation
        wallet.style.animation = 'fadeInUp 0.6s ease';
        
        // Start balance updates
        startBalanceUpdates();
    });
    
    // Profile triggers
    function openProfile() {
        profileModal.style.display = 'flex';
    }
    
    profileTrigger.addEventListener('click', openProfile);
    profileNavBtn.addEventListener('click', openProfile);
    
    // Invest button
    investBtn.addEventListener('click', function() {
        investModal.style.display = 'flex';
    });
    
    // Withdraw button
    withdrawBtn.addEventListener('click', function() {
        withdrawModal.style.display = 'flex';
    });
    
    // Send button (just for show)
    document.getElementById('sendBtn').addEventListener('click', function() {
        alert('🦅 SEND • Contact your executive agent to enable transfers');
    });
    
    // Receive button
    document.getElementById('receiveBtn').addEventListener('click', function() {
        alert('📍 TRB WALLET • bc1qtrb...goldeagle');
    });
    
    // Close modals
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            investModal.style.display = 'none';
            withdrawModal.style.display = 'none';
            profileModal.style.display = 'none';
            linkModal.style.display = 'none';
        });
    });
    
    // Click outside modal to close
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-overlay')) {
            investModal.style.display = 'none';
            withdrawModal.style.display = 'none';
            profileModal.style.display = 'none';
            linkModal.style.display = 'none';
        }
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
    
    // Navigation active state
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Balance animation function
    function startBalanceUpdates() {
        let balance = 173420694.20;
        const balanceElement = document.getElementById('mainBalance');
        
        setInterval(() => {
            // Random fluctuation between -50k and +70k
            const change = (Math.random() * 120000) - 50000;
            balance += change;
            
            // Format with commas
            const formatted = '$' + balance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            balanceElement.textContent = formatted;
            
            // Add pulse animation
            balanceElement.style.animation = 'none';
            balanceElement.offsetHeight; // Trigger reflow
            balanceElement.style.animation = 'glowPulse 0.5s ease';
        }, 4000);
    }
});

// Copy to clipboard function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('✅ Copied to clipboard');
    }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('✅ Copied to clipboard');
    });
}

// Open verification link
function openVerificationLink() {
    document.getElementById('withdrawModal').style.display = 'none';
    document.getElementById('linkModal').style.display = 'flex';
}

// Add parallax effect on scroll
window.addEventListener('scroll', () => {
    const balanceCard = document.querySelector('.balance-card');
    if (balanceCard) {
        const scrolled = window.pageYOffset;
        balanceCard.style.transform = `translateY(${scrolled * 0.05}px)`;
    }
});

// Prevent zoom on double tap (makes it feel more app-like)
document.addEventListener('touchmove', function(e) {
    if (e.scale !== 1) { e.preventDefault(); }
}, { passive: false });

// Add ripple effect to buttons
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (!this.classList.contains('modal-close') && !this.classList.contains('copy-button')) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = e.clientX - this.getBoundingClientRect().left + 'px';
            ripple.style.top = e.clientY - this.getBoundingClientRect().top + 'px';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        }
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 215, 0, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
        width: 100px;
        height: 100px;
        margin-left: -50px;
        margin-top: -50px;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes glowPulse {
        0%, 100% {
            text-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
        }
        50% {
            text-shadow: 0 0 40px rgba(255, 215, 0, 0.6);
        }
    }
`;
document.head.appendChild(style);
