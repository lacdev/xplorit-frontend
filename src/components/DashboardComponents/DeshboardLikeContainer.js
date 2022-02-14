import React from 'react';
import DashboardLikeCard from './DashboardLikeCard'
import BigTitle from 'components/Common/BigTitle';

export default function DashboardLikeContainer() {
  return <div>
    <BigTitle bigTitleText='Likes'/>
    <div>
      <DashboardLikeCard/>
  </div>
  </div>;
}
