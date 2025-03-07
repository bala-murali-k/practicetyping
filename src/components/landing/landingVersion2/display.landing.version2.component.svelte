<script lang="ts">

    import { Commons } from "../../../utils/common";
    import { globalVariables, handleTheme } from "../../../store/common.svelte";

    const commons: any = new Commons();

</script>
<div class="w-[100dvw] h-[100dvh] flex flex-col justify-center relative">
    <div class="w-[100dvw] flex justify-end absolute top-0">
        <button class="ml-10 w-auto hover:bg-blue-300 text-center p-1 rounded-2xl transition-all duration-300 ease-in-out" aria-label="Toggling Dark Mode" onclick={() => {handleTheme()}} >
            {#if globalVariables.isDarkTheme}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
            {:else}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" class="w-6 h-6 inline-block align-middle">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
            {/if}
        </button>
    </div>
    <div class="bg-white dark:bg-gray-800 w-[100dvw] h-[100%] flex items-center justify-center gap-3">
        <div class="bg-[#4169E1] w-[35dvw] h-[65dvh] rounded-2xl flex items-center justify-center shadow-2xl">
        <!-- <div class="bg-[#4169E1] w-[35dvw] h-[35dvh] rounded-2xl flex items-center justify-center shadow-[0_4px_6px_(0,0,255, 1)]"> -->
            <a class="text-[#fff] font-stretch-normal transition-size duration-300 ease-in-out" href="/about" aria-label="Redirecting to about page"> About </a>
            <!-- <button class="about-navigate" onclick={() => {commons?.routeTo('/about')}} > About </button> -->
        </div>
        <div class="bg-[#98FF98] w-[35dvw] h-[65dvh] rounded-2xl flex items-center justify-center shadow-2xl"></div>
    </div>
</div>

<!-- <style>
    @import url('./assets/styles/style.landing.version2.css');
</style> -->