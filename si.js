var pacientes = [];
var form = document.getElementById('form');
var nombre = document.getElementById('nombre');
var idPaciente = document.getElementById('idPaciente');
var telefono = document.getElementById('telefono');
var alergias = document.getElementById('alergias');
var notas = document.getElementById('notas');
var lista = document.getElementById('lista');
var btnVer = document.getElementById('ver');
var btnLimpiar = document.getElementById('limpiar');

form.addEventListener('submit', function(e){
  e.preventDefault();
  var n = nombre.value.trim();
  if(!n){ alert('Escribe nombre'); return; }
  pacientes.push({ nombre: n, id: idPaciente.value.trim(), telefono: telefono.value.trim(), alergias: alergias.value.trim(), notas: notas.value.trim() });
  form.reset();
  alert('Guardado');
});

btnVer.addEventListener('click', function(){
  if(lista.innerHTML){ lista.innerHTML = ''; this.textContent = 'Ver guardados'; return; }
  var html = '';
  if(pacientes.length === 0) html = '<li class="list-group-item">No hay fichas.</li>';
  for(var i=0;i<pacientes.length;i++){
    var p = pacientes[i];
    html += '<li class="list-group-item"><strong>'+p.nombre+'</strong><br>Tel: '+(p.telefono||'-')+' | Alergias: '+(p.alergias||'-')+'</li>';
  }
  lista.innerHTML = html;
  this.textContent = 'Ocultar guardados';
});

btnLimpiar.addEventListener('click', function(){ form.reset(); });
