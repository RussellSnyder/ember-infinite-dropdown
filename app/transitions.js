export default function(){
  this.transition(
    this.hasClass('fading-menu'),
    this.use('crossFade', { duration: 100 })
  )
  // Add your transitions here, like:
  //   this.transition(
  //     this.fromRoute('people.index'),
  //     this.toRoute('people.detail'),
  //     this.use('toLeft'),
  //     this.reverse('toRight')
  //   );
}
