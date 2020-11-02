import { GetStaticPaths, GetStaticProps } from 'next'
import { PageInfo, Article } from 'schema';
import Layout from '../../components/Layout';
import ArticleListItem from '../../components/ArticleListItem';

type Props = Article

const Component: React.FC<Props> = props => <Layout title="記事一覧">
  <ArticleListItem {...props}/>
</Layout>

export const getStaticProps: GetStaticProps<Article, { id: string }> = async ({ params }) => {
  const { id } = params
  const data = await fetch(`https://honwakamedia.microcms.io/api/v1/articles/${id}`, {
    headers: {
      'X-API-KEY': process.env.MICRO_CMS_KEY
    }
  }).then<Article>(res => res.json())

  return { props: data }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetch(`https://honwakamedia.microcms.io/api/v1/articles`, {
    headers: {
      'X-API-KEY': process.env.MICRO_CMS_KEY
    }
  }).then<PageInfo<Article>>(res => res.json())

  return {
    paths: data.contents.map(item => `/articles/${item.id}`),
    fallback: false,
  }
}

export default Component