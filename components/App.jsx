import { LanguageProvider } from "./LenguageContext";
import Register_Account from "./Docs/api_account/Register_Account";
import Account from "./Docs/api_account/Account";
import Personal_Account from "./Docs/api_account/Personal_Account";
import Business_Account from "./Docs/api_account/Business_Account";
import Balance_Account from "./Docs/api_account/Balance_Account";
import History_Account from "./Docs/api_account/History_Account";
import Bless_Account from "./Docs/api_account/Bless_Account";
import Transaction_Institutions from "./Docs/api_institution/Transaction_Institution";
import Transaction_Id_Institutions from "./Docs/api_institution/Transaction_Id_Institution";
import Exchange_Institution from "./Docs/api_institution/Exchange_Institution";
import Quote_Institutions from "./Docs/api_institution/Quote_Institution";
import Quote_Id_Institutions from "./Docs/api_institution/Quote_Id_Institution";
import Request_Merchant from "./Docs/api_merchant/request_merchant"
import Cancel_Merchant from "./Docs/api_merchant/Cancel_Merchant"
import Status_Merchant from './Docs/api_merchant/Status_Merchant'

function App() {
  return (
    <LanguageProvider>
      <Register_Account />
      <Account />
      <Personal_Account />
      <Business_Account />
      <Balance_Account />
      <History_Account />
      <Bless_Account />
      <Transaction_Institutions />
      <Transaction_Id_Institutions />
      <Exchange_Institution />
      <Quote_Institutions />
      <Quote_Id_Institutions />
      <Request_Merchant />
      <Cancel_Merchant />
      <Status_Merchant />
    </LanguageProvider>
  );
}

export default App;
