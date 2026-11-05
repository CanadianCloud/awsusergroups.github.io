import { lazy, Suspense, useMemo, useState } from 'react';
import { ArrowRight, ArrowUpRight, BookOpen, CalendarDays, ChevronDown, ChevronLeft, ChevronRight, Globe2, HeartHandshake, Lightbulb, MapPin, Menu, MessageCircle, Search, ShieldCheck, Sparkles, UsersRound, X, Presentation } from 'lucide-react';
import communityDay from './assets/community-day.jpg';
import networkingEvent from './assets/networking-event.jpg';
import communitySpeaker from './assets/community/speaker.jpg';
import communityTeam from './assets/community/community-team.jpg';
import communityFriends from './assets/community/friends.jpg';
import communityConversation from './assets/community/conversation.jpg';
import communityRoom from './assets/community/community-day-room.jpg';
import communityConnections from './assets/community/connections.jpg';
import communityWelcome from './assets/community/welcome.jpg';
import communityLearning from './assets/community/learning-together.jpg';
import communityBuilders from './assets/community/community-builders.jpg';
import buildGenie from './assets/build-genie-logo.png';
import feedbackFeijoa from './assets/feedback feijoa.png';
import directory from './data/userGroups.json';
import insights from './data/leaderInsights.js';

const CommunityMap = lazy(() => import('./components/CommunityMap.jsx'));
const contribute = 'https://tally.so/r/pbee4b';
const awsDirectory = 'https://builder.aws.com/community/user-groups';
const resources = [
  { title: 'Community Day guide', category: 'EVENT PLANNING', icon: CalendarDays, description: 'Bring your community together for something bigger. A practical guide to planning and running an AWS Community Day.', href: '/pdfs/how_to_run_an_aws_community_day.pdf', action: 'Read the guide', type: 'PDF guide' },
  { title: 'Sponsor outreach templates', category: 'SPONSORSHIPS', icon: HeartHandshake, description: 'Start the conversation with potential sponsors. Email templates you can make your own.', href: '/pdfs/sponsorship_email_templates_for_aws_community_events.pdf', action: 'Get the templates', type: 'PDF templates' },
  { title: 'Sponsorship deck outline', category: 'SPONSORSHIPS', icon: Presentation, description: 'Tell your community’s story and give potential partners a clear picture of how they can help.', href: '/pdfs/sponsorship_deck_prospectus_outline.pdf', action: 'Explore the outline', type: 'PDF outline' },
  { title: 'Code of conduct', category: 'WELCOMING COMMUNITIES', icon: ShieldCheck, description: 'Create a place where people feel welcome, respected, and ready to learn. Start with clear expectations.', href: 'https://aws.amazon.com/codeofconduct/', action: 'View the code', type: 'AWS resource' },
  { title: 'Get your people ready', category: 'PEOPLE & VOLUNTEERS', icon: UsersRound, description: 'Useful forms for bringing your sponsors, speakers, and volunteers into the loop before event day.', href: '/pdfs/forms_for_sponsors_speakers_and_volunteers.pdf', action: 'Get the forms', type: 'PDF forms' },
  { title: 'Share what worked for you', category: 'GIVE BACK', icon: Lightbulb, description: 'Have a checklist, template, tool, or lesson that helped your group? Give another leader a head start.', href: contribute, action: 'Contribute a resource', type: 'Community contribution' },
];

function ExternalLink({ href, children, className = '', ...props }) {
  return <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
}
function Brand() {
  return <a href="#hero" className="brand" aria-label="AWS User Groups home"><UsersRound aria-hidden="true" /><span><span className="brand-aws">AWS</span> User Groups</span></a>;
}
function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="header-inner"><Brand />
      <button className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav id="main-navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
        <a href="#user-groups" onClick={() => setOpen(false)}>Find a Group</a>
        <a href="#resources" onClick={() => setOpen(false)}>Leader Resources</a>
        <a href="#build" onClick={() => setOpen(false)}>Community Tools</a>
        <a href="#insights" onClick={() => setOpen(false)}>Leader Insights</a>
        <a href="#resources" className="button button-small" onClick={() => setOpen(false)}><BookOpen size={17} /> Leader toolkit</a>
      </nav>
    </div>
  </header>;
}
function Hero() {
  return <section id="hero" className="hero" aria-labelledby="hero-title">
    <div className="hero-copy wrap">
      <p className="eyebrow hero-eyebrow"><span />For AWS user group leaders<span /></p>
      <h1 id="hero-title">Behind every great user group,<br className="desktop-break" /> there’s someone <span className="underlined">like you.</span></h1>
      <p className="hero-description">Organizing, connecting, supporting, and growing local AWS communities.<br className="desktop-break" /> A home for community leaders to learn, share experience, and help each other thrive.</p>
      <div className="hero-actions"><a className="button" href="#resources">Resources for community leaders <ArrowRight size={20} /></a><a className="text-link" href="#user-groups">Discover AWS user groups <ArrowUpRight size={19} /></a></div>
    </div>
    <div className="community-mosaic" aria-label="People and moments from the community">
      <figure className="mosaic-lead"><img src={communitySpeaker} alt="A community speaker sharing practical AWS knowledge on stage" fetchPriority="high" /><figcaption>Share what you know</figcaption></figure>
      <figure className="mosaic-team"><img src={communityTeam} alt="Community members coming together at AWS Community Day" /><figcaption>Bring people together</figcaption></figure>
      <figure className="mosaic-conversation"><img src={communityConversation} alt="People exchanging ideas during an AWS community event" /><figcaption>Start a conversation</figcaption></figure>
      <figure className="mosaic-friends"><img src={communityFriends} alt="A group of friends connecting at AWS Community Day" /><figcaption>Find your people</figcaption></figure>
      <figure className="mosaic-room"><img src={communityRoom} alt="An audience gathered to learn at AWS Community Day Vancouver" /><figcaption>Keep learning together</figcaption></figure>
    </div>
    <div className="purpose-strip wrap">
      <h2>Help for every<br /> part of leading</h2>
      {[{ icon: CalendarDays, title: 'Plan', copy: 'Run welcoming, worthwhile events.', link: '#resources' }, { icon: UsersRound, title: 'Welcome', copy: 'Make room for people to belong.', link: '#resources' }, { icon: MessageCircle, title: 'Connect', copy: 'Learn from leaders who get it.', link: '#insights' }, { icon: Sparkles, title: 'Grow', copy: 'Build a community that lasts.', link: '#user-groups' }].map(({ icon: Icon, title, copy, link }) => <a href={link} key={title}><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{copy}</p></div></a>)}
    </div>
  </section>;
}
function Resources() {
  return <section id="resources" className="section resources-section"><div className="wrap">
    <div className="section-heading"><div><p className="eyebrow">The leader toolkit</p><h2>A head start for your<br /> next great gathering.</h2></div><p>You put your time into your community.<br /> These shared resources help you put it to good use.</p></div>
    <div className="resource-grid">{resources.map(({ title, category, icon: Icon, description, href, action, type }, index) => <ExternalLink href={href} key={title} className={'resource-card resource-' + index} aria-label={`${title}: ${action} (${type}, opens in a new tab)`}>
      <div className="resource-top"><span className="icon-box"><Icon aria-hidden="true" /></span><span className="resource-format">{type}</span></div><span className="category">{category}</span><h3>{title}</h3><p>{description}</p><span className="card-action">{action}<ArrowUpRight size={20} /></span>
    </ExternalLink>)}</div>
  </div></section>;
}
function FeaturedCommunity() {
  return <section id="featured" className="featured-section"><div className="wrap featured-grid">
    <div className="featured-photos"><img className="feature-networking" src={networkingEvent} alt="People meeting and exchanging ideas at an AWS event in Vancouver" loading="lazy" /><img className="feature-stage" src={communityDay} alt="AWS Community Day Vancouver" loading="lazy" /><span className="photo-note"><MapPin size={16} /> Vancouver, Canada</span></div>
    <div className="featured-copy"><p className="eyebrow">Community spotlight</p><h2>Local connections.<br /> Lasting impact.</h2><h3>Meet AWS User Group Vancouver</h3><p>Cloud enthusiasts, developers, and tech professionals coming together to learn, share, and collaborate. Monthly meetups, workshops, and conversations create a space for people of all experience levels to grow.</p><p>One local community. Part of something much bigger.</p><ExternalLink href="https://awscanada.ca/" className="button">Meet the Vancouver community <ArrowUpRight size={19} /></ExternalLink></div>
  </div></section>;
}
function Tools() {
  return <section id="build" className="section tools-section"><div className="wrap">
    <div className="section-heading"><div><p className="eyebrow">Made by the community</p><h2>Good ideas deserve<br /> to be shared.</h2></div><p>Useful tools created by community members.<br /> Try them, put them to work, and pass them on.</p></div>
    <div className="tools-grid">
      <article className="tool-card"><div className="tool-visual genie"><img src={buildGenie} alt="Build Genie logo" loading="lazy" /></div><div className="tool-copy"><span className="category">CLOUD BUILDING</span><h3>Build Genie</h3><p>A cloud sidekick from the Vancouver AWS community. Describe what you want to build, explore the architecture and reasoning, and generate Terraform code to get started.</p><ExternalLink href="https://partyrock.aws/u/Cloudaws/mt8_7y8ZO/Cloud-Solution-Build-Genie" className="text-link">Try Build Genie for free <ArrowUpRight size={19} /></ExternalLink></div></article>
      <article className="tool-card"><div className="tool-visual feijoa"><img src={feedbackFeijoa} alt="Feedback Feijoa logo" loading="lazy" /></div><div className="tool-copy"><span className="category">BETTER EVENTS</span><h3>Feedback Feijoa</h3><p>Find out what landed with your audience. Collect anonymous session feedback at meetups and Community Days, see event analytics, and share reports with your speakers and team.</p><ExternalLink href="https://www.feedbackfeijoa.com/" className="text-link">Try Feedback Feijoa for free <ArrowUpRight size={19} /></ExternalLink></div></article>
    </div>
  </div></section>;
}
function CommunityMoments() {
  return <section className="moments-section" aria-labelledby="moments-title"><div className="wrap">
    <div className="moments-heading"><div><p className="eyebrow">This is what community looks like</p><h2 id="moments-title">Real people. Shared curiosity.</h2></div><p>The welcome at the door. The idea that sticks.<br /> The conversation that becomes a friendship.</p></div>
    <div className="moments-grid">
      <figure><img src={communityWelcome} alt="Community Day badges ready to welcome attendees" loading="lazy" /><figcaption>A warm welcome</figcaption></figure>
      <figure><img src={communityConnections} alt="Community members meeting and talking between sessions" loading="lazy" /><figcaption>A new connection</figcaption></figure>
      <figure><img src={communityLearning} alt="A packed audience listening and learning together" loading="lazy" /><figcaption>A shared discovery</figcaption></figure>
      <figure><img src={communityBuilders} alt="Community members together at AWS Community Day Vancouver" loading="lazy" /><figcaption>A reason to come back</figcaption></figure>
    </div>
  </div></section>;
}
function Insights() {
  return <section id="insights" className="section insights-section"><div className="wrap insights-grid"><div className="insights-intro"><p className="eyebrow">From one leader to another</p><h2>A little advice.<br /> A lot of experience.</h2><p>Finding speakers, supporting volunteers, keeping people coming back. Learn from leaders who have been there.</p><ExternalLink className="text-link" href={contribute}>Share your own advice <ArrowUpRight size={19} /></ExternalLink></div>
    <details className="insights-disclosure"><summary className="insights-reveal"><span className="insights-bubble"><MessageCircle size={26} aria-hidden="true" /></span><span><strong>Explore {insights.length} leader questions</strong><span>Speakers, sponsors, volunteers, inclusion, and more.</span></span><ChevronDown size={22} aria-hidden="true" /></summary><div className="insights-list">{insights.map(({ question, answer }, i) => <details className="insight" key={question}><summary><span className="question-number">{String(i + 1).padStart(2, '0')}</span><span>{question}</span><ChevronDown size={19} aria-hidden="true" /></summary><div className="insight-answer">{answer}</div></details>)}</div></details>
  </div></section>;
}
function Directory() {
  const [query, setQuery] = useState('');
  const [country, setCountry] = useState('');
  const [page, setPage] = useState(0);
  const [showMap, setShowMap] = useState(true);
  const groups = directory.userGroups;
  const countries = useMemo(() => [...new Set(groups.map(g => g.country).filter(Boolean))].sort(), [groups]);
  const filtered = useMemo(() => groups.filter(g => (!country || g.country === country) && `${g.name} ${g.city || ''} ${g.country || ''}`.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase())), [groups, query, country]);
  const perPage = 6;
  const pages = Math.ceil(filtered.length / perPage);
  return <section id="user-groups" className="section directory-section"><div className="wrap">
    <div className="section-heading"><div><p className="eyebrow">Find your people</p><h2>A local group.<br /> A world of possibilities.</h2></div><p>Meet people who share your curiosity.<br /> Explore AWS user groups around the world.</p></div>
    <div className="directory-filters"><div className="search-field"><Search size={21} aria-hidden="true" /><label className="sr-only" htmlFor="group-search">Search groups by name, city, or country</label><input id="group-search" type="search" placeholder="Search by group, city, or country" value={query} onChange={e => { setQuery(e.target.value); setPage(0); }} /></div><label className="sr-only" htmlFor="country-filter">Filter by country</label><select id="country-filter" value={country} onChange={e => { setCountry(e.target.value); setPage(0); }}><option value="">All countries</option>{countries.map(c => <option key={c}>{c}</option>)}</select><button className="map-toggle" onClick={() => setShowMap(!showMap)} aria-expanded={showMap} aria-controls="community-map"><Globe2 size={18} />{showMap ? 'Hide map' : 'Show map'}</button></div>
    <p className="results-count" role="status">{filtered.length} {filtered.length === 1 ? 'group' : 'groups'} in this directory{query || country ? ' matching your search' : ''}</p>
    <div className={showMap ? 'directory-layout' : 'directory-layout list-only'}>
      {showMap && <div id="community-map" className="map-frame"><Suspense fallback={<div className="map-loading"><Globe2 />Loading the community map…</div>}><CommunityMap groups={filtered} /></Suspense></div>}
      <div className="directory-results"><div className="group-list">{filtered.slice(page * perPage, (page + 1) * perPage).map((g, i) => <ExternalLink key={`${g.name}-${i}`} href={g.url || awsDirectory} className="group-row"><span className="group-pin"><MapPin size={18} /></span><span><strong>{g.name}</strong><span>{[g.city, g.country].filter(Boolean).join(', ')}</span></span><ArrowUpRight size={19} aria-hidden="true" /></ExternalLink>)}{!filtered.length && <div className="empty-results"><UsersRound /><h3>No groups found for that search.</h3><p>Try another city or country, or explore the latest listings on AWS.</p><button className="text-link" onClick={() => { setQuery(''); setCountry(''); setPage(0); }}>Clear filters <ArrowRight size={17} /></button></div>}</div>
        {pages > 1 && <div className="pagination"><button aria-label="Previous groups" disabled={!page} onClick={() => setPage(page - 1)}><ChevronLeft size={19} /></button><span>Page {page + 1} of {pages}</span><button aria-label="Next groups" disabled={page + 1 >= pages} onClick={() => setPage(page + 1)}><ChevronRight size={19} /></button></div>}
      </div>
    </div><div className="directory-footnote"><p>Includes November 2025 directory data and community updates.</p><ExternalLink href={awsDirectory} className="text-link">See the latest directory on AWS <ArrowUpRight size={17} /></ExternalLink></div>
  </div></section>;
}
function Footer() {
  return <><section className="contribute-section"><div className="wrap contribute-inner"><div><p className="eyebrow">Built by community. Shared with everyone.</p><h2>Your experience could be<br /> someone else’s head start.</h2><p>Share a useful resource, a tool you built, or a lesson from your group.</p></div><ExternalLink href={contribute} className="button button-light">Give back to the community <ArrowUpRight size={20} /></ExternalLink></div></section><footer className="site-footer wrap"><div className="footer-top"><div><Brand /><p>For the people who bring AWS communities together.</p></div><nav aria-label="Footer navigation"><a href="#resources">Leader resources</a><a href="#user-groups">Find a group</a><a href="#insights">Leader insights</a><ExternalLink href="https://www.instagram.com/canadiancloudninja/">Community on Instagram <ArrowUpRight size={14} /></ExternalLink></nav></div><div className="footer-bottom"><p>© {new Date().getFullYear()} AWS User Groups. Community, knowledge, and connection.</p><a href="#hero">Back to top ↑</a></div></footer></>;
}
export default function App() {
  return <><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content"><Hero /><Resources /><FeaturedCommunity /><CommunityMoments /><Tools /><Insights /><Directory /></main><Footer /></>;
}
