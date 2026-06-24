// 1. 화면에서 버튼과 이메일을 가져옵니다
const button = document.getElementById('copyBtn');
const email = document.getElementById('email').textContent;

// 2. 버튼을 "클릭했을 때" 실행할 동작을 정합니다
button.addEventListener('click', function () {
    // 이메일 주소를 클립보드에 복사
    navigator.clipboard.writeText(email);

    // 버튼 글자를 잠깐 바꿔서 "복사됐다"고 알려줍니다
    button.textContent = '복사 완료! ✅';

    // 1.5초 뒤 원래 글자로 되돌리기
    setTimeout(function () {
        button.textContent = '이메일 주소 복사';
    }, 1500);
});