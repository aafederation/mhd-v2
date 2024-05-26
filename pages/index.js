import { useState } from "react";
import { Layout } from "../components/Layout";
import { MainBody } from "../components/MainBody";
import { getSortedData } from "../lib/getData";
import { SearchBar } from "../components/SearchBar";

export async function getStaticProps() {
  const allMHDdata = getSortedData("MHD");

  return {
    props: {
      allMHDdata,
    },
  };
}

export default function Home({ allMHDdata }) {
  const incrNbr = 6;
  const [filteredMHdata, setFilteredMHdata] = useState(allMHDdata);
  const [nbrToShow, setNbrToShow] = useState(
    allMHDdata.length < incrNbr ? allMHDdata.length : incrNbr
  );

  function showMore() {
    setNbrToShow(nbrToShow + incrNbr);
  }
  function resetNbrToShow() {
    setNbrToShow(incrNbr);
  }

  return (
    <Layout>
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
          <SearchBar
            allMHDdata={allMHDdata}
            setFilteredMHdata={setFilteredMHdata}
            resetNbrToShow={resetNbrToShow}
          />
        </div>
        <div
          className="[ main-filter-col fixed-scrollable ] [ top-500 right-500 bottom-800 left-500 z-2 ]"
          id="main-filter"
        >
          {/* {{ partial "main-filter.html" . }} */}
        </div>
        <div className="main-body-col">
          <MainBody
            allMHDdata={allMHDdata}
            filteredMHdata={filteredMHdata}
            setFilteredMHdata={setFilteredMHdata}
            nbrToShow={nbrToShow}
            showMore={showMore}
            resetNbrToShow={resetNbrToShow}
          />
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
