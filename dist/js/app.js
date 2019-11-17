const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
    removeBorder(); // To Remove the borders before we stick the border
    removeShow();
    // Add border to current tab
    this.classList.add('tab-border');
    // Gran content from the DOM
      const tabContentItem = document.querySelector(`#${this.id}-content`);
    //   Add show class
    tabContentItem.classList.add('show');
}

// Deleting the border before the new one
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
// tabContentItems.forEach(item => item.addEventListener('click', selectShow));

