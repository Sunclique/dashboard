
document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.getElementById('site-search-form');
  const searchInput = document.getElementById('site-search-input');
  if (searchForm && searchInput) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const query = searchInput.value.trim().toLowerCase();
      document.querySelectorAll('.search-highlight').forEach(el => el.classList.remove('search-highlight'));
      if (!query) return;
      let found = false;
      document.querySelectorAll('main.content *').forEach(el => {
        if (el.children.length === 0 && el.textContent.toLowerCase().includes(query)) {
          el.classList.add('search-highlight');
          if (!found) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            found = true;
          }
        }
      });
      if (!found) alert('No match found on this page.');
    });
  }
});