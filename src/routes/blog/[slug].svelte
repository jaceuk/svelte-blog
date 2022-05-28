<script context="module" lang="ts">
  interface IFetch {
    fetch: any;
  }

  export const load = async ({ fetch }: IFetch) => {
    const post = await fetch('/api/post.json');
    const postData = await post.json();

    return {
      props: {
        post: postData,
      },
    };
  };
</script>

<script lang="ts">
  export let post: any;

  // console.log(post);
</script>

<h2>{post[0].meta.title}</h2>
