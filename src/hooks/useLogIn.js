import { ConfigContext } from "miroirPackage/Contexts/ConfigContext";
import { useContext, useState } from "react";

export default function useLogin() {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [isValid, setIsValid] = useState(true);
  const { setIsLogged } = useContext(ConfigContext);

  let emailValidation = false;
  let pwdValidation = false;

  const handleSubmit = () => {
    if (/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      emailValidation = true;
    }

    if (/^\S{7,}$/.test(pwd)) {
      pwdValidation = true;
    }

    if (emailValidation === true && pwdValidation === true) {
      setIsLogged(true);
    } else {
      setIsValid(false);
    }
  }

  return {isValid, setEmail, setPwd, handleSubmit}
}
