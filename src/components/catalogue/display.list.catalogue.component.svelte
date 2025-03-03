<script lang="ts">

    import LightIcon from './../../assets/icons/lightModeicon.svg';
    import DarkIcon from './../../assets/icons/darkModeIcon.svg';
    import { globalVariables } from '../../store/common.svelte';

    import ListPractice from './display.list.practice.catalogue.component.svelte';

    let isDarkTheme = $state(false);

</script>

<nav class="head-navigation-bar {globalVariables.isDarkTheme}">
    <button type="button" onclick={() => { globalVariables.isDarkTheme = !globalVariables.isDarkTheme }} >
        <img 
            class="{globalVariables.isDarkTheme ? 'dark-icon' : 'light-icon'}" 
            src={globalVariables.isDarkTheme ? DarkIcon : LightIcon}
            width="50" 
            height="50" 
            alt='Light Theme Icon' 
        />
    </button>
</nav>
<div class="{globalVariables.isDarkTheme ? 'dark' : 'light'} list-body">
    <ListPractice />
</div>

<style>
    button {
        /* background-color: grey; */
        border-radius: 30px;
        padding: .25em;
    }

    .light {
        background-color: #FFFFE0;
        color: #556B2F;
        width: 100dvw;
        height: 90dvh;
    }

    .light-icon, .dark-icon {
        width: 30px;
        height: 30px;
        fill: green;
    }

    .dark {
        background-color: #333333;
        color: #FFFFFF;
        width: 100dvw;
        height: 100dvh;
    }

    .head-navigation-bar {
        display: flex;
        border-radius: 10px;
        background-color: aliceblue;
        width: 100dvw;
        height: 10dvh;
        justify-content: flex-end;
        padding: .75em;
        padding-right: 2em;
    }

    .list-body {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>