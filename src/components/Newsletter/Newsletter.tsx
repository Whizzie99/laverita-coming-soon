import { useState } from "react";
import jsonp from 'jsonp';
import toast from "react-hot-toast";
import { StyledWrapper, StyledNewsletter } from "./styles";

const Newsletter = () => {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)

    const mailchimpUrl = `${process.env.REACT_APP_MAILCHIMP_API_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
    const data = {
      EMAIL: email,
      status: "subscribed",
    };

    const queryParams = new URLSearchParams(data);
    const url = `${mailchimpUrl}&${queryParams.toString()}`;

    jsonp(url, { param: "c" }, (err: any, res: any) => {
      if (err) {
        toast.error("Error adding subscriber");
        setLoading(false);
        console.log("something went wrong");
        console.log(err);
      } else if (res.result === "error") {
        toast.error(res.msg);
        setLoading(false);
        console.log(res);
        console.log(res.msg);
      } else if (res.result === "success") {
        toast.success(res.msg);
        setLoading(false);
        setEmail("");
        console.log(res.msg);
        console.log(res);
      }
    });
  }; 

  return (
    <StyledWrapper>
      <StyledNewsletter>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="your email" value={email} required onChange={(e) => setEmail(e.target.value)} />
          <button type="submit" disabled={loading}>{loading ? 'please wait...': 'notfiy me!'}</button>
        </form>
      </StyledNewsletter>
    </StyledWrapper>
  );
}
 
export default Newsletter;