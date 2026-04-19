window.addEventListener("DOMContentLoaded", function () {

  var cfg = {
    buttons: [
      {
        type: "phone",
        url: "tel:01554006321",
        label: "Call Us",
        color: "#e2e9e7",
        icon: "📞"
      },
      {
        type: "instagram",
        url: "https://instagram.com/escape_barber",
        label: "Instagram",
        color: "#833ab4",
        icon: "📷"
      },
      {
        type: "whatsapp",
        url: "https://wa.me/201554006321",
        label: "WhatsApp",
        color: "#25d366",
        icon: "💬"
      },
      {
        type: "maps",
        url: "https://maps.google.com/?q=Escape%20barbershop",
        label: "Location",
        color: "#4285f4",
        icon: "📍"
      }
    ],
    style: {
      mainColor: "#000000",
      mainIconColor: "#ffffff",
      position: "bottom-right",
      offsetX: 24,
      offsetY: 24,
      buttonSize: "medium",
      expandDirection: "up",
      mainIcon: "chat",
      showLabels: true,
      pulseAnimation: true
    }
  };

  // ===== CSS =====
  var s = document.createElement("style");
  s.textContent = `
    .fb-widget{
      position:fixed;
      z-index:999999;
      font-family: Arial, sans-serif;
    }

    .fb-widget.bottom-right{
      bottom:${cfg.style.offsetY}px;
      right:${cfg.style.offsetX}px;
    }

    .fb-fab{
      width:${cfg.style.buttonSize === "small" ? 48 : cfg.style.buttonSize === "large" ? 64 : 56}px;
      height:${cfg.style.buttonSize === "small" ? 48 : cfg.style.buttonSize === "large" ? 64 : 56}px;
      border-radius:50%;
      border:none;
      cursor:pointer;
      background:${cfg.style.mainColor};
      color:${cfg.style.mainIconColor};
      font-size:22px;
      display:flex;
      align-items:center;
      justify-content:center;
      box-shadow:0 4px 20px rgba(0,0,0,0.3);
    }

    .fb-buttons{
      display:flex;
      flex-direction:column;
      gap:10px;
      margin-bottom:10px;
      opacity:0;
      visibility:hidden;
      transform:translateY(10px);
      transition:0.3s;
    }

    .fb-widget.open .fb-buttons{
      opacity:1;
      visibility:visible;
      transform:translateY(0);
    }

    .fb-btn{
      display:flex;
      align-items:center;
      gap:8px;
      padding:10px 14px;
      border-radius:30px;
      text-decoration:none;
      color:#fff;
      font-size:14px;
      white-space:nowrap;
    }
  `;
  document.head.appendChild(s);

  // ===== HTML =====
  var w = document.createElement("div");
  w.className = "fb-widget bottom-right";

  w.innerHTML = `
    <div class="fb-buttons">
      ${cfg.buttons.map(function (b, i) {
        return `
          <a href="${b.url}" target="_blank" class="fb-btn" style="background:${b.color}">
            <span>${b.icon}</span>
            ${cfg.style.showLabels ? `<span>${b.label}</span>` : ""}
          </a>
        `;
      }).join("")}
    </div>

    <button class="fb-fab">💬</button>
  `;

  document.body.appendChild(w);

  // ===== Toggle =====
  var fab = w.querySelector(".fb-fab");

  fab.onclick = function () {
    w.classList.toggle("open");
  };

});
