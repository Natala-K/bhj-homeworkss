document.addEventListener('DOMContentLoaded', () => {
    const tooltips = document.querySelectorAll('.has-tooltip');
    let currentTooltip = null;
    let currentTooltipElement = null;

    tooltips.forEach(tooltip => {
        tooltip.addEventListener('click', (event) => {
            event.preventDefault();

            const tooltipText = tooltip.getAttribute('title');
            const position = tooltip.getAttribute('data-position') || 'top';

            if (currentTooltipElement === tooltip) {
                // Toggle the tooltip display on repeated click
                currentTooltip.remove();
                currentTooltip = null;
                currentTooltipElement = null;
                return;
            }

            // Remove any existing tooltip
            if (currentTooltip) {
                currentTooltip.remove();
            }

            // Create a new tooltip with template literal
            const newTooltipHTML = `
                <div class="tooltip" data-position="${position}">
                    ${tooltipText}
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', newTooltipHTML);
            currentTooltip = document.querySelector('.tooltip:last-of-type');
            currentTooltipElement = tooltip;

            // Calculate position
            const rect = tooltip.getBoundingClientRect();
            switch (position) {
                case 'top':
                    currentTooltip.style.left = `${rect.left + rect.width / 2 - currentTooltip.offsetWidth / 2}px`;
                    currentTooltip.style.top = `${rect.top - currentTooltip.offsetHeight}px`;
                    break;
                case 'right':
                    currentTooltip.style.left = `${rect.right}px`;
                    currentTooltip.style.top = `${rect.top + rect.height / 2 - currentTooltip.offsetHeight / 2}px`;
                    break;
                case 'bottom':
                    currentTooltip.style.left = `${rect.left + rect.width / 2 - currentTooltip.offsetWidth / 2}px`;
                    currentTooltip.style.top = `${rect.bottom}px`;
                    break;
                case 'left':
                    currentTooltip.style.left = `${rect.left - currentTooltip.offsetWidth}px`;
                    currentTooltip.style.top = `${rect.top + rect.height / 2 - currentTooltip.offsetHeight / 2}px`;
                    break;
            }

            // Show the tooltip
            currentTooltip.style.display = 'block';

            // Hide the tooltip when clicking on it
            currentTooltip.addEventListener('click', () => {
                currentTooltip.remove();
                currentTooltip = null;
                currentTooltipElement = null;
            });
        });
    });
});
