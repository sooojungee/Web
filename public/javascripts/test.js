console.log('hello');
//system.out.printlnㅇㅣ다.

console.warn('warn!!');
console.error('error!!');

//브라우저에서 제공하는 소스라서
//런타임 랭귀지야 읽으면서 동시에 실행한다. 엄청 유연하지만 느리다.
//읽는 동시에 실행한다.
//브라우저가 아는 건 단 세개


var a = 10;
var b = 'a';
var c = null;
var d = undefined;
var e = [1, 2, 3];
var f = {a: 10};
var g = [1, 2, 'a', {a: [2, 3, 4]}];


//이건 선언
var h = function () {
    console.log('나는 함순데');
};


//이건 호출
h();


// $ 제이커리 함수 호출하는거

console.log($)

// $, vanila, js의 근본적인 목적은 dom을 제어한다.

// html은 사람마다 다른 정보를 반영할 수가 없다.
// 어떠한 데이터를 외부에서 받아와서 그 데이터로 뷰를 재구성해야한다.
// dom의 정보를 다 바꾸는거임~


////

//tag, class, attribute, id
console.log($('a.login'));

//id
console.log($('#loginText'));
//id 쓰는 이유
//자바스크립트 쓰면 클래스는 똑같은게 여러개니까 아이디로 구분한다.
//자바스크립트 안쓸 때는 겹칠일 거의 없으니까 안쓰는게 좋음

//selector은 $({option})

$('#loginText').text('로그인gg');

var $input = $('#messageInput');
var $sender = $('#sender');

//익명함수라서 한번밖에 못씀
$sender.on('click', function () {
    // console.log('1');
    // alert($input.val());

    var message = $input.val();


    //$input.val(); -> getter
    //$input.val(''); -> setter
    //값을 안주면 getter
    //값을 주면 setter


    //append안에는 html만 먹는다.
    // $('.chatting').append('<h1>' + message + '</h1>')


    // template string: ``
    // variable: 'string${VALUE}'

    var template = `<div class="chat">
    <div class="flex"></div>
    <div class="me">${message}</div>
    </div>
    </div>
`
//     $('.chatting').append(`<div class="chatting">
//     <div class="chat">
//     <div class="me"></div>
//     </div>
//     </div>
// `)

    $('.chatting').append(template)

    //글자를 지워준다.
    $input.val('');

    //센더 위에 다하고 클릭하면 네이버로 간다.
    window.location = 'http://naver.com';
});


// //그래서 메소드로 빼서 사용해줘야함
// var sendMessage = function(){
//
// };
//
//
// $sender.on('click', sendMessage);
// //sendMessage는 등록
// //sendMessage() 는 선언!!


$('.test1').on('click', function(){
    // console.log($('.test2').text());
    console.log($('.test1').not($('.test1 .test2')).text());
    console.log($('.test1').not(this).text());
    // console.log(($('.test1').content).text());
    console.log($('.test1').children('.test2').text());
    // console.log($('.test1').not($(this).children).text());
});



