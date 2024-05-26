import { FilterData } from "./FilterData";

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
