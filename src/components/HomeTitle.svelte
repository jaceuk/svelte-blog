<script lang="ts">
  import bigJ from '@images/big-j.svg';
</script>

<img src={bigJ} alt="" />

<div class="title">
  <h1 class="large">
    <span class="light">Hi, I'm</span> Jason Newington
  </h1>
  <div class="subtitle">Developer, Designer and Geek</div>
</div>

<style lang="scss">
  img {
    display: block;
    height: 265px;

    @media (max-width: 767px) {
      display: none;
    }
  }

  .title {
    color: var(--color-white);
    text-align: left;

    @media (max-width: 767px) {
      text-align: center;
    }
  }

  .subtitle {
    font-weight: var(--font-weight-light);
    font-family: 'Raleway', sans-serif;
    font-size: var(--font-size-large);

    @media (max-width: 767px) {
      font-size: calc(var(--font-size-large) * 0.85);
    }
  }
</style>
