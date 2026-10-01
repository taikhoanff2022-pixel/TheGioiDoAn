function money(n){return new Intl.NumberFormat('vi-VN').format(n)+'đ'}
function getCart(){try{return JSON.parse(localStorage.getItem('comtam_cart')||'[]')}catch{return[]}}
function saveCart(c){localStorage.setItem('comtam_cart',JSON.stringify(c));updateCartCount()}
function updateCartCount(){const n=getCart().reduce((s,x)=>s+x.qty,0);document.querySelectorAll('#cartCount').forEach(e=>e.textContent=n)}
function showToast(t){const e=document.getElementById('toast');if(!e)return;e.textContent=t;e.classList.add('show');setTimeout(()=>e.classList.remove('show'),1800)}
function addToCart(id){const p=PRODUCTS.find(x=>x.id===id);if(!p)return;let c=getCart(),x=c.find(x=>x.id===id);if(x)x.qty++;else c.push({id,qty:1});saveCart(c);showToast('Đã thêm '+p.name+' vào giỏ')}
function renderProducts(list,el){if(!el)return;if(!list.length){el.innerHTML='<div class="empty">Không tìm thấy món phù hợp.</div>';return}
el.innerHTML=list.map(p=>`<article class="card"><div class="gallery">${p.images.map((im,j)=>`<img src="${im}" alt="${p.name} - ảnh ${j+1}" loading="lazy" onerror="this.style.display='none'">`).join('')}</div><div class="card-body"><span class="category-tag">${p.category}</span><h3>${p.name}</h3><p class="desc">${p.desc}</p><div class="price">${money(p.price)}</div><button class="add" onclick="addToCart(${p.id})">＋ Thêm vào giỏ</button></div></article>`).join('')}
function renderGroupedMenu(list,el,grouped=true){
 if(!el)return;
 if(!list.length){el.innerHTML='<div class="empty">Không tìm thấy món phù hợp.</div>';return}
 if(!grouped){renderProducts(list,el);return}
 const order=['Cơm','Bún','Phở','Bánh mì','Miến','Mì','Xôi','Món cuốn & chiên','Món đặc sản','Chè','Trà sữa','Trà trái cây','Đá xay','Kem','Nước giải khát'];
 const icons={'Cơm':'🍚','Bún':'🍜','Phở':'🍲','Bánh mì':'🥖','Miến':'🍜','Mì':'🍜','Xôi':'🍚','Món cuốn & chiên':'🥟','Món đặc sản':'⭐','Chè':'🍨','Trà sữa':'🧋','Trà trái cây':'🍓','Đá xay':'🥤','Kem':'🍦','Nước giải khát':'🥤'};
 el.innerHTML=order.map(cat=>{const items=list.filter(p=>p.category===cat);if(!items.length)return '';return `<section class="menu-category"><div class="category-heading"><div><span class="category-icon">${icons[cat]}</span><h2>${cat}</h2><span class="category-count">${items.length} món</span></div><span>Chọn món bạn thích</span></div><div class="product-grid">${items.map(p=>`<article class="card ${cat!=='Cơm'?'drink-card':''}"><div class="gallery single-gallery"><img src="${p.images[0]}" alt="${p.name}" loading="lazy"></div><div class="card-body"><span class="category-tag">${p.category}</span><h3>${p.name}</h3><p class="desc">${p.desc}</p><div class="price">${money(p.price)}</div><button class="add" onclick="addToCart(${p.id})">＋ Thêm vào giỏ</button></div></article>`).join('')}</div></section>`}).join('')
}
function renderCart(){const box=document.getElementById('cartItems');if(!box)return;let c=getCart();if(!c.length){box.innerHTML='<div class="empty">🛒 Giỏ hàng đang trống.<br><a class="continue" href="menu.html">Chọn món ngay →</a></div>';calc();return}
box.innerHTML=c.map(x=>{const p=PRODUCTS.find(y=>y.id===x.id);if(!p)return '';return `<div class="cart-item"><div class="cart-thumb"><img src="${p.images[0]}" alt="${p.name}"></div><div><span class="category-tag">${p.category}</span><h3>${p.name}</h3><p>${money(p.price)}</p></div><div class="qty"><button onclick="changeQty(${p.id},-1)">−</button><b>${x.qty}</b><button onclick="changeQty(${p.id},1)">＋</button></div><button class="remove" onclick="removeItem(${p.id})">Xóa</button></div>`}).join('');calc()}
function changeQty(id,d){let c=getCart(),x=c.find(x=>x.id===id);if(!x)return;x.qty+=d;if(x.qty<=0)c=c.filter(y=>y.id!==id);saveCart(c);renderCart()}
function removeItem(id){saveCart(getCart().filter(x=>x.id!==id));renderCart()}
function applyVoucher(){const v=(document.getElementById('voucher')?.value||'').trim().toUpperCase();localStorage.setItem('comtam_voucher',v);calc();showToast(v==='COMTAM10'?'Áp dụng giảm 10% thành công':'Mã chưa đúng. Dùng COMTAM10 để thử.')}
function calc(){let c=getCart(),sub=c.reduce((s,x)=>{const p=PRODUCTS.find(y=>y.id===x.id);return s+(p?p.price*x.qty:0)},0);const v=(localStorage.getItem('comtam_voucher')||'').toUpperCase();let dis=v==='COMTAM10'?Math.round(sub*.1):0;let ship=sub?15000:0;let total=sub+ship-dis;document.getElementById('subtotal')?.replaceChildren(document.createTextNode(money(sub)));document.getElementById('ship')?.replaceChildren(document.createTextNode(money(ship)));document.getElementById('discount')?.replaceChildren(document.createTextNode('-'+money(dis)));document.getElementById('total')?.replaceChildren(document.createTextNode(money(total)));return {sub,dis,ship,total}}
function makeOrder(code,name,phone,address,payment){const c=getCart();const totals=calc();return {code,name,phone,address,payment,items:c.map(x=>{const p=PRODUCTS.find(y=>y.id===x.id);return {name:p?.name||'Món',qty:x.qty,price:p?.price||0,category:p?.category||''}}),subtotal:totals.sub,discount:totals.dis,shipping:totals.ship,total:totals.total,status:0,createdAt:new Date().toISOString()}}
async function sendOrderEmail(order){
  // Website đang chạy dạng HTML tĩnh (file:// hoặc Live Server). Fetch/AJAX tới
  // FormSubmit có thể bị trình duyệt chặn CORS, gây lỗi "Failed to fetch".
  // Vì vậy dùng HTML form POST + iframe ẩn, không cần CSRF token.
  const subject='ĐƠN HÀNG MỚI - '+order.code+' - Cơm Tấm Nhà Mình';
  const itemText=order.items.map(i=>`${i.name} x${i.qty} - ${money(i.price*i.qty)}`).join('\n');
  const time=new Date(order.createdAt).toLocaleString('vi-VN');
  const fields={
    '_subject':subject,
    '_template':'table',
    '_captcha':'false',
    '_replyto':'taikhoanff2022@gmail.com',
    '_autoresponse':'Cảm ơn bạn đã đặt món tại Cơm Tấm Nhà Mình. Mã đơn của bạn là '+order.code+'.',
    'Mã đơn hàng':order.code,
    'Khách hàng':order.name,
    'Số điện thoại':order.phone,
    'Địa chỉ giao hàng':order.address,
    'Thanh toán':order.payment,
    'Danh sách món':itemText,
    'Tạm tính':money(order.subtotal),
    'Phí giao hàng':money(order.shipping),
    'Giảm giá':money(order.discount),
    'Tổng cộng':money(order.total),
    'Thời gian':time
  };

  return new Promise((resolve)=>{
    try{
      const iframe=document.createElement('iframe');
      const frameName='formsubmit_'+Date.now();
      iframe.name=frameName;
      iframe.id=frameName;
      iframe.style.cssText='position:absolute;width:0;height:0;border:0;opacity:0;pointer-events:none';
      document.body.appendChild(iframe);

      const form=document.createElement('form');
      form.method='POST';
      form.action='https://formsubmit.co/taikhoanff2022@gmail.com';
      form.target=frameName;
      form.style.display='none';

      Object.entries(fields).forEach(([k,v])=>{
        const input=document.createElement('input');
        input.type='hidden'; input.name=k; input.value=String(v);
        form.appendChild(input);
      });
      document.body.appendChild(form);
      form.submit();

      // Không đọc response của FormSubmit vì khác domain. Sau khi POST được gửi,
      // coi request là đã chuyển đi; FormSubmit sẽ xử lý phía máy chủ.
      setTimeout(()=>{
        form.remove(); iframe.remove();
        resolve({sent:true,method:'formsubmit-html'});
      },1200);
    }catch(e){
      console.warn('FormSubmit lỗi:',e);
      const body=[
        'MÃ ĐƠN: '+order.code,
        'KHÁCH HÀNG: '+order.name,
        'SỐ ĐIỆN THOẠI: '+order.phone,
        'ĐỊA CHỈ: '+order.address,
        'THANH TOÁN: '+order.payment,
        '', 'DANH SÁCH MÓN:', itemText,
        '', 'TẠM TÍNH: '+money(order.subtotal),
        'PHÍ GIAO HÀNG: '+money(order.shipping),
        'GIẢM GIÁ: '+money(order.discount),
        'TỔNG CỘNG: '+money(order.total),
        'THỜI GIAN: '+time
      ].join('\n');
      const mailto='mailto:taikhoanff2022@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
      resolve({sent:false,method:'fallback',mailto});
    }
  });
}
let pendingCheckoutOrder=null;

function showQrPayment(order){
  pendingCheckoutOrder=order;
  const modal=document.getElementById('qrPaymentModal');
  if(!modal)return false;
  modal.classList.add('show');
  modal.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
  return true;
}

function cancelQrPayment(){
  const modal=document.getElementById('qrPaymentModal');
  if(modal){modal.classList.remove('show');modal.setAttribute('aria-hidden','true')}
  document.body.classList.remove('modal-open');
  pendingCheckoutOrder=null;
}

async function confirmQrPayment(){
  if(!pendingCheckoutOrder)return;
  const order=pendingCheckoutOrder;
  pendingCheckoutOrder=null;
  const modal=document.getElementById('qrPaymentModal');
  if(modal){modal.classList.remove('show');modal.setAttribute('aria-hidden','true')}
  document.body.classList.remove('modal-open');
  await completeCheckout(order);
}

async function completeCheckout(order){
  localStorage.setItem('comtam_order_'+order.code,JSON.stringify(order));
  localStorage.setItem('comtam_last_order',JSON.stringify(order));
  const summary=document.querySelector('.summary');
  if(summary)summary.innerHTML='<div style="text-align:center;padding:20px 0"><div style="font-size:46px">⏳</div><h2>Đang gửi đơn hàng...</h2><p>Đang gửi thông tin đơn đến Gmail của quán.</p></div>';
  let emailResult={sent:false};
  try{emailResult=await sendOrderEmail(order)}catch(e){console.warn(e)}
  localStorage.removeItem('comtam_cart');
  localStorage.removeItem('comtam_voucher');
  updateCartCount();
  if(summary)summary.innerHTML=`<div class="order-success"><div style="font-size:46px">🎉</div><h2>Đặt hàng thành công!</h2><p>Mã đơn hàng: <b>${order.code}</b></p><p>Trạng thái hiện tại: <b>Đã nhận đơn</b></p>${emailResult.sent?'<p class="mail-ok">✅ Đã gửi thông tin đơn đến Gmail: <b>taikhoanff2022@gmail.com</b></p>':'<p class="mail-warning">⚠️ Hệ thống email chưa xác nhận gửi tự động. Đơn đã được lưu trên trình duyệt.</p><p><a class="btn" href="'+(emailResult.mailto||'#')+'">✉️ Mở email để gửi đơn</a></p>'}<div class="success-actions"><a class="btn primary" href="order-tracking.html?code=${order.code}">📦 Theo dõi đơn</a><a class="btn cart-btn" href="menu.html">Tiếp tục đặt món</a></div></div>`;
}

async function checkout(){
 const c=getCart();
 if(!c.length){showToast('Bạn chưa chọn món');return}
 const name=document.getElementById('name')?.value.trim(),phone=document.getElementById('phone')?.value.trim(),address=document.getElementById('address')?.value.trim(),payment=document.getElementById('payment')?.value||'';
 if(!name||!phone||!address){showToast('Vui lòng nhập đủ thông tin nhận hàng');return}
 const code='CT'+Date.now().toString().slice(-6);
 const order=makeOrder(code,name,phone,address,payment);
 // Nếu chọn chuyển khoản QR, chưa hoàn tất đơn ngay. Hiện QR trước và chỉ
 // lưu/gửi email sau khi khách bấm "OK - Tôi đã thanh toán".
 if(payment.includes('Chuyển khoản')){
   showQrPayment(order);
   return;
 }
 await completeCheckout(order);
}

document.addEventListener('keydown',e=>{if(e.key==='Escape' && document.getElementById('qrPaymentModal')?.classList.contains('show'))cancelQrPayment()});
updateCartCount();
