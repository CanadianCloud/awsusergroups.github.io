import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQ[] = [
    {
      question: 'How do I become a volunteer?',
      answer:
        'You can become a volunteer by filling out the registration form on our website. Once submitted, our team will review your application and contact you with next steps.',
    },
    {
      question: 'How do I become a volunteer?',
      answer:
        'Simply visit our volunteer page, complete the application form with your details, and our coordination team will reach out to you within 3-5 business days to discuss available opportunities.',
    },
    {
      question: 'How do I become a volunteer?',
      answer:
        'Getting started is easy! Navigate to the volunteer section, fill out the online form, and attend our orientation session. We welcome volunteers of all backgrounds and experience levels.',
    },
    {
      question: 'How do I become a volunteer?',
      answer:
        'To join our volunteer program, please register through our online portal. After registration, you will receive an email with information about upcoming orientation sessions and volunteer opportunities.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 md:py-24 bg-neutral-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          FAQs
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQs



