export const formConfig = {
  api: `http://tehnickaskolakolubara.edu.rs/slanjeMaila/index.php`,
  title: 'Contact Me',
  successMessage: 'Порука је послата. Хвала на указаном поверењу!',
  errorMessage: 'Нажалост дошло је до грешке.',
  fields:{
    firstName: '',
    lastName: '',
    email: '',
    msg: '',
  },
  fieldsConfig:  [
    { id: 1, label: 'Име', fieldName: 'firstName', type: 'text',placeholder:'Унесите Ваше име..', isRequired: true , klassName:'first-name-field'},
    { id: 2, label: 'Презиме', fieldName: 'lastName', type: 'text', placeholder: 'Унесите Ваше презиме..', isRequired: true , klassName:'last-name-field'},
    { id: 3, label: 'Адреса електронске поште', fieldName: 'email', type: 'email', placeholder: 'Унесите Вашу адресу електронске поште..', isRequired: true , klassName:'email-field'},
    { id: 4, label: 'Порука', fieldName: 'msg', type: 'textarea',placeholder:'Напишите поруку.....', isRequired: true , klassName:'message-field'},
  ]
}
