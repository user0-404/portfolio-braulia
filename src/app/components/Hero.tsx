import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { href: 'https://github.com/braulia-pedro', label: 'GitHub', icon: Github },
  { href: 'https://www.linkedin.com/in/br%C3%A1ulia-pedro-9a2782356/', label: 'LinkedIn', icon: Linkedin },
  { href: 'mailto:brauliapedro8@gmail.com', label: 'Email', icon: Mail },
];

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-20">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-400/30 dark:bg-rose-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-400/30 dark:bg-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400/20 dark:bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Liquid glass card */}
      <div className="relative max-w-6xl w-full backdrop-blur-2xl bg-white/60 dark:bg-white/10 rounded-3xl p-12 border border-white/40 shadow-2xl shadow-pink-200/50 dark:shadow-pink-900/30">
        <div className="text-center space-y-6">
          {/* Avatar */}
          <div className="inline-block p-1 rounded-full bg-gradient-to-br from-rose-400 via-pink-400 to-purple-400">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-rose-50 to-pink-100 dark:from-rose-900/50 dark:to-pink-900/50 flex items-center justify-center backdrop-blur-sm">
              <span className="text-5xl">👩‍💻</span>
            </div>
          </div>

          {/* Name and title */}
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500">
              Bráulia Pedro
            </h1>
            <p className="text-xl md:text-2xl text-rose-800 dark:text-pink-200">
              Desenvolvedora Full Stack
            </p>
          </div>

          {/* Description */}
          <p className="text-rose-800 dark:text-pink-300 max-w-2xl mx-auto leading-relaxed">
            Apaixonada por criar experiências digitais incríveis e soluções inovadoras.
            Especializada em React, TypeScript e desenvolvimento moderno de aplicações web.
          </p>

          {/* Social links */}
          <div className="flex gap-4 justify-center pt-4">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-full backdrop-blur-2xl bg-white/60 dark:bg-white/10 border border-white/40 hover:bg-white/80 dark:hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg shadow-pink-200/30 dark:shadow-pink-900/20"
              >
                <Icon className="w-6 h-6 text-rose-800 dark:text-pink-200" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <a
              href="#projectos"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
            >
              Ver Projectos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
