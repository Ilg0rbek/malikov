import { NextPage } from 'next';
import { BlogPostProps } from 'interfaces/interface';
import PageLayout from 'components/layouts/pageLayout';
import Home from './home';

const Index: NextPage<BlogPostProps> = (props) => {
  const { posts } = props;
  return (
    <PageLayout title="Abdumalikov Ilgor - Full Stack Developer">
      <Home posts={posts} />
    </PageLayout>
  );
};

export default Index;
