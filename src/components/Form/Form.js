import styles from './Form.module.scss';

import { useState } from 'react';

const Form = ({ formData, setFormData, setFocusedField }) => {

  const handleChange = e => {
    const inputValue = e.target.value;
    const inputName = e.target.name; 
    setFormData({ ...formData, [inputName]: inputValue });
  }

  const handleNumberChange = e => {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    setFormData({ ...formData, 'number': e.target.value });
  }

  const handleFocus = e => { setFocusedField(e.target.name); }
  const handleFocusOut = () => { setFocusedField(''); }

  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = e => {
    e.preventDefault(); 
    setIsSubmitted(true);
  }

  const handleReload = () => {
    setIsSubmitted(false);
    setFormData({ name: '', number: '', month: '', year: '', cvc: '' })
  }

  return (
    <section className={styles.formContainer}>
      { !isSubmitted && <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form__row}>
          <div className={styles.form__item}>
            <p className={styles.form__itemName}>Cardholder name</p>
            <input className={styles.form__itemInput} type="text" name="name" required maxlength="25" placeholder="e.g. Jane Appleseed" onChange={handleChange} onFocus={handleFocus} onBlur={handleFocusOut} />
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__item}>
            <p className={styles.form__itemName}>Card number</p>
            <input className={styles.form__itemInput} type="text" name="number" required maxlength="19" placeholder="e.g. 1234 5678 9123 0000" onChange={handleNumberChange} onFocus={handleFocus} onBlur={handleFocusOut} />
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__item}>
            <p className={styles.form__itemName}>Exp. date (mm/yy)</p>
            <div className={styles.form__itemMultiChoice}>
              <input type="number" name="month" required min="0" max="12" placeholder="MM" onChange={handleChange} onFocus={handleFocus} onBlur={handleFocusOut} />
              <input type="number" name="year" required min="0" max="99" placeholder="YY" onChange={handleChange} onFocus={handleFocus} onBlur={handleFocusOut} />
            </div>
          </div>
          <div className={styles.form__item}>
            <p className={styles.form__itemName}>CVC</p>
            <input type="text" name="cvc" required maxlength="3" placeholder="e.g. 123" onChange={handleChange} onFocus={handleFocus} onBlur={handleFocusOut} />
          </div>
        </div>
        <button type="submit" className={styles.button__submit}>Confirm</button>
      </form> }

      { isSubmitted && <div className={styles.thanks}>
        
        <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>
        <div className={styles.thanks__text}>
          <h2 className={styles.thanks__title}>Thank you!</h2>
          <p className={styles.thanks__message}>We've added your card details</p>
        </div>
        <button className={styles.button__submit} onClick={handleReload} >Continue</button>

      </div> }
    </section>
  );
};

export default Form;