import Preview from './components/Preview/Preview';
import Form from './components/Form/Form';

import { useState } from 'react';

const App = () => {

  const [formData, setFormData] = useState({ name: '', number: '', month: '', year: '', cvc: '' });
  const [focusedField, setFocusedField] = useState('');

  return (
    <main>
      <Preview formData={formData} focusedField={focusedField} />
      <Form formData={formData} setFormData={setFormData} setFocusedField={setFocusedField} />
    </main>
  );
}

export default App;
