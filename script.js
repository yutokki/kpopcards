// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded');

    const groupSelect = document.getElementById('group');
    const albumSelect = document.getElementById('album');

    groupSelect.addEventListener('change', filterPhotocards);
    albumSelect.addEventListener('change', filterPhotocards);

    function filterPhotocards() {
        const group = groupSelect.value;
        const album = albumSelect.value;
        const photocards = document.querySelectorAll('.photocard');

        photocards.forEach(photocard => {
            const groupMatch = group === 'all' || photocard.dataset.group === group;
            const albumMatch = album === 'all' || photocard.dataset.album === album;
            if (groupMatch && albumMatch) {
                photocard.style.display = '';
            } else {
                photocard.style.display = 'none';
            }
        });
    }
});
