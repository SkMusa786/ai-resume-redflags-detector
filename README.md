# AI Resume Red-Flags Detector 🛡️

> **AI-powered resume screening platform that detects privacy risks, biased language, and compliance issues to ensure safer, more ethical hiring practices.**

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![React](https://img.shields.io/badge/React-19.2-blue)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Revenue Model](#revenue-model)
- [Demo](#demo)
- [Architecture](#architecture)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

**AI Resume Red-Flags Detector** is a comprehensive web application designed to help HR teams and students identify problematic content in resumes before they reach the hiring pipeline. Using advanced AI-powered text analysis, the platform detects:

- **Personal Identifiable Information (PII)** - Phone numbers, addresses, dates of birth
- **Biased Language** - Gender, age, race, and other discriminatory terms
- **Exaggerations & Misleading Claims** - Overstated achievements and vague statements
- **Clarity Issues** - Poor formatting, grammar problems, and unclear content

The application serves two distinct user groups:
1. **Recruiters & HR Teams** - Bulk resume processing, risk scoring, compliance management
2. **Students & Job Seekers** - Resume improvement feedback, privacy protection tips

---

## ✨ Features

### For Recruiters
- ✅ **Bulk Resume Upload** - Process multiple resumes simultaneously
- 📊 **Risk Analytics Dashboard** - Real-time compliance metrics and insights
- 🏷️ **Status Management** - Mark candidates as Suitable, Needs Review, or Rejected
- 📝 **Internal Notes** - Add private annotations to candidate profiles
- 🔍 **Advanced Filtering** - Search by name, risk level, status, or upload date
- 📈 **Compliance Reporting** - GDPR, Equal Opportunity, and diversity tracking

### For Students
- 🎓 **Instant Feedback** - Get AI-powered suggestions in seconds
- 📉 **Score Tracking** - Monitor your resume improvement over time
- 💡 **Actionable Suggestions** - Clear explanations with safer alternatives
- 📚 **Learning Resources** - Tips for crafting privacy-safe, professional resumes
- 🔄 **Version History** - Track changes across multiple resume uploads

### Core Capabilities
- 🛡️ **PII Detection** - Automatically identifies and flags sensitive personal data
- ⚖️ **Bias Detection** - Scans for discriminatory or problematic language
- 🎯 **Risk Scoring** - Calculates Low/Medium/High risk levels with detailed breakdowns
- 🔒 **Privacy-First** - All resumes automatically deleted after 24 hours
- 🌐 **GDPR Compliant** - Full transparency with data protection policies
- 🚀 **Real-time Analysis** - Instant processing with no waiting

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript 5.0](https://www.typescriptlang.org/)
- **UI Library**: [React 19.2](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Backend & Infrastructure
- **Runtime**: Next.js API Routes (Server Actions)
- **Deployment**: [Vercel](https://vercel.com/)
- **Analytics**: Vercel Analytics
- **File Handling**: Client-side processing (no server storage)

### Development Tools
- **Package Manager**: npm/pnpm/yarn
- **Linting**: ESLint
- **Type Checking**: TypeScript strict mode
- **Bundler**: Turbopack

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** 18.x or higher ([Download](https://nodejs.org/))
- **npm**, **yarn**, or **pnpm** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-resume-red-flags-detector.git
   cd ai-resume-red-flags-detector
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Optional: Add any API keys for future integrations
   # OPENAI_API_KEY=your_openai_key_here
   # SUPABASE_URL=your_supabase_url
   # SUPABASE_ANON_KEY=your_supabase_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

---

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | OpenAI API key for advanced AI analysis (future) | No |
| `SUPABASE_URL` | Supabase project URL for database (future) | No |
| `SUPABASE_ANON_KEY` | Supabase anonymous key (future) | No |
| `NEXT_PUBLIC_APP_URL` | Public application URL | No |

---

## 📖 Usage

### As a Recruiter

1. **Sign Up** - Create an account with the "Recruiter" role
2. **Upload Resumes** - Use the bulk upload feature to process multiple PDFs
3. **Review Results** - View risk scores and detected issues for each candidate
4. **Manage Status** - Mark candidates as Suitable, Needs Review, or Rejected
5. **Add Notes** - Include internal comments for team collaboration
6. **Export Reports** - Download compliance summaries (coming soon)

### As a Student

1. **Sign Up** - Create an account with the "Student" role
2. **Upload Resume** - Submit your resume for analysis
3. **Review Feedback** - See detected issues with clear explanations
4. **Implement Suggestions** - Update your resume based on recommendations
5. **Track Progress** - Monitor your improvement score over time
6. **Resubmit** - Upload new versions to see your progress

---

## 💰 Revenue Model

### Freemium Model

**Free Tier (Students)**
- 3 resume scans per month
- Basic issue detection
- Standard improvement suggestions
- 7-day history retention

**Premium Tier ($9.99/month for Students)**
- Unlimited resume scans
- Advanced AI analysis
- Priority processing
- Downloadable reports
- 90-day history retention
- Email support

**Business Tier ($49/month for Recruiters)**
- Up to 100 resume scans/month
- Bulk upload (up to 20 files)
- Advanced compliance reporting
- Team collaboration tools
- Priority support
- Custom integrations

**Enterprise Tier (Custom Pricing)**
- Unlimited scans
- White-label solution
- API access
- Dedicated account manager
- Custom compliance rules
- SSO & advanced security
- SLA guarantees

---

## 🎥 Demo

### Screenshots

![Landing Page](./public/screenshots/landing.png)
*Landing page with clear value proposition for both user types*

![Recruiter Dashboard](./public/screenshots/recruiter-dashboard.png)
*Recruiter dashboard with risk analytics and candidate overview*

![Resume Analysis](./public/screenshots/analysis-detail.png)
*Detailed resume analysis with issue breakdown and suggestions*

![Student Feedback](./public/screenshots/student-feedback.png)
*Student dashboard showing improvement goals and progress tracking*

### Demo Video

🎬 [Watch Demo Video](https://drive.google.com/file/d/1NXQDDVuYniGteIDa2cFW4fqmCv3bLOn5/view?usp=drivesdk)

### Live Demo

🌐 [Try Live Demo](https://ai-resume-detector.vercel.app)

**Test Credentials:**
- **Recruiter**: demo-recruiter@example.com / Demo123!
- **Student**: demo-student@example.com / Demo123!

---

## 🏗️ Architecture

### Project Structure

```
ai-resume-red-flags-detector/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── signup/
│   ├── recruiter/
│   │   ├── dashboard/
│   │   ├── upload/
│   │   └── resume/[id]/
│   ├── student/
│   │   ├── dashboard/
│   │   ├── upload/
│   │   └── analysis/[id]/
│   ├── privacy/
│   ├── terms/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── privacy-banner.tsx
│   ├── resume-risk-badge.tsx
│   ├── resume-status-badge.tsx
│   └── analysis-issue-card.tsx
├── lib/
│   ├── utils.ts
│   └── resume-analyzer.ts
├── public/
│   └── screenshots/
├── README.md
└── package.json
```

### Data Flow

1. **Resume Upload** → Client-side file processing
2. **AI Analysis** → Text extraction and pattern matching
3. **Risk Scoring** → Algorithm-based severity calculation
4. **Results Display** → Real-time UI updates
5. **Auto-Deletion** → Client-side data cleanup (24hr simulated)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript strict mode
- Use semantic commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all linting passes

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact & Support

- **Email**: shaikmusa3690@gmail.com
- **Website**: [https://ai-resume-detector.vercel.app](https://ai-resume-detector.vercel.app)
- **GitHub Issues**: [Report a bug](https://github.com/yourusername/ai-resume-red-flags-detector/issues)
- **Documentation**: [View Full Docs](https://docs.resumescanner.ai)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Vercel](https://vercel.com/) - Hosting platform
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide](https://lucide.dev/) - Icon library

---

**Built with ❤️ for safer, more equitable hiring practices**
