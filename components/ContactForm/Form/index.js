'use client';
import PropTypes from 'prop-types';
//Styles
import styles from './styles.module.scss';
//Components

//Actions
import { createQuestion } from '@/app/actions';
//Hooks
import { useFormState } from 'react-dom'

/**
 * Компонент `Form` отображает форму для заполнения
 */
export default function Form({}) {

    const initialState = {
        message: '',
      }
    const [state, formAction] = useFormState(createQuestion, initialState)


  return (
        <div  className={styles.formContainer}>
            <form  className={styles.form}
            action={formAction} 
            >
                <div className={styles.containerInput}>
                    <input className={styles.input} type="text" id='name' name="name" placeholder="Name" required/>
                    <input className={styles.input} type="email" id='email' name="email" placeholder="E-mail" required/>
                </div>
                <div className={styles.textareaContainer}>
                    <textarea className={styles.textarea} id='comment' name="comment" placeholder="Comment"></textarea>
                </div>
                <div className={styles.buttonContainer}>
                    <button  className={styles.submit} type="submit">Submit</button>
                    <label className={styles.check}>
                    <input type="checkbox" required/>
                    I agree with the <a href="#">user agreement</a>
                    </label>
                </div>
                <p  className={styles.alertForm}>
                {state?.message}
                </p>
             </form>
    </div>
    
  );
}
