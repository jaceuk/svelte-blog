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
  import Footer from '@components/Footer.svelte';
</script>

<CookieBanner />
<Navbar />
<slot />
<Footer />
