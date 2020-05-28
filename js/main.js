window.addEventListener('scroll', function() {
    var docHeight = window.pageYOffset;
    var showScroll = document.getElementById("myNavbar");
    if (docHeight > 200){
        myNavbar.style.backgroundColor = "white";
        myNavbar.style.boxShadow = '0 10px 3px -6px rgba(119, 119, 119, 0.103)';
    }else{
        myNavbar.style.backgroundColor = "transparent";
        myNavbar.style.boxShadow = '0 0 0 0  #99b99800';
    }
  }); 
  
//  Typing effect
var typed = new Typed('.element', {
    strings: [
      'IT Solutions Specialist.',
      'Web Designers.',
      'Office Assistants.',
      'Graphic Designers.'
    ],
    stringsElement: null,
    // typing speed
    typeSpeed: 100,
    // time before typing starts
    startDelay: 800,
    // backspacing speed
    backSpeed: 70,
    // time before backspacing
    backDelay: 700,
    // loop
    loop: true,
    // false = infinite
    loopCount: 10,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
    // call when done callback function
    callback: function() {},
    // starting callback function before each string
    preStringTyped: function() {},
    //callback for every typed string
    onStringTyped: function() {},
    // callback for reset
    resetCallback: function() {}
  });