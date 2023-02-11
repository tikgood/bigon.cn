//太平洋 ip接口开始
    $(document).ready(function() {
        $.ajax({
            //太平洋 ip接口
            url: "https://whois.pconline.com.cn/ipJson.jsp",
            dataType: "jsonp",
            timeout: 5000,
            success: function(re) {
                $("#mizhi_ip").html(re.ip);//IP
                $("#mizhi_diqu").html(re.pro + re.city);//地区
                $("#mizhi_diqu2").html(re.city);//地区2只有城市
                $("#mizhi_addr").html(re.addr);//运营商
                $("#mizhi_cityCode").html(re.cityCode);//城市编码
            },
            error: function() {
                $("#pconline").html("<font color='red'>链接失败</font>");
            },
            complete: function() {},
        });    });
//太平洋 ip接口结束
/*
<script>
    $(document).ready(function() {
        $.ajax({
            //太平洋 ip接口
            url: "https://whois.pconline.com.cn/ipJson.jsp",
            dataType: "jsonp",
            timeout: 5000,
            success: function(re) {
                $("#pconline").html(re.ip + "&nbsp;|&nbsp;" + re.city);
            },
            error: function() {
                $("#pconline").html("<font color='red'>链接失败</font>");
            },
            complete: function() {},
        });
        $.ajax({
            url: "https://api.ip.sb/geoip",
            dataType: "jsonp",
            timeout: 5000,
            success: function(re) {
                $("#ipsb").html(re.ip + "&nbsp;|&nbsp;" + re.country + "&nbsp;&nbsp;<img class='flag' src='https://cdn.jsdelivr.net/gh/5iux/dyimg/flag/" + re.country_code+".svg'>");
            },
            error: function() {
                $("#ipsb").html("<font color='red'>链接失败</font>");
            },
            complete: function() {},
        });
        $.ajax({
            url: "https://freegeoip.app/json/",
            dataType: "jsonp",
            timeout: 5000,
            success: function(re) {
                $("#freegeoip").html(re.ip + "&nbsp;|&nbsp;" + re.country_code + "&nbsp;&nbsp;<img class='flag' src='https://cdn.jsdelivr.net/gh/5iux/dyimg/flag/" + re.country_code+".svg'>");
            },
            error: function() {
                $("#freegeoip").html("<font color='red'>链接失败</font>");
            },
            complete: function() {},
        });
        $.ajax({
            url: "https://v4.ipv6-test.com/json/widgetdata.php",
            dataType: "jsonp",
            timeout: 5000,
            success: function(re) {
                $("#ipv6-test").html(re.address + "&nbsp;|&nbsp;" + re.country_code + "&nbsp;&nbsp;<img class='flag' src='https://cdn.jsdelivr.net/gh/5iux/dyimg/flag/" + re.country_code+".svg'>");
            },
            error: function() {
                $("#ipv6-test").html("<font color='red'>链接失败</font>");
            },
            complete: function() {},
        });

        function ping(url) {
            var img = new Image();
            var start = new Date().getTime();
            img.src = url + start;
            var flag = false; //无法访问
            img.onload = function() {
                flag = true;
                $("#appspot").html("<font color='green'>链接成功！</font>");
            };
            img.onerror = function() {
                flag = true;
                $("#appspot").html("<font color='green'>链接成功！</font>");
            };
            var timer = setTimeout(function() {
                if (!flag) { //如果真的无法访问
                    flag = false;
                    $("#appspot").html("<font color='red'>链接失败</font>");
                }
            }, 1500);
        }

        $.ajax({
            url: "https://ipquery.et.r.appspot.com",
            dataType: "jsonp",
            timeout: 5000,
            success: function(re) {
                $("#appspot").html(re.address + "&nbsp;|&nbsp;" + re.geographical + "&nbsp;&nbsp;" + re.flag);
            },
            error: function(re) {
                var d = new Date().getTime();
                ping('https://www.google.com/favicon.ico?t=' + d);

                //$("#appspot").html("<font color='red'>链接失败</font>");
            },
            complete: function() {},
        });
    });
    </script>
    <script src="https://pv.sohu.com/cityjson?ie=utf-8"></script>
    <script>
    $("#sohu").html(returnCitySN.cip + "&nbsp;|&nbsp;" + returnCitySN.cname);
    </script>
    */