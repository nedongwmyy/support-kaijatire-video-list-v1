// JavaScript for enhanced functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Video list page loaded successfully');

    // 获取模态框元素
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    const closeBtn = document.querySelector('.close');

    // 点击关闭按钮关闭模态框
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        // 停止视频播放
        videoFrame.src = '';
    });

    // 点击模态框外部区域关闭模态框
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            // 停止视频播放
            videoFrame.src = '';
        }
    });

    // 为所有视频卡片添加点击事件
    const videoCards = document.querySelectorAll('.video-card');

    videoCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // 如果点击的是播放按钮或链接，不执行卡片点击事件
            if (e.target.classList.contains('play-icon') || e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
                return;
            }

            // 添加视觉效果
            this.style.transform = 'translateY(-5px)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });

        // 为缩略图添加播放功能
        const thumbnail = card.querySelector('.video-thumbnail');
        if (thumbnail) {
            thumbnail.addEventListener('click', function() {
                const videoId = card.getAttribute('data-video-id');
                if (videoId) {
                    // 设置YouTube视频链接
                    if (videoId === 'viAvjf7i2do') {
                        // 使用提供的完整嵌入URL，包含额外参数
                        videoFrame.src = 'https://www.youtube.com/embed/viAvjf7i2do?si=8qgcHCSoeSDdCM68&autoplay=1';
                    } else {
                        videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                    }
                    // 显示模态框
                    modal.style.display = 'block';
                }
            });
        }
    });
});