<script lang="ts">
    import { Router, Route, Link } from 'svelte-routing';
    import PracticeAreaCore from './../../components/practice/core.practice.component.svelte';
    import LandingPage from './../../components/landing/core.landing.component.svelte';

    let { inputData } = $props();
</script>

<!-- <Router> -->
    <!-- <Link to="/practice"><PracticeAreaCore /></Link> -->
    <!-- <Link to="/"><PracticeAreaCore /><LandingPage /></Link> -->

    <!-- <Route path='/' component={LandingPage} ></Route>
    <Route path='/practice' component={PracticeAreaCore} ></Route>
</Router> -->

<PracticeAreaCore />