import{t as e}from"./quote-store.KmURMOEj.js";document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-qty-minus], [data-qty-plus]`);if(!t)return;e.preventDefault();let n=t.closest(`[data-quantity-stepper]`);if(!n)return;let r=n.querySelector(`[data-qty-input]`);if(!r)return;let i=Number.parseInt(r.value,10),a=Number.parseInt(r.dataset.min??`1`,10),o=Number.parseInt(r.dataset.max??`999`,10),s=Number.parseInt(r.dataset.step??`1`,10),c=i;t.hasAttribute(`data-qty-plus`)&&(c=Math.min(o,i+s)),t.hasAttribute(`data-qty-minus`)&&(c=Math.max(a,i-s)),c!==i&&(r.value=String(c),r.dispatchEvent(new Event(`change`,{bubbles:!0})))}),document.addEventListener(`change`,e=>{let t=e.target.closest(`[data-qty-input]`);if(!t)return;let n=Number.parseInt(t.dataset.min??`1`,10),r=Number.parseInt(t.dataset.max??`999`,10),i=Number.parseInt(t.value,10);t.value=String(Number.isFinite(i)?Math.min(r,Math.max(n,i)):n)});function t(e){return typeof e==`string`&&e.trim().length>0}function n(e){let n=[],r=e.companyName||`Sky One Marketing`;return n.push(`Hello ${r},`,``),e.items.length===0?n.push(`I would like to request a quotation for your products.`):(n.push(`I would like to request a quotation for the following products:`,``),e.items.forEach((r,i)=>{n.push(`${i+1}. ${r.productName}`),t(r.modelNumber)&&n.push(`   Model: ${r.modelNumber}`),n.push(`   Quantity: ${r.quantity}`),t(r.note)&&n.push(`   Note: ${r.note}`),i<e.items.length-1&&n.push(``)})),(t(e.customerName)||t(e.company)||t(e.phone)||t(e.whatsappNumber)||t(e.email)||t(e.preferredContact))&&(n.push(``,`Customer:`,``),t(e.customerName)&&n.push(`Name: ${e.customerName}`),t(e.company)&&n.push(`Company: ${e.company}`),t(e.phone)&&n.push(`Phone: ${e.phone}`),t(e.whatsappNumber)&&n.push(`WhatsApp: ${e.whatsappNumber}`),t(e.email)&&n.push(`Email: ${e.email}`),t(e.preferredContact)&&n.push(`Preferred contact: ${e.preferredContact}`)),t(e.message)&&n.push(``,`Additional message:`,``,e.message),n.push(``,`Please confirm availability and pricing.`),n.join(`
`).trim()}function r(e,t){return`https://wa.me/${e.replace(/[^0-9]/g,``)}?text=${encodeURIComponent(t)}`}var i=e(),a=`Sky One Marketing`,o=window.__quoteWhatsappNumber??`94771234567`;function s(e,t){if(!e)throw Error(`Quote page markup incomplete: missing ${t}`);return e}var c=s(document.querySelector(`[data-quote-items]`),`quote items`),l=s(document.querySelector(`[data-quote-empty]`),`quote empty`),u=s(document.querySelector(`[data-quote-clear]`),`quote clear`),d=document.querySelector(`#quote-whatsapp-link`);function f(e){return e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]??e)}function p(e,t){return`
    <li class="card p-4 sm:p-5" data-quote-item="${f(e.productSlug)}">
      <div class="flex items-start justify-between gap-3">
        <div class="min-w-0">
          <p class="text-sm font-bold text-ink-900">${t+1}. ${f(e.productName)}</p>
          <p class="mt-0.5 flex flex-wrap items-center gap-2 text-xs text-ink-600">
            ${e.modelNumber?`<span class="rounded bg-primary-800 px-1.5 py-0.5 font-mono font-bold text-white">${f(e.modelNumber)}</span>`:``}
            ${e.category?`<span class="font-semibold text-aluminium-600">${f(e.category.replace(/-/g,` `))}</span>`:``}
            <a href="${f(e.pageUrl)}" class="link-underline font-semibold text-primary-700">View product</a>
          </p>
        </div>
        <button
          type="button"
          data-quote-remove="${f(e.productSlug)}"
          class="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-aluminium-500 transition-colors hover:bg-danger-50 hover:text-danger-600"
          aria-label="Remove ${f(e.productName)} from quote list"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>
      </div>

      <div class="mt-4 grid gap-3 sm:grid-cols-[auto_1fr]">
        <div class="flex items-center gap-2" data-quantity-stepper>
          <button type="button" data-qty-minus class="grid h-10 w-10 place-items-center rounded-lg border border-aluminium-300 text-ink-800 transition-colors hover:border-primary-400" aria-label="Decrease quantity">−</button>
          <input
            data-qty-input
            data-quote-quantity="${f(e.productSlug)}"
            type="number"
            min="1"
            max="999"
            step="1"
            inputmode="numeric"
            value="${e.quantity}"
            aria-label="Quantity of ${f(e.productName)}"
            class="h-10 w-16 rounded-lg border border-aluminium-300 text-center text-sm font-bold text-ink-900"
          />
          <button type="button" data-qty-plus class="grid h-10 w-10 place-items-center rounded-lg border border-aluminium-300 text-ink-800 transition-colors hover:border-primary-400" aria-label="Increase quantity">+</button>
        </div>
        <label class="block">
          <span class="sr-only">Note for ${f(e.productName)}</span>
          <input
            type="text"
            data-quote-note="${f(e.productSlug)}"
            value="${f(e.note)}"
            placeholder="Add a note (finish, size, delivery…) — optional"
            class="h-10 w-full rounded-lg border border-aluminium-300 bg-white px-3 text-sm text-ink-900 placeholder:text-aluminium-500"
          />
        </label>
      </div>
    </li>
  `}function m(e){l.hidden=e.length>0,u.hidden=e.length===0,c.innerHTML=e.length>0?e.map(p).join(``):``,h()}function h(){d&&(d.href=r(o,n({items:i.getItems(),companyName:a})))}i.subscribe(()=>{m(i.getItems())}),c.addEventListener(`click`,e=>{let t=e.target.closest(`[data-quote-remove]`);if(t){i.remove(t.dataset.quoteRemove??``);return}}),c.addEventListener(`change`,e=>{let t=e.target;t.dataset.quoteQuantity&&i.updateQuantity(t.dataset.quoteQuantity,Number(t.value)),t.dataset.quoteNote&&i.setNote(t.dataset.quoteNote,t.value)}),u?.addEventListener(`click`,()=>{i.clear()});var g=new URLSearchParams(window.location.search).get(`product`),_=g?window.__quoteProductMap?.[g]:void 0;_&&(i.getItems().some(e=>e.productSlug===g)||i.add(_),history.replaceState({},``,`/request-quote/`)),m(i.getItems());