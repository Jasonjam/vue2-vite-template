<template>
    <div class="hello">
        <h1>{{ helloMsg }}</h1>
    </div>
</template>
<script>
export default {
    data() {
        return {
            helloMsg: "Hello World",
        };
    },
};
</script>
<style scope>
.hello h1 {
    color: limegreen;
    font-size: 32px;
}
</style>