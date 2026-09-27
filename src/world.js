// A lightweight, hand-drawn isometric world. No WebGL, downloads or game engine.
export function createWorld(canvas, onVisit) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return { start() {}, stop() {}, travel() {}, destroy() {} };
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const spots = [{x:1.5,y:5.2},{x:5.8,y:1.8},{x:7.3,y:6.3}];
  const player = {x:4.4,y:5.4};
  let target=null, active=false, visited=new Set(), raf, previous=0, visible=true, destroyed=false;
  const keys=new Set();
  const project=(x,y,z=0)=>[380+(x-y)*31,158+(x+y)*16-z];
  function polygon(points, fill, stroke) {
    ctx.beginPath(); points.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.closePath();
    ctx.fillStyle=fill;ctx.fill();if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=.7;ctx.stroke();}
  }
  function box(x,y,w,d,h,colors,z=0) {
    const a=project(x,y,z+h),b=project(x+w,y,z+h),c=project(x+w,y+d,z+h),e=project(x,y+d,z+h);
    polygon([e,c,project(x+w,y+d,z),project(x,y+d,z)],colors[2]);
    polygon([b,c,project(x+w,y+d,z),project(x+w,y,z)],colors[1]);polygon([a,b,c,e],colors[0]);
  }
  function ellipse(x,y,rx,ry,fill){ctx.beginPath();ctx.ellipse(x,y,rx,ry,0,0,Math.PI*2);ctx.fillStyle=fill;ctx.fill();}
  function tree(x,y,size=1) {
    const [sx,sy]=project(x,y,24);ellipse(sx+6,sy+5,14*size,6*size,'#223c2820');
    box(x-.06,y-.06,.12,.12,22*size,['#92745a','#624c3e','#776049'],24);
    for(let i=0;i<3;i++){
      const h=(23+i*11)*size, w=(19-i*3)*size;
      polygon([[sx-w,sy-h+13],[sx,sy-h-19],[sx,sy-h+22]],i===2?'#5d8e65':'#3c704c');
      polygon([[sx,sy-h-19],[sx+w,sy-h+13],[sx,sy-h+22]],i===2?'#81ab74':'#609158');
    }
  }
  function crystal(x,y,color,t,got) {
    const [sx,sy]=project(x,y,24); const bob=reduced.matches?0:Math.sin(t*2.1+x)*4;
    ellipse(sx,sy,17,8,got?'#60854b22':color+'26');
    if(got){ctx.font='bold 19px system-ui';ctx.fillStyle='#426047';ctx.textAlign='center';ctx.fillText('✓',sx,sy-12);return;}
    ctx.save();ctx.globalAlpha=.09;polygon([[sx-13,sy-10],[sx-9,sy-110],[sx+9,sy-110],[sx+13,sy-10]],color);ctx.restore();
    const cy=sy-27+bob;
    polygon([[sx,cy-19],[sx+11,cy],[sx,cy+17],[sx-11,cy]],color);
    polygon([[sx,cy-19],[sx+11,cy],[sx,cy+17]],'#ffffff65');
    polygon([[sx,cy-19],[sx,cy+17],[sx-11,cy]],'#00000012');
  }
  const tileColors=[['#b6d29e','#85a67a','#739267'],['#c7d8d0','#90b2a8','#7d9e94'],['#dcc6a1','#af9876','#978568']];
  const objects=[
    {x:.7,y:3.7,draw:()=>tree(.7,3.7,.95)}, {x:1.5,y:7.5,draw:()=>tree(1.5,7.5,1.15)},
    {x:2.6,y:7.1,draw:()=>tree(2.6,7.1,.8)}, {x:0,y:5.6,draw:()=>tree(0,5.6,.65)},
    {x:3.2,y:2.5,draw:()=>tree(3.2,2.5,.78)}, {x:3.5,y:1,draw:()=>tree(3.5,1,.7)},
    {x:8.6,y:3.5,draw:()=>tree(8.6,3.5,.9)},
    {x:1.9,y:3.2,draw:()=>{
      box(1.9,3.2,.9,.9,34,['#fffbed','#ddd4ba','#b8c0a3'],24);
      const a=project(1.85,3.15,58),b=project(2.85,3.15,58),c=project(2.85,4.15,58),d=project(1.85,4.15,58),peak=project(2.35,3.65,86);
      polygon([a,b,peak],'#d58356');polygon([b,c,peak],'#cb6d42');polygon([c,d,peak],'#eaa777');
      box(2.81,3.52,.025,.28,14,['#506b5f','#506b5f','#506b5f'],27);
    }},
    {x:5.2,y:.7,draw:()=>{box(5.2,.7,.85,.85,60,['#e5f1ed','#80a7a0','#9dbab1'],24);box(5.32,.82,.61,.61,5,['#567d7b','#4a6c70','#628987'],84);box(5.52,1.02,.2,.2,27,['#b9d9d0','#81a8a4','#8db9ae'],89);}},
    {x:7,y:1,draw:()=>{box(7,1,.9,.8,37,['#e2eeea','#769592','#a1b8ac'],24);box(7.12,1.12,.65,.55,4,['#79c4c4','#4a858f','#589d9f'],61);}},
    {x:7.7,y:2.6,draw:()=>{box(7.7,2.6,.7,.7,67,['#e3eeeb','#7faaa3','#a6c4b8'],24);for(let i=0;i<3;i++)box(8.405,2.69,.01,.45,3,['#456568','#456568','#456568'],35+i*14);}},
    {x:6.3,y:7.6,draw:()=>{
      const [x,y]=project(6.3,7.6,24);ellipse(x,y,39,22,'#ad8863');ellipse(x,y-6,31,20,'#c19b72');ellipse(x,y-13,20,12,'#d8b089');ellipse(x,y-18,9,5,'#544d38');
    }},
    {x:8.8,y:7.8,draw:()=>tree(8.8,7.8,.7)}, {x:8.8,y:5,draw:()=>tree(8.8,5,.65)},
  ];
  function draw(t) {
    const dpr=Math.min(devicePixelRatio||1,2);const width=canvas.clientWidth,height=canvas.clientHeight;
    if(canvas.width!==Math.round(width*dpr)||canvas.height!==Math.round(height*dpr)){canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);}
    ctx.setTransform(canvas.width/760,0,0,canvas.height/570,0,0);ctx.clearRect(0,0,760,570);
    // The island casts one soft shadow, keeping the individual tiles readable.
    for(let i=7;i>=0;i--)ellipse(380,362,225+i*5,70+i*3,`rgba(48,69,43,${.009+(7-i)*.001})`);
    ctx.strokeStyle='#849b7520';ctx.lineWidth=1;
    for(let i=-7;i<18;i++){
      const a=project(i,-5,-40),b=project(i,16,-40);ctx.beginPath();ctx.moveTo(...a);ctx.lineTo(...b);ctx.stroke();
      const c=project(-5,i,-40),d=project(16,i,-40);ctx.beginPath();ctx.moveTo(...c);ctx.lineTo(...d);ctx.stroke();
    }
    for(let sum=0;sum<=18;sum++)for(let x=0;x<=9;x++){
      const y=sum-x;if(y<0||y>9)continue;
      if((x<1&&y<3)||(x>7&&y<1)||(x<2&&y>7)||(x>8&&y>8)||(x<1&&y>6)||(y>8&&x<5))continue;
      const zone=x<4?0:(y<4?1:2);const colors=tileColors[zone];
      box(x,y,.99,.99,24,colors);
      if((x===4&&y>1&&y<8)||(y===4&&x>1&&x<8))box(x+.05,y+.05,.89,.89,1,['#ede8d5','#d6d3bd','#ded9c0'],24);
      if((x*13+y*7)%11===0&&zone!==1)box(x+.4,y+.25,.17,.19,3,['#9eb183','#879c72','#718961'],24);
    }
    // Pheromone trails in the simulation corner.
    ctx.strokeStyle='#f0d9ab';ctx.lineWidth=2;ctx.setLineDash([3,5]);
    ctx.beginPath();for(let k=0;k<24;k++){const p=project(6.2+Math.sin(k*.2)*1.1,5.8+k*.08,25);k?ctx.lineTo(...p):ctx.moveTo(...p);}ctx.stroke();ctx.setLineDash([]);
    for(let i=0;i<7;i++){const phase=(i/7+(reduced.matches?0:t*.018))%1;const [x,y]=project(6.2+Math.sin(phase*4.8)*1.1,5.8+phase*1.92,26);ellipse(x,y,3,1.9,'#534d37');ellipse(x+4,y+1,2,1.6,'#534d37');}
    const renderObjects=[...objects,{x:player.x,y:player.y,draw:()=>{
      const [px,py]=project(player.x,player.y,25);ellipse(px,py+4,14,7,'#34482b33');
      const bob=target&&!reduced.matches?Math.sin(t*20)*2:0;
      box(player.x-.19,player.y-.19,.38,.38,17,['#ffc775','#f18443','#e57036'],27+bob);
      box(player.x-.14,player.y-.14,.28,.28,10,['#f9e4c6','#e9c498','#e6d1ab'],44+bob);
      const [fx,fy]=project(player.x+.145,player.y,49+bob);ctx.fillStyle='#27392e';ctx.fillRect(fx-1,fy-1,2.5,3);
    }}];renderObjects.sort((a,b)=>(a.x+a.y)-(b.x+b.y)).forEach(o=>o.draw());
    spots.forEach((s,i)=>crystal(s.x,s.y,['#89c94f','#61b9c2','#ecac59'][i],t,visited.has(i)));
    ctx.font='600 10px system-ui';ctx.textAlign='center';ctx.fillStyle='#6e806d';ctx.fillText('EXPLORE · BUILD · PLAY',380,499);
  }
  function step(time){
    if(destroyed)return;const dt=Math.min((time-previous)/1000,.04)||.016;previous=time;
    if(visible&&!document.hidden){
      if(active&&keys.size){target=null;let dx=0,dy=0;
        if(keys.has('ArrowRight')||keys.has('d')){dx+=1;dy-=1;}if(keys.has('ArrowLeft')||keys.has('a')){dx-=1;dy+=1;}
        if(keys.has('ArrowUp')||keys.has('w')){dx-=1;dy-=1;}if(keys.has('ArrowDown')||keys.has('s')){dx+=1;dy+=1;}
        const norm=Math.hypot(dx,dy)||1;player.x=Math.max(.1,Math.min(9,player.x+dx/norm*dt*4));player.y=Math.max(.1,Math.min(8.5,player.y+dy/norm*dt*4));
        spots.forEach((s,i)=>{if(!visited.has(i)&&Math.hypot(player.x-s.x,player.y-s.y)<.6){visited.add(i);keys.clear();onVisit(i,true);}});
      }
      if(target){const s=spots[target.index],dx=s.x-player.x,dy=s.y-player.y,dist=Math.hypot(dx,dy);const speed=dt*5;
        if(dist<.05||reduced.matches){player.x=s.x;player.y=s.y;const i=target.index;target=null;if(active)visited.add(i);onVisit(i,active);}
        else {player.x+=dx/dist*Math.min(speed,dist);player.y+=dy/dist*Math.min(speed,dist);}
      }
      draw(time/1000);
    }
    raf=requestAnimationFrame(step);
  }
  function keydown(e){if(!active||document.activeElement!==canvas)return;const k=e.key.length===1?e.key.toLowerCase():e.key;if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','w','a','s','d'].includes(k)){e.preventDefault();keys.add(k);}}
  function keyup(e){keys.delete(e.key.length===1?e.key.toLowerCase():e.key);}
  function blur(){keys.clear();}
  function click(e){const b=canvas.getBoundingClientRect();const px=(e.clientX-b.left)/b.width*760,py=(e.clientY-b.top)/b.height*570;
    const distances=spots.map(s=>{const p=project(s.x,s.y,40);return Math.hypot(p[0]-px,p[1]-py);});const i=distances.indexOf(Math.min(...distances));if(distances[i]<100)travel(i);else if(active){canvas.focus();}}
  function travel(index){target={index};canvas.focus({preventScroll:true});}
  canvas.addEventListener('keydown',keydown);window.addEventListener('keyup',keyup);canvas.addEventListener('blur',blur);canvas.addEventListener('click',click);
  const observer=new IntersectionObserver(([e])=>{visible=e.isIntersecting;});observer.observe(canvas);raf=requestAnimationFrame(step);
  return {travel,start(){active=true;visited.clear();target=null;player.x=4.4;player.y=5.4;canvas.focus({preventScroll:true});},stop(){active=false;target=null;keys.clear();},destroy(){destroyed=true;cancelAnimationFrame(raf);observer.disconnect();canvas.removeEventListener('keydown',keydown);canvas.removeEventListener('blur',blur);canvas.removeEventListener('click',click);window.removeEventListener('keyup',keyup);}};
}
