export const site = {
  name: "Qwise",
  domain: "qwise.app",
  url: "https://qwise.app",
  tagline: "Simple digital queues for businesses and events.",
  description:
    "Qwise turns any waiting line into a digital queue. Customers scan a QR code, leave the line, and get notified the moment it's their turn. Built for shops, clinics, and events.",
};

export const nav = [
  { label: "Features", href: "/#features" },
  { label: "Use cases", href: "/#use-cases" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
];

export const features = [
  {
    icon: "QrCode",
    title: "QR join, zero app",
    description:
      "Customers scan a code, pick a service, and join — no download, no account required on their end.",
  },
  {
    icon: "RefreshCw",
    title: "Live position & wait time",
    description:
      "Everyone sees exactly where they stand and how long it'll be, updated in real time.",
  },
  {
    icon: "BellRing",
    title: "Smart notifications",
    description:
      "Email and browser alerts as standard, SMS when you need it — so people can leave and come back.",
  },
  {
    icon: "LayoutDashboard",
    title: "Staff dashboard",
    description:
      "Call next, start service, mark no-shows — a clear board built for the counter, not a spreadsheet.",
  },
  {
    icon: "Sparkles",
    title: "Event mode",
    description:
      "Run five queues at once — registration, booths, demos, food — across a single exhibition or pop-up.",
  },
  {
    icon: "BarChart3",
    title: "Wait-time analytics",
    description:
      "Served, average wait, no-shows, peak hours — the numbers that tell you when to add staff.",
  },
];

export const howItWorks = [
  {
    step: "1",
    title: "They scan and join",
    description:
      "A customer scans your QR code, picks a service, and gets a ticket number and live wait estimate.",
  },
  {
    step: "2",
    title: "They go do something else",
    description:
      "No standing around. They get a notification when their turn is close, so they can browse, sit, or step out.",
  },
  {
    step: "3",
    title: "You call them up",
    description:
      "Your staff dashboard shows exactly who's next — one tap to call, start, and complete service.",
  },
];

export type UseCase = {
  // Identity / routing
  slug: string;
  category: "business" | "event";
  // SEO metadata
  seoTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  // On-page content
  title: string;
  shortTitle: string;
  summary: string;
  intro: string;
  heroStat: { value: string; label: string };
  problem: { heading: string; body: string };
  whyItMatters: { heading: string; body: string[] };
  solutionPoints: { heading: string; items: string[] };
  benefits: { heading: string; items: string[] };
  howItWorks: { heading: string; steps: { title: string; description: string }[] };
  bestFor: string[];
  faqs: { question: string; answer: string }[];
  relatedPlan: string;
  relatedPlanHref: string;
};

export const useCases: UseCase[] = [
  {
    slug: "digital-queue-for-barbershops",
    category: "business",
    seoTitle: "Digital queue for barbershops — replace the waiting room",
    metaDescription:
      "Replace the waiting room with a digital queue for your barbershop or salon. Customers scan a QR code, leave the line, and get a text when their chair is ready. Free to try.",
    primaryKeyword: "digital queue for barbershops",
    title: "Digital queue for barbershops",
    shortTitle: "Barbershops & salons",
    summary:
      "Turn the line outside your shop into a queue in your customers' pockets. They scan, leave, and come back when their chair is ready.",
    intro:
      "Saturday morning at a busy barbershop used to mean a line out the door, walk-ins giving up, and chairs sitting empty between cuts. A digital queue flips the model: customers scan a QR code at the window, pick a service, and walk away with a live position and an honest wait estimate on their phone. They grab a coffee, run an errand, or sit in their car — and you text them when their barber is five minutes from ready. The result is a calmer shop floor, fewer no-shows, and a steady stream of customers who actually waited instead of bouncing.",
    heroStat: { value: "−50%", label: "walk-in no-shows in the first month" },
    problem: {
      heading: "The problem with paper sign-in sheets",
      body:
        "A paper list gets the names in order, but it doesn't stop the line from forming. People still stand shoulder-to-shoulder watching the door, still leave when the wait feels longer than the haircut, and still ask the front desk \"how much longer?\" every few minutes. By the time your busiest walk-in window is over, you've lost an estimated four to six customers per Saturday to the line itself — and your team has spent more time managing the line than running it.",
    },
    whyItMatters: {
      heading: "Why barbershops specifically need a virtual queue",
      body: [
        "Haircut demand is time-sensitive and bursty. Saturday morning between 10 and 1 is where most of your weekly revenue lives, and that window is exactly when a physical line is most damaging — the people in it are the people who could be in your chair in twenty minutes.",
        "Walk-in customers don't book ahead, so they have no commitment to stay. The moment the wait looks long, they cross the street. A virtual queue keeps them committed because they know the queue is real, their position is live, and they'll be notified.",
        "Your barbers are paid to cut, not to manage a crowd. Every minute spent answering \"how much longer?\" is a minute not generating revenue. A digital queue puts that information on the customer's phone so your team can stay on the floor.",
      ],
    },
    solutionPoints: {
      heading: "How Qwise runs your barbershop queue",
      items: [
        "Customers scan a QR code taped to your window or counter and pick their service — no app, no account, no friction.",
        "Live position and wait estimate update as your barbers complete each cut.",
        "SMS or browser notification goes out when their chair is close, so they can finish their coffee and head back.",
        "Staff dashboard shows the full queue at a glance with one-tap \"call next\" — built for a barber standing at the door, not a spreadsheet.",
        "Per-service wait estimates handle walk-ins, appointments, and add-ons like beard trims or hot towel shaves.",
        "Works on any phone, in any browser. Your oldest customer needs a phone number, not a download.",
      ],
    },
    benefits: {
      heading: "What changes in your shop",
      items: [
        "Walk-in no-shows drop by roughly half within the first month.",
        "The Saturday line stops forming outside your door — customers wait wherever they want.",
        "Your barbers stop fielding \"how much longer?\" and stay focused on the chair.",
        "Saturday revenue goes up because the same number of chairs sees more completed cuts.",
        "Your front desk gets back the time it used to spend managing the list.",
        "You get daily, weekly, and monthly wait-time data so you can staff smarter.",
      ],
    },
    howItWorks: {
      heading: "Set up in under ten minutes",
      steps: [
        {
          title: "Print and tape your QR code",
          description:
            "We generate a QR code that points to your shop's queue. Print it on whatever you have — sticker paper, a window cling, a small tabletop sign — and put it where walk-ins currently look for a sign-in sheet.",
        },
        {
          title: "Set your services and chair count",
          description:
            "Add each barber, each service, and how long each one typically takes. The queue uses that to estimate wait times accurately from the first customer.",
        },
        {
          title: "Run your queue from the staff dashboard",
          description:
            "Open the dashboard on a tablet at the front desk or each barber's phone. Call next, start service, mark no-shows — one tap each. Customers get their updates automatically.",
        },
      ],
    },
    bestFor: [
      "Barbershops",
      "Hair salons",
      "Beauty salons",
      "Nail salons",
      "Pet groomers",
      "Tattoo studios",
    ],
    faqs: [
      {
        question: "Do my customers need to download an app?",
        answer:
          "No. They scan your QR code or open a link in their phone's browser, pick a service, and join the queue. Nothing to install on either side — the queue lives in a regular browser tab.",
      },
      {
        question: "How accurate is the wait-time estimate?",
        answer:
          "Estimates are based on the average duration of the service they picked, the queue ahead of them, and your real service times from the last 30 days. After your first week, estimates are typically within 5 minutes of actual.",
      },
      {
        question: "What happens if a customer walks in without scanning first?",
        answer:
          "Your staff can add them manually from the dashboard in one tap — they get a position at the end of the line and the standard SMS notification. No special handling required.",
      },
      {
        question: "Can I run more than one barber's queue at the same time?",
        answer:
          "Yes. Set up one queue per barber (or per station) and the dashboard shows all of them side by side. Customers pick their preferred barber when they join.",
      },
      {
        question: "How much does it cost?",
        answer:
          "The Free plan covers one location and one queue with 100 entries a month — enough to try it. The Starter plan at $15/month covers a single shop with unlimited queues, 1,000 entries a month, custom branding, and 30 days of analytics.",
      },
    ],
    relatedPlan: "Starter",
    relatedPlanHref: "/pricing",
  },
  {
    slug: "digital-queue-for-clinics",
    category: "business",
    seoTitle: "Digital queue for clinics — replace the waiting room",
    metaDescription:
      "A digital queue for clinics and dental practices. Patients wait in their car instead of a crowded room, and get a text when the doctor is ready. HIPAA-conscious design, no app required.",
    primaryKeyword: "digital queue for clinics",
    title: "Digital queue for clinics",
    shortTitle: "Clinics & dental",
    summary:
      "Let patients wait where they're comfortable — in their car, at home, or at the pharmacy — and text them when the doctor is ready.",
    intro:
      "Walk-in clinics and dental practices run on a tension between access and comfort: you want patients to be able to walk in, but a packed waiting room is a poor experience for the people already in it and a worse one for the immunocompromised patient trying to check in. A digital queue lets you keep the open-door policy without the crowded room. Patients check in at the front desk as usual, but instead of taking a seat, they get a text when the provider is ready. The clinical workflow stays exactly the same — only where the waiting happens changes.",
    heroStat: { value: "40 min", label: "average wait, spent where patients choose" },
    problem: {
      heading: "The waiting room problem",
      body:
        "Most clinic wait times are 20 to 45 minutes, and most of that time is spent sitting in a room full of other sick people. That's bad for patient experience, worse for infection control, and a real barrier for patients who can't comfortably sit that long — parents with kids, elderly patients, anyone with mobility issues, anyone who needs to keep working during the day. Yet the underlying workflow doesn't change: the doctor is still seeing one patient at a time in the order they arrived.",
    },
    whyItMatters: {
      heading: "Why clinics need a virtual queue specifically",
      body: [
        "Healthcare waits are emotionally charged. A 40-minute wait in a crowded room feels very different from a 40-minute wait at home, even though the clock is the same. Patient satisfaction scores consistently reflect that.",
        "Infection control is a real concern, especially during flu season or for immunocompromised patients. Reducing the number of people sharing a small enclosed space isn't a nice-to-have.",
        "Patients who can wait off-site are more likely to keep their appointment. A no-show costs the clinic time and revenue, and a clear text notification reduces it.",
      ],
    },
    solutionPoints: {
      heading: "How Qwise works for clinics",
      items: [
        "Front desk checks patients in as usual — name, reason for visit, any intake forms.",
        "Patient gets a text with their queue position and current estimated wait, and is free to leave the waiting room.",
        "Staff dashboard shows the day's queue by provider — physician, nurse practitioner, dental hygienist — so each provider works their own list.",
        "A second text goes out when the provider is five minutes from ready, so the patient has time to return and check in.",
        "No-shows are tracked and surfaced automatically, so the front desk knows who to call before moving on.",
        "Works alongside your existing scheduling system — Qwise handles walk-ins, scheduled appointments, or both.",
      ],
    },
    benefits: {
      heading: "What changes for your clinic",
      items: [
        "A visibly emptier waiting room — even at peak hours.",
        "Higher patient satisfaction scores, especially for walk-in and same-day visits.",
        "Fewer no-shows because patients stay committed when they can wait where they want.",
        "Front desk spends less time fielding \"how much longer?\" and managing the room.",
        "Analytics show exactly which time blocks and providers run long, so you can adjust scheduling.",
        "Better infection control without reducing access.",
      ],
    },
    howItWorks: {
      heading: "Set up alongside your existing workflow",
      steps: [
        {
          title: "Configure your providers and visit types",
          description:
            "Add each provider and the typical duration of each visit type (consult, follow-up, vaccine, urgent care). The queue uses this to estimate wait times per provider.",
        },
        {
          title: "Check patients in at the front desk",
          description:
            "Existing intake doesn't change — front desk checks the patient in as usual and the patient joins the queue. They get a text immediately with their position and estimate.",
        },
        {
          title: "Providers work their queue from a tablet or phone",
          description:
            "Each provider sees their own list. One tap to call next, mark started, mark complete. Patients get the close-in text automatically when they're two positions away.",
        },
      ],
    },
    bestFor: [
      "Walk-in clinics",
      "Family practices",
      "Dental offices",
      "Urgent care",
      "Veterinary clinics",
      "Specialty clinics",
    ],
    faqs: [
      {
        question: "Is Qwise HIPAA-compliant?",
        answer:
          "Qwise is built on HIPAA-eligible infrastructure and signs Business Associate Agreements with covered entities. The queue never stores clinical information — only the patient's name and phone number, which are purged after the visit. We can walk through the specifics during onboarding.",
      },
      {
        question: "Can patients opt out of text notifications?",
        answer:
          "Yes. Patients can choose email or browser notifications instead, or no notifications at all if they prefer to wait on-site. The queue still tracks their position — only the delivery channel changes.",
      },
      {
        question: "How do you handle privacy in the waiting area?",
        answer:
          "The dashboard shows queue position by name, but the patient's reason for visit is only visible to staff. Public-facing screens (if you display one) only show ticket numbers, never names or visit reasons.",
      },
      {
        question: "Can we use Qwise alongside our scheduling system?",
        answer:
          "Yes. Qwise handles walk-ins and same-day visits; your existing system continues to handle appointments. Many clinics use both — booked appointments on the calendar, walk-ins on Qwise — with the same staff dashboard showing both queues.",
      },
      {
        question: "What does it cost?",
        answer:
          "Starter ($15/month) covers a single clinic with unlimited queues and 1,000 entries per month. Growth ($29/month) covers up to 5 locations — useful for clinic groups — with pooled usage and full analytics.",
      },
    ],
    relatedPlan: "Starter",
    relatedPlanHref: "/pricing",
  },
  {
    slug: "queue-management-for-multi-location-businesses",
    category: "business",
    seoTitle: "Queue management for multi-location businesses",
    metaDescription:
      "Run queues across every location from one account. Compare wait times, no-shows, and throughput across all sites. One plan covers up to 5 locations with shared usage.",
    primaryKeyword: "queue management for multi-location businesses",
    title: "Queue management for multi-location businesses",
    shortTitle: "Multi-location businesses",
    summary:
      "Manage every location's queue from one account. See wait times, no-shows, and throughput across your whole network, not just the one shop you're standing in.",
    intro:
      "Running separate tools — or worse, separate spreadsheets — at every location makes it impossible to answer the questions that matter: which location is actually underperforming? Where are we losing customers? Is the new hire in location 3 cutting as efficiently as the team in location 1? Multi-location queue management puts every queue on one dashboard, so you can compare apples to apples and act on real numbers instead of vibes from the field.",
    heroStat: { value: "5", label: "locations on one plan, shared usage" },
    problem: {
      heading: "The spreadsheet problem at scale",
      body:
        "Each location is running its own system. Maybe it's a paper list at one site, a different SaaS tool at another, and a clipboard-and-radio at a third. Head office has no real-time view, and by the time the monthly reports come in, the moment to act on them has passed. Worse, customers experience inconsistent service — a 10-minute wait at one location and a 45-minute wait at another, with no way to know which is the outlier until someone complains.",
    },
    whyItMatters: {
      heading: "Why multi-location operations need centralized queueing",
      body: [
        "Consistency is a brand promise. If location A serves customers in 10 minutes and location B in 45, your customers notice — and your Google reviews show it.",
        "Operational visibility drives staffing decisions. You can't add a shift where it's needed if you can't see where the bottleneck is.",
        "Head office overhead stays manageable only if reporting rolls up automatically. Manually compiling weekly spreadsheets from five locations doesn't scale past three sites.",
      ],
    },
    solutionPoints: {
      heading: "How Qwise handles multi-location queue management",
      items: [
        "One account, up to 5 locations, with pooled monthly usage — no per-location license gymnastics.",
        "A master dashboard that shows every location's live queue, wait time, and current staffing status.",
        "Per-location staff roles so each site only sees and manages its own queue, while head office sees all.",
        "Side-by-side analytics: average wait, no-show rate, peak hours, throughput per provider — comparable across locations.",
        "Occasional in-store events included — each location can run up to 2 event-queues per month at no extra cost.",
        "CSV and API export so the data flows into your existing BI tools and weekly ops reviews.",
      ],
    },
    benefits: {
      heading: "What you get from a single source of truth",
      items: [
        "Real-time visibility into wait times at every location, not just the one you're standing in.",
        "Comparable analytics so you can spot the underperforming location and the practices that work.",
        "Operational consistency — same queue UX for customers at every site.",
        "Reduced ops overhead — no monthly spreadsheet collection from five managers.",
        "Faster response to issues — see the spike before the customer complaint hits Google.",
        "Staff scheduling informed by real demand patterns, not instinct.",
      ],
    },
    howItWorks: {
      heading: "Roll it out across your network",
      steps: [
        {
          title: "Set up your locations and admin roles",
          description:
            "Create a location for each site, assign a location manager, and decide which staff at HQ get the master dashboard view. Roles and permissions are configurable per user.",
        },
        {
          title: "Configure each location's services and providers",
          description:
            "Each location sets its own service menu and provider list. Settings can be templated across locations with overrides for the things that genuinely differ.",
        },
        {
          title: "Compare and act on the data",
          description:
            "Open the master dashboard to see every location at a glance. Drill into any one to see its live queue or its 30-day analytics. Export to CSV for the weekly ops review.",
        },
      ],
    },
    bestFor: [
      "Auto service chains",
      "Multi-branch clinics",
      "Retail chains",
      "Franchise operators",
      "Restaurant groups with walk-in service",
      "Spa and wellness chains",
    ],
    faqs: [
      {
        question: "How many locations can I manage on one account?",
        answer:
          "The Growth plan covers up to 5 locations under one account, with pooled monthly usage. If you need more, we can talk — multi-region rollouts are a common request and we handle them with custom pricing.",
      },
      {
        question: "Can each location have its own branding?",
        answer:
          "Yes. Each location gets its own QR code, its own branded queue page, and its own staff dashboard URL. Head office sees a consistent aggregated view; customers see their local shop.",
      },
      {
        question: "Can staff at one location see another location's queue?",
        answer:
          "No, unless you give them permission. Default roles are scoped to a single location. Head office and ops roles can be granted cross-location access.",
      },
      {
        question: "How does billing work across multiple locations?",
        answer:
          "One invoice for the whole account, against a single monthly usage pool. No per-location billing headaches. Usage from any location draws from the same 5,000-entry pool.",
      },
      {
        question: "Can I run a one-off event at a location?",
        answer:
          "Yes — every Growth account includes 2 event-queues per month at no extra cost. That's enough for most in-store events and pop-ups. If you need more, add a one-time Event Pass on top.",
      },
    ],
    relatedPlan: "Growth",
    relatedPlanHref: "/pricing",
  },
  {
    slug: "queue-management-for-trade-shows",
    category: "event",
    seoTitle: "Queue management for trade shows and exhibitions",
    metaDescription:
      "Run every booth's queue from one organizer dashboard. See bottlenecks in real time, white-label your event, and get a full post-show report. Up to 10,000 joins per event.",
    primaryKeyword: "queue management for trade shows",
    title: "Queue management for trade shows",
    shortTitle: "Trade shows & expos",
    summary:
      "Run registration, demo booths, and consultations as separate live queues across one exhibition floor, all visible from a single organizer dashboard.",
    intro:
      "Trade show floors are chaotic in a way that's hard to describe until you've managed one. Long lines at the popular booth push attendees toward the competition. Registration backs up at exactly the wrong moment. The exhibitor two aisles over has no idea they're a bottleneck until the complaints start. Queue management for trade shows turns that chaos into a live dashboard — every queue visible, every wait time measured, every bottleneck visible the moment it forms, not three days later in a complaint email.",
    heroStat: { value: "10,000", label: "queue joins per event, unlimited queues" },
    problem: {
      heading: "What goes wrong on a busy show floor",
      body:
        "Popular booths create lines that block aisles. Attendees who can't get to the demo leave for a competitor's stand. Registration lines at the door make the show look understaffed before it even starts. Exhibitors don't know their own wait times. Organizers don't know which booth is a bottleneck until after the show. And the post-show report — if it exists at all — is a survey, not a measurement.",
    },
    whyItMatters: {
      heading: "Why queue management is core to a trade show's success",
      body: [
        "Long lines cost exhibitors leads. Every minute an attendee waits is a minute they're not talking to a competitor.",
        "Organizers need live data, not post-show surveys. Real-time visibility lets you rebalance staff, swap demo formats, or open a backup station before the line becomes a problem.",
        "Sponsors and exhibitors expect reporting. A booth-by-booth breakdown of wait times and drop-off is the kind of data that justifies next year's contract.",
      ],
    },
    solutionPoints: {
      heading: "How Qwise runs your trade show",
      items: [
        "Unlimited queues per event — registration, each demo booth, consultation rooms, food service, anything with a line.",
        "One organizer dashboard showing every queue's live status, with the slowest queues flagged automatically.",
        "White-label pages so attendees see your event's brand, not ours. No \"powered by\" footer.",
        "SMS, email, and browser push notifications so attendees can leave a booth's line and come back when it's their turn.",
        "Booth-level reporting: wait times, drop-off rate, peak hours per booth, total attendees served.",
        "Exhibitor self-service: each booth can manage its own queue and see its own data without seeing the rest of the show.",
      ],
    },
    benefits: {
      heading: "What your show gets out of live queue data",
      items: [
        "Attendees stop abandoning the popular booth because they know the line is real and moving.",
        "Organizers see bottlenecks the moment they form and can rebalance staff or change the demo format.",
        "Exhibitors get per-booth data so they can prove ROI and improve for next year.",
        "Registration stops being the bottleneck because you can staff it from the dashboard's live view.",
        "Post-show reports include hard numbers, not survey estimates.",
        "Sponsors and exhibitors renew because the event clearly runs better than the previous one.",
      ],
    },
    howItWorks: {
      heading: "Set up before doors open, run from a tablet on the floor",
      steps: [
        {
          title: "Build your queue list in the organizer dashboard",
          description:
            "Create one queue per booth, per registration desk, per demo room. Set the expected service time for each. White-label the join page with your event's logo and colors.",
        },
        {
          title: "Train exhibitors and station staff",
          description:
            "Each booth manager gets a tablet or phone and access to their queue. Five-minute training, no special hardware required. The organizer dashboard is on a separate laptop at the show office.",
        },
        {
          title: "Run the show, then read the report",
          description:
            "Watch every queue from the organizer dashboard during the show. After the show, get a full report — attendance, wait times, drop-off rate per booth — exported as PDF or CSV for your exhibitors.",
        },
      ],
    },
    bestFor: [
      "Exhibition organizers",
      "Trade show booths",
      "Conference registration",
      "Product launches",
      "Industry expos",
      "B2B demo days",
    ],
    faqs: [
      {
        question: "How many attendees can Qwise handle at one event?",
        answer:
          "The Large Event Pass covers up to 10,000 queue joins over up to 7 days, with unlimited queues. For larger shows we offer a Custom plan with dedicated onboarding and capacity guarantees.",
      },
      {
        question: "Does Qwise work at venues with poor WiFi?",
        answer:
          "Yes. The customer-facing queue pages work on any phone's cellular connection, not venue WiFi. Staff dashboards work offline and sync when reconnected. SMS notifications go out regardless of WiFi quality.",
      },
      {
        question: "Can each exhibitor see only their own queue?",
        answer:
          "Yes. Exhibitor accounts are scoped to their booth's queue. The organizer sees all queues; exhibitors see theirs. Permissions are configurable per booth.",
      },
      {
        question: "Can attendees queue for multiple booths at once?",
        answer:
          "Yes. An attendee can join the registration queue, then a demo booth queue, then a consultation queue — all from the same browser session. They'll get a separate notification when each is close.",
      },
      {
        question: "What's included in the post-show report?",
        answer:
          "Per-booth wait times (average, peak, distribution), drop-off rate, total attendees served, peak hours, and a comparison against your previous show if you have one. PDF and CSV formats included.",
      },
    ],
    relatedPlan: "Large Event Pass",
    relatedPlanHref: "/pricing",
  },
  {
    slug: "virtual-queue-for-job-fairs",
    category: "event",
    seoTitle: "Virtual queue for job fairs — no apps, no hallway lines",
    metaDescription:
      "Run a virtual queue at your job fair. Candidates queue for employer booths from their phone and get a text when each is ready. No app to install. SMS works on any network.",
    primaryKeyword: "virtual queue for job fairs",
    title: "Virtual queue for job fairs",
    shortTitle: "Job fairs & career events",
    summary:
      "Let candidates queue for employer booths from their phone instead of standing in a hallway line for hours. They can attend sessions, grab coffee, or talk to other employers while they wait.",
    intro:
      "Job fairs fail when the most motivated candidates give up. A candidate walks in, sees a 200-person line for the booth they came for, and makes a calculation: is this worth two hours of my life? Often the answer is no — and the employer loses the candidate they most wanted to talk to. A virtual queue changes that math. Candidates join every queue they're interested in from their phone, walk the floor while they wait, and get a text when each booth is close. The employer sees the same candidates they would have anyway, just without the hallway bottleneck and the candidate drop-off.",
    heroStat: { value: "0", label: "apps candidates need to install" },
    problem: {
      heading: "Why physical lines kill job fairs",
      body:
        "A job fair line is a hundred people standing in a hallway, mostly on their phones, unable to leave because they might miss their turn. They can't attend sessions, can't talk to other employers, can't even step out for a coffee without losing their place. After 30 minutes, the candidates in the back of the line start to leave — and they're often the candidates the employers most wanted to meet, because they came prepared to wait.",
    },
    whyItMatters: {
      heading: "Why virtual queuing changes the math for job fairs",
      body: [
        "Candidates can use the wait time productively — attending sessions, talking to other employers, researching the next booth. The fair becomes a richer experience for them, and they stay longer.",
        "Employers see more candidates because no one is leaving the line. The same physical booth can run faster interviews with less rush.",
        "Organizers get post-event data on which employers had the longest waits — directly useful for next year's booth allocation.",
      ],
    },
    solutionPoints: {
      heading: "How Qwise runs a virtual job fair queue",
      items: [
        "Each employer booth gets its own queue, with the booth name and role visible in the candidate's queue list.",
        "Candidates join multiple queues at once — one for each employer they're interested in — from the same browser session.",
        "SMS notifications work even when the venue's WiFi is overloaded or unreliable, which is common at large fair venues.",
        "Candidates see their position per queue and an honest estimate, so they can plan their time.",
        "Organizers see all queues on one dashboard and can spot the bottleneck employers in real time.",
        "Post-event report shows wait times and drop-off per employer booth, useful for next year's layout.",
      ],
    },
    benefits: {
      heading: "What changes at your fair",
      items: [
        "Candidates stop leaving the line — they wait wherever they want and stay productive.",
        "Employers see the candidates they came for instead of the candidates who happened to be in front.",
        "Hallways and booths stay navigable because no one is standing in a 200-person line.",
        "Organizers get hard data on which booths were over- or under-subscribed, informing next year's allocation.",
        "Candidates who attend sessions don't lose their place in the employer queues.",
        "The fair runs on time because organizers can rebalance staffing from the dashboard.",
      ],
    },
    howItWorks: {
      heading: "Set up the morning of, run the whole day",
      steps: [
        {
          title: "Create a queue per employer booth",
          description:
            "Add each participating employer to the dashboard with their booth number and the type of conversation candidates should expect (screening, interview, general Q&A). The queue page reflects that to candidates.",
        },
        {
          title: "Send candidates a link when they arrive",
          description:
            "Display the queue link on a screen at the door, in the program, and on signage. Candidates join from their phone's browser — no app, no account.",
        },
        {
          title: "Run each booth from a phone or tablet",
          description:
            "Each booth manager has a staff device showing only their queue. One tap to call next, mark started, mark complete. SMS goes out to the candidate automatically.",
        },
      ],
    },
    bestFor: [
      "Career fairs",
      "University recruiting events",
      "Government job centers",
      "Staffing agencies",
      "Industry-specific meetups",
      "Veteran hiring events",
    ],
    faqs: [
      {
        question: "Do candidates need to download anything?",
        answer:
          "No. They scan a QR code or open a link in their phone's browser, pick the employers they're interested in, and join the queues. Nothing to install. The queue lives in a regular browser tab.",
      },
      {
        question: "Can a candidate queue for multiple employers at once?",
        answer:
          "Yes — that's the main use case. A candidate can join 5 or 10 employer queues from the same browser session, walk the floor, and get a separate text when each is close.",
      },
      {
        question: "What if a candidate misses their notification?",
        answer:
          "Each candidate stays in the queue until they're served or marked as a no-show. If they miss the first notification, they get a second one. If they don't return after a grace period, the booth moves on and they're marked as a no-show for that employer.",
      },
      {
        question: "Does this work on venue WiFi that's overloaded?",
        answer:
          "Yes. Customer-facing pages work on cellular data, not just venue WiFi. SMS notifications go out over the cellular network regardless of WiFi quality. The system is designed for the realities of crowded fair venues.",
      },
      {
        question: "How much does it cost for a one-day job fair?",
        answer:
          "The Small Event Pass is $29 one-time, covers up to 1,000 queue joins and up to 5 queues, valid for up to 3 days. If your fair has more booths or more candidates, the Large Event Pass ($99) covers up to 10,000 joins and unlimited queues.",
      },
    ],
    relatedPlan: "Small Event Pass",
    relatedPlanHref: "/pricing",
  },
  {
    slug: "queue-app-for-pop-up-events",
    category: "event",
    seoTitle: "Queue app for pop-up events and product launches",
    metaDescription:
      "Handle the line at your pop-up or product launch with a one-time queue pass. No subscription, no hardware. Set up in minutes and serve up to 10,000 attendees over a weekend.",
    primaryKeyword: "queue app for pop-up events",
    title: "Queue app for pop-up events",
    shortTitle: "Pop-ups & product launches",
    summary:
      "Handle a one-day surge of walk-in demand without buying a subscription you'll only use once. Set up in minutes, run the line from your phone, pay only for what you need.",
    intro:
      "Pop-ups and product launches only need queue software for a few days — but those few days can mean a line of 500 people on a single Saturday afternoon. A monthly subscription is overkill for a one-time event, and most queue apps are built for the steady state, not the spike. Qwise Event Passes are designed exactly for this: one-time pricing, set up in minutes, handles the surge, and gives you a clean post-event report so you can plan the next one.",
    heroStat: { value: "1", label: "one-time pass, no subscription" },
    problem: {
      heading: "Why subscription queue apps don't fit pop-ups",
      body:
        "A pop-up is, by definition, a one-time event. You can't justify a $15/month subscription for software you'll use for two Saturdays. But you also can't afford to be without queue software on those two Saturdays — the line of people who show up at noon is the entire point of the pop-up. Most queue apps either push you into a subscription or treat events as an afterthought. Neither works.",
    },
    whyItMatters: {
      heading: "Why pop-ups and launches deserve purpose-built queue software",
      body: [
        "Demand is bursty and front-loaded. The first hour after doors open is where most of your customer experience happens, and a slow line there can poison the whole day.",
        "You're running the event yourself, not a queue ops team. The software has to be set up in minutes and operated by you or one staff member, not a dedicated queue manager.",
        "You'll never use the same queue again — each pop-up is a new location, a new layout, a new audience. The software needs to handle that without configuration debt.",
      ],
    },
    solutionPoints: {
      heading: "How Qwise Event Passes work for pop-ups",
      items: [
        "One-time Event Pass — no subscription, no recurring billing, no card-on-file commitment.",
        "Set up in under ten minutes: pick the location, set the service times, print a QR code.",
        "Handles surge demand — up to 1,000 queue joins on the Small Event Pass, up to 10,000 on the Large Event Pass.",
        "Dashboard access starts a day before doors open, stays live a week after for post-event reporting.",
        "SMS notifications go out even when the venue's WiFi is overwhelmed, which is common at launches.",
        "Custom branding so your queue page matches your launch — no Qwise logo unless you want it.",
      ],
    },
    benefits: {
      heading: "What you get from a purpose-built event queue",
      items: [
        "No monthly subscription for software you'll use twice a year.",
        "Set up in minutes, run from your phone — no on-site install, no kiosk hardware.",
        "Custom branding that matches your launch's look and feel.",
        "Real-time view of the line from anywhere — you can see the queue from the back room.",
        "Post-event report showing peak hours, drop-off rate, and average wait, useful for the next pop-up.",
        "Capacity for the spike: tested at 10,000 joins over a single weekend.",
      ],
    },
    howItWorks: {
      heading: "From purchase to queue in under ten minutes",
      steps: [
        {
          title: "Pick your pass and check out",
          description:
            "Small Event Pass ($29, up to 1,000 joins, 3 days) or Large Event Pass ($99, up to 10,000 joins, 7 days). Pay once, no subscription.",
        },
        {
          title: "Set up your queue on the dashboard",
          description:
            "Name the queue, set the service times, add your branding. Dashboard access is available 24 hours before the event starts.",
        },
        {
          title: "Print the QR code and run the day",
          description:
            "Print the QR code on a tabletop sign, a window cling, whatever you have. Customers scan, join, and get a text. You watch the queue from your phone.",
        },
      ],
    },
    bestFor: [
      "Retail pop-ups",
      "Product launch events",
      "Health & vaccination camps",
      "Community events",
      "Brand activations",
      "Sample sales",
    ],
    faqs: [
      {
        question: "Do I need to subscribe, or can I just buy a pass for one event?",
        answer:
          "Just buy a pass. Event Passes are one-time purchases with no subscription required and no card on file. Use it for your event, and you're done.",
      },
      {
        question: "How many customers can the queue handle?",
        answer:
          "The Small Event Pass covers up to 1,000 queue joins over up to 3 days. The Large Event Pass covers up to 10,000 joins over up to 7 days. For larger events we have a Custom plan.",
      },
      {
        question: "How long does it take to set up?",
        answer:
          "Most pop-ups are running in under ten minutes from purchase to live queue. The setup is: name the queue, set service times, print a QR code.",
      },
      {
        question: "Can I brand the queue page with my launch's look?",
        answer:
          "Yes. Event Passes include custom branding — your colors, your logo, your event name. The queue page looks like part of your launch, not a third-party tool.",
      },
      {
        question: "What if I go over my join limit?",
        answer:
          "You're never cut off. Once your included joins are used, additional joins are billed at a low per-join rate. For most pop-ups the included capacity is plenty; the overage is a safety net, not an expectation.",
      },
    ],
    relatedPlan: "Small Event Pass",
    relatedPlanHref: "/pricing",
  },
];

export const testimonials = [
  {
    quote:
      "Our Saturday line used to wrap around the block. Now people drop their name in and go grab a coffee. Nobody's standing outside anymore.",
    name: "Renata Osei",
    role: "Owner, The Fade Room (Barbershop)",
    avatarSeed: "renata",
  },
  {
    quote:
      "We ran four booths at our spring expo and could finally see, in real time, which one was the bottleneck. That never would have shown up on paper.",
    name: "Marcus Ibarra",
    role: "Event Director, Northbridge Expo Group",
    avatarSeed: "marcus",
  },
  {
    quote:
      "Patients used to sit in a waiting room for 40 minutes. Now they wait in their car or run an errand and we text them when we're ready.",
    name: "Dr. Priya Nandakumar",
    role: "Clinic Director, Wellview Family Health",
    avatarSeed: "priya",
  },
];

export const faqs = [
  {
    question: "Do I need a subscription to use Qwise for my event?",
    answer:
      "No. Event Passes are one-time purchases with no subscription required — pick Small or Large based on your attendee count and you're set for that event only.",
  },
  {
    question: "Do customers need to download an app?",
    answer:
      "No. Customers join a queue by scanning a QR code or visiting a link in their phone's browser — nothing to install, on either side.",
  },
  {
    question: "What happens if I go over my SMS allowance?",
    answer:
      "You're never cut off. Once your included SMS are used, further notifications fall back to email automatically, and any additional SMS are billed at a low per-message rate.",
  },
  {
    question: "Can I run more than one location on the Starter plan?",
    answer:
      "Starter covers a single location. The Growth plan supports up to 5 locations under one account with pooled monthly usage.",
  },
  {
    question: "Can a business plan also run an event queue?",
    answer:
      "Yes. The Growth plan includes up to 2 event-queues per month at no extra cost. If you need more than that, you can add a one-time Event Pass on top.",
  },
  {
    question: "When does Qwise launch?",
    answer:
      "Qwise is currently in development. We're onboarding from the waitlist in small batches as early access opens — join now and we'll email you the moment a spot is ready.",
  },
];

export type Plan = {
  name: string;
  tagline: string;
  price: string;
  unit: string;
  featured?: boolean;
  badge?: string;
  features: string[];
  cta: string;
};

export const businessPlans: Plan[] = [
  {
    name: "Free",
    tagline: "Try it at one location.",
    price: "$0",
    unit: "/month",
    features: [
      "1 location, 1 queue",
      "100 queue entries/month",
      "Email & browser notifications",
      "2 staff accounts",
      "Today's stats only",
    ],
    cta: "Join waitlist",
  },
  {
    name: "Starter",
    tagline: "One shop, real notifications.",
    price: "$15",
    unit: "/month",
    featured: true,
    badge: "Most common",
    features: [
      "1 location, unlimited queues",
      "1,000 queue entries/month",
      "Unlimited email & push, 50 SMS included",
      "Unlimited staff accounts",
      "Custom branding, 30-day analytics",
    ],
    cta: "Join waitlist",
  },
  {
    name: "Growth",
    tagline: "Multiple locations, occasional events.",
    price: "$29",
    unit: "/month",
    features: [
      "Up to 5 locations",
      "5,000 queue entries/month, pooled",
      "200 SMS included, discounted overage",
      "2 event-queues/month included",
      "Full analytics, CSV + API export",
    ],
    cta: "Join waitlist",
  },
];

export const eventPlans: Plan[] = [
  {
    name: "Small Event",
    tagline: "A single booth, pop-up, or fair.",
    price: "$29",
    unit: "one-time",
    features: [
      "Up to 3 days",
      "Up to 5 queues",
      "Up to 1,000 queue joins",
      "200 SMS included",
      "Post-event report (PDF/CSV)",
    ],
    cta: "Join waitlist",
  },
  {
    name: "Large Event",
    tagline: "Full exhibitions and multi-day shows.",
    price: "$99",
    unit: "one-time",
    featured: true,
    badge: "Best for expos",
    features: [
      "Up to 7 days",
      "Unlimited queues",
      "Up to 10,000 queue joins",
      "1,000 SMS included",
      "White-label pages, raw data export",
    ],
    cta: "Join waitlist",
  },
  {
    name: "Custom",
    tagline: "Recurring events or 10,000+ attendees.",
    price: "Let's talk",
    unit: "",
    features: [
      "Unlimited scale",
      "Recurring event-series billing",
      "Dedicated onboarding",
      "Custom SLAs",
    ],
    cta: "Contact us",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  publishedAt: string;
  author: string;
  excerpt: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "the-fade-room-cut-no-shows-in-half",
    title: "How The Fade Room cut no-shows in half with a digital queue",
    description:
      "A Calgary barbershop replaced its paper sign-in sheet with a QR queue and saw walk-in no-shows drop within a month.",
    category: "Customer story",
    readingTime: "4 min read",
    publishedAt: "2026-07-14",
    author: "Qwise Team",
    excerpt:
      "The Fade Room used to lose walk-ins to a line that wrapped around the block on Saturdays. Here's what changed after they switched to a digital queue.",
    content: [
      "Every barbershop owner knows the Saturday problem: the chairs are full, the line is out the door, and every fifteen minutes someone in that line decides it isn't worth the wait and leaves.",
      "The Fade Room, a three-chair shop in Calgary, was losing an estimated four to six walk-ins every Saturday to exactly this problem. Owner Renata Osei tried a paper sign-in sheet first — it helped a little, but people still had to stand around to hear their name called, and the sheet itself became one more thing staff had to manage between cuts.",
      "Switching to a QR-code queue changed the shape of the problem entirely. Customers scan a code taped to the window, pick a service, and get a live position and wait estimate on their own phone. From there, they're free to wait in their car, grab a coffee two doors down, or just sit outside in the sun — the queue notifies them when their turn is close.",
      "The measurable result: no-shows dropped by roughly half within the first month, and the shop's average \"walked in, walked out without a cut\" rate fell even further, since people were no longer bailing on a visible, immovable line.",
      "Renata's advice to other shop owners considering the switch: \"Don't overthink the setup. We had it running in under ten minutes, and the biggest change was just... nobody's standing outside anymore.\"",
    ],
  },
  {
    slug: "northbridge-expo-four-booths-one-dashboard",
    title: "Running four expo booths from one dashboard",
    description:
      "Northbridge Expo Group used event-mode queues to see which of four demo booths was creating a bottleneck — in real time.",
    category: "Customer story",
    readingTime: "5 min read",
    publishedAt: "2026-08-02",
    author: "Qwise Team",
    excerpt:
      "Event organizers usually find out which booth was a bottleneck after the show, from complaints. Northbridge Expo Group found out during the show, from the dashboard.",
    content: [
      "A spring trade show floor is a hard thing to manage in real time. Northbridge Expo Group runs regional expos with a handful of demo booths, a registration desk, and a food vendor — and until recently, the only way to know a booth's line was getting out of hand was to walk over and look.",
      "For their most recent expo, Event Director Marcus Ibarra set up a separate Qwise queue for each of four demo booths plus registration, all visible from one organizer dashboard. The difference wasn't the queuing itself — it was visibility. Within the first hour, the dashboard made it obvious that one booth's demo was running long, backing up its queue well past the other three.",
      "Because the data was live, Marcus's team could react during the event — pulling a staff member over to help run a faster, shorter version of that demo for the rest of the day — instead of finding out afterward from attendee complaints or, worse, not finding out at all.",
      "The post-event report gave them something they'd never had before: a clear, booth-by-booth breakdown of wait times and drop-off, which is now shaping how they allocate booth space and staffing for their next event.",
      "\"That never would have shown up on paper,\" Marcus said. \"We'd have just heard 'the line was long' from three different exhibitors and had no way to know which one, or by how much.\"",
    ],
  },
  {
    slug: "wellview-clinic-waiting-room-to-parking-lot",
    title: "From waiting room to parking lot: a clinic's queue story",
    description:
      "Wellview Family Health replaced its crowded waiting room with a text-when-ready queue system.",
    category: "Customer story",
    readingTime: "4 min read",
    publishedAt: "2026-08-10",
    author: "Qwise Team",
    excerpt:
      "A 40-minute wait feels different when you're free to spend it in your car instead of a crowded waiting room. Here's how one clinic made that switch.",
    content: [
      "Waiting rooms are, by design, a place to sit and do nothing until your name is called. For Wellview Family Health, a family clinic with a chronically busy afternoon schedule, that meant a waiting room that regularly ran over capacity — and patients who associated the clinic with sitting in an uncomfortable chair for the better part of an hour.",
      "Clinic Director Dr. Priya Nandakumar started using Qwise to manage the afternoon walk-in queue specifically. Patients check in at the front desk as before, but instead of taking a seat, they're free to leave — to their car, to a nearby coffee shop, wherever — and get a text when the clinic is ready for them.",
      "The clinical workflow didn't change. What changed was where the waiting happened, and who controlled that time. \"Patients used to sit in a waiting room for 40 minutes,\" Dr. Nandakumar said. \"Now they wait in their car or run an errand and we text them when we're ready.\"",
      "An unplanned benefit: a visibly emptier waiting room reduced the sense of crowding for patients who still preferred to wait on-site, which staff noted anecdotally improved the overall feel of the afternoon shift.",
      "Wellview now uses the same queue analytics to identify which afternoon time blocks consistently run long, informing a scheduling adjustment they're testing for the next quarter.",
    ],
  },
];
