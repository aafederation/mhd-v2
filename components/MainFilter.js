import { FilterData } from "./FilterData";
// import { getAllDataParameters } from "../lib/getData";

// export async function getStaticProps() {
//   const allDataParameters = getAllDataParameters("data");

//   return {
//     props: {
//       allDataParameters,
//     },
//   };
// }

export const MainFilter = () => {
  return (
    <>
      <h2 className="[ display-none sm:display-block gap-bottom-300 ]">
        Filters
      </h2>
      <FilterData title="clinical service" />
      {/* 
        {{ partial "filter-data.html" (dict "title" "clinical service" "filter" "service" "allContent" $clinical_services ) }}
        {{ partial "filter-data.html" (dict "title" "psychotherapy specialty" "filter" "specialty" "allContent" $psychotherapy_specialties ) }}
        {{ partial "filter-data.html" (dict "title" "psychotherapy type"  "filter" "type" "allContent" $psychotherapy_types ) }}
        {{ partial "filter-data.html" (dict "title" "non-clinical service" "filter" "nonClinicalService" "allContent" $non_clinical_services ) }}
        {{ partial "filter-taxonomy.html" (dict "filter" "tag" "noCount" ($.Scratch.Get "untagged") "allContent" $tags "titles" $tagTitles ) }}
        {{ partial "filter-data.html" (dict "title" "location" "filter" "borough" "allContent" $locations ) }}
        {{ partial "filter-data.html" (dict "title" "language" "filter" "language" "allContent" $languages ) }}
        {{ partial "filter-taxonomy.html" (dict "filter" "payment" "noCount" ($.Scratch.Get "noPayments") "allContent" $payments "titles" $paymentTitles ) }}
        {{ partial "filter-data.html" (dict "title" "client age" "filter" "ageGroup" "allContent" $client_age ) }}
        {{ partial "filter-data.html" (dict "title" "provider gender" "filter" "staffGender" "allContent" $staff_gender ) }} 
        */}
    </>
  );
};

// {{ $pages := .Site.RegularPages }}
// {{ $paymentTitles := slice }}
// {{ $tagTitles := slice }}
// <!--DATA SOURCES-->
// {{ $locations := $.Site.Data.Boroughs }}
// {{ $clinical_services := sort (index $.Site.Data "Mental health services").Items }}
// {{ $non_clinical_services := sort (index $.Site.Data "Non clinical services").Items }}
// {{ $staff_gender := sort (index $.Site.Data "Staff gender").Items }}
// {{ $client_age := sort (index $.Site.Data "Age groups").Items }}
// {{ $psychotherapy_specialties := sort (index $.Site.Data "Psychotherapy specialties").Items }}
// {{ $psychotherapy_types := sort (index $.Site.Data "Psychotherapy types").Items }}
// {{ $languages := sort $.Site.Data.Languages.Items }}
// <!--TAXONOMY COUNTS-->
// {{ $tags := $.Site.Taxonomies.tags.Alphabetical }}
// {{ range sort .Site.Taxonomies.tags ".Page.Params.title" "asc" }}
//   {{ $tagTitles = append .Page.Params.title $tagTitles }}
// {{ end }}
// {{ $payments := $.Site.Taxonomies.payment_types.Alphabetical }}
// {{ range sort .Site.Taxonomies.payment_types ".Page.Params.title" "asc" }}
//   {{ $paymentTitles = append .Page.Params.title $paymentTitles }}
// {{ end }}
// <!--TAXONOMY NO COUNT VAR-->
// {{ $.Scratch.Set "untagged" 0 }}
// {{ $.Scratch.Set "noPayments" 0 }}

// <!--TAXONOMY NO COUNT COUNTING-->
// {{ range $pages }}
// 	{{ with .Params.tags }}{{ else }}{{ $.Scratch.Add "untagged" 1 }}{{ end }}
// 	{{ with .Params.payment_types }}
// 		{{ else }}{{ $.Scratch.Add "noPayments" 1 }}{{ end }}

// {{ end }}
