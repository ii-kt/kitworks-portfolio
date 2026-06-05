import { CheckCircle2, Mail, MapPin } from 'lucide-react';
import type { ReactNode } from 'react';
import {
  certifications,
  contact,
  featuredCases,
  proofHighlights,
  services,
  skillGroups,
  strengths,
  workSteps,
} from './data/portfolio';

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        本文へ移動
      </a>

      <main id="main" className="sheet-page">
        <section className="sheet">
          <header className="sheet-header">
            <div>
              <p className="sheet-kicker">Portfolio / Skill Sheet</p>
              <h1>飯野 海斗 / KiT Works</h1>
              <p className="sheet-lead">AI活用・PMO/PL・業務改善</p>
            </div>
            <address className="contact-box">
              <a href={`mailto:${contact.email}`}>
                <Mail size={16} aria-hidden="true" />
                {contact.email}
              </a>
              <span>
                <MapPin size={16} aria-hidden="true" />
                {contact.location}
              </span>
              <span>{contact.availability}</span>
            </address>
          </header>

          <section className="summary-grid" aria-labelledby="summary-title">
            <div className="summary-main">
              <h2 id="summary-title">概要</h2>
              <p>
                IT業界で約7年。車載・組み込み開発を中心に、設計、実装、テスト、評価、顧客折衝、要件整理、PMO補佐、PL、業務改善を経験。
              </p>
              <p>
                現在は、生成AI、コード生成AI、Slack/Box連携、MCP/API連携などを活用し、開発現場の情報整理、レビュー支援、議事録支援、進捗・課題管理に取り組んでいます。
              </p>
            </div>
            <div className="summary-side">
              <h2>対応しやすい相談</h2>
              <ul className="check-list compact">
                <li>
                  <CheckCircle2 size={16} aria-hidden="true" />
                  AIを業務フローに組み込む小規模検証
                </li>
                <li>
                  <CheckCircle2 size={16} aria-hidden="true" />
                  PMO補佐、PL補佐、進捗・課題管理
                </li>
                <li>
                  <CheckCircle2 size={16} aria-hidden="true" />
                  要件整理、仕様策定、レビュー観点整理
                </li>
                <li>
                  <CheckCircle2 size={16} aria-hidden="true" />
                  Python / C/C++ / ログ分析を含む開発支援
                </li>
              </ul>
            </div>
          </section>

          <Section title="実務要約" eyebrow="Highlights">
            <ul className="highlight-list">
              {proofHighlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </Section>

          <Section id="cases" title="代表実績" eyebrow="Case Studies">
            <div className="case-sheet-list">
              {featuredCases.map((caseStudy) => (
                <article className="case-sheet" key={caseStudy.number}>
                  <div className="case-sheet-title">
                    <span>Case {caseStudy.number}</span>
                    <div>
                      <h3>{caseStudy.title}</h3>
                      <p>{caseStudy.category}</p>
                    </div>
                  </div>
                  <dl className="case-table">
                    <InfoRow label="課題 / 背景">{caseStudy.challenge}</InfoRow>
                    <InfoRow label="担当">
                      <CommaList items={caseStudy.role} />
                    </InfoRow>
                    <InfoRow label="工夫">{caseStudy.approach}</InfoRow>
                    <InfoRow label="成果">
                      <CommaList items={caseStudy.outcomes} />
                    </InfoRow>
                    <InfoRow label="ツール">
                      <TagList tags={caseStudy.tools} />
                    </InfoRow>
                    <InfoRow label="任せられること">{caseStudy.assignment}</InfoRow>
                  </dl>
                </article>
              ))}
            </div>
          </Section>

          <Section title="実績をもとに対応できる業務" eyebrow="Support Area">
            <div className="service-sheet-grid">
              {services.map((service) => (
                <article className="simple-card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.lead}</p>
                  <CommaList items={service.items} />
                </article>
              ))}
            </div>
          </Section>

          <section className="two-column-section">
            <Section title="強み" eyebrow="Strength">
              <div className="stack">
                {strengths.map((strength) => (
                  <article className="plain-block" key={strength.title}>
                    <h3>{strength.title}</h3>
                    <p>{strength.body}</p>
                  </article>
                ))}
              </div>
            </Section>

            <Section title="進め方" eyebrow="Work Style">
              <ol className="step-list">
                {workSteps.map((step, index) => (
                  <li key={step.title}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Section>
          </section>

          <Section id="skills" title="スキル一覧" eyebrow="Skills">
            <div className="skill-sheet-grid">
              {skillGroups.map((group) => (
                <section className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <TagList tags={group.skills} />
                </section>
              ))}
            </div>
          </Section>

          <section className="footer-grid" aria-labelledby="profile-title">
            <div>
              <h2 id="profile-title">プロフィール補足</h2>
              <p>
                個人事業主として、AI活用支援・業務改善・PMO/PL支援を行っています。海外担当者との調整経験があり、必要に応じて翻訳・通訳支援ツールも活用します。
              </p>
            </div>
            <div>
              <h2>資格</h2>
              <TagList tags={certifications} />
            </div>
          </section>

          <section id="contact" className="sheet-cta">
            <div>
              <h2>小さな相談から対応可能です</h2>
              <p>AI活用、業務整理、進捗・課題管理、レビュー支援、情報整理など、まずはメールでご相談ください。</p>
            </div>
            <a className="mail-button" href={`mailto:${contact.email}`}>
              <Mail size={18} aria-hidden="true" />
              メールで相談する
            </a>
          </section>
        </section>
      </main>
    </>
  );
}

function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id?: string;
  title: string;
  eyebrow: string;
  children: ReactNode;
}) {
  const titleId = id ? `${id}-title` : undefined;

  return (
    <section id={id} className="sheet-section" aria-labelledby={titleId}>
      <p className="section-kicker">{eyebrow}</p>
      <h2 id={titleId}>{title}</h2>
      {children}
    </section>
  );
}

function InfoRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="info-row">
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

function CommaList({ items }: { items: string[] }) {
  return <p className="comma-list">{items.join(' / ')}</p>;
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
