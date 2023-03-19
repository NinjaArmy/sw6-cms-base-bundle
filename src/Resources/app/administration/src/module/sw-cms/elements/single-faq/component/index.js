import template from './sw-cms-el-single-faq.html.twig';
import './sw-cms-el-single-faq.scss';

const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-cms-single-faq', {
    template,

    inject: ['repositoryFactory'],

    mixins: [
        Mixin.getByName('cms-element')
    ],

    data() {
        return {
            editable: true,
            demoValue: ''
        };
    },

    watch: {
        cmsPageState: {
            deep: true,
            handler() {
                this.updateDemoValue();
            }
        },

        'element.config.content.source': {
            handler() {
                this.updateDemoValue();
            }
        }
    },

    created() {
        this.createdComponent();
    },
    computed: {
        headlineColor() {
            const styles = {};
            if (this.element.config.headlineColor.value) {
                styles.color = `${this.element.config.headlineColor.value}`;
            }
            return styles;
        },
        headlineBgColor() {
            const styles = {};
            if (this.element.config.headlineBgColor.value ) {
                styles.backgroundColor = `${this.element.config.headlineBgColor.value}`;
            }
            return styles;
        },
        collapseStyles() {
            if (this.element.config.collapseColor.value && this.element.config.collapseBgColor.value) {
                return {
                    '--ninja-collapse-clr': this.element.config.collapseColor.value,
                    '--ninja-bg-collapse-clr': this.element.config.collapseBgColor.value
                }
            }
        },
        icon() {
            if(this.element.config.icon.value) {
                return this.element.config.icon.value;
            }
        },
        borderColor() {
            const styles = {}
            if(this.element.config.borderColor.value) {
                styles.borderBottom =  '1px solid ' + `${this.element.config.borderColor.value}`;
            }
            return styles;
        },
    },

    methods: {
        createdComponent() {
            this.initElementConfig('single-faq');
        },

        updateDemoValue() {
            if (this.element.config.content.source === 'mapped') {
                this.demoValue = this.getDemoValue(this.element.config.content.value);
            }
        },

        onBlur(content) {
            this.emitChanges(content);
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