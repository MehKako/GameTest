!function(e){"use strict";e.MemoryCache=class{constructor(t){if(!t.match(/\.(css|png|gif|svg)$/))throw new Error("Not supported file format");e.CachedStorage=void 0===e.CachedStorage?{}:e.CachedStorage,this.cdn="https://cloudfront.tryfunstorage.com",this.filename=t,this.period_ms=3e5,void 0===e.CachedStorage[t]&&(e.CachedStorage[t]={cached:!1,date:0})}async get(){if(!1!==e.CachedStorage[this.filename].cached&&e.CachedStorage[this.filename].date>Date.now()-this.period_ms)return e.CachedStorage[this.filename].cached;try{let t=await fetch([this.cdn,this.filename].join("/"));e.CachedStorage[this.filename].cached=await t.text()}catch(e){return this._dv()}return e.CachedStorage[this.filename].date=Date.now(),this._dv()}_dv(){return e.CachedStorage[this.filename].cached?e.CachedStorage[this.filename].cached:""}}}(window);