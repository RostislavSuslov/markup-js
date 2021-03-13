var checkboxes = document.querySelectorAll('.filter-item-box input[type="checkbox"]');

checkboxes.forEach(function (e) {
    e.addEventListener('click', () => {
       console.log(e.checked)
    });
});