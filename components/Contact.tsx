
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="glass-card rounded-[40px] p-8 md:p-16 overflow-hidden relative">
          {/* Background decor */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px]"></div>
          
          <div className="flex flex-col lg:flex-row gap-16 relative z-10">
            <div className="w-full lg:w-1/3">
              <h2 className="text-4xl font-black mb-6 font-poppins">GET IN TOUCH</h2>
              <p className="text-gray-500 mb-10">
                For custom productions, exclusive inquiries, or general questions. Expect a response within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Email Us</div>
                    <div className="text-white font-medium">mojapelot2@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Call / WhatsApp</div>
                    <div className="text-white font-medium">0723481158</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Social Media</div>
                    <div className="text-white font-medium">@FrancoBeatzOffcl</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3">
              <form name="contact" method="POST" data-netlify="true" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="hidden" name="form-name" value="contact" />
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Enter your name" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-purple-600 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="name@email.com" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-purple-600 transition-colors"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">Message</label>
                  <textarea 
                    name="message" 
                    rows={5} 
                    placeholder="Tell us about your project..." 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-purple-600 transition-colors resize-none"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="w-full md:w-auto px-12 py-4 bg-purple-600 hover:bg-purple-700 text-white font-black uppercase tracking-widest text-sm rounded-xl transition-all neon-glow">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
