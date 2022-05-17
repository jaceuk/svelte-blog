<script lang="ts">
  import bigJ from '@images/big-j.svg';
</script>

<div class="container">
  <div class="inner">
    <img class="image" src={bigJ} alt="" />
    <nav>
      <a href="/" class="button">Home</a>
      <a href="/contact" class="button">Contact</a>
    </nav>
  </div>
</div>

<style lang="scss">
  .container {
    padding: var(--size-base) 0;
    position: absolute;
    width: 100%;
    z-index: 100;
  }

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media (max-width: 767px) {
      justify-content: center;
    }
  }

  nav {
    display: flex;
    gap: 1.6rem;
    align-items: center;
  }

  .image {
    visibility: hidden;

    @media (max-width: 767px) {
      display: none;
    }
  }

  .button {
    background: var(--color-nearlyblack20);
    border-color: var(--color-nearlyblack20);
    color: var(--color-white);
    box-shadow: none;

    &:hover {
      background: var(--color-nearlyblack40);
    }
  }
</style>
