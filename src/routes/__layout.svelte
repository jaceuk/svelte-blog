<script type="ts">
  import { page } from '$app/stores';
  import '../styles/normalize.css';
  import '../styles/reset.css';
  import '../styles/typography.scss';
  import '../styles/global.scss';
  import '../styles/vars.css';
  import '../styles/markdown.css';
  import CookieBanner from '@components/CookieBanner.svelte';
  import Navbar from '@components/Navbar.svelte';
  import Header from '@components/Header.svelte';
  import HomeTitle from '@components/HomeTitle.svelte';
  import ContactTitle from '@components/ContactTitle.svelte';
  import BlogTitle from '@components/BlogTitle.svelte';
  import TagTitle from '@components/TagTitle.svelte';
  import Footer from '@components/Footer.svelte';
</script>

<CookieBanner />
<Navbar />
<Header>
  {#if $page.url.pathname === '/'}<HomeTitle slot="title" />{/if}
  {#if $page.url.pathname === '/contact'}<ContactTitle slot="title" />{/if}
  {#if $page.url.pathname === '/blog/posts'}<BlogTitle slot="title" />{/if}
  {#if $page.url.pathname.includes('/tag/')}<TagTitle slot="title" />{/if}
</Header>
<slot />
<Footer />
