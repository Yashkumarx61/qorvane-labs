import { NextResponse } from "next/server";
import { siteContact } from "@/data/contactData";

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

export async function POST(req: Request) {
  try {
    const { messages }: { messages: Message[] } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid messages array provided." },
        { status: 400 }
      );
    }

    const lastUserMsg = messages[messages.length - 1]?.content || "";
    const lowerQuery = lastUserMsg.toLowerCase();

    // Check if an external OpenAI API Key is configured in environment
    const apiKey = process.env.OPENAI_API_KEY;

    if (apiKey) {
      try {
        const systemPrompt = `You are Qorvane AI, the lead technical solution assistant for Qorvane Labs (located near IT Park, Sahastradhara Road, Dehradun, India).
Your job is to assist website visitors with technical inquiries, project estimates, engagement models, and case study details.
Keep responses concise, professional, friendly, and structured with markdown bullet points or bold text where appropriate.

Company Details:
- Official Email: ${siteContact.email}
- Official Phone / WhatsApp: ${siteContact.phone}
- Office Address: ${siteContact.address}

Core Services:
1. Custom Web Development (Next.js, SSR, Tailwind CSS, TypeScript, Node.js)
2. Mobile App Engineering (Flutter, React Native, Native iOS/Android)
3. AI & Intelligent Data (RAG Pipelines, Custom LLM Agents, Vector DBs)
4. Business Analytics & BI (Real-time KPI dashboards, Data Warehousing)
5. Managed IT & Cloud Operations (AWS, DevOps, ISO 27001 Security)

Key Featured Projects:
- **Red Chilli**: POS & Billing operations dashboard for restaurant & retail operations.
- **Basking Bakery**: D2C artisanal bakery e-commerce storefront.
- **Detailing Raja**: Automotive studio and car care booking portal.

Engagement Models:
- Fixed-Scope Project Delivery (Milestone-based)
- Dedicated Developer Pods (Full Stack, AI Data, Mobile, DevOps engineers)

Always invite the user to schedule a discovery call or contact us directly via email (${siteContact.email}) or WhatsApp (${siteContact.phone}) for custom quotes.`;

        const apiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
              { role: "system", content: systemPrompt },
              ...messages.slice(-6),
            ],
            temperature: 0.7,
            max_tokens: 400,
          }),
        });

        if (apiResponse.ok) {
          const data = await apiResponse.json();
          const reply = data.choices?.[0]?.message?.content;
          if (reply) {
            return NextResponse.json({ reply });
          }
        }
      } catch (err) {
        console.error("OpenAI API call error, falling back to expert knowledge engine:", err);
      }
    }

    // Fallback: Domain-Grounded Expert Response Generator
    let reply = "";

    if (
      lowerQuery.includes("service") ||
      lowerQuery.includes("offer") ||
      lowerQuery.includes("do you do") ||
      lowerQuery.includes("capabilities")
    ) {
      reply = `### Qorvane Labs Core Engineering Services

We provide full-lifecycle digital engineering solutions tailored for startups and global enterprises:

* 🌐 **Custom Web Development:** Next.js, React, Node.js, and high-performance serverless architectures.
* 📱 **Mobile App Engineering:** Cross-platform Flutter & React Native apps with native iOS/Android performance.
* 🤖 **AI & Intelligent Data:** Custom RAG pipelines, LLM fine-tuning, and automated agentic workflows.
* 📊 **Business Analytics & BI:** Real-time executive dashboards, data warehousing, and PowerBI integration.
* ☁️ **Managed IT & Cloud Operations:** 24/7 AWS/GCP cloud management, DevOps CI/CD, and ISO 27001 security hygiene.

Would you like to get an estimated quote or discuss a specific tech stack?`;
    } else if (
      lowerQuery.includes("project") ||
      lowerQuery.includes("case study") ||
      lowerQuery.includes("red chilli") ||
      lowerQuery.includes("basking") ||
      lowerQuery.includes("detailing raja") ||
      lowerQuery.includes("work") ||
      lowerQuery.includes("portfolio")
    ) {
      reply = `### Verified Showcase Projects

Here are three of our featured client solutions:

1. **Red Chilli POS & Billing Dashboard** 🛒
   * **Scope:** Full-stack POS system with real-time order management, dynamic tax/discount calculations, and low-latency receipt printing.
   * **Tech:** React, Node.js, Express, Tailwind CSS.
   * **Live Link:** [View Live Dashboard](https://redchilli-frontend.onrender.com/)

2. **Basking Bakery E-Commerce Storefront** 🧁
   * **Scope:** D2C artisanal bakery platform with dynamic cake customization, date-picker scheduling, and instant Razorpay checkout.
   * **Impact:** 2.8x surge in online orders.

3. **Detailing Raja Automotive Studio** 🚗
   * **Scope:** High-end car care and detailing service booking portal with service package configurator and slot reservation.

You can view complete technical breakdowns on our **[Case Studies Page](/portfolio)**!`;
    } else if (
      lowerQuery.includes("hire") ||
      lowerQuery.includes("pod") ||
      lowerQuery.includes("dedicated") ||
      lowerQuery.includes("team") ||
      lowerQuery.includes("developer")
    ) {
      reply = `### Dedicated Engineering Pods

Accelerate your roadmap with pre-vetted senior software engineers working exclusively on your product:

* 🛠️ **Custom Pod Composition:** Full-Stack Engineers, AI/Data Architects, Mobile Specialists, and DevOps Leads.
* ⚡ **Agile Velocity:** Daily standups, transparent Jira telemetry, and direct Slack/Teams integration.
* 📍 **Dehradun Hub Advantage:** High team retention, cost efficiency, and overlapping coverage for US EST, EU, and Gulf timezones.

Configure your pod parameters on our **[Engagement Models Page](/solutions)** or schedule a discovery call with our solutions lead!`;
    } else if (
      lowerQuery.includes("estimate") ||
      lowerQuery.includes("price") ||
      lowerQuery.includes("pricing") ||
      lowerQuery.includes("cost") ||
      lowerQuery.includes("budget")
    ) {
      reply = `### Transparent Pricing & Scope Estimates

We offer flexible commercial engagement models:

* 📌 **Fixed-Scope Projects:** Standard web apps start from **₹1,500,00 ($2,500 USD)** with milestone-based delivery.
* 🚀 **Dedicated Developer Pods:** Sprint-based resource allocation tailored to your team velocity requirements.
* 🧮 **Interactive Calculator:** Try our instant **[Project Estimator](/contact)** to calculate budget, modular features, and delivery timelines in both INR (₹) and USD ($).`;
    } else if (
      lowerQuery.includes("contact") ||
      lowerQuery.includes("email") ||
      lowerQuery.includes("phone") ||
      lowerQuery.includes("call") ||
      lowerQuery.includes("whatsapp") ||
      lowerQuery.includes("reach") ||
      lowerQuery.includes("address") ||
      lowerQuery.includes("location")
    ) {
      reply = `### Direct Connection Channels

Our solutions team at Dehradun IT Park is ready to connect:

* ✉️ **Official Email:** [${siteContact.email}](mailto:${siteContact.email})
* 📞 **Direct Phone / Call:** [${siteContact.phone}](tel:${siteContact.phoneRaw})
* 💬 **WhatsApp Quick Chat:** [Chat on WhatsApp](${siteContact.whatsappUrl})
* 📍 **Engineering Hub:** ${siteContact.address}

Would you like to schedule a 30-minute discovery call today?`;
    } else {
      reply = `Hello! I'm **Qorvane AI**, your assistant for Qorvane Labs.

I can help you with:
* 🌐 **Engineering Services** (Web, Mobile, AI/RAG, Managed IT)
* 📁 **Featured Case Studies** (Red Chilli POS, Basking Bakery, Detailing Raja)
* 👥 **Dedicated Developer Pods** & Agile Team Scaling
* 📊 **Project Estimates & Pricing**

How can I assist your project today? You can also email us at **[${siteContact.email}](mailto:${siteContact.email})** or call **[${siteContact.phone}](tel:${siteContact.phoneRaw})**.`;
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Error in AI Chat API route:", error);
    return NextResponse.json(
      { error: "Internal server error processing chat message." },
      { status: 500 }
    );
  }
}
