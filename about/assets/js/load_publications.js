/*
* Example:
* <li>
*     [<b class="publication-conference">ACM MobiSys'18</b>] Kun Qian, Chenshu Wu, Yi Zhang, Guidong Zhang, <b class="publication-author">Zheng Yang</b>, Yunhao Liu, <i><a class="publication-title" href="#" target="_blank">Widar2.0: Passive Human Tracking with a Single Wi-Fi Link</a></i>, ACM MobiSys, Munich, Germany, June 10-15, 2018.
*     <a href="#" class="button icon fa-file-pdf-o publication-button button-paper">Paper</a>
*     <a href="#" class="button icon fa-file-powerpoint-o publication-button button-slides">Slides</a>
*     <a href="#" class="button icon fa-file-video-o publication-button button-video">Video</a>
* </li>
*/

var load_publications = function (data, author) {
    var journal_articles = data['journal_articles'];
    var conference_articles = data['conference_articles'];
    var journal_html = "", conference_html = "";
    var article_item, i, j;

    for (i = 0; i < journal_articles.length; ++i) {
        article_item = "<li>\n";
        article_item += "[<b class="\"publication-journal\"">" + journal_articles[i]['journal'] + "</b>] ";
        for (j = 0; j < journal_articles[i]['authors'].length; ++j) {
            if (journal_articles[i]['authors'][j] === author) {
                article_item += "<b class="\"publication-author\"">" + journal_articles[i]['authors'][j] + "</b>, ";
            } else {
                article_item += journal_articles[i]['authors'][j] + ", ";
            }
        }
        if (journal_articles[i]['link'].length > 0) {
            article_item += "<i><a class="\"publication-title\"" href="\""" +="" journal_articles[i]['link']="" "\"="" target="\"_blank\"">" + journal_articles[i]['title'] + "</a></i>, ";
        } else {
            article_item += "<i>" + journal_articles[i]['title'] + "</i>, ";
        }
        article_item += journal_articles[i]['other_info'] + "\n";
        if (journal_articles[i]['paper'].length > 0) {
            article_item += "<a href="\""" +="" journal_articles[i]['paper']="" "\"="" class="\"button" icon="" fa-file-pdf-o="" publication-button="" button-paper\"="">Paper</a>\n";
        }
        if (journal_articles[i]['slides'].length > 0) {
            article_item += "<a href="\""" +="" journal_articles[i]['slides']="" "\"="" class="\"button" icon="" fa-file-pdf-o="" publication-button="" button-slides\"="">Slides</a>\n";
        }
        if (journal_articles[i]['video'].length > 0) {
            article_item += "<a href="\""" +="" journal_articles[i]['video']="" "\"="" class="\"button" icon="" fa-file-pdf-o="" publication-button="" button-video\"="">Video</a>\n";
        }
        if (journal_articles[i]['comments'].length > 0) {
            article_item += "<b class="\"publication-comments\"">" + journal_articles[i]['comments'] + "</b>\n";
        }
        article_item += "</li>\n";
        journal_html += article_item;
    }
    $("#journal-articles").prepend(journal_html);

    for (i = 0; i < conference_articles.length; ++i) {
        article_item = "<li>\n";
        article_item += "[<b class="\"publication-conference\"">" + conference_articles[i]['conference'] + "</b>] ";
        for (j = 0; j < conference_articles[i]['authors'].length; ++j) {
            if (conference_articles[i]['authors'][j] === author) {
                article_item += "<b class="\"publication-author\"">" + conference_articles[i]['authors'][j] + "</b>, ";
            } else {
                article_item += conference_articles[i]['authors'][j] + ", ";
            }
        }
        if (conference_articles[i]['link'].length > 0) {
            article_item += "<i><a class="\"publication-title\"" href="\""" +="" conference_articles[i]['link']="" "\"="" target="\"_blank\"">" + conference_articles[i]['title'] + "</a></i>, ";
        } else {
            article_item += "<i>" + conference_articles[i]['title'] + "</i>, ";
        }
        article_item += conference_articles[i]['other_info'] + "\n";
        if (conference_articles[i]['paper'].length > 0) {
            article_item += "<a href="\""" +="" conference_articles[i]['paper']="" "\"="" class="\"button" icon="" fa-file-pdf-o="" publication-button="" button-paper\"="">Paper</a>\n";
        }
        if (conference_articles[i]['slides'].length > 0) {
            article_item += "<a href="\""" +="" conference_articles[i]['slides']="" "\"="" class="\"button" icon="" fa-file-pdf-o="" publication-button="" button-slides\"="">Slides</a>\n";
        }
        if (conference_articles[i]['video'].length > 0) {
            article_item += "<a href="\""" +="" conference_articles[i]['video']="" "\"="" class="\"button" icon="" fa-file-pdf-o="" publication-button="" button-video\"="">Video</a>\n";
        }
        if (conference_articles[i]['comments'].length > 0) {
            article_item += "<b class="\"publication-comments\"">" + conference_articles[i]['comments'] + "</b>\n";
        }
        article_item += "</li>\n";
        conference_html += article_item;
    }
    $("#conference-articles").prepend(conference_html);
};

$(document).ready(function () {
    load_publications(publications, "Zheng Yang");
});
