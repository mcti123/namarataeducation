import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add custom CSS for space theme
const customStyles = document.createElement('style');
customStyles.textContent = `
  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #1E293B;
  }
  ::-webkit-scrollbar-thumb {
    background: #6366F1;
    border-radius: 10px;
  }
  
  /* Custom Animations */
  .book-hover {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .book-hover:hover {
    transform: rotate(-5deg) scale(1.05);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
  
  /* Space Particles Animation */
  @keyframes twinkle {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
  
  /* Trophy Animation */
  @keyframes trophy-appear {
    0% { transform: scale(0) rotate(-45deg); opacity: 0; }
    50% { transform: scale(1.2) rotate(15deg); opacity: 1; }
    100% { transform: scale(1) rotate(0); opacity: 1; }
  }
  
  .trophy-animation {
    animation: trophy-appear 1s forwards;
  }
  
  /* Float animations */
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: float 6s ease-in-out 2s infinite;
  }
  
  .animate-float-slow {
    animation: float 8s ease-in-out infinite;
  }
  
  .animate-spin-slow {
    animation: spin 8s linear infinite;
  }
  
  .animate-bounce-slow {
    animation: bounce 3s infinite;
  }
  
  /* Custom fonts */
  .font-baloo {
    font-family: 'Baloo 2', cursive;
  }
  
  .font-nunito {
    font-family: 'Nunito Sans', sans-serif;
  }
  
  .font-space {
    font-family: 'Space Mono', monospace;
  }
  
  /* Custom colors */
  .bg-space {
    background-color: #0F172A;
  }
  
  .bg-spaceLight {
    background-color: #1E293B;
  }
  
  .bg-spaceMid {
    background-color: #334155;
  }
  
  .text-spaceWhite {
    color: #F8FAFC;
  }
  
  /* Reduced motion */
  .reduced-motion .animate {
    animation: none !important;
    transition: none !important;
    transform: none !important;
  }
`;

document.head.appendChild(customStyles);

createRoot(document.getElementById("root")!).render(<App />);
