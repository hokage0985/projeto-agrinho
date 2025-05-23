import { motion } from 'framer-motion';
import { Users, Globe, Sprout, Heart, Check } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function Impact() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const stats = [
    {
      icon: Users,
      value: '2.5M+',
      label: 'Produtores Beneficiados',
    },
    {
      icon: Globe,
      value: '75+',
      label: 'Países Participantes',
    },
    {
      icon: Sprout,
      value: '1.8M',
      label: 'Hectares Certificados',
    },
    {
      icon: Heart,
      value: '$213M',
      label: 'Prêmio de Desenvolvimento',
    },
  ];

  const benefits = [
    'Melhoria na qualidade de vida das famílias rurais',
    'Investimento em educação e saúde comunitária',
    'Fortalecimento das organizações de produtores',
    'Preservação ambiental e biodiversidade',
  ];

  return (
    <section id="impact" className="py-20 bg-sage text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Impacto Real</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Números que demonstram como o comércio justo está transformando vidas e comunidades.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="bg-white/10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-4xl text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold mb-6">Transformação Social</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center mr-4">
                    <Check className="text-white text-sm" />
                  </div>
                  <span className="text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=500"
              alt="Família de agricultores feliz celebrando colheita"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
