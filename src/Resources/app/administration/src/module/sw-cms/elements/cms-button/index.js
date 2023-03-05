import './component';
import './config';
import './preview';


Shopware.Service('cmsService').registerCmsElement({
    name: 'cms-button',
    label: 'sw-cms.blocks.text.ninja-cms-button.label',
    component: 'sw-cms-el-cms-button',
    configComponent: 'sw-cms-el-config-cms-button',
    previewComponent: 'sw-cms-el-preview-cms-button',
    defaultConfig: {
        title: {
            source: 'static',
            value: 'ButtonText'
        },
        textColor: {
            source: 'static',
            value: '#fff'
        },
        url: {
            source: 'static',
            value: ''
        },
        newTab: {
            source: 'static',
            value: 'true'
        },
        buttonAlign: {
            source: 'static',
            value: 'center'
        },
        buttonColor: {
            source: 'static',
            value: '#4492ed'
        },
        borderColor: {
            source: 'static',
            value: '#4492ed'
        },
        borderWidth: {
            source: 'static',
            value: '0'
        },
        buttonWidth: {
            source: 'static',
            value: ''
        },
        buttonHeight: {
            source: 'static',
            value: ''
        },
        borderRadius: {
            source: 'static',
            value: '0'
        }
    },

});
