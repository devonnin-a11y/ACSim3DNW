
function spawnEnemy(x,z,isBoss=false){
 const hp= isBoss ? 150 : 30 + state.sim.level*5;
 const e=new THREE.Mesh(
  new THREE.SphereGeometry(isBoss?1:0.6,12,12),
  new THREE.MeshStandardMaterial({color:isBoss?0x550000:0xaa3333})
 );
 e.position.set(x,0.6,z);
 e.userData={hp,isBoss};
 THREEWORLD.scene.add(e);
 state.world.enemies.push(e);
}
spawnEnemy(4,4,false);
spawnEnemy(-5,-5,true);
