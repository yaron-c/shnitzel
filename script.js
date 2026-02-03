console.log('Schnitzel Lab system initialized');

// Parallax Effect for Hero Background
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const heroBg = document.querySelector('.hero-bg');

    if (heroBg && scrollPosition < window.innerHeight) {
        // Move the background down at 40% of the scroll speed
        heroBg.style.transform = `translateY(${scrollPosition * 0.4}px)`;
    }
});

function resetExperiment() {
    // Uncheck safety boxes
    document.querySelectorAll('.safety-checklist input').forEach(box => box.checked = false);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Show message
    showToast('🧪 המעבדה נוקתה! מוכנים לניסוי חדש.', 'info');
}

function showToast(message, type = 'normal') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerText = message;
    container.appendChild(toast);

    // Remove after animation (3s total: 0.3s in + 2.2s wait + 0.5s out)
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

document.getElementById('start-experiment').addEventListener('click', () => {
    showToast('🚀 מערכות המעבדה מופעלות!');
    // Smooth scroll to safety section later
    document.getElementById('safety').scrollIntoView({ behavior: 'smooth' });
});

// Elements interaction
document.querySelectorAll('.element').forEach(el => {
    el.addEventListener('click', () => {
        const name = el.getAttribute('data-name');
        showToast(`מצאת את יסוד ה-${name}!`, 'info');
    });
});

// Safety Check
const checkboxes = document.querySelectorAll('.safety-checklist input');
checkboxes.forEach(box => {
    box.addEventListener('change', () => {
        const allChecked = Array.from(checkboxes).every(cb => cb.checked);
        if (allChecked) {
            showToast('✅ מצוין! הגישה למצרכים אושרה.', 'success');
            setTimeout(() => {
                document.getElementById('ingredients').scrollIntoView({ behavior: 'smooth' });
            }, 1000);
        }
    });
});
