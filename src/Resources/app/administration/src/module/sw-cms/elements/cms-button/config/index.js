import template from './sw-cms-el-config-cms-button.html.twig';

const { Component, Mixin } = Shopware;


Component.register('sw-cms-el-config-cms-button', {
    template,

    inject: ['repositoryFactory'],

    mixins: [
        Mixin.getByName('cms-element')
    ],

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('cms-button');
        },

        onElementUpdate(element) {
            this.$emit('element-update', element);
        },
        onInputText(title) {
            this.emitChanges(title);
        }
    }

});
