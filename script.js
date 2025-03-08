// 滚动动画触发
document.addEventListener('DOMContentLoaded', () => {
    // 观察器实现滚动动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    // 为需要动画的元素添加观察
    document.querySelectorAll('.card, .dream-card').forEach((el) => {
        observer.observe(el);
    });

    // 音乐板块点击波纹效果
    document.querySelector('.audio-wave').addEventListener('click', () => {
        const wave = document.querySelector('.audio-wave');
        wave.style.animation = 'none';
        setTimeout(() => wave.style.animation = 'wave 1s linear infinite', 10);
    });
});
