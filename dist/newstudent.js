!function(e){function t(t){for(var r,i,u=t[0],l=t[1],c=t[2],f=0,h=[];f<u.length;f++)i=u[f],o[i]&&h.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);h.length;)h.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={4:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var s=l;a.push([148,0]),n()}({148:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(3),i=n.n(a),u=n(2);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function h(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(e){var n;return c(this,t),(n=h(this,p(t).call(this,e))).state={submitted:!1,currentUser:"",beltColor:"",contractType:"",firstName:"",lastName:""},fetch(u.a.host+"/getCurrentUser",{method:"GET",credentials:"include",mode:"cors"}).then(function(e){return e.text()}).then(function(e){console.log(e),0==e.length&&(window.location.href="index.html"),n.setState({currentUser:e})}),n}return d(t,o.a.Component),f(t,[{key:"handleClick",value:function(e){var t=this;e.preventDefault(),e.target.reset(),this.setState({submitted:!0});var n="?userid="+this.state.currentUser+"&beltColor="+this.state.beltColor+"&contractType="+this.state.contractType+"&firstName="+this.state.firstName+"&lastName="+this.state.lastName;fetch(u.a.host+"/enterStudentInformation"+n,{method:"POST",credentials:"include",mode:"cors"}).then(function(e){return e.json()}).then(function(e){return console.log(e)}).then(function(){t.setState({submitted:!0})})}},{key:"handleBeltChange",value:function(e){this.setState({beltColor:e.target.value})}},{key:"handleFirstChange",value:function(e){this.setState({firstName:e.target.value})}},{key:"handleLastChange",value:function(e){this.setState({lastName:e.target.value})}},{key:"handleContractChange",value:function(e){this.setState({contractType:e.target.value})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.handleClick.bind(this)},o.a.createElement("input",{type:"text",placeholder:"First Name",onChange:this.handleFirstChange.bind(this)}),o.a.createElement("input",{type:"text",placeholder:"Last Name",onChange:this.handleLastChange.bind(this)}),o.a.createElement("select",{onChange:this.handleBeltChange.bind(this)},o.a.createElement("option",{value:"WHITE"},"WHITE"),o.a.createElement("option",{value:"ORANGE"},"ORANGE"),o.a.createElement("option",{value:"YELLOW"},"YELLOW"),o.a.createElement("option",{value:"GREEN"},"GREEN"),o.a.createElement("option",{value:"BLUE"},"BLUE"),o.a.createElement("option",{value:"BROWN"},"BROWN"),o.a.createElement("option",{value:"RED"},"RED"),o.a.createElement("option",{value:"REDDOUBLESTRIPE"},"REDDOUBLESTRIPE"),o.a.createElement("option",{value:"REDBLACK"},"REDBLACK"),o.a.createElement("option",{value:"BLACK"},"BLACK")),o.a.createElement("input",{type:"text",placeholder:"Contract Type",onChange:this.handleContractChange.bind(this)}),o.a.createElement("input",{type:"submit"}),o.a.createElement(y,{success:this.state.submitted,name:this.state.firstName+" "+this.state.lastName})))}}]),t}(),y=function(e){function t(e){return c(this,t),h(this,p(t).call(this,e))}return d(t,o.a.Component),f(t,[{key:"render",value:function(){return this.props.success?o.a.createElement("h3",null,"Success! You've added ",this.props.name,". Add another student"):o.a.createElement("div",null)}}]),t}();i.a.render(o.a.createElement(b,null),document.getElementById("new-student"))},2:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={host:"https://blackbeltusa.us-east-1.elasticbeanstalk.com"}}});