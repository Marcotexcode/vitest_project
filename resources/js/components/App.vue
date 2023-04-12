<template>
    <div>
        <button v-on:click="isHidden = !isHidden">Toggle hide and show</button>

        <h1 v-if="!isHidden">Hide me on click event!</h1>
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
