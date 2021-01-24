import { useState } from "react";
import * as axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const nameChange = (e) => {
    setName(e.currentTarget.value);
  };
  const emailChange = (e) => {
    setEmail(e.currentTarget.value);
  };
  const phoneChange = (e) => {
    setPhone(e.currentTarget.value);
  };

  const click = () => {
    let obj = {
      name: name,
      email: email,
      phone: phone,
    };
    axios.post("http://localhost:3000/api/telegram", obj);
    setName("");
    setEmail("");
    setPhone("");
  };
  return (
    <div>
      <div>
        <input
          name="name"
          type="input"
          placeholder="Ваше имя"
          value={name}
          onChange={nameChange}
        />
      </div>
      <div>
        <input
          name="email"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={emailChange}
        />
      </div>
      <div>
        <input
          name="phone"
          type="tel"
          placeholder="Номер телефона"
          value={phone}
          onChange={phoneChange}
        />
      </div>
      <div>
        <button onClick={click}>Отправить</button>
      </div>
    </div>
  );
};

export default Form;
