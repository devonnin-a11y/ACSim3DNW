
function loop(){
 const s=state.sim,i=window.input;
 if(i.up) s.pos.z-=s.speed;
 if(i.down) s.pos.z+=s.speed;
 if(i.left) s.pos.x-=s.speed;
 if(i.right) s.pos.x+=s.speed;
 THREEWORLD.sim.position.set(s.pos.x,1,s.pos.z);
 THREEWORLD.camera.position.set(s.pos.x,8,s.pos.z+10);
 THREEWORLD.camera.lookAt(THREEWORLD.sim.position);
 tryGather();
 autoAttack();
 document.getElementById("player-level").textContent="Lv "+s.level;
 THREEWORLD.renderer.render(THREEWORLD.scene,THREEWORLD.camera);
 requestAnimationFrame(loop);
}
loop();
