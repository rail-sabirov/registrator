import * as Yup from 'yup';

const validationSchema = Yup.object({
    phone1: Yup.string()
     .test("phone1_test", "Телефон должен содержать 10 цифр", (value) => value == undefined || (value && value.length >= 10) ? true : false),

    phone2: Yup.string().test(
      "phone2_test",
      "Телефон должен содержать 10 цифр",
      (value) => {
        if (value == undefined || (value && value.length === 10)) {
          return true;
        } else {
          return false;
        }
      }
    ),
    phone3: Yup.string().test(
      "phone3_test",
      "Телефон должен содержать 10 цифр",
      (value) => {
        if (value == undefined || (value && value.length === 10)) {
          return true;
        } else {
          return false;
        }
      }
    ),

    // defaultFax: Yup.string().when(['fax1'], ([fax1], schema) => {
		// if(fax1) {
		// 	return schema.notRequired();
		// }

		// return schema.required();
    // }),

    defaultFax: Yup.string().when(['fax1', 'fax2'], (faxFields, schema) => {
      const [fax1, fax2] = faxFields;

      return schema.test({
        test: value => {
          // Поле defaultFax обязательно, если заполнено поле fax1 или fax2
          return (fax1 || fax2) ? !!value : true;
        },
        message: 'Введите значение для defaultFax, так как заполнено поле fax1 или fax2',
      });
    }),
});

export default validationSchema;