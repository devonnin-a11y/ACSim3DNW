
function spawn(type,x,z,hp,skill){
 const m=new THREE.Mesh(
  new THREE.CylinderGeometry(0.5,0.6,1.2,6),
  new THREE.MeshStandardMaterial({color:0x888888})
 );
 m.position.set(x,0.6,z);
 m.userData={type,hp,skill};
 THREEWORLD.scene.add(m);
 state.world.objects.push(m);
}

spawn("stone",2,2,50,"mining");
spawn("iron",-3,4,120,"mining");

window.tryGather=()=>{
 state.world.objects.forEach((o,i)=>{
  if(o.position.distanceTo(THREEWORLD.sim.position)<1){
   o.userData.hp--;
   if(o.userData.hp<=0){
    state.sim.inventory[o.userData.type]++;
    addXP(10,o.userData.skill);
    THREEWORLD.scene.remove(o);
    state.world.objects.splice(i,1);
   }
  }
 });
};
