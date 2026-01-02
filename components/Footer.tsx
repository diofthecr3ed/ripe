import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          
          {/* Instagram */}
          <a 
            href="https://instagram.com/ripehq" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors group"
          >
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-50 group-hover:bg-primary/10 transition-colors">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 3.808-.06h.63zm1.5 6a5 5 0 11-6.495 6.495 5 5 0 016.495-6.495zM15 8a1 1 0 11-2 0 1 1 0 012 0zm-3 8a3 3 0 100-6 3 3 0 000 6z" fillRule="evenodd"></path>
              </svg>
            </div>
            <span className="font-bold text-lg">ripehq</span>
          </a>

          {/* Email */}
          <a 
            href="mailto:ripeprojects@gmail.com" 
            className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors group"
          >
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-50 group-hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined text-2xl">mail</span>
            </div>
            <span className="font-bold text-lg">ripeprojects@gmail.com</span>
          </a>

          {/* Phone */}
          <a 
            href="tel:+91 9773500570" 
            className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors group"
          >
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-50 group-hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined text-2xl">call</span>
            </div>
            <span className="font-bold text-lg">9773500570</span>
          </a>

        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 flex justify-center">
            <p className="text-xs text-gray-400">© {new Date().getFullYear()} Ripe Agency</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;