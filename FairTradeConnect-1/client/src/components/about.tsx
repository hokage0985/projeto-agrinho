import { motion } from 'framer-motion';
import { Heart, Users, Leaf } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function About() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const principles = [
    {
      icon: Heart,
      title: 'Preços Justos',
      description: 'Garantindo remuneração adequada que cobre custos de produção sustentável.',
    },
    {
      icon: Users,
      title: 'Condições Dignas',
      description: 'Promovendo ambientes de trabalho seguros e respeitosos para todos.',
    },
    {
      icon: Leaf,
      title: 'Sustentabilidade',
      description: 'Práticas agrícolas que preservam o meio ambiente para futuras gerações.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-forest mb-6">
            O Que é Comércio Justo?
          </h2>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto">
            Uma abordagem comercial que garante condições justas para produtores e trabalhadores, 
            promovendo sustentabilidade ambiental e desenvolvimento comunitário.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
              alt="Agricultores trabalhando em plantação de café orgânico"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-forest mb-6">Princípios Fundamentais</h3>
            <div className="space-y-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-start"
                >
                  <principle.icon className="text-terracotta text-2xl mt-1 mr-4" />
                  <div>
                    <h4 className="text-xl font-semibold text-forest mb-2">
                      {principle.title}
                    </h4>
                    <p className="text-warm-gray">{principle.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
