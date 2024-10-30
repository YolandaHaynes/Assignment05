window.addEventListener('load', (e) => {
    const getValue = (id) => document.getElementById(id).value;
    const form = document.getElementById('empForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const id = getValue('id');
        const name = getValue('name');
        const ext = getValue('ext');
        const email = getValue('email');
        const department = getValue('department');
        console.log(`ID: ${id} \nName: ${name} \nExtension: ${ext} \nEmail: ${email} \nDepartment: ${department}`);
        form.reset();
    });
});

