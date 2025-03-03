<script lang="ts">
    // import { onMount } from 'svelte';
    import { Commons } from "../../utils/common";

    const commons: any = new Commons();
    let welocmeText = "Welcome to Practice Typing";
    let letterArray = welocmeText.split("");
    let cursorClass: any = $state("terminal-cursor");

    function router (page: string) {
        commons.routeTo(page);
    }

</script>

<div class="landing-background" onclick={() => {router('/catalogue')}} onkeydown={() => {router('/practice')}} role={'button'} >
    <div class="text-wrapper {cursorClass ? cursorClass : null}">
        <div class="greeting-text">
            <h1>{welocmeText}</h1>
        </div>
        <h3>Click Anywhere</h3>
    </div>
</div>

<style>
    :root {
        /* background color variables */
        --blue-background: #ADD8E6;
        --soft-gray-background: #D3D3D3;
        --mint-green-background: #98FF98;
        --peach-background: #FFDAB9;
        --light-coral-background: #F08080;
        --light-orange-background: #ADD8E6;
        --light-lavender-background: #ADD8E6;
        --sky-blue-background: #ADD8E6;
        --gold-background: #ADD8E6;
        --light-pink-background: #FFB6C1;
        --bright-yellow-background: #FFFF00;

        /* text color variables */
        --black-text: #000000;
    }

    /* @keyframes typing {
        from { width: 0; }
        to { width: 100%; }
    }

    @keyframes blink-cursor {
        from, to { border-color: transparent }
        50% { border-color: orange; }
    } */

    @keyframes typing {
        0% { width: 0; }
        100% { width: 85%; }
    }

    @keyframes blink-cursor {
        from, to { border-color: transparent }
        50% { border-color: white; }
    }

    @keyframes background-change {
        0% {
            background-color: var(--blue-background);
        }
        10% {
            background-color: var(--soft-gray-background);
        }
        20% {
            background-color: var(--mint-green-background);
        }
        30% {
            background-color: var(--peach-background);
        }
        40% {
            background-color: var(--light-coral-background);
        }
        50% {
            background-color: var(--light-orange-background);
        }
        60% {
            background-color: var(--light-lavender-background);
        }
        70% {
            background-color: var(--sky-blue-background);
        }
        80% {
            background-color: var(--gold-background);
        }
        90% {
            background-color: var(--light-pink-background);
        }
        100% {
            background-color: var(--bright-yellow-background);
        }
    }
    
    .landing-background {
        width: 100dvw;
        height: 100dvh;
        background-color: var(--blue-background);
        animation: background-change 50s step-end infinite alternate;
        color: var(--black-text);
        padding-left: 10dvw;
        display: flex;
        align-items: center;
    }

    .greeting-text {
        border-right: 15px solid white;
        animation: typing 4.5s steps(40, end);
        font-size: 8em;
        font-weight: 400;
        overflow: hidden;
        white-space: nowrap;
        text-align: center;
    }

    .terminal-cursor {
        animation: blink-cursor .75s ease-in-out infinite;
    }

    .text-wrapper {
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
    }

    /* .typing-text {
        font-size: 8em;
        font-weight: 400;
        overflow: hidden;
        white-space: nowrap;
    }

    .typing-text {
        width: auto;
        overflow: hidden;
        border-right: .15em solid orange;
        white-space: nowrap;
        margin: 0 auto;
        letter-spacing: .15em;
        animation: typing 3.5s steps(40, end), blink-cursor .75s step-end infinite;
    } */
</style>