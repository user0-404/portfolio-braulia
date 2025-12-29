import { ExternalLink, Github, Code2, Smartphone, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import ecommerceImage from '../../assets/ecommerce-beleza.png';

const projects = [
  {
    icon: Globe,
    title: 'E-Commerce Platform',
    description: 'Interface de ecommerce de roupas e acessórios femininos, desenvolvida com foco em UI/UX, responsividade e experiência do utilizador.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    gradient: 'from-rose-400 to-pink-500',
    image: 'https://images.unsplash.com/photo-1727407209320-1fa6ae60ee05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    codeUrl: 'https://github.com/braulia-pedro/femme',
    demoUrl: 'https://femme-site.vercel.app/',

  },
  {
    icon: Smartphone,
    title: 'App de Gestão de Tarefas',
    description: 'Aplicação mobile-first para organização de tarefas com colaboração em tempo real e notificações.',
    technologies: ['React Native', 'Firebase', 'TypeScript'],
    gradient: 'from-pink-400 to-purple-400',
    image: 'https://images.unsplash.com/photo-1585435516476-bd92c7d4d9b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    codeUrl: 'https://github.com/seuusuario/ecommerce-platform',
    demoUrl: 'https://ecommerce-platform-demo.com',
  },
  {
    icon: Code2,
    title: 'Dashboard Analytics',
    description: 'Dashboard interativo para visualização de dados com gráficos dinâmicos e relatórios personalizáveis.',
    technologies: ['Next.js', 'Recharts', 'Tailwind CSS'],
    gradient: 'from-purple-400 to-pink-500',
    image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    codeUrl: 'https://github.com/seuusuario/ecommerce-platform',
    demoUrl: 'https://aurora-projects.vercel.app/',
  },
  {
    icon: Globe,
    title: 'Beleza Delicada — Ecommerce',
    description: 'Ecommerce de cosméticos focado em UX, estética e experiência de compra.',
    technologies: ['React', 'GraphQL', 'MongoDB'],
    gradient: 'from-rose-500 to-purple-400',
    image: ecommerceImage,
    codeUrl: 'https://github.com/braulia-pedro/aurora-site',
    demoUrl: 'https://aurora-projects.vercel.app/', 
  },
  {
    icon: Smartphone,
    title: 'Social Media App',
    description: 'Rede social com feed personalizado, stories, mensagens privadas e sistema de follows.',
    technologies: ['React', 'WebSocket', 'Redis', 'AWS'],
    gradient: 'from-pink-400 to-rose-500',
    image: 'https://images.unsplash.com/photo-1579869847557-1f67382cc158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzb2NpYWwlMjBtZWRpYXxlbnwxfHx8fDE3NjU4MzE3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    codeUrl: 'https://github.com/braulia-pedro/aurora-site',
    demoUrl: 'https://aurora-projects.vercel.app/', 
  },
  {
    icon: Code2,
    title: 'API Gateway',
    description: 'Gateway de API escalável com autenticação, rate limiting e monitorização em tempo real.',
    technologies: ['Node.js', 'Docker', 'Kubernetes', 'Nginx'],
    gradient: 'from-purple-500 to-pink-400',
    image: 'https://images.unsplash.com/photo-1705083649406-e72514a44002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGklMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NTgzNDIwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    codeUrl: 'https://github.com/braulia-pedro/aurora-site',
    demoUrl: 'https://aurora-projects.vercel.app/', 
  },  

];

const cardBaseClasses = 'group backdrop-blur-2xl bg-white/60 dark:bg-white/10 rounded-2xl overflow-hidden border border-white/40 hover:bg-white/75 dark:hover:bg-white/15 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl shadow-lg shadow-pink-200/30 dark:shadow-pink-900/20';
const buttonBaseClasses = 'flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-white/40 hover:bg-white/80 dark:hover:bg-white/20 transition-all duration-200 text-rose-900 dark:text-pink-100';

function TechBadge({ tech }: { tech: string }) {
  return (
    <span className="text-xs px-3 py-1 rounded-full backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-white/40 text-rose-900 dark:text-pink-200">
      {tech}
    </span>
  );
}

function ProjectButtons({ codeUrl, demoUrl }: { codeUrl: string; demoUrl: string }) {
  return (
    <div className="flex gap-3 pt-4 border-t border-white/30">
      <a href={codeUrl} target="_blank" rel="noopener noreferrer" className={buttonBaseClasses} >
        <Github className="w-4 h-4" />
        <span className="text-sm">Code</span>
      </a>

      <a href={demoUrl} target="_blank" rel="noopener noreferrer" className={buttonBaseClasses} >
        <ExternalLink className="w-4 h-4" />
        <span className="text-sm">Demo</span>
      </a>
    </div>    
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const Icon = project.icon;
  return (
    <div className={cardBaseClasses}>
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
        <div className="absolute top-4 right-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl mb-3 text-rose-900 dark:text-pink-100">{project.title}</h3>
        <p className="text-rose-800 dark:text-pink-300 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
        <ProjectButtons codeUrl={project.codeUrl} demoUrl={project.demoUrl} />

      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projectos" className="min-h-screen py-20 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-rose-400/20 dark:bg-rose-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-pink-400/20 dark:bg-pink-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500">
            Projectos
          </h2>
          <p className="text-rose-800 dark:text-pink-300">Alguns dos meus trabalhos recentes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}