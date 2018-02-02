import 'babel-polyfill';

import tabbingControl from './../js/utils/tabbingControl';
import isMobile from './../js/utils/isMobile';


$(() => {
    // On Document Ready event
    tabbingControl();
    isMobile();
});
