const list = document.getElementById('infi-list');
let itemCount = 0;

// Function to add n list items starting from current count + 1
function addItems(n) {
  for (let i = 1; i <= n; i++) {
    itemCount++;
    const li = document.createElement('li');
    li.textContent = `List Item ${itemCount}`;
    list.appendChild(li);
  }
}

// Add initial 10 items
addItems(10);

// Scroll event handler
list.addEventListener('scroll', () => {
  // Scroll position near bottom threshold
  if (list.scrollTop + list.clientHeight >= list.scrollHeight - 5) {
    addItems(2);
  }
});
