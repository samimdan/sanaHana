import { render } from "@react-email/render";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import Email from "./Email";

const mailerSend = new MailerSend({
  apiKey:
    "mlsn.728fd2a61a35358c9f5a4dc9db9b1bf8ea80d7bb273a8698f241e24257b66b00" ||
    "",
});

const emailHtml = render(<Email />);

const sentFrom = new Sender("you@yourdomain.com", "Your name");
const recipients = [new Recipient("samim.danesh@gmail.com", "Your Client")];

const emailParams = new EmailParams()
  .setFrom(sentFrom)
  .setTo(recipients)
  .setSubject("This is a Subject")
  .setHtml(await emailHtml);

mailerSend.email.send(emailParams);

export default mailerSend;
