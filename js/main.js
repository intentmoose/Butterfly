document.querySelector('a-assets').addEventListener('loaded', function (evt) {
    document.querySelector('.loading-overlay').style.display = 'none';
    document.querySelector('.btns-wings').style.display = 'flex';

});
function changeWings(param) {
    let wings = document.querySelector('.wings');
    wings.setAttribute('src', `assets/model/wings${param}.glb`)
}