    // Example of a simple custom notification
    function showNotification(message) {
      const notificationDiv = document.createElement('div');
      notificationDiv.textContent = message;
      notificationDiv.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #333;
        color: white;
        padding: 15px;
        border-radius: 5px;
        z-index: 1000;
      `;
      document.body.appendChild(notificationDiv);

      setTimeout(() => {
        notificationDiv.remove();
      }, 3000); // Auto-dismiss after 3 seconds
    }

    document.addEventListener('DOMContentLoaded', function() {
    console.log('M3 SVGs script loaded.');
    const shapes = document.querySelectorAll('.shape');

    shapes.forEach(shape => {
        shape.addEventListener('click', function() {

            // is auto-copy enabled?
            const autoCopyEnabled = document.body.classList.contains('auto-copy-enabled');
            if (autoCopyEnabled) {
                // get SVG code from inner svg
                const svgElement = this.querySelector('svg');
                if (svgElement) {
                    const svgCode = svgElement.outerHTML;
                    navigator.clipboard.writeText(svgCode);
                    showNotification('SVG code copied to clipboard!');
                }
                // get element id
                const shape_id = this.classList[1]; // assuming the second class is the id
                // Make element visible
                const target = document.getElementById(shape_id);
                if (target) {
                    target.classList.remove('hidden');
                }
            } else {
                // get element id
                const shape_id = this.classList[1]; // assuming the second class is the id
                // Make element visible
                const target = document.getElementById(shape_id);
                if (target) {
                    target.classList.remove('hidden');
                    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }

            
        });
    });

    const autoCopyCheckbox = document.querySelector('#auto-copy-checkbox');
    autoCopyCheckbox.addEventListener('click', function() {
        console.log('Auto Copy SVG Code checkbox changed:', this.checked);
        if (this.checked) {
            document.body.classList.add('auto-copy-enabled');
        } else {
            document.body.classList.remove('auto-copy-enabled');
        }
    });

    const showAllCheckbox = document.getElementById('show-all-checkbox');
    showAllCheckbox.addEventListener('change', function() {
        console.log('Show All Previews checkbox changed:', this.checked);
        const previews = document.querySelectorAll('figure.code-block');
        if (this.checked) {
            previews.forEach(preview => preview.classList.remove('hidden'));
        } else {
            previews.forEach(preview => preview.classList.add('hidden'));
        }
    });
});


