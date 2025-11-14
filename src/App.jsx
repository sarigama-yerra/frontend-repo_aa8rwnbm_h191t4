import React from 'react'

function App() {
  const products = [
    {
      id: 'chocolate',
      name: 'Chocolate Pie',
      description: 'Rich cocoa filling with buttery crust',
      price: 12.99,
      image:
        'https://images.pexels.com/photos/4109993/pexels-photo-4109993.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 'apple',
      name: 'Apple Pie',
      description: 'Cinnamon-spiced apples, golden lattice top',
      price: 11.49,
      image:
        'https://images.pexels.com/photos/669734/pexels-photo-669734.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 'milk',
      name: 'Milk Pie',
      description: 'Silky custard with a hint of vanilla',
      price: 13.49,
      image:
        'https://images.pexels.com/photos/11152551/pexels-photo-11152551.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-emerald-50">
      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-amber-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-amber-400 shadow-inner" />
            <span className="text-2xl font-extrabold tracking-tight text-amber-900">
              PILEMBU
            </span>
          </div>
          <nav className="text-sm text-amber-800/80">
            Sweet Pies • Chocolate • Apple • Milk
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-amber-900 leading-tight">
              Handcrafted Sweet Pies
            </h1>
            <p className="mt-4 text-amber-800/80 text-lg">
              Welcome to PILEMBU — your home for irresistible pies made with
              love and the finest ingredients.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-lg bg-amber-600 text-white font-semibold px-5 py-3 shadow hover:bg-amber-700 transition"
              >
                View Menu
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-white text-amber-900 font-semibold px-5 py-3 border border-amber-200 shadow-sm hover:bg-amber-50 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-amber-200/60 to-rose-200/60 rounded-3xl blur-xl" />
            <img
              src={products[0].image}
              alt="Chocolate pie"
              className="relative w-full h-72 md:h-96 object-cover rounded-3xl shadow-xl border border-white/60"
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="menu" className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
          Our Bestsellers
        </h2>
        <p className="text-amber-800/80 mb-8">
          Three classic flavors, perfected.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article
              key={p.id}
              className="group bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition border border-amber-100"
            >
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-56 w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-bold text-amber-900">{p.name}</h3>
                  <span className="text-lg font-extrabold text-emerald-700">
                    ${p.price.toFixed(2)}
                  </span>
                </div>
                <p className="mt-2 text-sm text-amber-800/80">{p.description}</p>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 rounded-lg bg-amber-600 text-white font-semibold py-2 shadow hover:bg-amber-700 transition">
                    Order
                  </button>
                  <button className="flex-1 rounded-lg bg-white text-amber-900 font-semibold py-2 border border-amber-200 hover:bg-amber-50 transition">
                    Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact / Footer */}
      <section id="contact" className="bg-white/70 border-t border-amber-100">
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-amber-900">Get in touch</h3>
            <p className="mt-2 text-amber-800/80">
              Want to place an order or ask about custom pies? We’d love to hear from you.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white rounded-xl p-4 border border-amber-100 shadow-sm"
          >
            <div className="grid sm:grid-cols-2 gap-3">
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-amber-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                type="email"
                required
                placeholder="Email or phone"
                className="w-full rounded-lg border border-amber-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <textarea
              placeholder="Your message"
              rows="3"
              className="mt-3 w-full rounded-lg border border-amber-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button className="mt-3 w-full rounded-lg bg-amber-600 text-white font-semibold py-2 hover:bg-amber-700 transition">
              Send
            </button>
          </form>
        </div>
        <div className="text-center text-amber-800/70 text-sm py-6">
          © {new Date().getFullYear()} PILEMBU — Sweet Pies
        </div>
      </section>
    </div>
  )
}

export default App
