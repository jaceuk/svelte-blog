import { basename } from 'path';
import { postsPerPage } from '@lib/stores';

let postsPerPageValue: number;

postsPerPage.subscribe((value: number) => {
  postsPerPageValue = value;
});
interface IUrl {
  url: any;
}

export async function get({ url }: IUrl) {
  const page = parseInt(url.searchParams.get('page'));
  const tag = url.searchParams.get('tag');
  const allPostFiles = import.meta.glob('../../posts/*.md');
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([filename, resolver]) => {
      const { metadata } = await resolver();

      return {
        title: metadata.title,
        date: metadata.date,
        excerpt: metadata.excerpt,
        tags: metadata.tags,
        slug: basename(filename, '.md'),
      };
    }),
  );

  let filteredPosts: any;
  if (tag) {
    filteredPosts = allPosts.filter((post: any) => {
      return post.tags.includes(tag);
    });
  } else {
    filteredPosts = allPosts;
  }

  const sortedPosts = filteredPosts.sort((a: any, b: any) => (a.date > b.date ? -1 : 1));
  const sortedPostsPage = sortedPosts.slice((page - 1) * postsPerPageValue, page * postsPerPageValue);

  if (!sortedPostsPage.length) {
    return {
      status: 404,
    };
  }

  return {
    status: 200,
    body: {
      posts: sortedPostsPage,
      postCount: filteredPosts.length,
    },
  };
}
