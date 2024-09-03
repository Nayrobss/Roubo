const avanca = Roubo.querySelectorall ('.btn-proximo');

avanca.forEach(button =>{
 button.eddEventListener('click', function(){
    const atual = Roubo.querySelector('.ativo');
    const proximopasso = 'passo-' + this.getAttribute('data-proximo')

    atual.ClassList.remove ('ativo');
    Roubo.getElementById(proximopasso).classList.add('ativo');
 })
})