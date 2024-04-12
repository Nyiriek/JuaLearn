document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        // Here, you can handle form submission using AJAX or fetch API
        // Example:
        fetch('submit_feedback.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                alert('Feedback submitted successfully!');
                form.reset();
            } else {
                throw new Error('Failed to submit feedback');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to submit feedback. Please try again later.');
        });
    });
});
