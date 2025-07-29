document.addEventListener('DOMContentLoaded', function () {
    // Review form logic
    const form = document.querySelector('.review-form form');
    const reviewList = document.getElementById('reviews');
    const reviewsListSection = document.getElementById('reviews-list');

    // Utility to escape HTML for safe review display
    function escapeHTML(str) {
        return str.replace(/[&<>"']/g, function (m) {
            return ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            })[m];
        });
    }

    // Function to update the Read User Reviews section
    function displayAllReviews() {
        if (reviewList && reviewsListSection) {
            reviewsListSection.innerHTML = '';
            reviewList.querySelectorAll('.review-entry').forEach(entry => {
                const clone = entry.cloneNode(true);
                // Remove delete button for public display
                const delBtn = clone.querySelector('.delete-review');
                if (delBtn) delBtn.remove();
                reviewsListSection.appendChild(clone);
            });
        }
    }

    if (form && reviewList) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const review = document.getElementById('review').value.trim();
            if (name && review) {
                const entry = document.createElement('div');
                entry.className = 'review-entry';
                entry.innerHTML = `<strong>${escapeHTML(name)}</strong><p>${escapeHTML(review)}</p>
                    <button class="delete-review" title="Delete Review">🗑️</button>`;
                reviewList.appendChild(entry);
                form.reset();
                displayAllReviews();
            }
        });

        // Delete review functionality
        reviewList.addEventListener('click', function (e) {
            if (e.target.classList.contains('delete-review')) {
                e.target.parentElement.remove();
                displayAllReviews();
            }
        });

        // Initial display
        displayAllReviews();
    }

    // Toggle code visibility with animation
    document.querySelectorAll('button[onclick^="toggleCode"]').forEach(btn => {
        btn.addEventListener('click', function () {
            const codeId = btn.getAttribute('onclick').match(/'([^']+)'/)[1];
            const codeBlock = document.getElementById(codeId);
            if (codeBlock) {
                if (codeBlock.style.display === "none" || codeBlock.style.display === "") {
                    codeBlock.style.display = "block";
                    codeBlock.style.maxHeight = "0";
                    setTimeout(() => {
                        codeBlock.style.transition = "max-height 0.4s ease";
                        codeBlock.style.maxHeight = "500px";
                    }, 10);
                } else {
                    codeBlock.style.transition = "max-height 0.4s ease";
                    codeBlock.style.maxHeight = "0";
                    setTimeout(() => {
                        codeBlock.style.display = "none";
                    }, 400);
                }
            }
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('header nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = link.getAttribute('href').replace('#', '');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                e.preventDefault();
                window.scrollTo({
                    top: targetSection.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight navigation on scroll
    const navLinks = document.querySelectorAll('header nav a');
    const sections = Array.from(navLinks).map(link => document.getElementById(link.getAttribute('href').replace('#', '')));
    window.addEventListener('scroll', function () {
        let current = '';
        sections.forEach(section => {
            if (section && window.scrollY >= section.offsetTop - 60) {
                current = section.id;
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
});
