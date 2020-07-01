<template>
    <div class="metrics-item">
        <div class="metrics-title" v-if="title">{{ title }}</div>
        <div class="metrics-value title is-3" v-if="value != null">{{ value }}</div>
        <div class="metrics-subvalue" v-if="subvalue">
            <b-icon :icon="icon" size="is-small"></b-icon>
            {{ subvalue }}
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "CardMetricsItem",
    components: {},
    props: ["title", "value", "subvalue", "icon"],
    data() {
        return {};
    },

    computed: {},
    methods: {},
    mounted() {},
    created() {}
};
</script>

<style></style>
