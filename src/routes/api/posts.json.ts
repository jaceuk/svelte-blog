import { basename } from 'path';

export async function get() {
  const allPostFiles = import.meta.glob('../../posts/*.md');
  const iterablePostFiles = Object.entries(allPostFiles);

  console.log(iterablePostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([filename, resolver]) => {
      const { metadata } = await resolver();

      return {
        title: metadata.title,
        date: metadata.date,
        excerpt: metadata.excerpt,
        slug: basename(filename, '.md'),
      };
    }),
  );

  const sortedPosts = allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));

  return {
    status: 200,
    body: sortedPosts,
  };
}
