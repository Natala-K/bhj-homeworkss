document.addEventListener('DOMContentLoaded', () => {
    const tooltips = document.querySelectorAll('.has-tooltip');

    tooltips.forEach(tooltip => {
        tooltip.addEventListener('click', (event) => {
            event.preventDefault();
            
            // Remove any existing tooltip
            document.querySelectorAll('.tooltip').forEach(tip => tip.remove());

            // Create a new tooltip
            const newTooltip = document.createElement('div');
            newTooltip.className = 'tooltip';
            newTooltip.textContent = tooltip.getAttribute('title');
            
            const position = tooltip.getAttribute('data-position') || 'top';
            newTooltip.setAttribute('data-position', position);

            document.body.appendChild(newTooltip);
            
            // Calculate position
            const rect = tooltip.getBoundingClientRect();
            switch (position) {
                case 'top':
                    newTooltip.style.left = `${rect.left + rect.width / 2}px`;
                    newTooltip.style.top = `${rect.top - newTooltip.offsetHeight}px`;
                    break;
                case 'right':
                    newTooltip.style.left = `${rect.right}px`;
                    newTooltip.style.top = `${rect.top + rect.height / 2}px`;
                    break;
                case 'bottom':
                    newTooltip.style.left = `${rect.left + rect.width / 2}px`;
                    newTooltip.style.top = `${rect.bottom}px`;
                    break;
                case 'left':
                    newTooltip.style.left = `${rect.left - newTooltip.offsetWidth}px`;
                    newTooltip.style.top = `${rect.top + rect.height / 2}px`;
                    break;
            }
            
            // Show the tooltip
            newTooltip.style.display = 'block';

            // Hide the tooltip when clicking anywhere else
            document.addEventListener('click', (e) => {
                if (!tooltip.contains(e.target) && !newTooltip.contains(e.target)) {
                    newTooltip.remove();
                }
            }, { once: true });
        });
    });
});
