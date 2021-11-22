import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  // selector: '[appSmoove]'
  selector: '[animation], [delay], [duration], [offset], [triggerOnce]'
})
export class SmooveDirective {

  //컴포넌트속성
  @Input('animation') animationClass: string = 'fadeInUp'
  @Input('delay') delay: string = '0'
  @Input('duration') duration!: string

  //waypoint관련설정
  @Input('offset') wayPointOffset: string = '100'
  @Input('triggerOnce') triggerOnce: string = 'false'

  private elObj: any = null
  private windowH!: number //윈도우 높이
  private elOffsetTop!: number //요소의 y좌표
  private check: boolean = false //애니메이션 최초실행 체크
  private oldY: number = 0 //스크롤 방향 감지

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }



  // const scroll = (document.documentElement.scrollTop || document.body.scrollTop);
  // console.log(this.elObj.getBoundingClientRect());

  // console.log('scroll ', scroll);
  // console.log('posicion el ', this.elOffsetTop);
  
  
  // let posElement = (this.elOffsetTop * 0.50) + this.elOffsetTop
  // console.log('pos cal ', posElement);
  
  // if (scroll > posElement) {
  //   this.renderer.addClass(this.elObj, 'animated')
  //   this.renderer.addClass(this.elObj, this.animationClass)
  //   this.check = true
  // }

  // if (scroll < posElement && this.check) {
  //   this.renderer.removeClass(this.elObj, 'animated')
  //   this.renderer.removeClass(this.elObj, this.animationClass)
  //   this.check = false
  // }
  
  @HostListener('window:scroll', ['$event']) onScrollAnimation() {
    this.elOffsetTop = this.elObj.getBoundingClientRect().y

    let wayPoint = this.windowH * Number(this.wayPointOffset) / 100
    if (this.elOffsetTop > -100 && this.elOffsetTop < wayPoint) {
      //화면 안에 들어올 때 애니메이션 실행
      this.renderer.removeClass(this.elObj, 'wait-animation')
      // habilitar el check para que la animacion se repita aun sin recargar la web solo de arriba hacia abajo
      // this.check = true
    } else {
      if (this.check) {
        //한번 애니메이션이 실행된 이후에는 멈춤
        this.renderer.removeClass(this.elObj, 'animated')
        this.renderer.removeClass(this.elObj, this.animationClass)

        //스크롤이 위에서 아래로 내려갈 때만, 한번만 실행이 아닐 때만 애니메이션 반복
        if (this.elOffsetTop < this.oldY && this.triggerOnce == 'false') {
          this.renderer.addClass(this.elObj, 'wait-animation')
          this.renderer.addClass(this.elObj, 'animated')
          this.renderer.addClass(this.elObj, this.animationClass)
          this.check = false
        }
      }
    }
    this.oldY = this.elOffsetTop
  }

  //화면 리사이즈 될 때 wayPoint 비율 체크하기위해 윈도우 높이값 다시 저장
  @HostListener('window:resize', ['$event']) onResizeWindow() {
    this.windowH = window.innerHeight
  }

  ngOnInit() {
    this.elObj = this.el.nativeElement
    this.windowH = window.innerHeight
    this.elOffsetTop = this.elObj.offsetTop

    //애니메이션 지연 시간 설정
    if (Number(this.delay) > 0) {
      this.renderer.setStyle(this.elObj, '-webkit-animation-delay', this.delay + 'ms')
      this.renderer.setStyle(this.elObj, 'animation-delay', this.delay + 'ms')
    }

    //애니메이션 실행 시간 설정
    if (Number(this.duration) > 0) {
      this.renderer.setStyle(this.elObj, '-webkit-animation-duration', this.duration + 'ms')
      this.renderer.setStyle(this.elObj, 'animation-duration', this.duration + 'ms')
    }

    //화면 로드시 애니메이션 최초 세팅
    // if (this.elOffsetTop > this.windowH * Number(this.wayPointOffset) / 100) {
    //   this.renderer.addClass(this.elObj, 'wait-animation')
    // }
    this.renderer.addClass(this.elObj, 'wait-animation')
    this.renderer.addClass(this.elObj, 'animated')
    this.renderer.addClass(this.elObj, this.animationClass)
  }

}
