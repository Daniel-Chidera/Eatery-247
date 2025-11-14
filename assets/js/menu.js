// ========================================
// MENU FILTER FUNCTIONALITY
// ========================================

const filterButtons = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

// Add click event to all filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the category from data attribute
        const category = button.getAttribute('data-category');
        
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Filter menu items
        filterMenuItems(category);
    });
});

// Function to filter menu items
function filterMenuItems(category) {
    menuItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        
        if (category === 'all') {
            // Show all items
            item.classList.remove('hidden');
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 10);
        } else if (itemCategory === category) {
            // Show matching items
            item.classList.remove('hidden');
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 10);
        } else {
            // Hide non-matching items
            item.style.opacity = '0';
            item.style.transform = 'scale(0.9)';
            setTimeout(() => {
                item.classList.add('hidden');
            }, 200);
        }
    });
}

// Initialize - show all items on page load
document.addEventListener('DOMContentLoaded', () => {
    filterMenuItems('all');
});