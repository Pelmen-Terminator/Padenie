'use strict';
const $=id=>document.getElementById(id);
const pl=(n,f)=>{const a=Math.abs(n)%100,b=a%10;return a>10&&a<20?f[2]:b===1?f[0]:b>1&&b<5?f[1]:f[2]};
/* ---------- Диалоги ---------- */
const dialog=$('infoDialog'),modalTitle=$('modalTitle'),modalEyebrow=$('modalEyebrow'),modalBody=$('modalBody');
function openInfo(title,eyebrow,html,wide){modalTitle.textContent=title;modalEyebrow.textContent=eyebrow;modalBody.innerHTML=html;dialog.classList.toggle('wide',!!wide);if(typeof dialog.showModal==='function'){if(!dialog.open)dialog.showModal()}else alert(title+'\n\n'+modalBody.textContent)}
function closeInfo(){if(dialog.open)dialog.close()}
$('closeDialog').addEventListener('click',closeInfo);
$('confirmDialog').addEventListener('click',closeInfo);
dialog.addEventListener('click',e=>{const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeInfo()});
const spoilerInfo='<p>Материалы могут содержать сюжетные спойлеры. Предупреждение нужно только для того, чтобы вы случайно не прочитали важные детали сюжета.</p><p>Все материалы общедоступны: паролей и кодов доступа нет. Спойлеры внутри статей скрыты размытием — нажмите «Показать спойлер», чтобы прочитать.</p>';
['showSpoilerGuide','aboutSpoilers'].forEach(id=>$(id).addEventListener('click',()=>openInfo('Протокол спойлеров','ПРАВИЛА ЧТЕНИЯ',spoilerInfo)));
$('accessButton').addEventListener('click',()=>openInfo('Доступ к архиву','СИСТЕМА АРХИВА','<p>Все материалы общедоступны. Пароли и коды доступа не используются. Предупреждения показываются только для защиты от случайных спойлеров.</p>'));
/* ---------- Данные ---------- */
const anomalyTaxonomy = `<p><b>Уровни опасности:</b> I — низкая; II — умеренная; III — высокая; IV — критическая; V — катастрофическая; VI — планетарная.</p>
<section><h3>1. Неизвестные — акт I</h3><p><b>Среда:</b> любая. <b>Происхождение:</b> Ингрис. Базовая форма и наиболее распространённая категория. Организмы почти не изменились после появления на Земле; внешний вид сильно различается.</p><p><b>Подклассы:</b> малые — быстрые, многочисленные и относительно слабые по отдельности; средние — наиболее разнообразные, от человеческого размера до нескольких метров; крупные — физически сильные, некоторые способны разрушать здания и инфраструктуру.</p></section>
<section><h3>2. Лесные — акт II</h3><p><b>Среда:</b> леса, тайга, чащи и болотистые леса. Адаптированы к растительным и грибным экосистемам.</p><p><b>Звериные:</b> напоминают животных, но обладают аномальной анатомией. <b>Флора:</b> маскируются под растения, иногда перемещаются или захватывают территорию органической тканью. <b>Мицелиальные:</b> грибоподобные формы, распространяющие споры и создающие колонии.</p></section>
<section><h3>3. Зимние — акт II</h3><p><b>Среда:</b> горы, тундра, ледники и снег. Высокая устойчивость к холоду. <b>Ледяные:</b> выдерживают экстремальные температуры и используют лёд для защиты. <b>Горные:</b> приспособлены к скалам, ущельям и высотам, имеют мощные конечности.</p></section>
<section><h3>4. Городские — акт II</h3><p><b>Среда:</b> города, посёлки, промышленные зоны и здания. Используют человеческую среду для маскировки.</p><p><b>Перевёртыши:</b> меняют облик и могут имитировать людей, иногда выдавая себя мимикой или движениями. <b>Мимики:</b> копируют живых существ и неодушевлённые объекты — мебель, машины, двери, стены и небольшие здания. <b>Нежить:</b> управляет мёртвой биологической тканью, иногда объединяя останки нескольких организмов.</p></section>
<section><h3>5. Пещерные — акт II</h3><p><b>Среда:</b> пещеры, шахты, тоннели, катакомбы и подземные сооружения. Практически не зависят от солнечного света.</p><p><b>Големы:</b> используют камень, металл и минералы для тела или панциря. <b>Энтоморфы:</b> насекомоподобные формы, иногда образующие колонии. <b>Подземники:</b> перемещаются через грунт и мягкие породы, создавая туннельные системы.</p></section>
<section><h3>6. Пустынные — акт II</h3><p><b>Среда:</b> пустыни, полупустыни, каменистые пустоши и мезы. Устойчивы к жаре и недостатку воды.</p><p><b>Арахниды:</b> паукообразные формы с несколькими парами конечностей и хитиновым покровом. <b>Пустынники:</b> уникальные организмы, напоминающие существ из мифологии; легенды могут сохранять память о встречах с ними. <b>Рептилии:</b> формы с плотной кожей и высокой температурной устойчивостью.</p></section>
<section><h3>7. Водные — акт II</h3><p><b>Среда:</b> реки, озёра, моря и океаны. <b>Озёрные:</b> пресноводные водоёмы и глубины водохранилищ. <b>Морские:</b> моря и прибрежные воды. <b>Океанические:</b> крупные глубоководные организмы, редко появляющиеся у поверхности.</p></section>
<section><h3>8. Космические — все акты</h3><p><b>Среда:</b> космос, астероиды и другие планеты. Не все происходят от Ингриса. <b>Планетарные:</b> связаны с планетами и способны существовать в непригодных для земной жизни условиях. <b>Ксеносы:</b> разумные или потенциально разумные внеземные организмы, не связанные непосредственно с Ингрисом; могут иметь язык, культуру, технологии, государства и религии и не обязательно являются монстрами. В архиве уровень опасности ксеносов обозначен как VI.</p></section>`;
const categoryEntries={
 heroes:{title:'Главные герои',eyebrow:'КАТАЛОГ ДОСЬЕ',items:[['nikita','Никита Разумовский','19 лет · биология'],['sergey','Сергей Николаенко','20 лет · механика и программирование'],['veronika','Вероника Бруль','21 год · математика, физика и биохимия']]},
 supporting:{title:'Второстепенные персонажи',eyebrow:'ЛИЧНЫЕ ДЕЛА',items:[['nekromik','Алексей «Некромик» Юрьевич','Антагонист первой главы'],['pavel','Павел Разумовский','Отец Никиты · 1965–2018'],['ksenia','Ксения Разумовская','Мать Никиты · заражена P-19']]},
 antagonists:{title:'Антагонисты',eyebrow:'ДОСЬЕ ПРОТИВНИКОВ',items:[['nekromik','Алексей «Некромик» Юрьевич','Второстепенный антагонист главы I'],['ingris','Ингрис','Главный антагонист первого акта'],['rosey','Матерь Роузи','Возможный антагонист третьего акта']]},
 anomalies:{title:'Аномалии',eyebrow:'КЛАССИФИКАЦИЯ',items:[['p19','Prion-19 / P-19','Аномальный инфекционный агент'],['imi','Ими «Имитатор»','Уровень опасности II в начале истории, затем I'],['anomaly-index','Классификация аномалий','Восемь экологических и внеземных категорий']]},
 organizations:{title:'Организации',eyebrow:'СТРУКТУРЫ И ГРУППЫ',items:[['sout','Корпорация SOUT','Международная организация'],['blood-moon-cult','Культ Кровавой Луны','Межмировая организация · секретный архив']]},
 locations:{title:'Локации',eyebrow:'ГЕОГРАФИЯ МИРА',items:[]},
 documents:{title:'Документы',eyebrow:'ПЕРВИЧНЫЕ ИСТОЧНИКИ',items:[]},
 branches:{title:'Временные ветки',eyebrow:'АЛЬТЕРНАТИВНЫЕ СЦЕНАРИИ',items:[]},
 items:{title:'Предметы',eyebrow:'КАТАЛОГ ПРЕДМЕТОВ',items:[['necronomicon','Некрономикон','Книга, написанная Алексеем «Некромиком» Юрьевичем']]},
 planets:{title:'Планеты',eyebrow:'АСТРОНОМИЧЕСКИЙ КАТАЛОГ',items:[]},

 races:{title:'Люди и ксеносы',eyebrow:'БИОЛОГИЯ / ИСТОРИЯ ЗЕМЛИ',items:[['races','Люди и ксеносы','Открытое досье о человечестве и древней расе Земли']]}
};
const articleIndex=(()=>{const m=new Map();Object.values(categoryEntries).forEach(d=>d.items.forEach(([key,title,sub])=>{if(!m.has(key))m.set(key,{key,title,sub,cat:d.title})}));return[...m.values()]})();
const clueCards=[{title:'Запись из лабораторного журнала',text:'«Образец реагирует на повреждение иначе, чем ожидалось. Повторить наблюдение после смены персонала». Источник записи не указан.',status:'РЕДАКЦИОННАЯ УЛИКА / НЕ КАНОН'},{title:'Страница без номера',text:'В экземпляре «Некрономикона» описан организм, который не значится ни в одном открытом каталоге. Дата создания страницы неизвестна.',status:'НАМЁК НА СЮЖЕТНУЮ ЗАГАДКУ'},{title:'Маршрут доставки',text:'В накладной курьера указан адрес, которого нет в обычном городском справочнике. Поле получателя оставлено пустым.',status:'ИДЕЯ ДЛЯ БУДУЩЕГО ЭПИЗОДА'},{title:'Фрагмент инвентарной ведомости',text:'В списке оборудования есть позиция с кодом RS, но строка с названием вырвана. Связь с конкретной организацией не подтверждена.',status:'РЕДАКЦИОННАЯ УЛИКА / НЕ КАНОН'}];
const raceHTML={humans:'<h2>Люди (Homo sapiens)</h2><p>Человек разумный — вид приматов семейства гоминид и единственный ныне живущий представитель рода Homo. Согласно современным научным данным, Homo sapiens сформировался в Африке примерно 300 тысяч лет назад, после чего представители вида расселились по всем континентам.</p><p>Люди обладают развитым языком, абстрактным мышлением, сложной социальной организацией и способностью накапливать знания через культуру и образование. Человеческие общества отличаются разнообразием языков, традиций, религий и политических систем. Современные человеческие популяции относятся к одному биологическому виду.</p><p><small>Источник общих сведений: Википедия, статья «Человек разумный».</small></p>',xenos:'<h2>Ксеносы</h2><p>Ксеносы — древняя разумная раса, которая, согласно материалам вселенной «Падение», жила на Земле задолго до появления людей. Их цивилизация исчезла, а сведения о ней были утрачены или скрыты.</p><div class="article-warning"><b>СЕКРЕТНАЯ ИНФОРМАЦИЯ / СПОЙЛЕР:</b> ксеносы были почти полностью уничтожены пятимерным существом. Это событие стало причиной гибели их цивилизации; подробности и природа существа остаются засекреченными.</div>'};
const entryDialogs={
 necronomicon:['Некрономикон','ПРЕДМЕТ / КНИГА','<div class="article-warning"><b>СПОЙЛЕР:</b> статья содержит сведения о прошлом Алексея «Некромика» Юрьевича.</div><div class="fact-table"><div><span>Тип</span><b>Книга</b></div><div><span>Автор</span><b>Алексей «Некромик» Юрьевич</b></div><div><span>Статус автора</span><b>Второстепенный антагонист первой главы</b></div><div><span>Содержание</span><b>Подробности пока не раскрыты</b></div></div><p>«Некрономикон» — книга, написанная Алексеем «Некромиком» Юрьевичем, бывшим сержантом полиции из Челябинска. В биографии Некромика книга связана с его тайной стороной жизни. Известно, что он способен сохранять спокойствие и тепло по отношению к близким, однако его выражение лица резко меняется, если кто-то обнаруживает его секрет.</p><p>Точное содержание книги, обстоятельства её написания и то, насколько она связана с аномальными событиями, пока не определены в доступном каноне. Поэтому эти детали не добавляются без подтверждения автора.</p>'],
 rosey:['Матерь Роузи','ВОЗМОЖНЫЙ АНТАГОНИСТ АКТА III','<div class="article-warning"><b>СПОЙЛЕР:</b> раскрывает сведения о культе Кровавой Луны.</div><div class="fact-table"><div><span>Настоящее имя</span><b>Нимриэль</b></div><div><span>Происхождение</span><b>Планета Ирангус</b></div><div><span>Возраст при рождении</span><b>Около 11 миллионов лет назад по человеческому исчислению</b></div><div><span>Статус</span><b>Возможный антагонист третьего акта</b></div></div><p>Матерь Роузи — объект поклонения культа Кровавой Луны. Изначально она была эльфийкой с цветущей планеты Ирангус, населённой эльфами и разнообразной растительностью.</p><p>Нимриэль вела обычную жизнь, однако постепенно увлеклась тёмной магией. После неудачного эксперимента она мутировала и превратилась в огромное чудовищное существо с маской клоунессы вместо лица. Мутация дала ей способности, связанные с перемещением между мирами. После превращения её дальнейшая судьба неизвестна.</p><h3>Известные способности</h3><ul><li>Создание порталов и переход между мирами.</li><li>Усиленная телепатия.</li><li>Призыв монстров, созданных культом Кровавой Луны.</li><li>Другие способности, природа и пределы которых неизвестны.</li></ul>'],
 'anomaly-index':['Классификация аномалий','АРХИВ / АКТЫ I–II',anomalyTaxonomy,true]
};
const spoilerStubs={'p19-origin':['Происхождение P-19','СЮЖЕТНЫЙ СПОЙЛЕР'],'p19-gamma':['Штамм P-19γ','СЮЖЕТНЫЙ СПОЙЛЕР'],'sout-internals':['Внутренняя структура SOUT','СЮЖЕТНЫЙ СПОЙЛЕР'],'nekromik-secret':['Тайна Некромика','СЮЖЕТНЫЙ СПОЙЛЕР']};
function openStub(key){const s=spoilerStubs[key]||['Материал','СЮЖЕТНЫЙ СПОЙЛЕР'];openInfo(s[0],s[1],'<p>Этот материал пока не опубликован: автор ещё не передал подтверждённые сведения, а выдумывать канон архив не должен.</p><p>Статья появится здесь, когда канон будет утверждён. Всё, что уже известно, написано на этой странице.</p>')}
/* ---------- Поиск ---------- */
const searchInput=$('searchInput'),searchCount=$('searchCount'),searchEmpty=$('searchEmpty'),searchResults=$('searchResults');
const cards=[...document.querySelectorAll('.category-card')];
function runSearch(){const q=searchInput.value.trim().toLocaleLowerCase('ru');let shown=0;
 cards.forEach(c=>{const ok=!q||(c.textContent+' '+c.dataset.search).toLocaleLowerCase('ru').includes(q);c.hidden=!ok;if(ok)shown++});
 const found=q?articleIndex.filter(a=>(a.title+' '+a.sub+' '+a.cat).toLocaleLowerCase('ru').includes(q)).slice(0,8):[];
 searchResults.hidden=!found.length;
 searchResults.innerHTML=found.map(a=>`<button type="button" class="search-result" data-open-article="${a.key}"><strong>${a.title}</strong><span>${a.cat} · ${a.sub}</span></button>`).join('');
 searchCount.textContent=(shown+' '+pl(shown,['раздел','раздела','разделов'])+(found.length?' · '+found.length+' '+pl(found.length,['статья','статьи','статей']):'')).toUpperCase();
 searchEmpty.hidden=shown>0||found.length>0}
searchInput.addEventListener('input',runSearch);
document.addEventListener('keydown',e=>{if(e.key==='/'&&!/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)&&!dialog.open){e.preventDefault();searchInput.focus();searchInput.scrollIntoView({block:'center'})}});
/* ---------- Меню ---------- */
const menuToggle=$('menuToggle'),mainNav=$('mainNav'),navLinks=[...mainNav.querySelectorAll('a')];
function setMenu(open){mainNav.classList.toggle('open',open);menuToggle.setAttribute('aria-expanded',String(open));menuToggle.textContent=open?'×':'☰'}
menuToggle.addEventListener('click',()=>setMenu(!mainNav.classList.contains('open')));
navLinks.forEach(a=>a.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
/* ---------- Экраны и маршруты (#/c/раздел, #/a/статья) ---------- */
const mainContent=document.querySelector('main'),articleView=$('articleView'),backBtn=$('backToArchive'),crumbEl=articleView.querySelector('.article-breadcrumb'),categoryBox=$('categoryContent');
const baseTitle='ПАДЕНИЕ — Архив вселенной';
let currentCategory=null;
const catOf=key=>{const has=c=>categoryEntries[c]&&categoryEntries[c].items.some(i=>i[0]===key);return has(currentCategory)?currentCategory:Object.keys(categoryEntries).find(has)||null};
const fixedCrumbs={'heroes-index':'ГЛАВНЫЕ ГЕРОИ / <b>КАТАЛОГ ДОСЬЕ</b>',p19:'АНОМАЛИИ / БАКТЕРИАЛЬНЫЕ АНОМАЛИИ / <b>P-19</b>'};
function enterArticleView(){mainContent.hidden=true;articleView.hidden=false;navLinks.forEach(a=>a.classList.remove('active'));const rd=$('raceDetail');if(rd)rd.hidden=true;window.scrollTo({top:0,behavior:'instant'})}
function showHome(id){mainContent.hidden=false;articleView.hidden=true;document.title=baseTitle;const el=id&&id!=='home'?$(id):null;if(el)el.scrollIntoView({behavior:'smooth',block:'start'});else window.scrollTo({top:0,behavior:'instant'})}
function showCategory(cat){const d=categoryEntries[cat];if(!d){location.replace('#categories');return}
 currentCategory=cat;enterArticleView();
 articleView.querySelectorAll('.article-document').forEach(el=>el.hidden=el.dataset.articleKey!=='category');
 const n=d.items.length;
 categoryBox.innerHTML=`<div class="article-label"><span>РАЗДЕЛ АРХИВА</span><span>${d.eyebrow}</span></div><h1 class="article-title">${d.title}</h1><p class="article-subtitle">${n?n+' '+pl(n,['материал','материала','материалов']):'Материалов пока нет'}</p>`+(n?`<p class="article-intro">Выберите карточку, чтобы открыть досье.</p><div class="category-modal-grid">${d.items.map(x=>`<button type="button" class="category-modal-card" data-open-article="${x[0]}"><small>${x[0].toUpperCase()}</small><b>${x[1]}</b><span>${x[2]}</span><em>ОТКРЫТЬ ↗</em></button>`).join('')}</div>`:'<p class="category-empty">Статьи этого раздела пока не добавлены. Категория готова к заполнению.</p>');
 crumbEl.innerHTML='АРХИВ / <b>'+d.title.toUpperCase()+'</b>';
 backBtn.textContent='← К РАЗДЕЛАМ';backBtn.dataset.target='#categories';
 document.title=d.title+' — ПАДЕНИЕ'}
function showArticle(key){const doc=articleView.querySelector(`.article-document[data-article-key="${key}"]`);if(!doc||key==='category'){location.replace('#categories');return}
 const cat=catOf(key);if(cat)currentCategory=cat;enterArticleView();
 articleView.querySelectorAll('.article-document').forEach(el=>el.hidden=el!==doc);
 const item=cat&&categoryEntries[cat].items.find(i=>i[0]===key);
 crumbEl.innerHTML=fixedCrumbs[key]||(item?categoryEntries[cat].title.toUpperCase()+' / <b>'+item[1].toUpperCase()+'</b>':'АРХИВ / <b>МАТЕРИАЛ</b>');
 backBtn.textContent=cat&&key!=='heroes-index'?'← К РАЗДЕЛУ':'← ВЕРНУТЬСЯ В АРХИВ';backBtn.dataset.target=cat?'#/c/'+cat:'#categories';
 const t=doc.querySelector('.article-title');document.title=(t?t.textContent:'Материал')+' — ПАДЕНИЕ'}
function route(){closeInfo();const h=location.hash;let m;
 if(m=h.match(/^#\/c\/([\w-]+)$/))showCategory(m[1]);
 else if(m=h.match(/^#\/a\/([\w-]+)$/))showArticle(m[1]);
 else showHome(decodeURIComponent(h.replace(/^#/,'')))}
window.addEventListener('hashchange',route);
backBtn.addEventListener('click',()=>{location.hash=backBtn.dataset.target||'#categories'});
/* подсветка пункта меню при прокрутке */
if('IntersectionObserver'in window){const spy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&!mainContent.hidden){const h=e.target.dataset.nav;navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===h))}}),{rootMargin:'-35% 0px -60% 0px'});
 [['hero','#home'],['categories','#categories'],['story','#story'],['timeline','#timeline']].forEach(([id,h])=>{const el=$(id);if(el){el.dataset.nav=h;spy.observe(el)}})}
/* ---------- Открытие материалов ---------- */
function openEntry(key){const d=entryDialogs[key];if(d){openInfo(d[0],d[1],d[2],d[3]);return}closeInfo();location.hash='#/a/'+key}
function showClue(){const c=clueCards[Math.floor(Math.random()*clueCards.length)];openInfo(c.title,'СЛУЧАЙНАЯ АРХИВНАЯ НАХОДКА',`<p>${c.text}</p><p class="clue-status">${c.status}</p><button class="button button-primary" data-another-clue type="button">СЛЕДУЮЩАЯ УЛИКА ↗</button>`)}
$('randomClue').addEventListener('click',showClue);
document.addEventListener('click',e=>{const t=e.target;let b;
 if(b=t.closest('[data-open-article]')){openEntry(b.dataset.openArticle);return}
 if(b=t.closest('[data-open-character]')){openEntry(b.dataset.openCharacter);return}
 if(b=t.closest('[data-secret-target]')){openStub(b.dataset.secretTarget);return}
 if(t.closest('[data-another-clue]')){showClue();return}
 if(b=t.closest('.article-toc a')){e.preventDefault();const el=$(b.getAttribute('href').slice(1));if(el)el.scrollIntoView({behavior:'smooth',block:'start'});return}
 if(t.closest('#backRaces')){const x=$('raceDetail');if(x)x.hidden=true;return}
 if(b=t.closest('[data-race]')){const box=$('raceDetail'),content=$('raceDetailContent');if(!box||!content)return;content.innerHTML=raceHTML[b.dataset.race]||'';box.hidden=false;box.scrollIntoView({behavior:'smooth',block:'nearest'})}
});
/* ---------- Спойлеры: скрыты, пока читатель сам не нажмёт ---------- */
document.querySelectorAll('.spoiler-block:not(.secret-spoiler)').forEach(block=>{block.classList.add('is-covered');const btn=document.createElement('button');btn.type='button';btn.className='button button-primary spoiler-reveal';btn.textContent='ПОКАЗАТЬ СПОЙЛЕР';btn.addEventListener('click',()=>{block.classList.remove('is-covered');btn.remove()});block.append(btn)});
route();
