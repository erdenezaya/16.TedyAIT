// AIT сэдвүүдийн интерактив дүрслэл (inline SVG / HTML / canvas, гадны library-гүй).
const VIZ = (function () {
  "use strict";
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const css = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const chips = (name, opts, cur) => `<div class="chips" role="group">${opts.map(([v, l]) => `<button class="chip${v === cur ? " on" : ""}" data-${name}="${v}">${esc(l)}</button>`).join("")}</div>`;
  const bindChips = (root, name, fn) => root.querySelectorAll(`[data-${name}]`).forEach((b) => b.addEventListener("click", () => fn(b.dataset[name])));

  // ───────────── 1. Vector vs raster (zoom) ─────────────
  function vectorRaster(root) {
    root.innerHTML = `
      <div class="row zoom-row"><label for="vz">Томруулах:</label><input id="vz" type="range" min="1" max="6" step="1" value="1"><b class="zv">1×</b></div>
      <div class="vr">
        <figure><div class="vr-box" id="vbox"></div><figcaption><b>Vector (SVG)</b><span>Математик дүрс: дахин зурагдана</span></figcaption></figure>
        <figure><div class="vr-box" id="rbox"><canvas width="24" height="24"></canvas></div><figcaption><b>Raster (PNG/JPEG)</b><span>24 × 24 = 576 пиксел</span></figcaption></figure>
      </div>
      <div class="viz-caption"></div>`;
    const S = 24, F = [19, 11];
    const canvas = root.querySelector("canvas"), ctx = canvas.getContext("2d");
    const accent = css("--accent") || "#1f5f8b";
    const shapes = (c) => {
      c.fillStyle = accent; c.beginPath(); c.arc(12, 12, 9, 0, Math.PI * 2); c.fill();
      c.fillStyle = "#fff"; c.beginPath(); c.moveTo(9, 7.5); c.lineTo(17, 12); c.lineTo(9, 16.5); c.closePath(); c.fill();
    };
    shapes(ctx);
    const cap = root.querySelector(".viz-caption");
    function draw(z) {
      const span = S / z;
      const x0 = Math.min(Math.max(F[0] - span / 2, 0), S - span), y0 = Math.min(Math.max(F[1] - span / 2, 0), S - span);
      root.querySelector("#vbox").innerHTML = `<svg viewBox="${x0} ${y0} ${span} ${span}" width="100%" height="100%" aria-label="vector logo"><circle cx="12" cy="12" r="9" fill="${accent}"/><path d="M9 7.5 L17 12 L9 16.5 Z" fill="#fff"/></svg>`;
      const box = root.querySelector("#rbox"), px = box.clientWidth || 240, unit = px / S;
      Object.assign(canvas.style, { width: `${px * z}px`, height: `${px * z}px`, left: `${-x0 * unit * z}px`, top: `${-y0 * unit * z}px` });
      root.querySelector(".zv").textContent = `${z}×`;
      cap.innerHTML = z === 1
        ? "Анхны хэмжээнд хоёулаа адилхан харагдана. Гулсагчийг баруун тийш чирж томруулаарай."
        : z < 4
          ? `<b>${z}× томруулсан.</b> Vector ирмэг нь гөлгөр хэвээр, учир нь програм тойргийг математикаар дахин зурж байна. Raster-ийн ирмэг шатлаж эхэлсэн, учир нь цөөн пикселийг сунгаж байна.`
          : `<b>${z}× томруулсан.</b> Raster-д тус тусдаа дөрвөлжин <b>пикселүүд</b> тод харагдаж байна (<b>pixelation</b>). Vector хэдэн ч дахин томруулсан гөлгөр хэвээр, файлын хэмжээ ч өөрчлөгдөхгүй. Тиймээс лого, фонт, billboard-д <b>vector</b>, гэрэл зурагт <b>raster</b> хэрэглэнэ.`;
    }
    const input = root.querySelector("#vz");
    input.addEventListener("input", () => draw(Number(input.value)));
    draw(1);
    window.addEventListener("resize", () => draw(Number(input.value)));
  }

  // ───────────── 2. VLOOKUP / HLOOKUP ─────────────
  function lookup(root) {
    const data = [["P101", "Pen", "2.50"], ["P102", "Notebook", "4.00"], ["P103", "Ruler", "1.20"], ["P104", "Stapler", "8.90"], ["P105", "Glue", "3.10"]];
    const head = ["Code", "Item", "Price"];
    let mode = "v", val = "P103", idx = 3;
    function render() {
      const found = data.findIndex((r) => r[0] === val);
      const result = found < 0 ? "#N/A" : (idx === 3 ? "$" : "") + data[found][idx - 1];
      let grid;
      if (mode === "v") {
        const L = ["A", "B", "C"];
        grid = `<table class="xl"><thead><tr><th></th>${L.map((l) => `<th>${l}</th>`).join("")}</tr></thead><tbody>
          <tr><th>1</th>${head.map((h) => `<td class="hd">${h}</td>`).join("")}</tr>
          ${data.map((r, i) => `<tr><th>${i + 2}</th>${r.map((c, j) => {
            let cl = "";
            if (j === 0 && (found < 0 || i <= found)) cl = found < 0 ? "miss" : i === found ? "hit" : "scan";
            if (i === found && j > 0) cl = j === idx - 1 ? "res" : "row";
            return `<td class="${cl}">${c}</td>`;
          }).join("")}</tr>`).join("")}</tbody></table>`;
      } else {
        const L = ["A", "B", "C", "D", "E", "F"];
        grid = `<table class="xl"><thead><tr><th></th>${L.map((l) => `<th>${l}</th>`).join("")}</tr></thead><tbody>
          ${[0, 1, 2].map((ri) => `<tr><th>${ri + 1}</th><td class="hd">${head[ri]}</td>${data.map((r, ci) => {
            let cl = "";
            if (ri === 0 && (found < 0 || ci <= found)) cl = found < 0 ? "miss" : ci === found ? "hit" : "scan";
            if (ci === found && ri > 0) cl = ri === idx - 1 ? "res" : "row";
            return `<td class="${cl}">${r[ri]}</td>`;
          }).join("")}</tr>`).join("")}</tbody></table>`;
      }
      const fn = mode === "v" ? `=VLOOKUP("${val}", $A$2:$C$6, ${idx}, FALSE)` : `=HLOOKUP("${val}", $B$1:$F$3, ${idx}, FALSE)`;
      const dir = mode === "v" ? "эхний БАГАНААС доош" : "эхний МӨРӨӨС баруун тийш";
      const idxName = mode === "v" ? "col_index_num" : "row_index_num";
      root.innerHTML = `
        ${chips("m", [["v", "VLOOKUP (босоо)"], ["h", "HLOOKUP (хэвтээ)"]], mode)}
        <div class="row lk-ctrl">
          <label>Хайх утга <select id="lv">${[...data.map((r) => r[0]), "P109"].map((c) => `<option${c === val ? " selected" : ""}>${c}</option>`).join("")}</select></label>
          <label>${idxName} <select id="li"><option value="2"${idx === 2 ? " selected" : ""}>2 (Item)</option><option value="3"${idx === 3 ? " selected" : ""}>3 (Price)</option></select></label>
        </div>
        <div class="formula"><span class="fx">fx</span><code>${esc(fn)}</code><span class="eq">→</span><b class="${found < 0 ? "bad-t" : "good-t"}">${result}</b></div>
        <div class="viz-stage">${grid}</div>
        <div class="viz-caption">${found < 0
          ? `<b>#N/A.</b> ${mode === "v" ? "VLOOKUP" : "HLOOKUP"} ${dir} "${val}"-г бүх нүдэнд хайсан ч олдсонгүй. FALSE (exact match) тул ойролцоо утга авахгүй, <b>#N/A</b> алдаа буцаана.`
          : `<b>1.</b> ${dir} "${val}"-г хайна (<span class="k-scan">саарал</span> → <span class="k-hit">олдсон</span>). <b>2.</b> Тэр ${mode === "v" ? "мөрийн" : "баганын"} <b>${idx}</b>-р нүдийг авна (${idxName}). Анхаар: ${idx} нь Excel-ийн ${mode === "v" ? "баганын үсэг биш, хүснэгт доторх дугаар" : "мөрийн дугаар биш, хүснэгт доторх дугаар"}. <b>$</b> тэмдэг нь формулыг доош хуулахад мужийг тогтвортой барина.`}</div>`;
      bindChips(root, "m", (m) => { mode = m; render(); });
      root.querySelector("#lv").addEventListener("change", (e) => { val = e.target.value; render(); });
      root.querySelector("#li").addEventListener("change", (e) => { idx = Number(e.target.value); render(); });
    }
    render();
  }

  // ───────────── 3. File size & compression ─────────────
  function fileSize(root) {
    const presets = [["Утасны гэрэл зураг", 4000, 3000, 24], ["Вэб баннер", 1200, 400, 24], ["GIF icon", 64, 64, 8], ["Full HD дэлгэц", 1920, 1080, 24]];
    root.innerHTML = `
      <div class="chips">${presets.map((p, i) => `<button class="chip" data-p="${i}">${p[0]}</button>`).join("")}</div>
      <div class="fs-in">
        <label>Width (px)<input id="fw" type="number" min="1" max="20000" value="1200"></label>
        <span>×</span>
        <label>Height (px)<input id="fh" type="number" min="1" max="20000" value="800"></label>
        <label>Colour depth<select id="fd"><option value="1">1-bit (2 өнгө)</option><option value="8">8-bit (256 өнгө, GIF)</option><option value="24" selected>24-bit (~16.7 сая, JPEG/PNG)</option></select></label>
      </div>
      <div class="fs-out"></div>`;
    const out = root.querySelector(".fs-out");
    const fmt = (n) => n.toLocaleString("en-AU");
    const human = (b) => b >= 1048576 ? `${(b / 1048576).toFixed(2)} MB` : b >= 1024 ? `${(b / 1024).toFixed(1)} KB` : `${b} bytes`;
    function calc() {
      const w = Math.max(1, Number(root.querySelector("#fw").value) || 1), h = Math.max(1, Number(root.querySelector("#fh").value) || 1), d = Number(root.querySelector("#fd").value);
      const px = w * h, bits = px * d, bytes = bits / 8;
      const jpg = bytes / 10, png = bytes / 2, max = bytes;
      const bar = (v, cls, label) => `<div class="fs-bar"><span class="fs-l">${label}</span><span class="fs-t"><i class="${cls}" style="width:${Math.max(1.5, (v / max) * 100)}%"></i></span><b>${human(Math.round(v))}</b></div>`;
      out.innerHTML = `
        <div class="work"><div><span>Пикселийн тоо</span><code>${fmt(w)} × ${fmt(h)} = ${fmt(px)} px</code></div>
          <div><span>Бит</span><code>${fmt(px)} × ${d} bit = ${fmt(bits)} bits</code></div>
          <div><span>Байт</span><code>${fmt(bits)} ÷ 8 = ${fmt(bytes)} bytes</code></div>
          <div><span>MB</span><code>${fmt(bytes)} ÷ 1024 ÷ 1024 ≈ <b>${(bytes / 1048576).toFixed(2)} MB</b></code></div></div>
        <div class="section-mini">Шахалтын дараах ойролцоо хэмжээ</div>
        ${bar(bytes, "raw", "Шахалтгүй (BMP / TIFF)")}
        ${d === 24 ? bar(png, "png", "PNG · lossless ≈ ½") + bar(jpg, "jpg", "JPEG · lossy ≈ 1/10") : bar(bytes / 2, "png", "GIF · lossless ≈ ½")}
        <div class="section-mini">Хэвлэх хэмжээ</div>
        <div class="print">300 dpi-ээр хэвлэвэл: <b>${(w / 300 * 2.54).toFixed(1)} × ${(h / 300 * 2.54).toFixed(1)} см</b> · 72 ppi-ээр дэлгэцэнд: <b>${(w / 72 * 2.54).toFixed(1)} × ${(h / 72 * 2.54).toFixed(1)} см</b></div>
        <div class="viz-caption">Томьёо: <b>width × height × colour depth ÷ 8 = bytes</b>. Шалгалтад алхам бүрээ бич (working). Шахалтын харьцаа нь зургаас хамааран өөрчлөгддөг ойролцоо утга. <b>Resampling</b> (пикселийн тоог багасгах) хэмжээг квадратаар бууруулна: өргөн, өндрийг 2 дахин багасгавал файл 4 дахин жижгэрнэ.</div>`;
    }
    root.querySelectorAll("input,select").forEach((el) => el.addEventListener("input", calc));
    root.querySelectorAll("[data-p]").forEach((b) => b.addEventListener("click", () => {
      const p = presets[Number(b.dataset.p)];
      root.querySelector("#fw").value = p[1]; root.querySelector("#fh").value = p[2]; root.querySelector("#fd").value = p[3];
      root.querySelectorAll("[data-p]").forEach((x) => x.classList.toggle("on", x === b));
      calc();
    }));
    calc();
  }

  // ───────────── 4. Site map ─────────────
  function siteMap(root) {
    const base = { n: "Home", c: [
      { n: "Menu", c: [{ n: "Breakfast" }, { n: "Lunch" }, { n: "Drinks" }] },
      { n: "About", c: [{ n: "Our Story" }, { n: "Team" }] },
      { n: "Order Online", c: [{ n: "Cart" }, { n: "Checkout" }] },
      { n: "Contact" },
    ] };
    const deep = JSON.parse(JSON.stringify(base));
    deep.c[0].c[2].c = [{ n: "Hot drinks", c: [{ n: "Coffee", c: [{ n: "Flat white" }] }] }];
    let tree = base, sel = null, isDeep = false;
    const W = 104, H = 30, GX = 116, GY = 74;
    function layout(t) {
      let leaf = 0;
      (function walk(n, d, path) {
        n.d = d; n.path = path.concat(n.n);
        if (n.c && n.c.length) { n.c.forEach((k) => walk(k, d + 1, n.path)); n.x = (n.c[0].x + n.c[n.c.length - 1].x) / 2; }
        else n.x = leaf++ * GX;
      })(t, 0, []);
      return leaf;
    }
    function render() {
      const leaves = layout(tree);
      const nodes = [], links = [];
      (function walk(n) { nodes.push(n); (n.c || []).forEach((k) => { links.push([n, k]); walk(k); }); })(tree);
      const maxD = Math.max(...nodes.map((n) => n.d));
      const vw = leaves * GX + 20, vh = (maxD + 1) * GY + 10;
      const onPath = new Set(sel ? sel.path : []);
      const svg = `<svg class="viz-svg smap" viewBox="-${W / 2 + 4} 6 ${vw} ${vh}" style="min-width:${Math.min(vw, 900)}px">
        ${links.map(([a, b]) => `<path class="lk${onPath.has(b.n) && onPath.has(a.n) ? " on" : ""}" d="M${a.x} ${a.d * GY + 20 + H} V${a.d * GY + 20 + H + (GY - H) / 2} H${b.x} V${b.d * GY + 20}"/>`).join("")}
        ${nodes.map((n) => `<g class="nd d${Math.min(n.d, 4)}${n.d > 3 ? " deep" : ""}${sel === n ? " sel" : ""}${onPath.has(n.n) ? " path" : ""}" data-n="${esc(n.n)}" tabindex="0">
            <rect x="${n.x - W / 2}" y="${n.d * GY + 20}" width="${W}" height="${H}" rx="6"/>
            <text x="${n.x}" y="${n.d * GY + 40}" text-anchor="middle">${esc(n.n)}</text>
            ${n.d ? `<text class="dep" x="${n.x + W / 2 - 4}" y="${n.d * GY + 17}" text-anchor="end">${n.d} click</text>` : ""}
          </g>`).join("")}
      </svg>`;
      root.innerHTML = `
        ${chips("t", [["0", "Сайн бүтэц"], ["1", "Хэт гүн бүтэц"]], isDeep ? "1" : "0")}
        <div class="viz-stage">${svg}</div>
        <div class="viz-caption">${sel
          ? `<b>${esc(sel.path.join(" → "))}</b>: Home-оос <b>${sel.d}</b> товшилт. ${sel.d > 3 ? `<span class="bad-t">Three-click rule зөрчигдлөө.</span> Хэрэглэгч олохгүй орхиж явах магадлалтай. Шийдэл: түвшнийг багасгаж, жишээ нь "Drinks" хуудсанд бүх ундааг шууд жагсаах.` : `<span class="good-t">Three-click rule хангагдсан ✓</span>`}`
          : isDeep
            ? `Drinks доор 3 нэмэлт түвшин нэмэхэд "Flat white" руу <b>5</b> товшилт шаардлагатай болно. <span class="bad-t">Улаан</span> хуудсууд three-click rule-ийг зөрчиж байна. Хуудас дээр дарж замыг хараарай.`
            : `Энэ бол кафены вэбсайтын <b>visual site map</b>: Home → үндсэн хуудсууд → дэд хуудсууд гэсэн <b>hierarchy</b>. Бүх хуудас Home-оос 2 товшилтоор хүрэх боломжтой. Хуудас дээр дарж Home-оос хэдэн товшилт болохыг хараарай.`}</div>`;
      bindChips(root, "t", (v) => { isDeep = v === "1"; tree = isDeep ? deep : base; sel = null; render(); });
      root.querySelectorAll(".nd").forEach((g) => {
        const pick = () => { sel = nodes.find((n) => n.n === g.dataset.n); render(); };
        g.addEventListener("click", pick);
        g.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(); } });
      });
    }
    render();
  }

  // ───────────── 5. LAN topologies ─────────────
  function topologies(root) {
    let mode = "star", fail = "";
    const node = (x, y, label, cls = "", w = 74) => `<g class="tn ${cls}"><rect x="${x - w / 2}" y="${y - 16}" width="${w}" height="32" rx="7"/><text x="${x}" y="${y + 5}" text-anchor="middle">${label}</text></g>`;
    const line = (x1, y1, x2, y2, cls = "") => `<line class="tl ${cls}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
    const M = {
      star: {
        label: "Wired star", btns: [["cable", "Нэг кабель тасрах"], ["hub", "Switch эвдрэх"]],
        draw(f) {
          const pts = [[90, 60, "PC 1"], [300, 40, "PC 2"], [510, 60, "PC 3"], [90, 240, "PC 4"], [300, 262, "Printer"], [510, 240, "PC 5"]];
          return pts.map(([x, y], i) => line(300, 150, x, y, f === "hub" || (f === "cable" && i === 0) ? "cut" : "")).join("") +
            pts.map(([x, y, l], i) => node(x, y, l, f === "hub" || (f === "cable" && i === 0) ? "off" : "")).join("") + node(300, 150, "Switch", f === "hub" ? "dead" : "hubn", 86);
        },
        cap: {
          "": "Төхөөрөмж бүр төвийн <b>switch</b>-тэй <b>тус тусын кабелиар</b> холбогдоно. Давуу тал: шинэ төхөөрөмж нэмэх, алдаа олоход хялбар. Сул тал: их кабель шаардана. Товчнууд дээр дарж эвдрэлийг туршаарай.",
          cable: "<b>PC 1-ийн кабель тасарлаа.</b> Зөвхөн PC 1 сүлжээнээс гарсан, бусад нь хэвийн ажиллаж байна. Энэ бол star topology-ийн гол <span class=\"good-t\">давуу тал</span>.",
          hub: "<b>Switch эвдэрлээ.</b> Бүх төхөөрөмж холбоогүй боллоо. Switch бол <span class=\"bad-t\">single point of failure</span>, star topology-ийн гол сул тал.",
        },
      },
      wireless: {
        label: "Wireless", btns: [["far", "Хол зай / хана"]],
        draw(f) {
          const pts = [[120, 70, "Laptop"], [480, 70, "Phone"], [110, 235, "Tablet"], [f === "far" ? 560 : 470, f === "far" ? 270 : 235, "Laptop 2"]];
          const waves = [40, 70, 100].map((r) => `<circle class="wave" cx="300" cy="150" r="${r}"/>`).join("");
          return waves + pts.map(([x, y], i) => line(300, 150, x, y, "radio" + (f === "far" && i === 3 ? " weak" : ""))).join("") +
            pts.map(([x, y, l], i) => node(x, y, l, f === "far" && i === 3 ? "weakn" : "")).join("") + node(300, 150, "WAP", "hubn", 70);
        },
        cap: {
          "": "Төхөөрөмжүүд <b>wireless access point (WAP)</b>-д радио долгионоор кабельгүй холбогдоно. Давуу тал: <span class=\"good-t\">хөдөлгөөнт, кабель хэрэггүй, зочин, утас холбоход хялбар</span>. WPA2/WPA3 шифрлэлтээр хамгаална.",
          far: "<b>Laptop 2 хол, хананы цаана байна.</b> Дохио сул тул <span class=\"bad-t\">хурд буурч, тасалдана</span>. Wireless-ийн сул тал: утастайгаас удаан, хүрээ хязгаартай, хана, хөндлөнгийн дохионы нөлөөтэй, аюулгүй байдал сул.",
        },
      },
      cs: {
        label: "Client-server", btns: [["server", "Сервер унах"]],
        draw(f) {
          const cl = [[90, "PC 1"], [230, "PC 2"], [370, "PC 3"], [510, "PC 4"]];
          return line(300, 50, 300, 140, f === "server" ? "cut" : "") + cl.map(([x]) => line(300, 140, x, 250)).join("") +
            node(300, 50, "Server", f === "server" ? "dead" : "srv", 92) + node(300, 140, "Switch", "hubn", 86) +
            cl.map(([x, l]) => node(x, 250, l, f === "server" ? "warn" : "")).join("") +
            (f === "server" ? `<text class="tnote bad-t" x="300" y="292" text-anchor="middle">Файл, нэвтрэлт, хэвлэх үйлчилгээ байхгүй</text>` : `<text class="tnote" x="390" y="54">файл · нэвтрэлт · backup · эрх</text>`);
        },
        cap: {
          "": "Төв <b>сервер</b> файл хадгалах, хэрэглэгчийн нэвтрэлт ба эрх, backup, аюулгүй байдлыг удирдана. <b>Client</b>-ууд серверээс үйлчилгээ хүснэ. Давуу тал: <span class=\"good-t\">төвлөрсөн аюулгүй байдал ба backup, том сүлжээнд өргөтгөхөд хялбар</span>. Сул тал: сервер ба мэргэжилтэн үнэтэй.",
          server: "<b>Сервер унав.</b> Компьютерууд асаалттай ч <span class=\"bad-t\">хуваалцсан файл, нэвтрэлт, хэвлэх үйлчилгээнд хандах боломжгүй</span>. Сервер бол client-server сүлжээний эмзэг цэг.",
        },
      },
      p2p: {
        label: "Peer-to-peer", btns: [["peer", "Нэг PC унтрах"]],
        draw(f) {
          const p = [[150, 70, "PC 1"], [450, 70, "PC 2"], [450, 235, "PC 3"], [150, 235, "PC 4"]];
          let s = "";
          for (let i = 0; i < 4; i++) for (let j = i + 1; j < 4; j++) s += line(p[i][0], p[i][1], p[j][0], p[j][1], f === "peer" && (i === 0 || j === 0) ? "cut" : "");
          return s + p.map(([x, y, l], i) => node(x, y, l, f === "peer" && i === 0 ? "off" : "peer")).join("") +
            `<text class="tnote" x="300" y="157" text-anchor="middle">сервергүй · бүгд тэгш эрхтэй</text>`;
        },
        cap: {
          "": "Бүх компьютер <b>тэгш эрхтэй</b>, тус бүр өөрийн файл, принтерийг бусадтай <b>шууд</b> хуваалцана. Давуу тал: <span class=\"good-t\">хямд, тохируулахад хялбар</span>. Сул тал: аюулгүй байдал ба backup төвлөрөөгүй, ~10-аас цөөн төхөөрөмжтэй жижиг сүлжээнд л тохиромжтой.",
          peer: "<b>PC 1 унтарлаа.</b> Бусад 3 компьютер хоорондоо <span class=\"good-t\">хэвийн ажилласаар</span> байна. Гэхдээ зөвхөн PC 1 дээр хадгалагдсан файлууд одоо <span class=\"bad-t\">хэнд ч хүрэхгүй</span>.",
        },
      },
    };
    function render() {
      const m = M[mode];
      root.innerHTML = `
        ${chips("tp", Object.entries(M).map(([k, v]) => [k, v.label]), mode)}
        <div class="viz-stage"><svg class="viz-svg topo" viewBox="20 10 560 290">${m.draw(fail)}</svg></div>
        <div class="viz-caption">${m.cap[fail]}</div>
        <div class="row">${m.btns.map(([k, l]) => `<button class="btn${fail === k ? " primary" : ""}" data-f="${k}">${fail === k ? "↺ Сэргээх" : "⚡ " + l}</button>`).join("")}</div>`;
      bindChips(root, "tp", (k) => { mode = k; fail = ""; render(); });
      root.querySelectorAll("[data-f]").forEach((b) => b.addEventListener("click", () => { fail = fail === b.dataset.f ? "" : b.dataset.f; render(); }));
    }
    render();
  }

  // ───────────── 6. Composition: rule of thirds + reading gravity ─────────────
  function composition(root) {
    let layout = "good", grid = true, z = false;
    function poster(l) {
      const good = l === "good";
      const img = good ? [200, 140] : [150, 210];
      return `
        <rect class="pst" x="0" y="0" width="300" height="420" rx="4"/>
        <g class="pc-title"><rect x="${good ? 18 : 60}" y="${good ? 22 : 350}" width="${good ? 150 : 180}" height="${good ? 54 : 34}" rx="3"/>
          <text x="${good ? 26 : 150}" y="${good ? 46 : 372}" ${good ? "" : 'text-anchor="middle"'}>SUMMER</text>${good ? '<text x="26" y="68">BEATS</text>' : ""}</g>
        <circle class="pc-img" cx="${img[0]}" cy="${img[1]}" r="${good ? 62 : 70}"/><text class="pc-lbl" x="${img[0]}" y="${img[1] + 4}" text-anchor="middle">performer</text>
        <g class="pc-body">${[0, 1, 2].map((k) => `<rect x="${good ? 18 : 40}" y="${(good ? 250 : 40) + k * 14}" width="${good ? 140 - k * 22 : 220 - k * 30}" height="6" rx="3"/>`).join("")}</g>
        <g class="pc-cta"><rect x="${good ? 180 : 20}" y="${good ? 350 : 92}" width="${good ? 100 : 64}" height="${good ? 46 : 22}" rx="6"/><text x="${good ? 230 : 52}" y="${good ? 371 : 107}" text-anchor="middle" ${good ? "" : 'style="font-size:8px"'}>TICKETS</text>${good ? '<text x="230" y="388" text-anchor="middle" class="sm">Sat 14 Dec</text>' : ""}</g>`;
    }
    function render() {
      const gl = grid ? `<g class="gridl">${[100, 200].map((x) => `<line x1="${x}" y1="0" x2="${x}" y2="420"/>`).join("")}${[140, 280].map((y) => `<line x1="0" y1="${y}" x2="300" y2="${y}"/>`).join("")}${[[100, 140], [200, 140], [100, 280], [200, 280]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5"/>`).join("")}</g>` : "";
      const zp = z ? `<g class="zpath"><path d="M28 18 H272 L28 402 H272"/><path class="ah" d="M262 396 L274 402 L262 408 Z"/><text x="10" y="13">① primary optical area</text><text x="290" y="416" text-anchor="end">terminal area ④</text></g>` : "";
      const good = layout === "good";
      root.innerHTML = `
        ${chips("l", [["good", "Сайн зохиомж"], ["bad", "Муу зохиомж"]], layout)}
        <div class="row tg"><label><input type="checkbox" id="cg"${grid ? " checked" : ""}> Rule of thirds сүлжээ</label><label><input type="checkbox" id="cz"${z ? " checked" : ""}> Reading gravity (Z-pattern)</label></div>
        <div class="comp"><svg class="poster" viewBox="0 0 300 420" role="img" aria-label="poster layout">${poster(layout)}${gl}${zp}</svg>
          <div class="viz-caption">${good
            ? `<b>Сайн зохиомж.</b> Гол дүрс (performer) <b>rule of thirds</b>-ийн баруун дээд огтлолцлын цэг дээр байрлаж байна, төвд биш тул илүү динамик харагдана. Гарчиг <b>primary optical area</b> буюу зүүн дээд хэсэгт байгаа тул нүд эхлээд түүнийг харна. <b>TICKETS</b> (call-to-action) ба огноо <b>terminal area</b> буюу баруун доод хэсэгт, нүд хамгийн сүүлд хүрэх газарт байна. Текст нэг зүүн шугамд зэрэгцсэн (<b>grid and alignment</b>).`
            : `<b>Муу зохиомж.</b> Гол дүрс яг <b>төвд</b> байгаа тул статик, огтлолцлын цэгүүдийг ашиглаагүй. Гарчиг доод хэсэгт, жижиг TICKETS товч зүүн дээд буланд байгаа нь <b>reading gravity</b>-ийн эсрэг: нүд эхлээд хамгийн бага чухал зүйлийг харж, call-to-action-ийг алдана. Элементүүд нэг шугамд зэрэгцээгүй.`}
            <br><br>Сүлжээ ба Z-pattern-ийг асааж, хоёр зохиомжийг харьцуулаарай.</div></div>`;
      bindChips(root, "l", (v) => { layout = v; render(); });
      root.querySelector("#cg").addEventListener("change", (e) => { grid = e.target.checked; render(); });
      root.querySelector("#cz").addEventListener("change", (e) => { z = e.target.checked; render(); });
    }
    render();
  }

  return {
    "vector-raster": vectorRaster,
    lookup,
    compression: fileSize,
    "site-maps": siteMap,
    topologies,
    composition,
  };
})();
