document.getElementById('encrypt-btn').addEventListener('click', function() {
    let text = document.getElementById('input-text').value;
    let encryptedText = encrypt(text);
    document.getElementById('output-text').value = encryptedText;
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    let text = document.getElementById('input-text').value;
    let decryptedText = decrypt(text);
    document.getElementById('output-text').value = decryptedText;
});

document.getElementById('copy-btn').addEventListener('click', function() {
    let outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});

function encrypt(text) {
    let encryptedText = text.toLowerCase();
    encryptedText = encryptedText.replace(/e/g, 'enter');
    encryptedText = encryptedText.replace(/i/g, 'imes');
    encryptedText = encryptedText.replace(/a/g, 'ai');
    encryptedText = encryptedText.replace(/o/g, 'ober');
    encryptedText = encryptedText.replace(/u/g, 'ufat');
    return encryptedText;
}

function decrypt(text) {
    let decryptedText = text.toLowerCase();
    decryptedText = decryptedText.replace(/enter/g, 'e');
    decryptedText = decryptedText.replace(/imes/g, 'i');
    decryptedText = decryptedText.replace(/ai/g, 'a');
    decryptedText = decryptedText.replace(/ober/g, 'o');
    decryptedText = decryptedText.replace(/ufat/g, 'u');
    return decryptedText;
}