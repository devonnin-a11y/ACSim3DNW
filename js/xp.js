
window.addXP=(amt,skill)=>{
 const s=state.sim;
 s.xp+=amt;
 s.skills[skill].xp+=amt;
 if(s.xp>=s.xpToNext){
  s.xp-=s.xpToNext;
  s.level++;
  s.xpToNext=Math.floor(s.xpToNext*1.25);
 }
 if(s.skills[skill].xp>=100){
  s.skills[skill].xp-=100;
  s.skills[skill].level++;
 }
};
window.addWeaponXP=(weapon)=>{
 state.sim.weaponMastery[weapon]=(state.sim.weaponMastery[weapon]||1)+1;
};
