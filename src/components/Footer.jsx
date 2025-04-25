import Notch from '../assets/Notch.webp';
import notchtech from '../assets/notchtech-wh.png';
const Footer = () => {
  const navLinks = [
    { title: 'Home', path: '#' },
    { title: 'Services', path: '#services' },
    { title: 'Work', path: '#work' },
    { title: 'Team', path: '#team' },
    { title: 'Contact', path: '#contact' }
  ];
  return (
    <footer className="bg-[#1C0304] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={notchtech} alt="Notch Logo" className=" w-auto h-10" />
            <p className="text-gray-400 pt-6">
              Notchtech & CO isa Smart solutions Company integrated with Ai and software services Since we started 2020 with name shamii marketing and rebranding in 2024  it was a pleasure for us dealing with more than 5000 customers
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.path} className="hover:text-gray-300">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Office 24 floor 1 EMC Buliding Area 9</li>
              <li>Cairo, Egypt</li>
              <li>+201124311880</li>
              <li>careers@notch.services</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>

                <a href="https://www.linkedin.com/company/notchservices/posts/?feedView=all" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">Linkedin</a>
              </li>

              <li>
                <a href="https://www.instagram.com/Notch_tech" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Facebook</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Twitter</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Youtube</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>Copyright &copy; NOTCH</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 