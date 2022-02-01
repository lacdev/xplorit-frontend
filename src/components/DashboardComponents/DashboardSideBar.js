import React from 'react';
import DashboardAvatar from './DashboardAvatar';
import DashboardSideButton from './DashboardSideButton';
import ProfileUsername from './ProfileUsername';

import Comments from 'assets/icons/Comments';
import Heart from 'assets/icons/Heart';
import LogOut from 'assets/icons/LogOut';
import Lugares from 'assets/icons/Lugares';
import Rutas from 'assets/icons/Rutas';
import Settings from 'assets/icons/Settings';

export default function DashboardSideBar() {
  return <div className='w-full bg-secondary'>
    <div className='w-full'>
      <DashboardAvatar class/>
      <ProfileUsername username="Jessica Johnson"/>
    </div>
    <div>
      <DashboardSideButton  SvgIcon={Rutas} DashboardButtonText="Rutas creadas"/>
      <DashboardSideButton  SvgIcon={Lugares} DashboardButtonText="Lugares agregados"/>
      <DashboardSideButton  SvgIcon={Comments} DashboardButtonText="Comentarios"/>
      <DashboardSideButton  SvgIcon={Heart} DashboardButtonText="Likes"/>
      <DashboardSideButton  SvgIcon={Settings} DashboardButtonText="Editar perfil"/>
      <DashboardSideButton  SvgIcon={LogOut} DashboardButtonText="Cerrar sesión"/>
    </div>

    
  </div>;
}
