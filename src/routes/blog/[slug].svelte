<script context="module" lang="ts">
  interface IFetch {
    fetch: any;
    params: any;
  }

  export async function load({ params, fetch }: IFetch) {
    const response = await fetch(`/api/${params.slug}.json`);
    const post = await response.json();

    return {
      status: response.status,
      props: {
        post: post,
      },
    };
  }
</script>

<script lang="ts">
  export let post: any;
</script>

<h2>{post.title}</h2>
