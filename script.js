document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const toggleIcon = item.querySelector('.toggle-icon');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherIcon = otherItem.querySelector('.toggle-icon');
                    otherIcon.src = './assets/images/icon-plus.svg';
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
                toggleIcon.src = './assets/images/icon-plus.svg';
            } else {
                item.classList.add('active');
                toggleIcon.src = './assets/images/icon-minus.svg';
            }
        });
    });
});
