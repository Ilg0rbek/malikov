import Home from 'components/home-page/home'
import { GetStaticProps, NextPage } from 'next'
import { BlogPostProps } from 'interfaces/interface'
import PageLayout from 'components/layouts/pageLayout'

const Index: NextPage<BlogPostProps> = (props) => {
  const { posts } = props
  return (
    <PageLayout title="Malikov Ilgor - Full Stack Developer">
      <Home posts={posts} />
    </PageLayout>
  )
}


export default Index
