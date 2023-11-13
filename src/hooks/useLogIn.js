import axios from "axios";
import ApiCall from "miroirPackage/Api/ApiCall";
import { ConfigContext } from "miroirPackage/Contexts/ConfigContext";
import { useContext, useState } from "react";

/**
 * Custom hook that handle the login of a user.
 * @returns {Objects} isValid: Boolean value for user validation, setEmail, setPwd, handleSubmit
 */
export default function useLogin() {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [isValid, setIsValid] = useState(true);
  const { setIsLogged } = useContext(ConfigContext);

  let emailValidation = false;
  let pwdValidation = false;

  /**
   * Function that handle the submit of a login
   */
  const handleSubmit = () => {
    if (/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      emailValidation = true;
    }

    if (/^\S{7,}$/.test(pwd)) {
      pwdValidation = true;
    }

    if (emailValidation === true && pwdValidation === true) {
      const url = ApiCall.getUrl();
      axios.post(`${url}/auth/login`).then(res => {
        if (res.status === 200) {
          setIsLogged(true);
        }
      });
    } else {
      setIsValid(false);
    }
  }

  return { isValid, setEmail, setPwd, handleSubmit }
}
