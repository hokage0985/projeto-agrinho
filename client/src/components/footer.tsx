import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-forest text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="text-sage text-2xl mr-3" />
            <span className="text-xl font-bold">Comércio Justo</span>
          </div>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Conectando produtores e consumidores através de práticas comerciais éticas e sustentáveis.
          </p>
          <div className="border-t border-white/20 pt-6 text-white/80 space-y-2">
            <p className="text-lg font-semibold text-sage">Projeto Agrinho</p>
            <p>by Pietro</p>
            <p className="text-sm">&copy; 2024 Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
