import { business, reviews } from '../data/data'
import Icon from './Icon'

function Stars({ rating, size = 'w-4 h-4' }: { rating: number; size?: string }) {
  return (
    <div className={`flex text-gstar mb-3`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }, (_, i) => (
        <Icon key={i} name="star" className={size} />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-line/40 border-y border-line py-14">
      <div className="max-w-300 mx-auto px-6">
        <div className="reveal flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-offwhite shadow-rest flex items-center justify-center font-display text-2xl font-bold text-gblue" aria-hidden="true">
              G
            </div>
            <div>
              <Stars rating={5} size="w-5 h-5" />
              <p className="text-sm font-bold text-navy">
                {business.google.rating} Average Rating · {business.google.reviewCount} Reviews
              </p>
            </div>
          </div>
          <a
            href={business.google.reviewsUrl}
            target="_blank"
            rel="noopener"
            className="text-sm font-bold text-orange-deep whitespace-nowrap hover:underline"
          >
            Read all {business.google.reviewCount} Reviews →
          </a>
        </div>

        <div
          className="reveal flex gap-5 overflow-x-auto snap-x snap-mandatory pb-3"
          tabIndex={0}
          aria-label="Customer reviews, scroll horizontally"
        >
          {reviews.map((review) => (
            <article
              key={review.name}
              className="snap-start shrink-0 w-75 md:w-90 rounded-xl bg-offwhite border border-line p-6 shadow-rest"
            >
              <Stars rating={review.rating} />
              <blockquote className="italic text-[15px] leading-6 text-muted mb-4">
                "{review.text}"
              </blockquote>
              <cite className="not-italic text-sm font-bold text-navy">
                — {review.name}, {review.suburb}
              </cite>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
