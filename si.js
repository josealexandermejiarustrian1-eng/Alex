const lsKey = 'iggs_simple';
let pacientes = JSON.parse(localStorage.getItem(lsKey) || '[]');

const form = document.getElementById('form'),
      lista = document.getElementById('lista'),
      limpiar = document.getElementById('limpiar'),
      verGuardados = document.getElementById('verGuardados');

function guardarLS(){ localStorage.setItem(lsKey, JSON.stringify(pacientes)); }

function leerFicha(){
  return {
    id: document.getElementById('idPaciente').value.trim() || 'p' + Date.now(),
    nombre: document.getElementById('nombre').value.trim(),
    telefono: document.getElementById('telefono').value.trim(),
    alergias: document.getElementById('alergias').value.split(',').map(s=>s.trim()).filter(Boolean),
    notas: document.getElementById('notas').value.trim(),
    fecha: new Date().toLocaleDateString()
  };
}

function render(){
  lista.innerHTML = '';
  pacientes.forEach(p=>{
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `<div><strong>${p.nombre}</strong><br><small>${p.id}</small></div>
      <div>
        <button class="btn btn-sm btn-info me-1" onclick='view("${p.id}")'>Ver</button>
        <button class="btn btn-sm btn-danger" onclick='del("${p.id}")'>Borrar</button>
      </div>`;
    lista.appendChild(li);
  });
}

window.view = id => {
  const p = pacientes.find(x=>x.id===id);
  if(!p) return alert('No encontrado');
  alert(`Nombre: ${p.nombre}\nID: ${p.id}\nTel: ${p.telefono||'-'}\nAlergias: ${(p.alergias.join(', ')||'-')}\nNotas: ${p.notas||'-'}\nFecha: ${p.fecha}`);
};

window.del = id => {
  if(!confirm('Eliminar ficha?')) return;
  pacientes = pacientes.filter(x=>x.id!==id);
  guardarLS(); render();
};

form.addEventListener('submit', e=>{
  e.preventDefault();
  const f = leerFicha();
  if(!f.nombre) return alert('Ingrese nombre');
  const idx = pacientes.findIndex(x=>x.id===f.id);
  if(idx >= 0) pacientes[idx] = f; else pacientes.unshift(f);
  guardarLS(); render(); form.reset();
});

limpiar.addEventListener('click', ()=> form.reset());

verGuardados.addEventListener('click', ()=>{
  if(pacientes.length===0) return alert('No hay pacientes guardados.');
  let texto = pacientes.map((p,i)=>`${i+1}. ${p.nombre} (${p.id}) — ${p.telefono||'-'}`).join('\n');
  alert(texto);
});

// inicial
render();
