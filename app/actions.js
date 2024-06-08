'use server';

export async function createQuestion(prevState, formData) {
  const rawFormData = {
    nameId: formData.get('name'),
    email: formData.get('email'),
    comment: formData.get('comment'),
  };
  console.log(rawFormData);
  return {
    message:"Данные успешно отправлены!",
  }

}