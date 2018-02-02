import 'babel-polyfill';

import tabbingControl from './../js/utils/tabbingControl';
import isMobile from './../js/utils/isMobile';

import bioTextForm from './modules/_bio-text-form';

$(() => {
    // On Document Ready event
    tabbingControl();
    isMobile();

    bioTextForm();
});
