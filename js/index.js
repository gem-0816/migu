//轮播图区域
(function () {
    var $lis = $('.carousel .list li');
    var $banners = $('.banner1 li');
    var $list = $('.carousel .list');
    var $ipts = $('.carousel .nav .search input');
    var count = 0;
    var fn = function () {
        count = ++count % $banners.length;
        $lis.eq(count).triggerHandler('mouseenter');
    }
    //获得焦点 打开热词功能
    $ipts.on('focus', function () {
        $(this).next().css('display', 'block')
    })
    //失去焦点 关闭热词功能
    $ipts.on('blur', function () {
        $(this).next().css('display', 'none')
    })
    //监测当前页面是否为可视 如果是 则开启定时器 如果不是 则关闭
    document.onvisibilitychange = function () {

        // document.hidden  是否隐藏
        if (document.hidden === true) { // 离开
            clearInterval(timerId)
        } else { // 显示
            timerId = setInterval(fn, 2500);
        }
    };
    //给 lis注册事件
    $lis.on('mouseenter', function () {
        $(this).siblings().css({
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            height: '50px'
        })
        $(this).siblings().children('span').css({
            position: 'static',
            fontWeight: 400,
            fontSize: '12px',
            color: 'hsla(0, 0%, 100%, .6)'
        });
        $(this).siblings().children('i').css({
            position: 'static',
            display: 'inline'
        });

        $(this).css({
            height: '65px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        })
        $(this).children('span').css({
            position: 'absolute',
            top: '-8px',
            left: '25px',
            fontWeight: 700,
            fontSize: '18px',
            color: '#bf2f56'
        })
        $(this).children('i').css({
            position: 'absolute',
            left: '25px',
            bottom: '-14px',
            display: 'block'
        })
        var idx = $(this).index();
        $banners.eq(idx).stop().fadeIn().siblings().stop().fadeOut();
        count = $(this).index();

        // return false;
    });

    //页面一打开 让第一个显示
    $lis.eq(0).triggerHandler('mouseenter');

    var timerId = setInterval(fn, 2500);
    $list.on('mouseenter', function () {
        clearInterval(timerId);
    })
    $list.on('mouseleave', function () {
        timerId = setInterval(fn, 2500)
    });
    var $reg = $('#reg');
    $reg.on('click', function () {
        var w = $(window).width();
        var h = $(document).height();
        $('.mig-login').show();
        $('.mask').css({
            width: w,
            height: h,
        });
        $('.mask').show();
    })
})();

//侧边栏
(function () {
    var $img = $('.sidebar .img img');
    var $search = $('.sidebar .search');
    var $top = $('.sidebar .top');
    var mark = true;
    var fn = function () {
        if (mark) {
            $img.eq(0).fadeIn(1000).siblings().fadeOut(1000);
            mark = false;
        } else {
            $img.eq(1).fadeIn(1000).siblings().fadeOut(1000);
            mark = true;
        }
    }
    var timerId = setInterval(fn, 4000);
    $(document).on('scroll', function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= 500) {
            $top.fadeIn(500);
        } else {
            $top.fadeOut(500);
        }
    })

    $top.on('click', function () {
        console.log(1);
        $('html,body').animate({
            scrollTop: 0
        }, 300);
    })
})();

//阅读区域
(function () {
    var $leftlis = $('.left.rank').find('li');
    var $midlis = $('.mid.rank').find('li');
    var $rightlis = $('.right.rank').find('li');
    var $lis = $('.rank').find('li');
    $leftlis.on('mouseenter', function () {
        $(this).addClass('selected');
        $(this).find('.touch').show();
        $(this).find('.normal').hide();
        $(this).find('.cover').css('transform', 'rotateY(-30deg)');
        $(this).siblings().removeClass('selected');
        $(this).siblings().find('.touch').hide();
        $(this).siblings().find('.normal').show();

    })
    $midlis.on('mouseenter', function () {
        $(this).addClass('selected');
        $(this).find('.touch').show();
        $(this).find('.normal').hide();
        $(this).find('.cover').css('transform', 'rotateY(-40deg)');
        $(this).siblings().removeClass('selected');
        $(this).siblings().find('.touch').hide();
        $(this).siblings().find('.normal').show();

    })
    $rightlis.on('mouseenter', function () {
        $(this).addClass('selected');
        $(this).find('.touch').show();
        $(this).find('.normal').hide();
        $(this).find('.cover').css('transform', 'rotateY(-55deg)');
        $(this).siblings().removeClass('selected');
        $(this).siblings().find('.touch').hide();
        $(this).siblings().find('.normal').show();

    })
    $lis.on('mouseleave', function () {
        $lis.find('.cover').css('transform', 'rotateY(0)')

    })
})();

//李华兵模块
(function () {
    let $lis = $(".lhb_item-wrapper");
    let $hlis = $(".lhb_hover-list-item");
    $lis.mouseenter(function () {
        $hlis.removeClass("lhb_hover-list-item-active");
        $(this).next().addClass("lhb_hover-list-item-active");
        $lis.find("img").css("transform", "scale(1)");
        $(this).find("img").css("transform", "scale(1.15)");
    });
    // 当离开大盒子，浮动的div全部消失
    $(".lhb_tab-item").mouseleave(function () {
        $hlis.removeClass("lhb_hover-list-item-active");
        $lis.find("img").css("transform", "scale(1)");
    });

    let $tabs = $(".lhb_text");
    let $contents = $(".lhb_content");

    $tabs.click(function () {
        $(this).addClass("lhb_text-active").parent().siblings().children().removeClass(
            "lhb_text-active");
        let idx = $(this).parent().index();
        console.log(idx);
        $contents.eq(idx).addClass("lhb_content-active").siblings(".lhb_content").removeClass(
            "lhb_content-active");
    })
})();

//宋恒利模块
(function () {
    $(function () {
        //鼠标移入 图片放大
        var $lis = $('.shl_carousel_bottom li')
        var $left = $('.arrow-left');
        var $right = $('.arrow-right')
        var $ul = $('.picBox2');
        var count = 0;
        var index;
        var current;
        $lis.mouseenter(function (e) {
            // if (!e.isTrusted) {
            //     current = ($(this).index()) - count;
            //     // console.log(current)
            // }
            current = ($(this).index()) - count;
            $(this).css({
                'width': 220,
                'transform': 'scaleY(1.1)'
            })
                .prevAll().css({
                    'width': 196,
                    'height': 288,
                    'transform': 'scaleY(1)'
                }).end()
                .nextAll().css({
                    'width': 196,
                    'height': 288,
                    'transform': 'scaleY(1)'
                });
            index = $(this).index();
            // console.log(index);
        })
        $lis.eq(0).mouseenter();
        // 按钮
        $left.on('click', function () {
            count--;
            if (count === -1) {
                $ul.css('left', -1372);
                count = 6;
            }
            $ul.stop().animate({
                'left': -count * 196
            }, 1000);
            index--;
            if (index === (-1 + current)) {
                index = 6 + current;
            }
            $lis.eq(index).mouseenter();
        })
        $right.on('click', function () {
            count++;
            if (count === 8) {
                $ul.css('left', 0);
                count = 1;
            }
            $ul.stop().animate({
                'left': -count * 196
            }, 1000);
            index++;
            if (index === (8 + current)) {
                index = current + 1;
            }
            $lis.eq(index).mouseenter();
        })

    })
})();

//王元昊模块
(function () {
    var $level2 = $('.level2');
    var viewheight = document.documentElement.clientHeight;
    $('.menu-item').mouseenter(function () {
        var $index = $('.menu-item').index(this);
        //鼠标经过时判断内容到浏览器窗口顶部的距离
        var lv2Top = $(this).offset().top - $(window).scrollTop();
        if (lv2Top > viewheight / 2) {
            $level2.eq($index).css('top', -$level2.eq($index).innerHeight() - 20);
            $level2.eq($index).addClass('bottom').removeClass('top');
        } else {
            $level2.eq($index).css('top', 58);
            $level2.eq($index).addClass('top').removeClass('bottom');
        }
        $level2.eq($index).stop().fadeIn();

    });
    $('.menu-item').mouseleave(function () {
        $('.level2').stop().fadeOut();
    });
    //页面元素距离浏览器顶部的距离 $(this).offset().top - $(window).scrollTop()

    var viewheight = document.documentElement.clientHeight; //浏览器可视窗口高度
})();

// 俞雪蓉模块
(function () {
    // change 换一批
    $('.right a').mouseenter(function () {
        $(this).addClass('change-red');
    })

    $('.right a').mouseleave(function () {
        $(this).removeClass('change-red')
    })


    //title赋值
    var contentH4 = document.querySelectorAll('.list_content h4');
    var contentP = document.querySelectorAll('.list_content p')


    getTitle(contentH4);
    getTitle(contentP)


    //功能：将元素内容复制给元素title
    function getTitle(elm) {
        for (var i = 0; i < elm.length; i++) {
            elm[i].onmouseenter = function () {
                var elminner = this.innerText;
                this.setAttribute('title', elminner)
            }
        }
    }

    //播放按钮复制title
    var onlive = document.getElementsByClassName('onlive');

    var onliveTxt = '播放';

    definedTitle(onlive, onliveTxt);

    //功能：自定义内容复制给title
    function definedTitle(elm, content) {
        for (var i = 0; i < elm.length; i++) {
            elm[i].onmouseenter = function () {
                this.setAttribute('title', content);
            }
        }
    }


    //播放按钮显示隐藏
    var $listLis = $('.list_content li');

    $listLis.mouseenter(function () {
        // $(this).siblings().find('onlive').hide();
        $(this).find('.onlive').stop().fadeIn();
    })

    $listLis.mouseleave(function () {
        $(this).find('.onlive').stop().fadeOut();
    })
})();

//丁均模块
(function () {
    var $cover = $(' .DjMusicRanking .DjMusicRankingContent .DjMusicRankingContentleft .new .parentWrap .menuGroup .comedown .groupTitleone #cover-yy')
    var $coverone = $('.DjMusicRanking .DjMusicRankingContent .DjMusicRankingContentCenter .new .parentWrap .menuGroup .comedown .groupTitleone #cover-yy')
    var $covertwo = $('.DjMusicRanking .DjMusicRankingContent .DjMusicRankingContentRight .new .parentWrap .menuGroup .comedown .groupTitleone #cover-yy')
    $('.menuGroup').mouseenter(function () {
        $(this).children('span').stop().hide().parent().siblings().children('span').stop().show();
        $(this).children('div').stop().show().parent().siblings().children('div').stop().hide();
        // $('.menuGroup').children('div').children('.groupTitleone').css('opacity','0.9')
        // $(this).children('div').children('.groupTitleone').css('opacity','1')
    });
    $('.menuGroup').eq(0).mouseenter()
    $('.menuGroup').eq(10).mouseenter()
    $('.menuGroup').eq(20).mouseenter()


    $cover.mouseenter(function () {
        $(this).css('opacity', '0.5')
        $(this).append('<i>&#xe609;</i>')

    })
    $coverone.mouseenter(function () {
        $(this).css('opacity', '0.5')
        $(this).append('<i>&#xe609;</i>')
    })
    $covertwo.mouseenter(function () {
        $(this).css('opacity', '0.5')
        $(this).append('<i>&#xe609;</i>')
    })
    $cover.mouseleave(function () {
        $(this).css('opacity', '0')
        $(this).empty()
    })
    $coverone.mouseleave(function () {
        $(this).css('opacity', '0')
        // $('.groupTitleone').find('i').remove()
        $(this).empty()
    })
    $covertwo.mouseleave(function () {
        $(this).css('opacity', '0')
        $(this).empty()
    })


    $('.groupTitle').mouseenter(function () {
        $(this).siblings().css('color', '#E40077')

    })
    $('.menuGroup>div').mouseleave(function () {
        $(this).css('color', '#333333')
    })
})();

//梁伟健模块
(function () {
    // 交互显示
    var $migBtn = $('.mig-btn')
    $migBtn.on('click', function () {
        // alert('Hello World')
        $('.mig-login').css('display', 'block')

    })





    //切换功能区域
    var flag = true;
    var $migSpan = $('.const span')


    $('.mig-loginright span').on('click', function () {
        $(this).css('borderBottom', '1px solid #e11377')
            .css('color', '#e11377')
        $migSpan.eq(0).css({
            'color': '#5d6167',
            'borderBottom': 'none'
        })
        $('#ipt-btn').css('display', 'none')
        $('#iptTwo').css({
            width: 280,
            color: '#b6b6b6'
        })

        $('.mig-login').stop().css('height', '350')
        $('.mig-dxipt').css('display', 'inline-block')
        $('.chinayidong a').css('top', '85%')
        $('.bottom-migzc').css('display', 'inline-block')
        $('#ipt').prop('placeholder', '手机号/邮箱/用户名').val('')
        $('#iptTwo').prop('type', 'password').prop('placeholder', '密码')
    })

    $('.mig-loginleft span').on('click', function () {
        $(this).css('borderBottom', '1px solid #e11377')
            .css('color', '#e11377')
        $migSpan.eq(1).css({
            'color': '#5d6167',
            'borderBottom': 'none'
        })
        $('#iptTwo,#ipt-btn').css('display', 'inline-block')
        $('#iptTwo').css({
            width: 170,
            color: '#b6b6b6'
        })

        $('.mig-login').stop().css('height', '335')
        $('.mig-dxipt').css('display', 'none')
        $('.chinayidong a').css('top', '85%')
        $('.bottom-migzc').css('display', 'none')
        $('#ipt').prop('placeholder', '手机号').val('')
        $('#iptTwo').prop('placeholder', '请输入验证码').prop('type', 'text')

    })



    //获取验证码
    var $miginput = $('.one-ipt input')
    $miginput.on('keyup', function (e) {

        if (e.keyCode === 13) {
            console.log(e.keyCode);
            $('#ipt-btn').trigger('click');
        }

    });
    $miginput.on('input', function () {

        if ($miginput.val().trim() == '') {
            $('#Invalid').hide();
            $('.iform').hide();
            $('#ipt-btn').css('background-color', '#d5d5d5')

        } else {
            $('#ipt-btn').css('background-color', '#e11377')
        }


    })
    $('#ipt-btn').on('click', function () {
        var pattern = /^0?(13|14|15|17|18|19)[0-9]{9}$/

        var strzz = $('.one-ipt input').val()
        // console.log(index);
        // console.log(strzz);

        // console.log(pattern.test(str));
        // console.log(pattern.test(strzz));
        if ($miginput.val().trim() == '' || pattern.test(strzz) == false) {
            // alert('123')
            // alert('手机号码输入错误')
            $('#Invalid').show();
            $('.iform').show();
            $('#ipt-btn').text('获取验证码')

        } else {
            var index = 60;
            $('#Invalid').hide();
            $('.iform').hide();
            var setInt = setInterval(function () {

                index--
                $('#ipt-btn').prop('disabled', true)
                // $('#Invalid,').text('')
                $('#ipt-btn').css('background-color', '#d5d5d5')
                    .text('' + index + 's后重试')

                // console.log(index);

                if (index == 0) {
                    $('#ipt-btn').text('获取验证码')
                    $('#ipt-btn').prop('disabled', false)
                    $('#ipt-btn').css('background-color', '#e11377')
                    console.log($('#ipt-btn').prop('disabled'));
                    clearInterval(setInt)
                }
            }, 100)
            // console.log($('#ipt-btn').prop('disabled'));



        }

    })

    //隐藏界面
    $('.mig-xx').on('click', function () {
        $('.mig-login').css('display', 'none');
        $('.mask').hide();
    })


})();

// 王超模块2
(function () {
    var $pic = $('.wc_game .body .pic')
    var $img = $(".wc_game .body .pic .img");
    $pic.on('mouseenter', function () {
        $(this).find('.img').stop().animate({
            top: -30
        }, 200, function () {
            $(this).stop().animate({
                top: 0
            }, 100);
        })
    });
})();

$(function () {
    $(".wc_game .body ul .pic").click(function () {
        window.open("../跳转页面/本月最佳游戏/zl-zuijia.html");
    })
})