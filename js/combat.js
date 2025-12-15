
let cd=0;
window.autoAttack=()=>{
 if(cd>0){cd--;return;}
 const w=weapons[state.sim.equipment.main];
 state.world.enemies.forEach((e,i)=>{
  if(e.position.distanceTo(THREEWORLD.sim.position)<=w.range){
   e.userData.hp-=w.damage;
   cd=w.speed;
   addWeaponXP(state.sim.equipment.main);
   addXP(e.userData.isBoss?50:25,"combat");
   if(e.userData.hp<=0){
    THREEWORLD.scene.remove(e);
    state.world.enemies.splice(i,1);
   }
  }
 });
};
