function toggleMenu(){
  const nav=document.getElementById('navLinks');
  if(nav) nav.classList.toggle('show');
}

document.addEventListener('click', function(e){
  const card=e.target.closest('.org-card');
  if(card){
    card.animate(
      [{transform:'scale(1)'},{transform:'scale(.97)'},{transform:'scale(1)'}],
      {duration:220,easing:'ease-out'}
    );
  }
});

window.addEventListener('scroll',()=>{
  document.querySelectorAll('.org-card,.glass-card').forEach(el=>{
    const r=el.getBoundingClientRect();
    if(r.top<window.innerHeight-60) el.classList.add('visible');
  });
});
