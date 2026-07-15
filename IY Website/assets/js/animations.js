// Lightweight scroll-reveal for sections/cards marked with .reveal
// Safe by default: elements stay fully visible unless this script runs
// successfully AND sets up the observer — so a slow/blocked script can
// never leave content permanently invisible.
document.addEventListener('DOMContentLoaded', function () {
    var revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    if (!('IntersectionObserver' in window)) {
        // No observer support: leave everything visible, skip the effect entirely.
        return;
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.remove('pending');
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05 });

    revealEls.forEach(function (el) {
        el.classList.add('pending');
        observer.observe(el);
    });

    // Failsafe: if anything is still pending after 2.5s (observer never fired,
    // element sits in a weird layout position, etc.) reveal it anyway.
    setTimeout(function () {
        document.querySelectorAll('.reveal.pending').forEach(function (el) {
            el.classList.remove('pending');
            el.classList.add('is-visible');
        });
    }, 2500);
});

// Simple FAQ accordion toggle
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.faq-question').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var item = btn.closest('.faq-item');
            var wasOpen = item.classList.contains('open');

            document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
                openItem.classList.remove('open');
            });

            if (!wasOpen) {
                item.classList.add('open');
            }
        });
    });
});
