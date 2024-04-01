import logo from './logo.svg';
import './App.css';
import Image from './components/functioncomponents/image/img';
import FormComponent from './components/classcomponents/form/form';
import Button from './components/functioncomponents/button/button';
import TableComponent from './components/classcomponents/form/table';
import Lists from './components/classcomponents/Lists';

function App() {
  return (
<div>
  <Image/>
  <br></br>
  <TableComponent/>
  <br></br>
  <Lists/>
  <br></br>
  <FormComponent/>
  <br></br>
  <Button/>

</div>
  );
}

export default App;
