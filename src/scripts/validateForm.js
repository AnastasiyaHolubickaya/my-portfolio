document.addEventListener('DOMContentLoaded',function() {
    const form = document.querySelector('form');
    const error = document.querySelector('.error');
    const fields = Array.from (document.querySelectorAll('.field'));
    const form_popup = document.querySelector(".form_popup");
    const btn_submit = document.querySelector(".submit");
    let regExpsName = /[a-z][A-Z]*$/;

    fields.map(f => {
        f.addEventListener('input', function (e) {
            if(f.validity.valid){
                error.innerHTML='';
            }
            else {
                error.innerHTML = "Заполните корректно форму";
                f.setAttribute("required", 'true');
            }
        })
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        btn_submit.setAttribute('disabled','true');

        fields.map(f => {
            if(!f.value|| f.value.length<1) {
                error.innerHTML = "Поля формы не должны быть пустыми";
                f.setAttribute("required", 'true');
            }else {
                error.innerHTML = "";
                f.removeAttribute("required");
            }
        });
            if (form.checkValidity()) {
                form_popup.classList.add('popup_visible');
                fields.map(f => {
                    f.value = '';
                });
            }

        setTimeout(()=>{
                form_popup.classList.remove('popup_visible');
                btn_submit.removeAttribute("disabled")

            }, 3000
        );

    });

});