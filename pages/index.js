import { Layout } from "../components/Layout";
import { getSortedData } from "../lib/getData";

// import { TinaMarkdown } from "tinacms/dist/rich-text";
// import { tinaField, useTina } from "tinacms/dist/react";
// import { client } from "../tina/__generated__/client";

export async function getStaticProps() {
  const allMHDdata = getSortedData("MHD");

  return {
    props: {
      allMHDdata,
    },
  };
}

// export const getStaticProps = async () => {
//   const { data, query, variables } = await client.queries.page({
//     relativePath: "home.mdx",
//   });

//   return {
//     props: {
//       data,
//       query,
//       variables,
//       //myOtherProp: 'some-other-data',
//     },
//   };
// };

export default function Home({ allMHDdata }) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  // const { data } = useTina({
  //   query: props.query,
  //   variables: props.variables,
  //   data: props.data,
  // });

  // const content = data.page.body;
  return (
    <Layout>
      {/* <div data-tina-field={tinaField(data.page, "body")}>
        <TinaMarkdown content={content} />
      </div> */}
      <div className="[  index-blurb flow ] [ gap-top-300 pad-top-900 pad-right-500 pad-bottom-900 pad-left-500 bg-canvas ]">
        <p className="text-500">
          All Asian Americans deserve access to culturally competent mental
          health care. AAF’s goal is to make sure every Asian New Yorker who
          needs mental health care is able to receive it in a language they
          speak, from providers who understand Asian cultures. This directory is
          meant to help individuals and families find a provider to fit their
          needs, whether that means counseling, education, or the many ways that
          our communities seek mental well-being.
        </p>
        <p className="text-400" style={{ fontStyle: "italic" }}>
          Disclaimer: The providers in this directory are not managed by AAF,
          and this organization assumes no legal responsibility for the
          governing of the provider or their practice. Information in this
          directory is self-reported by each provider and is not confirmed by
          AAF.
        </p>
      </div>
      <div
        className="wrapper mhd-tiles gap-top-1000"
        data-layout="reversed"
        data-variant="no-padding"
      >
        <div className="[ display-block sm:display-none width-100 ]">
          {/* {{ partial "search.html" . }} */}
        </div>
        <div
          className="[ main-filter-col fixed-scrollable ] [ top-500 right-500 bottom-800 left-500 z-2 ]"
          id="main-filter"
        >
          {/* {{ partial "main-filter.html" . }} */}
        </div>
        <div className="main-body-col">
          {/* {{ partial "main-body.html" . }} */}
          <p>
            data is:
            <br />
            <span>{allMHDdata[0].org}</span>
            <br />
            content is:
            <br />
            <span dangerouslySetInnerHTML={{ __html: allMHDdata[0].content }} />
          </p>
          {/* {allMHDdata.map((provider) => (
            <h4>
              {provider.id}
              {provider.name}
            </h4>
            // <Component member={member} key={member.id} />
            // <h4 key={provider.id}>{provider.id}</h4>
          ))} */}
        </div>
      </div>
      <div className="[  index-blurb flow ] [ pad-top-900 pad-right-500 pad-bottom-900 pad-left-500 bg-canvas ]">
        <p className="text-500 weight-bold ta-center">
          AAF's Mental Health Directory was made possible with support from
        </p>
        <div className="wrapper" data-variant="narrow">
          <div className="tiles" data-variant="two-per-row">
            <img
              src="/img/logo/Peloton_logo.png"
              style={{ marginBottom: "auto" }}
            />
            <img src="/img/logo/MotherCabriniLogo.png" />
          </div>
        </div>
        <p className="text-500 ta-center">
          and New York State Health Foundation
        </p>
        <span className="text-400 ta-center">
          <p>We thank our partners for their collaboration:</p>
          <p>
            <a href="https://www.arabamericanny.org/">
              Arab American Association of New York
            </a>
            ,{" "}
            <a href="http://www.hamiltonmadisonhouse.org/">
              Hamilton-Madison House
            </a>
          </p>
          <p>
            <a href="https://www.kcsny.org/">
              Korean Community Services of Metropolitan New York
            </a>
            , and <a href="http://sapnanyc.org/">Sapna NYC</a>
          </p>
        </span>
      </div>
    </Layout>
  );
}
