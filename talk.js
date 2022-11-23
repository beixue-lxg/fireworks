$(function() {
    $('#yes').click(function(event) {
        modal('我就知道大帅哥一定会开心的。(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('明人不说暗话！', A);
    });
});

function A() {
    modal('我喜欢你！', B);
}

function B() {
    modal('我知道你在等我这一句话', C);
}

function C() {
    modal('悄悄窃喜了吧~', D);
}

function D() {
    modal('不开心？不存在的', E);
}

function E() {
    modal('这辈子都不可能不开心~', F);
}

function F() {
    modal('笑一个~', G);
}

function G() {
    modal('房产证上写你名~', H);
}

function H() {
    modal('开不开心？', I);
}

function I() {
    modal('笑一个，给你看烟花！', J)
}

function J() {
    modal('这花只为你灿烂哦~', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
