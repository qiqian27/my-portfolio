# Job-Focused Portfolio Revamp Design

## Goal

Revamp the eportfolio into a polished, recruiter-ready website for new job applications. The site should position Chai Qi Qian as a Software Engineer with full stack fintech experience, strong delivery discipline, and a practical engineering mindset.

## Audience

The primary audience is recruiters and hiring managers evaluating Chai Qi Qian for software engineering or full stack developer roles. The portfolio should be fast to scan, professional, credible, and more meaningful than the current personal-photo-heavy version.

## Positioning

Use **Software Engineer** as the main headline and **Full Stack Developer** as the supporting identity.

Core message:

Chai Qi Qian is a Software Engineer and Full Stack Developer experienced in building and maintaining fintech applications with Spring Boot, Angular, React Native, REST APIs, MySQL, Azure, Jenkins, Gradle, and Agile delivery practices. Her Data Science and AI background supports analytical problem-solving, maintainable code, and high-quality product delivery.

The portfolio should also mention AI-assisted engineering practices carefully: using AI as a support tool for code quality, debugging, analysis, and delivery efficiency, while keeping the developer's judgment and accountability central.

## Content Scope

Remove the **Some Meaningful Photos In My Life** section completely.

Current professional work at iFast Capital should be high-level only. Do not reveal internal product details, private screenshots, code, business flows, or sensitive production information.

The site may describe:

- Full stack fintech development experience.
- Spring Boot, Angular, React Native, REST APIs, MySQL, Azure, Jenkins, Gradle, Lombok, and Agile workflows.
- CI/CD and release quality improvements.
- Responsive, user-focused interface delivery.
- Project coordination and team support.
- First-level support for live issues.
- Debugging production or live issues and proposing solutions to the team.
- AI-assisted code review, debugging, documentation, and quality checks.

## Homepage Structure

### 1. Navigation

Use a clean sticky navigation with compact links:

- About
- Experience
- Projects
- Skills
- Education
- Contact
- Resume

Remove the old Life navigation item.

### 2. Hero

The hero should create a strong first impression:

- Name: Chai Qi Qian.
- Title: Software Engineer.
- Supporting line: Full Stack Developer building reliable fintech products across frontend, backend, mobile, and cloud-supported delivery.
- Short value statement focused on maintainable systems, delivery quality, and analytical problem-solving.
- Primary CTA: Contact Me.
- Secondary CTA: View Resume.
- Include LinkedIn and relevant social/profile links that already exist in the portfolio.

Use an existing profile image only if it works as a refined supporting portrait in the hero. If the available image feels too casual or visually distracting, use a text-led hero with a polished summary panel instead. The image should not dominate the page.

### 3. Impact Snapshot

Add a compact proof section with highlights such as:

- Full stack fintech developer.
- Spring Boot, Angular, React Native, REST APIs, MySQL, Azure.
- CI/CD experience with Jenkins and Gradle.
- First Class Honours and Data Science/AI background.
- Live-issue debugging and first-level support.
- AI-assisted engineering for code quality and delivery confidence.

### 4. Experience

Create a professional experience section:

Current role:

- Full Stack Developer, iFast Capital Sdn. Bhd.
- Jun 2024 to Present.
- High-level fintech application development.
- Stack: Spring Boot, Angular, React Native, Jenkins, Gradle, Lombok, REST APIs, MySQL, Azure.
- Responsibilities: build and maintain reliable systems, contribute to UI and backend features, support CI/CD, debug live issues, provide first-level support, coordinate with team members, and propose practical solutions.

Internship:

- Full Stack Developer Intern, Salient Information Sdn. Bhd.
- Aug 2023 to Dec 2023.
- Next.js, Node.js, Figma, Firebase, Meta Spark Studio.
- Brand microsites, responsive UI/UX, accessibility, performance, and cross-device delivery.

### 5. University & Hackathon Projects

Frame Odyssey, HILTI, and RHB as university and hackathon projects, not current professional projects.

Project cards:

- Odyssey Hackfest 2022, University Malaya: mental health mobile app, Flutter and Firebase, Special Award.
- HILTI IT Competition: AR/VR training and product experience app, Flutter, Blender, Unity, First Runner-Up.
- RHB ASEAN Hackathon: financial literacy MVP for young adults, Flutter prototype, participation.

Each card should include the problem, role, stack, outcome, and a link to the project detail page or repository where appropriate.

### 6. Technical Stack

Replace percentage bars with grouped skill categories, because percentages can look less professional in a hiring portfolio.

Suggested groups:

- Frontend: Angular, React, Next.js, TypeScript, JavaScript, HTML, Tailwind CSS.
- Backend: Java, Spring Boot, Node.js, REST APIs, MySQL.
- Mobile: React Native, Flutter.
- DevOps and Cloud: Jenkins, Gradle, Azure, GitHub, GitLab.
- Data and AI: Data Science foundation, machine learning, natural language processing, AI-assisted engineering workflows.
- Product and Delivery: Agile, project coordination, live-issue debugging, first-level support, solution proposal, time management.

### 7. Education & Awards

Keep this concise but meaningful:

- Bachelor of Computer Science, Taylor's University, CGPA 3.81/4, First Class Honours, Dean's List every semester.
- Foundation in Computing, Taylor's College, CGPA 3.97/4, Top Achiever, Dean's List every semester.
- Include key hackathon awards in the same proof area or near the projects section.

### 8. Contact

End with a confident call to action:

- Email.
- LinkedIn.
- Resume.
- GitHub project links that already exist in the portfolio. Do not invent a personal GitHub profile link if it is not present.

## Visual Direction

Use the approved **Recruiter-Ready Software Engineer** direction.

The design should feel:

- Professional.
- Modern.
- Impressive but not loud.
- Clean and fast to scan.
- Meaningful and job-focused.

Suggested visual treatment:

- Light off-white or very pale neutral background.
- Dark ink text for strong readability.
- Crisp blue as the primary accent.
- A restrained secondary accent such as teal or amber.
- Strong hero typography.
- Clean cards with subtle borders and small shadows.
- Consistent section spacing.
- No decorative photo gallery.
- No excessive hover scaling or gimmicky animation.
- Mobile-first responsive layout with intentional spacing and no text overlap.

## Technical Direction

Keep the existing Next.js pages router and Tailwind CSS setup.

Improve `pages/index.tsx` by organizing the homepage content into local data arrays and reusable section patterns inside the file or small nearby components if needed. Avoid adding a heavy UI library unless it provides clear value.

Use existing `react-icons` where helpful. Additional libraries should only be installed if they meaningfully improve polish without increasing complexity.

Update metadata:

- Title should identify Chai Qi Qian as a Software Engineer or Full Stack Developer.
- Description should mention full stack fintech development and modern engineering practices.

The old project detail pages can remain for now, but homepage links and labels should make clear that these are university and hackathon projects.

## Success Criteria

- The homepage feels professional enough for job applications.
- The first viewport clearly communicates Software Engineer and Full Stack Developer.
- The iFast experience is current, credible, and privacy-safe.
- The university projects are not misrepresented as professional client work.
- The life photo section is removed.
- Skill presentation is more mature than percentage bars.
- The page is responsive on desktop and mobile.
- The app builds or lints successfully after implementation.
