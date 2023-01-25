import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Users } from './functional-component/Users';
import { Propscomponent } from './Props-functional/Propscomponent';
import reportWebVitals from './reportWebVitals';
import Propsinclass from './Props-class/Propsinclass';
import Inputvalueget from './Input-value/Inputvalueget';
import Hideandshow from './Hide-show/Hideandshow';
import Basicform from './Basic-form/Basicform';
import Conditionalrender from './Conditional-render/Conditionalrender';
import Passfunction from './Pass-function-as-props/Passfunction';
import Constructorinclass from './Constructor-life-cycle/Constructorinclass';
import Didmount from './Didmount/Didmount';
import DidmountUpdate from './Didmount-Update/DidmountUpdate';
import Willunmount from './Willunmount/Willunmount';
import Hooks from './Hooks/Hooks';
import Useeffect from './Use-effect/Useeffect';
import Arraymap from './Array-map/Arraymap';
import Reactfragment from './Reactfragment/Reactfragment';
import Purecomponent from './Pure-component/Purecomponent';
import Usememo from './Use-memo/Usememo';
import Refinreact from './Ref-in-react/Refinreact';
import Refinfunctionalcomponent from './Ref-in-functional-component/Refinfunctionalcomponent';
import Hoc from './HOC/Hoc';
import Controllercomponent from './Controller-component/Controllercomponent';
import Previousstate from './Previous-state/Previousstate';
import Usereducehook from './Usereduce-Hook/Usereducehook';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Users />
    <Demo />
    <Propscomponent name={"Vidyut"} />
    <Propsinclass data="Vidyut" />
    <Inputvalueget />
    <Hideandshow />
    <Basicform />
    <Conditionalrender />
    <Passfunction data={getData} />
    <Constructorinclass name={"Bidyut"} />
    <Didmount />
    <DidmountUpdate />
    <Willunmount />
    <Hooks />
    <Useeffect />
    <Arraymap />
    <Reactfragment />
    <Purecomponent />
    <Usememo />
    <Refinreact />
    <Refinfunctionalcomponent />
    <Controllercomponent />
    <Hoc />
    <Previousstate />
    <Usereducehook />
  </React.StrictMode>
);

function Demo() {
  return (
    <div className="App">
      <h2>Demo</h2>
    </div>
  );
}

function getData(v) {
  alert(v);
}
reportWebVitals();
