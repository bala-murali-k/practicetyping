<script lang="ts">

    import WordComponent from './display.word.block.view.component.svelte';

    let practiceText = 'Hello I am Bala Murali k.'
    let wordArray = practiceText.split(" ");
</script>

<div class="practice-area">
    <div class="area-wrapper">
        {#each wordArray as word}
            <WordComponent displayValue={word} />
            <WordComponent displayValue={" "} />
        {/each}
    </div>
</div>

<style>
    .practice-area {
        background-color: aqua;
        width: 100dvw;
        height: 100dvh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .area-wrapper {
        width: 80dvw;
        height: 45dvh;
        background-color: whitesmoke;
        border-radius: 10px;
        box-shadow: 10px 10px 20px lightgray;
    }
</style>