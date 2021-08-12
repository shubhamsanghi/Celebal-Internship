(self.webpackChunklite=self.webpackChunklite||[]).push([[8743],{10429:(e,n,t)=>{"use strict";t.d(n,{OK:()=>x,td:()=>b,mQ:()=>f});var r=t(67294),o=(t(45697),t(82557)),a=t(1269),i=t(24296);function u(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}var c,l,d=(0,o.nm)("TabsDescendantsContext"),s=(0,a.o8)("TabsContext",{});!function(e){e.Auto="auto",e.Manual="manual"}(c||(c={})),function(e){e.Horizontal="horizontal",e.Vertical="vertical"}(l||(l={}));var f=(0,a.yV)((function(e,n){var t,f=e.as,v=void 0===f?"div":f,b=e.children,x=e.defaultIndex,h=e.orientation,y=void 0===h?l.Horizontal:h,p=e.index,m=void 0===p?void 0:p,I=e.keyboardActivation,R=void 0===I?c.Auto:I,g=e.onChange,k=e.readOnly,w=void 0!==k&&k,T=u(e,["as","children","defaultIndex","orientation","index","keyboardActivation","onChange","readOnly"]),C=(0,r.useRef)(null!=m);(0,a.cO)(m,"index","Tabs");var A=(0,i.M)(T.id),S=null!==(t=T.id)&&void 0!==t?t:(0,a.qR)("tabs",A),E=(0,r.useRef)(!1),O=(0,r.useRef)(null),D=(0,r.useRef)(!1),F=(0,a.zk)(m,null!=x?x:0),K=F[0],M=F[1],j=(0,r.useState)(-1),q=j[0],z=j[1],V=(0,o.f5)(),B=V[0],L=V[1],P=(0,r.useMemo)((function(){return{focusedIndex:q,id:S,isControlled:C.current,isRTL:D,keyboardActivation:R,onFocusPanel:function(){O.current&&(0,a.mf)(O.current.focus)&&O.current.focus()},onSelectTab:w?a.ZT:function(e){E.current=!0,g&&g(e),M(e)},onSelectTabWithKeyboard:w?a.ZT:function(e){switch(E.current=!0,R){case c.Manual:var n=B[e]&&B[e].element;return void(n&&(0,a.mf)(n.focus)&&n.focus());case c.Auto:default:return g&&g(e),void M(e)}},orientation:y,selectedIndex:K,selectedPanelRef:O,setFocusedIndex:z,setSelectedIndex:M,userInteractedRef:E}}),[q,S,R,g,y,w,K,M,B]);return(0,r.useEffect)((function(){return(0,a.X1)("tabs")}),[]),r.createElement(o.w_,{context:d,items:B,set:L},r.createElement(s.Provider,{value:P},r.createElement(v,Object.assign({},T,{ref:n,"data-reach-tabs":"","data-orientation":y,id:T.id}),(0,a.mf)(b)?b({focusedIndex:q,id:S,selectedIndex:K}):b)))})),v=(0,a.yV)((function(e,n){var t=e.children,i=e.as,l=void 0===i?"div":i,f=e.onKeyDown,v=u(e,["children","as","onKeyDown"]),b=(0,r.useContext)(s),x=b.focusedIndex,h=b.isControlled,y=b.isRTL,p=b.keyboardActivation,m=b.onSelectTabWithKeyboard,I=b.orientation,R=b.selectedIndex,g=b.setSelectedIndex,k=(0,o.Ak)(d),w=(0,r.useRef)(null),T=(0,a.A7)(n,w);(0,r.useEffect)((function(){w.current&&(w.current.ownerDocument&&"rtl"===w.current.ownerDocument.dir||"rtl"===(0,a.qT)(w.current,"direction"))&&(y.current=!0)}),[y]);var C=(0,a.$0)((0,a.ag)(f,(0,o.Dv)(d,{currentIndex:p===c.Manual?x:R,orientation:I,rotate:!0,callback:m,filter:function(e){return!e.disabled},rtl:y.current})));return(0,a.LI)((function(){var e;if(!h&&(0,a.nb)(null===(e=k[R])||void 0===e?void 0:e.disabled)){var n=k.find((function(e){return!e.disabled}));n&&g(n.index)}}),[k,h,R,g]),r.createElement(l,Object.assign({role:"tablist","aria-orientation":I},v,{"data-reach-tab-list":"",ref:T,onKeyDown:C}),r.Children.map(t,(function(e,n){return(0,a.wI)(e,{isSelected:n===R})})))})),b=(0,a.yp)(v),x=(0,a.yV)((function(e,n){var t=e.children,i=(e.isSelected,e.as),c=void 0===i?"button":i,l=e.index,f=e.disabled,v=e.onBlur,b=e.onFocus,x=u(e,["children","isSelected","as","index","disabled","onBlur","onFocus"]),h=(0,r.useContext)(s),y=h.id,p=h.onSelectTab,m=h.orientation,I=h.selectedIndex,R=h.userInteractedRef,g=h.setFocusedIndex,k=(0,r.useRef)(null),w=(0,a.A7)(n,k),T=(0,o.Yf)({element:k.current,disabled:!!f},d,l),C="button"===c&&null==x.type?"button":x.type,A=T===I;(0,a.rf)((function(){A&&k.current&&R.current&&(R.current=!1,(0,a.mf)(k.current.focus)&&k.current.focus())}),[A,R]);var S=(0,a.$0)((0,a.ag)(b,(function(){g(T)}))),E=(0,a.$0)((0,a.ag)(v,(function(){g(-1)})));return r.createElement(c,Object.assign({"aria-controls":(0,a.qR)(y,"panel",T),"aria-disabled":f,"aria-selected":A,role:"tab",tabIndex:A?0:-1},x,{ref:w,"data-reach-tab":"","data-orientation":m,"data-selected":A?"":void 0,disabled:f,id:(0,a.qR)(y,"tab",T),onClick:function(){p(T)},onFocus:S,onBlur:E,type:C}),t)}))},63012:(e,n,t)=>{var r=t(97786),o=t(10611),a=t(71811);e.exports=function(e,n,t){for(var i=-1,u=n.length,c={};++i<u;){var l=n[i],d=r(e,l);t(d,l)&&o(c,a(l,e),d)}return c}},14259:e=>{e.exports=function(e,n,t){var r=-1,o=e.length;n<0&&(n=-n>o?0:o+n),(t=t>o?o:t)<0&&(t+=o),o=n>t?0:t-n>>>0,n>>>=0;for(var a=Array(o);++r<o;)a[r]=e[r+n];return a}},38125:(e,n,t)=>{var r=t(14259);e.exports=function(e){return null!=e&&e.length?r(e,0,-1):[]}},45220:e=>{e.exports=function(e){return null===e}},94885:e=>{e.exports=function(e){if("function"!=typeof e)throw new TypeError("Expected a function");return function(){var n=arguments;switch(n.length){case 0:return!e.call(this);case 1:return!e.call(this,n[0]);case 2:return!e.call(this,n[0],n[1]);case 3:return!e.call(this,n[0],n[1],n[2])}return!e.apply(this,n)}}},14176:(e,n,t)=>{var r=t(67206),o=t(94885),a=t(35937);e.exports=function(e,n){return a(e,o(r(n)))}},35937:(e,n,t)=>{var r=t(29932),o=t(67206),a=t(63012),i=t(46904);e.exports=function(e,n){if(null==e)return{};var t=r(i(e),(function(e){return[e]}));return n=o(n),a(e,t,(function(e,t){return n(e,t[0])}))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/8743.3e1ee7bd.chunk.js.map