const initPrinting = () => {

    const printBtnSelector = 'js-print-btn';

    document.body.addEventListener('click', (event) => {
        if (event.target.classList.contains(printBtnSelector)) {
            window.print();
        }
    });
};

export default initPrinting;
