import { 
  GraduationCap, 
  School, 
  Briefcase, 
  Code, 
  Trophy, 
  Users, 
  Zap, 
  Music,
  Cpu,
  Plane,
  BookOpen,
  MonitorPlay
} from 'lucide-react';
import { TimelineEvent, Profile, Project } from './types';

export const PROFILE: Profile = {
  name: "渡部 雄仁",
  romaji: "Watanabe Yuto",
  birthDate: "2005.09.28",
  origin: "千葉県",
  education: {
    highSchool: "千葉県立柏南高校",
    university: "芝浦工業大学 工学部 情報通信コース"
  },
  circle: "ShibaLab",
  work: [
    "株式会社ロフト (2024.05 - 2025.09)",
    "株式会社光通信 AIエンジニア インターン (2025.09 - Present)",
    "音楽ライブ案内スタッフ (単発)"
  ],
  hobbies: ["スポーツ観戦 (野球, サッカー, バレー, 駅伝)", "野球 (12年間)"]
};

export const TIMELINE_EVENTS: TimelineEvent[] = [
  { date: "2021.04", icon: School, category: "education", label: "千葉県立柏南高校 入学" },
  { date: "2021.04", icon: Users, category: "other", label: "柏南高校野球部 入部" },
  { date: "2023.07", icon: Trophy, category: "other", label: "柏南高校野球部 引退" },
  { date: "2024.03", icon: GraduationCap, category: "education", label: "千葉県立柏南高校 卒業" },
  { date: "2024.04", icon: School, category: "education", label: "芝浦工業大学工学部情報通信コース 入学" },
  { date: "2024.05", icon: Briefcase, category: "work", label: "株式会社ロフト アルバイト開始" },
  { date: "2025.04", icon: Users, category: "other", label: "サークル「ShibaLab」入部" },
  { date: "2025.04", icon: Zap, category: "education", label: "基本情報技術者試験 合格" },
  { date: "2025.09", icon: Briefcase, category: "work", label: "株式会社ロフト 退職" },
  { date: "2025.09", icon: Cpu, category: "work", label: "光通信 AIエンジニア インターン開始" },
];

export const HIGHSCHOOL_CONTENT = {
  title: "高校までの取り組み",
  description: "小学1年生から高校卒業まで、12年間野球に打ち込みました。",
  details: [
    "怪我などの苦しい時期も経験し、継続の重要性を学習",
    "チームで目標を目指す過程での葛藤と達成感",
    "組織の中で自分がどう動くべきかを学ぶ基盤となった"
  ]
};

export const UNIVERSITY_CONTENT = {
  title: "大学での取り組み",
  description: "学業において常に高い目標を持ち、結果を出し続けています。",
  stats: [
    { label: "2年次前期 GPA", value: "4.0" },
    { label: "通算 GPA", value: "3.9" },
    { label: "学科順位", value: "6位" },
  ],
  details: "普段からの学習習慣を徹底し、学科の勉強と並行して資格取得にも励んでいます。2025年4月には基本情報技術者試験に合格しました。"
};

export const CIRCLE_PROJECTS: Project[] = [
  {
    title: "コインプッシャー制作",
    period: "2025 GW",
    description: "Unityを活用した勉強会にて、物理演算を用いたコインプッシャーゲームを作成。",
    tags: ["Unity", "C#", "Game Dev"],
    icon: MonitorPlay
  },
  {
    title: "夜空のキャンバス",
    period: "2025 Oct",
    description: "学園祭にてチーム展示。来場者がタブレットで描いた星座を天井にプロジェクションマッピングで投影するインタラクティブアート。",
    tags: ["Projection Mapping", "Interactive", "Team Work"],
    icon: Music
  },
  {
    title: "個展制作 (予定)",
    period: "2026 Mar",
    description: "独自の世界観を表現する個展に向けて現在鋭意制作中。",
    tags: ["Exhibition", "Creative"],
    icon: Zap
  }
];

export const WORK_PROJECTS: Project[] = [
  {
    title: "株式会社ロフト",
    period: "2024.05 - 2025.09",
    description: "雑貨の品出し・接客を担当。アットホームな職場で働きながら、海外のお客様に対して積極的に英語で接客を行いました。",
    tags: ["接客", "英語コミュニケーション"],
    icon: Briefcase
  },
  {
    title: "AIエンジニア インターン (光通信)",
    period: "2025.09 - Present",
    description: "AIを用いた業務効率化Webアプリを開発中。高齢の社員が多い環境に向け、音声入力から要約までを自動化する議事録作成システムを構築。",
    tags: ["AI", "Web Dev", "Automation", "Speech-to-Text"],
    icon: Cpu
  }
];

export const GOALS = [
  {
    title: "応用情報技術者試験 合格",
    date: "2026 Spring",
    icon: BookOpen,
    description: "更なる技術力向上のため、上位資格への挑戦。"
  },
  {
    title: "海外研究留学",
    date: "Future",
    icon: Plane,
    description: "研究室の制度を利用し、海外大学へ1年間の交換留学。独自の視点を活かし、現地の課題解決に取り組むことを目指す。"
  }
];