import React from "react";
import Marquee from "react-fast-marquee";

const Reviews = () => {
  const reviews = [
    {
      text: "The CAMIO TPU Clear Gloss has completely transformed my car’s look. It adds an incredible mirror-like shine that catches everyone’s attention. Plus, it protects the paint perfectly—worth every bit!",
      author: "Amit P.",
      rating: 5,
    },
    {
      text: "I tried the TPH Clear Gloss on my SUV, and it’s exactly what I needed. It’s protective, easy to clean, and has a nice shine. Perfect for everyday use!",
      author: "Rajesh K.",
      rating: 5,
    },
    {
      text: "I got the CAMIO TPU Black Gloss, and I’m thrilled with the self-healing feature. Minor scratches disappear with a little warmth, and the glossy finish makes the car shine. Highly recommended.",
      author: "Arjun M.",
      rating: 5,
    },
    {
      text: "I’ve had the CAMIO TPU Clear Gloss on my car for months now, and it’s still as glossy as day one. It’s incredibly durable and has held up even in rough weather conditions. Super satisfied!",
      author: "Priyanka S.",
      rating: 5,
    },
    {
      text: "The CAMIO TPH Matte was exactly what I was looking for. It has a great matte finish, and the protection is noticeable. I feel like I got a premium product without the premium price tag!",
      author: "Karan P.",
      rating: 5,
    },
    {
      text: "With CAMIO’s TPU series, I don’t worry about scratches or fading. The hydrophobic layer works wonders, especially during the rainy season. My car always looks polished.",
      author: "Vishal T.",
      rating: 4,
    },
  ];
  
  return (
    <div className="bg-white py-10 mx-2">
      <h2 className="text-center text-5xl text-gray-600 mb-12  tracking-wide drop-shadow-md">
        What Our Customers Are Saying
      </h2>


      <Marquee gradient={false} speed={50} className="overflow-hidden ">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="mx-6 p-6 bg-gray-100 rounded-lg shadow-md w-[300px] min-w-[300px] text-gray-800 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center mb-4">
                {Array(review.rating)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.371 1.24.588 1.81l-3.973 2.884a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.539 1.118l-3.973-2.884a1 1 0 00-1.176 0l-3.973 2.884c-.783.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L.98 9.401c-.784-.57-.38-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.674z" />
                    </svg>
                  ))}
              </div>
              <p className="text-lg mb-4 h-[224px]">{review.text}</p>
            </div>
            <p className="font-semibold text-gray-500">@{review.author}</p>
          </div>
        ))}
      </Marquee>
      <Marquee gradient={false} direction="right" speed={50} className="overflow-hidden my-10">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="mx-6 p-6 bg-gray-100 rounded-lg shadow-md w-[300px] min-w-[300px] text-gray-800 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center mb-4">
                {Array(review.rating)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.371 1.24.588 1.81l-3.973 2.884a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.539 1.118l-3.973-2.884a1 1 0 00-1.176 0l-3.973 2.884c-.783.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L.98 9.401c-.784-.57-.38-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.674z" />
                    </svg>
                  ))}
              </div>
              <p className="text-lg mb-4 h-[224px]">{review.text}</p>
            </div>
            <p className="font-semibold text-gray-500 py-2">@{review.author}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Reviews;
