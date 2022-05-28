export const get = async () => {
  const postFile = import.meta.glob(`../../posts/test.md`);
  const iterablePostFile = Object.entries(postFile);

  const postData = await Promise.all(
    iterablePostFile.map(async ([path, resolver]) => {
      const { metadata } = await resolver();

      return {
        meta: metadata,
      };
    }),
  );

  return {
    body: postData,
  };
};
