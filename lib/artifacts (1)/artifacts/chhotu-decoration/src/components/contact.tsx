import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Get In Touch</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Let's Plan Your Event</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="bg-[#111] border border-primary/20 rounded-2xl overflow-hidden">
          {/* Contact Info — full width */}
          <div className="p-8 md:p-12 bg-black/40">
            <h3 className="font-serif text-2xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mr-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Our Office</h4>
                  <p className="text-white/70 leading-relaxed">
                    Suriya Vivekanand Chowk,<br />
                    Suriya, Jharkhand,<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mr-4">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Phone Number</h4>
                  <p className="text-white/70 flex flex-col gap-1">
                    <a href="tel:6204187216" className="hover:text-primary transition-colors">+91 6204 187 216</a>
                    <a href="tel:8419940177" className="hover:text-primary transition-colors">+91 84199 40177</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mr-4">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Address</h4>
                  <a href="mailto:cy394544@gmail.com" className="text-white/70 hover:text-primary transition-colors">
                    cy394544@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mr-4">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Working Hours</h4>
                  <p className="text-white/70">
                    Monday - Sunday<br />
                    9:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-primary/20 bg-[#111] h-[350px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.7!2d84.0!3d24.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSuriya+Vivekanand+Chowk%2C+Suriya%2C+Jharkhand!5e0!3m2!1sen!2sin!4v1" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            title="Chhotu Decoration Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
