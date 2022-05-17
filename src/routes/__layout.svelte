<script type="ts">
  import { page } from '$app/stores';
  import '../styles/normalize.css';
  import '../styles/reset.css';
  import '../styles/typography.scss';
  import '../styles/global.scss';
  import '../styles/vars.css';
  import Navbar from '@components/Navbar.svelte';
  import Header from '@components/Header.svelte';
  import HomeTitle from '@components/HomeTitle.svelte';
  import ContactTitle from '@components/ContactTitle.svelte';
  import Footer from '@components/Footer.svelte';
</script>

<Navbar />
<Header>
  {#if $page.url.pathname === '/'}<HomeTitle slot="title" />{/if}
  {#if $page.url.pathname === '/contact'}<ContactTitle slot="title" />{/if}
</Header>
<slot />
<Footer />
