(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/front_6th_chapter1-1/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}o=l(i.map(i=>{if(i=t(i,a),i in n)return;n[i]=!0;let o=i.endsWith(`.css`),s=o?`[rel="stylesheet"]`:``,l=!!a;if(l)for(let e=r.length-1;e>=0;e--){let t=r[e];if(t.href===i&&(!o||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;let u=document.createElement(`link`);if(u.rel=o?`stylesheet`:e,o||(u.as=`script`),u.crossOrigin=``,u.href=i,c&&u.setAttribute(`nonce`,c),document.head.appendChild(u),o)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${i}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})};var i=class{$target;state;params;constructor(e,t={}){this.$target=e,this.params=t,this.setup(),this.render()}setup(){}template(){return``}render(){this.$target.innerHTML=this.template(),this.setEvent()}setEvent(){}setState(e){this.state={...this.state,...e},this.render()}addEvent(e,t,n){this.$target.addEventListener(e,e=>{if(!e.target.closest(t))return!1;n(e)})}};const a=()=>{let e=new Set,t=t=>{e.add(t)},n=t=>{e.delete(t)},r=(...t)=>{e.forEach(e=>e(...t))};return{subscribe:t,unsubscribe:n,notify:r}};function o(e){let t={...e},n=a(),r=e=>(n.subscribe(e),()=>n.unsubscribe(e)),i=e=>{let r={...t};t=typeof e==`function`?{...t,...e(r)}:{...t,...e},n.notify(t,r)},o=()=>({...t});return{subscribe:r,setState:i,getState:o}}async function s(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function c(e){let t=await fetch(`/api/products/${e}`);return await t.json()}async function l(){let e=await fetch(`/api/categories`);return await e.json()}function u(){let e=o({products:[],categories:{},isLoading:!1,isLoadingMore:!1,pagination:{page:1,limit:20,total:0,totalPages:1,hasNext:!1,hasPrev:!1}}),t=async(t={})=>{e.setState(e=>({...e,products:[],isLoading:!0}));let n=await s(t);e.setState(e=>({...e,products:n.products||[],isLoading:!1,pagination:n.pagination||{page:1,limit:20,total:0,totalPages:1,hasNext:!1,hasPrev:!1}}))},n=async(t={})=>{let n=e.getState();if(n.isLoadingMore||!n.pagination.hasNext)return;e.setState(e=>({...e,isLoadingMore:!0}));let r=await s({...t,page:n.pagination.page+1});e.setState(e=>({...e,products:[...e.products,...r.products||[]],pagination:r.pagination||e.pagination,isLoadingMore:!1}))},r=async(t={})=>{e.setState({isLoading:!0});let[n,r]=await Promise.all([s(t),l()]);e.setState(e=>({...e,products:n.products||[],categories:r||{},isLoading:!1,pagination:n.pagination||{page:1,limit:20,total:0,totalPages:1,hasNext:!1,hasPrev:!1}}))};return{getState:e.getState,subscribe:e.subscribe,loadInitialData:r,loadProducts:t,loadMoreProducts:n}}const d=(e,t)=>{let n=`
    <label class="text-sm text-gray-600">카테고리:</label>
    <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>
  `;return e&&(n+=`<span class="text-xs text-gray-500">&gt;</span><button data-breadcrumb="category1" data-category1="${e}" class="text-xs hover:text-blue-800 hover:underline">${e}</button>`),t&&(n+=`<span class="text-xs text-gray-500">&gt;</span><span class="text-xs text-gray-600 cursor-default">${t}</span>`),`<div class="flex items-center gap-2">${n}</div>`},f=e=>`
    <div class="relative mb-4">
      <input type="text" id="search-input" placeholder="상품명을 검색해보세요..." value="${e}" class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                      focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
    </div>
  `,p=(e,t,n)=>{let r=e&&typeof e==`object`?Object.keys(e):[],i=t&&e?.[t]&&typeof e[t]==`object`?Object.keys(e[t]):[];return`
      ${t?``:`
          <!-- 1depth 카테고리 -->
          <div class="flex flex-wrap gap-2">
            ${r.length===0?`<div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>`:r.map(e=>`
                      <button data-category1="${e}" class="category1-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
                        ${e}
                      </button>
                    `).join(``)}
          </div>
          `}
          <!-- 2depth 카테고리 -->
          ${i.length>0?`
            <div class="space-y-2">
              <div class="flex flex-wrap gap-2">
                ${i.map(e=>`
                  <button data-category1="${t}" data-category2="${e}" class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors
                     ${n===e?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`}">
                    ${e}
                  </button>
                `).join(``)}
              </div>
            </div>
          `:``}
        </div>
      `},m=(e,t)=>`
      <div class="flex gap-2 items-center justify-between">
        <!-- 페이지당 상품 수 -->
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">개수:</label>
          <select id="limit-select"
                  class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            <option value="10" ${e===`10`?`selected`:``}>10개</option>
            <option value="20" ${e===`20`?`selected`:``}>20개</option>
            <option value="50" ${e===`50`?`selected`:``}>50개</option>
            <option value="100" ${e===`100`?`selected`:``}>100개</option>
          </select>
        </div>
        
        <!-- 정렬 -->
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">정렬:</label>
          <select id="sort-select" class="text-sm border border-gray-300 rounded px-2 py-1
                       focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            <option value="price_asc" ${t===`price_asc`?`selected`:``}>가격 낮은순</option>
            <option value="price_desc" ${t===`price_desc`?`selected`:``}>가격 높은순</option>
            <option value="name_asc" ${t===`name_asc`?`selected`:``}>이름순</option>
            <option value="name_desc" ${t===`name_desc`?`selected`:``}>이름 역순</option>
          </select>
        </div>
      </div>
    `,h=e=>`
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card" data-product-id="${e.productId}">
      <!-- 상품 이미지 -->
      <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
        <img src="${e.image}"
             alt="${e.title}"
             class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
             loading="lazy">
      </div>
      <!-- 상품 정보 -->
      <div class="p-3">
        <div class="cursor-pointer product-info mb-3">
          <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">${e.title}</h3>
          <p class="text-xs text-gray-500 mb-2">${e.brand||``}</p>
          <p class="text-lg font-bold text-gray-900">
            ${parseInt(e.lprice||0).toLocaleString()}원
          </p>
        </div>
        <!-- 장바구니 버튼 -->
        <button class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
               hover:bg-blue-700 transition-colors add-to-cart-btn" data-product-id="${e.id}">
          장바구니 담기
        </button>
      </div>
    </div>
  `,g=()=>`
    <div class="product-skeleton-card bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
      <div class="aspect-square bg-gray-200"></div>
      <div class="p-3">
        <div class="h-4 bg-gray-200 rounded mb-2"></div>
        <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
        <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
        <div class="h-8 bg-gray-200 rounded"></div>
      </div>
    </div>
  `,_=()=>`
    <div class="text-center py-4">
      <div class="inline-flex items-center">
        <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
      </div>
    </div>
  `,v=e=>{let{products:t,isLoading:n,isLoadingMore:r,pagination:i}=e;return`
  <div class="mb-6">
    <div>
      <!-- 상품 개수 정보 -->
      ${n?``:`
      <div class="mb-4 text-sm text-gray-600">
        총 <span class="font-medium text-gray-900">${i?.total||0}개</span>의 상품
      </div>
      `}

      <!-- 상품 그리드 -->
      <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
        ${t.map(e=>h(e)).join(``)}
        ${n&&t.length===0?[,,,,].fill().map(()=>g()).join(``):``}
      </div>

      <!-- 하단 메시지 -->
      ${n||r?`${_()}`:i?.hasNext?``:`
          <div class="text-center py-4 text-sm text-gray-500">
            모든 상품을 확인했습니다
          </div>
        `}
    </div>
  </div>
  `},y=({type:e=`info`,message:t=``}={})=>{let n={success:`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>`,info:`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>`,error:`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
    </svg>`},r={success:`bg-green-600`,info:`bg-blue-600`,error:`bg-red-600`};return`
    <div class="${r[e]} text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
      <div class="flex-shrink-0">
        ${n[e]}
      </div>
      <p class="text-sm font-medium">${t}</p>
      <button class="toast-close-btn flex-shrink-0 ml-2 text-white hover:text-gray-200">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  `},b=()=>`
  <div id="toast-container" class="fixed top-4 right-4 z-50 flex flex-col gap-2 items-end">
  </div>
`,x=(e,t=`info`)=>{let n=document.getElementById(`toast-container`);if(!n)return;let r=document.createElement(`div`);r.innerHTML=y({type:t,message:e}),r.className=`toast-item`,n.appendChild(r);let i=r.querySelector(`.toast-close-btn`);i&&i.addEventListener(`click`,()=>{r.remove()}),setTimeout(()=>{r.parentNode&&r.remove()},3e3)},S=(e,t=null)=>{try{let n=localStorage.getItem(e);if(n===null)return t;try{return JSON.parse(n)}catch{return n}}catch(n){return console.error(`Error reading localStorage key "${e}":`,n),t}},C=(e,t)=>{try{let n=typeof t==`string`?t:JSON.stringify(t);return localStorage.setItem(e,n),!0}catch(t){return console.error(`Error setting localStorage key "${e}":`,t),!1}},w=({items:e=[],selectedItems:t=[]}={})=>{if(e.length===0)return`
      <div class="cart-modal flex min-h-full items-center justify-center p-4">
        <div class="relative bg-white rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-hidden">
          <!-- 헤더 -->
          <div class="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
            <h2 class="text-lg font-bold text-gray-900 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
              </svg>
              장바구니 
            </h2>
            <button id="cart-modal-close-btn" class="text-gray-400 hover:text-gray-600 p-1">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <!-- 빈 장바구니 -->
          <div class="flex-1 flex items-center justify-center p-8">
            <div class="text-center">
              <div class="text-gray-400 mb-4">
                <svg class="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
                </svg>
              </div>
              <h3 class="text-lg font-medium text-gray-900 mb-2">장바구니가 비어있습니다</h3>
              <p class="text-gray-600">원하는 상품을 담아보세요!</p>
            </div>
          </div>
        </div>
      </div>
    `;let n=t.length,r=e.reduce((e,t)=>e+t.lprice*t.quantity,0),i=e.filter(e=>t.includes(e.id)).reduce((e,t)=>e+t.lprice*t.quantity,0);return`
    <div class="cart-modal flex min-h-full items-center justify-center p-4">
      <div class="relative bg-white rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-hidden">
        <!-- 헤더 -->
        <div class="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 class="text-lg font-bold text-gray-900 flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
            </svg>
            장바구니
            <span class="text-sm font-normal text-gray-600 ml-1">(${e.length})</span>
          </h2>
          <button id="cart-modal-close-btn" class="text-gray-400 hover:text-gray-600 p-1">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <!-- 컨텐츠 -->
        <div class="flex flex-col max-h-[calc(90vh-120px)]">
          <!-- 전체 선택 섹션 -->
          <div class="p-4 border-b border-gray-200 bg-gray-50">
            <label class="flex items-center text-sm text-gray-700">
              <input type="checkbox" id="cart-modal-select-all-checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2">
              전체선택 (${e.length}개)
            </label>
          </div>
          <!-- 아이템 목록 -->
          <div class="flex-1 overflow-y-auto">
            <div class="p-4 space-y-4">
              ${e.map(e=>`
                <div class="flex items-center py-3 border-b border-gray-100 cart-item" data-product-id="${e.id}">
                  <!-- 선택 체크박스 -->
                  <label class="flex items-center mr-3">
                    <input type="checkbox" class="cart-item-checkbox w-4 h-4 text-blue-600 border-gray-300 rounded 
                  focus:ring-blue-500" data-product-id="${e.id}" ${t.includes(e.id)?`checked`:``}>
                  </label>
                  <!-- 상품 이미지 -->
                  <div class="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-3 flex-shrink-0">
                    <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover cursor-pointer cart-item-image" data-product-id="${e.id}">
                  </div>
                  <!-- 상품 정보 -->
                  <div class="flex-1 min-w-0">
                    <h4 class="text-sm font-medium text-gray-900 truncate cursor-pointer cart-item-title" data-product-id="${e.id}">
                      ${e.title}
                    </h4>
                    <p class="text-sm text-gray-600 mt-1">
                      ${e.lprice.toLocaleString()}원
                    </p>
                    <!-- 수량 조절 -->
                    <div class="flex items-center mt-2">
                      <button class="quantity-decrease-btn w-7 h-7 flex items-center justify-center 
                   border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100" data-product-id="${e.id}">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                        </svg>
                      </button>
                      <input type="number" value="${e.quantity}" min="1" class="quantity-input w-12 h-7 text-center text-sm border-t border-b 
                  border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500" disabled="" data-product-id="${e.id}">
                      <button class="quantity-increase-btn w-7 h-7 flex items-center justify-center 
                   border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100" data-product-id="${e.id}">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <!-- 가격 및 삭제 -->
                  <div class="text-right ml-3">
                    <p class="text-sm font-medium text-gray-900">
                      ${(e.lprice*e.quantity).toLocaleString()}원
                    </p>
                    <button class="cart-item-remove-btn mt-1 text-xs text-red-600 hover:text-red-800" data-product-id="${e.id}">
                      삭제
                    </button>
                  </div>
                </div>
              `).join(``)}
            </div>
          </div>
        </div>
        <!-- 하단 액션 -->
        <div class="sticky bottom-0 bg-white border-t border-gray-200 p-4">
          ${n>0?`
            <!-- 선택된 아이템 정보 -->
            <div class="flex justify-between items-center mb-3 text-sm">
              <span class="text-gray-600">선택한 상품 (${n}개)</span>
              <span class="font-medium">${i.toLocaleString()}원</span>
            </div>
          `:``}
          <!-- 총 금액 -->
          <div class="flex justify-between items-center mb-4">
            <span class="text-lg font-bold text-gray-900">총 금액</span>
            <span class="text-xl font-bold text-blue-600">${r.toLocaleString()}원</span>
          </div>
          <!-- 액션 버튼들 -->
          <div class="space-y-2">
            ${n>0?`
              <button id="cart-modal-remove-selected-btn" class="w-full bg-red-600 text-white py-2 px-4 rounded-md 
                       hover:bg-red-700 transition-colors text-sm">
                선택한 상품 삭제 (${n}개)
              </button>
            `:``}
            <div class="flex gap-2">
              <button id="cart-modal-clear-cart-btn" class="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md 
                       hover:bg-gray-700 transition-colors text-sm">
                전체 비우기
              </button>
              <button id="cart-modal-checkout-btn" class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md 
                       hover:bg-blue-700 transition-colors text-sm">
                구매하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `},T=`shopping_cart`;function E(){let e=S(T,{items:[],selectedItems:[],itemCount:0,isModalOpen:!1}),t=o(e),n=null,r=e=>{C(T,e)},i=(e,n=1)=>{let i=t.getState(),a=i.items.findIndex(t=>t.productId===e.productId),o;a>=0?(o=[...i.items],o[a]={...o[a],quantity:o[a].quantity+n}):o=[...i.items,{...e,quantity:n,id:e.productId}];let s=o.length,c={...i,items:o,itemCount:s};t.setState(c),r(c)},a=e=>{let n=t.getState(),i=n.items.filter(t=>t.id!==e),a=i.length,o={...n,items:i,itemCount:a};t.setState(o),r(o)},s=(e,n)=>{if(n<=0){a(e);return}let i=t.getState(),o=i.items.map(t=>t.id===e?{...t,quantity:n}:t),s=o.length,c={...i,items:o,itemCount:s};t.setState(c),r(c)},c=()=>{let e={items:[],selectedItems:[],itemCount:0,isModalOpen:!1};t.setState(e),r(e)},l=()=>{n||(n=document.createElement(`div`),n.id=`cart-modal-container`,n.className=`fixed inset-0 z-50 hidden`,document.body.appendChild(n))},u=()=>{let e=t.getState(),{items:r,selectedItems:i,isModalOpen:a}=e;n&&(a?(n.innerHTML=`
        <div class="cart-modal-overlay fixed inset-0 bg-black bg-opacity-50 transition-opacity">
          ${w({items:r,selectedItems:i})}
        </div>
      `,n.classList.remove(`hidden`)):(n.classList.add(`hidden`),n.innerHTML=``))},d=()=>{let e=t.getState();t.setState({...e,isModalOpen:!0}),document.body.style.overflow=`hidden`,u()},f=()=>{let e=t.getState();t.setState({...e,isModalOpen:!1}),document.body.style.overflow=``,u()},p=()=>{let e=document.querySelector(`#cart-icon-btn`);if(!e)return;let n=t.getState(),r=n.itemCount,i=e.querySelector(`.cart-badge`);if(i&&i.remove(),r>0){let t=document.createElement(`span`);t.className=`cart-badge absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center`,t.textContent=r>99?`99+`:r,e.appendChild(t)}},m=()=>{let e=new MutationObserver(e=>{e.forEach(e=>{e.type===`childList`&&e.addedNodes.forEach(e=>{e.nodeType===1&&(e.id===`cart-icon-btn`||e.querySelector?.(`#cart-icon-btn`))&&setTimeout(p,10)})})});return e.observe(document.body,{childList:!0,subtree:!0}),e},h=()=>{document.addEventListener(`click`,e=>{if(e.target.closest(`#cart-icon-btn`)&&d(),e.target.closest(`#cart-modal-close-btn`)&&f(),e.target.id===`cart-modal-container`&&f(),e.target.classList.contains(`quantity-increase-btn`)||e.target.closest(`.quantity-increase-btn`)){let n=e.target.classList.contains(`quantity-increase-btn`)?e.target:e.target.closest(`.quantity-increase-btn`),r=n.getAttribute(`data-product-id`),i=t.getState(),a=i.items.find(e=>e.id===r);a&&(s(r,a.quantity+1),u())}if(e.target.classList.contains(`quantity-decrease-btn`)||e.target.closest(`.quantity-decrease-btn`)){let n=e.target.classList.contains(`quantity-decrease-btn`)?e.target:e.target.closest(`.quantity-decrease-btn`),r=n.getAttribute(`data-product-id`),i=t.getState(),a=i.items.find(e=>e.id===r);a&&a.quantity>1&&(s(r,a.quantity-1),u())}if(e.target.classList.contains(`cart-item-remove-btn`)){let t=e.target.getAttribute(`data-product-id`);a(t),u()}e.target.id===`cart-modal-clear-cart-btn`&&(c(),u())}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&t.getState().isModalOpen&&f()})},g=()=>{l(),h(),m(),t.subscribe(p),setTimeout(p,50)};return{getState:t.getState,subscribe:t.subscribe,openModal:d,closeModal:f,updateCartBadge:p,init:g,addToCart:i,removeFromCart:a,updateCartItemQuantity:s,clearCart:c}}let D=null;const O=()=>(D||=E(),D),k=()=>{let e=O();return e.init(),e},A=()=>`<footer class="bg-white shadow-sm sticky top-0 z-40">
        <div class="max-w-md mx-auto py-8 text-center text-gray-500">
          <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
        </div>
      </footer>`,j=({title:e,showBackButton:t})=>`<header class="bg-white shadow-sm sticky top-0 z-40">
<div class="max-w-md mx-auto px-4 py-4">
  <div class="flex items-center justify-between">
    ${t?`
      <div class="flex items-center space-x-3">
        <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <h1 class="text-lg font-bold text-gray-900">${e??``}</h1>
      </div>
    `:`
      <h1 class="text-xl font-bold text-gray-900">
        <a href="/" data-link="">${e}</a>
      </h1>
    `}
    <div class="flex items-center space-x-2">
      <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
        </svg>
      </button>
    </div>
  </div>
</div>
</header>
`,M=(e,t={})=>`
<div class="min-h-screen bg-gray-50">
  ${j({...t})}
  <main class="max-w-md mx-auto px-4 py-4">${e}</main>
  ${A()}
  ${b()}
</div>
`;var N=class extends i{setup(){this.router=W(),this.cart=O(),this.productsHook=u(),this.unsubscribe=this.productsHook.subscribe(()=>{this.render()});let{query:e}=this.router.getQueryParams();this.productsHook.loadInitialData(e),this.setupEvents()}template(){let{products:e,categories:t,isLoading:n,isLoadingMore:r,pagination:i}=this.productsHook.getState(),{query:a}=this.router.getQueryParams();return M(`
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
        ${f(a.search??``)}
        <div class="space-y-2 mb-4">
        ${d(a.category1,a.category2)}
        ${p(t,a.category1,a.category2)}
        ${m(a.limit??`20`,a.sort??`price_asc`)}
        </div>

        ${v({products:e,isLoading:n,isLoadingMore:r,pagination:i})}
      </div>
    `,{title:`쇼핑몰`,showBackButton:!1})}setEvent(){}setupEvents(){this.eventsSetup||(this.addEvent(`click`,`[data-breadcrumb='reset']`,()=>{this.router.updateQuery(`category1`,null,{rerender:!1}),this.router.updateQuery(`category2`,null,{rerender:!1}),this.router.updateQuery(`page`,`1`,{rerender:!1});let{query:e}=this.router.getQueryParams();this.productsHook.loadProducts(e)}),this.addEvent(`click`,`[data-breadcrumb='category1']`,()=>{this.router.updateQuery(`category2`,null,{rerender:!1}),this.router.updateQuery(`page`,`1`,{rerender:!1});let{query:e}=this.router.getQueryParams();this.productsHook.loadProducts(e)}),this.addEvent(`click`,`.category1-filter-btn`,e=>{let t=e.target.dataset.category1;this.router.updateQuery(`category1`,t,{rerender:!1}),this.router.updateQuery(`category2`,null,{rerender:!1}),this.router.updateQuery(`page`,`1`,{rerender:!1});let{query:n}=this.router.getQueryParams();this.productsHook.loadProducts(n)}),this.addEvent(`click`,`.category2-filter-btn`,e=>{let t=e.target.dataset.category2;this.router.updateQuery(`category2`,t,{rerender:!1}),this.router.updateQuery(`page`,`1`,{rerender:!1});let{query:n}=this.router.getQueryParams();this.productsHook.loadProducts(n)}),this.addEvent(`change`,`#limit-select`,e=>{let t=e.target.value;this.router.updateQuery(`limit`,t,{rerender:!1}),this.router.updateQuery(`page`,`1`,{rerender:!1});let{query:n}=this.router.getQueryParams();this.productsHook.loadProducts(n)}),this.addEvent(`change`,`#sort-select`,e=>{let t=e.target.value;this.router.updateQuery(`sort`,t,{rerender:!1}),this.router.updateQuery(`page`,`1`,{rerender:!1});let{query:n}=this.router.getQueryParams();this.productsHook.loadProducts(n)}),this.addEvent(`keypress`,`#search-input`,e=>{if(e.key===`Enter`){let t=e.target.value;t?this.router.updateQuery(`search`,t,{rerender:!1}):this.router.updateQuery(`search`,null,{rerender:!1}),this.router.updateQuery(`page`,`1`,{rerender:!1});let{query:n}=this.router.getQueryParams();this.productsHook.loadProducts(n)}}),this.addEvent(`click`,`.product-image`,e=>{let t=e.target.closest(`.product-card`);if(t){let e=t.dataset.productId;this.router.navigate(`/product/${e}`)}}),this.addEvent(`click`,`.add-to-cart-btn`,e=>{e.stopPropagation();let t=e.target.closest(`.product-card`);if(t){let e=t.dataset.productId,{products:n}=this.productsHook.getState(),r=n.find(t=>t.productId===e);r&&(this.cart.addToCart(r,1),x(`장바구니에 추가되었습니다`,`success`))}}),this.handleScroll=()=>{let e=window.pageYOffset||document.documentElement.scrollTop,t=window.innerHeight,n=document.documentElement.scrollHeight;if(e+t>=n-100){let{query:e}=this.router.getQueryParams();this.productsHook.loadMoreProducts(e)}},window.addEventListener(`scroll`,this.handleScroll),this.eventsSetup=!0)}unmount(){this.unsubscribe&&this.unsubscribe(),this.handleScroll&&window.removeEventListener(`scroll`,this.handleScroll)}};function P(){let e=o({product:null,isLoading:!1,quantity:1,relatedProducts:[],isLoadingRelated:!1}),t=async t=>{e.setState({product:null,isLoading:!0});let n=await c(t);e.setState({product:{...n,price:n.lprice},isLoading:!1})},n=async t=>{e.setState({product:null,isLoading:!0,relatedProducts:[],isLoadingRelated:!0});let n=await c(t),r=await s({category1:n.category1,category2:n.category2,limit:20,page:1}),i=r.products.filter(e=>e.productId!==n.productId);e.setState({product:{...n,price:n.lprice},isLoading:!1,relatedProducts:i,isLoadingRelated:!1})},r=t=>{e.setState({quantity:t})},i=()=>{let t=e.getState(),n=Math.min(t.quantity+1,10);e.setState({quantity:n})},a=()=>{let t=e.getState(),n=Math.max(t.quantity-1,1);e.setState({quantity:n})};return{getState:e.getState,subscribe:e.subscribe,loadProduct:t,loadInitialData:n,updateQuantity:r,increaseQuantity:i,decreaseQuantity:a}}const F=({relatedProducts:e})=>!e||e.length===0?``:`
  <div class="bg-white rounded-lg shadow-sm">
  <div class="p-4 border-b border-gray-200">
    <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
    <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
  </div>
  <div class="p-4">
    <div class="grid grid-cols-2 gap-3 responsive-grid">
      ${e.map(e=>`
        <div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" data-product-id="${e.productId}">
          <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
            <img src="${e.image||``}" alt="${e.title||``}" class="w-full h-full object-cover" loading="lazy">
          </div>
          <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">${e.title||``}</h3>
          <p class="text-sm font-bold text-blue-600">${parseInt(e.lprice||0).toLocaleString()}원</p>
        </div>
      `).join(``)}
    </div>
  </div>
</div>
  `;var I=class extends i{setup(){this.router=W(),this.cart=O(),this.productHook=P(),this.unsubscribe=this.productHook.subscribe(()=>{this.render()});let e=this.params?.id;e&&this.productHook.loadInitialData(e),this.setupEvents()}template(){let{product:e,isLoading:t,quantity:n,relatedProducts:r}=this.productHook.getState();return M(t||!e?`
        <div class="py-20 bg-gray-50 flex items-center justify-center">
          <div class="text-center">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p class="text-gray-600">상품 정보를 불러오는 중...</p> 
          </div>
        </div>
        `:`
      <div>
        <div class="mb-4">
        ${d(e.category1,e.category2)} 
        </div>
        <!-- 상품 정보 -->
        <div class="bg-white rounded-lg shadow-sm">
          <!-- 상품 이미지 -->
          <div class="p-4">
            <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover">
            </div>
            
            <!-- 상품 정보 -->
            <div>
              <p class="text-sm text-gray-600 mb-1">${e.brand||``}</p>
              <h1 class="text-xl font-bold text-gray-900 mb-3">${e.title}</h1>
              
              <!-- 가격 -->
              <div class="mb-4">
                <span class="text-2xl font-bold text-blue-600">${Number(e.price??0).toLocaleString()}원</span>
              </div>
        
            </div>
          </div>
          
          <!-- 수량 선택 및 액션 -->
          <div class="border-t border-gray-200 p-4">
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm font-medium text-gray-900">수량</span>
              <div class="flex items-center">
                <button id="quantity-decrease" class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                  </svg>
                </button>
                <input type="number" id="quantity-input" value="${n}" min="1" max="10" class="w-16 h-8 text-center text-sm border-t border-b border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                <button id="quantity-increase" class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            <!-- 액션 버튼 -->
            <button id="add-to-cart-btn" data-product-id="${e.productId}" class="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium">
              장바구니 담기
            </button>
          </div>
        </div>
        ${r&&r.length>0?F({relatedProducts:r}):``}
      </div>
    `,{title:`상품 상세`,showBackButton:!0})}setEvent(){}setupEvents(){this.eventsSetup||(this.addEvent(`click`,`#quantity-decrease`,()=>{this.productHook.decreaseQuantity()}),this.addEvent(`click`,`#quantity-increase`,()=>{this.productHook.increaseQuantity()}),this.addEvent(`change`,`#quantity-input`,e=>{let t=parseInt(e.target.value);t>=1&&t<=10&&this.productHook.updateQuantity(t)}),this.addEvent(`click`,`#add-to-cart-btn`,()=>{let{product:e,quantity:t}=this.productHook.getState();e&&(this.cart.addToCart(e,t),x(`장바구니에 추가되었습니다`,`success`))}),this.addEvent(`click`,`.related-product-card`,e=>{let t=e.target.closest(`.related-product-card`),n=t?.getAttribute(`data-product-id`);n&&this.router.navigate(`/product/${n}`)}),this.eventsSetup=!0)}unmount(){this.unsubscribe&&this.unsubscribe()}};const L=()=>`
    <main class="max-w-md mx-auto px-4 py-4">
      <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg">
        <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#1a73e8;stop-opacity:1" />
            </linearGradient>
            <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#000000" flood-opacity="0.1"/>
            </filter>
          </defs>
          
          <!-- 404 Numbers -->
          <text x="160" y="85" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="48" font-weight="600" fill="url(#blueGradient)" text-anchor="middle">404</text>
          
          <!-- Icon decoration -->
          <circle cx="80" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
          <circle cx="240" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
          <circle cx="90" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
          <circle cx="230" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
          
          <!-- Message -->
          <text x="160" y="110" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="14" font-weight="400" fill="#5f6368" text-anchor="middle">페이지를 찾을 수 없습니다</text>
          
          <!-- Subtle bottom accent -->
          <rect x="130" y="130" width="60" height="2" rx="1" fill="url(#blueGradient)" opacity="0.3"/>
        </svg>
        
        <a href="/" data-link class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">홈으로</a>
      </div>
    </main>
  `,R=`/front_6th_chapter1-1/`,z=(e=window.location.pathname)=>R===`/`?e:e.startsWith(R)?e.slice(21):e,B=e=>R===`/`?e:R.slice(0,-1)+e,V=[{path:`/`,handler:(e,t)=>{new N(e,t)}},{path:`/product/:id`,handler:(e,t)=>{new I(e,t)}},{path:`*`,handler:e=>{e.innerHTML=L()}}];function H(e){let t={},n=()=>{V.forEach(e=>{t[e.path]=e.handler})},r=()=>{let e=new URLSearchParams(window.location.search),t={};for(let[n,r]of e)t[n]=r;return{query:t}},i=e=>{if(t[e])return{route:e,params:{}};for(let n in t)if(n.includes(`:`)){let t=n.split(`/`),r=e.split(`/`);if(t.length===r.length){let e={},i=!0;for(let n=0;n<t.length;n++)if(t[n].startsWith(`:`)){let i=t[n].slice(1);e[i]=r[n]}else if(t[n]!==r[n]){i=!1;break}if(i)return{route:n,params:e}}}return null},a=async n=>{n=z(n||window.location.pathname);let a=i(n);if(a){let n=t[a.route],{query:i}=r(),o={...a.params,...i};await n(e,o)}else{let n=t[`*`];await n(e)}},o=e=>{let t=B(e);history.pushState(null,``,t),a(e)},s=(e,t,n={})=>{let r=new URL(window.location);t?r.searchParams.set(e,t):r.searchParams.delete(e);let i=r.pathname+r.search;history.pushState(null,``,i),n.rerender!==!1&&a()},c=()=>{n(),window.addEventListener(`popstate`,()=>{a(z(window.location.pathname))}),a(z(window.location.pathname))};return{init:c,navigate:o,updateQuery:s,getQueryParams:r,render:a}}let U=null;const W=()=>(U||=H(document.getElementById(`root`)),U),G=()=>{let e=W();return e.init(),e},K=()=>r(async()=>{let{worker:e,workerOptions:t}=await import(`./browser-DvH8zzVn.js`);return{worker:e,workerOptions:t}},[]).then(({worker:e,workerOptions:t})=>e.start(t));K().then(q);function q(){G(),k()}K().then(q);