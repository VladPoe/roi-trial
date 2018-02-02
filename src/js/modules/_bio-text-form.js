const bioTextForm = () => {

    const textFormSelector = 'js-text-form';
    const textFieldSelector = 'js-text-form-field';
    const bioFormCollection = document.getElementsByClassName(textFormSelector);

    if (bioFormCollection.length < 1) {
        return;
    }

    const ESC_KEYCODE = 27;

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

    Array.from(bioFormCollection).forEach((form) => {
        const field = form.getElementsByClassName(textFieldSelector)[0];
        let store = {
            value: field.value,
            infieldValue: field.value
        };

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            if (field.value.length) {
                updateStore(store);
            }
            setValue(field, store.value);
            field.blur();
        });

        field.addEventListener('input', function () {
            setToStoreInfieldValue(store, this.value);
        });

        field.addEventListener('blur', function () {
            setValue(field, store.value);
        });

        document.addEventListener('keyup', function (event) {
            if (event.keyCode === ESC_KEYCODE) {
                field.blur();
            }
        });
    });

};

export default bioTextForm;
