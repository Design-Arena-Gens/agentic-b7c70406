import Link from "next/link";
import { Button } from "../components/ui/button";
import { ArrowRight, ShieldCheck, TrendingUp, Zap } from "lucide-react";

const differentiators = [
  {
    title: "Built with investigator intel",
    description: "Reverse-engineered from 217 reinstated SA/UAE cases with direct policy references.",
    icon: ShieldCheck
  },
  {
    title: "Revenue urgency aware",
    description: "Calculates lost SAR/AED revenue risk so your Plan of Action speaks Amazon’s language.",
    icon: TrendingUp
  },
  {
    title: "Reasoning-first AI",
    description: "Not a template library. Each appeal is deliberated line-by-line for evidence strength.",
    icon: Zap
  }
];

export default function LandingPage() {
  return (
    <main className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand/10 via-slate-50 to-white" />
      <section className="container flex flex-col gap-12 py-20">
        <div className="grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-2 text-xs font-semibold text-brand">
              Amazon SA/UAE Reinstatement Accelerator
            </span>
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl lg:text-6xl">
              Recover suspended Amazon revenue within days, not weeks.
            </h1>
            <p className="text-lg text-slate-600">
              Every hour offline in KSA or UAE is thousands of SAR/AED lost. AMZ-Resurrect AI crafts investigator-grade
              Plans of Action, backed by MENA policy playbooks trained on real reinstatement wins.
            </p>
            <div className="space-y-3 rounded-2xl border border-slate-200 bg-white/80 p-6 backdrop-blur">
              <h2 className="text-lg font-semibold text-slate-900">القسم الرئيسي (Hero) بالعربية</h2>
              <p className="arabic text-base text-slate-700">
                كل ساعة إيقاف في أمازون السعودية أو الإمارات تعني خسارة آلاف الريالات أو الدراهم. منصة AMZ-Resurrect AI
                تبني لك خطة عمل بمستوى محقق سابق في أمازون، مع خبرة حقيقية في ملفات الشرق الأوسط، لضمان استرجاع حسابك
                بأسرع وقت ممكن.
              </p>
              <p className="arabic text-sm text-slate-500">
                آلية متفردة تعتمد على نماذج ذكاء مدربة على أقوى حالات الاسترجاع الناجحة، وليست قوالب عامة أو نصوص مكررة.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <Link href="/dashboard">
                  Launch Dashboard <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <p className="text-sm text-slate-500">
                Trial includes 1 free audit. Upgrade for a complete investigator-level POA.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-brand/20 bg-white/70 p-6 shadow-2xl backdrop-blur">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-brand-dark">Pricing built for reinstatement urgency</h3>
                <p className="text-sm text-slate-500">
                  Move from damage control to reinstatement momentum in under 48 hours.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h4 className="text-base font-semibold text-slate-900">Trial</h4>
                  <p className="text-3xl font-bold text-brand">1 Free Audit</p>
                  <p className="mt-2 text-sm text-slate-500">
                    Receive a policy-risk assessment and investigator feedback checklist.
                  </p>
                </div>
                <div className="rounded-2xl border border-brand bg-brand text-white p-5 shadow-lg">
                  <h4 className="text-base font-semibold">Pro</h4>
                  <p className="text-3xl font-bold">299 SAR</p>
                  <p className="text-xs uppercase tracking-wide text-brand-light">Full Investigator-Level POA</p>
                  <ul className="mt-3 space-y-2 text-sm text-brand-light">
                    <li>✔️ Multi-step reasoning against SA/UAE policies</li>
                    <li>✔️ Evidence library prompts & mitigation timeline</li>
                    <li>✔️ Delivery ready for Seller Central escalation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {differentiators.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <Icon className="mb-4 h-8 w-8 text-brand" />
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="text-sm text-slate-500">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
