
window.perkTree={
 combat:{PowerStrike:"+2 dmg",QuickSlash:"-10% cooldown"},
 mining:{HardHit:"+20% node damage",LuckyOre:"+10% rare"},
 woodcutting:{SwiftAxe:"+15% speed"},
 foraging:{GreenThumb:"+1 yield"},
 crafting:{Efficient:"+10% cost reduction"}
};

window.togglePerks=()=>{
 const p=document.getElementById("perks");
 p.style.display="block";
 p.innerHTML=Object.entries(perkTree)
  .map(([k,v])=>`<b>${k}</b><br>`+
   Object.entries(v).map(([pk,pv])=>
    `<button onclick="learnPerk('${k}','${pk}')">${pk}</button> ${pv}`
   ).join("<br>")
  ).join("<hr>");
 document.getElementById("overlay").style.display="block";
};

window.learnPerk=(skill,perk)=>{
 state.sim.skills[skill].perks[perk]=true;
};
