// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Get elements
    const balanceEl = document.getElementById('balance');
    const batteryFill = document.getElementById('batteryFill');
    const batteryPercent = document.getElementById('batteryPercent');
    const mineBtn = document.getElementById('mineBtn');
    const miningRateEl = document.getElementById('miningRate');
    const batteryUsageEl = document.getElementById('batteryUsage');
    const totalMinedEl = document.getElementById('totalMined');
    const historyList = document.getElementById('historyList');
    const withdrawBtn = document.getElementById('withdrawBtn');
    const withdrawModal = document.getElementById('withdrawModal');
    const closeModal = document.getElementById('closeModal');
    
    // Game variables
    let balance = 0;
    let totalMined = 0;
    let battery = 100;
    let miningRate = 0.1;
    let history = [];
    
    // Update battery display
    function updateBattery() {
        batteryFill.style.width = battery + '%';
        batteryPercent.textContent = battery + '%';
        
        // Change color based on battery level
        if (battery > 50) {
            batteryFill.style.background = 'linear-gradient(90deg, #00ff00, #80ff80)';
        } else if (battery > 20) {
            batteryFill.style.background = 'linear-gradient(90deg, #ffff00, #ffaa00)';
        } else {
            batteryFill.style.background = 'linear-gradient(90deg, #ff0000, #ff6666)';
        }
    }
    
    // Update mining rate based on battery
    function updateMiningRate() {
        // More battery = faster mining
        miningRate = (battery / 100) * 0.5;
        miningRateEl.textContent = miningRate.toFixed(2);
        
        // Battery usage per tap
        let usage = Math.max(2, Math.floor(15 - (battery / 10)));
        batteryUsageEl.textContent = usage;
    }
    
    // Add to history
    function addToHistory(amount) {
        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        
        history.unshift(`⛏️ Mined ${amount.toFixed(4)} TRB at ${timeStr}`);
        
        // Keep only last 5
        if (history.length > 5) {
            history.pop();
        }
        
        // Update history display
        historyList.innerHTML = '';
        if (history.length === 0) {
            historyList.innerHTML = '<div class="history-item">Start mining to see history</div>';
        } else {
            history.forEach(item => {
                const div = document.createElement('div');
                div.className = 'history-item';
                div.textContent = item;
                historyList.appendChild(div);
            });
        }
    }
    
    // Mine button click
    mineBtn.addEventListener('click', function() {
        if (battery <= 0) {
            alert('⚠️ Battery too low! Charge your phone to mine more.');
            return;
        }
        
        // Calculate mining amount
        let usage = Math.max(2, Math.floor(15 - (battery / 10)));
        let minedAmount = miningRate * 2; // Base amount
        
        // Add randomness
        minedAmount += (Math.random() * 0.5);
        
        // Update balance
        balance += minedAmount;
        totalMined += minedAmount;
        
        // Reduce battery
        battery = Math.max(0, battery - usage);
        
        // Update displays
        balanceEl.textContent = balance.toFixed(4);
        totalMinedEl.textContent = totalMined.toFixed(2);
        
        // Add to history
        addToHistory(minedAmount);
        
        // Update battery and rate
        updateMiningRate();
        updateBattery();
        
        // Add visual feedback
        mineBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            mineBtn.style.transform = 'scale(1)';
        }, 100);
    });
    
    // Withdraw button
    withdrawBtn.addEventListener('click', function() {
        if (balance < 1000) {
            alert(`❌ Need 1000 TRB to withdraw. You have ${balance.toFixed(2)} TRB`);
        } else {
            withdrawModal.style.display = 'flex';
        }
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        withdrawModal.style.display = 'none';
    });
    
    // Click outside modal to close
    window.addEventListener('click', function(e) {
        if (e.target === withdrawModal) {
            withdrawModal.style.display = 'none';
        }
    });
    
    // Simulate battery drain over time
    setInterval(function() {
        if (battery > 0) {
            // Lose 1% every 2 minutes
            battery = Math.max(0, battery - 0.5);
            updateBattery();
            updateMiningRate();
        }
    }, 30000); // 30 seconds
    
    // Simulate small background mining
    setInterval(function() {
        if (battery > 10) {
            let passiveMine = miningRate * 0.1;
            balance += passiveMine;
            balanceEl.textContent = balance.toFixed(4);
        }
    }, 10000); // 10 seconds
    
    // Initial updates
    updateBattery();
    updateMiningRate();
    addToHistory(0);
});

// Copy referral link
function copyReferral() {
    const text = 'trb-mining.com/ref/YOURNAME';
    navigator.clipboard.writeText(text).then(() => {
        alert('📋 Referral link copied!');
    });
}
