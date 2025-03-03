<script lang="ts">
    
    // Necessary Imports
    import { page } from "$app/stores";
	import { LocalConvenienceStoreOutlined } from "@mui/icons-material";
    import PracticeComponent from "./../+page.svelte";
    import PracticeMaterial from "./../../../assets/stories/practice.store.json";

    // Necessary Variables
    let pageValue = JSON.stringify($page.params.practiceKey).toString();
    const practiceContentKey: any = pageValue.split(" ").join("");
    const backToJson: any = JSON.parse(practiceContentKey);
    const practiceContent = PracticeMaterial;
    // console.log("JJJJJJJJJJJJJJJJJJJJJJJJJJJ", PracticeMaterial[practiceContentKey]);

</script>

<div>
    <PracticeComponent inputData="" />
</div>