<template>
    <div class="metrics-item">
        <div class="metrics-title">{{ title }}</div>
        <div class="metrics-value title is-3">{{ value }}</div>
        <div class="metrics-subvalue" v-if="subvalue">
            <b-icon :icon="icon" size="is-small"></b-icon>
            {{ subvalue }}
        </div>
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
