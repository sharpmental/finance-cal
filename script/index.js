var counter = 0;

$("document").ready(function () {
    $("#startdate").datepicker({
        altFormat: "yy-mm-dd"
    });
    $("#enddate").datepicker({
        altFormat: "yy-mm-dd"
    });

    $("#btnaddline").click(function () {
        counter = counter + 1;
        var item = '<div class=\"row\" id=\"list-'+counter+'\">';
        item = item + '<div class=\"form-inline\">';
        item = item + '<div class=\"form-group\">';
        item = item + '<label>数量</label>';
        item = item + '<input type=\"text\" class=\"form-control input-sm \" id=\"number\" placeholder=\"100\">';
        item = item + '</div>';
        item = item + '<div class=\"form-group\">';
        item = item + '<label for=\"type\" class=\"control-label\">类别</label>';
        item = item + '<select class=\"form-control\" name=\"type\">';
        item = item + '<option value=\"1\">支出</option>';
        item = item + '<option value=\"2\">收入</option>';
        item = item + '</select>';
        item = item + '</div>';
        item = item + '<div class=\"form-group\">';
        item = item + '<label>周期</label>';
        item = item + '<select class=\"form-control\" name=\"cycletype\">';
        item = item + '<option value=\"1\">年</option>';
        item = item + '<option value=\"2\">月</option>';
        item = item + '<option value=\"3\">周</option>';
        item = item + '<option value=\"4\">日</option>';
        item = item + '</select>';
        item = item + '</div>';
        item = item + '<div class=\"form-group\">';
        item = item + '<label>周期间隔</label>';
        item = item + '<input type="\text\" class=\"form-control input-sm\" id=\"cyclenumber\" placeholder=\"1\">';
        item = item + '</div>';
        item = item + '<div class=\"form-group\">';
        item = item + '<label>起始日期</label>';
        item = item + '<input type=\"text\" class=\"form-control input-sm\" id=\"startdate\" placeholder=\"2011-01-01\">';
        item = item + '</div>';
        item = item + '<div class=\"form-group\">';
        item = item + '<label>结束日期</label>';
        item = item + '<input type=\"text\" class=\"form-control input-sm\" id=\"enddate\" placeholder=\"2011-01-01\">';
        item = item + '</div>'
        item = item + '<div class=\"btn btn-default\" id=\"btn-delline-' + counter + '\">删除此项</div>';

        item = item + '</div></div>';

        var i = counter - 1;
        $("#list-" + i).after(item);
    });
});