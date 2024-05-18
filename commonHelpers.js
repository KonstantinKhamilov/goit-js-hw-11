import{a as u,S as p,i as f}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const m="43943872-0cd26c97fed3a84845e31fcef";function h(s){return u.get(`https://pixabay.com/api/?key=${m}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>t.data.hits).catch(t=>console.error(t))}function y(s,t){if(s.length===0){iziToast.error({title:"Error",message:"Изображения, соответствующие вашему запросу, не найдены. Пожалуйста, попробуйте еще раз."});return}const n=s.map(o=>`
    <div class="image-card">
      <a href="${o.largeImageURL}"><img src="${o.webformatURL}" alt="${o.tags}" title=""/></a>
      <div class="image-info">
        <p><span>Просмотры: </span>${o.views}</p>
        <p><span>Загрузки: </span>${o.downloads}</p>
        <p><span>Лайки: </span>${o.likes}</p>
        <p><span>Комментарии: </span>${o.comments}</p>
      </div>
    </div>
  `).join("");t.innerHTML=n}const g=document.querySelector("#search-form"),a=document.querySelector("#search-input"),l=document.querySelector("#gallery"),c=document.querySelector("#loader");let d;g.addEventListener("submit",s=>{s.preventDefault();const t=a.value.trim();if(!t){alert("Пожалуйста, введите ключевое слово для поиска");return}c.classList.remove("hidden"),h(t).then(n=>{c.classList.add("hidden"),y(n,l),d=new p(".image-card a",{}),a.value=""}).catch(n=>{console.error(n),f.error({title:"Error",message:"Произошла ошибка при загрузке изображений. Пожалуйста, попробуйте еще раз."})})});l.addEventListener("click",s=>{s.target.nodeName==="IMG"&&d.show()});
//# sourceMappingURL=commonHelpers.js.map
