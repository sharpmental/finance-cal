var counter = 0;

$("document").ready(function () {
    $(".startdate").datepicker({
        altFormat: "yy-mm-dd"
    });
    $(".enddate").datepicker({
        altFormat: "yy-mm-dd"
    });
    $("#s_date").datepicker({
        altFormat: "yy-mm-dd"
    });
    $("#e_date").datepicker({
        altFormat: "yy-mm-dd"
    });

    $("#btncalc").click(function(event){
        var g_startdate;
        var g_enddate;
        
        var array_date=new Array();
        //calculate start date, end date, and generate the array
        var s_d1= $("#s_date").text;
        var e_d1 = $("#e_date").text;
        
        
        //for each in line, get the data
        //if the cycle is day
            //get the start date
            //for each in array_date
                //if the date is > this.startdate, and < this.enddate
                //put the spent into every day into array_date;
        //else if the cycle is week
            //get the this.startdate and its weekday
            //get the this.weekcycle
            //for from g_startdate-itsweekday + this.startdate.weekday
                //if the date < this.startdate, then add 7 day,count the weekcycle
                //else if weekcycle < this.weekcycle, add 7 day, coun the weekcycle
                //else if date > this.enddate
                //end loop
                //else
                //put the spent into array_date, reset the weekcycle
        //else if the cycle is month
            //get the this.startdate and its monthday
            //get the this.monthcycle
            //for from g_startdate-its.monthday + this.startdate.monthday
                //if the date < this.startdate, then add 7 day,count the monthcycle
                //else if monthcycle < this.monthcycle, add 7 day, coun the monthcycle
                //else if date > this.enddate
                //end loop
                //else
                //put the spent into array_date, reset the monthcycle
        
        //else if the cycle is year
        
        //else skiperror
        
    });
    
    $("#btndraw").click(function(event){
    });
    
    $("#btnsave").click(function(event){
    });
    
    $("#btnaddline").click(function () {
        counter = counter + 1;
        var item = '<div class=\"row\" id=\"list-' + counter + '\">';
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
        item = item + '<input type=\"text\" class=\"form-control input-sm startdate\" id=\"\" placeholder=\"2011-01-01\">';
        item = item + '</div>';
        item = item + '<div class=\"form-group\">';
        item = item + '<label>结束日期</label>';
        item = item + '<input type=\"text\" class=\"form-control input-sm enddate\" id=\"\" placeholder=\"2011-01-01\">';
        item = item + '</div>'
        item = item + '<div class=\"btn btn-default delline\" id=\"btn-delline-' + counter + '\">删除此项</div>';

        item = item + '</div></div>';

        var i = counter - 1;
        $("#list-" + i).after(item);
        $(".startdate").datepicker({
            altFormat: "yy-mm-dd"
        });
        $(".enddate").datepicker({
            altFormat: "yy-mm-dd"
        });
        $(".delline").click(function(event){
            var id = event.currentTarget.parentElement.parentElement.getAttribute("id");
            id = id+"111";
        })
    });
});