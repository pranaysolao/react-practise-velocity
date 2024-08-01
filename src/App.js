import logo from './logo.svg';
import './App.css';
import ValidationForm from './component/shopingcomponent/validationform';
import { Shopping } from './component/shopingcomponent/shoping';
import ShoppingDemoClass from './component/shopingcomponent/ShoppingClassDemo';
import ShoppingClassDemo from './component/shopingcomponent/classcomponent';
import { Demo5 } from './component2/userform';
import { Counter } from './component2/counter';
import { UserProfile } from './component2/userprofile';
import { UserInfoUsingProp } from './component2/UserInfoUsingProp';
import { FormTemplate } from './component2/formTemplate';

function App(prop) {
  return (
    <div>
      {/* <ValidationForm /> */}
      {/* <Shopping /> */}
      {/* <ShoppingClassDemo /> */}
      {/* <ShoppingDemoClass /> */}
      {/* <Counter/> */}
      {/* <Demo5 /> */}
      {/* <UserProfile /> */}
      <UserInfoUsingProp />
      {/* <FormTemplate title="UserCredential" name="UserId123" button="Login" />
      <FormTemplate title="Admin credential" name="Admin Id" button="Admin Login" /> */}
    </div>


  );
}

export default App;
