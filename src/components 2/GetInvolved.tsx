import { UserPlus, Calendar, Heart } from 'lucide-react'

interface InvolvementCard {
  icon: React.ReactNode
  title: string
  description: string
}

const GetInvolved = () => {
  const cards: InvolvementCard[] = [
    {
      icon: <UserPlus className="w-12 h-12 text-gray-700" />,
      title: 'Join Us',
      description: 'Become a member and be part of our community.',
    },
    {
      icon: <Calendar className="w-12 h-12 text-gray-700" />,
      title: 'Attend Events',
      description: 'Participate in our upcoming events and activities.',
    },
    {
      icon: <Heart className="w-12 h-12 text-gray-700" />,
      title: 'Volunteer',
      description: 'Help us make a difference in the community.',
    },
  ]

  return (
    <section id="involved" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Get Involved
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-neutral-300 p-8 rounded-lg flex flex-col items-center text-center hover:bg-neutral-400 transition-colors"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-700">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GetInvolved



