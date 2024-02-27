document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.querySelector('.section-info input');
    var gridItems = document.querySelectorAll('.grid-item');
    searchInput.addEventListener('input', function () {
        var searchTerm = searchInput.value.toLowerCase();
        gridItems.forEach(function (item) {
            var description = item.querySelector('.description').textContent.toLowerCase();
            if (description.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});