interface IProps {
  params: any;
}

const slugFromPath = (path: any) => path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;

export async function get({ params }: IProps) {
  const allPostFiles = import.meta.glob('../../posts/*.md');

  let match: any;

  for (const [path, page] of Object.entries(allPostFiles)) {
    if (slugFromPath(path) === params.slug) {
      match = [path, page];
      break;
    }
  }

  if (!match) {
    return {
      status: 404,
    };
  }

  const post = await match[1]();

  return {
    status: 200,
    body: post.metadata,
  };
}
