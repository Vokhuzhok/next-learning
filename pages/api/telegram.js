import config from "../../config/config.json";
import request from "request";
import axios from "axios";

export default function handler(req, res) {
  if (req.method === "POST") {
    const text = `Имя: ${req.body.name},
Email: ${req.body.email},
Телефон: ${req.body.phone}`;
    fetch(
      `https://api.telegram.org/bot${
        config.telegram.token
      }/sendmessage?chat_id=${config.telegram.chatId}&text=${encodeURIComponent(
        text
      )}`
    );
    res.status(200).send("prom");
  } else {
    res.status(404).send("error");
  }
}
