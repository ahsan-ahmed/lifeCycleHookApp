(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(7),s=n.n(r),i=(n(15),n(1)),l=n(2),u=n(4),c=n(3),p=n(5),d=n(8),h=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(u.a)(this,Object(c.a)(e).call(this,t))).state={volume:null,emotion:"nervous",danceSteps:[],currentStepIndex:0,startedPerforming:!0},n}return Object(p.a)(e,t),Object(l.a)(e,[{key:"qualified",value:function(){this.setState(function(t){return{startedPerforming:!t.startedPerforming}}),console.log("this.state.startedPerforming",this.state.startedPerforming),this.props.kidUnmount(!0)}},{key:"componentDidMount",value:function(){this.setState(function(){return{danceSteps:["step1","step2"]}}),console.log("32")}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount------\x3e>>")}},{key:"componentDidUpdate",value:function(t,e){var n=this;console.log("prevProps,prevState",t,e),t.stopStars!==this.state.stars&&(this.qualified(),this.setState({stars:0},function(){return console.log(n.state.stars)}))}},{key:"render",value:function(){var t=this;console.log("this.state.stars",this.state.stars);var e=this.props.dressColor,n=this.state,a=n.danceSteps,r=n.emotion,s=n.startedPerforming,i=n.currentStepIndex;return o.a.createElement("div",null,o.a.createElement("div",null,"dressColor: ",e),o.a.createElement("div",{style:{backgroundColor:e,width:50,height:50}}),o.a.createElement("div",null,"Emotion: ",r),s&&o.a.createElement("div",null,o.a.createElement("div",null,"Current Step: ",a[i]),o.a.createElement("button",{style:{height:40,marginTop:20},onClick:function(){return t.setState({currentStepIndex:i+1})}},"Perform Next Step")))}}],[{key:"getDerivedStateFromProps",value:function(t,e){console.log("kidProps",t);var n=t.pushDanceSteps;return console.log("props.stopStars",t.stopStars),{volume:t.changeVolume,danceSteps:Object(d.a)(e.danceSteps.concat(n)),emotion:t.applaudStatus||e.emotion,stars:t.stopStars}}}]),e}(o.a.Component);h.defaultProps={dressColor:"red",applaud:!1,furtherSteps:[]};var m=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(c.a)(e)).call.apply(t,[this].concat(o)))).sendDataToKid=function(){n.props.getNextSteps(["step3","step4","step5"])},n}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement("button",{style:{height:40,marginTop:20},onClick:this.sendDataToKid},"Get Help From Teacher")}}]),e}(o.a.Component),v=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(u.a)(this,Object(c.a)(e).call(this))).state={stars:0,available:!1},t}return Object(p.a)(e,t),Object(l.a)(e,[{key:"applaud",value:function(){this.props.applaudStatus()}},{key:"provideStars",value:function(){var t=this.state.stars;this.setState({stars:t+1}),5===t&&this.props.takeStars(t)}},{key:"shouldComponentUpdate",value:function(){return this.state.stars<5}},{key:"render",value:function(){var t=this.state,e=t.stars,n=t.available;return o.a.createElement("div",null,o.a.createElement("button",{type:"button",style:{height:40,marginTop:20},onClick:this.applaud.bind(this)},"Appreciate performance"),o.a.createElement("button",{style:{height:40,marginTop:20},type:"button",onClick:this.provideStars.bind(this)},"Provide stars"),"Kid is available: ",n,"Stars gained: ",e)}}]),e}(o.a.Component),f=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(c.a)(e)).call.apply(t,[this].concat(o)))).state={volume:5,kidMounted:!0},n.nextSteps=function(t){console.log("mill rha he ",t),n.setState({danceStep:t})},n.applaudFunc=function(){n.setState({emotion:"happy"})},n.takeStarFunc=function(t){n.setState({star:t},function(){})},n.kidUnmountFunc=function(t){n.setState({kidUnmountBool:t},function(){return console.log(t)})},n.onChangeKidMounted=function(){n.setState(function(t){return{kidMounted:!t.kidMounted}})},n}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.state,e=t.volume,n=t.danceStep,a=t.emotion,r=t.kidUnmountBool,s="";return this.state.kidMounted&&(s=o.a.createElement("div",null,o.a.createElement(h,{dressColor:"yellow",changeVolume:e,pushDanceSteps:n,applaudStatus:a,stopStars:this.state.star,kidUnmount:this.kidUnmountFunc}),o.a.createElement(v,{applaudStatus:this.applaudFunc,takeStars:this.takeStarFunc}))),o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"helloworld"),o.a.createElement(m,{getNextSteps:this.nextSteps}),s,o.a.createElement("br",null),r&&o.a.createElement("button",{style:{height:40,marginTop:20},onClick:this.onChangeKidMounted},"Ask the Kid to Leave the Show !!!"))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,n){t.exports=n(17)}},[[9,2,1]]]);
//# sourceMappingURL=main.80592f5f.chunk.js.map