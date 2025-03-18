import Alert from 'react-bootstrap/Alert';
import Functions from './Functions';

function App() {
  return (
    <>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
        
      ))}
      <Functions/>
    </>
  );
}
export default App;
  