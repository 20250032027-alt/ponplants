import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1c1a16', color: '#a8a29e' }} className="mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div style={{ backgroundColor: '#4a7c3f' }} className="w-7 h-7 rounded-lg flex items-center justify-center text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 2a10 10 0 0 1 0 20"/>
                  <path d="M12 2C6.5 2 2 6.5 2 12"/>
                  <path d="M12 12c0-4 2-7 5-9"/>
                  <path d="M12 12c-3 0-5 1.5-6 4"/>
                </svg>
              </div>
              <span className="font-display font-semibold text-base text-white">PonPlants</span>
            </div>
            <p className="text-sm leading-relaxed">
              The definitive semi-hydro troubleshooting resource. Built from real grower questions, not guesswork.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-white">Guides</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/leca-vs-pon" className="hover:text-white transition-colors">LECA vs Pon Comparison</Link></li>
              <li><Link href="/root-rot" className="hover:text-white transition-colors">Root Rot Diagnosis</Link></li>
              <li><Link href="/transition" className="hover:text-white transition-colors">Soil to Semi-Hydro</Link></li>
              <li><Link href="/fertilizer" className="hover:text-white transition-colors">Fertilizer Dosing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-white">Tools</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/tools#reservoir" className="hover:text-white transition-colors">Reservoir Calculator</Link></li>
              <li><Link href="/tools#root-rot-checker" className="hover:text-white transition-colors">Root Rot Checker</Link></li>
              <li><Link href="/tools#fertilizer-calc" className="hover:text-white transition-colors">Fertilizer Dosing Chart</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-white">Plants</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/plants/alocasia" className="hover:text-white transition-colors">Alocasia in Semi-Hydro</Link></li>
              <li><Link href="/plants/pothos" className="hover:text-white transition-colors">Pothos in LECA</Link></li>
              <li><Link href="/plants/monstera" className="hover:text-white transition-colors">Monstera in Pon</Link></li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #292524' }} className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs">© 2025 PonPlants. For plant lovers by plant lovers.</p>
          <p className="text-xs">
            Data sourced from the{' '}
            <a href="https://reddit.com/r/SemiHydro" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">r/SemiHydro</a>
            {' '}community.
          </p>
        </div>
      </div>
    </footer>
  )
}
