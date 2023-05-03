import styles from './Preview.module.scss';
import clsx from 'clsx';


const Preview = ({ formData, focusedField }) => {

  return (
    <section className={styles.preview}>
      <div className={styles.preview__back}>

        { formData.cvc === '' ?
          <div className={clsx(styles.preview__backCVC, focusedField === "cvc" && formData.cvc === '' && styles.flip)}>000</div>
          :
          <div className={styles.preview__backCVC}>{formData.cvc}</div>
        }

      </div>
      <div className={styles.preview__front}>

        { formData.number === '' ?
          <div className={clsx(styles.preview__frontNumber, focusedField === "number" && formData.number === '' && styles.flip)}>0000 0000 0000 0000</div>
          :
          <div className={styles.preview__frontNumber}>{formData.number}</div>
        }

        { formData.name === '' ?
          <div className={clsx(styles.preview__frontName, focusedField === "name" && formData.name === '' && styles.flip)}>Jane Appleseed</div>
          :
          <div className={styles.preview__frontName}>{formData.name}</div>
        }

        <div className={styles.preview__frontDate}>
          { formData.month === '' ?
            <span className={focusedField === "month" && formData.month === '' && styles.flip}>00</span>
            :
            <span>{formData.month}</span>
          }
          /
          { formData.year === '' ?
            <span className={focusedField === "year" && formData.year === '' && styles.flip}>00</span>
            :
            <span>{formData.year}</span>
          }
        </div>
        
      </div>
    </section>
  );
};

export default Preview; 