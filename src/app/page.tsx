'use client'

import { motion } from 'framer-motion'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Zap,
  Shield,
  Rocket,
  Target,
  Users,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Star,
  Sparkles,
} from 'lucide-react'
import { useState, useEffect } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function LandingPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const features = [
    {
      icon: Zap,
      title: 'Ultra Rápido',
      description: 'Performance excepcional com otimização de carregamento instantâneo.',
      color: 'blue',
    },
    {
      icon: Shield,
      title: 'Segurança Total',
      description: 'Proteção avançada de dados com criptografia de ponta a ponta.',
      color: 'green',
    },
    {
      icon: Rocket,
      title: 'Crescimento Acelerado',
      description: 'Escale seu negócio com ferramentas inteligentes de automação.',
      color: 'blue',
    },
  ]

  const benefits = [
    {
      icon: Target,
      title: 'Precisão Total',
      description: 'Ferramentas otimizadas para atingir seus objetivos com exatidão.',
    },
    {
      icon: Users,
      title: 'Colaboração Eficiente',
      description: 'Trabalhe em equipe com recursos colaborativos integrados.',
    },
    {
      icon: BarChart3,
      title: 'Analytics Poderoso',
      description: 'Insights valiosos em tempo real para decisões estratégicas.',
    },
    {
      icon: CheckCircle2,
      title: 'Qualidade Garantida',
      description: 'Processos rigorosos de qualidade para resultados excelentes.',
    },
  ]

  const testimonials = [
    {
      name: 'Ana Silva',
      role: 'CEO, TechStart',
      content: 'Transformou completamente nossa maneira de trabalhar. Resultados incríveis!',
      rating: 5,
    },
    {
      name: 'Carlos Mendes',
      role: 'CTO, DigitalFlow',
      content: 'A melhor solução que já implementamos. Suporte excepcional.',
      rating: 5,
    },
    {
      name: 'Marina Costa',
      role: 'Director, InnovateCorp',
      content: 'Excedeu todas as expectativas. Recomendo fortemente!',
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <div className="h-8 w-8 rounded-lg gradient-blue flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-primary to-green-primary bg-clip-text text-transparent">
                NextGen
              </span>
            </motion.div>

            <motion.nav
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <ThemeToggle />
              <Button className="hidden sm:inline-flex bg-gradient-to-r from-blue-primary to-green-primary hover:opacity-90">
                Começar Agora
              </Button>
            </motion.nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-primary/5 via-transparent to-green-primary/5" />
          <div className="absolute top-20 left-1/4 h-64 w-64 rounded-full bg-blue-primary/10 blur-3xl animate-float" />
          <div className="absolute bottom-20 right-1/4 h-64 w-64 rounded-full bg-green-primary/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface-subtle px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-primary" />
              </span>
              <span className="text-sm font-medium">Nova versão 2.0 disponível</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl tracking-tight"
            >
              Inovação que
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-primary to-green-primary bg-clip-text text-transparent">
                  {' '}Transforma
                </span>
              </span>
              <br />
              o Seu Negócio
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mb-10 text-lg text-muted-foreground sm:text-xl"
            >
              Plataforma completa para impulsionar seus projetos com tecnologia de ponta.
              Simples, poderosa e projetada para crescer com você.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-primary to-green-primary hover:opacity-90 text-white shadow-lg glow-mixed"
              >
                Começar Gratuitamente
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:bg-surface-subtle"
              >
                Ver Demonstração
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-primary" />
                <span>Sem cartão de crédito</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-primary" />
                <span>14 dias grátis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-primary" />
                <span>Cancelamento a qualquer momento</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32 bg-surface-subtle/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Recursos que
              <span className="bg-gradient-to-r from-blue-primary to-green-primary bg-clip-text text-transparent">
                {' '}Impressionam
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tudo o que você precisa para levar seus projetos ao próximo nível
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-3"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              const isBlue = feature.color === 'blue'

              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className={`h-full border-2 ${isBlue ? 'glow-blue' : 'glow-green'} hover:border-opacity-100 transition-all duration-300`}>
                    <CardHeader>
                      <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${isBlue ? 'gradient-blue' : 'gradient-green'}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm font-medium transition-colors">
                        <span className={isBlue ? 'text-blue-primary' : 'text-green-primary'}>
                          Saiba mais
                        </span>
                        <ArrowRight className={`ml-2 h-4 w-4 ${isBlue ? 'text-blue-primary' : 'text-green-primary'}`} />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Por que nos
              <span className="bg-gradient-to-r from-blue-primary to-green-primary bg-clip-text text-transparent">
                {' '}Escolher?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Diferenciais que fazem a diferença no seu dia a dia
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group rounded-2xl border-2 border-border bg-card p-6 transition-all hover:border-blue-primary hover:shadow-xl"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-surface-subtle group-hover:bg-blue-primary/10 transition-colors">
                    <Icon className="h-6 w-6 text-blue-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-32 bg-surface-subtle/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              O que nossos
              <span className="bg-gradient-to-r from-blue-primary to-green-primary bg-clip-text text-transparent">
                {' '}Clientes Dizem
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Histórias reais de quem já transformou seus negócios
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-3"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full border-2 border-border hover:border-green-primary transition-all">
                  <CardHeader>
                    <div className="mb-4 flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      "{testimonial.content}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-blue text-sm font-semibold text-white">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border-2 border-border bg-surface p-8 sm:p-16 text-center glow-mixed"
          >
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-primary/10 via-transparent to-green-primary/10" />
            </div>

            <div className="relative z-10 mx-auto max-w-2xl">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl gradient-mixed"
              >
                <Rocket className="h-8 w-8 text-white" />
              </motion.div>

              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                Pronto para
                <span className="bg-gradient-to-r from-blue-primary to-green-primary bg-clip-text text-transparent">
                  {' '}Começar?
                </span>
              </h2>

              <p className="mb-8 text-lg text-muted-foreground">
                Junte-se a milhares de empresas que já estão transformando seus negócios conosco.
              </p>

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-primary to-green-primary hover:opacity-90 text-white shadow-lg"
                >
                  Começar Agora Gratuitamente
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 hover:bg-surface-subtle"
                >
                  Falar com Especialista
                </Button>
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
                Sem compromisso • Suporte 24/7 • Cancelamento fácil
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-surface-subtle/30 mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg gradient-blue flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-primary to-green-primary bg-clip-text text-transparent">
                  NextGen
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Transformando negócios com tecnologia de ponta e soluções inovadoras.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Produto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-blue-primary transition-colors">
                    Recursos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-primary transition-colors">
                    Preços
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-primary transition-colors">
                    Integrações
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-primary transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-green-primary transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-primary transition-colors">
                    Carreiras
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-primary transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Termos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 NextGen. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
