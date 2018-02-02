export default function isMobile() {

    const detector = {
        android() {
            return (navigator.userAgent.match(/Android/i));
        },
        blackBerry() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS() {
            return (navigator.userAgent.match(/iPhone|iPad|iPod/i));
        },
        opera() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        windows() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any() {
            return (detector.android() || detector.blackBerry() || detector.iOS() || detector.opera() || detector.windows());
        }
    };

    if (detector.any()) {
        document.documentElement.classList.add('mobile');
    }

}
