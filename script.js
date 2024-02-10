// Fungsi untuk membuat elemen input dan label
function createField(label, type, id, name, placeholder, required) {
    var fieldDiv = document.createElement('div');
    fieldDiv.classList.add('mb-4');

    var fieldLabel = document.createElement('label');
    fieldLabel.textContent = label;
    fieldLabel.classList.add('block', 'text-xs', 'font-medium');

    var fieldInput = document.createElement('input');
    fieldInput.type = type;
    fieldInput.id = id;
    fieldInput.name = name;
    fieldInput.classList.add('mt-1', 'p-2', 'w-full', 'border', 'border-blue-900');
    if (placeholder) fieldInput.placeholder = placeholder;
    if (required) fieldInput.required = true;

    fieldDiv.appendChild(fieldLabel);
    fieldDiv.appendChild(fieldInput);

    return fieldDiv;
}

// Array berisi field-field yang akan ditampilkan
var fields = [
    { label: 'FIRST NAME', type: 'text', id: 'f-name', name: 'f-name', placeholder: 'Enter your first name', required: true },
    { label: 'LAST NAME', type: 'text', id: 'l-name', name: 'l-name', placeholder: 'Enter your last name', required: true },
    { label: 'E-MAIL ADDRESS', type: 'email', id: 'e-mail', name: 'e-mail', placeholder: 'Enter your email', required: true },
    { label: 'PHONE', type: 'tel', id: 'phone', name: 'phone', placeholder: 'Enter your phone number' },
    { label: 'PASSWORD', type: 'password', id: 'password', name: 'password', placeholder: 'Minimum 8 characters', required: true },
    { label: 'CONFIRM PASSWORD', type: 'password', id: 'confirmpass', name: 'confirmpass', placeholder: 'Confirm your password', required: true }
];

// Fungsi untuk membuat form
function createForm(fields) {
    var form = document.createElement('form');
    form.action = '#';
    form.method = 'post';
    form.classList.add('grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-4');

    var formTitle = document.createElement('h1');
    formTitle.classList.add('text-3xl', 'font-bold', 'mb-8', 'md:col-span-2');
    formTitle.textContent = 'Create my account';

    form.appendChild(formTitle);

    fields.forEach(field => {
        var fieldElement = createField(field.label, field.type, field.id, field.name, field.placeholder, field.required);
        form.appendChild(fieldElement);
    });

    var submitButtonDiv = document.createElement('div');
    submitButtonDiv.classList.add('md:col-span-2');

    var submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.classList.add('text-white', 'bg-blue-900', 'px-7', 'py-2', 'font-bold');
    submitButton.innerHTML = '<p>CREATE A NEW ACCOUNT</p>';

    submitButtonDiv.appendChild(submitButton);
    form.appendChild(submitButtonDiv);

    return form;
}

// Membuat elemen utama <div> untuk kontainer utama
var mainDiv = document.createElement('div');
mainDiv.classList.add('flex', 'flex-col', 'md:flex-row', 'm-auto');

// Membuat elemen untuk bagian Selamat Datang
var welcomeDiv = document.createElement('div');
welcomeDiv.classList.add('flex-1', 'md:w-1/4', 'px-14', 'mt-5', 'mb-10', 'mb:mr-12');

var welcomeTitle = document.createElement('h1');
welcomeTitle.classList.add('text-6xl', 'font-bold', 'mb-5');
welcomeTitle.textContent = 'Welcome on board!';

var welcomeText = document.createElement('p');
welcomeText.classList.add('text-sm');
welcomeText.textContent = 'Welcome to your account';

welcomeDiv.appendChild(welcomeTitle);
welcomeDiv.appendChild(welcomeText);

// Membuat elemen untuk bagian Registrasi
var registrationDiv = document.createElement('div');
registrationDiv.classList.add('md:w-3/4', 'p-8', 'md:p-20', 'bg-green-100', 'items-center', 'justify-center', 'h-max', 'md:h-screen');

// Menyisipkan form ke dalam bagian Registrasi
registrationDiv.appendChild(createForm(fields));

// Menyisipkan bagian Selamat Datang ke dalam div utama
mainDiv.appendChild(welcomeDiv);

// Menyisipkan bagian Registrasi ke dalam div utama
mainDiv.appendChild(registrationDiv);

// Hapus semua konten yang ada di body sebelum menambahkan konten baru
document.body.innerHTML = '';

// Menyisipkan div utama ke dalam body
document.body.appendChild(mainDiv);