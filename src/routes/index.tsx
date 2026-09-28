import { createFileRoute } from '@tanstack/react-router'
import { useState, type ReactNode } from 'react'
import { Mail, Linkedin, Phone, MapPin, Plus, Trash2, Send, CheckCircle2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { EditableText } from '@/components/Editable'
import { EditControls } from '@/components/EditControls'
import { SiteContentProvider, useSiteContent } from '@/lib/site-content-context'

export const Route = createFileRoute('/')({
  component: () => (
    <SiteContentProvider>
      <Page />
    </SiteContentProvider>
  ),
})

function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="font-mono text-sm text-muted-foreground">{number}</span>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{children}</h2>
    </div>
  )
}

function Page() {
  const { content, editMode } = useSiteContent()

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      onClickCapture={(e) => {
        if (!editMode) return
        if ((e.target as HTMLElement).closest('a')) e.preventDefault()
      }}
    >
      <EditControls />

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#overview" className="flex items-center gap-2 font-semibold">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground">
              <EditableText path={['nav', 'initials']} />
            </span>
            <EditableText path={['nav', 'name']} className="hidden sm:inline" />
          </a>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a href="#overview" className="hover:text-foreground">Overview</a>
            <a href="#approach" className="hover:text-foreground">Approach</a>
            <a href="#insights" className="hover:text-foreground">Insights</a>
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#work" className="hover:text-foreground">Partner</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            <EditableText path={['nav', 'ctaLabel']} />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="overview" className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:items-center lg:gap-16">
          <div>
            <p className="mb-4 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wide text-secondary-foreground">
              <EditableText path={['hero', 'eyebrow']} />
            </p>
            <EditableText
              as="h1"
              path={['hero', 'name']}
              className="block text-4xl font-bold tracking-tight sm:text-6xl"
            />
            <EditableText
              as="p"
              path={['hero', 'title']}
              className="mt-3 block text-lg font-medium text-muted-foreground sm:text-xl"
            />
            <EditableText
              as="p"
              path={['hero', 'statement']}
              className="mt-6 block max-w-2xl text-xl leading-relaxed"
            />
            <EditableText
              as="p"
              path={['hero', 'bio']}
              className="mt-4 block max-w-2xl text-base leading-relaxed text-muted-foreground"
            />

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                <EditableText path={['hero', 'ctaPrimary']} />
              </a>
              <a
                href="#insights"
                className="rounded-lg border border-border px-6 py-3 text-sm font-medium hover:bg-accent"
              >
                <EditableText path={['hero', 'ctaSecondary']} />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <Badge variant="secondary" className="px-3 py-1 text-sm">
                <EditableText path={['hero', 'badge1']} />
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 text-sm">
                <EditableText path={['hero', 'badge2']} />
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 text-sm">
                <EditableText path={['hero', 'badge3']} />
              </Badge>
            </div>
          </div>

          <div className="mx-auto w-full max-w-xs lg:mx-0 lg:max-w-none">
            <div className="relative">
              <img
                src={content.hero.photo}
                alt={content.hero.photoAlt}
                className="aspect-[4/5] w-full rounded-md border border-border object-cover shadow-xl"
              />
              <div className="absolute -left-4 bottom-6 rounded-md border border-border bg-background px-4 py-2 shadow-lg">
                <EditableText
                  as="p"
                  path={['hero', 'photoTagLabel']}
                  className="block font-mono text-[10px] uppercase tracking-wide text-muted-foreground"
                />
                <EditableText
                  as="p"
                  path={['hero', 'photoTagValue']}
                  className="block text-sm font-semibold"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Bring */}
      <section id="approach" className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionLabel number="01">
            <EditableText path={['bring', 'heading']} />
          </SectionLabel>
          <EditableText
            as="p"
            path={['bring', 'intro']}
            className="block max-w-2xl text-muted-foreground"
          />

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.bring.cards.map((_, i) => (
              <Card key={i} className="gap-3 py-5">
                <CardHeader className="gap-1 px-5">
                  <CardTitle className="text-base">
                    <EditableText path={['bring', 'cards', i, 'title']} />
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-5">
                  <EditableText
                    as="p"
                    path={['bring', 'cards', i, 'body']}
                    className="block text-sm text-muted-foreground"
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-5">
            {content.bring.stats.map((_, i) => (
              <div key={i}>
                <EditableText
                  as="p"
                  path={['bring', 'stats', i, 'value']}
                  className="block text-2xl font-bold sm:text-3xl"
                />
                <EditableText
                  as="p"
                  path={['bring', 'stats', i, 'label']}
                  className="mt-1 block text-xs text-muted-foreground"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section id="insights" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionLabel number="02">
            <EditableText path={['insights', 'heading']} />
          </SectionLabel>
          <EditableText
            as="p"
            path={['insights', 'intro']}
            className="block max-w-2xl text-muted-foreground"
          />

          <InsightsGrid />
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionLabel number="03">
            <EditableText path={['about', 'heading']} />
          </SectionLabel>

          <div className="max-w-2xl space-y-4">
            {content.about.paragraphs.map((_, i) => (
              <EditableText
                key={i}
                as="p"
                path={['about', 'paragraphs', i]}
                className="block leading-relaxed text-muted-foreground"
              />
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <EditableText
                as="h3"
                path={['about', 'credentialsHeading']}
                className="block font-semibold"
              />
              <ul className="mt-3 space-y-2">
                {content.about.credentials.map((_, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <EditableText as="span" path={['about', 'credentials', i]} className="block" />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <EditableText
                as="h3"
                path={['about', 'builtHeading']}
                className="block font-semibold"
              />
              <div className="mt-3 space-y-3">
                {content.about.builtItems.map((_, i) => (
                  <div key={i} className="rounded-lg border border-border bg-card p-4">
                    <EditableText
                      as="p"
                      path={['about', 'builtItems', i, 'title']}
                      className="block text-sm font-semibold"
                    />
                    <EditableText
                      as="p"
                      path={['about', 'builtItems', i, 'body']}
                      className="mt-1 block text-sm text-muted-foreground"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to work together */}
      <section id="work" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionLabel number="04">
            <EditableText path={['services', 'heading']} />
          </SectionLabel>
          <EditableText
            as="p"
            path={['services', 'intro']}
            className="block max-w-2xl text-muted-foreground"
          />

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {content.services.cards.map((_, i) => (
              <Card key={i} className="gap-2 py-5">
                <CardHeader className="gap-1 px-5">
                  <CardTitle className="text-base">
                    <EditableText path={['services', 'cards', i, 'title']} />
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-5">
                  <EditableText
                    as="p"
                    path={['services', 'cards', i, 'body']}
                    className="block text-sm text-muted-foreground"
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              <EditableText path={['services', 'ctaLabel']} />
            </a>
            <EditableText
              as="p"
              path={['services', 'ctaNote']}
              className="block text-sm text-muted-foreground"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionLabel number="05">
            <EditableText path={['contact', 'heading']} />
          </SectionLabel>
          <EditableText
            as="p"
            path={['contact', 'statement']}
            className="block max-w-xl text-muted-foreground"
          />

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="space-y-3">
              <a
                className="flex items-center gap-3 text-sm hover:text-primary"
                href={editMode ? undefined : `mailto:${content.contact.email}`}
              >
                <Mail size={16} className="shrink-0 text-muted-foreground" />
                <EditableText path={['contact', 'email']} />
              </a>
              <a
                className="flex items-center gap-3 text-sm hover:text-primary"
                href={editMode ? undefined : `https://${content.contact.linkedin.replace(/^https?:\/\//, '')}`}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={16} className="shrink-0 text-muted-foreground" />
                <EditableText path={['contact', 'linkedin']} />
              </a>
              <a
                className="flex items-center gap-3 text-sm hover:text-primary"
                href={editMode ? undefined : `tel:${content.contact.phone.replace(/[^+\d]/g, '')}`}
              >
                <Phone size={16} className="shrink-0 text-muted-foreground" />
                <EditableText path={['contact', 'phone']} />
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="shrink-0" />
                <EditableText path={['contact', 'location']} />
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-muted-foreground sm:px-6">
          <EditableText path={['contact', 'footerNote']} />
        </div>
      </footer>
    </div>
  )
}

function InsightsGrid() {
  const { content, editMode, addItem, removeItem } = useSiteContent()

  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {content.insights.items.map((item, i) => (
        <Card key={item.id} className="relative gap-2 py-5">
          {editMode && (
            <button
              onClick={() => removeItem(['insights', 'items'], i)}
              className="absolute right-3 top-3 rounded-md p-1 text-muted-foreground hover:bg-accent hover:text-destructive"
              aria-label="Remove insight"
            >
              <Trash2 size={14} />
            </button>
          )}
          <CardHeader className="gap-1 px-5">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <EditableText path={['insights', 'items', i, 'tag']} />
              <span>·</span>
              <EditableText path={['insights', 'items', i, 'date']} />
            </div>
            <CardTitle className="text-base">
              <EditableText path={['insights', 'items', i, 'title']} />
            </CardTitle>
          </CardHeader>
          <CardContent className="px-5">
            <EditableText
              as="p"
              path={['insights', 'items', i, 'excerpt']}
              className="block text-sm text-muted-foreground"
            />
          </CardContent>
        </Card>
      ))}

      {editMode && (
        <button
          onClick={() =>
            addItem(['insights', 'items'], {
              id: `insight-${Date.now()}`,
              title: 'New insight',
              date: new Date().toISOString().slice(0, 7),
              tag: 'Tag',
              excerpt: 'A short summary of this piece.',
            })
          }
          className="flex min-h-32 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border text-sm text-muted-foreground hover:bg-accent"
        >
          <Plus size={18} />
          Add insight
        </button>
      )}
    </div>
  )
}

function encodeForm(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

function ContactForm() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-2 rounded-xl border border-border bg-card p-6">
        <CheckCircle2 className="text-primary" size={24} />
        <p className="font-medium">Message sent</p>
        <p className="text-sm text-muted-foreground">
          Thanks for reaching out — I'll get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="space-y-4 rounded-xl border border-border bg-card p-6"
      onSubmit={(e) => {
        e.preventDefault()
        setSending(true)
        fetch('/contact.html', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encodeForm({ 'form-name': 'contact', ...fields }),
        })
          .then(() => setSubmitted(true))
          .finally(() => setSending(false))
      }}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don't fill this out: <input name="bot-field" />
        </label>
      </p>

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          value={fields.name}
          onChange={(e) => setFields({ ...fields, name: e.target.value })}
          className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={fields.email}
          onChange={(e) => setFields({ ...fields, email: e.target.value })}
          className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={fields.message}
          onChange={(e) => setFields({ ...fields, message: e.target.value })}
          className="w-full resize-none rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          placeholder="What would you like to talk about?"
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-60"
      >
        <Send size={16} />
        {sending ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
