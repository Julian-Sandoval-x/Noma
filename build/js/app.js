document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector("input[name='nombre']"),t=document.querySelector("input[name='email']"),o=document.querySelector("input[name='telefono']"),n=document.querySelector("input[name='fecha']"),r=document.querySelector("input[name='hora']"),a=document.querySelector("input[name='personas']"),u=(document.getElementById("reservacion"),document.querySelector(".button")),l=document.querySelector(".delete");let i=[];u.addEventListener("click",(u=>{u.preventDefault(),i=[],e.value||i.push("El nombre es obligatorio"),t.value||i.push("El email es obligatorio"),o.value||i.push("El telefono es obligatorio"),n.value||i.push("La fecha es obligatoria"),r.value||i.push("La hora es obligatoria"),a.value||i.push("El numero de personas es obligatorio")})),l.addEventListener("click",(e=>{e.preventDefault();const t=l.closest("form");Swal.fire({title:"¿Estás seguro?",text:"Una vez eliminado, no podrás recuperar esta reservación.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Sí, eliminar",cancelButtonText:"Cancelar"}).then((e=>{e.isConfirmed&&t.submit()}))}))}));