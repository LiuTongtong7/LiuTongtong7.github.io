/**
 * Created by maoyilin, liutongtong on 5/30/15.
 */

var load_images = function(min_millisecond, callback) {
    var start_time = (new Date()).getTime();

    var _archive_containers = $(".archive-container");
    var _archive_images = $(".archive-image");
    var count = 0;

    _archive_containers.each(function(index) {
        var height = $(this).css("height");
        var window_width = $(window).width();
        var css_effect;
        if (index % 2 == 1) {
            if (window_width < 768) {
                css_effect = {left: window_width};
            } else {
                css_effect = {top: height};
            }
            $(this).css(css_effect);
        } else {
            if (window_width < 768) {
                css_effect = {left: window_width};
            } else {
                css_effect = {bottom: height};
            }
            $(this).css(css_effect);
        }
    });
    _archive_images.each(function() {
        var _this = $(this);
        var img = new Image();
        img.src = _this.attr("data-img");
        $(img).load(function() {
            _this.css("background-image", "url(" + img.src + ")");
            $(this).remove();
            count += 1;
            if (count == _archive_images.length) {
                var end_time = (new Date()).getTime();
                if (end_time - start_time > min_millisecond) {
                    callback();
                } else {
                    setTimeout(callback, min_millisecond-(end_time-start_time));
                }
            }
        })
    });
};

var index_appear = function() {
    var _archive_containers = $(".archive-container");
    var count = 0;
    var remove_loading = function() {
        count += 1;
        if (count == _archive_containers.length) {
            $(".archive-loading").css("opacity", 0);
        }
    };

    _archive_containers.each(function(index) {
        var height = $(this).css("height");
        var window_width = $(window).width();
        var animate_effect;
        _archive_containers.css("opacity", 1);
        if (index % 2 == 1) {
            if (window_width < 768) {
                animate_effect = {left: 0};
            } else {
                animate_effect = {top: 0};
            }
            $(this).animate(animate_effect, "slow", remove_loading);
        } else {
            if (window_width < 768) {
                animate_effect = {left: 0};
            } else {
                animate_effect = {bottom: 0};
            }
            $(this).animate(animate_effect, "slow", remove_loading);
        }
    });
};

var index_disappear = function(callback) {
    $(".archive-container").each(function(index) {
        var height = $(this).css("height");
        var window_width = $(window).width();
        var animate_effect;
        $(".archive-loading").css("opacity", 1);
        if (index % 2 == 1) {
            if (window_width < 768) {
                animate_effect = {left: window_width};
            } else {
                animate_effect = {top: height};
            }
            $(this).animate(animate_effect, "slow", callback);
        } else {
            if (window_width < 768) {
                animate_effect = {left: window_width};
            } else {
                animate_effect = {bottom: height};
            }
            $(this).animate(animate_effect, "slow", callback);
        }
    });
};

var enable_archive_click = function() {
    $("#blog-container").bind("click", function() {
        var redirect_url = function() {
            window.location.href = "http://tongtongliu.siyuan12.com/Blog/";
        };
        index_disappear(redirect_url);
    });
    $("#photography-container").bind("click", function() {
        var redirect_url = function() {
            window.location.href = "http://tongtongliu.siyuan12.com/Photography/";
        };
        index_disappear(redirect_url);
    });
    $("#design-container").bind("click", function() {
        var redirect_url = function() {
            window.location.href = "http://tongtongliu.siyuan12.com/Design/";
        };
        index_disappear(redirect_url);
    });
    $("#about-contianer").bind("click", function() {
        var redirect_url = function() {
            window.location.href = "http://tongtongliu.siyuan12.com/About/";
        };
        index_disappear(redirect_url);
    });
};

var disable_archive_click = function() {
    $(".archive-container").unbind("click");
};

$(document).ready(function() {
    load_images(1000, index_appear);
    enable_archive_click();
});
