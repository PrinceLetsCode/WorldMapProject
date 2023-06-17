import React from 'react';

const CountryDetail = ({ data }) => {
  if (!data) {
    return null; // If data is undefined, render nothing
  }

  const { annotations, components, formatted } = data;

  return (
    <div className='detail'>
      <h1><b>Details</b></h1>


      {/* displaying flag of the country */}
      {annotations && annotations.flag && (
        <p><span className='flag'>{annotations.flag}</span></p>
      )}

      {/* displaying country name */}
      {components && components.country && (
        <p><b>Country Name </b>: {components.country}</p>
      )}

      {/* displaying country code */}
      {components && components.country_code && (
        <p><b>Country Code </b>: {components.country_code}</p>
      )}

      {/* displaying continent */}
      {components && components.continent && (
        <p><b>Continent </b>: {components.continent}</p>
      )}

      {/* displaying continent code */}
      {annotations && annotations.DMS && annotations.DMS.lat && (
        <p><b>Latitude </b>: {annotations.DMS.lat}</p>
      )}

      {/* displaying latitude */}
      {annotations && annotations.DMS && annotations.DMS.lng && (
        <p><b>Longitude </b>: {annotations.DMS.lng}</p>
      )}

      {/* displaying currency */}
      {annotations && annotations.currency && annotations.currency.name && (
        <p><b>Currency </b>: {annotations.currency.name}</p>
      )}

      {/* displaying currency code */}
      {annotations && annotations.currency && annotations.currency.iso_code && (
        <p><b>Currency ISO Code </b>: {annotations.currency.iso_code}</p>
      )}

      {/* displaying currency symbol */}
      {annotations && annotations.currency && annotations.currency.symbol && (
        <p><b>Currency Symbol </b>: {annotations.currency.symbol}</p>
      )}

      {/* displaying currency subunit */}
      {annotations && annotations.currency && annotations.currency.subunit && (
        <p><b>Currency Subunit </b>: {annotations.currency.subunit}</p>
      )}

      <br />

      {/* displaying timezone*/}
      {annotations && annotations.timezone && annotations.timezone.name && (
        <p><b>Timezone </b>: {annotations.timezone.name}, {annotations.timezone.short_name}, GMT {annotations.timezone.offset_string}</p>
      )}

      {/* displaying driving lane */}
      {annotations && annotations.roadinfo && annotations.roadinfo.drive_on && (
        <p><b>Drive On </b>: {annotations.roadinfo.drive_on} lane</p>
      )}
      <br />

      {/* displaying marked state */}
      {components && components.state && (
        <p><b>State </b>: {components.state}</p>
      )}

      {/* displaying state code */}
      {components && components.state_code && (
        <p><b>State Code </b>: {components.state_code}</p>
      )}

      {/* displaying postcode  */}
      {components && components.postcode && (
        <p><b>Postcode </b>: {components.postcode}</p>
      )}
      <br />

      {/* displaying address */}
      {formatted && <p><b>Address </b>: {formatted}</p>}
    </div>
  );
};

export default CountryDetail;
