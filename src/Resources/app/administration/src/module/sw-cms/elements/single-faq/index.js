import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
    name: 'single-faq',
    label: 'FAQ',
    component: 'sw-cms-el-cms-single-faq',
    configComponent: 'sw-cms-el-config-single-faq',
    previewComponent: 'sw-cms-el-preview-single-faq',
    defaultConfig: {
        title: {
            source: 'static',
            value: 'Headline'
        },
        content: {
            source: 'static',
            value: `
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                At vero eos et accusam et justo duo dolores et ea rebum. 
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            `.trim()
        },
        verticalAlign: {
            source: 'static',
            value: null
        },
        icon: {
            source: 'static',
            value: 'solid-chevron-up-s'
        },
        headlineColor: {
            source: 'static',
            value: '#fff'
        },
        headlineBgColor: {
            source: 'static',
            value: '#4492ed'
        },
        collapseColor: {
            source: 'static',
            value: '#333'
        },
        collapseBgColor: {
            source: 'static',
            value: '#d3d3d3'
        },
        border: {
            source: 'static',
            value: null
        },
        borderColor: {
            source: 'static',
            value: '#d3d3d3'
        },
    },

});
