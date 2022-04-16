import { Component } from '@angular/core';
import jumpBackIn from '../../assets/mockdata/jumpBackIn.json'
import recentlyPlayed from '../../assets/mockdata/recentlyPlayed.json';
import heavyRotation from '../../assets/mockdata/heavyRotation.json'
import SwiperCore from 'swiper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data = [
    {
      title: 'Recently Played',
      albums : recentlyPlayed
    },
    {
      title : 'Heavy Rotation',
      albums: heavyRotation
    },
    {
      title: 'Jump back in',
      albums: jumpBackIn
    }
  ];

  opts = {
    slidesPreView: 2.4
  }

  constructor(private router:Router) {}

  dasherize(str) {
    return str.replace(/[A-Z]/g,function (char, index){
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  }

  openAlbum(album) {
    const titleEscaped = encodeURIComponent(album.title);
    console.log('te',titleEscaped);
    this.router.navigateByUrl(`/tabs/tab1/${titleEscaped}`)
  }

}
