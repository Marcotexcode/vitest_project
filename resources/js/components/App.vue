<template>
    <div>
        <button v-on:click="isHidden = !isHidden">Clicca per mostrare il testo</button>

        <h1 v-if="!isHidden">HELLO WORD</h1>
    </div>
</template>

<script>
    export default {

        data () {
            return {
                isHidden: true
            }
        },
    }
</script>
