!function(root,factory){if("object"==typeof exports&&"object"==typeof module)module.exports=factory(require("react"));else if("function"==typeof define&&define.amd)define(["react"],factory);else{var a=factory("object"==typeof exports?require("react"):root.react);for(var i in a)("object"==typeof exports?exports:root)[i]=a[i]}}(this,function(__WEBPACK_EXTERNAL_MODULE_1__){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_icons=__webpack_require__(3),_icons2=_interopRequireDefault(_icons),_Progress=__webpack_require__(2),_Progress2=_interopRequireDefault(_Progress),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_VideoActions=__webpack_require__(4),_VideoActions2=_interopRequireDefault(_VideoActions),_VideoEventHandler=__webpack_require__(5),_VideoEventHandler2=_interopRequireDefault(_VideoEventHandler),_video=__webpack_require__(10),_VideoUtils=(_interopRequireDefault(_video),__webpack_require__(6)),_VideoUtils2=_interopRequireDefault(_VideoUtils),Video=function(_React$Component){function Video(){_classCallCheck(this,Video);var _this=_possibleConstructorReturn(this,(Video.__proto__||Object.getPrototypeOf(Video)).call(this));return _this.onMetaDataLoaded=function(e){var isIE=_this.videoUtils.isIE();_this.setState({isIE:isIE},function(){isIE?(_this.videoUtils.disableControls(),_this.videoUtils.moveOverlay()):_this.videoUtils.enableControls(),_this.videoUtils.enableOverlay(),_this.setState({loaded:!0})})},_this.onTimeUpdate=function(e){var _e$target=e.target,currentTime=_e$target.currentTime,duration=_e$target.duration,progress=_this.videoUtils.calculatePercentage(currentTime,duration),time=_this.videoUtils.formatTimeFromSeconds(currentTime);_this.setState({progress:progress,time:time,currentTime:currentTime})},_this.onProgressChange=function(e){var progress=parseFloat(e.target.value);_this.setState({progress:progress},function(){var duration=_this._video.duration,time=progress*duration/100;_this._video.currentTime=time})},_this.onVolumeSet=function(e){var volume=parseFloat(e.target.value);_this.videoActions.setVolume(volume)},_this.checkBuffer=function(){var buffer=_this.videoUtils.calculateBuffer();_this.setState({buffer:buffer})},_this.referenceVideoTag=function(video){_this._video=video,_this.eventHandler.attachListeners(),_this.eventHandler.createListeners(),_this.bufferCheckTimer=setInterval(_this.checkBuffer,500),_this.fullscreenCheckTimer=setInterval(_this.checkFullscreen,500)},_this.checkFullscreen=function(){var fullscreen=_this.videoUtils.isFullscreen();void 0!==fullscreen&&_this.setState({fullscreen:fullscreen})},_this.onMouseMove=function(e){_this.triggerMouseMove()},_this.triggerMouseMove=function(){if(_this.state.loaded){if(!_this.props.autohide)return;_this.props.controls&&!_this.props.attributes.controls&&(_this._controlsWrapper.style.opacity="1"),_this.props.overlay&&(_this._overlay.style.opacity="1"),_this._wrapper.style.cursor="auto",_this.hideTimer&&clearTimeout(_this.hideTimer),_this.hideTimer=setTimeout(function(){_this.state.playing&&(_this._controlsWrapper.style.opacity="0",_this.props.overlay&&!_this.props.fixedoverlay&&(_this._overlay.style.opacity="0"),_this.props.autohidecursor&&(_this._wrapper.style.cursor="none"))},3e3)}},_this.onPlay=function(e){_this.setState({playing:!0},function(){_this.triggerMouseMove()})},_this.onPause=function(e){_this.setState({playing:!1},function(){_this.triggerMouseMove()})},_this.onVolumeChange=function(e){var volume=parseInt(100*e.target.volume)/100;_this.setState({volume:volume})},_this.onFullscreenSet=function(e){_this.videoActions.goFullscreen(_this._wrapper)},_this.onDefaultscreenSet=function(e){_this.videoActions.exitFullscreen()},_this.onWheel=function(e){e.deltaY<0?_this.videoActions.volumeUp():_this.videoActions.volumeDown()},_this.onKeyDown=function(e){if(_this.props.shortcuts){var keyCode=e.keyCode;switch(keyCode){case 32:_this.videoActions.togglePlay();break;case 39:_this.videoActions.forward();break;case 37:_this.videoActions.back();break;case 38:_this.videoActions.volumeUp();break;case 40:_this.videoActions.volumeDown();break;case 70:_this.videoActions.toggleFullscreen();break;case 77:_this.videoActions.toggleMute()}}},_this.eventHandler=new _VideoEventHandler2.default(_this),_this.videoUtils=new _VideoUtils2.default(_this),_this.videoActions=new _VideoActions2.default(_this),_this.state={buffer:0,progress:0,volume:1,fullscreen:!1,time:"00:00:00",playing:!1,loaded:!1,isIE:!1,currentTime:0},_this.bufferCheckTimer={},_this.fullscreenCheckTimer={},_this}return _inherits(Video,_React$Component),_createClass(Video,[{key:"componentWillUnmount",value:function(){var video=this._video;video&&(this.eventHandler.removeListeners(),this.eventHandler.detachListeners(),clearInterval(this.bufferCheckTimer),clearInterval(this.fullscreenCheckTimer))}},{key:"render",value:function(){var _this2=this,sources=this.props.sources.map(function(source){return"string"==typeof source?{src:source}:"object"==("undefined"==typeof source?"undefined":_typeof(source))?(void 0!==source.src&&"string"==typeof source.src||console.error("Source must be a string or an object containing a 'src' key.\n",source),source):void 0}),videoProps=this.props.attributes;return this.state.isIE&&(videoProps.controls=!0),_react2.default.createElement("div",{className:"reactVideoWrapper",onMouseMove:this.onMouseMove,tabIndex:this.props.tabIndex,onKeyDown:this.onKeyDown,onWheel:this.onWheel,ref:function(_ref10){return _this2._wrapper=_ref10}},_react2.default.createElement("div",{className:"overlayContainer",onMouseMove:this.onMouseMove,onDoubleClick:this.videoActions.toggleFullscreen,ref:function(_ref){return _this2._overlay=_ref},style:{display:this.props.overlay?"block":"none"}},this.props.children),_react2.default.createElement("video",_extends({className:""+this.props.className,onMouseMove:this.onMouseMove,onDoubleClick:this.videoActions.toggleFullscreen,ref:this.referenceVideoTag,style:this.props.style,width:this.props.width,height:this.props.height},videoProps),sources.map(function(s,i){return _react2.default.createElement("source",{key:i,src:s.src,type:s.type||null})})),_react2.default.createElement("div",{ref:function(_ref9){return _this2._controlsWrapper=_ref9},style:this.props.style.controlsWrapper||{},className:"controlsWrapper"},_react2.default.createElement("div",{className:"seekBar"},_react2.default.createElement(_Progress2.default,{ref:function(_ref2){return _this2._progress=_ref2},value:this.state.progress,className:"progress",attributes:{onChange:this.onProgressChange}}),_react2.default.createElement(_Progress2.default,{ref:function(_ref3){return _this2._buffer=_ref3},value:this.state.buffer,className:"buffer",colors:{start:"#777",end:"#666",back:"#000"},attributes:{readOnly:!0}})),_react2.default.createElement("div",{className:"playButton",ref:function(_ref4){return _this2._play=_ref4},onClick:this.videoActions.play,style:{display:this.state.playing?"none":"block"}},_icons2.default.play),_react2.default.createElement("div",{className:"pauseButton",ref:function(_ref5){return _this2._pause=_ref5},onClick:this.videoActions.pause,style:{display:this.state.playing?"block":"none"}},_icons2.default.pause),_react2.default.createElement("div",{className:"muteButton",ref:function(_ref6){return _this2._muteButton=_ref6},onClick:this.videoActions.mute},_icons2.default.volume),_react2.default.createElement("div",{className:"unmuteButton",ref:function(_ref7){return _this2._unmuteButton=_ref7},onClick:this.videoActions.unmute},_icons2.default.mute),_react2.default.createElement("div",{className:"volumeBar"},_react2.default.createElement(_Progress2.default,{min:"0",max:"1",step:"any",ref:function(_ref8){return _this2._volume=_ref8},value:this.state.volume,attributes:{onChange:this.onVolumeSet},colors:{start:"#FFF",end:"#FFF",back:"rgba( 0, 0, 0, 0.3 )"},className:"volume"})),_react2.default.createElement("div",{className:"time"},this.state.time),_react2.default.createElement("div",{className:"fullscreenButton",onClick:this.onFullscreenSet,style:{display:this.state.fullscren?"none":"block"}},_icons2.default.fullscreen),_react2.default.createElement("div",{className:"defaultscreenButton",onClick:this.onDefaultscreenSet,style:{display:this.state.fullscreen?"block":"none"}},_icons2.default.defaultscreen)))}}]),Video}(_react2.default.Component);Video.propTypes={sources:_react2.default.PropTypes.array.isRequired,style:_react2.default.PropTypes.object,width:_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string,_react2.default.PropTypes.number]),height:_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string,_react2.default.PropTypes.number]),className:_react2.default.PropTypes.string,attributes:_react2.default.PropTypes.object,controls:_react2.default.PropTypes.bool,autohide:_react2.default.PropTypes.bool,autohidecursor:_react2.default.PropTypes.bool,overlay:_react2.default.PropTypes.bool,fixedoverlay:_react2.default.PropTypes.bool,shortcuts:_react2.default.PropTypes.bool,tabIndex:_react2.default.PropTypes.string},Video.defaultProps={sources:[],style:{},className:"",attributes:{},controls:!0,autohide:!0,autohidecursor:!0,overlay:!0,fixedoverlay:!1,width:"auto",height:"100%",shortcuts:!0,tabIndex:"1"},exports.default=Video},function(module,exports){module.exports=require("react")},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),Progress=function(_React$Component){function Progress(){return _classCallCheck(this,Progress),_possibleConstructorReturn(this,(Progress.__proto__||Object.getPrototypeOf(Progress)).call(this))}return _inherits(Progress,_React$Component),_createClass(Progress,[{key:"componentWillMount",value:function(){var colors=this.props.colors;colors.start&&colors.end&&colors.back||console.error('Colors prop must have "start", "end" and "back" attributes.')}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var _this2=this,value=100/parseInt(this.props.max)*this.props.value,style={backgroundImage:"linear-gradient(to right, "+this.props.colors.start+" 0%, "+this.props.colors.end+" "+value+"%, "+this.props.colors.back+" "+value+"%, "+this.props.colors.back+" )"};return _react2.default.createElement("input",_extends({type:"range",step:this.props.step,min:this.props.min,max:this.props.max,value:this.props.value,className:this.props.className,style:style,ref:function(_ref){return _this2._progress=_ref}},this.props.attributes))}}]),Progress}(_react2.default.Component);Progress.propTypes={step:_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number,_react2.default.PropTypes.string]),min:_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number,_react2.default.PropTypes.string]),max:_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number,_react2.default.PropTypes.string]),value:_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number,_react2.default.PropTypes.string]),className:_react2.default.PropTypes.string,attributes:_react2.default.PropTypes.object,colors:_react2.default.PropTypes.object},Progress.defaultProps={step:.1,min:0,max:100,value:0,className:"",attributes:{},colors:{start:"#A90329",end:"#6D0019",back:"rgba( 0, 0, 0, 0.4 )"}},exports.default=Progress},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(1),_react2=_interopRequireDefault(_react),icons={play:_react2.default.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},_react2.default.createElement("path",{d:"M8 5v14l11-7z",fill:"white"})),pause:_react2.default.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},_react2.default.createElement("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z",fill:"white"})),fullscreen:_react2.default.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},_react2.default.createElement("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z",fill:"white"})),defaultscreen:_react2.default.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},_react2.default.createElement("path",{d:"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z",fill:"white"})),volume:_react2.default.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},_react2.default.createElement("path",{d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z",fill:"white"})),mute:_react2.default.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},_react2.default.createElement("path",{d:"M7 9v6h4l5 5V4l-5 5H7z",fill:"white"}))};exports.default=icons},function(module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var VideoActions=function VideoActions(videoComponent){var _this=this;_classCallCheck(this,VideoActions),this.play=function(){_this.videoComponent._video&&_this.videoComponent._video.play()},this.pause=function(){_this.videoComponent._video&&_this.videoComponent._video.pause()},this.mute=function(){_this.videoComponent._video&&(_this.beforeMute=_this.videoComponent.state.volume,_this.videoComponent.setState({volume:0},function(){_this.muted=!0,_this.videoComponent._video.volume=0,_this.videoComponent._muteButton.style.display="none",_this.videoComponent._unmuteButton.style.display="block"}))},this.unmute=function(){if(_this.videoComponent._video){var volume=_this.beforeMute||1;_this.videoComponent.setState({volume:volume},function(){_this.muted=!1,_this.videoComponent._video.volume=volume,_this.videoComponent._muteButton.style.display="block",_this.videoComponent._unmuteButton.style.display="none"})}},this.volumeUp=function(){var volume=_this.videoComponent.state.volume;volume>=1||(volume+=.1,_this.setVolume(volume))},this.volumeDown=function(){var volume=_this.videoComponent.state.volume;volume<=0||(volume-=.1,_this.setVolume(volume))},this.setVolume=function(volume){_this.videoComponent.setState({volume:volume},function(){_this.videoComponent._video.volume=volume})},this.back=function(){if(_this.videoComponent._video){var _videoComponent$_vide=_this.videoComponent._video,currentTime=_videoComponent$_vide.currentTime,duration=_videoComponent$_vide.duration,newTime=0;currentTime-5>0&&(newTime=currentTime-5),_this.videoComponent._video.currentTime=newTime;var progress=newTime/duration*100;_this.videoComponent.setState({progress:progress},function(){_this.videoComponent.onTimeUpdate({target:_this.videoComponent._video})})}},this.forward=function(){if(_this.videoComponent._video){var _videoComponent$_vide2=_this.videoComponent._video,currentTime=_videoComponent$_vide2.currentTime,duration=_videoComponent$_vide2.duration,newTime=duration;currentTime+5<duration&&(newTime=currentTime+5),_this.videoComponent._video.currentTime=newTime;var progress=newTime/duration*100;_this.videoComponent.setState({progress:progress},function(){_this.videoComponent.onTimeUpdate({target:_this.videoComponent._video})})}},this.goFullscreen=function(element){return element.requestFullscreen?element.requestFullscreen():element.msRequestFullscreen?element.msRequestFullscreen():element.mozRequestFullScreen?element.mozRequestFullScreen():element.webkitRequestFullscreen?element.webkitRequestFullscreen():void _this.videoComponent.setState({fullscreen:!0})},this.exitFullscreen=function(){return document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():void _this.videoComponent.setState({fullscreen:!1})},this.toggleFullscreen=function(){_this.videoComponent.state.fullscreen?_this.videoComponent.onDefaultscreenSet({}):_this.videoComponent.onFullscreenSet({})},this.toggleMute=function(){_this.muted?_this.unmute():_this.mute()},this.togglePlay=function(){_this.videoComponent.state.playing?_this.pause():_this.play()},this.videoComponent=videoComponent};exports.default=VideoActions},function(module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),VideoEventHandler=function(){function VideoEventHandler(videoComponent){_classCallCheck(this,VideoEventHandler),this.eventListeners=[],this.events=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","timeupdate","volumechange","waiting"],this.videoComponent=videoComponent}return _createClass(VideoEventHandler,[{key:"attachListeners",value:function(){var video=this.videoComponent._video;video.addEventListener("loadedmetadata",this.videoComponent.onMetaDataLoaded),video.addEventListener("timeupdate",this.videoComponent.onTimeUpdate),video.addEventListener("play",this.videoComponent.onPlay),video.addEventListener("pause",this.videoComponent.onPause),video.addEventListener("volumechange",this.videoComponent.onVolumeChange)}},{key:"detachListeners",value:function(){var video=this.videoComponent._video;video.removeEventListener("loadedmetadata",this.videoComponent.onMetaDataLoaded),video.removeEventListener("timeupdate",this.videoComponent.onTimeUpdate),video.removeEventListener("play",this.videoComponent.onPlay),video.removeEventListener("pause",this.videoComponent.onPause),video.removeEventListener("volumechange",this.videoComponent.onVolumeChange)}},{key:"createListeners",value:function(){var _this=this;this.eventListeners=[],this.events.map(function(eventName){var listener=function(event){"function"==typeof _this.videoComponent.props[eventName]&&_this.videoComponent.props[eventName](event)};_this.videoComponent._video.addEventListener(eventName,listener),_this.eventListeners.push({event:eventName,listener:listener})})}},{key:"removeListeners",value:function(){for(var i=0;i<this.eventListeners.length;i++)this.videoComponent._video.removeEventListener(this.eventListeners[i].event,this.eventListeners[i].listener);this.eventListeners=[]}}]),VideoEventHandler}();exports.default=VideoEventHandler},function(module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),VideoUtils=function(){function VideoUtils(videoComponent){_classCallCheck(this,VideoUtils),this.videoComponent=videoComponent}return _createClass(VideoUtils,[{key:"formatTimeFromSeconds",value:function(seconds){seconds=parseInt(seconds);var hours=parseInt(seconds/3600);seconds-=3600*hours;var minutes=parseInt(seconds/60);seconds-=60*minutes;var time=(hours>9?hours:"0"+hours)+":"+(minutes>9?minutes:"0"+minutes)+":"+(seconds>9?seconds:"0"+seconds);return time}},{key:"calculatePercentage",value:function(fraction,total){var percentage=parseInt(fraction/total*100*100)/100;return percentage}},{key:"isIE",value:function(){var UA=window.navigator.userAgent;return!!(UA.match(/MSIE/i)||UA.match(/Edge/i)||UA.match(/Trident\//i))}},{key:"disableControls",value:function(){this.videoComponent._controlsWrapper.style.display="none"}},{key:"enableControls",value:function(){this.videoComponent.props.attributes.controls&&(this.videoComponent._controlsWrapper.style.display="none"),this.videoComponent.props.controls&&(this.videoComponent._controlsWrapper.style.opacity="1")}},{key:"moveOverlay",value:function(){this.videoComponent._overlay.style.bottom="65px"}},{key:"enableOverlay",value:function(){this.videoComponent.props.overlay&&(this.videoComponent._overlay.style.opacity="1")}},{key:"calculateBuffer",value:function(){if(!this.videoComponent._video)return 0;if(this.lastBuffered||(this.lastBuffered=0),this.videoComponent._video.buffered.length<1)return 0;var buffered=this.videoComponent._video.buffered.end(this.videoComponent._video.buffered.length-1);if(!this.videoComponent._video.duration)return 0;this.lastBuffered=buffered;var duration=this.videoComponent._video.duration,percentage=parseInt(buffered/duration*100);return percentage}},{key:"isFullscreen",value:function isFullscreen(){var isFullscreen=void 0;return void 0!==document.webkitIsFullScreen?isFullscreen=document.webkitIsFullScreen:void 0!==document.fullscreenElement?isFullscreen=null!==document.fullscreenElement:void 0!==document.msFullscreenElement&&(isFullscreen=null!==document.msFullscreenElement),isFullscreen}}]),VideoUtils}();exports.default=VideoUtils},function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(8)(),exports.push([module.id,".reactVideoWrapper{display:inline-block;position:relative;vertical-align:middle;margin:0 auto;line-height:100%;background:#000;width:100%;height:100%;max-width:100%;max-height:100%;outline:none}.reactVideoWrapper .overlayContainer{position:absolute;top:0;left:0;bottom:0;right:0;z-index:2;text-align:left;transition:opacity .5s;opacity:0}.reactVideoWrapper video{max-width:100%;max-height:100%;z-index:1}.reactVideoWrapper video::-webkit-media-controls{z-index:2}.reactVideoWrapper .controlsWrapper{position:absolute;bottom:0;left:0;right:0;height:40px;background-color:#000;transition:opacity .5s;opacity:0;z-index:2147483647}.reactVideoWrapper .controlsWrapper .seekBar .buffer{position:absolute;left:0;top:0;right:0;width:100%;height:8px;z-index:1;margin:0;background-color:#666}.reactVideoWrapper .controlsWrapper .seekBar .progress{position:absolute;left:0;top:0;right:0;width:100%;height:8px;z-index:2;margin:0;background-color:transparent;background-image:rgba(0,0,0,.4);box-shadow:inset 0 0 6px #000}.reactVideoWrapper .controlsWrapper .pauseButton,.reactVideoWrapper .controlsWrapper .playButton{width:24px;height:24px;position:absolute;left:5px;bottom:5px;cursor:pointer}.reactVideoWrapper .controlsWrapper .pauseButton{display:none}.reactVideoWrapper .controlsWrapper .muteButton,.reactVideoWrapper .controlsWrapper .unmuteButton{width:24px;height:24px;position:absolute;left:34px;bottom:5px;cursor:pointer}.reactVideoWrapper .controlsWrapper .unmuteButton{display:none}.reactVideoWrapper .controlsWrapper .volumeBar{position:absolute;width:100px;height:5px;bottom:14px;left:65px;background:#000}.reactVideoWrapper .controlsWrapper .volume{position:absolute;left:0;top:0;right:0;width:100%;height:5px;margin:0;padding:0;background-color:transparent;background-image:rgba(0,0,0,.4);box-shadow:inset 0 0 3px #444}.reactVideoWrapper .controlsWrapper .volume::-ms-fill-lower{background:#222}.reactVideoWrapper .controlsWrapper .volume::-ms-fill-upper{background:#eee}.reactVideoWrapper .controlsWrapper .time{width:100px;height:24px;position:absolute;right:35px;top:8px;bottom:0;font-family:Helvetica Neue,Segoe UI,arial,sans-serif;font-size:14px;font-weight:300;color:#fff;line-height:30px;text-align:right}.reactVideoWrapper .controlsWrapper .defaultscreenButton,.reactVideoWrapper .controlsWrapper .fullscreenButton{width:24px;height:24px;position:absolute;right:5px;bottom:5px;cursor:pointer}.reactVideoWrapper .controlsWrapper .defaultscreenButton{display:none}.reactVideoWrapper input[type=range]{-webkit-appearance:none}.reactVideoWrapper input[type=range]:focus{outline:none}.reactVideoWrapper input[type=range]::-webkit-slider-runnable-track{cursor:pointer;transition:all .2s ease}.reactVideoWrapper input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;border:1px solid transparent;height:5px;width:0;border-radius:0;background:transparent;cursor:pointer}.reactVideoWrapper input[type=range]::-moz-range-track{cursor:pointer;transition:all .2s ease;width:100%;height:8px;background:transparent}.reactVideoWrapper input[type=range]::-moz-range-thumb{height:5px;width:0;background:transparent;cursor:pointer;border:1px solid transparent}.reactVideoWrapper input[type=range]::-ms-track{cursor:pointer;transition:all .2s ease;color:transparent;width:100%;height:8px;background:transparent}.reactVideoWrapper input[type=range]::-ms-thumb{height:5px;width:0;background:transparent;cursor:pointer}",""])},function(module,exports){module.exports=function(){var list=[];return list.toString=function(){for(var result=[],i=0;i<this.length;i++){var item=this[i];item[2]?result.push("@media "+item[2]+"{"+item[1]+"}"):result.push(item[1])}return result.join("")},list.i=function(modules,mediaQuery){"string"==typeof modules&&(modules=[[null,modules,""]]);for(var alreadyImportedModules={},i=0;i<this.length;i++){var id=this[i][0];"number"==typeof id&&(alreadyImportedModules[id]=!0)}for(i=0;i<modules.length;i++){var item=modules[i];"number"==typeof item[0]&&alreadyImportedModules[item[0]]||(mediaQuery&&!item[2]?item[2]=mediaQuery:mediaQuery&&(item[2]="("+item[2]+") and ("+mediaQuery+")"),list.push(item))}},list}},function(module,exports,__webpack_require__){function addStylesToDom(styles,options){for(var i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];if(domStyle){domStyle.refs++;for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j](item.parts[j]);for(;j<item.parts.length;j++)domStyle.parts.push(addStyle(item.parts[j],options))}else{for(var parts=[],j=0;j<item.parts.length;j++)parts.push(addStyle(item.parts[j],options));stylesInDom[item.id]={id:item.id,refs:1,parts:parts}}}}function listToStyles(list){for(var styles=[],newStyles={},i=0;i<list.length;i++){var item=list[i],id=item[0],css=item[1],media=item[2],sourceMap=item[3],part={css:css,media:media,sourceMap:sourceMap};newStyles[id]?newStyles[id].parts.push(part):styles.push(newStyles[id]={id:id,parts:[part]})}return styles}function insertStyleElement(options,styleElement){var head=getHeadElement(),lastStyleElementInsertedAtTop=styleElementsInsertedAtTop[styleElementsInsertedAtTop.length-1];if("top"===options.insertAt)lastStyleElementInsertedAtTop?lastStyleElementInsertedAtTop.nextSibling?head.insertBefore(styleElement,lastStyleElementInsertedAtTop.nextSibling):head.appendChild(styleElement):head.insertBefore(styleElement,head.firstChild),styleElementsInsertedAtTop.push(styleElement);else{if("bottom"!==options.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");head.appendChild(styleElement)}}function removeStyleElement(styleElement){styleElement.parentNode.removeChild(styleElement);var idx=styleElementsInsertedAtTop.indexOf(styleElement);idx>=0&&styleElementsInsertedAtTop.splice(idx,1)}function createStyleElement(options){var styleElement=document.createElement("style");return styleElement.type="text/css",insertStyleElement(options,styleElement),styleElement}function createLinkElement(options){
var linkElement=document.createElement("link");return linkElement.rel="stylesheet",insertStyleElement(options,linkElement),linkElement}function addStyle(obj,options){var styleElement,update,remove;if(options.singleton){var styleIndex=singletonCounter++;styleElement=singletonElement||(singletonElement=createStyleElement(options)),update=applyToSingletonTag.bind(null,styleElement,styleIndex,!1),remove=applyToSingletonTag.bind(null,styleElement,styleIndex,!0)}else obj.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(styleElement=createLinkElement(options),update=updateLink.bind(null,styleElement),remove=function(){removeStyleElement(styleElement),styleElement.href&&URL.revokeObjectURL(styleElement.href)}):(styleElement=createStyleElement(options),update=applyToTag.bind(null,styleElement),remove=function(){removeStyleElement(styleElement)});return update(obj),function(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}function applyToSingletonTag(styleElement,index,remove,obj){var css=remove?"":obj.css;if(styleElement.styleSheet)styleElement.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=styleElement.childNodes;childNodes[index]&&styleElement.removeChild(childNodes[index]),childNodes.length?styleElement.insertBefore(cssNode,childNodes[index]):styleElement.appendChild(cssNode)}}function applyToTag(styleElement,obj){var css=obj.css,media=obj.media;if(media&&styleElement.setAttribute("media",media),styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}function updateLink(linkElement,obj){var css=obj.css,sourceMap=obj.sourceMap;sourceMap&&(css+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+" */");var blob=new Blob([css],{type:"text/css"}),oldSrc=linkElement.href;linkElement.href=URL.createObjectURL(blob),oldSrc&&URL.revokeObjectURL(oldSrc)}var stylesInDom={},memoize=function(fn){var memo;return function(){return"undefined"==typeof memo&&(memo=fn.apply(this,arguments)),memo}},isOldIE=memoize(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),getHeadElement=memoize(function(){return document.head||document.getElementsByTagName("head")[0]}),singletonElement=null,singletonCounter=0,styleElementsInsertedAtTop=[];module.exports=function(list,options){options=options||{},"undefined"==typeof options.singleton&&(options.singleton=isOldIE()),"undefined"==typeof options.insertAt&&(options.insertAt="bottom");var styles=listToStyles(list);return addStylesToDom(styles,options),function(newList){for(var mayRemove=[],i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];domStyle.refs--,mayRemove.push(domStyle)}if(newList){var newStyles=listToStyles(newList);addStylesToDom(newStyles,options)}for(var i=0;i<mayRemove.length;i++){var domStyle=mayRemove[i];if(0===domStyle.refs){for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j]();delete stylesInDom[domStyle.id]}}}};var replaceText=function(){var textStore=[];return function(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}()},function(module,exports,__webpack_require__){var content=__webpack_require__(7);"string"==typeof content&&(content=[[module.id,content,""]]);__webpack_require__(9)(content,{});content.locals&&(module.exports=content.locals)}])});