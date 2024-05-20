import { Layout } from "../components/Layout";
import { SingleProvider } from "../components/SingleProvider";
import { getAllProviderIds, getSingleProviderFromSlug } from "../lib/getData";

const memberType = "MHD";

export default function MHDprovider({ mentalHealthProvider }) {
  return (
    <Layout>
      <SingleProvider mentalHealthProvider={mentalHealthProvider} />
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
