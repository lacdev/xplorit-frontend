import DashboardCard from 'components/DashboardComponents/DashboardCard';
import DashboardLikeCard from 'components/DashboardComponents/DashboardLikeCard';
import React from 'react';

export default function Dashboard() {
  return <div>
    <DashboardLikeCard/>
    <DashboardCard/>
  </div>;
}
