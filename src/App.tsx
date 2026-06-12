import {
  ArrowRight,
  Bot,
  CheckCircle2,
  FileSearch,
  GitBranch,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import type { ReactNode } from 'react';
import {
  aiSupports,
  certifications,
  contact,
  featuredCases,
  heroStats,
  pmoSupports,
  skillGroups,
  strengths,
  timeline,
  training,
} from './data/portfolio';

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        本文へ移動
      </a>

      <main id="main" className="portfolio-page">
        <Hero />

        <Section id="strength" eyebrow="Strength" title="相談できること">
          <div className="strength-grid">
            {strengths.map((strength, index) => (
              <article className="strength-card reveal" key={strength.title} style={{ '--delay': `${index * 80}ms` } as React.CSSProperties}>
                <div className="card-index">0{index + 1}</div>
                <h3>{strength.title}</h3>
                <p>{strength.lead}</p>
                <ul className="check-list">
                  {strength.points.map((point) => (
                    <li key={point}>
                      <CheckCircle2 size={16} aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="cases" eyebrow="Featured Cases" title="代表実績">
          <div className="case-grid">
            {featuredCases.map((caseStudy, index) => (
              <article className={`case-card ${caseStudy.accent} reveal`} key={caseStudy.number} style={{ '--delay': `${index * 55}ms` } as React.CSSProperties}>
                <div className="case-head">
                  <span>Case {caseStudy.number}</span>
                  <p>{caseStudy.domain}</p>
                </div>
                <h3>{caseStudy.title}</h3>
                <p className="case-role">{caseStudy.role}</p>
                <InfoBlock label="課題">{caseStudy.challenge}</InfoBlock>
                <InfoBlock label="担当">{caseStudy.responsibility}</InfoBlock>
                <InfoBlock label="貢献">{caseStudy.contribution}</InfoBlock>
                <TagList tags={caseStudy.tags} />
              </article>
            ))}
          </div>
        </Section>

        <section className="split-section" aria-label="AI/RAGとPMO支援">
          <Section id="ai-rag" eyebrow="AI / RAG" title="AI・RAG活用支援">
            <div className="flow-panel" aria-label="RAG活用フロー">
              {['Documents', 'Search', 'Answer', 'Review', 'Task'].map((step) => (
                <span key={step}>{step}</span>
              ))}
            </div>
            <div className="support-grid compact-grid">
              {aiSupports.map((item) => (
                <article className="support-card ai" key={item.title}>
                  <Bot size={18} aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section id="pmo" eyebrow="PMO / Quality" title="PMO・成果物品質管理">
            <div className="pmo-panel">
              <div>
                <ShieldCheck size={28} aria-hidden="true" />
                <h3>プロジェクト推進と品質管理をセットで支援</h3>
                <p>
                  進捗・課題だけでなく、成果物、レビュー観点、トレーサビリティ、会議体まで整理します。
                </p>
              </div>
              <ul className="pmo-list">
                {pmoSupports.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Section>
        </section>

        <Section id="timeline" eyebrow="Experience Timeline" title="詳細経歴">
          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline-item" key={`${item.period}-${item.title}`}>
                <time>{item.period}</time>
                <div>
                  <p className="timeline-meta">{item.meta}</p>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="training-box">
            <h3>研修・基礎習得</h3>
            <ul>
              {training.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="skills" eyebrow="Skills" title="技術・ツール">
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <TagList tags={group.skills} />
              </article>
            ))}
          </div>
        </Section>

        <section className="contact-section" id="contact">
          <div>
            <p className="section-eyebrow">Contact</p>
            <h2>AI/RAG活用、PMO支援、成果物品質管理のご相談に対応します。</h2>
            <p>
              開発現場の実務理解を土台に、要件整理、仕様策定、レビュー、プロセス改善、AI活用の運用整理まで横断的に支援します。
            </p>
            <TagList tags={certifications} />
          </div>
          <address className="contact-card">
            <strong>{contact.name} / {contact.brand}</strong>
            <span>
              <MapPin size={16} aria-hidden="true" />
              {contact.location}
            </span>
            <span>{contact.availability}</span>
            <a className="primary-button" href={`mailto:${contact.email}`}>
              <Mail size={18} aria-hidden="true" />
              メールで相談する
            </a>
          </address>
        </section>
      </main>
    </>
  );
}

function Hero() {
  return (
    <header className="hero">
      <nav className="top-nav" aria-label="主要セクション">
        <a href="#strength">Strength</a>
        <a href="#cases">Cases</a>
        <a href="#ai-rag">AI/RAG</a>
        <a href="#pmo">PMO</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">
            <Sparkles size={16} aria-hidden="true" />
            KiT Works Portfolio / Updated 2026.06
          </p>
          <h1>
            AI/RAG × PMOで、
            <span>開発現場の情報整理と品質管理を前に進める。</span>
          </h1>
          <p className="hero-lead">
            RAG型仕様書チャットボット構築、成果物監査、トレーサビリティ管理、Jira運用、Slack活用まで。
            開発現場を理解した実務目線で、業務改善とプロジェクト推進を支援します。
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={`mailto:${contact.email}`}>
              <Mail size={18} aria-hidden="true" />
              相談する
            </a>
            <a className="secondary-button" href="#cases">
              代表実績を見る
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="workflow-visual" aria-label="業務フローを表す図">
          <div className="workflow-line" />
          {[
            { icon: FileSearch, label: 'Documents' },
            { icon: Bot, label: 'Search' },
            { icon: Sparkles, label: 'Answer' },
            { icon: ShieldCheck, label: 'Review' },
            { icon: GitBranch, label: 'Task' },
          ].map(({ icon: Icon, label }) => (
            <div className="workflow-node" key={label}>
              <Icon size={22} aria-hidden="true" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-stats" aria-label="プロフィール概要">
        {heroStats.map((stat) => (
          <article key={stat.label}>
            <p>{stat.label}</p>
            <strong>{stat.value}</strong>
            <span>{stat.note}</span>
          </article>
        ))}
      </div>
    </header>
  );
}

function Section({ id, eyebrow, title, children }: { id?: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="section" id={id} aria-labelledby={id ? `${id}-title` : undefined}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 id={id ? `${id}-title` : undefined}>{title}</h2>
      {children}
    </section>
  );
}

function InfoBlock({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="info-block">
      <p>{label}</p>
      <span>{children}</span>
    </div>
  );
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="tag-list">
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}

export default App;
