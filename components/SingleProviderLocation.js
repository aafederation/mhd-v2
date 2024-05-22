import { SingleLocationBanner } from "./SingleLocationBanner";
import { SingleServiceList } from "./SingleServiceList";

export const SingleProviderLocation = ({ provider, location }) => {
  return (
    <div className="box-shadow-glow wrapper" data-variant="no-padding">
      <SingleLocationBanner provider={provider} location={location} />
      <div className="[ wrapper ] [ bg-white pad-top-500 ]">
        <h2 className="gap-bottom-500">Location Details</h2>
        <div className="columns-2">
          {location.credentials.length > 0 && (
            <SingleServiceList
              title="Credentials"
              items={location.credentials}
            />
          )}
          {location.trainings && (
            <SingleServiceList title="Trainings" items={location.trainings} />
          )}
          {location.services.length > 0 && (
            <SingleServiceList
              title="Clinical Services"
              items={location.services}
            />
          )}
          {location.psychotherapy > 0 && (
            <>
              <SingleServiceList
                title="PSYCHOTHERAPY SPECIALTIES"
                items={location.psychotherapy_specialties}
              />
              <SingleServiceList
                title="PSYCHOTHERAPY TYPES"
                items={location.psychotherapy_types}
              />
            </>
          )}
          {provider.payment_types.length > 0 && (
            <SingleServiceList
              title="PAYMENT TYPES (CLINICAL)"
              items={provider.payment_types}
            />
          )}
          {provider.payment_info_clinical && (
            <SingleServiceList
              title="PAYMENT INFO (CLINICAL)"
              items={provider.payment_info_clinical}
            />
          )}
          {provider.sliding_scale_clinical && (
            <SingleServiceList
              title="SLIDING SCALE (CLINICAL)"
              items={provider.sliding_scale_clinical}
            />
          )}
          {location.non_clinical_services.length > 0 && (
            <SingleServiceList
              title="NON-CLINICAL SERVICES"
              items={location.non_clinical_services}
            />
          )}
          {provider.payment_types_non_clinical.length > 0 && (
            <SingleServiceList
              title="PAYMENT TYPES (NON-CLINICAL)"
              items={provider.payment_types_non_clinical}
            />
          )}
          {provider.payment_info_non_clinical && (
            <SingleServiceList
              title="PAYMENT INFO (NON-CLINICAL)"
              items={provider.payment_info_non_clinical}
            />
          )}
          {provider.sliding_scale_non_clinical && (
            <SingleServiceList
              title="SLIDING SCALE (NON-CLINICAL)"
              items={provider.sliding_scale_non_clinical}
            />
          )}
          {provider.telehealth && (
            <SingleServiceList
              title="TELEHEALTH SERVICE"
              items={provider.telehealth}
            />
          )}

          {provider.age_groups.length > 0 && (
            <SingleServiceList title="AGE GROUPS" items={provider.age_groups} />
          )}

          {location.new_clients && (
            <SingleServiceList
              title="NEW CLIENTS"
              items={location.new_clients}
            />
          )}
          {location.new_clients_detail && (
            <SingleServiceList
              title="NEW CLIENTS DETAIL"
              items={location.new_clients_detail}
            />
          )}
          {provider.client_requirements && (
            <SingleServiceList
              title="CLIENT REQUIREMENTS"
              items={provider.client_requirements}
            />
          )}
          {location.hours_of_operation.length > 0 && (
            <SingleServiceList
              title="HOURS OF OPERATION"
              items={location.hours_of_operation.map((x) => x.day_hours)}
            />
          )}
          {location.languages.length > 0 && (
            <SingleServiceList title="LANGUAGES" items={location.languages} />
          )}
          {location.staff_gender.length > 0 && (
            <SingleServiceList
              title="GENDER IDENTIFICATION OF PROVIDER(S)"
              items={location.staff_gender}
            />
          )}
          {location.public_transportation.length > 0 && (
            <SingleServiceList
              title="PUBLIC TRANSPORTATION OPTIONS"
              items={location.public_transportation.map(
                (x) => x.transport_option
              )}
            />
          )}
          {provider.ada_compliant && (
            <SingleServiceList
              title="ADA COMPLIANT"
              items={provider.ada_compliant}
            />
          )}
          {location.parking && (
            <SingleServiceList title="PARKING" items={location.parking} />
          )}
        </div>
      </div>
    </div>
  );
};
