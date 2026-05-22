import { Link } from 'react-router-dom';

const FOOTER_COLUMNS = [
  {
    title: "upgrades",
    links: [
      { name: "CRED money", path: "/" },
      { name: "CRED mint", path: "/" },
      { name: "CRED garage", path: "/" },
      { name: "CRED cash+", path: "/" }
    ]
  },
  {
    title: "payments",
    links: [
      { name: "Scan & Pay", path: "/" },
      { name: "Tap to Pay", path: "/" },
      { name: "Pay Anyone", path: "/" },
      { name: "RuPay cards on UPI", path: "/" }
    ]
  },
  {
    title: "company",
    links: [
      { name: "about CRED", path: "/about" },
      { name: "careers", path: "/about" }
    ]
  },
  {
    title: "insider perks",
    links: [
      { name: "upgrade to UPI", path: "/" }
    ]
  },
  {
    title: "design",
    links: [
      { name: "NeoPOP", path: "/design" },
      { name: "manifesto", path: "/design" }
    ]
  },
  {
    title: "resources",
    links: [
      { name: "partner with us", path: "/" },
      { name: "calculators", path: "/" },
      { name: "articles", path: "/" },
      { name: "tech blog", path: "/" },
      { name: "customer care", path: "/" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-cred-muted py-16 px-6 md:px-24 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Six columns */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-12 mb-16">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h4 className="text-white uppercase text-xs font-semibold tracking-[0.2em] mb-2">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="hover:text-cred-green hover:underline underline-offset-4 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Brand Copy / About */}
        <div className="border-t border-white/5 pt-12 pb-8 text-xs leading-relaxed flex flex-col gap-6">
          <div>
            <h5 className="text-white font-semibold tracking-wider mb-2 uppercase">about CRED</h5>
            <p>
              CRED is a members-only club that rewards individuals for their high credit scores. By offering exclusive perks, cashback, and customized benefits, CRED promotes financial discipline and smart credit management. Over 25 million creditworthy members trust CRED to manage their credit cards, check their credit scores, and make direct utility payments with seamless security.
            </p>
          </div>

          <div>
            <h5 className="text-white font-semibold tracking-wider mb-2 uppercase font-mono">calculators & guides</h5>
            <p className="text-white/30">
              credit score calculator | credit card bill payment guide | RuPay credit card guides | garage maintenance tips | UPI payment limits | secure online transaction metrics | direct transfer protocols
            </p>
          </div>
        </div>

        {/* Copyright and Legal disclaimer */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div>
            © 2026 CRED. Crafted in trust.
          </div>
          <div className="flex gap-6 text-[10px] md:text-xs">
            <Link to="/privacy" className="hover:text-white transition-colors">PRIVACY</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">TERMS</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">SECURITY</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
