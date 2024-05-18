export const Footer = () => {
  return (
    <div className="bg-dark gap-top-300 pad-top-500 pad-bottom-500">
      <div className="wrapper footer-tiles">
        <div className="pad-left-300 pad-right-300 pad-top-300 pad-bottom-300">
          <img
            width="1"
            height="1"
            src="/img/logo/AAF-Logo-White.svg"
            className="image gap-left-0 pad-bottom-500"
            alt=""
            loading="lazy"
          />
          <p className="color-slate">
            The Asian American Federation’s mission is to raise the influence
            and well-being of the pan-Asian American community through research,
            policy advocacy, public awareness and organizational development.
          </p>
        </div>
        <div className="pad-left-300 pad-right-300 pad-top-400 pad-bottom-300">
          <p className="color-slate">120 Wall Street, 9th Floor</p>
          <p className="color-slate">New York, NY 10005</p>
        </div>
        <div className="pad-left-300 pad-right-300 pad-top-1000">
          <p className="color-slate">© 2022 Asian American Federation</p>
        </div>
      </div>
    </div>
  );
};
