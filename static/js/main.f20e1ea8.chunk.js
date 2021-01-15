(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,a,t){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__2tdHM",imageGalleryItemImage:"ImageGalleryItem_imageGalleryItemImage__1q_QM"}},11:function(e,a,t){e.exports={overlay:"Modal_overlay__3eyi8",modal:"Modal_modal__2BOem"}},12:function(e,a,t){e.exports={app:"App_app__3Ed40",button:"App_button__FRIBX"}},23:function(e,a,t){e.exports={imageGallery:"ImageGallery_imageGallery__372i9"}},70:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t(0),c=t.n(r),o=t(22),i=t.n(o),s=t(13),l=t(4),h=t(5),u=t(7),m=t(6),p=t(8),d=t.n(p),g=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={inputValue:""},e.handleChange=function(a){e.setState({inputValue:a.target.value})},e.handleSubmit=function(a){a.preventDefault(),e.props.onSubmit(e.state.inputValue),e.setState({inputValue:""})},e}return Object(h.a)(t,[{key:"render",value:function(){return Object(n.jsx)("header",{className:d.a.searchbar,children:Object(n.jsxs)("form",{className:d.a.searchForm,children:[Object(n.jsx)("button",{type:"submit",onClick:this.handleSubmit,className:d.a.searchFormButton,children:Object(n.jsx)("span",{className:d.a.searchFormButtonLabel,children:"Search"})}),Object(n.jsx)("input",{className:d.a.searchFormInput,type:"text",value:this.state.inputValue,onChange:this.handleChange,placeholder:"Search images and photos"})]})})}}]),t}(r.Component),b=t(23),j=t.n(b),f=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).handleGalleryClick=function(a){a.target.id&&e.props.onClick(a.target.id)},e}return Object(h.a)(t,[{key:"render",value:function(){return Object(n.jsx)("ul",{className:j.a.imageGallery,onClick:this.handleGalleryClick,children:this.props.children})}}]),t}(r.Component),y=t(10),O=t.n(y);function _(e){return e.images.map((function(e){var a=e.webformatURL,t=e.largeImageURL;return Object(n.jsx)("li",{className:O.a.imageGalleryItem,id:t,children:Object(n.jsx)("img",{src:a,id:t,alt:"",className:O.a.imageGalleryItemImage})},t)}))}var v=t(24),I=t.n(v),x=t(11),S=t.n(x),k=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(h.a)(t,[{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.props.onClose)}},{key:"render",value:function(){return Object(n.jsx)("div",{className:S.a.overlay,children:Object(n.jsx)("div",{className:S.a.modal,children:Object(n.jsx)("img",{src:this.props.url,alt:""})})})}}]),t}(r.Component),w=t(25),F=t.n(w),C=function(e,a){return F.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(a,"&key=").concat("18864645-939ea59db410a3043a30cf718","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},G=t(12),L=t.n(G),N=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={images:[],searchQuery:"",loading:!1,page:1,largeImageURL:""},e.fetchImages=function(){var a=e.state,t=a.searchQuery,n=a.page;e.setState({loading:!0}),C(t,n).then((function(a){return e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(a)),page:e.page+1,loading:!1}}))}))},e.handleSearchFormSubmit=function(a){e.state.searchQuery!==a&&e.setState({searchQuery:a,page:1,images:[]})},e.handleOpenModal=function(a){e.setState({largeImageURL:a}),window.addEventListener("keydown",e.handleEscapeModale)},e.handleEscapeModale=function(a){"Escape"===a.code&&e.setState({largeImageURL:""})},e}return Object(h.a)(t,[{key:"componentDidMount",value:function(){this.fetchImages()}},{key:"componentDidUpdate",value:function(e,a){var t=a.searchQuery,n=this.state.searchQuery,r=a.images,c=this.state.images;if(t!==n&&this.fetchImages(),r!==c&&this.state.page>2){var o=window.innerHeight-150;window.scrollBy({top:o,behavior:"smooth"})}}},{key:"render",value:function(){var e=this.state,a=e.images,t=e.loading,r=e.largeImageURL;return Object(n.jsxs)("div",{className:L.a.app,children:[Object(n.jsx)(g,{onSubmit:this.handleSearchFormSubmit}),a.length>0&&Object(n.jsx)(f,{onClick:this.handleOpenModal,children:Object(n.jsx)(_,{images:a})}),t&&Object(n.jsx)(I.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}),r&&Object(n.jsx)(k,{url:r,onClose:this.handleEscapeModale}),a.length>0&&Object(n.jsx)("button",{className:L.a.button,type:"button",onClick:this.fetchImages,children:"Load more"})]})}}]),t}(r.Component);t(70);i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root"))},8:function(e,a,t){e.exports={searchbar:"Searchbar_searchbar__3mu0T",searchForm:"Searchbar_searchForm__1t8Gb",searchFormButton:"Searchbar_searchFormButton__rZ8Fh",searchFormButtonLabel:"Searchbar_searchFormButtonLabel__3A3gX",searchFormInput:"Searchbar_searchFormInput__7EtSf"}}},[[71,1,2]]]);
//# sourceMappingURL=main.f20e1ea8.chunk.js.map