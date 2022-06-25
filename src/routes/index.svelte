<script type="ts">
  import Skills from '@components/Skills.svelte';
  import Projects from '@components/Projects.svelte';
  import Header from '@components/Header.svelte';
  import HomeTitle from '@components/HomeTitle.svelte';
</script>

<svelte:head>
  <title>Jason Newington - Developer, Designer and Geek</title>
</svelte:head>

<Header>
  <HomeTitle />
</Header>
<Skills />
<Projects />
