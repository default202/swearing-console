
function checkMobileScreen() {
    const isMobileScreen = window.matchMedia("(max-width: 600px)").matches;

    if (isMobileScreen) {
        setTimeout(() => {
            alert("Chúng tôi khuyến khích bạn nên sử dụng thiết bị máy tính. Vì chúng tôi không hỗ trợ hệ điều hành điện thoại");
        }, 3000);
    }
}

document.addEventListener("DOMContentLoaded", checkMobileScreen);
window.addEventListener("resize", checkMobileScreen);
