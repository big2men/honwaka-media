import { GetStaticProps } from 'next'
import { PageInfo, Article } from 'schema';
import Layout from '../components/Layout'
import ArticleListItem from '../components/ArticleListItem'

type Props = PageInfo<Article>

const Component: React.FC<Props> = ({ contents }) => <Layout title="記事一覧">
  {contents.map(item => <ArticleListItem key={item.id} {...item}/>)}
</Layout>

export const getStaticProps: GetStaticProps<PageInfo<Article>> = async () => {
  const data = await fetch('https://honwakamedia.microcms.io/api/v1/articles', {
    headers: {
      'X-API-KEY': process.env.MICRO_CMS_KEY
    }
  }).then<PageInfo<Article>>(res => res.json())

  return { props: data }
}

export default Component