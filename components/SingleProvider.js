import { SingleProviderLocation } from "./SingleProviderLocation";

export const SingleProvider = ({ provider }) => {
  return (
    <div
      className="[ flow ] [ bg-light pad-top-500 pad-bottom-500 ]"
      style={{ "--flow-space": "4rem" }}
    >
      {/* {{ $org := .Params }}
		{{ $content := .Content }} */}
      <h4>{provider.org}</h4>
      {provider.locations.map((location) => (
        <SingleProviderLocation
          provider={provider}
          location={location}
          key={location.address}
        />
      ))}
    </div>
    // <script>
    // 	(function () {
    // 		if (window.opener) {
    // 			let goBack = document.getElementById("go-back");
    // 			let goBackHamburger = document.getElementById("go-back-hamburger");
    // 			let goHome = document.getElementById("go-home");
    // 			let goHomeHamburger = document.getElementById("go-home-hamburger");
    // 			const homeWindow = window.open("", "parent");
    // 			goBack.classList.remove("display-none-important");
    // 			goBackHamburger.classList.remove("display-none-important");
    // 			goHome.classList.add("display-none-important");
    // 			goHomeHamburger.classList.add("display-none-important");
    // 			goBack.addEventListener("click", function () {
    // 				homeWindow.focus();
    // 				close();
    // 			});
    // 			goBackHamburger.addEventListener("click", function () {
    // 				homeWindow.focus();
    // 				close();
    // 			});
    // 		}
    // 	})();
    // </script>
    // <script defer src="{{ "js/navDropdown.js" | relURL }}"></script>
    // <script defer src="{{ "js/modalSignup.js" | relURL }}"></script>
  );
};
