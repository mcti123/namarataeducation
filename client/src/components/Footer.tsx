import React from 'react';
import { Link } from 'wouter';

const Footer: React.FC = () => {
  return (
    <footer className="bg-space border-t border-spaceMid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <div className="h-10 w-10 relative">
                  <div className="absolute inset-0 bg-primary rounded-full opacity-70"></div>
                  <i className="fas fa-graduation-cap text-white absolute inset-0 flex items-center justify-center text-2xl"></i>
                </div>
                <span className="ml-3 text-xl font-baloo font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">6th Grade Stellar</span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-spaceWhite/70">
              Interactive 3D learning platform for 6th-grade students. Practice, learn, and excel in all subjects.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-spaceWhite tracking-wider uppercase">Subjects</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#"><div className="text-spaceWhite/70 hover:text-primary cursor-pointer">Mathematics</div></Link></li>
              <li><Link href="#"><div className="text-spaceWhite/70 hover:text-primary cursor-pointer">Science</div></Link></li>
              <li><Link href="#"><div className="text-spaceWhite/70 hover:text-primary cursor-pointer">English</div></Link></li>
              <li><Link href="#"><div className="text-spaceWhite/70 hover:text-primary cursor-pointer">Hindi</div></Link></li>
              <li><Link href="#"><div className="text-spaceWhite/70 hover:text-primary cursor-pointer">Social Studies</div></Link></li>
              <li><Link href="#"><div className="text-spaceWhite/70 hover:text-primary cursor-pointer">Sanskrit</div></Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-spaceWhite tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#"><div className="text-spaceWhite/70 hover:text-primary cursor-pointer">Study Materials</div></Link></li>
              <li><Link href="#"><div className="text-spaceWhite/70 hover:text-primary cursor-pointer">Practice Tests</div></Link></li>
              <li><Link href="#"><div className="text-spaceWhite/70 hover:text-primary cursor-pointer">Syllabus</div></Link></li>
              <li><Link href="#"><div className="text-spaceWhite/70 hover:text-primary cursor-pointer">Progress Tracking</div></Link></li>
              <li><Link href="#"><div className="text-spaceWhite/70 hover:text-primary cursor-pointer">Parent Portal</div></Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-spaceWhite tracking-wider uppercase">Help & Support</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#"><div className="text-spaceWhite/70 hover:text-primary cursor-pointer">FAQ</div></Link></li>
              <li><Link href="#"><div className="text-spaceWhite/70 hover:text-primary cursor-pointer">Contact Us</div></Link></li>
              <li><Link href="#"><div className="text-spaceWhite/70 hover:text-primary cursor-pointer">Feedback</div></Link></li>
              <li><Link href="#"><div className="text-spaceWhite/70 hover:text-primary cursor-pointer">Privacy Policy</div></Link></li>
              <li><Link href="#"><div className="text-spaceWhite/70 hover:text-primary cursor-pointer">Terms of Use</div></Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-spaceMid pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-spaceWhite/60">
            &copy; {new Date().getFullYear()} 6th Grade Stellar. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="#"><div className="text-spaceWhite/60 hover:text-primary cursor-pointer"><i className="fab fa-facebook-f"></i></div></Link>
            <Link href="#"><div className="text-spaceWhite/60 hover:text-primary cursor-pointer"><i className="fab fa-instagram"></i></div></Link>
            <Link href="#"><div className="text-spaceWhite/60 hover:text-primary cursor-pointer"><i className="fab fa-twitter"></i></div></Link>
            <Link href="#"><div className="text-spaceWhite/60 hover:text-primary cursor-pointer"><i className="fab fa-youtube"></i></div></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
