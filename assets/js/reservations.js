// ========================================
// RESERVATION FORM VALIDATION
// ========================================

const reservationForm = document.getElementById('reservationForm');

if (reservationForm) {
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous errors
        clearErrors();
        
        // Get form values
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;
        const specialRequests = document.getElementById('specialRequests').value.trim();
        
        let isValid = true;
        
        // Validate Full Name
        if (fullName === '') {
            showError('fullName', 'Full name is required');
            isValid = false;
        } else if (fullName.length < 3) {
            showError('fullName', 'Name must be at least 3 characters');
            isValid = false;
        }
        
        // Validate Email
        if (email === '') {
            showError('email', 'Email address is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate Phone
        if (phone === '') {
            showError('phone', 'Phone number is required');
            isValid = false;
        } else if (!isValidPhone(phone)) {
            showError('phone', 'Please enter a valid phone number');
            isValid = false;
        }
        
        // Validate Date
        if (date === '') {
            showError('date', 'Please select a date');
            isValid = false;
        } else if (!isValidDate(date)) {
            showError('date', 'Please select a future date');
            isValid = false;
        }
        
        // Validate Time
        if (time === '') {
            showError('time', 'Please select a time');
            isValid = false;
        }
        
        // Validate Guests
        if (guests === '') {
            showError('guests', 'Please select number of guests');
            isValid = false;
        }
        
        // If form is valid, show success message
        if (isValid) {
            showSuccess(fullName, date, time, guests);
            reservationForm.reset();
        }
    });
}

// Helper function to show error
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const formGroup = field.parentElement;
    formGroup.classList.add('error');
    
    const errorMsg = formGroup.querySelector('.error-message');
    if (errorMsg) {
        errorMsg.textContent = message;
    }
}

// Helper function to clear all errors
function clearErrors() {
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        group.classList.remove('error');
        const errorMsg = group.querySelector('.error-message');
        if (errorMsg) {
            errorMsg.textContent = '';
        }
    });
    
    // Hide success message if exists
    const successMsg = document.querySelector('.reservation-success');
    if (successMsg) {
        successMsg.classList.remove('show');
    }
}

// Helper function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Helper function to validate phone
function isValidPhone(phone) {
    // Remove all non-digit characters for validation
    const cleanPhone = phone.replace(/\D/g, '');
    // Check if phone has at least 10 digits
    return cleanPhone.length >= 10;
}

// Helper function to validate date (must be today or future)
function isValidDate(dateString) {
    const selectedDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to start of day
    
    return selectedDate >= today;
}

// Helper function to show success message
function showSuccess(name, date, time, guests) {
    // Create success message if it doesn't exist
    let successMsg = document.querySelector('.reservation-success');
    if (!successMsg) {
        successMsg = document.createElement('div');
        successMsg.className = 'reservation-success';
        reservationForm.insertBefore(successMsg, reservationForm.firstChild);
    }
    
    // Format the date nicely
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Format time to 12-hour format
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    const formattedTime = `${displayHour}:${minutes} ${ampm}`;
    
    successMsg.innerHTML = `
        <h3>✓ Reservation Confirmed!</h3>
        <p><strong>${name}</strong>, your table for <strong>${guests} ${guests === '1' ? 'guest' : 'guests'}</strong> has been reserved for <strong>${formattedDate}</strong> at <strong>${formattedTime}</strong>.</p>
        <p>We look forward to serving you! A confirmation email will be sent shortly.</p>
    `;
    successMsg.classList.add('show');
    
    // Scroll to top of form to see success message
    successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Hide success message after 8 seconds
    setTimeout(() => {
        successMsg.classList.remove('show');
    }, 8000);
}

// Set minimum date to today for date input
document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
});