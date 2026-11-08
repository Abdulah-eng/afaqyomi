import { ArrowUpRight, Phone, Sparkles } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { teamMembers } from '@/data/teamData';

export function TeamSection() {
  const founder = teamMembers[0];
  const teamList = teamMembers.slice(1);

  return (
    <section id="team" className="border-t border-white/10 bg-[#09151c] py-20 sm:py-28">
      <div className="mx-auto max-w-[1340px] px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-mono-ui uppercase tracking-[0.2em] text-[#54e6df]">
            <Sparkles size={11} className="text-[#f1a35d]" />
            <span>The Team Behind AFAQYOMI</span>
          </div>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">
            Meet Our Leadership & Department Specialists
          </h2>
          <p className="mt-3 text-sm text-white/60">
            A specialized collective of music marketing strategists, release managers, audio directors, and client success leads.
          </p>
        </div>

        {/* Featured Founder Card */}
        <div className="mt-12 rounded-3xl border border-[#54e6df]/30 bg-gradient-to-br from-[#061015] via-[#09151c] to-[#0d2127] p-7 sm:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img
              src={founder.photo || '/media/afaqyomi-founder.jpeg'}
              alt={founder.name}
              className="h-36 w-36 sm:h-44 sm:w-44 shrink-0 rounded-2xl object-cover object-[center_20%] border border-[#54e6df]/30 shadow-xl"
            />
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono-ui text-[10px] uppercase tracking-widest text-[#f1a35d]">
                  {founder.experience}
                </span>
                <span className="rounded-full bg-[#54e6df]/10 px-2.5 py-0.5 font-mono-ui text-[9px] font-bold uppercase tracking-wider text-[#54e6df] border border-[#54e6df]/20">
                  Founder
                </span>
              </div>
              <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                {founder.name}
              </h3>
              <p className="text-xs font-semibold text-[#54e6df] uppercase tracking-wider font-mono-ui mt-1">
                {founder.role}
              </p>
              <p className="mt-3.5 text-sm leading-relaxed text-white/70 max-w-3xl">
                {founder.fullBio}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {founder.specialties.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg bg-white/5 px-2.5 py-1 font-mono-ui text-[10px] text-white/70 border border-white/5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Department Specialists Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamList.map((member) => (
            <div
              key={member.id}
              className="group rounded-3xl border border-white/10 bg-[#061015] p-6 transition duration-300 hover:border-[#54e6df]/40 hover:bg-[#08151b] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-20 w-20 shrink-0 rounded-2xl object-cover object-[center_20%] border border-white/10 shadow-md group-hover:border-[#54e6df]/40 transition"
                  />
                  <div>
                    <span className="font-mono-ui text-[9px] uppercase tracking-wider text-[#f1a35d]">
                      {member.experience || 'Operations Lead'}
                    </span>
                    <h4 className="mt-0.5 font-display text-lg font-bold text-white group-hover:text-[#54e6df] transition">
                      {member.name}
                    </h4>
                    <p className="font-mono-ui text-[10px] font-medium text-[#54e6df]">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-white/60">
                  {member.shortBio}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                {member.specialties.slice(0, 3).map((spec) => (
                  <span
                    key={spec}
                    className="rounded bg-white/5 px-2 py-0.5 font-mono-ui text-[9px] text-white/60"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Team WhatsApp Support Banner (To report any issues) */}
        <div className="mt-12 rounded-3xl border border-[#54e6df]/30 bg-gradient-to-r from-[#061e22] via-[#09151c] to-[#0a171f] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#54e6df]/15 text-[#54e6df] border border-[#54e6df]/30">
              <Phone size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono-ui text-[10px] uppercase tracking-widest text-[#54e6df]">
                  Real-time Operations
                </span>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 font-mono-ui text-[9px] font-bold text-emerald-400">
                  Available
                </span>
              </div>
              <h3 className="mt-1 font-display text-xl font-bold text-white">
                Team WhatsApp Support: {siteConfig.teamWhatsappSupport}
              </h3>
              <p className="mt-1 text-xs text-white/70 max-w-xl leading-relaxed">
                Need immediate assistance with a music release, service inquiry, or to report any issues? Reach out directly to our team operations desk.
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${siteConfig.teamWhatsappSupport.replace(/\D/g, '')}?text=${encodeURIComponent('Hello AFAQYOMI Team Support, I would like to report an issue / inquire about a service.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-[#54e6df] px-6 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-[#071116] transition hover:bg-[#72ece6] hover:shadow-[0_0_25px_rgba(84,230,223,0.35)]"
          >
            <span>Chat on WhatsApp</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

