import"./assets/styles-B4s-4mBC.js";console.log("Form");const e={email:"",message:""},s=document.querySelector(".feedback-form");document.addEventListener("DOMContentLoaded",()=>{const a=localStorage.getItem("feedback-form-state");if(a){const t=JSON.parse(a);e.email=t.email||"",e.message=t.message||"",s.elements.email.value=e.email,s.elements.message.value=e.message}});s.addEventListener("input",a=>{const t=a.target;e[t.name]=t.value,localStorage.setItem("feedback-form-state",JSON.stringify(e))});s.addEventListener("submit",a=>{if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log("Form Data:",e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",s.reset()});
//# sourceMappingURL=2-form.js.map
