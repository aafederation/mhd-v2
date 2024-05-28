export const SingleLocationBanner = ({ provider, location }) => {
  let bgType = "bg-organization";
  let colorTypeInvert = "color-organization-invert";
  let individual = false;
  let mapSrc;
  let mappingAddress = "";
  let showPlace = true;
  let latLng = location.latLng;
  let borough = location.boroughs[0];

  const trimA = (str) =>
    str[0] === "@" ? str.substring(1).trim() : str.trim();

  if (provider.tags.some((x) => x.toLowerCase().includes("individual"))) {
    bgType = "bg-individual";
    colorTypeInvert = "color-individual-invert";
    individual = true;
  }

  if (latLng) {
    if (location.boroughs.length === 0) {
      borough = "New York City";
    }
    if (individual) {
      mappingAddress = location.address + "," + borough + "+NY";
    } else {
      mappingAddress =
        provider.org + "," + location.address + "," + borough + "+NY";
    }

    mappingAddress = mappingAddress.replace(/[\s+_]/g, "+").replace(/\n/g, "+");
    mapSrc = `https://www.google.com/maps/embed/v1/place?q=${mappingAddress}&center=${latLng}&key=AIzaSyBq3mhYmZFPmQqp0q0koUSMbTtA49zjwQY&zoom=12&`;
  } else {
    latLng = "40.704938, -74.006006";
    mapSrc = `https://www.google.com/maps/embed/v1/view?center=${latLng}&key=AIzaSyBq3mhYmZFPmQqp0q0koUSMbTtA49zjwQY&zoom=11&`;
    showPlace = false;
  }

  return (
    <>
      <div
        className={`[ wrapper ] [ ${bgType} pad-top-500 ${colorTypeInvert} ]`}
      >
        <h1>{provider.org}</h1>
      </div>
      <div
        className={`[ wrapper ] [ ${bgType} pad-top-500 pad-bottom-500 ${colorTypeInvert} ]`}
      >
        <div className="[ split-pair ] [ text-400 ]">
          <h3>
            <span className="font_icons">&#xe01d;</span>
            <span className="weight-bold"> {location.address}</span>
          </h3>
          {location.boroughs.length > 0 && (
            <h3>
              <span className="font_icons">&#xe01f;</span>
              <span className="weight-bold"> {location.boroughs[0]}</span>
            </h3>
          )}
          {location.phone_number && (
            <h3>
              <span className="font_icons">&#xe090;</span>
              <span className="weight-bold"> {location.phone_number}</span>
            </h3>
          )}
        </div>
      </div>
      <div className="[ wrapper ] [ bg-light pad-top-500 pad-bottom-500 ]">
        <div className="tiles" data-variant="two-per-row">
          <div className="[ bg-white box-shadow-glow ]">
            {provider.image && (
              <div className="[ ]">
                <h4 className="underline pad-left-300 pad-right-300 pad-top-300 pad-bottom-300">
                  {provider.org}
                </h4>
                <img src={provider.image} className="[ bg-white ]" alt="" />
              </div>
            )}
            <div className="[ ]">
              <h4 className="underline pad-left-300 pad-right-300 pad-top-300 pad-bottom-300">
                Location
              </h4>
              <iframe
                frameBorder="0"
                width="100%"
                height="300px"
                style={{ border: "0" }}
                src={mapSrc}
                allowFullScreen
              ></iframe>
              {showPlace && (
                <div className="pad-left-300 pad-right-300 pad-top-300 pad-bottom-300">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${mappingAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-pointer color-white bg-primary no-decoration"
                  >
                    <span className="font_icons">&#xe03c;</span>
                    <span className="weight-bold"> Get directions</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="[ bg-white box-shadow-glow ]">
            <h4 className="underline pad-left-300 pad-right-300 pad-top-300 pad-bottom-300">
              Provider Overview
            </h4>
            <div
              className="flow pad-top-300 pad-right-300 pad-bottom-500 pad-left-300"
              style={{ "--flow-space": "0.5rem" }}
            >
              {location.phone_number && (
                <div className="display-flex">
                  <span className="[ font_icons color-icon ] [ position-icon ]">
                    &#xe090;
                  </span>
                  <span>
                    {location.phone_number}
                    {provider.best_way_to_contact.includes("Phone") && (
                      <h5 className="inline-display">(best way to contact)</h5>
                    )}
                  </span>
                </div>
              )}

              {provider.email && (
                <div className="display-flex flex-wrap-wrap">
                  <span className="[ font_icons color-icon ] [ position-icon ]">
                    &#xe010;
                  </span>
                  <a
                    href={`mailto:${provider.email}`}
                    className="link-pointer"
                    data-variant="invert"
                    target="_blank"
                  >
                    {provider.email}
                  </a>
                  {provider.best_way_to_contact.includes("Email") && (
                    <h5 className="inline-display" data-variant="link">
                      (best way to contact)
                    </h5>
                  )}
                </div>
              )}

              {provider.website && (
                <div className="display-flex">
                  <span className="[ font_icons color-icon ] [ position-icon ]">
                    &#xe0e3;
                  </span>
                  <a
                    //TODO: href="{{ if not (hasPrefix (lower .) `http`) }}//{{ . }}{{ else }}{{ . }}{{ end }}"
                    className="link-pointer handle-long-url"
                    data-variant="invert"
                    target="_blank"
                  >
                    {provider.website}
                  </a>
                  {provider.best_way_to_contact.includes("Website") && (
                    <h5 className="inline-display" data-variant="link">
                      (best way to contact)
                    </h5>
                  )}
                </div>
              )}
              <div className="display-flex flex-wrap-wrap">
                <span className="[ font_icons color-icon ] [ position-icon ]">
                  &#xe0a0;
                </span>
                <span>
                  {provider.facebook && (
                    <span className="[ font_icons color-icon ] [ position-icon ]">
                      <a
                        href={`https://facebook.com/${trimA(
                          provider.facebook
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        &#xe0aa;
                      </a>
                    </span>
                  )}
                  {provider.twitter && (
                    <span className="[ font_icons color-icon ] [ position-icon ]">
                      <a
                        href={`https://twitter.com/${trimA(provider.twitter)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        &#xe0ab;
                      </a>
                    </span>
                  )}
                  {provider.instagram && (
                    <span className="[ font_icons color-icon ] [ position-icon ]">
                      <a
                        href={`https://instagram.com/${trimA(
                          provider.instagram
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        &#xe0b1;
                      </a>
                    </span>
                  )}
                  {provider.linkedin && (
                    <span className="[ font_icons color-icon ] [ position-icon ]">
                      <a
                        href={provider.linkedin.trim()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        &#xe0b4;
                      </a>
                    </span>
                  )}
                  {provider.youtube && (
                    <span className="[ font_icons color-icon ] [ position-icon ]">
                      <a
                        href={provider.youtube.trim()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        &#xe0ba;
                      </a>
                    </span>
                  )}
                  {provider.medium && (
                    <span className="[ color-icon ] [ position-icon ]">
                      <a
                        href={`https://${trimA(provider.medium)}.medium.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="svg-color"
                      >
                        <svg viewBox="0 0 1043.63 592.71" className="bu bk">
                          <g data-name="Layer 2">
                            <g data-name="Layer 1">
                              <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path>
                            </g>
                          </g>
                        </svg>
                      </a>
                    </span>
                  )}
                </span>
              </div>

              {location.hours_of_operation.length > 0 && (
                <div className="display-flex">
                  <span className="[ font_icons color-icon ] [ position-icon ] icon_clock">
                    &#xe06b;
                  </span>
                  <div className="no-bullets">
                    {location.hours_of_operation.map((x) => (
                      <li>{x.day_hours}</li>
                    ))}
                  </div>
                </div>
              )}

              {location.services.length > 0 && (
                <div className="display-flex">
                  <span className="[ font_icons color-icon ] [ position-icon ]">
                    &#x4e;
                  </span>
                  <div>
                    <span className="weight-bold">Clinical services: </span>
                    <span>{location.services.join()}</span>
                  </div>
                </div>
              )}

              {location.non_clinical_services.length > 0 && (
                <div className="display-flex">
                  <span className="[ font_icons color-icon ] [ position-icon ]">
                    &#x4e;
                  </span>
                  <div>
                    <span className="weight-bold">Non-clinical services: </span>
                    <span>{location.non_clinical_services.join()}</span>
                  </div>
                </div>
              )}
              {provider.content && (
                <div className="display-flex">
                  <span className="[ font_icons color-icon ] [ position-icon ]">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  {/* TODO: content is not breaking and characters are not getting escaped */}
                  <div className="provider-bio">{provider.content}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
