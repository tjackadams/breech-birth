import styles from "../styles/Index.module.css";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import clsx from "clsx";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import PostMeta from "@components/PostMeta";
import PostFooter from "@components/PostFooter";
import SocialIconBar from "@components/SocialIconBar";

type IndexProps = {
  title: string;
  description: string;
};
const Index = ({
  title,
  description,
  frontmatter,
  markdownBody,
  ...props
}: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <SocialIconBar />
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <main>
                <article>
                  <div className="row justify-content-center postcontent">
                    <div className="col-12">
                      <PostMeta {...frontmatter} />
                      <ReactMarkdown>{markdownBody}</ReactMarkdown>
                      <PostFooter {...frontmatter} />
                    </div>
                  </div>
                  <footer></footer>
                </article>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async (context) => {
  const content = await import("../posts/breech-birth.md");
  const configData = await import(`../siteconfig.json`);
  const data = matter(content.default);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
};
