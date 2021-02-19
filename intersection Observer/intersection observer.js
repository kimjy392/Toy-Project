// Intersection Observer 사용 방법

// 관찰할 대상을 가져오기
const boxes = document.querySelectorAll('.box')

const option = {
  // root : null => default : null, 이 될 경우 브라우저의 viewport, root을 지정할 경우 지정된 대상이 viewport가 된다.
  // rootMargin : '1px 1px 1px 1px' => default : 0, %, px으로도 표기 가능, -도 가능, -으로 줄 경우 교차영역 늘어나게 된다.
  // threshold : 0 => default : 0 => 0.0 ~ 1.0 사이의 숫자 혹은 이 숫자들로 이루어진 배열, 타겟에 대한 교차 영역 비율, 
  // 0.0 이면 교차영역에 진입하게 될때, 1.0 이면 타겟 전체가 교차영역에 들어왔을때
}

const io = new IntersectionObserver(callback, option)

const callback = (entries, observer) => {
  // entries
  // IntersectionObserverEntry 객체 리스트
  // 배열로 반환하기 때문에 forEach를 사용해서 처리한다!
  // 관찰하는 대상이 추가 될때마다 IntersectionObserverEntry가 하나씩 추가된다.
  
  // observer
  // InterSectionObserver에 의해 생성되어진 인스턴스
  // 위의 option과 같은 속성들을 가지고 있다.

  entries.foreach((entry) => {
    // entry.boundingClientRect : 타겟 엘리먼트의 정보
    // entry.intersectionRatio : 교차영역에 타겟 엘리먼트가 얼마나 교차되어있는지에 대한 비율을 반환
    // entry.intersectionRect : 교차영역에 대한 정보
    // entry.isIntersecting : 교차 되었는지 확인 => boolean
    // entry.rootBounds : root 엘리먼트에 대한 정보
    // entry.target : 타겟 엘리먼트에 대한 정보
    // entry.time : 교차된 시간을 반환
  })
}

boxes.forEach((box) => {
  // box 엘리먼트들을 관찰 대상으로 지정
  io.observe(box)
})