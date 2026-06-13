'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Shield,
  AlertCircle,
  CheckCircle,
  MessageSquare,
  Lock,
  Eye,
  Link2,
  DollarSign,
  PhoneOff,
  Share2,
  Heart,
  Mail,
  Phone,
} from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
}

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { staggerChildren: 0.2 },
}

export default function Home() {
  const [nome, setNome] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setNome('')
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
              <Shield className="text-white w-6 h-6" />
            </div>
            <span className="font-display font-bold text-lg text-slate-900">
              ProtegeZap
            </span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#objetivos" className="text-slate-600 hover:text-primary transition">
              Objetivos
            </a>
            <a href="#golpes" className="text-slate-600 hover:text-primary transition">
              Tipos de Golpes
            </a>
            <a href="#praticas" className="text-slate-600 hover:text-primary transition">
              Boas Práticas
            </a>
            <a href="#contato" className="text-slate-600 hover:text-primary transition">
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              Proteja-se contra{' '}
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                golpes digitais
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Educação digital para prevenção de fraudes no WhatsApp. Aprenda a identificar
              riscos, proteger seus dados e usar o celular com segurança no dia a dia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById('golpes')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition"
              >
                Conhecer os golpes
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById('praticas')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-4 border-2 border-slate-300 text-slate-900 font-semibold rounded-lg hover:bg-slate-50 transition"
              >
                Ver guia de proteção
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '1000+', label: 'Pessoas educadas' },
            { number: '40+', label: 'Tipos de fraudes identificadas' },
            { number: '100%', label: 'Conteúdo disponível em português' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              className="text-center"
            >
              <p className="font-display text-4xl font-bold text-green-400">{stat.number}</p>
              <p className="text-slate-300 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Objetivos */}
      <section id="objetivos" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeInUp} className="font-display text-4xl font-bold text-slate-900 mb-12 text-center">
            O que buscamos
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <AlertCircle className="w-8 h-8" />,
                title: 'Mapear riscos',
                description: 'Identificar os principais riscos e dúvidas da comunidade sobre golpes digitais e privacidade',
              },
              {
                icon: <Share2 className="w-8 h-8" />,
                title: 'Criar materiais educativos',
                description: 'Desenvolver cartilhas e conteúdos visuais com linguagem simples e exemplos reais',
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Incluir digitalmente',
                description: 'Capacitar jovens e adultos para uso seguro da tecnologia e proteção de dados pessoais',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 border border-blue-100 card-shadow hover:shadow-xl transition group cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-green-500 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition transform">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tipos de Golpes */}
      <section id="golpes" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeInUp} className="font-display text-4xl font-bold text-slate-900 mb-12 text-center">
            Golpes comuns no WhatsApp
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                icon: <Link2 className="w-6 h-6" />,
                title: 'Links fraudulentos',
                description: 'Links que parecem legítimos mas redirecionam para sites falsos para roubar dados',
                sinais: 'URL estranha, site com logo falso, pedindo login/senha',
                prevencao: 'Nunca clique em links de estranhos. Verifique o site oficial antes.',
              },
              {
                icon: <DollarSign className="w-6 h-6" />,
                title: 'Golpe do Pix',
                description: 'Pedidos de transferência Pix com promessas falsas de dinheiro ou empréstimos',
                sinais: 'Promessa de ganhar dinheiro rápido, pedindo adiantamento',
                prevencao: 'Legítimas oportunidades não pedem dinheiro antes. Desconfie!',
              },
              {
                icon: <PhoneOff className="w-6 h-6" />,
                title: 'Chamadas de vídeo falsas',
                description: 'Criminosos se passam por conhecidos seus usando fotos ou vídeos roubados',
                sinais: 'Pede para fazer algo comprometedor ou pede dados pessoais durante chamada',
                prevencao: 'Confirme identidade por outro canal. Não envie dados em videochamadas.',
              },
              {
                icon: <Eye className="w-6 h-6" />,
                title: 'Roubo de credenciais',
                description: 'Mensagens pedindo senhas, códigos de verificação ou dados bancários',
                sinais: 'Pedido direto de senha ou código SMS/email',
                prevencao: 'WhatsApp e bancos NUNCA pedem esses dados. Ignore e denuncie!',
              },
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: 'Phishing',
                description: 'Mensagens falsas se passando por empresas conhecidas pedindo confirmação de dados',
                sinais: 'Mensagem "urgente" com logo fake, pedindo clique em link',
                prevencao: 'Acesse o site oficial digitando na barra. Não clique em links da mensagem.',
              },
              {
                icon: <Lock className="w-6 h-6" />,
                title: 'Clonagem de conta',
                description: 'Golpistas usam sua foto e dados para criar uma conta falsa e enganar seus contatos',
                sinais: 'Contatos relatam sua conta pedindo dinheiro ou dados',
                prevencao: 'Mantenha privacidade restrita. Avise contatos se suspeitar de clone.',
              },
              {
                icon: <AlertCircle className="w-6 h-6" />,
                title: 'Golpe do falso suporte técnico',
                description: 'Mensagens se passando por técnicos do WhatsApp ou do celular para "verificar" seu dispositivo',
                sinais: 'Pede para baixar arquivo ou clicar em link de "verificação"',
                prevencao: 'WhatsApp não envia mensagens pedindo verificação. Bloqueie e denuncie.',
              },
              {
                icon: <Share2 className="w-6 h-6" />,
                title: 'Correntes e mensagens virais',
                description: 'Mensagens com promessas de prêmios, sorteios falsos ou avisos alarmistas',
                sinais: 'Mensagens com "compartilhe para 10 pessoas" ou "se não compartilhar algo ruim acontecerá"',
                prevencao: 'Não compartilhe correntes. Ignore e delete. Verifique informações em sites oficiais.',
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: 'Golpe do romance (catfish)',
                description: 'Criminosos criam perfil falso com fotos bonitas para ganhar confiança e pedir dinheiro',
                sinais: 'Recusam videochamada, pedem dinheiro urgente, histórias inconsistentes',
                prevencao: 'Peça sempre para fazer videochamada. Desconfie de pedidos de dinheiro. Pesquise as fotos.',
              },
              {
                icon: <DollarSign className="w-6 h-6" />,
                title: 'Golpe de empréstimo rápido',
                description: 'Promessas de empréstimo fácil e rápido pedindo dados bancários ou taxa antecipada',
                sinais: 'Aprovação instantânea, taxa "irrecusável", pedindo comprovante bancário',
                prevencao: 'Bancos legítimos analisam sua documentação. Desconfie de promessas rápidas demais.',
              },
              {
                icon: <Lock className="w-6 h-6" />,
                title: 'Golpe do código QR',
                description: 'QR codes falsos que redirecionam para sites de phishing ou baixam malware',
                sinais: 'QR code em local suspeito, digitação estranha após escanear',
                prevencao: 'Desconfie de QR codes desconhecidos. Verifique a URL antes de prosseguir.',
              },
              {
                icon: <Eye className="w-6 h-6" />,
                title: 'Roubo de fotos para vender',
                description: 'Criminosos roubam suas fotos e documentos para vender ou cometer fraudes',
                sinais: 'Sua foto aparece em publicações de estranhos ou tira de documentos vazando',
                prevencao: 'Restringir quem vê suas fotos. Denuncie perfis falsos. Não envie documentos por WhatsApp.',
              },
            ].map((golpe, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-red-300 transition group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 flex-shrink-0 group-hover:bg-red-200 transition">
                    {golpe.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-slate-900 mb-1">{golpe.title}</h3>
                    <p className="text-slate-600 text-sm">{golpe.description}</p>
                  </div>
                </div>
                <div className="space-y-3 pl-16 border-l-2 border-red-200">
                  <div>
                    <p className="text-xs font-semibold text-red-600 uppercase">⚠️ Sinais de alerta</p>
                    <p className="text-sm text-slate-600">{golpe.sinais}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-green-600 uppercase">✓ Como se proteger</p>
                    <p className="text-sm text-slate-600">{golpe.prevencao}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Boas Práticas */}
      <section id="praticas" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeInUp} className="font-display text-4xl font-bold text-slate-900 mb-12 text-center">
            Guia de proteção e boas práticas
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div {...fadeInUp} className="space-y-4">
              <div className="text-5xl font-display font-bold text-blue-600">
                7 passos
              </div>
              <p className="text-xl text-slate-600 mb-8">
                para proteger sua privacidade e segurança no WhatsApp
              </p>

              {[
                'Nunca compartilhe códigos de verificação ou senhas com ninguém',
                'Desconfie de mensagens pedindo dados pessoais ou bancários',
                'Não clique em links de pessoas desconhecidas',
                'Ative a autenticação de dois fatores no WhatsApp',
                'Bloqueia e denuncia números suspeitos imediatamente',
                'Mantenha seu celular atualizado com as últimas versões',
                'Se suspeitar de clone, avise seus contatos imediatamente',
              ].map((passo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-slate-700">{passo}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div {...fadeInUp} className="space-y-6">
              {[
                {
                  title: '⚠️ Se foi vítima de golpe',
                  items: [
                    'Denuncie para a polícia civil',
                    'Bloqueie o número do golpista',
                    'Altere suas senhas imediatamente',
                    'Notifique seu banco se houver transações suspeitas',
                  ],
                },
                {
                  title: '🔐 Configurações importantes',
                  items: [
                    'Ative a autenticação de dois fatores',
                    'Mantenha backups criptografados',
                    'Configure privacidade para "Meus contatos" apenas',
                    'Revise as apps com acesso à sua conta',
                  ],
                },
              ].map((section, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl border border-green-100"
                >
                  <h3 className="font-display font-bold text-slate-900 mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex gap-3 items-start text-slate-700">
                        <span className="text-green-600 font-bold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Avaliação */}
      <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-slate-900 mb-4">
              Como foi sua experiência?
            </h2>
            <p className="text-slate-600 text-lg">
              Sua avaliação nos ajuda a melhorar o conteúdo educativo
            </p>
          </motion.div>

          <motion.form
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl border border-blue-100"
          >
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Seu primeiro nome (opcional)
              </label>
              <input
                type="text"
                placeholder="Ex: João"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full px-6 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Horário: <span className="text-blue-600 font-bold">{new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</span>
              </label>
              <input
                type="hidden"
                name="horario"
                value={new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
              />
              <p className="text-sm text-slate-600">Horário registrado automaticamente</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                Como avalia este conteúdo?
              </label>
              <div className="flex gap-3 justify-center">
                {['😞', '😐', '🙂', '😊', '😍'].map((emoji, i) => (
                  <button
                    key={i}
                    type="button"
                    className="py-3 text-4xl hover:scale-125 transition transform"
                    onClick={() => {}}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold rounded-lg hover:shadow-lg transition"
            >
              Enviar Avaliação
            </button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-700 text-center font-semibold"
              >
                ✓ Obrigado por sua avaliação!
              </motion.div>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-slate-600 mb-4">Dúvidas? Entre em contato conosco:</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="mailto:tekboxs@gmail.com" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
                <Mail className="w-5 h-5" />
                tekboxs@gmail.com
              </a>
              <a href="https://wa.me/5569" className="flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold">
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                  <Shield className="text-white w-5 h-5" />
                </div>
                <span className="font-display font-bold text-white">ProtegeZap</span>
              </div>
              <p className="text-sm">
                Educação digital para prevenção de golpes no WhatsApp em Porto Velho, RO
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#objetivos" className="hover:text-green-400 transition">
                    Objetivos
                  </a>
                </li>
                <li>
                  <a href="#golpes" className="hover:text-green-400 transition">
                    Tipos de Golpes
                  </a>
                </li>
                <li>
                  <a href="#praticas" className="hover:text-green-400 transition">
                    Boas Práticas
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-green-400 transition">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Sobre</h4>
              <p className="text-sm mb-4">
                Projeto extensionista do Centro Universitário Internacional UNINTER - Escola
                Superior Politécnica
              </p>
              <p className="text-xs text-slate-500">
                Aluno: Miguel Casagrande dos Santos | RU: 5168345 | Email: tekboxs@gmail.com
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>
              © 2024 ProtegeZap Porto Velho. Todos os direitos reservados. | Desenvolvido com{' '}
              <span className="text-red-500">❤️</span> para a comunidade
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
