import React from 'react';
import Tourletet from '../components/content/tourletet/Tourletet';
import Slideshow_cuon from '../components/content/Tour/Slideshow_cuon';

import { DashboardLayout } from '../components/Layout';
import Tourgiamgia from '../components/content/tourgiamgia/Tourgiamgia';
import Quangcao1 from '../components/content/quangcao/Quangcao1';
import Tourmuine from '../components/content/tourmuine/Tourmuine';
import Listmuine from '../components/content/tourmuine/Listmuine';
import Tourtrongnuoc from '../components/content/tourtrongnuoc/Tourtrongnuoc';
import Listtrongnuoc from '../components/content/tourtrongnuoc/Listtrongnuoc';
import Tournuocngoai from '../components/content/tournuocngoai/Tournuocngoai';
import Listnuocngoai from '../components/content/tournuocngoai/Listnuocngoai';
import Quangcao2 from '../components/content/quangcao/Quangcao2';
import Slideshow_cuon_tintuc from '../components/content/tintuc/Slideshow_cuon_tintuc';
import Tieude_tintuc from '../components/content/tintuc/Tieude_tintuc';
import Hinhanh_home from '../components/content/hinhanh/Hinhanh_home';
import Slideshow_anhhome from '../components/content/hinhanh/Slideshow_anhhome';

const Home = () => {
  return (
    <DashboardLayout>
      <Tourletet />
      <Slideshow_cuon />
      <Tourgiamgia />
      <Slideshow_cuon />
      <Quangcao1 />
      <Tourmuine />
      <Listmuine />
      <Tourtrongnuoc />
      <Listtrongnuoc />
      <Tournuocngoai />
      <Listnuocngoai />
      <Quangcao2 />
      <div className='tieude_tintuc'>
        <Tieude_tintuc />
        <Slideshow_cuon_tintuc />
      </div>
      <Hinhanh_home />
      <Slideshow_anhhome />
    </DashboardLayout>
  )
}

export default Home;