export const OverlayJoinUs = () => {
  return (
    <div className="modal">
      <div className="modal-background"></div>
      <div className="modalContainer bg-secondary">
        <span className="font_icons x-modal-close">&#x4d;</span>
        <div className="modal-content">
          <h1>Are You a Mental Health Provider?</h1>
          <h1 className="gap-top-300">Join Us Today!</h1>
          <div className="gap-top-600">
            <button
              aria-label="Click to join directory"
              className="button bg-white button-join-us"
            >
              <a
                href="https://forms.gle/BKeJSPd3vBY37GCr8"
                target="_blank"
                rel="noopener noreferrer"
              >
                CLICK HERE TO JOIN THE DIRECTORY
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
