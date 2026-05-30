import Link from 'next/link'

type Props = {
  videoId: string
  title: string
  creator: string
  channel: string
  note?: string
}

export default function VideoEmbed({ videoId, title, creator, channel, note }: Props) {
  const url = `https://www.youtube.com/watch?v=${videoId}`

  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 16,
      overflow: 'hidden',
      marginTop: 8,
    }}>
      {/* Thumbnail with play overlay. No iframe, no cookie load until clicked */}
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Watch ${title} on YouTube`}
        style={{
          display: 'block',
          position: 'relative',
          paddingBottom: '56.25%', /* 16:9 */
          background: '#000',
          textDecoration: 'none',
          overflow: 'hidden',
        }}
      >
        {/* YouTube maxres thumbnail */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
          alt={`Thumbnail for: ${title}`}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            opacity: 0.85,
          }}
        />
        {/* Play button */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: '50%',
            background: 'rgba(255,0,0,0.9)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <polygon points="5,3 19,12 5,21"/>
            </svg>
          </div>
        </div>
      </Link>

      {/* Info row */}
      <div style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
        <div>
          <p style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-1)', margin: '0 0 3px' }}>{title}</p>
          <p style={{ fontSize: 12, color: 'var(--text-4)', margin: 0 }}>
            {creator} · <span style={{ color: 'var(--text-3)' }}>{channel}</span>
            {note && <span style={{ color: 'var(--text-4)' }}> · {note}</span>}
          </p>
        </div>
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '7px 14px', borderRadius: 8,
            background: '#ff0000', color: '#fff',
            fontSize: 12, fontWeight: 700, textDecoration: 'none',
            flexShrink: 0,
            letterSpacing: '0.02em',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75,15.02 15.5,12 9.75,8.98" fill="black"/></svg>
          Watch on YouTube
        </Link>
      </div>
    </div>
  )
}
