import React from "react";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-10">
        <h3 className="mb-6 text-3xl font-bold tracking-tighter uppercase text-dark">
          Contact Details
        </h3>
        <p className="text-lg leading-relaxed text-grayText">
          We are located in the heart of the city. Feel free to drop by for a
          coffee and a chat about your next big idea.
        </p>
      </div>

      <div className="space-y-8">
        {/* Address */}
        <div className="flex items-start space-x-4 group">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-colors bg-white border rounded-full border-dark/10 group-hover:border-primary">
            <MapPin className="text-dark" size={20} />
          </div>
          <div>
            <h4 className="mb-1 font-bold uppercase text-dark">Office</h4>
            <p className="text-grayText">
              123 Design Street, Suite 404
              <br />
              New York, NY 10012
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start space-x-4 group">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-colors bg-white border rounded-full border-dark/10 group-hover:border-primary">
            <Mail className="text-dark" size={20} />
          </div>
          <div>
            <h4 className="mb-1 font-bold uppercase text-dark">Email</h4>
            <a
              href="mailto:hello@poomo.com"
              className="transition-colors text-grayText hover:text-dark"
            >
              hello@poomo.com
            </a>
            <br />
            <a
              href="mailto:careers@poomo.com"
              className="transition-colors text-grayText hover:text-dark"
            >
              careers@poomo.com
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start space-x-4 group">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-colors bg-white border rounded-full border-dark/10 group-hover:border-primary">
            <Phone className="text-dark" size={20} />
          </div>
          <div>
            <h4 className="mb-1 font-bold uppercase text-dark">Phone</h4>
            <p className="text-grayText">+1 (555) 123-4567</p>
          </div>
        </div>

        {/* Hours */}
        <div className="flex items-start space-x-4 group">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-colors bg-white border rounded-full border-dark/10 group-hover:border-primary">
            <Clock className="text-dark" size={20} />
          </div>
          <div>
            <h4 className="mb-1 font-bold uppercase text-dark">
              Working Hours
            </h4>
            <p className="text-grayText">Mon - Fri: 9:00 AM - 6:00 PM</p>
            <p className="text-grayText">Sat - Sun: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
