import {Component, OnInit, ViewChild} from '@angular/core';
import {HomeService} from '../../services/home.service';
import {Banner} from '../../services/data-type/common.types';
import {NzCarouselComponent} from 'ng-zorro-antd';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  banners: Banner[];
  carouselActiveIndex = 0;
  // 拿到轮播组件的实例
  @ViewChild(NzCarouselComponent,  { static : true}) private nzCarousel: NzCarouselComponent;
  constructor(private homeServe: HomeService) {
    this.homeServe.getBanners().subscribe(banners => {
      this.banners = banners;
    });
  }

  ngOnInit(): void {
  }
  onBeforeChange({to}){
    this.carouselActiveIndex = to;

  }
  onChangeSlide(type: 'pre' | 'next'){
    this.nzCarousel[type]();

  }

}
