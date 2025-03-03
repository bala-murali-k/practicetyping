<script lang="ts">
    import PracticeMaterial from './../../assets/stories/practice.store.json';
    let practiceList = Object.keys(PracticeMaterial);
    let practiceListDetails = Object.values(PracticeMaterial);
    console.log("testtesttesttesttest", practiceListDetails);
</script>

<div class="list-practice-materials">
    <ul>
        {#each practiceList as materials, index}
            <li>
                <a href="/practice/{practiceListDetails[index].practiceTitle}">{materials}</a>
            </li>
        {/each}
    </ul>
</div>