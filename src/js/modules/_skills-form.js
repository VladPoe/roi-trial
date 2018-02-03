const skillsForm = () => {

    const formSelector = 'js-skills-form';
    const initBtnSelector = 'js-skills-form-init-btn';
    const fieldSelector = 'js-skills-field';
    const selectSelector = 'js-skills-select';
    const skillsListSelector = 'js-skills-list';

    const skillsFormsCollection = document.getElementsByClassName(formSelector);

    if (skillsFormsCollection.length < 1) {
        return;
    }

    const ESC_KEYCODE = 27;
    const activeClass = 'active';
    const hiddenClass = 'hidden';

    const filterElementsById = (collection, id) => { // eslint-disable-line consistent-return
        for (let i = 0; i <= collection.length - 1; i++) {
            if (collection[i].dataset.id = id) { // eslint-disable-line no-cond-assign
                return collection[i];
            }
            i++;
        }
    };

    const createSkill = (name, mastery) => {
        const masteryClassName = (mastery === 'strong') ? 'strong' : (mastery === 'good') ? 'medium' : 'light'; // eslint-disable-line no-nested-ternary
        const template = `
            <span class="visual-list__item js-skill-item">
                <span class="visual-list__base ${masteryClassName} tabindex="0">
                    ${name}
                    <button class="visual-list__delete-btn js-skill-item-delete-btn" type="button"></button>
                </span>
            </li>
        `;
        return document.createRange().createContextualFragment(template);
    };

    const addSkill = (skill, list) => {
        list.appendChild(skill);
    };

    const closeForm = (form, initBtn) => {
        form.reset();
        form.classList.remove(activeClass);
        initBtn.classList.remove(hiddenClass);
        initBtn.focus();
    };

    const submitHandler = (form, field, select, resultList) => {
        if (!field.value || field.value === ' ') {
            field.focus();
            return;
        }
        const skillName = field.value.split(' ').length > 3 ? field.value.split(' ').slice(0, 3).join(' ') : field.value;
        const masteryRate = select.value;
        const skillElem = createSkill(skillName, masteryRate);
        addSkill(skillElem, resultList);
        form.reset();
    };

    Array.from(skillsFormsCollection).forEach((form) => {
        const id = form.id;
        const initBtn = filterElementsById(document.getElementsByClassName(initBtnSelector), id);
        const field = form.getElementsByClassName(fieldSelector)[0];
        const select = form.getElementsByClassName(selectSelector)[0];
        const skillsList = filterElementsById(document.getElementsByClassName(skillsListSelector), id);

        initBtn.addEventListener('click', function (event) {
            event.stopPropagation();
            form.classList.add(activeClass);
            this.classList.add(hiddenClass);
            field.focus();
        });

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            submitHandler(this, field, select, skillsList);
        });

        field.addEventListener('input', function () {
            this.value = this.value.replace(/\s\s+/g, ' ');
        });

        form.addEventListener('click', (event) => {
            event.stopPropagation();
        });

        document.body.addEventListener('click', () => {
            closeForm(form, initBtn);
        });

        document.addEventListener('keyup', (event) => {
            if (event.keyCode === ESC_KEYCODE) {
                closeForm(form, initBtn);
            }
        });
    });

};

export default skillsForm;
