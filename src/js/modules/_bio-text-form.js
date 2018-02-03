const bioTextForm = () => {

    const textFormSelector = 'js-text-form';
    const textFieldSelector = 'js-text-form-field';
    const bioFormCollection = document.getElementsByClassName(textFormSelector);

    if (bioFormCollection.length < 1) {
        return;
    }

    const ESC_KEYCODE = 27;
    const activeClass = 'active';

    const setValue = (elem, value) => {
        elem.value = value;
        return elem;
    };

    const setToStoreInfieldValue = (store, value) => {
        store.infieldValue = value;
    };

    const updateStore = (store) => {
        store.value = store.infieldValue;
    };

    const addActiveClass = (elem) => {
        elem.classList.add(activeClass);
    };

    const removeActiveClass = (elem) => {
        elem.classList.remove(activeClass);
    };

    Array.from(bioFormCollection).forEach((form) => {
        const field = form.getElementsByClassName(textFieldSelector)[0];
        let store = {
            value: field.value,
            infieldValue: field.value
        };

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            if (field.value.length) {
                updateStore(store);
            }
            setValue(field, store.value);
            field.blur();
        });

        field.addEventListener('focus', () => {
            addActiveClass(form);
        });

        field.addEventListener('input', function () {
            this.value = this.value.replace(/\s\s+/g, ' ');
            setToStoreInfieldValue(store, this.value);
        });

        field.addEventListener('blur', () => {
            setTimeout(() => {
                setValue(field, store.value);
                removeActiveClass(form);
            }, 260);
        });

        form.addEventListener('click', (event) => {
            event.stopPropagation();
        });

        document.addEventListener('keyup', (event) => {
            if (event.keyCode === ESC_KEYCODE) {
                field.blur();
            }
        });
    });

};

export default bioTextForm;
