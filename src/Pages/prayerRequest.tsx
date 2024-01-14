// import { useState } from "react"

import { useRef } from "react"
import Img1 from '../../public/images/img1.jpg'


// export const PrayerRequest = () => {

//   const [formState, setFormState] = useState({});

  
//   const changeHandler = (event:any) => {
//     setFormState({...formState, [event.target.name]: event.target.value})
//   }
  
//   const submitHandler = (event:any) => {
//     event.preventDefault();
//     const config = {
//       SecureToken: '8b88d728-2b95-4597-859c-9865aa7f2577',
//       To : 'scbuhasprayerrequest@gmail.com',
//       From : formState.email,
//       Subject : "This is the prayer request",
//       Body : `${formState.name} connected to you over email`,
//     };
//     if (window.Email) {
//       window.Email.send(config).then(() => alert("message sent successfully"));
//     }
//   }

//   return (
//     <div>
//       <form className="flex flex-col justify-center items-center" onSubmit={submitHandler}>
//         <input type="text" name="name" 
//         value={formState.name || ''} placeholder="Your name" onChange={changeHandler}/>
//         <input type="email" name="email" 
//         value={formState.email || ''} placeholder="Your Prayer Request" onChange={changeHandler}/>
//         <input type="submit" name="" value="Send Email" />
//       </form>
//     </div>
//   )
// }





// interface FormData {
//   user_name: string;
//   user_email: string;
//   subject: string;
//   message: string;
// }

// const PrayerRequest: React.FC = () => {
//   const formRef = useRef<HTMLFormElement>();

//   const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault(); // Prevent default form submission

//     const formData: FormData = new FormData(formRef.current);
//     // Implement email sending logic here using formData values
//     console.log(formData.user_name, formData.user_email, formData.subject, formData.message);
//   };

//   return (
//     <section>
//       <form ref={formRef} onSubmit={sendEmail}>
//         <input
//           type="text"
//           placeholder="Full Name"
//           name="user_name"
//           required
//         />
//         <input type="email" placeholder="Email" name="user_email" required />
//         <input type="text" placeholder="Subject" name="subject" required />
//         <textarea name="message"></textarea>
//         <button type="submit">Send Message</button>
//       </form>
//     </section>
//   );
// };

// export default PrayerRequest;


import { FormEvent } from 'react';
import emailjs from '@emailjs/browser'

export const PrayerRequest: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent)  => {
    e.preventDefault();

    // Access the HTML form element using form.current
    const currentForm = form.current?.current;

    if (currentForm) {
    emailjs.sendForm('service_ncp6lzf', 'template_cc8cwx4', currentForm, 'nzYPrabxDVWU-IQqa')
      .then((result) => {
          alert(result.text);
      }, (error) => {
          alert(error.text);
      });
      // Explicitly cast the form element to HTMLFormElement
      (currentForm as HTMLFormElement).reset();
  };
}

  return (
    <section className="py-3 mb-3 flex flex-col">
      <img src={Img1} alt="" className="mt-0"/>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col py-4 mt-3 gap-4 border rounded-lg">
        <input type="text" placeholder="Full Name" name="user_name" required className="p-1 border"/>
        <input type="email" placeholder="Email" name="user_email" required 
        className="p-1 border"/>
        <input type="text" placeholder="Subject" name="subject" required 
        className="p-1 border"/>
        <textarea name="message" placeholder="prayer request goes here" className="p-1 border"></textarea>
        <button type="submit" className="mt-2 w-fit flex justify-center border rounded-md h-5 pb-2">Send Message</button>
      </form>
    </section>
  );
};

export default PrayerRequest;
