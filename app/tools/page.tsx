import type { Metadata } from 'next'
import ToolsClient from './ToolsClient'

export const metadata: Metadata = {
  title: 'Semi-Hydro Tools Reservoir Calculator and Root Rot Checker | PonPlants',
  description: 'Calculate your ideal reservoir depth for any plant and pot size. Interactive root rot decision tree with step-by-step diagnosis.',
}

export default function ToolsPage() {
  return <ToolsClient />
}
