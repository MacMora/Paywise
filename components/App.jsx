import { LanguageProvider } from './LenguageContext';
import Register_Account from './Docs/Register_Account'; 
import Account from './Docs/Account'; 
import Personal_Account from './Docs/Personal_Account';
import Business_Account from './Docs/Business_Account';
import Bless_Account from './Docs/Bless_Account';
import Transaction_Institutions from './Docs/Transaction_Institution';
import Transaction_Id_Institutions from './Docs/Transaction_Id_Institution';
import Exchange_Institution from './Docs/Exchange_Institution';
import Quote_Institutions from './Docs/Quote_Institution';
import Quote_Id_Institutions from './Docs/Quote_Id_Institution';

function App() {
  return (
    <LanguageProvider>
      <Register_Account />
      <Account />
      <Personal_Account/>
      <Business_Account/>
      <Bless_Account/>
      <Transaction_Institutions/>
      <Transaction_Id_Institutions/>
      <Exchange_Institution/>
      <Quote_Institutions/>
      <Quote_Id_Institutions/>
    </LanguageProvider>
  );
}

export default App;