(function () {

  window.addEventListener("DOMContentLoaded", function () {

    var cfg = {
      buttons: [
        {
          type: "phone",
          url: "tel:01554006321",
          label: "Call Us",
          color: "#000000",
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
          url: "https://maps.google.com/?q=Escape%20barbershop,%20gate%202,%20eterna,%20New%20Cairo%201,%20Cairo%20Governorate%2011835",
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
        showLabels: true
      }
    };

    // ===== CSS =====
    var style = document.createElement("style");
    style.textContent = `
      .fb-widget{
        position:fixed;
        bottom:${cfg.style.offsetY}px;
        right:${cfg.style.offsetX}px;
        z-index:999999;
        font-family:Arial;
        display:flex;
        flex-direction:column;
        align-items:flex-end;
        gap:10px;
      }

      .fb-fab{
        width:56px;
        height:56px;
        border-radius:50%;
        border:none;
        background:${cfg.style.mainColor};
        color:${cfg.style.mainIconColor};
        font-size:22px;
        cursor:pointer;
        box-shadow:0 4px 20px rgba(0,0,0,0.3);
      }

      .fb-buttons{
        display:none;
        flex-direction:column;
        gap:10px;
      }

      .fb-widget.open .fb-buttons{
        display:flex;
      }

      .fb-btn{
        display:flex;
        align-items:center;
        gap:8px;
        padding:10px 14px;
        border-radius:30px;
        color:#fff;
        text-decoration:none;
        font-size:14px;
        white-space:nowrap;
      }
    `;
    document.head.appendChild(style);

    // ===== HTML =====
    var widget = document.createElement("div");
    widget.className = "fb-widget";

    widget.innerHTML = `
      <div class="fb-buttons">
        ${cfg.buttons.map(function (b) {
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

    document.body.appendChild(widget);

    // ===== Toggle =====
    var fab = widget.querySelector(".fb-fab");

    fab.onclick = function () {
      widget.classList.toggle("open");
    };

  });

})();
