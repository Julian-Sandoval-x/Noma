document.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelectorAll(".add-button"),e=document.getElementById("cartSidebar"),n=document.getElementById("cartItems"),a=document.getElementById("cartTotal"),i=document.getElementById("closeCart"),c=document.getElementById("payButton"),o=document.getElementById("mainContent");let s=JSON.parse(localStorage.getItem("cart"))||[];function d(t,e){const n=s.find((e=>e.id===t));n&&(n.quantity+=e,n.quantity<=0?s=s.filter((e=>e.id!==t)):n.subtotal=n.quantity*n.price,localStorage.setItem("cart",JSON.stringify(s)),r())}function r(){n.innerHTML="";let t=0;s.forEach((e=>{const a=document.createElement("div");a.classList.add("cart-item"),a.innerHTML=`\n                <img src="${e.img}.jpg" alt="${e.name}">\n                <div>\n                    <h4>${e.name}</h4>\n                    <div class="quantity-controls">\n                        <button class="decrease" data-id="${e.id}">-</button>\n                        <span>Cantidad: ${e.quantity}</span>\n                        <button class="increase" data-id="${e.id}">+</button>\n                    </div>\n                    <p>Subtotal: $${e.subtotal.toFixed(2)}</p>\n                </div>\n            `,n.appendChild(a),t+=e.subtotal})),a.innerHTML=`Total: $${t.toFixed(2)}`;const e=document.querySelectorAll(".increase"),i=document.querySelectorAll(".decrease");e.forEach((t=>{t.addEventListener("click",(()=>{d(parseInt(t.getAttribute("data-id"),10),1)}))})),i.forEach((t=>{t.addEventListener("click",(()=>{d(parseInt(t.getAttribute("data-id"),10),-1)}))}))}t.forEach((t=>{t.addEventListener("click",(async()=>{const n=parseInt(t.getAttribute("data-id"),10);!function(t){const e=s.find((e=>e.id===t.id));e?(e.quantity++,e.subtotal=e.quantity*e.price):s.push({...t,quantity:1,subtotal:t.price});localStorage.setItem("cart",JSON.stringify(s)),r()}(await async function(t){const e=await fetch(`getItemDetails.php?id=${t}`);return await e.json()}(n)),e.classList.add("open"),o.classList.add("shifted")}))})),i.addEventListener("click",(()=>{e.classList.remove("open"),o.classList.remove("shifted")})),c.addEventListener("click",(async()=>{await async function(){(await fetch("processPayment.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})).ok?(alert("Pago realizado con éxito"),s=[],localStorage.setItem("cart",JSON.stringify(s)),r(),e.classList.remove("open"),o.classList.remove("shifted")):alert("Error al procesar el pago")}()})),r()}));