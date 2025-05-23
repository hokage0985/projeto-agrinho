import { motion } from 'framer-motion';
import { Tractor, Truck, ShoppingCart, ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function Connection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const steps = [
    {
      icon: Tractor,
      title: 'Produção Responsável',
      description: 'Agricultores adotam práticas sustentáveis, recebem treinamento e certificação para produzir alimentos de alta qualidade.',
      color: 'bg-sage/10 text-sage',
    },
    {
      icon: Truck,
      title: 'Cadeia Transparente',
      description: 'Sistema de rastreabilidade que garante origem ética dos produtos, desde a fazenda até o consumidor final.',
      color: 'bg-terracotta/10 text-terracotta',
    },
    {
      icon: ShoppingCart,
      title: 'Consumo Consciente',
      description: 'Consumidores urbanos fazem escolhas informadas, apoiando práticas sustentáveis e comunidades rurais.',
      color: 'bg-soft-green/30 text-forest',
    },
  ];

  const mutualBenefits = [
    {
      title: 'Para Produtores',
      description: 'Renda estável, acesso a mercados, capacitação técnica',
    },
    {
      title: 'Para Consumidores',
      description: 'Produtos de qualidade, origem garantida, impacto positivo',
    },
    {
      title: 'Para Meio Ambiente',
      description: 'Práticas sustentáveis, biodiversidade, mudanças climáticas',
    },
  ];

  return (
    <section id="connection" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-forest mb-6">
            Conectando Campo e Cidade
          </h2>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto">
            O comércio justo cria uma ponte vital entre produtores rurais e consumidores urbanos, 
            promovendo transparência, sustentabilidade e desenvolvimento mútuo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className={`${step.color} rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6`}>
                <step.icon className="text-5xl" />
              </div>
              <h3 className="text-2xl font-bold text-forest mb-4">{step.title}</h3>
              <p className="text-warm-gray">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-cream rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=500"
                alt="Mercado urbano conectando produtores e consumidores"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-forest mb-6">Benefícios Mútuos</h3>
              <div className="space-y-4">
                {mutualBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <ArrowRight className="text-sage text-xl mt-1 mr-4" />
                    <div>
                      <h4 className="text-lg font-semibold text-forest mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-warm-gray">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
