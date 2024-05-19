export const SearchResultCard = ({ mentalHealthProvider, location }) => {
  let bgType = "bg-organization";
  let colorTypeInvert = "color-organization-invert";
  let textContent = "Organization";

  if (
    mentalHealthProvider.tags.some((x) =>
      x.toLowerCase().includes("individual")
    )
  ) {
    bgType = "bg-individual";
    colorTypeInvert = "color-individual-invert";
    textContent = "Individual Provider";
  }
  return (
    <>
      <section
        className="[ radius ] tf-item tf-filter-item show-item" //tf-filter-item: display based on search
        data-tag=""
        data-service=""
        data-nonClinicalService=""
        data-staffGender=""
        data-ageGroup=""
        data-specialty=""
        data-type=""
        data-borough=""
        data-language=""
        data-payment=""
        data-ADAcompliance=""
      >
        <div
          className={`text-400 pad-top-500 pad-bottom-500 pad-left-500 pad-right-500 split-pair ${bgType} ${colorTypeInvert}`}
          id="provider-header"
        >
          <div>
            <h3 className="link-pointer-basic">{mentalHealthProvider.org}</h3>
            <h5 className="b-legal provider-type">{textContent}</h5>
          </div>
          <h4 className="link-pointer-basic">more info ›</h4>
        </div>
        <div
          className="[ card-flex ] [ pad-top-500 pad-bottom-500 pad-left-600 pad-right-600 ]"
          data-layout="reversed"
        >
          <div className="flow" style={{ "--flow-space": "0.5rem" }}>
            {location.address && (
              <div className="display-flex" id="address-row">
                <span className="[ font_icons color-icon ] [ position-icon ]">
                  &#xe01d;
                </span>
                <span className="address">{location.address}</span>
              </div>
            )}
            {location.phone_number && (
              <div className="display-flex" id="phone-row">
                <span className="[ font_icons color-icon ] [ position-icon ]">
                  &#xe090;
                </span>
                <span className="phone">{location.phone_number}</span>
              </div>
            )}
            {mentalHealthProvider.email && (
              <div className="display-flex" id="email-row">
                <span className="[ font_icons color-icon ] [ position-icon ]">
                  &#xe010;
                </span>
                <span className="email">
                  <a
                    href={`mailto: ${mentalHealthProvider.email}`}
                    className="link-pointer"
                    data-variant="invert"
                    target="_blank"
                  >
                    {mentalHealthProvider.email}
                  </a>
                </span>
              </div>
            )}
            {mentalHealthProvider.website && (
              <div className="display-flex" id="website-row">
                <span className="[ font_icons color-icon ] [ position-icon ]">
                  &#xe0e3;
                </span>
                <span className="website">
                  <a
                    className="link-pointer handle-long-url"
                    data-variant="invert"
                    href={
                      (!mentalHealthProvider.website
                        .toLowerCase()
                        .startsWith("http")
                        ? "//"
                        : "") + `${mentalHealthProvider.website}`
                    }
                    target="_blank"
                  >
                    {mentalHealthProvider.website}
                  </a>
                </span>
              </div>
            )}
            <div className="display-flex" id="clinical-services-row">
              <span className="[ font_icons color-icon ] [ position-icon ]">
                &#x4e;
              </span>
              <div>
                {/* <span className="weight-bold">{{ partial "functions/forestryLabel" "locations.services" }}</span>: */}
                <span className="services"></span>
              </div>
            </div>
            <div className="display-flex" id="non-clinical-services-row">
              <span className="[ font_icons color-icon ] [ position-icon ]">
                &#x4e;
              </span>
              <div>
                {/* <span className="weight-bold">{{ partial "functions/forestryLabel" "locations.non_clinical_services" }}</span>: */}
                <span className="non-clinical-services"></span>
              </div>
            </div>
            <div className="display-flex" id="trainings-row">
              <span className="[ font_icons color-icon ] [ position-icon ]">
                &#x4e;
              </span>
              <div>
                {/* <span className="weight-bold">{{ partial "functions/forestryLabel" "locations.trainings" }}</span>: */}
                <span className="trainings"></span>
              </div>
            </div>
            <div className="display-flex" id="credentials-row">
              <span className="[ font_icons color-icon ] [ position-icon ]">
                &#x4e;
              </span>
              <div>
                {/* <span className="weight-bold">{{ partial "functions/forestryLabel" "locations.credentials" }}</span>: */}
                <span className="credentials"></span>
              </div>
            </div>
          </div>
          <div>
            <div className="link-pointer directions gap-top-500 lg:gap-top-0">
              <span className="font_icons">&#xe03c;</span>
              <span className="weight-bold"> Get directions </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
