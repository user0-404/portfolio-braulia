import { GraduationCap, Award, BookOpen } from 'lucide-react';

const formations = [
  {
    icon: GraduationCap,
    title: 'Licenciatura em Engenharia Informática',
    institution: 'Universidade Católica deAngola',
    period: '2022 - Atual',
    description: 'Foco em desenvolvimento de software e sistemas distribuídos.',
  },
  {
    icon: Award,
    title: 'Certificação React Advanced',
    institution: 'Plataforma Online',
    period: '2023',
    description: 'Especialização em React, Next.js e arquitetura moderna de frontend.',
  },
  {
    icon: BookOpen,
    title: 'Curso Full Stack Development',
    institution: 'Academia Tech',
    period: '2021',
    description: 'Desenvolvimento completo com Node.js, React e bases de dados.',
  },
];

export function Formation() {
  return (
    <section className="min-h-screen py-20 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-rose-400/20 dark:bg-rose-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500">
            Formação
          </h2>
          <p className="text-rose-800 dark:text-pink-300">
            Minha jornada educacional e certificações
          </p>
        </div>

        {/* Formation timeline */}
        <div className="space-y-6">
          {formations.map((formation, index) => {
            const Icon = formation.icon;
            return (
              <div
                key={index}
                className="group backdrop-blur-2xl bg-white/60 dark:bg-white/10 rounded-2xl p-8 border border-white/40 hover:bg-white/75 dark:hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-pink-200/30 dark:shadow-pink-900/20"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-rose-400 to-pink-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-pink-300/50">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow space-y-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <h3 className="text-xl text-rose-900 dark:text-pink-100">
                        {formation.title}
                      </h3>
                      <span className="text-sm text-rose-800 dark:text-pink-300 backdrop-blur-xl bg-white/60 dark:bg-white/10 px-4 py-1 rounded-full border border-white/40 w-fit">
                        {formation.period}
                      </span>
                    </div>
                    <p className="text-rose-800 dark:text-pink-200">
                      {formation.institution}
                    </p>
                    <p className="text-rose-700 dark:text-pink-300">
                      {formation.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}