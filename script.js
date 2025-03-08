// 导航栏移动端切换
document.querySelector('.menu-icon').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

// 详情展开/收起
function toggleDetail(button) {
    const detail = button.nextElementSibling;
    detail.classList.toggle('active');
    button.textContent = detail.classList.contains('active') ? '收起详情' : '查看详情';
}

// 筛选功能
document.getElementById('difficulty').addEventListener('change', filterCards);
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', filterCards);
});

function filterCards() {
    const difficulty = document.getElementById('difficulty').value;
    const instrument = document.querySelector('.nav-links a.active')?.getAttribute('href').replace('#', '') || 'all';

    document.querySelectorAll('.card').forEach(card => {
        const matchDifficulty = (difficulty === 'all') || card.classList.contains(difficulty);
        const matchInstrument = (instrument === 'all') || card.classList.contains(instrument);
        card.style.display = (matchDifficulty && matchInstrument) ? 'block' : 'none';
    });
}

// 默认加载筛选
document.querySelector('.nav-links a').click();
