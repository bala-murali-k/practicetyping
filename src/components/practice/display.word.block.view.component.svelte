<script lang="ts">
    import LetterBlock from './display.letter.block.view.component.svelte';

    let { displayValue } = $props();
</script>

<div class="display-word">
    <LetterBlock displayLetter={displayValue} />
    <!-- <p>{displayValue}</p> -->
</div>

<style>
    .display-word {
        background-color: lightgreen;
        display: inline-block;
    }
</style>