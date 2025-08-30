
import { 
  Download, 
  Share2, // For Instagram (official icon deprecated)
  ThumbsUp, // For Facebook (official icon deprecated) 
  MessageSquare, // For Twitter (alternative) 
  Printer, 
   Film,         // For YouTube (alternative)
  Phone, 
  Mail 
} from "lucide-react";
import "./Sectionn6.css"; // Import CSS file

const Sectionn6 = () => {
  return (
    <div className="soudemy-container">
      {/* Header */}
      <header className="soudemy-header">
        <h1>Soudemy</h1>
      </header>

      <div className="soudemy-grid">
        {/* About Us Section */}
        <section className="about-section">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vitae 
            congue id ipsum sed neque et dui accumsan.
          </p>
          <p>
            Nibh semper magna facilisis ridiculus luctus amet.
          </p>
          <p>Aliquam</p>
        </section>

        {/* Useful Links Section */}
        <section className="useful-section">
          <h2>Useful</h2>
          <ul>
            {[...Array(5)].map((_, i) => (
              <li key={i}>
                <Download className="icon" />
                Download product
              </li>
            ))}
          </ul>
        </section>

        {/* Social Media Section */}
        <section className="social-section">
          <h2>Download</h2>
          <div className="social-links">
            <a  target="_blank" 
                 rel="noopener noreferrer" 
                  href="https://www.instagram.com/"><Share2 className="icon" /> Instagram
            </a>

            <a   
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://www.facebook.com/?locale=fr_FR"><ThumbsUp className="icon" /> facebook
            </a>

            <a
            target="_blank" 
            rel="noopener noreferrer" 
             href="https://x.com/"><MessageSquare className="icon" /> Twitter
             </a>
             
            <a
            target="_blank" 
            rel="noopener noreferrer" 
             href="https://fr.pinterest.com/"><Printer className="icon" /> printersess
             </a>
            <a
            target="_blank" 
            rel="noopener noreferrer" 
             href="https://www.youtube.com/"><Film className="icon" /> youtube</a>
          </div>
        </section>

        {/* Call Center Section */}
        <section className="contact-section">
          <h2>Call Center</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vitae
          </p>
          <div>
            <Mail className="icon" />
            soroushnorozyui@gmail.com
          </div>
          <div>
            <Phone className="icon" />
            +1 333 555
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sectionn6;