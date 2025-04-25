import { useState } from "react";
import { Alert, TextField } from "@mui/material";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("form data : ");
    console.log(formData);

    emailjs.send(
      "service_vkb5dq3", // Service ID
      "template_rkjdc6u", // Template ID
      formData,
      "ovpQn_TavAHWRbiSP" // Public Key
    )
      .then(() => {
        // استخدام SweetAlert2 عند النجاح
        Swal.fire({
          icon: 'success',
          title: 'Message sent successfully',
          text: 'Expect a message from me soon',
          showConfirmButton: true,
          confirmButtonText: 'OK',
          timer: 7000,
          timerProgressBar: true,

        });



      })
      .catch((error) => {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Error sending message',
          text: `Error: ${error.text}`,
          showConfirmButton: true,
        });
      });
  };
  return (
    <section id="contact" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contact Us</h2>
        <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-xl border border-gray-200">
          <form onSubmit={sendEmail} className="space-y-6">
            <div>
              <TextField
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                fullWidth
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
              />
            </div>
            <div>
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
              />
            </div>
            <div>
              <TextField
                id="message"
                name="message"
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact; 