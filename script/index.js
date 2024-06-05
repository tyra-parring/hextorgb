function convertHexToRGB() {
    var hex = document.getElementById('hexInput').value.trim();
    var rgbResult = document.getElementById('rgbResult');
    
    rgbResult.innerText = /^#[0-9a-fA-F]{3,6}$/.test(hex) ? `RGB: (${parseInt(hex.substring(1, 3), 16)}, ${parseInt(hex.substring(3, 5), 16)}, ${parseInt(hex.substring(5, 7), 16)})` : 'Invalid Hex Color';
}
