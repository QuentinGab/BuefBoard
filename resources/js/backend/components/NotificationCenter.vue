<template>
    <b-sidebar
        :fullheight="true"
        :fullwidth="false"
        :overlay="false"
        :right="true"
        :open.sync="notificationCenter.open"
    >
        <div class="p-1">
            <b-message
                type="is-primary"
                aria-close-label="Close message"
                size="is-small"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet,
                elit sapien laoreet elit
            </b-message>

            <b-message
                type="is-primary"
                aria-close-label="Close message"
                size="is-small"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet,
                elit sapien laoreet elit
            </b-message>
            <b-message
                type="is-primary"
                aria-close-label="Close message"
                size="is-small"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet,
                elit sapien laoreet elit
            </b-message>
        </div>
        <div class="p-1 bb-sidebar-footer">
            <div class="buttons">
                <b-button type="is-default">option 1</b-button>
                <b-button type="is-default">option 2</b-button>
                <b-button type="is-default">option 3</b-button>
            </div>
        </div>
    </b-sidebar>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
    name: "NotificationCenter",
    components: {},
    props: {},
    data() {
        return {};
    },
    computed: {
        ...mapState(["notificationCenter", "loading"])
    },
    methods: {},
    created() {},
    mounted() {}
};
</script>

<style></style>
