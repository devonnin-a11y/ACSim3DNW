
window.togglePhone=()=>{
 document.getElementById("phone").style.display="flex";
 document.getElementById("overlay").style.display="block";
};
window.closeAllPanels=()=>{
 ["phone","inventory","equipment","skills","perks","journal"].forEach(id=>{
  const el=document.getElementById(id);
  if(el) el.style.display="none";
 });
 document.getElementById("overlay").style.display="none";
};
window.toggleInventory=()=>{
 document.getElementById("inventory").style.display="block";
 document.getElementById("inventory").innerHTML=JSON.stringify(state.sim.inventory,null,2);
};
window.toggleEquipment=()=>{
 document.getElementById("equipment").style.display="block";
 document.getElementById("equipment").innerHTML=Object.keys(weapons)
  .map(w=>`<button onclick="state.sim.equipment.main='${w}'">${w}</button>`).join("<br>");
};
window.toggleSkills=()=>{
 const s=state.sim.skills;
 document.getElementById("skills").style.display="block";
 document.getElementById("skills").innerHTML=Object.entries(s)
  .map(([k,v])=>`${k}: Lv ${v.level}`).join("<br>");
};
window.toggleJournal=()=>{
 document.getElementById("journal").style.display="block";
 document.getElementById("journal").innerHTML="Bosses & quests coming next.";
};
