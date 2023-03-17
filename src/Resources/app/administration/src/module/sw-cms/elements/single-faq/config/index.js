import template from './sw-cms-el-config-single-faq.html.twig';

const { Component, Mixin } = Shopware;


Component.register('sw-cms-el-config-single-faq', {
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
            this.initElementConfig('single-faq');
            /* this.initElementData('single-faq'); */
        },
        onBlur(content) {
            this.emitChanges(content);
        },

        onElementUpdate(element) {
            this.$emit('element-update', element);
        },
        onInputText(title) {
            this.emitChanges(title);
        },
        onInput(content) {
            this.emitChanges(content);
        },

        emitChanges(content) {
            if (content !== this.element.config.content.value) {
                this.element.config.content.value = content;
                this.$emit('element-update', this.element);
            }
        }
    }

});