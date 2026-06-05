export const contact = {
  name: '飯野 海斗',
  brand: 'KiT Works',
  location: '静岡県浜松市',
  email: 'ii.kt@outlook.com',
  availability: '週1〜2日 / フルリモート中心 / 平日夜間・土日相談可',
};

export const heroFacts = [
  {
    label: '経験領域',
    value: 'IT業界 約7年',
    note: '開発、PMO補佐、PL、業務改善、顧客折衝を経験',
  },
  {
    label: '現場改善',
    value: 'AI / Slack / Box / API連携',
    note: '議事録、レビュー、情報確認、資料作成の効率化を支援',
  },
  {
    label: 'PMO / PL',
    value: '5名チーム管理・週次報告',
    note: 'Jira導入、Slack活用、Confluence運用、成果物監査',
  },
];

export const proofHighlights = [
  'PMO補佐 / PL / 業務改善 / 開発支援',
  '生成AI / Slack / Box / API連携による業務効率化支援',
  '5名チームのタスク管理、週次報告、Jira導入経験',
  'DatadogからSplunkへの移行、ログ可視化・アラート設計支援',
  'C/C++・Pythonを用いた開発、車載・組み込み領域の実務経験',
  '顧客折衝、要件調整、仕様策定、設計・実装・テストまでの対応経験',
];

export const featuredCases = [
  {
    number: '01',
    title: 'AI活用による業務効率化支援',
    category: 'AI活用 / 業務改善 / 情報整理',
    challenge:
      '会議、レビュー、情報確認、資料作成、横断情報の確認など、日々の業務に確認・整理コストが発生していた。',
    role: [
      '生成AIを使った資料作成、調査、論点整理',
      'レビュー観点整理、議事録作成支援、ToDo整理',
      'Slack要約、Box連携検索、MCP/API連携の検討・実装',
      'ローカルLLM活用検証',
      'AGENTS.md / Skills 等によるAI活用時の指示設計',
    ],
    approach:
      '単発のAI利用ではなく、既存のSlack、Box、レビュー業務、会議体に合わせて、使い続けられる運用に落とし込むことを重視。',
    outcomes: [
      '情報確認負荷の軽減',
      'レビュー観点整理の効率化',
      '議事録・ToDo整理の効率化',
      '横断情報の確認効率向上',
      'AI活用の再現性・品質安定化に貢献',
    ],
    tools: ['ChatGPT', 'Claude', 'Codex', 'Claude Code', 'MCP', 'API連携', 'Slack', 'Box', 'PlantUML', 'Qwen', 'HuggingFace'],
    assignment:
      'AIを業務フローへ組み込む検討、プロンプト・指示設計、情報整理、レビュー支援、社内ナレッジ検索の小規模検証を任せられます。',
  },
  {
    number: '02',
    title: '大手製造業向け PMO / PL・プロセス改善支援',
    category: 'PMO / PL / プロセス改善',
    challenge:
      '複数の成果物、会議体、進捗・課題情報が分散し、チーム状況やレビュー観点を継続的に把握しづらい状態があった。',
    role: [
      'プロセス適用、成果物監査、品質向上支援',
      '5名チームのタスク管理、進捗確認、週次報告',
      'リーダー会資料作成、会議体の整理',
      'Jira導入、Slack活用、Confluence運用',
      'レビュー観点整理、成果物確認の標準化支援',
    ],
    approach:
      '管理のための管理にしないよう、現場で実際に使うタスク・課題・成果物に紐づけて、Jira、Slack、Confluenceの使い方を整理。',
    outcomes: [
      '進捗・課題の可視化',
      'チーム運営と週次報告の支援',
      '成果物品質の確認支援',
      'プロセス標準化への貢献',
      '複数プロジェクト横断の業務効率化',
    ],
    tools: ['Jira', 'Slack', 'Confluence', 'VSCode', 'PlantUML', '生成AI', 'MCP/API連携'],
    assignment:
      'PMO補佐、PL補佐、チームタスク管理、週次報告、Jira/Confluence運用整理、レビュー観点整備を任せられます。',
  },
  {
    number: '03',
    title: '顧客折衝を含む仕様策定・開発支援',
    category: '要件整理 / 仕様策定 / 開発支援',
    challenge:
      '顧客要望をそのまま実装に移すには曖昧な部分があり、仕様、設計、タスク、テスト観点へ落とし込む必要があった。',
    role: [
      '顧客との仕様策定、要件調整',
      '設計、実装、テスト',
      'C++ / C# 間のデータコンバート処理機能の開発',
      'Redmine等を用いた課題・作業管理',
    ],
    approach:
      '顧客側の要望と実装側の制約を分けて整理し、合意できる仕様、開発タスク、確認観点へ分解。',
    outcomes: [
      '顧客折衝を含む上流から下流までの一貫対応',
      '仕様合意の支援',
      '実装可能な形への要件整理',
      '設計・実装・テストをつなげた開発推進',
    ],
    tools: ['C++', 'C#', 'Redmine', 'Visual Studio', 'BitBucket', 'Slack', 'Teams'],
    assignment:
      '曖昧な要望の整理、仕様策定、開発タスク化、実装・テスト観点整理、顧客と開発側の認識合わせを任せられます。',
  },
  {
    number: '04',
    title: 'Datadog から Splunk へのログ管理基盤移行支援',
    category: 'ログ分析 / 監視基盤 / データ可視化',
    challenge:
      '既存のDatadogクエリや監視内容を理解したうえで、Splunk側で同等の可視化・アラート設計へ移行する必要があった。',
    role: [
      'Datadogクエリ解析',
      'Splunk SPLへの変換',
      'ダッシュボード設計',
      'アラート設計',
      'SPL/DQLを用いた調査',
    ],
    approach:
      '既存クエリの意味と監視目的を確認し、単純な構文変換だけでなく、移行後の運用で確認しやすい形を意識して整理。',
    outcomes: [
      'ログ管理基盤移行の支援',
      '監視・可視化の整備',
      'ダッシュボード・アラート設計支援',
      '調査や確認作業の整理に貢献',
    ],
    tools: ['Splunk', 'Datadog', 'SPL', 'DQL', 'Amazon WorkSpaces'],
    assignment:
      '既存ログクエリの読み解き、Splunk移行、ダッシュボード・アラート設計、ログ調査の整理を任せられます。',
  },
  {
    number: '05',
    title: '車載・組み込み領域でのPL / 開発経験',
    category: 'PL / 車載 / 組み込み開発',
    challenge:
      '車載・組み込み領域では、要件、設計、実装、評価、ツール設定、メンバー進捗をつなげて管理する必要があった。',
    role: [
      'AUTOSAR準拠の画像センサ開発',
      'PLとしてのタスク管理、進捗管理、技術フォロー',
      'DIAG機能の要件定義、設計、実装、評価',
      'C/C++を中心とした車載・組み込み開発',
    ],
    approach:
      '実装と評価の観点だけでなく、メンバーのタスク状況、技術的な詰まり、成果物の確認を並行して整理。',
    outcomes: [
      'PLとして開発推進を担当',
      '要件定義から評価まで一貫対応',
      '車載・組み込み開発経験をPMO/業務改善支援の土台として活用',
      '管理側と実装側の両方の視点を獲得',
    ],
    tools: ['C', 'C++', 'AUTOSAR', 'CANoe', 'DaVinci', 'MATLAB', 'Simulink', 'Redmine', 'git'],
    assignment:
      '組み込み開発の仕様整理、進捗・課題管理、技術フォロー、評価観点整理、開発現場に近いPMO/PL補佐を任せられます。',
  },
];

export const services = [
  {
    title: 'AI活用・情報整理',
    lead: '生成AI、Slack、Box、API連携を使い、会議・レビュー・資料作成・検索の確認コストを下げます。',
    items: ['生成AI活用相談', 'プロンプト・指示設計', '議事録・ToDo整理', 'Slack要約 / Box検索', 'MCP/API連携の小規模検証'],
  },
  {
    title: 'PMO / PL 補佐',
    lead: '開発現場の進捗、課題、成果物、会議体を整理し、チームが次に動きやすい状態を作ります。',
    items: ['タスク管理', '週次報告', 'Jira運用整理', '会議体整理', 'レビュー観点整理'],
  },
  {
    title: '業務改善・プロセス改善',
    lead: '既存ツールと現場の作業に合わせて、情報の置き場、確認手順、成果物確認の流れを整えます。',
    items: ['業務フロー整理', '課題・進捗の可視化', 'Confluence運用', '成果物確認の標準化', '改善案の小さな試作'],
  },
  {
    title: '要件整理・開発支援',
    lead: '顧客要望や現場課題を、仕様、設計、タスク、テスト観点へ落とし込みます。',
    items: ['仕様策定', '設計・実装・テスト', 'Python業務支援ツール', 'C/C++開発経験', 'ログ分析・可視化支援'],
  },
];

export const strengths = [
  {
    title: '実務の中にAIを置ける',
    body: 'AIを単発の相談相手で終わらせず、議事録、レビュー、Slack要約、Box検索、調査、資料作成など、日々の作業に組み込む視点があります。',
  },
  {
    title: '開発と管理の間を整理できる',
    body: '要件整理、仕様策定、設計、実装、テスト、評価、成果物レビューまで経験しているため、管理側と実装側の認識差を整理できます。',
  },
  {
    title: '現場を前に進める段取りができる',
    body: '5名チームのタスク管理、週次報告、Jira導入、Slack活用、Confluence運用、成果物監査など、実務に近い進行支援の経験があります。',
  },
];

export const skillGroups = [
  {
    title: 'AI / Automation',
    skills: ['ChatGPT', 'Claude', 'Copilot', 'Codex', 'Claude Code', 'HuggingFace', 'Qwen', 'MCP', 'API連携', 'Slack連携', 'Box連携', 'PlantUML'],
  },
  {
    title: 'PM / Collaboration',
    skills: ['Jira', 'Confluence', 'Slack', 'Teams', 'Redmine', 'BitBucket', 'Lightning Review'],
  },
  {
    title: 'Programming',
    skills: ['Python', 'C', 'C++', 'C#', 'Java基礎'],
  },
  {
    title: 'Data / Log',
    skills: ['Splunk', 'Datadog', 'SPL', 'DQL'],
  },
  {
    title: 'Embedded / Automotive',
    skills: ['AUTOSAR', 'CANoe', 'DaVinci Configurator', 'DaVinci Developer', 'MATLAB', 'Simulink', 'μITRON', 'TOPPERS/ATK2'],
  },
  {
    title: 'Web / CMS',
    skills: ['WordPress', 'HTML', 'CSS', 'JavaScript', 'SEOメタ情報', 'OGP', 'sitemap.xml', 'robots.txt'],
  },
];

export const workSteps = [
  {
    title: '現状整理',
    body: '業務内容、課題、既存ツール、困っていることを確認します。',
  },
  {
    title: '改善対象を絞る',
    body: 'AI活用、業務整理、PMO補佐、ツール連携のどこから着手するかを決めます。',
  },
  {
    title: '小さく試作',
    body: '議事録、レビュー支援、Slack要約、検索支援など、小さい範囲で検証します。',
  },
  {
    title: '運用に組み込む',
    body: '手順、指示、確認観点を整え、継続利用できる形にします。',
  },
  {
    title: '改善・定着',
    body: '使いながら改善し、再現性と品質を高めます。',
  },
];

export const certifications = ['GUGA Generative AI Passport', 'AWS Partner: Accreditation'];
