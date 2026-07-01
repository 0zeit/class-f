// 1. 이메일 복사 버튼
const button = document.getElementById('copyBtn');
const email = document.getElementById('email').textContent;

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

//  2. 다크모드 전환 버튼
//      -> body 태그에 "dark" 클래스를 붙였다 뗐다 합니다
//      -> 실제 색 변화는 CSS의 body.dark 부분이 담당합니다
const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark');   // 있으면 제거, 없으면 추가

    // 클래스가 붙어있는지에 따라 아이콘도 바꿔줍니다
    if (document.body.classList.contains('dark')) {
        themeBtn.textContent = '☀️';
    } else {
        themeBtn.textContent = '🌙';
    }
});

// 3. 시간대별 인사말
const greeting = document.getElementById('greeting');
const hour = new Date().getHours();   // 0 ~ 23 사이의 숫자

if (hour < 12) {
    greeting.textContent = '☀️ 좋은 아침이에요!';
} else if (hour < 18) {
    greeting.textContent = '👋 즐거운 오후 보내세요!';
} else {
    greeting.textContent = '🌙 오늘 하루도 고생 많으셨어요!';
}

// 4. 관심사 태그 클릭해서 선택하기
const tags = document.querySelectorAll('.tag');   // 태그 전체를 목록으로 가져옴

tags.forEach(function (tag) {
    tag.addEventListener('click', function () {
        tag.classList.toggle('active');   // 클릭한 태그만 선택/해제
    });
});