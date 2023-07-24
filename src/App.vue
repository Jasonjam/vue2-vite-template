<template>
    <div>
        <h1>Vue 2</h1>
        <HelloCompo />
        <button @click="clickHandler()">{{ btnName }}</button>
        <p>testsett</p>
    </div>
</template>

<script>
import HelloCompo from "./components/HelloCompo.vue";

export default {
    name: "App",
    components: {
        HelloCompo,
    },
    data() {
        return {
            btnName: "Btn test",
        };
    },
    methods: {
        clickHandler() {
            console.log("Btn test Clicked");
        },
    },
};
</script>

<style scoped>
h1 {
    font-size: 32px;
    font-weight: bold;
}
</style>