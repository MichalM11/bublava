import { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";

import formClasses from "./Form.module.css";
import Profile from "../layout/Profile";
import useInput from "../../hooks/use-input";
import PoliciesModal from "../UI/PoliciesModal";
import LoadingSpinner from "../UI/LoadingSpinner";
import MessageModal from "../UI/MessageModal";
import { Trans, useTranslation } from "react-i18next";

const ContactForm = (props) => {
  const form = useRef();

  const [showPolicies, setShowPolicies] = useState(false);
  const [policiesChecked, setPoliciesChecked] = useState(false);
  const [policiesHasError, setPoliciesHasError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(undefined);
  const [error, setError] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const { t, i18n } = useTranslation();

  const {
    value: enteredPhone,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: phoneReset,
  } = useInput(
    (value) => {
      const re = /^[+]?[()/0-9. -]{9,}$/;

      const valid = re.test(value);

      return valid;
    },
    // const re = /^(\+[0-9]{3})\s?[0-9]{3}\s?[0-9]{3}\s?[0-9]{3}/;

    // return valid;
    ""
  );

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(
    (value) =>
      !value.includes("{") &&
      !value.includes("}") &&
      !value.includes("<") &&
      !value.includes(">"),
    ""
  );

  const initialMessage =
    "Dobrý den, mám zájem o bližší informace a případně i prohlídku. V termínu...";

  const {
    value: enteredMessage,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: messageReset,
  } = useInput(
    (value) =>
      !value.includes("{") &&
      !value.includes("}") &&
      !value.includes("<") &&
      !value.includes(">") &&
      value.length > 0,
    initialMessage
  );

  const policiesChangeHandler = (e) => {
    setPoliciesChecked(!policiesChecked);
  };

  const phoneInputClasses = phoneHasError
    ? formClasses.control + " " + formClasses.invalid
    : formClasses.control;

  const emailInputClasses = emailHasError
    ? formClasses.control + " " + formClasses.invalid
    : formClasses.control;

  const messageInputClasses = messageHasError
    ? formClasses.control + " " + formClasses.invalid
    : formClasses.control;

  let formIsValid = false;

  if (phoneIsValid && messageIsValid) {
    formIsValid = true;
  }
  const showPoliciesModalHandler = () => {
    setShowPolicies(true);
  };

  const closePoliciesModalHandler = () => {
    setShowPolicies(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    if (!phoneIsValid && !messageIsValid && !emailIsValid) {
      setIsSubmitting(false);
      return;
    }

    if (!policiesChecked) {
      setPoliciesHasError(
        "Pro odeslání formuláře je nutné souhlasit se zásadami o ochraně osobních údajů."
      );

      setIsSubmitting(false);

      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          if (result.status === 200) {
            phoneReset();
            emailReset();
            messageReset();
            setPoliciesChecked(false);
            setPoliciesHasError(null);
            setIsSubmitting(false);
            setError(false);
            setMessage("Zpráva byla odeslána...");
          }
        },
        (err) => {
          console.log("💣", err);
          setError(true);
          setMessage(
            "Odesílání zprávy selhalo. Zkontrolujte internetové připojení!"
          );
          setIsSubmitting(false);
        }
      );
  };

  useEffect(() => {
    setTimeout(() => {
      setMessage(undefined);
    }, 12000);
  }, [message]);

  return (
    <footer
      id="form"
      className={formClasses.container}
      style={{
        background: `url("${props.background}") center center/cover`,
      }}
    >
      <Profile />

      <form ref={form} onSubmit={sendEmail} className={formClasses.form}>
        <h2 className={formClasses.heading}>
          <Trans i18nKey="contact.title">Kontaktní formulář</Trans>
        </h2>
        <div className={phoneInputClasses}>
          <label htmlFor="phone">
            <Trans i18nKey="contact.tel">Váš Telefon</Trans> *
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={enteredPhone}
            onChange={phoneChangeHandler}
            onBlur={phoneBlurHandler}
            placeholder="+420 123 456 789"
          />
          {phoneHasError && (
            <p className={formClasses.error}>
              Zadejte telefon v platném formátu.
            </p>
          )}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor="email">
            <Trans i18nKey="contact.email">Váš Email</Trans>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            placeholder="priklad@email.cz"
          />
          {emailHasError && (
            <p className={formClasses.error}>
              Zadejte platnou emailovou adresu.
            </p>
          )}
        </div>
        <div className={messageInputClasses}>
          <label htmlFor="message">
            <Trans i18nKey="contact.message">Zpráva</Trans> *
          </label>
          <textarea
            id="message"
            type="text"
            name="message"
            rows="4"
            value={enteredMessage}
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
          />
          {messageHasError && (
            <p className={formClasses.error}>
              {`Zpráva nesmí obsahovat speciální znaky (" <, >, {, }.") a nesmí být prázdná`}
            </p>
          )}
        </div>
        <div className={formClasses.control + " " + formClasses.checkBox}>
          <input
            type="checkbox"
            name="policies"
            onChange={policiesChangeHandler}
            checked={policiesChecked}
          />
          <label htmlFor="policies" className={formClasses.checkBoxLabel}>
            Zaškrnutím políčka souhlasíte se
            <span
              onClick={showPoliciesModalHandler}
              className={formClasses.policies}
            >
              {" "}
              zásadami o ochraně osobních údajů
            </span>
            .
          </label>
        </div>
        {policiesHasError && (
          <p className={formClasses.error}>{policiesHasError}</p>
        )}
        <button
          className={formClasses.submit}
          type="submit"
          disabled={!formIsValid}
        >
          {!isSubmitting ? (
            <Trans i18nKey="contact.submit">Odeslat</Trans>
          ) : (
            <LoadingSpinner width="2rem" height="2rem" />
          )}
        </button>
      </form>
      {showPolicies && <PoliciesModal onClose={closePoliciesModalHandler} />}
      {message && <MessageModal message={message} hasError={error} />}
    </footer>
  );
};

export default ContactForm;
