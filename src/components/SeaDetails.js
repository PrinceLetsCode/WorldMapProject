import React from 'react';

const SeaDetails = ({ data }) => {
	if (!data) {
		return null; // If data is undefined, render nothing
	}

	const { formatted, annotations } = data;

	return (
		<div className='sea-content'>
			<h1>Sea Details</h1>

			{/* displaying Sea Name */}
			{formatted && <p><b>Name</b> : {formatted}</p>}

			{/* displaying latitude*/}
			{annotations && annotations.DMS && annotations.DMS.lat && (
				<p><b>Latitude </b>: {annotations.DMS.lat}</p>
			)}


			{/* displaying longitude */}
			{annotations && annotations.DMS && annotations.DMS.lng && (
				<p><b>Longitude </b>: {annotations.DMS.lng}</p>
			)}

			{/* displaying timezone */}
			{annotations && annotations.timezone && annotations.timezone.name && (
				<p><b>Timezone </b>: {annotations.timezone.name}, {annotations.timezone.short_name}, GMT {annotations.timezone.offset_string}</p>
			)}
		</div>
	);
};

export default SeaDetails;
