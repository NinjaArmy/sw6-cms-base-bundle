import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'single-faq',
    label: 'Single FAQ',
    category: 'ninja-text-elements',
    component: 'sw-cms-block-cms-single-faq',
    previewComponent: 'sw-cms-preview-single-faq',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        singleFaq: 'single-faq'
    }
});