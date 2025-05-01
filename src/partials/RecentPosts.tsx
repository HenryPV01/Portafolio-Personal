import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';
import { BlogGallery, Section } from 'astro-boilerplate-components';

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const RecentPosts = (props: IRecentPostsProps) => (
  <Section title={<></>}>
    <div className="flex flex-col gap-6">
      <BlogGallery postList={props.postList} />
    </div>
  </Section>
);

export { RecentPosts };
