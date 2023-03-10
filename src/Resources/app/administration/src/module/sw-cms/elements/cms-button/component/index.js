import template from './sw-cms-el-cms-button.html.twig';
import './sw-cms-el-cms-button.scss';

const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-cms-button', {
    template,

    inject: ['repositoryFactory'],

    mixins: [
        Mixin.getByName('cms-element')
    ],

    created() {
        this.createdComponent();
    },
   
    computed: {
        buttonStyles() {
            const styles = {};
            if (this.element.config.textColor.value && this.element.config.buttonColor.value ) {
                styles.color = `${this.element.config.textColor.value}`;
                styles.backgroundColor = `${this.element.config.buttonColor.value}`;
                
            }
            if (this.element.config.buttonWidth.value) {
                styles.width = `${this.element.config.buttonWidth.value}px`;
            } else {
                styles.width = "auto";
            }

            if (this.element.config.buttonHeight.value) {
                styles.height = `${this.element.config.buttonHeight.value}px`;
            } else {
                styles.height = "auto";
            }

            if (this.element.config.borderRadius.value) {
                styles.borderRadius = `${this.element.config.borderRadius.value}px`;
            } else {
                styles.borderRadius = "0";
            }

            return styles;
        },
       
        buttonAlignStyle() {
            const styles = {};
            if (this.element.config.buttonAlign.value) {
                styles.justifyContent = `${this.element.config.buttonAlign.value}`
            }

            return styles;
        },
        styles() {
            const styles = {};

            if (this.element.config.borderColor.value && this.element.config.borderWidth) {
                styles.border = `${this.element.config.borderColor.value} ${this.element.config.borderWidth.value}px solid`;
            }

            return styles;
        },
    },

    methods: {
        createdComponent() {
            this.initElementConfig('cms-button');
            this.initElementData('cms-button');
        },

        onInputText(text) {
            this.emitChanges(text);
        },
    }
});