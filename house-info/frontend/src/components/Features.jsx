import React from 'react';

function Features() {
  const features = [
    { title: 'Detailed Listings', desc: 'Access complete property info easily.' },
    { title: 'Market Insights', desc: 'Understand pricing trends and values.' },
    { title: 'Neighborhood Data', desc: 'Get info on schools, amenities, and more.' },
  ];

  return (
    <section className="features" id="features">
      {features.map((f, index) => (
        <div className="feature" key={index}>
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
