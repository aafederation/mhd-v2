export const SingleLocationBanner = () => {
  return (
    <div>hello</div>
    // {{ $borough := index .location.boroughs 0 }}
    // {{ $showPlace := true }}
    // {{ $individual := true }}
    // {{ $latLng := "" }}
    // {{ $mappingAddress := "" }}
    // {{ $bestWayToContact := .org.best_way_to_contact }}

    // {{ if ne .location.latLng "" }}
    // 	{{ $latLng = .location.latLng }}
    // 	{{ if or (in (slice "Citywide" "") $borough) (eq $borough nil) }}
    // 		{{ $borough = "New York City" }}
    // 	{{ end }}
    // 	{{ if or (in .org.tags "individual") (in .org.tags "Individual") (in .org.tags "Individual Provider")}}
    // 		{{ $mappingAddress = print .location.address "," $borough "+NY" }}
    // 	{{ else }}
    // 		{{ $mappingAddress = print .org.org "," .location.address "," $borough "+NY" }}
    // 		{{ $individual = false }}
    // 	{{ end }}
    // 	{{ $mappingAddress = replace $mappingAddress "\n" "+" }}
    // 	{{ $mappingAddress = replace $mappingAddress " " "+" }}
    // {{ else }}
    // 	{{ $latLng = site.Params.defaultLatLng }}
    // 	{{ $showPlace = false }}
    // {{ end }}

    // {{ if $individual }}
    // <div class="[ wrapper ] [ bg-individual pad-top-500 color-individual-invert ]">
    // {{ else }}
    // <div class="[ wrapper ] [ bg-organization pad-top-500 color-organization-invert ]">
    // {{ end }}
    // 	<h1>{{ .org.org }}</h1>
    // </div>

    // {{ if $individual }}
    // <div class="[ wrapper ] [ bg-individual pad-top-500 pad-bottom-500 color-individual-invert ]">
    // {{ else }}
    // <div class="[ wrapper ] [ bg-organization pad-top-500 pad-bottom-500 color-organization-invert ]">
    // {{ end }}
    // 	<div class="[ split-pair ] [ text-400 ]">
    // 		<h3>
    // 			<span class="font_icons">&#xe01d;</span>
    // 			<span class="weight-bold">
    // 				{{ .location.address }}
    // 			</span>
    // 		</h3>
    // 		<h3>
    // 			{{ with .location.boroughs }}
    // 				<span class="font_icons">&#xe01f;</span>
    // 				<span class="weight-bold">
    // 					{{ index . 0 }}
    // 				</span>
    // 			{{ end }}
    // 		</h3>
    // 		<h3>
    // 			{{ with .location.phone_number }}
    // 				<span class="font_icons">&#xe090;</span>
    // 				<span class="weight-bold">
    // 					{{ . }}
    // 				</span>
    // 			{{ end }}
    // 		</h3>
    // 	</div>
    // </div>
    // <div class="[ wrapper ] [ bg-light pad-top-500 pad-bottom-500 ]">
    // 	<div class="tiles" data-variant="two-per-row">
    // 		<div class="[ bg-white box-shadow-glow ]">
    // 			{{ if ne .org.image "" }}
    // 				<div class="[ ]">
    // 					<h4
    // 						class="underline pad-left-300 pad-right-300 pad-top-300 pad-bottom-300"
    // 					>
    // 						{{ .org.org }}
    // 					</h4>
    // 					<img src="{{ .org.image }}" class="[ bg-white ]" alt="">
    // 				</div>
    // 			{{ end }}
    // 			<div class="[ ]">
    // 				<h4
    // 					class="underline pad-left-300 pad-right-300 pad-top-300 pad-bottom-300"
    // 				>
    // 					Location
    // 				</h4>
    // 				<iframe
    // 					frameborder="0"
    // 					width="100%"
    // 					height="300px"
    // 					style="border:0"
    // 					{{ if eq $showPlace true }}
    // 						src="https://www.google.com/maps/embed/v1/place?q={{ $mappingAddress }}&center={{ $latLng }}&key=AIzaSyBq3mhYmZFPmQqp0q0koUSMbTtA49zjwQY&zoom=12&"
    // 					{{ else }}
    // 						src="https://www.google.com/maps/embed/v1/view?center={{ $latLng }}&key=AIzaSyBq3mhYmZFPmQqp0q0koUSMbTtA49zjwQY&zoom=11&"
    // 					{{ end }}
    // 					allowfullscreen
    // 				></iframe>
    // 				{{ if eq $showPlace true }}
    // 					<div class="pad-left-300 pad-right-300 pad-top-300 pad-bottom-300">
    // 						<a
    // 							href="https://www.google.com/maps/dir/?api=1&destination={{ $mappingAddress }}"
    // 							target="_blank"
    // 							rel="noopener noreferrer"
    // 							class="link-pointer color-white bg-primary no-decoration"
    // 						>
    // 							<span class="font_icons">&#xe03c;</span>
    // 							<span class="weight-bold">Get directions</span>
    // 						</a>
    // 					</div>
    // 				{{ end }}
    // 			</div>
    // 		</div>
    // 		<div class="[ bg-white box-shadow-glow ]">
    // 			<h4
    // 				class="underline pad-left-300 pad-right-300 pad-top-300 pad-bottom-300"
    // 			>
    // 				Provider Overview
    // 			</h4>
    // 			<div
    // 				class="flow pad-top-300 pad-right-300 pad-bottom-500 pad-left-300"
    // 				style="--flow-space:0.5rem"
    // 			>
    // 				{{ with .location.phone_number }}
    // 					<div class="display-flex">
    // 						<span class="[ font_icons color-icon ] [ position-icon ]"
    // 							>&#xe090;</span
    // 						>
    // 						<span>
    // 							{{ . }}
    // 							{{ if in $bestWayToContact "Phone"}}
    // 								<h5 class="inline-display">(best way to contact)</h5>
    // 							{{ end }}
    // 						</span>
    // 					</div>
    // 				{{ end }}
    // 				{{ with .org.email }}
    // 					<div class="display-flex flex-wrap-wrap">
    // 						<span class="[ font_icons color-icon ] [ position-icon ]"
    // 							>&#xe010;</span
    // 						>
    // 						<a
    // 							href="mailto: {{ . }}"
    // 							class="link-pointer"
    // 							data-variant="invert"
    // 							target="_blank"
    // 						>
    // 							{{ . }}
    // 						</a>
    // 						{{ if in $bestWayToContact "Email"}}
    // 							<h5 class="inline-display" data-variant="link">(best way to contact)</h5>
    // 						{{ end }}
    // 					</div>
    // 				{{ end }}
    // 				{{ with .org.website }}
    // 					<div class="display-flex">
    // 						<span class="[ font_icons color-icon ] [ position-icon ]"
    // 							>&#xe0e3;</span
    // 						>
    // 						<a
    // 							href="{{ if not (hasPrefix (lower .) `http`) }}//{{ . }}{{ else }}{{ . }}{{ end }}"
    // 							class="link-pointer handle-long-url"
    // 							data-variant="invert"
    // 							target="_blank"
    // 							>{{ . }}
    // 						</a>
    // 						{{ if in $bestWayToContact "Website"}}
    // 							<h5 class="inline-display" data-variant="link">(best way to contact)</h5>
    // 						{{ end }}
    // 					</div>
    // 				{{ end }}
    // 				<div class="display-flex flex-wrap-wrap">
    // 					<span class="[ font_icons color-icon ] [ position-icon ]"
    // 						>&#xe0a0;</span
    // 					>
    // 					<span>
    // 						{{ with .org.facebook }}
    // 							{{ $handle := trim . "@" }}
    // 							<span class="[ font_icons color-icon ] [ position-icon ]">
    // 								<a href="https://facebook.com/{{ $handle }}" target="_blank" rel="noopener noreferrer">
    // 									&#xe0aa;
    // 								</a>
    // 							</span>
    // 						{{ end }}
    // 						{{ with .org.twitter }}
    // 							{{ $handle := trim . "@" }}
    // 							<span class="[ font_icons color-icon ] [ position-icon ]">
    // 								<a href="https://twitter.com/{{ $handle }}" target="_blank" rel="noopener noreferrer">
    // 									&#xe0ab;
    // 								</a>
    // 							</span>
    // 						{{ end }}
    // 						{{ with .org.instagram }}
    // 							{{ $handle := trim . "@" }}
    // 							<span class="[ font_icons color-icon ] [ position-icon ]">
    // 								<a href="https://instagram.com/{{ $handle }}" target="_blank" rel="noopener noreferrer">
    // 									&#xe0b1;
    // 								</a>
    // 							</span>
    // 						{{ end }}
    // 						{{ with .org.linkedin }}
    // 							{{ $handle := trim . " " }}
    // 							<span class="[ font_icons color-icon ] [ position-icon ]">
    // 								<a href="{{ $handle }}" target="_blank" rel="noopener noreferrer">
    // 									&#xe0b4;
    // 								</a>
    // 							</span>
    // 						{{ end }}
    // 						{{ with .org.youtube }}
    // 							{{ $handle := trim . " " }}
    // 							<span class="[ font_icons color-icon ] [ position-icon ]">
    // 								<a href="{{ $handle }}" target="_blank" rel="noopener noreferrer">
    // 									&#xe0ba;
    // 								</a>
    // 							</span>
    // 						{{ end }}
    // 						{{ with .org.medium }}
    // 							{{ $handle := trim . "@" }}
    // 							<span class="[ color-icon ] [ position-icon ]">
    // 								<a href="https://{{ $handle }}.medium.com" target="_blank" rel="noopener noreferrer" class="svg-color">
    // 									<svg viewBox="0 0 1043.63 592.71" class="bu bk"><g data-name="Layer 2"><g data-name="Layer 1"><path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path></g></g></svg>
    // 								</a>
    // 							</span>
    // 						{{ end }}
    // 					</span>
    // 				</div>
    // 				{{ with .location.hours_of_operation }}
    // 					<div class="display-flex">
    // 						<span
    // 							class="[ font_icons color-icon ] [ position-icon ] icon_clock"
    // 							>&#xe06b;</span
    // 						>
    // 						<div class="no-bullets">
    // 							{{ range . }}
    // 								{{ range $key, $value := . }}
    // 									<li>{{ $value }}</li>
    // 								{{ end }}
    // 							{{ end }}
    // 						</div>
    // 					</div>
    // 				{{ end }}
    // 				{{ with .location.services }}
    // 					<div class="display-flex">
    // 						<span class="[ font_icons color-icon ] [ position-icon ]"
    // 							>&#x4e;</span
    // 						>
    // 						<div>
    // 							<span class="weight-bold">{{ partial "functions/forestryLabel" "locations.services" }}: </span>
    // 							<span>
    // 								{{ delimit . ", " }}
    // 							</span>
    // 						</div>
    // 					</div>
    // 				{{ end }}
    // 				{{ with .location.non_clinical_services }}
    // 					<div class="display-flex">
    // 						<span class="[ font_icons color-icon ] [ position-icon ]"
    // 							>&#x4e;</span
    // 						>
    // 						<div>
    // 							<span class="weight-bold">{{ partial "functions/forestryLabel" "locations.non_clinical_services" }}: </span>
    // 							<span>
    // 								{{ delimit . ", " }}
    // 							</span>
    // 						</div>
    // 					</div>
    // 				{{ end }}
    // 				{{ with .content }}
    // 					<div class="display-flex">
    // 						<span class="[ font_icons color-icon ] [ position-icon ]"
    // 							>&nbsp;&nbsp;&nbsp;&nbsp;</span
    // 						>
    // 						<div class="provider-bio">
    // 							{{ . }}
    // 						</div>
    // 					</div>
    // 				{{ end }}
    // 			</div>
    // 		</div>
    // 	</div>
    // </div>
  );
};
