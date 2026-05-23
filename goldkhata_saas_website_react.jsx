export default function GoldKhataWebsite() {
  return (
    <div className="min-h-screen bg-[#faf7f0] text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a1a1a] to-[#3b2b0a] text-white px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-yellow-600/20 border border-yellow-500 px-4 py-2 rounded-full text-sm mb-6">
              Multi-Tenant SaaS Platform
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              GoldKhata
            </h1>

            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Production-grade SaaS platform for lenders, jewellers, and pawn-broking businesses to manage gold, silver, and personal loans end-to-end.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://drive.usercontent.google.com/download?id=16fL0H1wbBjDvgIVYNkfAOZpxSg0V2xTn&export=download&confirm=t"
                className="bg-yellow-600 hover:bg-yellow-500 px-6 py-4 rounded-2xl font-semibold transition"
              >
                Download APK
              </a>

              <a
                href="#features"
                className="border border-white/40 px-6 py-4 rounded-2xl font-semibold hover:bg-white/10 transition"
              >
                Explore Features
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
            <div className="space-y-5">
              {[
                'Gold & Silver Loan Management',
                'Automatic Interest Accrual',
                'Pawn Ledger Management',
                'Repayment & Settlement Tracking',
                'Invoice & Receipt Generation',
                'Multi-Tenant SaaS Architecture',
                'Super Admin Dashboard',
                'Subscription Billing System',
              ].map((item) => (
                <div
                  key={item}
                  className="bg-black/20 rounded-xl px-4 py-3 border border-white/10"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About GoldKhata</h2>
          <p className="text-lg leading-8 text-gray-600">
            GoldKhata is a business SaaS platform built for pawn-broking businesses, jewellers, and lenders to digitize and automate complete loan operations. From customer onboarding to interest calculation, repayments, settlements, invoicing, reporting, and operational workflows — everything is managed through one secure platform.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">Core Features</h2>
            <p className="text-gray-600 text-lg">
              Everything required to run a modern loan & pawn management business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Loan Management',
                desc: 'Manage gold, silver, and personal loans with complete customer records and repayment tracking.',
              },
              {
                title: 'Interest Automation',
                desc: 'Automatic interest calculation with configurable rates and repayment cycles.',
              },
              {
                title: 'Pawn Ledger',
                desc: 'Track pledged jewellery, assets, settlements, and customer history digitally.',
              },
              {
                title: 'Reports & Analytics',
                desc: 'Business insights, collections tracking, profit reports, and operational analytics.',
              },
              {
                title: 'Subscription SaaS',
                desc: 'Built-in subscription monetization for tenant onboarding and billing.',
              },
              {
                title: 'Super Admin Panel',
                desc: 'Centralized control for managing tenants, subscriptions, analytics, and platform settings.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-semibold mb-4 text-yellow-700">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-7">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">Privacy Policy & Terms</h2>
            <p className="text-gray-600 text-lg">
              Transparency and data protection for businesses using GoldKhata.
            </p>
          </div>

          <div className="space-y-10">
            <div className="bg-[#faf7f0] rounded-3xl p-8 border border-yellow-100">
              <h3 className="text-2xl font-bold mb-4 text-yellow-700">
                Privacy Policy
              </h3>

              <p className="text-gray-700 leading-8 mb-4">
                GoldKhata is a business management SaaS platform for lenders, jewellers, and pawn-broking businesses.
              </p>

              <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-7">
                <li>
                  Merchants may store customer details such as name, mobile number, pledged jewellery details, and loan records.
                </li>
                <li>
                  GoldKhata administrators do not routinely access merchant customer data.
                </li>
                <li>
                  The platform may securely process payments using third-party providers.
                </li>
                <li>
                  Reasonable security measures are implemented to protect business and customer information.
                </li>
                <li>
                  App permissions may include internet, camera, storage, and notification access for operational functionality.
                </li>
              </ul>
            </div>

            <div className="bg-[#faf7f0] rounded-3xl p-8 border border-yellow-100">
              <h3 className="text-2xl font-bold mb-4 text-yellow-700">
                Terms & Conditions
              </h3>

              <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-7">
                <li>
                  GoldKhata provides business software tools and does not directly issue loans.
                </li>
                <li>
                  Lending operations and loan terms are managed independently by businesses using the platform.
                </li>
                <li>
                  Users are responsible for maintaining account confidentiality and lawful platform usage.
                </li>
                <li>
                  GoldKhata shall not be liable for banking delays, third-party payment failures, or external system downtime.
                </li>
                <li>
                  Continued usage of the platform constitutes acceptance of updated terms and policies.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-gradient-to-r from-[#1a1a1a] to-[#3b2b0a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Modernize Your Loan Business
          </h2>

          <p className="text-xl text-gray-200 mb-8 leading-8">
            Digitize gold loans, pawn ledgers, customer management, interest calculations, and settlements with GoldKhata.
          </p>

          <a
            href="https://drive.usercontent.google.com/download?id=16fL0H1wbBjDvgIVYNkfAOZpxSg0V2xTn&export=download&confirm=t"
            className="inline-block bg-yellow-600 hover:bg-yellow-500 px-8 py-4 rounded-2xl text-lg font-semibold transition"
          >
            Download APK
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl font-bold mb-3">GoldKhata</h3>
            <p>Business SaaS for lenders, jewellers & pawn-broking businesses.</p>
          </div>

          <div>
            <p>Package Name: com.goldkhata.app</p>
            <p>Business Name: Mahesh kumar shinnurlar</p>
            <p>Brand App Name: Goldkhata</p>
            <p>Platform: Android + Web</p>
            <p>© 2026 GoldKhata. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
