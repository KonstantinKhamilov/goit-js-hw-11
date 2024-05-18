import{a,S as l,i as d}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const u="43943872-0cd26c97fed3a84845e31fcef";function p(s){return a.get(`https://pixabay.com/api/?key=${u}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>t.data.hits).catch(t=>console.error(t))}function f(s,t){if(s.length===0){iziToast.error({title:"Error",message:"Изображения, соответствующие вашему запросу, не найдены. Пожалуйста, попробуйте еще раз."});return}const n=s.map(r=>`
    <div class="image-card">
      <a href="${r.largeImageURL}"><img src="${r.webformatURL}" alt="${r.tags}" title=""/></a>
      <div class="image-info">
        <p><span>Просмотры: </span>${r.views}</p>
        <p><span>Загрузки: </span>${r.downloads}</p>
        <p><span>Лайки: </span>${r.likes}</p>
        <p><span>Комментарии: </span>${r.comments}</p>
      </div>
    </div>
  `).join("");t.innerHTML=n}const m=document.querySelector("#search-form"),h=document.querySelector("#search-input"),g=document.querySelector("#gallery"),c=document.querySelector("#loader");m.addEventListener("submit",s=>{s.preventDefault();const t=h.value.trim();if(!t){alert("Пожалуйста, введите ключевое слово для поиска");return}c.classList.remove("hidden"),p(t).then(n=>{c.classList.add("hidden"),f(n,g),new l(".image-card img",{}).refresh()}).catch(n=>{console.error(n),d.error({title:"Error",message:"Произошла ошибка при загрузке изображений. Пожалуйста, попробуйте еще раз."})})});
//# sourceMappingURL=commonHelpers.js.map
