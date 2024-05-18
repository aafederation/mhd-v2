export const TopBar = () => {
  return (
    <div className="bg-primary pad-top-300 pad-bottom-300">
      <div className="wrapper split-pair text-500 weight-light">
        <div>
          <p className="color-white">
            Empowering New York’s Asian American Community Since 1989
          </p>
        </div>
        <nav aria-label="social" className="split-pair nav right-align">
          <div className="font_icons social_icons">
            <a
              href="https://www.facebook.com/AsianAmericanFederation"
              target="_blank"
            >
              <span className="social_facebook"></span>
            </a>
            <a href="https://twitter.com/AAFederation" target="_blank">
              <span className="social_twitter"></span>
            </a>
            <a href="https://www.instagram.com/aafederation/" target="_blank">
              <span className="social_instagram"></span>
            </a>
            <a href="https://www.youtube.com/user/aafederation" target="_blank">
              <span className="social_youtube"></span>
            </a>
            <a
              href="https://www.linkedin.com/company/asian-american-federation/"
              target="_blank"
            >
              <span className="social_linkedin"></span>
            </a>
          </div>
          <div>
            <a
              href="https://www.classy.org/give/253719/#!/donation/checkout"
              target="_blank"
              className="mhd-button-widget bg-white font-serif link-pointer"
              data-variant="invert"
            >
              DONATE
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};
