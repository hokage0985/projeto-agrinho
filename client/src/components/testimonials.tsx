import { motion } from 'framer-motion';
import { User, Star } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function Testimonials() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const testimonials = [
    {
      name: 'Maria Santos',
      role: 'Produtora de Café - Minas Gerais',
      quote: 'O comércio justo transformou nossa comunidade. Agora temos acesso a educação de qualidade para nossos filhos e conseguimos investir em práticas mais sustentáveis.',
      bgColor: 'bg-sage',
    },
    {
      name: 'Ana Oliveira',
      role: 'Consumidora Consciente - São Paulo',
      quote: 'Comprar produtos de comércio justo me faz sentir que estou contribuindo para um mundo melhor. A qualidade é excepcional e sei que está ajudando famílias rurais.',
      bgColor: 'bg-terracotta',
    },
  ];

  return (
    <section className="py-20 bg-forest text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Vozes do Comércio Justo</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Histórias reais de pessoas que fazem parte desta transformação.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 ${testimonial.bgColor} rounded-full flex items-center justify-center mr-4`}>
                  <User className="text-white text-2xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                  <p className="text-white/70">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-lg text-white/90 italic mb-4">
                "{testimonial.quote}"
              </p>
              <div className="flex text-terracotta">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
