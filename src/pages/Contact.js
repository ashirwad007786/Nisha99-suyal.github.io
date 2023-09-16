import React from "react";
import { Card } from "react-bootstrap";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
export default function Contact() {
  return (
    <div className="contact-section">
      <Card className="Contact-card">
      <Card.Body>
        <Card.Title>
          Get In Touch
          <svg class="navbar-icon icon icon-phone-active-3" viewBox="0 0 32 32">
            <path
              class="path1"
              d="M18.317 23.228c-0.276-0.497-0.497-0.993-0.772-1.49-0.607-1.159-1.766-1.876-3.090-1.876h-1.655l-1.048-1.931-1.545-3.2 0.993-1.324c0.497-0.607 1.159-1.986 0.166-3.917l-1.324-2.593c-0.386-0.828-1.103-1.379-1.986-1.545-0.828-0.166-1.655 0.055-2.372 0.607-1.545 1.269-2.703 2.979-3.31 4.91-0.441 1.379-0.276 2.924 0.386 4.303l5.241 10.428c0.662 1.379 1.821 2.372 3.145 2.869 1.103 0.386 2.262 0.607 3.476 0.607 0.883 0 1.766-0.11 2.648-0.331 0.772-0.221 1.434-0.772 1.821-1.545 0.331-0.772 0.331-1.655-0.055-2.372-0.166-0.552-0.441-1.048-0.717-1.6zM17.159 26.262c-0.055 0.11-0.11 0.221-0.331 0.276-1.6 0.441-3.31 0.331-4.8-0.221-0.828-0.276-1.49-0.938-1.931-1.766l-5.297-10.372c-0.441-0.883-0.552-1.821-0.276-2.648 0.441-1.545 1.379-2.869 2.593-3.862 0.11-0.11 0.276-0.166 0.386-0.166 0.055 0 0.055 0 0.11 0 0.166 0.055 0.331 0.166 0.441 0.386l1.324 2.593c0.497 0.993 0.166 1.49 0.055 1.6l-1.379 1.876c-0.276 0.331-0.276 0.772-0.11 1.159l1.821 3.862c0 0 0 0.055 0.055 0.055l1.379 2.538c0.221 0.331 0.552 0.607 0.993 0.552l2.317-0.055c0.497 0 0.883 0.276 1.103 0.662 0.276 0.497 0.497 0.993 0.772 1.49s0.552 1.048 0.772 1.545c0.055 0.166 0.055 0.331 0 0.497z"
            ></path>
            <path
              class="phone-wave wave-sm"
              d="M16.607 10.152c-0.552-0.276-1.214-0.055-1.49 0.441-0.276 0.552-0.055 1.214 0.441 1.49 1.379 0.717 2.593 3.034 2.538 4.855 0 0.607 0.497 1.214 1.103 1.214 0 0 0 0 0 0 0.607 0 1.103-0.552 1.103-1.159 0.055-2.648-1.6-5.738-3.697-6.841z"
            ></path>
            <path
              class="phone-wave wave-md"
              d="M19.531 6.676c-0.552-0.276-1.214-0.055-1.49 0.441-0.276 0.552-0.055 1.214 0.441 1.49 2.703 1.434 4.303 4.359 4.248 7.834 0 0.607 0.497 1.159 1.103 1.159 0 0 0 0 0 0 0.607 0 1.103-0.497 1.103-1.103 0.055-4.303-1.986-8-5.407-9.821z"
            ></path>
            <path
              class="phone-wave wave-lg"
              d="M22.952 3.090c-0.552-0.276-1.214-0.11-1.49 0.441s-0.11 1.214 0.441 1.49c3.697 2.097 5.848 6.179 5.683 10.979 0 0.607 0.441 1.103 1.048 1.103 0 0 0 0 0.055 0 0.607 0 1.103-0.441 1.103-1.048 0.166-5.628-2.372-10.428-6.841-12.966z"
            ></path>
          </svg>
        </Card.Title>
        <Card.Text>
          <p>
            I'm actively seeking a Front-End Developer role and my inbox is open
            for any opportunities. Whether you have questions or simply want to
            connect, feel free to reach out, and I'll promptly respond. Your
            message is important to me, and I look forward to any potential
            collaborations or discussions.
          </p>
          <h2 style={{ color: "#fff" }}>
            Feel free to connect on social media.
          </h2>
          <div className="social-icons contact-social">
            <a href="https://www.linkedin.com/in/nishasuyal/" target="_blank" className="linkedIn"><FaLinkedinIn /></a>
            <a href="mailto: nishasuyal229@gmail.com" target="_blank" className="mail"><AiOutlineMail /></a>
            <a href="https://instagram.com/nisha_s1506?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" className="linkedIn"><FaInstagram /></a>
          </div>
          <div className="design">
            Developed by <span> Nisha</span>
            <span id="app">
              <div id="box">
                <div class="eyes">
                  <div class="eye">
                    <div class="eyeball"></div>
                  </div>
                  <div class="eye">
                    <div class="eyeball"></div>
                  </div>
                </div>
                <div class="smile-container">
                  <div class="smile"></div>
                </div>
              </div>
            </span>
          </div>
        </Card.Text>
      </Card.Body>
      </Card>
    </div>
  );
}
