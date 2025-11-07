import React from 'react';

function Testimonials() {
  const testimonials = [
    { quote: "House Info made finding our dream home a breeze!" },
    { quote: "The insights are so detailed, we felt confident buying." },
    { quote: "I love how clean and simple the interface is." },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Users Say</h2>
      {testimonials.map((t, index) => (
        <div className="testimonial" key={index}>
          "{t.quote}"
        </div>
      ))}
    </section>
  );
}

export default Testimonials;
