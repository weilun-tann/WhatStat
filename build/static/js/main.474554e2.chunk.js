(this["webpackJsonptelestat-react"]=this["webpackJsonptelestat-react"]||[]).push([[0],{106:function(e,t,a){e.exports=a.p+"static/media/logo.df1e901b.png"},107:function(e,t,a){e.exports=a.p+"static/media/step1.d56fbd6d.jpg"},108:function(e,t,a){e.exports=a.p+"static/media/step2.497f7d35.jpg"},109:function(e,t,a){e.exports=a.p+"static/media/step3.06808f03.jpg"},110:function(e,t,a){e.exports=a.p+"static/media/step4.0c896e0b.jpg"},111:function(e,t,a){e.exports=a.p+"static/media/step5.e5e2e3ff.jpg"},112:function(e,t,a){e.exports=a.p+"static/media/bg1.a518315f.jpg"},113:function(e,t,a){e.exports=a.p+"static/media/bg2.8605a442.jpg"},114:function(e,t,a){e.exports=a.p+"static/media/bg3.424e7273.jpg"},115:function(e,t,a){e.exports=a.p+"static/media/bg4.8705daf5.jpg"},116:function(e,t,a){e.exports=a.p+"static/media/bg5.2ad1b05a.jpg"},117:function(e,t,a){e.exports=a.p+"static/media/bg6.1043f8bb.jpg"},119:function(e,t,a){e.exports=a(225)},124:function(e,t,a){},225:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(40),o=a.n(r),i=(a(124),a(102)),l=a(18),c=a.n(l),m=a(41),u=a(9),p=a(12),d=a(13),h=a(14),g=(a(77),a(126),a(127),a(74)),O=a(11),T=a(75),w=function e(t){var n=this;Object(u.a)(this,e),this.startPipeline=Object(m.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.parseRawTextFile(n.rawTextFile);case 2:t=e.sent,a=n.createDF(t),n.generateMetrics(a),n.generateComments();case 6:case"end":return e.stop()}}),e)}))),this.parseRawTextFile=function(){var e=Object(m.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a(187),e.next=3,n.parseString(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.createDF=function(e){for(var t=[],a=0,n=e.length;a<n;a++)"System"!==e[a].author&&t.push([e[a].date,e[a].author,e[a].message]);var s=new T.DataFrame(t);return s.columns=["datetime","sender","message"],s=(s=(s=s.filter(s.get("datetime").notnull())).filter(s.get("sender").notnull())).filter(s.get("message").notnull())},this.computeAvg=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return parseFloat((function(e){return e.reduce((function(e,t){return e+t}),0)}(e)/e.length).toFixed(t))},this.filterDatetimes=function(e,t){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.016666,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:168,s=[],r=[],o=0;o<e.length;o++)t[o]>=a&&t[o]<=n&&(s.push(e[o]),r.push(t[o]));return[s,r]},this.generateMetrics=function(e){n.sOne=e.get("sender").unique().toArray().sort()[0],n.sTwo=e.get("sender").unique().toArray().sort()[1],n.dfOne=e.filter(e.get("sender").eq(n.sOne)).reset_index({drop:!0}),n.dfTwo=e.filter(e.get("sender").eq(n.sTwo)).reset_index({drop:!0});var t=n.generateCount(n.dfOne),a=Object(O.a)(t,4);n.sOneMsgCount=a[0],n.sOneWordCount=a[1],n.sOneWPMCount=a[2],n.sOneMediaCount=a[3];var s=n.generateCount(n.dfTwo),r=Object(O.a)(s,4);n.sTwoMsgCount=r[0],n.sTwoWordCount=r[1],n.sTwoWPMCount=r[2],n.sTwoMediaCount=r[3];var o=n.generateReplyTimings(e);n.sOneTimings=o[n.sOne][0],n.sOneDatetimes=o[n.sOne][1],n.sTwoTimings=o[n.sTwo][0],n.sTwoDatetimes=o[n.sTwo][1];var i=n.filterDatetimes(n.sOneDatetimes,n.sOneTimings),l=Object(O.a)(i,2);n.sOneDatetimes=l[0],n.sOneTimings=l[1];var c=n.filterDatetimes(n.sTwoDatetimes,n.sTwoTimings),m=Object(O.a)(c,2);n.sTwoDatetimes=m[0],n.sTwoTimings=m[1],n.sOneAverageRT=n.computeAvg(n.sOneTimings),n.sTwoAverageRT=n.computeAvg(n.sTwoTimings),n.startDate=new Date(Math.min(n.sOneDatetimes[0],n.sTwoDatetimes[0])).toDateString(),n.endDate=new Date(Math.max(n.sOneDatetimes[n.sOneDatetimes.length-1],n.sTwoDatetimes[n.sTwoDatetimes.length-1])).toDateString()},this.generateCount=function(e){var t=e.length,a=e.get("message").map((function(e){return e.split(" ").length})).sum();return[t,a,parseFloat((a/t).toFixed(1)),e.filter(e.get("message").eq("<Media omitted>")).length]},this.generateReplyTimings=function(e){for(var t,a=e.columns,n=a.toArray().length,s=[e.iloc(0,[0,n]).values.toArray()[0].toArray()],r=1,o=e.get("sender"),i=o.length;r<i;r++)o.iloc(r)!==o.iloc(r-1)&&s.push(e.iloc(r,[0,n]).values.toArray()[0].toArray());(e=new T.DataFrame(s)).columns=a.toArray();var l=e.get("sender").iloc(0),c=e.get("sender").iloc(1),m=(e=e.set("reply_timing",e.get("datetime").diff().div(36e5))).filter(e.get("sender").eq(l)),u=e.filter(e.get("sender").eq(c));return t={},Object(g.a)(t,l,[m.get("reply_timing").values.toArray(),m.get("datetime").values.toArray()]),Object(g.a)(t,c,[u.get("reply_timing").values.toArray(),u.get("datetime").values.toArray()]),t},this.generateMessageComments=function(){var e=Math.min(n.sOneMsgCount,n.sTwoMsgCount),t=Math.max(n.sOneMsgCount,n.sTwoMsgCount),a=t-e,s=function(e){return"On average, ".concat(e," sends \ud83e\udd48").concat(parseInt(a/t*100),"% fewer\ud83e\udd48 messages.")},r=function(t){return"On average, ".concat(t," sends \ud83e\udd47").concat(parseInt(a/e*100),"% more\ud83e\udd47 messages.")};n.sOneMsgComment=n.sOneMsgCount>=n.sTwoMsgCount?r(n.sOne):s(n.sOne),n.sTwoMsgComment=n.sTwoMsgCount>=n.sOneMsgCount?r(n.sTwo):s(n.sTwo)},this.generateWordComments=function(){var e=Math.min(n.sOneWordCount,n.sTwoWordCount),t=Math.max(n.sOneWordCount,n.sTwoWordCount),a=t-e,s=function(e){return"".concat(e,", the quieter one in this conversation... by ").concat(parseInt(a/t*100),"%! \ud83d\ude42")},r=function(t){return"Quite a chatty one aren't you, ".concat(t,"! \ud83d\ude09 On average, you were ").concat(parseInt(a/e*100),"% as... verbose!")};n.sOneWordComment=n.sOneWordCount>=n.sTwoWordCount?r(n.sOne):s(n.sOne),n.sTwoWordComment=n.sTwoWordCount>=n.sOneWordCount?r(n.sTwo):s(n.sTwo)},this.generateWPMComments=function(){var e=Math.min(n.sOneWPMCount,n.sTwoWPMCount),t=Math.max(n.sOneWPMCount,n.sTwoWPMCount),a=t-e,s=function(e){return"Obviously the quieter one, ".concat(e,"! \ud83d\ude09 On average, your texts are ").concat(parseInt(a/t*100),"% shorter.")},r=function(t){return"Quite a chatty one aren't you, ".concat(t,"! \ud83d\ude09 On average, your texts are ").concat(parseInt(a/e*100),"% longer.")};n.sOneWPMComment=n.sOneWPMCount>=n.sTwoWPMCount?r(n.sOne):s(n.sOne),n.sTwoWPMComment=n.sTwoWPMCount>=n.sOneWPMCount?r(n.sTwo):s(n.sTwo)},this.generateMediaComments=function(){var e=Math.min(n.sOneMediaCount,n.sTwoMediaCount),t=Math.max(n.sOneMediaCount,n.sTwoMediaCount),a=t-e,s=function(e){return"Perhaps words suit you better, ".concat(e,"! \ud83d\ude09 On average, you sent ").concat(parseInt(a/t*100),"% fewer photos, videos, and stickers!")},r=function(t){return"Maybe you express yourself better with \ud83d\udcf8\ud83d\udcf8\ud83d\udcf8, ".concat(t,"? On average, you sent ").concat(parseInt(a/e*100),"% more photos, videos, and stickers!")};n.sOneMediaComment=n.sOneMediaCount>=n.sTwoMediaCount?r(n.sOne):s(n.sOne),n.sTwoMediaComment=n.sTwoMediaCount>=n.sOneMediaCount?r(n.sTwo):s(n.sTwo)},this.generateAverageRTComments=function(){var e=Math.min(n.sOneAverageRT,n.sTwoAverageRT),t=Math.max(n.sOneAverageRT,n.sTwoAverageRT),a=t-e,s=function(e){return"Always on your phone, I see, ".concat(e,"! \ud83e\udd13 On average, you are ").concat(parseInt(a/t*100),"% quicker to respond!")},r=function(t){return"Quite the busy one, ".concat(t,"! \ud83d\ude0e On average, you take ").concat(parseInt(a/e*100),"% longer to return your texts!")};n.sOneAverageRTComment=n.sOneAverageRT>=n.sTwoAverageRT?r(n.sOne):s(n.sOne),n.sTwoAverageRTComment=n.sTwoAverageRT>=n.sOneAverageRT?r(n.sTwo):s(n.sTwo)},this.generateComments=function(){n.generateMessageComments(),n.generateWordComments(),n.generateWPMComments(),n.generateMediaComments(),n.generateAverageRTComments()},this.rawTextFile=t,this.startDate=null,this.endDate=null,this.sOne=null,this.dfOne=null,this.sOneMsgCount=null,this.sOneWordCount=null,this.sOneWPMCount=null,this.sOneMediaCount=null,this.sOneMsgComment=null,this.sOneWordComment=null,this.sOneWPMComment=null,this.sOneMediaComment=null,this.sOneAverageRTComment=null,this.sOneDatetimes=null,this.sOneTimings=null,this.sOneAverageRT=null,this.sTwo=null,this.dfTwo=null,this.sTwoMsgCount=null,this.sTwoWordCount=null,this.sTwoWPMCount=null,this.sTwoMediaCount=null,this.sTwoMsgComment=null,this.sTwoWordComment=null,this.sTwoWPMComment=null,this.sTwoMediaComment=null,this.sTwoAverageRTComment=null,this.sTwoDatetimes=null,this.sTwoTimings=null,this.sTwoAverageRT=null},C=a(103),v=a.n(C),f=a(73),y=a(105),M=a.n(y),b=a(106),D=a.n(b),E=a(3),x=a.n(E),z=a(107),A=a.n(z),j=a(108),W=a.n(j),k=a(109),N=a.n(k),S=a(110),R=a.n(S),H=a(111),P=a.n(H),B=function(e){var t=function(){c(),d()},a=function(){d(),w()},n=function(){w(),y()},r=function(){y(),z()},o=Object(E.useModali)({animated:!0,centered:!0,large:!0,title:"1. \ud83d\udc4b\ud83d\udc4b Open up any ONE-ON-ONE \ud83d\udcac on WhatsApp",buttons:[s.a.createElement(x.a.Button,{isStyleDefault:!0,label:">",onClick:t})]}),i=Object(O.a)(o,2),l=i[0],c=i[1],m=Object(E.useModali)({animated:!0,centered:!0,large:!0,title:"2. Skip this step if you're able to see all options. \ud83d\ude09",buttons:[s.a.createElement(x.a.Button,{isStyleDefault:!0,label:"<",onClick:t}),s.a.createElement(x.a.Button,{isStyleDefault:!0,label:">",onClick:a})]}),u=Object(O.a)(m,2),p=u[0],d=u[1],h=Object(E.useModali)({animated:!0,centered:!0,large:!0,title:"3. Select the 'Export Chat' option",buttons:[s.a.createElement(x.a.Button,{isStyleDefault:!0,label:"<",onClick:a}),s.a.createElement(x.a.Button,{isStyleDefault:!0,label:">",onClick:n})]}),g=Object(O.a)(h,2),T=g[0],w=g[1],C=Object(E.useModali)({animated:!0,centered:!0,large:!0,title:"4. No media is needed here \ud83e\udd13",buttons:[s.a.createElement(x.a.Button,{isStyleDefault:!0,label:"<",onClick:n}),s.a.createElement(x.a.Button,{isStyleDefault:!0,label:">",onClick:r})]}),v=Object(O.a)(C,2),f=v[0],y=v[1],M=Object(E.useModali)({animated:!0,centered:!0,large:!0,title:"5. Send the exported text file to yourself, and press 'Upload' when you're ready! \ud83d\ude42",buttons:[s.a.createElement(x.a.Button,{isStyleDefault:!0,label:"<",onClick:r}),s.a.createElement(x.a.Button,{isStyleDefault:!0,label:"Upload",onClick:e.uploadOverlayClickHandler})]}),b=Object(O.a)(M,2),D=b[0],z=b[1];return s.a.createElement("div",{className:"app"},s.a.createElement("button",{id:"Main-help-button",onClick:c}),s.a.createElement(x.a.Modal,l,s.a.createElement("img",{alt:"Step 1",src:A.a})),s.a.createElement(x.a.Modal,p,s.a.createElement("img",{alt:"Step 2",src:W.a})),s.a.createElement(x.a.Modal,T,s.a.createElement("img",{alt:"Step 3",src:N.a})),s.a.createElement(x.a.Modal,f,s.a.createElement("img",{alt:"Step 4",src:R.a})),s.a.createElement(x.a.Modal,D,s.a.createElement("img",{alt:"Step 5",src:P.a})))},I=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"Main"},s.a.createElement("header",{className:"Main-header"},s.a.createElement("img",{src:D.a,className:"Main-logo",alt:"logo"}),s.a.createElement("p",null),s.a.createElement("div",null,s.a.createElement("input",{id:"App-upload-button",type:"file",onChange:this.props.uploadBtnClickHandler}),s.a.createElement("button",{className:"Main-button",onClick:this.props.uploadOverlayClickHandler},"Upload"),s.a.createElement("button",{id:"Main-help-button-overlay",className:"Main-button",onClick:this.props.helpBtnClickHandler},"Help"),s.a.createElement(B,{showModal:this.props.showHelp,uploadOverlayClickHandler:this.props.uploadOverlayClickHandler}))))}}]),a}(n.Component),F=a(76),q=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={chartWidth:800,chartHeight:500,sOneData:null,sTwoData:null},e.generateData=function(){e.props.sOne;for(var t=e.props.sOneDatetimes,a=e.props.sOneTimings,n=(e.props.sTwo,e.props.sTwoDatetimes),s=e.props.sTwoTimings,r=[],o=[],i=0;i<Math.min(t.length,a.length);i++)r.push({x:t[i],y:a[i]});for(var l=0;l<Math.min(n.length,s.length);l++)o.push({x:n[l],y:s[l]});e.setState({sOneData:r,sTwoData:o})},e.tooltipScatter=function(e,t){return e=e.toDateString(),"".concat(e," | ").concat(t.toFixed(1)," Hours")},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.generateData()}},{key:"render",value:function(){return this.state.sOneData&&this.state.sTwoData?(console.log(this.state.sOneData),console.log(this.state.sTwoData),s.a.createElement("div",null,s.a.createElement("label",{className:"card-container"},s.a.createElement("input",{type:"checkbox"}),s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"front"},s.a.createElement("div",{className:"Graphing-name"},this.props.sOne),s.a.createElement(F.ScatterPlot,{data:{label:"",values:this.state.sOneData},width:this.state.chartWidth,height:this.state.chartHeight,margin:{top:10,bottom:50,left:50,right:10},tooltipHtml:this.tooltipScatter,xAxis:{label:"Date"},yAxis:{label:"Reply Timing (Hours)"}})),s.a.createElement("div",{className:"back"},s.a.createElement("div",{className:"Graphing-name"},this.props.sTwo),s.a.createElement("div",{className:"ScatterPlot"},s.a.createElement(F.ScatterPlot,{data:{label:"",values:this.state.sTwoData},width:this.state.chartWidth,height:this.state.chartHeight,margin:{top:10,bottom:50,left:50,right:10},tooltipHtml:this.tooltipScatter,xAxis:{label:"Date"},yAxis:{label:"Reply Timing (Hours)"}}))))))):s.a.createElement("div",null,"WAITING...")}}]),a}(n.Component),U=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"Metric-daterange"},"".concat(this.props.startDate," - ").concat(this.props.endDate)),s.a.createElement("div",{className:"left circle-container"},s.a.createElement("div",{className:"circle"},s.a.createElement("div",{className:"front C".concat(this.props.index)},s.a.createElement("p",null,this.props.sOne)),s.a.createElement("div",{className:"back C".concat(this.props.index)},s.a.createElement("div",{className:"metric-qty"},this.props.sOneMetric),s.a.createElement("div",{className:"metric-title"},this.props.title),s.a.createElement("div",{className:"metric-comment"},this.props.sOneComment)))),s.a.createElement("div",{className:"right circle-container"},s.a.createElement("div",{className:"circle"},s.a.createElement("div",{className:"front C".concat(this.props.index)},s.a.createElement("p",null,this.props.sTwo)),s.a.createElement("div",{className:"back C".concat(this.props.index)},s.a.createElement("div",{className:"metric-qty"},this.props.sTwoMetric),s.a.createElement("div",{className:"metric-title"},this.props.title),s.a.createElement("div",{className:"metric-comment"},this.props.sTwoComment)))))}}]),a}(n.Component),_=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return this.props.graphing?s.a.createElement(q,{index:this.props.index,startDate:this.props.startDate,endDate:this.props.endDate,title:this.props.title,sOne:this.props.sOne,sTwo:this.props.sTwo,sOneDatetimes:this.props.sOneDatetimes,sOneTimings:this.props.sOneTimings,sTwoDatetimes:this.props.sTwoDatetimes,sTwoTimings:this.props.sTwoTimings}):s.a.createElement(U,{index:this.props.index,startDate:this.props.startDate,endDate:this.props.endDate,title:this.props.title,sOne:this.props.sOne,sTwo:this.props.sTwo,sOneMetric:this.props.sOneMetric,sTwoMetric:this.props.sTwoMetric,sOneComment:this.props.sOneComment,sTwoComment:this.props.sTwoComment})}}]),a}(n.Component),G=a(112),J=a.n(G),K=a(113),Q=a.n(K),Y=a(114),L=a.n(Y),X=a(115),$=a.n(X),V=a(116),Z=a.n(V),ee=a(117),te=a.n(ee);function ae(){var e=Object(i.a)(["\n                position: relative;\n                margin: 0 auto;\n                margin-left: 46vw;\n                margin-top: -70vh;\n                "]);return ae=function(){return e},e}var ne=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={uploadedFile:null,rawText:null,analyzer:null,showHelp:!0,showMain:!0,showMetric:!1},e.uploadOverlayClickHandler=function(e){document.getElementById("App-upload-button").click()},e.uploadBtnClickHandler=function(t){e.setState({uploadedFile:t.target.files[0]})},e.helpBtnClickHandler=function(t){e.setState({showHelp:!0}),document.getElementById("Main-help-button").click()},e.generateRawText=function(){var t=new FileReader;t.onload=function(t){e.setState({rawText:t.target.result})},t.readAsText(e.state.uploadedFile)},e.generateAnalyzer=Object(m.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=new w(e.state.rawText),t.next=3,a.startPipeline();case 3:e.setState({analyzer:a,showMetric:!0,showMain:!1});case 4:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(a,[{key:"componentDidUpdate",value:function(e,t,a){!this.state.analyzer&&this.state.rawText?this.generateAnalyzer():!this.state.rawText&&this.state.uploadedFile&&this.generateRawText()}},{key:"render",value:function(){if(this.state.analyzer&&this.state.showMetric)return s.a.createElement("div",{className:"Metric"},s.a.createElement(v.a,{animation:"cubeAnimation"},s.a.createElement("div",{className:"Metric-bg","data-src":J.a},s.a.createElement(_,{index:"1",startDate:this.state.analyzer.startDate,endDate:this.state.analyzer.endDate,title:"Messages",sOne:this.state.analyzer.sOne,sTwo:this.state.analyzer.sTwo,sOneMetric:this.state.analyzer.sOneMsgCount,sTwoMetric:this.state.analyzer.sTwoMsgCount,sOneComment:this.state.analyzer.sOneMsgComment,sTwoComment:this.state.analyzer.sTwoMsgComment})),s.a.createElement("div",{className:"Metric-bg","data-src":Q.a},s.a.createElement(_,{index:"2",startDate:this.state.analyzer.startDate,endDate:this.state.analyzer.endDate,title:"Words",sOne:this.state.analyzer.sOne,sTwo:this.state.analyzer.sTwo,sOneMetric:this.state.analyzer.sOneWordCount,sTwoMetric:this.state.analyzer.sTwoWordCount,sOneComment:this.state.analyzer.sOneWordComment,sTwoComment:this.state.analyzer.sTwoWordComment})),s.a.createElement("div",{className:"Metric-bg","data-src":L.a},s.a.createElement(_,{index:"3",startDate:this.state.analyzer.startDate,endDate:this.state.analyzer.endDate,title:"Words per message",sOne:this.state.analyzer.sOne,sTwo:this.state.analyzer.sTwo,sOneMetric:this.state.analyzer.sOneWPMCount,sTwoMetric:this.state.analyzer.sTwoWPMCount,sOneComment:this.state.analyzer.sOneWPMComment,sTwoComment:this.state.analyzer.sTwoWPMComment})),s.a.createElement("div",{className:"Metric-bg","data-src":$.a},s.a.createElement(_,{index:"4",startDate:this.state.analyzer.startDate,endDate:this.state.analyzer.endDate,title:"Media",sOne:this.state.analyzer.sOne,sTwo:this.state.analyzer.sTwo,sOneMetric:this.state.analyzer.sOneMediaCount,sTwoMetric:this.state.analyzer.sTwoMediaCount,sOneComment:this.state.analyzer.sOneMediaComment,sTwoComment:this.state.analyzer.sTwoMediaComment})),s.a.createElement("div",{className:"Metric-bg","data-src":Z.a},s.a.createElement(_,{index:"7",startDate:this.state.analyzer.startDate,endDate:this.state.analyzer.endDate,title:"Average Reply Timing (Hours)",sOne:this.state.analyzer.sOne,sTwo:this.state.analyzer.sTwo,sOneMetric:this.state.analyzer.sOneAverageRT,sTwoMetric:this.state.analyzer.sTwoAverageRT,sOneComment:this.state.analyzer.sOneAverageRTComment,sTwoComment:this.state.analyzer.sTwoAverageRTComment})),s.a.createElement("div",{className:"Metric-bg","data-src":te.a},s.a.createElement(_,{graphing:!0,index:"8",startDate:this.state.analyzer.startDate,endDate:this.state.analyzer.endDate,title:"Reply Timing Chart",sOne:this.state.analyzer.sOne,sTwo:this.state.analyzer.sTwo,sOneDatetimes:this.state.analyzer.sOneDatetimes,sOneTimings:this.state.analyzer.sOneTimings,sTwoDatetimes:this.state.analyzer.sTwoDatetimes,sTwoTimings:this.state.analyzer.sTwoTimings}))));if(this.state.showMain){var e=Object(f.css)(ae());return s.a.createElement("div",null,s.a.createElement(I,{uploadBtnClickHandler:this.uploadBtnClickHandler,uploadOverlayClickHandler:this.uploadOverlayClickHandler,helpBtnClickHandler:this.helpBtnClickHandler,showHelp:this.state.showHelp}),this.state.uploadedFile&&s.a.createElement(M.a,{css:e,size:30,color:"#1B1464"}))}}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var se=a(118);a.n(se).a.initializeApp({apiKey:"AIzaSyC5dwq14duK6nYbwSwYKjOEs8_A97Ho7wU",authDomain:"telestat-817a8.firebaseapp.com",databaseURL:"https://telestat-817a8.firebaseio.com",projectId:"telestat-817a8",storageBucket:"telestat-817a8.appspot.com",messagingSenderId:"433175668589",appId:"1:433175668589:web:4c07351901f9e195239c64",measurementId:"G-Y8JW90LD8X"}),o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},77:function(e,t,a){}},[[119,1,2]]]);
//# sourceMappingURL=main.474554e2.chunk.js.map