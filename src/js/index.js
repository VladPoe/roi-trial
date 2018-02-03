import 'babel-polyfill';

import tabbingControl from './../js/utils/tabbingControl';
import isMobile from './../js/utils/isMobile';

import bioTextForm from './modules/_bio-text-form';
import skillsForm from './modules/_skills-form';
import deleteSkills from './modules/_delete-skills';
import initPrinting from './modules/_init-printing';

$(() => {
    // On Document Ready event
    tabbingControl();
    isMobile();

    bioTextForm();
    skillsForm();
    deleteSkills();
    initPrinting();
});
