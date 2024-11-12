'use client';
import PageHeader from '../components/page-header/page-header.component';
import LineupList from '../views/vehicle-lineup/lineup-list/lineup-list.view';
import vehicleLineupData from '../data/vehicle-lineup-data.json';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import Button from '../components/button/button.component';
// import { useRouter } from 'next/router';

export default function VehicleLineup() {
  const searchParams = useSearchParams();
  const [vehicleData, setVehicleData]: any = useState(
    Object.values(vehicleLineupData)[0]
  );

  useEffect(() => {
    const id = searchParams.get('id');
    const vehicleData =
      Object.values(vehicleLineupData).find((i) => i.id === id) ||
      Object.values(vehicleLineupData)[0];
    console.log(id);

    setVehicleData(vehicleData);
  }, [searchParams]);

  return (
    <div>
      <PageHeader
        backgroundImage="/lineupHeaderImg.svg"
        title={vehicleData.title}
        subTitle="Adjust the size of your fleet to meet the demands of your business."
      />

      <LineupList vehicleList={vehicleData.list} />
    </div>
  );
}
