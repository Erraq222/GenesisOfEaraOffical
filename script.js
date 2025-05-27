document.addEventListener('DOMContentLoaded', () => {
    // Hiệu ứng lấp lánh bay trên Hero Section
    const sparklesContainer = document.querySelector('.sparkles-container');
    const numberOfSparkles = 30; // Số lượng hạt lấp lánh

    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        const size = Math.random() * 8 + 4; // Kích thước ngẫu nhiên từ 4px đến 12px
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.animationDuration = `${Math.random() * 3 + 2}s`; // Thời gian bay ngẫu nhiên 2-5s
        sparkle.style.animationDelay = `${Math.random() * 2}s`; // Delay ngẫu nhiên
        sparklesContainer.appendChild(sparkle);

        // Xóa hạt lấp lánh sau khi animation kết thúc để tránh quá nhiều phần tử
        sparkle.addEventListener('animationend', () => {
            sparkle.remove();
            // Tạo hạt lấp lánh mới để hiệu ứng liên tục
            createSparkle();
        });
    }

    for (let i = 0; i < numberOfSparkles; i++) {
        createSparkle();
    }

    // Hiệu ứng phóng to ảnh khi hover thẻ nhân vật (đã làm bằng CSS, nhưng JS có thể thêm phức tạp hơn nếu muốn)
    // const characterCards = document.querySelectorAll('.character-card');
    // characterCards.forEach(card => {
    //     card.addEventListener('mouseenter', () => {
    //         const img = card.querySelector('.character-image');
    //         img.style.transform = 'scale(1.1)'; // Ví dụ: phóng to thêm bằng JS
    //     });
    //     card.addEventListener('mouseleave', () => {
    //         const img = card.querySelector('.character-image');
    //         img.style.transform = 'scale(1)';
    //     });
    // });

    // Hiệu ứng nút "Bắt Đầu Khám Phá"
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        alert('Câu chuyện tình yêu của bạn sắp bắt đầu rồi đó! ❤️');
        // Ở đây em có thể thêm code để chuyển trang, cuộn xuống phần nhân vật, v.v.
    });

    // Hiệu ứng cho nút "Xem Hồ Sơ"
    const viewProfileButtons = document.querySelectorAll('.view-profile-btn');
    viewProfileButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const characterCard = event.target.closest('.character-card');
            const characterName = characterCard.querySelector('h3').textContent;
            alert(`Bạn đã chọn xem hồ sơ của: ${characterName}! Chuẩn bị "cưa đổ" nha! 😉`);
            // Ở đây em có thể chuyển hướng đến trang hồ sơ chi tiết của nhân vật
            // Ví dụ: window.location.href = `profile-${characterCard.dataset.character}.html`;
        });
    });
});
