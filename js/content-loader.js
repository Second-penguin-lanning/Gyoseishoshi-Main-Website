document.addEventListener("DOMContentLoaded",function(){

const lang=document.documentElement.lang || "ja";


/* NEWS */

const newsBox=document.getElementById("newsList");

if(newsBox){

CONTENT.news.forEach(n=>{

const li=document.createElement("li");

li.innerHTML=
`<span class="news-date">${n.date}</span> ${n[lang]}`;

newsBox.appendChild(li);

});

}


/* QA */

const qaBox=document.getElementById("qaList");

if(qaBox){

CONTENT.qa.forEach(q=>{

const div=document.createElement("div");

div.className="qa-item";

div.innerHTML=
`
<h4>${q.q[lang]}</h4>
<p>${q.a[lang]}</p>
`;

qaBox.appendChild(div);

});

}

});
