<!-- FloatButtons Widget - https://github.com/liveupx/Floating-Calls-Social-Buttons-for-Website-free -->
<script>
(function(){
  var cfg={"buttons":[{"type":"phone","url":"tel:01554006321","label":"Call Us","color":"#e2e9e7","icon":"📞"},{"type":"instagram","url":"https://instagram.com/escape_barber","label":"Instagram","color":"#833ab4","icon":"📷"},{"type":"whatsapp","url":"https://wa.me/201554006321","label":"WhatsApp","color":"#25d366","icon":"💬"},{"type":"maps","url":"https://maps.google.com/?q=Escape%20barbershop,%20gate%202,%20eterna,%20New%20Cairo%201,%20Cairo%20Governorate%2011835","label":"Location","color":"#4285f4","icon":"📍"}],"style":{"mainColor":"#000000","mainIconColor":"#ffffff","subColor":"#1e1e24","subTextColor":"#ffffff","position":"bottom-right","offsetX":24,"offsetY":24,"buttonSize":"medium","expandDirection":"up","mainIcon":"chat","showLabels":true,"pulseAnimation":true,"showTooltip":false}};
  var s=document.createElement('style');
  s.textContent=`
    .fb-widget{position:fixed;z-index:999999;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif}
    .fb-widget.${cfg.style.position.replace('-','.')}{
      ${cfg.style.position.includes('bottom')?'bottom':'top'}:${cfg.style.offsetY}px;
      ${cfg.style.position.includes('right')?'right':'left'}:${cfg.style.offsetX}px;
    }
    .fb-fab{width:${cfg.style.buttonSize==='small'?48:cfg.style.buttonSize==='large'?64:56}px;height:${cfg.style.buttonSize==='small'?48:cfg.style.buttonSize==='large'?64:56}px;border-radius:50%;border:none;cursor:pointer;font-size:1.5rem;display:flex;align-items:center;justify-content:center;transition:all .3s;box-shadow:0 4px 20px rgba(0,0,0,.3)}
    .fb-fab:hover{transform:scale(1.1)}
    ${cfg.style.pulseAnimation?'.fb-fab{animation:fbPulse 2s infinite}@keyframes fbPulse{0%,100%{box-shadow:0 4px 20px '+cfg.style.mainColor+'40}50%{box-shadow:0 4px 30px '+cfg.style.mainColor+'80}}':''}
    .fb-buttons{position:absolute;display:flex;flex-direction:${cfg.style.expandDirection==='left'||cfg.style.expandDirection==='right'?'row':'column'};gap:10px;opacity:0;visibility:hidden;transition:all .3s;
      ${cfg.style.expandDirection==='up'?'bottom:70px;right:0':''}
      ${cfg.style.expandDirection==='down'?'top:70px;right:0':''}
      ${cfg.style.expandDirection==='left'?'right:70px;bottom:0':''}
      ${cfg.style.expandDirection==='right'?'left:70px;bottom:0':''}
    }
    .fb-widget.open .fb-buttons{opacity:1;visibility:visible}
    .fb-btn{display:flex;align-items:center;gap:8px;padding:10px 16px;border-radius:50px;border:none;cursor:pointer;font-size:.875rem;font-weight:500;white-space:nowrap;text-decoration:none;transition:all .2s;transform:${cfg.style.expandDirection==='up'||cfg.style.expandDirection==='down'?'translateY(10px)':'translateX(10px)'};opacity:0}
    .fb-widget.open .fb-btn{transform:translate(0);opacity:1}
    .fb-btn:hover{transform:${cfg.style.expandDirection==='left'?'translateX(-4px)':cfg.style.expandDirection==='right'?'translateX(4px)':cfg.style.expandDirection==='up'?'translateY(-4px)':'translateY(4px)'} !important}
    .fb-icon{font-size:1rem}
    ${cfg.style.showTooltip?'.fb-fab[data-tooltip]:hover::before{content:attr(data-tooltip);position:absolute;bottom:110%;left:50%;transform:translateX(-50%);background:#333;color:#fff;padding:6px 12px;border-radius:6px;font-size:.75rem;white-space:nowrap}':''}
  `;
  document.head.appendChild(s);
  
  var w=document.createElement('div');
  w.className='fb-widget '+cfg.style.position;
  w.innerHTML=`
    <div class="fb-buttons">
      ${cfg.buttons.map(function(b,i){return '<a href="'+b.url+'" target="_blank" rel="noopener" class="fb-btn" style="background:'+b.color+';color:'+cfg.style.subTextColor+';transition-delay:'+(i*50)+'ms"><span class="fb-icon">'+b.icon+'</span>'+(cfg.style.showLabels?'<span>'+b.label+'</span>':'')+'</a>'}).join('')}
    </div>
    <button class="fb-fab" style="background:${cfg.style.mainColor};color:${cfg.style.mainIconColor}" ${cfg.style.showTooltip?'data-tooltip="Contact Us"':''}>
      <span style="transition:transform .3s">${{plus:'+',chat:'💬',phone:'📞',menu:'☰',dots:'⋮'}[cfg.style.mainIcon]}</span>
    </button>
  `;
  document.body.appendChild(w);
  
  var fab=w.querySelector('.fb-fab');
  var icon=fab.querySelector('span');
  fab.onclick=function(){
    w.classList.toggle('open');
    icon.style.transform=w.classList.contains('open')?'rotate(45deg)':'';
  };
  document.addEventListener('click',function(e){if(!w.contains(e.target))w.classList.remove('open'),icon.style.transform=''});
})();
</script>
<!-- End FloatButtons Widget -->