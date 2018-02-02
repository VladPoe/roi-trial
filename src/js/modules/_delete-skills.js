const deleteSkills = () => {

    const skillItemSelector = '.js-skill-item';
    const deleteBtnSelector = '.js-skill-item-delete-btn';
    const hiddenClass = 'hidden';

    $('body').on('click', deleteBtnSelector, function () {
        console.log('xx');
        const $this = $(this);
        const $item = $this.closest(skillItemSelector);
        $item.addClass(hiddenClass);
        setTimeout(() => {
            $item.remove();
        }, 250);
    });
};

export default deleteSkills;
