import { motion } from 'framer-motion';
import { ShoppingBag, Share2, Heart, Mail, Phone, MapPin } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function Contact() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const actions = [
    {
      icon: ShoppingBag,
      title: 'Compre Consciente',
      description: 'Escolha produtos certificados de comércio justo',
      color: 'bg-sage/10 text-sage',
    },
    {
      icon: Share2,
      title: 'Compartilhe',
      description: 'Espalhe a consciência sobre comércio justo',
      color: 'bg-terracotta/10 text-terracotta',
    },
    {
      icon: Heart,
      title: 'Apoie',
      description: 'Contribua com organizações de comércio justo',
      color: 'bg-soft-green/30 text-forest',
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'contato@comerciojusto.org',
    },
    {
      icon: Phone,
      label: '(11) 3456-7890',
    },
    {
      icon: MapPin,
      label: 'São Paulo, SP',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-cream" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-forest mb-6">
            Junte-se ao Movimento
          </h2>
          <p className="text-xl text-warm-gray mb-12 max-w-3xl mx-auto">
            Seja parte da transformação. Descubra como você pode apoiar o comércio justo 
            e fazer a diferença na vida de milhares de famílias.
          </p>

          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            {actions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className={`${action.color} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4`}>
                  <action.icon className="text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-forest mb-2">{action.title}</h3>
                <p className="text-warm-gray">{action.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-forest mb-6">Entre em Contato</h3>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <contact.icon className="text-sage text-2xl mb-2" />
                  <p className="text-forest font-semibold">{contact.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
