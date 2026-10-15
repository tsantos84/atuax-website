(function () {
  var form = document.getElementById('orcamento-form');
  if (!form) return;
  var numero = form.getAttribute('data-whatsapp');
  var ok = document.getElementById('form-ok');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var d = new FormData(form);
    var campos = [
      ['Nome', 'nome'], ['Empresa', 'empresa'], ['Telefone', 'telefone'],
      ['E-mail', 'email'], ['Tipo / medida', 'item'], ['Quantidade', 'qtd'],
      ['Data do evento / obra', 'data'], ['Observações', 'obs']
    ];
    var linhas = ['Olá! Gostaria de um orçamento:'];
    campos.forEach(function (c) {
      var v = (d.get(c[1]) || '').toString().trim();
      if (v) linhas.push(c[0] + ': ' + v);
    });
    var url = 'https://wa.me/' + numero + '?text=' + encodeURIComponent(linhas.join('\n'));
    window.open(url, '_blank', 'noopener');
    if (ok) ok.hidden = false;
  });
})();
