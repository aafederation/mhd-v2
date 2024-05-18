export const OverlayJoinUs = () => {
  return (
    <div class="modal">
      <div class="modal-background"></div>
      <div class="modalContainer bg-secondary">
        <span class="font_icons x-modal-close">&#x4d;</span>
        <div class="modal-content">
          <h1>Are You a Mental Health Provider?</h1>
          <h1 class="gap-top-300">Join Us Today!</h1>
          <div class="gap-top-600">
            <button
              aria-label="Click to join directory"
              class="button bg-white button-join-us"
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
