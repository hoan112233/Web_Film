var uniAd={};
if(typeof jQuery=='undefined')
document.write('<script type="text/javascript" src="http://zone.uniad.vn/publisher/jquery-1.8.0.min.js"></script>');
if(typeof device=='undefined')
document.write('<script type="text/javascript" src="http://zone.uniad.vn/publisher/device.js"></script>');
if(typeof FlashDetect=='undefined')
document.write('<script type="text/javascript" src="http://zone.uniad.vn/publisher/flashdetect.js"></script>');
if(typeof jwplayer=='undefined')
document.write('<script type="text/javascript" src="http://zone.uniad.vn/publisher/jwplayer.js"></script>');
document.write('<link type="text/css" rel="stylesheet" href="http://zone.uniad.vn/publisher/style.css?v=1.13"/>');
document.write('<script type="text/javascript" src="http://zone.uniad.vn/publisher/define.js?v=1.109"></script>');
uniAd.website={'domain':'phimmoi.net','contentWidth':1000,'topMargin':122,'topFixedMargin':0};
uniAd.jsonHeadCode='["<script type=\\"text\\/javascript\\">\\r\\n<!--\\r\\njQuery(document).ready(function(){\\r\\n\\tif(typeof jQuery!=\\"undefined\\" && jQuery(\\"#uniad-balloon-wrapper\\").length>0)\\r\\n\\t{\\r\\n\\t\\tvar balloonReg=\\/uniad_balloon_count\\\\s*\\\\=\\\\s*([0-9]+)\\/i;\\r\\n\\t\\tvar balloonResult=balloonReg.exec(document.cookie);\\r\\n\\t\\tvar currentCount=0;\\r\\n\\t\\tif(typeof balloonResult==\\"object\\" && balloonResult!=null)\\r\\n\\t\\t{\\r\\n\\t\\t\\tvar _currentCount=parseInt(balloonResult[1]);\\r\\n\\t\\t\\tif(isNaN(_currentCount) || _currentCount<=0)\\r\\n\\t\\t\\t\\tcurrentCount=0;\\r\\n\\t\\t\\telse\\r\\n\\t\\t\\t\\tcurrentCount=_currentCount;\\r\\n\\t\\t}\\r\\n\\t\\tconsole.log(\\"Current Balloon Display Count: \\"+currentCount);\\r\\n\\t\\tif(currentCount>=2)\\r\\n\\t\\t{\\r\\n\\t\\t\\tjQuery(\\"#uniad-balloon-wrapper\\").css(\\"display\\",\\"none\\");\\r\\n\\t\\t\\tconsole.log(\\"Balloon has been force hidden.\\");\\r\\n\\t\\t}\\r\\n\\t\\telse\\r\\n\\t\\t{\\r\\n\\t\\t\\tvar newCount=currentCount+1;\\r\\n\\t\\t\\tdocument.cookie=\\"uniad_balloon_count=\\"+newCount+\\";path=\\/;\\";\\r\\n\\t\\t}\\r\\n\\t}\\r\\n});\\r\\n\\r\\n-->\\r\\n<\\/script>"]';
uniAd.jsonBodyCode='{"zone13":{"zoneId":13,"zoneType":"floatright","code":"\\n\\t\\t\\t<script type=\\"text\\/javascript\\">\\n\\t\\t\\t<!--\\n\\t\\t\\tif(typeof uniAd!=\\"undefined\\")\\n\\t\\t\\t\\tuniAd.impression.push(\\"13\\",\\"floatright\\",\\"http:\\/\\/zone.uniad.vn\\/publisher\\/imp\\/?bannerid=89&zoneid=13&dtime=1416975170&ctype=CPD&verify=373efc7a855b84b48793202f35563385\\");\\n\\t\\t\\t-->\\n\\t\\t\\t<\\/script>\\n\\t\\t\\t<div id=\\"uniad-zone-13\\" data-boost=\\"0\\" data-skipsyscode=\\"0\\" data-zoneid=\\"13\\" data-zonetype=\\"floatright\\" class=\\"uniad-ad-wraper uniad-flash-wraper uniad-zonetype-floatright\\" style=\\"width:120px;height:600px;\\"><iframe width=\\"120px\\" height=\\"600px\\" scrolling=\\"No\\" frameborder=\\"0\\" style=\\"overflow:hidden;\\" src=\\"http:\\/\\/api.adtimaserver.vn\\/rdext\\/html?zoneId=1397568222453519520\\"><\\/iframe><\\/div>"},"zone11":{"zoneId":11,"zoneType":"balloon","code":"\\n\\t\\t\\t\\t<!-- uniAd Balloon ads -->\\n\\t\\t\\t\\t\\t<div id=\\"uniad-balloon-wrapper\\" class=\\"balloon-ad-wrap\\">\\n\\t\\t\\t\\t\\t\\t<a id=\\"uniad-balloon-close\\" class=\\"balloon-bg-image balloon-ad-close\\" href=\\"javascript:void(0);\\" rel=\\"nofollow\\"><\\/a>\\n\\t\\t\\t\\t\\t\\t<!--a id=\\"uniad-balloon-min\\" class=\\"balloon-bg-image balloon-ad-minimize\\" href=\\"javascript:void(0);\\" rel=\\"nofollow\\"><\\/a -->\\n\\t\\t\\t\\t\\t\\t<div class=\\"balloon-ad-header\\">\\n\\t\\t\\t\\t\\t\\t\\t<span>Qu\\u1ea3ng c\\u00e1o<\\/span>\\n\\t\\t\\t\\t\\t\\t<\\/div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"balloon-ad-body\\" id=\\"uniad-balloon-body\\">\\n\\t\\t\\t<script type=\\"text\\/javascript\\">\\n\\t\\t\\t<!--\\n\\t\\t\\tif(typeof uniAd!=\\"undefined\\")\\n\\t\\t\\t\\tuniAd.impression.push(\\"11\\",\\"balloon\\",\\"http:\\/\\/zone.uniad.vn\\/publisher\\/imp\\/?bannerid=249&zoneid=11&dtime=1416975170&ctype=CPD&verify=174ce513a9e08badafec21eeebfbe1e3\\");\\n\\t\\t\\t-->\\n\\t\\t\\t<\\/script>\\n\\t\\t\\t<div id=\\"uniad-zone-11\\" data-boost=\\"0\\" data-skipsyscode=\\"0\\" data-zoneid=\\"11\\" data-zonetype=\\"balloon\\" class=\\"uniad-ad-wraper uniad-flash-wraper uniad-zonetype-balloon\\" style=\\"width:250px;height:250px;\\"><iframe width=\\"250px\\" height=\\"250px\\" scrolling=\\"No\\" frameborder=\\"0\\" style=\\"overflow:hidden;\\" src=\\"http:\\/\\/api.adtimaserver.vn\\/rdext\\/html?zoneId=1347095158360331354\\"><\\/iframe><\\/div><\\/div>\\n\\t\\t\\t\\t\\t<\\/div>\\n\\t\\t\\t\\t\\t<!-- uniAd Balloon ads -->"},"zone8":{"zoneId":8,"zoneType":"basic","code":"\\n\\t\\t\\t<script type=\\"text\\/javascript\\">\\n\\t\\t\\t<!--\\n\\t\\t\\tif(typeof uniAd!=\\"undefined\\")\\n\\t\\t\\t\\tuniAd.impression.push(\\"8\\",\\"basic\\",\\"http:\\/\\/zone.uniad.vn\\/publisher\\/imp\\/?bannerid=253&zoneid=8&dtime=1416975170&ctype=CPD&verify=ce317fc8245aefc1f3399c84a48c122b\\");\\n\\t\\t\\t-->\\n\\t\\t\\t<\\/script>\\n\\t\\t\\t<div id=\\"uniad-zone-8\\" data-boost=\\"0\\" data-skipsyscode=\\"0\\" data-zoneid=\\"8\\" data-zonetype=\\"basic\\" class=\\"uniad-ad-wraper uniad-flash-wraper uniad-zonetype-basic\\" style=\\"width:650px;height:90px;\\"><a class=\\"uniad-link\\" rel=\\"nofollow\\" target=\\"_blank\\" href=\\"http:\\/\\/zone.uniad.vn\\/publisher\\/go\\/?bannerid=253&zoneid=8&dtime=1416975170&ctype=CPD&domain=phimmoi.net&verify=e1d7186790afc3962a9278a6f9543950&href=http%3A%2F%2Fwww.sbbanner.com%2Fnewmedia%2Findex.html%3Fvendorid%3D11314%26vendortype%3D2%26lang%3DVIREG\\"><img class=\\"uniad-banner-image\\" width=\\"650\\" height=\\"90\\" border=\\"0\\" src=\\"http:\\/\\/zone.uniad.vn\\/data\\/banner\\/253.gif\\"\\/><\\/a><\\/div>"},"zone2":{"zoneId":2,"zoneType":"basic","code":"\\n\\t\\t\\t<script type=\\"text\\/javascript\\">\\n\\t\\t\\t<!--\\n\\t\\t\\tif(typeof uniAd!=\\"undefined\\")\\n\\t\\t\\t\\tuniAd.impression.push(\\"2\\",\\"basic\\",\\"http:\\/\\/zone.uniad.vn\\/publisher\\/imp\\/?bannerid=207&zoneid=2&dtime=1416975170&ctype=CPD&verify=57cf0ffb1a8a8c2f2626edbc423d76ad\\");\\n\\t\\t\\t-->\\n\\t\\t\\t<\\/script>\\n\\t\\t\\t<div id=\\"uniad-zone-2\\" data-boost=\\"0\\" data-skipsyscode=\\"0\\" data-zoneid=\\"2\\" data-zonetype=\\"basic\\" class=\\"uniad-ad-wraper uniad-flash-wraper uniad-zonetype-basic\\" style=\\"width:300px;height:600px;\\"><a class=\\"uniad-link\\" rel=\\"nofollow\\" target=\\"_blank\\" href=\\"http:\\/\\/zone.uniad.vn\\/publisher\\/go\\/?bannerid=207&zoneid=2&dtime=1416975170&ctype=CPD&domain=phimmoi.net&verify=c52dcf936639beff52656436d04d69f1&href=http%3A%2F%2Fwww.phimmoi.net%2Fphim%2Fche-tao-my-nhan-1614%2F\\"><img class=\\"uniad-banner-image\\" width=\\"300\\" height=\\"600\\" border=\\"0\\" src=\\"http:\\/\\/zone.uniad.vn\\/data\\/banner\\/207.jpg\\"\\/><\\/a><\\/div>"},"zone3":{"zoneId":3,"zoneType":"basic","code":"\\n\\t\\t\\t<script type=\\"text\\/javascript\\">\\n\\t\\t\\t<!--\\n\\t\\t\\tif(typeof uniAd!=\\"undefined\\")\\n\\t\\t\\t\\tuniAd.impression.push(\\"3\\",\\"basic\\",\\"http:\\/\\/zone.uniad.vn\\/publisher\\/imp\\/?bannerid=257&zoneid=3&dtime=1416975170&ctype=CPD&verify=589cc45e331ffee7024df5a110fb3b47\\");\\n\\t\\t\\t-->\\n\\t\\t\\t<\\/script>\\n\\t\\t\\t<div id=\\"uniad-zone-3\\" data-boost=\\"0\\" data-skipsyscode=\\"0\\" data-zoneid=\\"3\\" data-zonetype=\\"basic\\" class=\\"uniad-ad-wraper uniad-flash-wraper uniad-zonetype-basic\\" style=\\"width:300px;height:600px;\\"><iframe width=\\"300px\\" height=\\"600px\\" scrolling=\\"No\\" frameborder=\\"0\\" style=\\"overflow:hidden;\\" src=\\"http:\\/\\/api.adtimaserver.vn\\/rdext\\/html?zoneId=1259634432914444548\\"><\\/iframe><\\/div>"},"zone12":{"zoneId":12,"zoneType":"floatleft","code":"\\n\\t\\t\\t<script type=\\"text\\/javascript\\">\\n\\t\\t\\t<!--\\n\\t\\t\\tif(typeof uniAd!=\\"undefined\\")\\n\\t\\t\\t\\tuniAd.impression.push(\\"12\\",\\"floatleft\\",\\"http:\\/\\/zone.uniad.vn\\/publisher\\/imp\\/?bannerid=250&zoneid=12&dtime=1416975170&ctype=CPD&verify=897da444931536d79dde99d01d1a590d\\");\\n\\t\\t\\t-->\\n\\t\\t\\t<\\/script>\\n\\t\\t\\t<div id=\\"uniad-zone-12\\" data-boost=\\"0\\" data-skipsyscode=\\"0\\" data-zoneid=\\"12\\" data-zonetype=\\"floatleft\\" class=\\"uniad-ad-wraper uniad-flash-wraper uniad-zonetype-floatleft\\" style=\\"width:120px;height:600px;\\"><iframe width=\\"120px\\" height=\\"600px\\" scrolling=\\"No\\" frameborder=\\"0\\" style=\\"overflow:hidden;\\" src=\\"http:\\/\\/api.adtimaserver.vn\\/rdext\\/html?zoneId=1144982175028302898\\"><\\/iframe><\\/div>"},"zone64":{"zoneId":64,"zoneType":"preplay","code":"\\n\\t\\t\\t<script type=\\"text\\/javascript\\">\\n\\t\\t\\t<!--\\n\\t\\t\\tif(typeof uniAd!=\\"undefined\\")\\n\\t\\t\\t\\tuniAd.impression.push(\\"64\\",\\"preplay\\",\\"http:\\/\\/zone.uniad.vn\\/publisher\\/imp\\/?bannerid=76&zoneid=64&dtime=1416975170&ctype=CPD&verify=dc2269c43d7173a2d563b6830f0306c7\\");\\n\\t\\t\\t-->\\n\\t\\t\\t<\\/script>\\n\\t\\t\\t<script type=\\"text\\/javascript\\">\\r\\n<!--\\r\\njQuery(document).ready(function(){\\r\\n\\tif(!device.mobile() && !device.tablet() && FlashDetect.installed)\\r\\n\\t{\\r\\n\\t\\twindow.uniadPreroll=new uniAd.preroll(\\"#media-player-box\\",\\"http:\\/\\/delivery.adnetwork.vn\\/247\\/xmlvideoad\\/zid_1385709232\\/wid_1385700597\\/type_inline\\/cb_[timestamp]\\",phimMoiPlayer.originalPlayer,3);\\r\\n\\t\\twindow.uniadPreroll.setVolume(30);\\r\\n\\t\\twindow.uniadPreroll.setup();\\r\\n\\t}\\r\\n});\\r\\n-->\\r\\n<\\/script>"},"zone5":{"zoneId":5,"zoneType":"basic","code":"\\n\\t\\t\\t<script type=\\"text\\/javascript\\">\\n\\t\\t\\t<!--\\n\\t\\t\\tif(typeof uniAd!=\\"undefined\\")\\n\\t\\t\\t\\tuniAd.impression.push(\\"5\\",\\"basic\\",\\"http:\\/\\/zone.uniad.vn\\/publisher\\/imp\\/?bannerid=35&zoneid=5&dtime=1416975170&ctype=CPD&verify=fccf68eafce1fca260fe81f79e20a361\\");\\n\\t\\t\\t-->\\n\\t\\t\\t<\\/script>\\n\\t\\t\\t<div id=\\"uniad-zone-5\\" data-boost=\\"1\\" data-skipsyscode=\\"0\\" data-zoneid=\\"5\\" data-zonetype=\\"basic\\" class=\\"uniad-ad-wraper uniad-flash-wraper uniad-zonetype-basic\\" style=\\"width:300px;height:250px;\\"><a class=\\"uniad-link\\" rel=\\"nofollow\\" target=\\"_blank\\" href=\\"http:\\/\\/zone.uniad.vn\\/publisher\\/go\\/?bannerid=35&zoneid=5&dtime=1416975170&ctype=CPD&domain=phimmoi.net&verify=79732f350b30b33257adef99669b80cf&href=http%3A%2F%2Flaban.vn%2Fthong-tin%2Fgioi-thieu-laban%3Futm_source%3Dlbbanner37\\"><img class=\\"uniad-banner-image\\" width=\\"300\\" height=\\"250\\" border=\\"0\\" src=\\"http:\\/\\/zone.uniad.vn\\/data\\/banner\\/35.jpg\\"\\/><\\/a><\\/div>"}}';
uniAd.headCodes=jQuery.parseJSON(uniAd.jsonHeadCode);
uniAd.bodyCodes=jQuery.parseJSON(uniAd.jsonBodyCode);
//--Write head code
if(typeof uniAd.headCodes=='object')
{
for(var i=0;i<uniAd.headCodes.length;i++)
{
document.writeln(uniAd.headCodes[i]);
}
}
jQuery(document).ready(function(){
uniAd.debugLog("uniAd: server time => 26-11-2014, 11:12:50 AM; timezone => Asia/Saigon");
});