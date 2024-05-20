export const SingleProviderLocation = ({ provider, location }) => {
  return (
    <h4>{location.address}</h4>
    // <div className="box-shadow-glow wrapper" data-variant="no-padding">
    // 	{{ partial "single-location-banner" (dict "org" $org "location" $location "content" $content) }}
    // 	<div className="[ wrapper ] [ bg-white pad-top-500 ]">
    // 		<h2 className="gap-bottom-500">Location Details</h2>
    // 		<div className="columns-2">
    // 				{{ with $location.credentials }}
    // 					{{ partial "single-service-list" (dict "title" (partial "functions/forestryLabel" "locations.credentials") "items" .) }}
    // 				{{ end }}
    // 				{{ with $location.trainings }}
    // 					{{ partial "single-service-list" (dict "title" (partial "functions/forestryLabel" "locations.trainings") "items" .) }}
    // 				{{ end }}
    // 				{{ with $location.services }}
    // 					{{ partial "single-service-list" (dict "title" (partial "functions/forestryLabel" "locations.services") "items" .) }}
    // 				{{ end }}
    // 				{{ with $location.psychotherapy }}
    // 					{{ partial "single-service-list" (dict "title" (partial "functions/forestryLabel" "locations.psychotherapy_specialties") "items" $location.psychotherapy_specialties) }}
    // 					{{ partial "single-service-list" (dict "title" (partial "functions/forestryLabel" "locations.psychotherapy_types") "items" $location.psychotherapy_types) }}
    // 				{{ end }}
    // 				{{ with $org.payment_types }}
    // 					{{ partial "single-service-list" (dict "title" (partial "functions/forestryLabel" "payment_types") "items" .) }}
    // 				{{ end }}
    // 				{{ with $org.payment_info_clinical }}
    // 					{{ partial "single-service-list" (dict "title" (partial "functions/forestryLabel" "payment_info_clinical") "items" .) }}
    // 				{{ end }}
    // 				{{ with $org.sliding_scale_clinical }}
    // 					{{ partial "single-service-list" (dict "title" (partial "functions/forestryLabel" "sliding_scale_clinical") "items" .) }}
    // 				{{ end }}
    // 				{{ with $location.non_clinical_services }}
    // 					{{ partial "single-service-list" (dict "title" (partial "functions/forestryLabel" "locations.non_clinical_services") "items" .) }}
    // 				{{ end }}
    // 				{{ with $org.payment_types_non_clinical }}
    // 					{{ partial "single-service-list" (dict "title" (partial "functions/forestryLabel" "payment_types_non_clinical") "items" .) }}
    // 				{{ end }}
    // 				{{ with $org.payment_info_non_clinical }}
    // 					{{ partial "single-service-list" (dict "title" (partial "functions/forestryLabel" "payment_info_non_clinical") "items" .) }}
    // 				{{ end }}
    // 				{{ with $org.sliding_scale_non_clinical }}
    // 					{{ partial "single-service-list" (dict "title" (partial "functions/forestryLabel" "sliding_scale_non_clinical") "items" .) }}
    // 				{{ end }}
    // 				{{ with $org.telehealth }}
    // 					{{ partial "single-service-list" (dict "title" (partial "functions/forestryLabel" "telehealth") "items" .) }}
    // 				{{ end }}
    // 				{{ with $org.age_groups }}
    // 					{{ partial "single-service-list" (dict "title" (partial "functions/forestryLabel" "age_groups") "items" .) }}
    // 				{{ end }}
    // 				{{ with $location.new_clients }}
    // 					{{ partial "single-service-list" (dict "title" (partial "functions/forestryLabel" "locations.new_clients") "items" .) }}
    // 				{{ end }}
    // 				{{ with $location.new_clients_detail }}
    // 					{{ partial "single-service-list" (dict "title" (partial "functions/forestryLabel" "locations.new_clients_detail") "items" .) }}
    // 				{{ end }}
    // 				{{ with $org.client_requirements }}
    // 					{{ partial "single-service-list" (dict "title" (partial "functions/forestryLabel" "client_requirements") "items" .) }}
    // 				{{ end }}
    // 				{{ with $location.hours_of_operation }}
    // 					{{ partial "single-service-list" (dict "title" (partial "functions/forestryLabel" "locations.hours_of_operation") "items" .) }}
    // 				{{ end }}
    // 				{{ with $location.languages }}
    // 					{{ partial "single-service-list" (dict "title" (partial "functions/forestryLabel" "locations.languages") "items" .) }}
    // 				{{ end }}
    // 				{{ with $location.staff_gender }}
    // 					{{ partial "single-service-list" (dict "title" (partial "functions/forestryLabel" "locations.staff_gender") "items" .) }}
    // 				{{ end }}
    // 				{{ with $location.public_transportation }}
    // 					{{ partial "single-service-list" (dict "title" (partial "functions/forestryLabel" "locations.public_transportation") "items" .) }}
    // 				{{ end }}
    // 				{{ with $org.ada_compliant }}
    // 					{{ partial "single-service-list" (dict "title" (partial "functions/forestryLabel" "ada_compliant") "items" .) }}
    // 				{{ end }}
    // 				{{ with $location.parking }}
    // 					{{ partial "single-service-list" (dict "title" (partial "functions/forestryLabel" "locations.parking") "items" .) }}
    // 				{{ end }}
    // 		</div>
    // 	</div>
    // </div>
  );
};
