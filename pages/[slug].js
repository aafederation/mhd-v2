import { Layout } from "../components/Layout";
import { getAllProviderIds, getSingleProviderFromSlug } from "../lib/getData";

const memberType = "MHD";

export default function MHDprovider({ mentalHealthProvider }) {
  return (
    <Layout>
      <h1>The org is {mentalHealthProvider.org}</h1>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllProviderIds(memberType);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const mentalHealthProvider = getSingleProviderFromSlug(
    params.slug,
    memberType
  );
  return {
    props: {
      mentalHealthProvider,
    },
  };
}
