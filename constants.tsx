
import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    name: 'Corte Feminino Premium',
    description: 'Corte moderno com lavagem e visagismo.',
    price: 150,
    durationMinutes: 60,
    category: 'Cabelo',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '2',
    name: 'Coloração & Mechas',
    description: 'Transformação completa com produtos importados.',
    price: 350,
    durationMinutes: 150,
    category: 'Cabelo',
    image: 'https://images.unsplash.com/photo-1605497746444-11d2348e0638?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '3',
    name: 'Spa Manicure & Pedicure',
    description: 'Cuidado luxuoso com hidratação e esmaltação gel.',
    price: 95,
    durationMinutes: 90,
    category: 'Unhas',
    image: 'https://images.unsplash.com/photo-1610992015732-2449b0c26296?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '4',
    name: 'Makeup Gala',
    description: 'Maquiagem HD para eventos de gala.',
    price: 220,
    durationMinutes: 75,
    category: 'Maquiagem',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=400'
  }
];

export const PROFESSIONALS = ['Clara Mendes', 'Ricardo Silva', 'Juliana Costa', 'Marcos Oliveira'];

export const THEMES = {
  LUXURY: {
    bg: 'bg-black',
    text: 'text-[#D4AF37]',
    accent: 'text-[#D4AF37]',
    border: 'border-[#D4AF37]/30',
    button: 'bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black',
    card: 'bg-[#111111] border-[#D4AF37]/20',
    nav: 'bg-black/80 border-[#D4AF37]/10'
  },
  LIGHT: {
    bg: 'bg-white',
    text: 'text-black',
    accent: 'text-rose-600',
    border: 'border-slate-200',
    button: 'bg-black text-white',
    card: 'bg-white border-slate-100',
    nav: 'bg-white/80 border-slate-100'
  },
  CONTRAST: {
    bg: 'bg-[#1a1a1a]',
    text: 'text-[#FFFF00]',
    accent: 'text-[#FFFF00]',
    border: 'border-[#FFFF00]/50',
    button: 'bg-[#FFFF00] text-black',
    card: 'bg-black border-[#FFFF00]/40',
    nav: 'bg-black/90 border-[#FFFF00]/20'
  }
};
