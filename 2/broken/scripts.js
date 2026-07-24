let themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark');
    themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

let tags = document.querySelectorAll('.tag');

tags.forEach(function (tag) {
    tag.addEventListener('click', function () {
        tag.classList.toggle('active');
    });
});

let copyBtn = document.getElementById('copyBtn');
let email = document.getElementById('email').textContent;

copyBtn.addEventListener('click', function () {
    navigator.clipboard.writeText(email);
    copyBtn.textContent = '복사 완료! ✅';
    setTimeout(function () {
        copyBtn.textContent = '이메일 주소 복사';
    }, 1500);
});